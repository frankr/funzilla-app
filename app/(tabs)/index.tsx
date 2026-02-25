import { View, Text, Pressable, ScrollView, FlatList, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@/components/Icon";
import { useAppState } from "@/contexts/AppContext";
import {
  IMAGES,
  TOP_5_ACTIVITIES,
  FEED_ACTIVITIES,
  CarouselActivity,
} from "@/constants/MockData";

function CarouselCard({
  item,
  onPress,
}: {
  item: CarouselActivity;
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
        <Image
          source={item.image}
          className="w-full h-full"
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.6)"]}
          className="absolute inset-0"
        />
        <View
          className={`absolute left-0 top-0 h-10 w-10 items-center justify-center rounded-br-2xl ${
            item.rank === 1 ? "bg-primary" : "bg-slate-800"
          }`}
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <Text className="text-xl font-sans-bold text-white">{item.rank}</Text>
        </View>
        <View
          className={`absolute bottom-3 left-3 flex-row items-center gap-1 rounded-full px-2.5 py-1 ${
            item.badge.type === "match"
              ? "bg-white/95"
              : "bg-secondary-orange"
          }`}
        >
          <Icon
            name={item.badge.type === "match" ? "star" : "local-fire-department"}
            size={14}
            color={item.badge.type === "match" ? "#2b9dee" : "#fff"}
          />
          <Text
            className={`text-xs font-sans-bold ${
              item.badge.type === "match" ? "text-primary" : "text-white"
            }`}
          >
            {item.badge.label}
          </Text>
        </View>
      </View>
      <View className="p-4">
        <Text className="text-lg font-sans-bold text-slate-900 leading-tight">
          {item.title}
        </Text>
        <View className="mt-2 flex-row items-center">
          <Icon name="calendar-today" size={16} color="#94a3b8" />
          <Text className="text-sm text-slate-500 font-sans ml-1">
            {item.schedule}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function Home() {
  const router = useRouter();
  const { activeContext, setActiveContext } = useAppState();

  const navToDetail = () => router.push("/detail/1");

  const contextOptions = [
    { key: "family", label: "Family" },
    { key: "leo", label: "Leo" },
    { key: "mia", label: "Mia" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-surface-light" edges={["top"]}>
      {/* Header Section */}
      <View className="bg-white border-b border-slate-100 px-5 pt-2 pb-4">
        <View className="flex-row items-center justify-between mb-4">
          <Pressable className="flex-row items-center gap-1">
            <Icon name="location-on" size={20} color="#2b9dee" />
            <Text className="text-lg font-sans-bold tracking-tight text-slate-900">
              Brooklyn, NY
            </Text>
            <Icon name="expand-more" size={20} color="#94a3b8" />
          </Pressable>
          <View className="relative">
            <View className="h-10 w-10 overflow-hidden rounded-full border-2 border-slate-100">
              <Image
                source={IMAGES.userAvatar}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            <View className="absolute -bottom-1 -right-1 h-5 w-9 items-center justify-center rounded-full bg-secondary-orange"
              style={{ borderWidth: 2, borderColor: "#fff" }}
            >
              <Text className="text-[10px] font-sans-bold text-white">PRO</Text>
            </View>
          </View>
        </View>

        {/* Toggle */}
        <View className="w-full rounded-2xl bg-slate-100 p-1">
          <View className="flex-row w-full">
            {contextOptions.map((opt) => (
              <Pressable
                key={opt.key}
                onPress={() => setActiveContext(opt.key)}
                className={`flex-1 rounded-xl py-2.5 items-center ${
                  activeContext === opt.key ? "bg-white" : ""
                }`}
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
                <Text
                  className={`text-sm font-sans-semibold ${
                    activeContext === opt.key
                      ? "text-primary"
                      : "text-slate-500"
                  }`}
                >
                  {opt.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Top 5 Section */}
        <View className="mt-6 pl-5">
          <View className="mb-4 flex-row items-end justify-between pr-5">
            <View>
              <Text className="text-2xl font-sans-bold text-slate-900">
                Top 5 for You
              </Text>
              <Text className="text-sm text-slate-500 font-sans">
                Curated based on your interests
              </Text>
            </View>
            <Pressable>
              <Text className="text-sm font-sans-semibold text-primary">
                See All
              </Text>
            </Pressable>
          </View>

          <FlatList
            data={TOP_5_ACTIVITIES}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={296}
            decelerationRate="fast"
            contentContainerStyle={{ paddingRight: 20, gap: 16 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CarouselCard item={item} onPress={navToDetail} />
            )}
          />
        </View>

        {/* Filters */}
        <View className="flex-row items-center gap-2 py-3 px-5 mt-4 border-b border-slate-100">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-2">
              <Pressable className="flex-row shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 active:scale-95"
                style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
              >
                <Text className="text-sm font-sans-semibold text-slate-700">
                  Price
                </Text>
                <Icon name="expand-more" size={18} color="#64748b" />
              </Pressable>
              <Pressable className="flex-row shrink-0 items-center gap-1 rounded-full bg-primary/10 px-4 py-2 active:scale-95"
                style={{ borderWidth: 1, borderColor: "#e2e8f0", shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
              >
                <Text className="text-sm font-sans-semibold text-primary">
                  Age: 4-6
                </Text>
                <Icon name="close" size={18} color="#2b9dee" />
              </Pressable>
              <Pressable className="flex-row shrink-0 items-center rounded-full border border-slate-200 bg-white px-4 py-2 active:scale-95"
                style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
              >
                <Text className="text-sm font-sans-semibold text-slate-700">
                  Indoor
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>

        {/* Feed Header */}
        <View className="px-5 mt-6 mb-4 flex-row items-center justify-between">
          <Text className="text-lg font-sans-bold text-slate-900">
            All Activities
          </Text>
          <View className="flex-row items-center rounded-lg bg-slate-100 p-1">
            <Pressable className="h-8 w-8 items-center justify-center rounded bg-white"
              style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
            >
              <Icon name="view-agenda" size={20} color="#1e293b" />
            </Pressable>
            <Pressable className="h-8 w-8 items-center justify-center rounded">
              <Icon name="grid-view" size={20} color="#94a3b8" />
            </Pressable>
          </View>
        </View>

        {/* Feed Items */}
        <View className="px-5 gap-5 pb-8">
          {FEED_ACTIVITIES.map((activity) => (
            <Pressable
              key={activity.id}
              onPress={navToDetail}
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
                <Image
                  source={activity.image}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <Pressable className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5"
                  style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 1 }}
                >
                  <Icon name="favorite" size={20} color="#94a3b8" />
                </Pressable>
                {activity.memberBadge && (
                  <View className="absolute bottom-3 left-3 rounded-lg bg-secondary-mint px-2 py-1"
                    style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 1 }}
                  >
                    <Text className="text-xs font-sans-bold text-slate-900">
                      {activity.memberBadge}
                    </Text>
                  </View>
                )}
              </View>
              <View className="px-1 mt-3">
                <View className="flex-row items-start justify-between">
                  <View className="flex-1">
                    <Text className="text-lg font-sans-bold text-slate-900">
                      {activity.title}
                    </Text>
                    <Text className="text-sm text-slate-500 font-sans">
                      {activity.distance} &bull; {activity.provider}
                    </Text>
                  </View>
                  <Text
                    className="text-lg font-sans-bold"
                    style={{ color: activity.priceColor }}
                  >
                    {activity.price}
                  </Text>
                </View>
                {(activity.ageRange || activity.locationType) && (
                  <View className="mt-3 flex-row items-center gap-2">
                    {activity.ageRange && (
                      <View className="flex-row items-center gap-1 rounded-md bg-slate-100 px-2 py-1">
                        <Icon name="child-care" size={14} color="#475569" />
                        <Text className="text-xs font-sans-medium text-slate-600">
                          {activity.ageRange}
                        </Text>
                      </View>
                    )}
                    {activity.locationType && (
                      <View className="flex-row items-center gap-1 rounded-md bg-slate-100 px-2 py-1">
                        <Icon name="roofing" size={14} color="#475569" />
                        <Text className="text-xs font-sans-medium text-slate-600">
                          {activity.locationType}
                        </Text>
                      </View>
                    )}
                  </View>
                )}
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
