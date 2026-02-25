import { useEffect, useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView, FlatList, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@/components/Icon";
import { useAppState } from "@/contexts/AppContext";
import { IMAGES } from "@/constants/MockData";
import { ActivityListItem, fetchActivities } from "@/services/activityApi";

function imageSourceForActivity(activity: ActivityListItem) {
  if (activity.heroImageUrl) {
    return { uri: activity.heroImageUrl };
  }
  return IMAGES.museumCard;
}

function CarouselCard({
  activity,
  rank,
  onPress,
}: {
  activity: ActivityListItem;
  rank: number;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-2xl bg-white overflow-hidden active:scale-[0.98]"
      style={{
        width: 280,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: "#f1f5f9",
      }}
    >
      <View className="h-40 w-full bg-slate-200 relative overflow-hidden">
        <Image source={imageSourceForActivity(activity)} className="w-full h-full" resizeMode="cover" />
        <LinearGradient colors={["transparent", "rgba(0,0,0,0.6)"]} className="absolute inset-0" />
        <View
          className={`absolute left-0 top-0 h-10 w-10 items-center justify-center rounded-br-2xl ${
            rank === 1 ? "bg-primary" : "bg-slate-800"
          }`}
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <Text className="text-xl font-sans-bold text-white">{rank}</Text>
        </View>
      </View>
      <View className="p-4">
        <Text className="text-lg font-sans-bold text-slate-900 leading-tight">{activity.name}</Text>
        <Text className="mt-2 text-sm text-slate-500 font-sans">{activity.category}</Text>
      </View>
    </Pressable>
  );
}

export default function Home() {
  const router = useRouter();
  const { activeContext, setActiveContext } = useAppState();
  const [activities, setActivities] = useState<ActivityListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadActivities() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchActivities({
          status: "ready",
          page: 1,
          pageSize: 100,
        });
        if (!cancelled) {
          setActivities(response.items);
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : "Unknown error";
          setError(message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadActivities();
    return () => {
      cancelled = true;
    };
  }, []);

  const contextOptions = [
    { key: "family", label: "Family" },
    { key: "leo", label: "Leo" },
    { key: "mia", label: "Mia" },
  ];

  const topActivities = useMemo(() => activities.slice(0, 5), [activities]);

  const openDetail = (externalId: string) => {
    router.push(`/detail/${externalId}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface-light" edges={["top"]}>
      <View className="bg-white border-b border-slate-100 px-5 pt-2 pb-4">
        <View className="flex-row items-center justify-between mb-4">
          <Pressable className="flex-row items-center gap-1">
            <Icon name="location-on" size={20} color="#2b9dee" />
            <Text className="text-lg font-sans-bold tracking-tight text-slate-900">Houston, TX</Text>
          </Pressable>
          <View className="relative">
            <View className="h-10 w-10 overflow-hidden rounded-full border-2 border-slate-100">
              <Image source={IMAGES.userAvatar} className="w-full h-full" resizeMode="cover" />
            </View>
            <View
              className="absolute -bottom-1 -right-1 h-5 w-9 items-center justify-center rounded-full bg-secondary-orange"
              style={{ borderWidth: 2, borderColor: "#fff" }}
            >
              <Text className="text-[10px] font-sans-bold text-white">PRO</Text>
            </View>
          </View>
        </View>

        <View className="w-full rounded-2xl bg-slate-100 p-1">
          <View className="flex-row w-full">
            {contextOptions.map((opt) => (
              <Pressable
                key={opt.key}
                onPress={() => setActiveContext(opt.key)}
                className={`flex-1 rounded-xl py-2.5 items-center ${activeContext === opt.key ? "bg-white" : ""}`}
                style={
                  activeContext === opt.key
                    ? {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.05,
                        shadowRadius: 2,
                        elevation: 1,
                      }
                    : undefined
                }
              >
                <Text className={`text-sm font-sans-semibold ${activeContext === opt.key ? "text-primary" : "text-slate-500"}`}>
                  {opt.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="mt-6 pl-5">
          <View className="mb-4 flex-row items-end justify-between pr-5">
            <View>
              <Text className="text-2xl font-sans-bold text-slate-900">Top Activities</Text>
              <Text className="text-sm text-slate-500 font-sans">Great options for your family</Text>
            </View>
          </View>

          {loading ? (
            <View className="mr-5 rounded-2xl border border-slate-200 bg-white px-4 py-6">
              <Text className="text-sm text-slate-500">Loading activities...</Text>
            </View>
          ) : null}

          {error ? (
            <View className="mr-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-6">
              <Text className="text-sm text-rose-700">Could not load activities: {error}</Text>
            </View>
          ) : null}

          {!loading && !error ? (
            <FlatList
              data={topActivities}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={296}
              decelerationRate="fast"
              contentContainerStyle={{ paddingRight: 20, gap: 16 }}
              keyExtractor={(item) => item.externalId}
              renderItem={({ item, index }) => (
                <CarouselCard activity={item} rank={index + 1} onPress={() => openDetail(item.externalId)} />
              )}
              ListEmptyComponent={
                <View className="mr-5 rounded-2xl border border-slate-200 bg-white px-4 py-6">
                  <Text className="text-sm text-slate-500">No activities found yet.</Text>
                </View>
              }
            />
          ) : null}
        </View>

        <View className="px-5 mt-6 mb-4 flex-row items-center justify-between">
          <Text className="text-lg font-sans-bold text-slate-900">All Activities</Text>
        </View>

        <View className="px-5 gap-5 pb-8">
          {activities.map((activity) => (
            <Pressable
              key={activity.externalId}
              onPress={() => openDetail(activity.externalId)}
              className="rounded-2xl bg-white p-3 active:scale-[0.98]"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
                elevation: 2,
                borderWidth: 1,
                borderColor: "#f1f5f9",
              }}
            >
              <View className="relative h-48 w-full overflow-hidden rounded-xl">
                <Image source={imageSourceForActivity(activity)} className="w-full h-full" resizeMode="cover" />
              </View>
              <View className="px-1 mt-3">
                <View className="flex-1">
                  <Text className="text-lg font-sans-bold text-slate-900">{activity.name}</Text>
                  <Text className="text-sm text-slate-500 font-sans">
                    {activity.location ?? "Location pending review"} • {activity.category}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
