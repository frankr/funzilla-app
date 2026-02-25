import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable, ScrollView, Image, Linking, useWindowDimensions } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@/components/Icon";
import { IMAGES } from "@/constants/MockData";
import { ActivityDetail, fetchActivityDetail } from "@/services/activityApi";

function formatPrice(value: number | null): string {
  if (!value || value < 1 || value > 4) {
    return "N/A";
  }
  return "$".repeat(value);
}

function formatBool(value: boolean | null): string | null {
  if (value === null) {
    return null;
  }
  return value ? "Yes" : "No";
}

function buildAmenities(activity: ActivityDetail): string[] {
  const items: string[] = [];
  if (activity.locationType) items.push(activity.locationType);
  if (activity.indoorOutdoor === "both") items.push("Indoor + Outdoor");
  if (activity.indoorOutdoor === "indoor") items.push("Indoor");
  if (activity.indoorOutdoor === "outdoor") items.push("Outdoor");

  const party = formatBool(activity.goodForParties);
  if (party) items.push(`Good for Parties: ${party}`);

  const seasonal = formatBool(activity.seasonal);
  if (seasonal) items.push(`Seasonal: ${seasonal}`);

  const pets = formatBool(activity.petFriendly);
  if (pets) items.push(`Pet Friendly: ${pets}`);

  const parking = formatBool(activity.parkingAvailable);
  if (parking) items.push(`Parking: ${parking}`);

  return items;
}

function getIdParam(rawValue: string | string[] | undefined): string | null {
  if (!rawValue) return null;
  if (Array.isArray(rawValue)) {
    return rawValue[0] ?? null;
  }
  return rawValue;
}

