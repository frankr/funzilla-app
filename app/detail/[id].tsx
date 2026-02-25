import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@/components/Icon";
import { DETAIL_ACTIVITY } from "@/constants/MockData";

export default function ActivityDetail() {
  const router = useRouter();
  const activity = DETAIL_ACTIVITY;

  const stats = [
    {
      icon: "child-care",
      iconBg: "#ffedd5",
      iconColor: "#ea580c",
      label: "Ages",
      value: activity.ageRange,
    },
    {
      icon: "payment",
      iconBg: "#d1fae5",
      iconColor: "#059669",
      label: "Price",
      value: activity.price,
    },
    {
      icon: "straighten",
      iconBg: "rgba(43,157,238,0.1)",
      iconColor: "#2b9dee",
      label: "Distance",
      value: activity.distance,
    },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Hero Header */}
      <View className="relative w-full" style={{ height: 280 }}>
        <View className="absolute inset-0 overflow-hidden" style={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
          <Image
            source={activity.image}
            className="w-full h-full"
            resizeMode="cover"
          />
          <LinearGradient
            colors={["rgba(0,0,0,0.4)", "transparent", "transparent"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            className="absolute inset-0"
          />
        </View>
        <SafeAreaView edges={["top"]} className="absolute top-0 w-full">
          <View className="px-4 pt-2 flex-row justify-between items-start">
            <Pressable
              onPress={() => router.back()}
              className="w-10 h-10 rounded-full bg-white/20 items-center justify-center"
            >
              <Icon name="arrow-back" size={24} color="#fff" />
            </Pressable>
            <Pressable className="w-10 h-10 rounded-full bg-white/20 items-center justify-center">
              <Icon name="favorite" size={24} color="#fff" />
            </Pressable>
          </View>
        </SafeAreaView>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1 px-5 -mt-6 z-10"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Title Card */}
        <View className="bg-white rounded-xl p-5 mb-6"
          style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2, borderWidth: 1, borderColor: "#f1f5f9" }}
        >
          <View className="flex-row justify-between items-start mb-2">
            <View className="flex-1 mr-4">
              <Text className="text-2xl font-sans-bold tracking-tight text-slate-900 leading-tight">
                {activity.title}
              </Text>
              <Text className="text-sm font-sans-medium text-slate-500 mt-1">
                {activity.category}
              </Text>
            </View>
            <View className="items-end">
              <View className="flex-row items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                <Icon name="star" size={18} color="#16a34a" />
                <Text className="text-sm font-sans-bold text-slate-900">
                  {activity.rating}
                </Text>
              </View>
              <Text className="text-xs text-slate-400 font-sans mt-1">
                {activity.reviewCount} reviews
              </Text>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row gap-3 mb-6">
          {stats.map((stat) => (
            <View
              key={stat.label}
              className="flex-1 items-center justify-center bg-slate-50 p-3 rounded-2xl border border-slate-100"
            >
              <View
                className="w-10 h-10 rounded-full items-center justify-center mb-2"
                style={{ backgroundColor: stat.iconBg }}
              >
                <Icon name={stat.icon} size={24} color={stat.iconColor} />
              </View>
              <Text className="text-xs font-sans-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                {stat.label}
              </Text>
              <Text className="text-sm font-sans-bold text-slate-900">
                {stat.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Membership */}
        <View className="relative overflow-hidden bg-primary/10 rounded-2xl p-5 mb-6 border border-primary/20">
          <View className="absolute -right-6 -top-6 w-24 h-24 bg-primary/20 rounded-full" />
          <View className="flex-row items-center justify-between gap-4">
            <View className="flex-1">
              <Text className="text-lg font-sans-bold text-slate-900 leading-tight mb-1">
                Funzilla Members save {activity.memberSaving} on entry
              </Text>
              <Text className="text-sm text-slate-600 font-sans">
                Join today for exclusive perks.
              </Text>
            </View>
            <Pressable
              className="bg-primary py-2.5 px-5 rounded-full active:scale-95"
              style={{
                shadowColor: "#2b9dee",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 6,
              }}
            >
              <Text className="text-white text-sm font-sans-bold">Join Now</Text>
            </Pressable>
          </View>
        </View>

        {/* Description */}
        <View className="mb-6">
          <Text className="text-lg font-sans-bold text-slate-900 mb-3">
            About this activity
          </Text>
          <Text className="text-slate-600 leading-relaxed font-sans text-[15px]">
            {activity.description}
          </Text>
          <Pressable className="mt-2 flex-row items-center gap-1">
            <Text className="text-primary font-sans-semibold text-sm">
              Read more
            </Text>
            <Icon name="expand-more" size={16} color="#2b9dee" />
          </Pressable>
        </View>

        {/* Amenities */}
        <View className="mb-6">
          <Text className="text-lg font-sans-bold text-slate-900 mb-3">
            Amenities
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {activity.amenities.map((item) => (
              <View
                key={item}
                className="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200"
              >
                <Icon name="check" size={16} color="#475569" />
                <Text className="text-xs font-sans-medium text-slate-600">
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Location */}
        <View className="mb-2">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-sans-bold text-slate-900">
              Location
            </Text>
            <Pressable>
              <Text className="text-primary text-sm font-sans-semibold">
                View on map
              </Text>
            </Pressable>
          </View>
          <View className="rounded-xl overflow-hidden h-40 w-full relative">
            <Image
              source={activity.mapImage}
              className="w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full items-center justify-center"
              style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 8 }}
            >
              <Icon name="location-on" size={24} color="#fff" />
            </View>
          </View>
          <Text className="text-sm text-slate-500 font-sans mt-2">
            {activity.address}
          </Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 pb-8"
        style={{ shadowColor: "#000", shadowOffset: { width: 0, height: -2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 8 }}
      >
        <View className="flex-row gap-3">
          <Pressable className="flex-1 flex-row items-center justify-center gap-2 bg-slate-100 py-3.5 px-4 rounded-xl">
            <Icon name="directions" size={20} color="#1e293b" />
            <Text className="text-sm font-sans-bold text-slate-900">
              Directions
            </Text>
          </Pressable>
          <Pressable
            className="flex-[2] flex-row items-center justify-center gap-2 bg-primary py-3.5 px-4 rounded-xl active:scale-95"
            style={{
              shadowColor: "#2b9dee",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            }}
          >
            <Text className="text-sm font-sans-bold text-white">
              Book Ticket • {activity.bookPrice}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