export default function ActivityDetailScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width: screenWidth } = useWindowDimensions();
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const externalId = getIdParam(params.id);
  const [activity, setActivity] = useState<ActivityDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const heroScrollRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadActivity() {
      if (!externalId) {
        setError("Missing activity ID.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const detail = await fetchActivityDetail(externalId);
        if (!cancelled) {
          setActivity(detail);
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : "Unknown error";
          setError(message);
          setActivity(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadActivity();
    return () => {
      cancelled = true;
    };
  }, [externalId]);

  const readyImages = useMemo(
    () => (activity?.images ?? []).filter((image) => image.status === "ready" && image.publicUrl),
    [activity],
  );

  const heroImages = useMemo(() => {
    if (readyImages.length === 0) {
      return [{ key: "fallback", publicUrl: null }];
    }

    const sorted = [...readyImages].sort((a, b) => a.rankOrder - b.rankOrder);
    return sorted.map((image, index) => ({
      key: `${image.rankOrder}-${image.sourceFilename ?? index}`,
      publicUrl: image.publicUrl,
    }));
  }, [readyImages]);

  useEffect(() => {
    setHeroIndex(0);
  }, [externalId, heroImages.length]);

  const amenities = useMemo(() => {
    if (!activity) return [];
    return buildAmenities(activity);
  }, [activity]);

  const stats = useMemo(() => {
    if (!activity) return [];
    return [
      {
        icon: "child-care",
        iconBg: "#ffedd5",
        iconColor: "#ea580c",
        label: "Ages",
        value: activity.ageGroups.length > 0 ? activity.ageGroups.join(", ") : "N/A",
      },
      {
        icon: "payment",
        iconBg: "#d1fae5",
        iconColor: "#059669",
        label: "Price",
        value: formatPrice(activity.priceLevel),
      },
    ];
  }, [activity]);

  const openDirections = async () => {
    if (!activity) return;
    const query = encodeURIComponent(activity.primaryLocation ?? activity.name);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    await Linking.openURL(url);
  };

  const openWebsite = () => {
    if (!activity?.websiteUrl) return;
    router.push({
      pathname: "/webview",
      params: {
        url: activity.websiteUrl,
        title: activity.name,
      },
    });
  };

  const contentPaddingBottom = insets.bottom + 28;
  const hasMultipleHeroImages = heroImages.length > 1;

  const goToHeroIndex = (index: number) => {
    const maxIndex = Math.max(heroImages.length - 1, 0);
    const boundedIndex = Math.max(0, Math.min(index, maxIndex));
    heroScrollRef.current?.scrollTo({
      x: boundedIndex * screenWidth,
      y: 0,
      animated: true,
    });
    setHeroIndex(boundedIndex);
  };

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-base text-slate-600">Loading activity...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error || !activity) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center px-6 gap-4">
          <Text className="text-base text-rose-700 text-center">Could not load activity: {error ?? "Unknown error"}</Text>
          <Pressable onPress={() => router.back()} className="rounded-xl bg-primary px-4 py-2">
            <Text className="text-white font-sans-bold">Back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        contentContainerStyle={{ paddingBottom: contentPaddingBottom }}
      >
        <View className="relative w-full" style={{ height: 300 }}>
          <ScrollView
            ref={heroScrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            onMomentumScrollEnd={(event) => {
              const nextIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
              setHeroIndex(nextIndex);
            }}
          >
            {heroImages.map((heroImage) => (
              <View key={heroImage.key} style={{ width: screenWidth, height: 300 }}>
                <Image source={heroImage.publicUrl ? { uri: heroImage.publicUrl } : IMAGES.detailHero} className="w-full h-full" resizeMode="cover" />
              </View>
            ))}
          </ScrollView>
          <LinearGradient
            pointerEvents="none"
            colors={["rgba(0,0,0,0.35)", "transparent", "transparent"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="absolute inset-0"
          />
          <Pressable
            onPress={() => router.back()}
            className="absolute left-4 h-10 w-10 items-center justify-center rounded-full"
            style={{
              top: 12,
              zIndex: 30,
              backgroundColor: "rgba(255,255,255,0.9)",
            }}
          >
            <Icon name="arrow-back" size={22} color="#1e293b" />
          </Pressable>
          {hasMultipleHeroImages && heroIndex > 0 ? (
            <Pressable
              onPress={() => goToHeroIndex(heroIndex - 1)}
              className="absolute h-9 w-9 items-center justify-center rounded-full"
              style={{
                top: "50%",
                left: 12,
                marginTop: -18,
                zIndex: 20,
                backgroundColor: "rgba(15,23,42,0.45)",
              }}
            >
              <Icon name="chevron-left" size={24} color="#fff" />
            </Pressable>
          ) : null}
          {hasMultipleHeroImages && heroIndex < heroImages.length - 1 ? (
            <Pressable
              onPress={() => goToHeroIndex(heroIndex + 1)}
              className="absolute h-9 w-9 items-center justify-center rounded-full"
              style={{
                top: "50%",
                right: 12,
                marginTop: -18,
                zIndex: 20,
                backgroundColor: "rgba(15,23,42,0.45)",
              }}
            >
              <Icon name="chevron-right" size={24} color="#fff" />
            </Pressable>
          ) : null}
          {heroImages.length > 1 ? (
            <View className="absolute bottom-4 left-0 right-0 flex-row items-center justify-center gap-2">
              {heroImages.map((heroImage, index) => (
                <View key={`dot-${heroImage.key}`} className={`h-2 w-2 rounded-full ${index === heroIndex ? "bg-white" : "bg-white/50"}`} />
              ))}
            </View>
          ) : null}
        </View>

        <View
          className="bg-white border-b border-slate-100 px-5 pb-4 pt-4"
          style={{ marginTop: -24, borderTopLeftRadius: 28, borderTopRightRadius: 28 }}
        >
          <View className="flex-1">
            <Text className="text-2xl font-sans-bold tracking-tight text-slate-900 leading-tight" numberOfLines={1}>
              {activity.name}
            </Text>
            <Text className="text-sm font-sans-medium text-slate-500 mt-1" numberOfLines={1}>
              {activity.activityTypes.length > 0 ? activity.activityTypes.join(" • ") : "Activity"}
            </Text>
          </View>
        </View>

        <View className="bg-white px-5 pt-5">
          <View className="flex-row gap-3 mb-6">
            {stats.map((stat) => (
              <View key={stat.label} className="flex-1 items-center justify-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <View className="w-10 h-10 rounded-full items-center justify-center mb-2" style={{ backgroundColor: stat.iconBg }}>
                  <Icon name={stat.icon} size={24} color={stat.iconColor} />
                </View>
                <Text className="text-xs font-sans-semibold text-slate-400 uppercase tracking-wider mb-0.5">{stat.label}</Text>
                <Text className="text-sm font-sans-bold text-slate-900 text-center">{stat.value}</Text>
              </View>
            ))}
          </View>

          <View className="mb-6">
            <Text className="text-lg font-sans-bold text-slate-900 mb-3">About this activity</Text>
            <Text className="text-slate-600 leading-relaxed font-sans text-[15px]">{activity.description ?? "Description pending review."}</Text>
          </View>

          <View className="mb-6">
            <Text className="text-lg font-sans-bold text-slate-900 mb-3">Amenities & Attributes</Text>
            <View className="flex-row flex-wrap gap-3">
              {amenities.length === 0 ? (
                <Text className="text-sm text-slate-500">No attributes available yet.</Text>
              ) : (
                amenities.map((item) => (
                  <View key={item} className="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                    <Icon name="check" size={16} color="#475569" />
                    <Text className="text-xs font-sans-medium text-slate-600">{item}</Text>
                  </View>
                ))
              )}
            </View>
          </View>

          <View className="mb-2">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-lg font-sans-bold text-slate-900">Location</Text>
              <Pressable onPress={openDirections}>
                <Text className="text-primary text-sm font-sans-semibold">View on map</Text>
              </Pressable>
            </View>
            <View className="rounded-xl overflow-hidden h-40 w-full relative">
              <Image source={IMAGES.mapBackground} className="w-full h-full" resizeMode="cover" />
              <View
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full items-center justify-center"
                style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 8 }}
              >
                <Icon name="location-on" size={24} color="#fff" />
              </View>
            </View>
            <Text className="text-sm text-slate-500 font-sans mt-2">{activity.primaryLocation ?? "Location pending review"}</Text>
          </View>

          <View className="mt-6 mb-2">
            <View className="flex-row gap-3">
              <Pressable onPress={openDirections} className="flex-1 flex-row items-center justify-center gap-2 bg-slate-100 py-3.5 px-4 rounded-xl">
                <Icon name="directions" size={20} color="#1e293b" />
                <Text className="text-sm font-sans-bold text-slate-900">Directions</Text>
              </Pressable>
              <Pressable
                onPress={openWebsite}
                disabled={!activity.websiteUrl}
                className={`flex-[2] flex-row items-center justify-center gap-2 py-3.5 px-4 rounded-xl ${activity.websiteUrl ? "bg-primary active:scale-95" : "bg-slate-300"}`}
                style={
                  activity.websiteUrl
                    ? {
                        shadowColor: "#2b9dee",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 8,
                        elevation: 8,
                      }
                    : undefined
                }
              >
                <Text className="text-sm font-sans-bold text-white">{activity.websiteUrl ? "Open Website" : "Website Unavailable"}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
