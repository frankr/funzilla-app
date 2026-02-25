import { View, Text, Pressable, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@/components/Icon";
import { IMAGES, MAP_DATA } from "@/constants/MockData";

export default function SearchMap() {
  const router = useRouter();
  const { activePin } = MAP_DATA;

  return (
    <View className="flex-1 bg-white relative">
      {/* Map Background Layer */}
      <View className="absolute inset-0">
        <Image
          source={IMAGES.mapBackground}
          className="w-full h-full"
          resizeMode="cover"
          style={{ opacity: 0.8 }}
        />

        {/* Active Pin */}
        <Pressable
          onPress={() => router.push("/detail/1")}
          className="absolute items-center gap-1"
          style={{ top: "45%", left: "45%", transform: [{ translateX: -24 }, { translateY: -48 }] }}
        >
          <View className="bg-white px-3 py-1.5 rounded-lg mb-1"
            style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8, elevation: 8 }}
          >
            <Text className="text-xs font-sans-bold text-slate-800">
              Brooklyn Children's Museum
            </Text>
          </View>
          <View className="relative items-center justify-center">
            <View className="w-12 h-12 bg-primary rounded-full items-center justify-center border-4 border-white z-10"
              style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 8 }}
            >
              <Icon name="museum" size={24} color="#fff" />
            </View>
          </View>
          <View className="w-0.5 h-4 bg-primary rounded-full -mt-0.5" />
          <View className="w-4 h-1.5 bg-black/20 rounded-full" />
        </Pressable>

        {/* Inactive Pin */}
        <View
          className="absolute items-center"
          style={{ top: "30%", left: "70%", opacity: 0.9 }}
        >
          <View className="w-10 h-10 bg-white rounded-full items-center justify-center border-2 border-slate-200"
            style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 4 }}
          >
            <Icon name="park" size={20} color="#475569" />
          </View>
        </View>
      </View>

      {/* Top UI */}
      <SafeAreaView edges={["top"]} className="relative z-30">
        <View className="px-4 pt-2 pb-4">
          {/* Search Bar */}
          <View className="w-full relative rounded-xl mb-4 bg-white"
            style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12, elevation: 8 }}
          >
            <View className="absolute left-4 top-0 bottom-0 justify-center z-10">
              <Icon name="search" size={24} color="#2b9dee" />
            </View>
            <TextInput
              className="w-full pl-12 pr-12 py-3.5 text-base font-sans-medium text-slate-900 rounded-xl"
              placeholder="Search activities..."
              placeholderTextColor="#94a3b8"
              defaultValue={MAP_DATA.searchQuery}
            />
            <Pressable className="absolute right-3 top-0 bottom-0 justify-center">
              <View className="p-1.5 rounded-full">
                <Icon name="close" size={20} color="#94a3b8" />
              </View>
            </Pressable>
          </View>

          {/* Pills */}
          <View className="flex-row gap-2">
            <Pressable className="flex-row items-center gap-1.5 px-4 py-2 rounded-full bg-primary"
              style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 4 }}
            >
              <Icon name="grid-view" size={18} color="#fff" />
              <Text className="font-sans-medium text-sm text-white">All</Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-100"
              style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
            >
              <Icon name="park" size={18} color="#22c55e" />
              <Text className="font-sans-medium text-sm text-slate-700">Parks</Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-100"
              style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
            >
              <Icon name="museum" size={18} color="#3b82f6" />
              <Text className="font-sans-medium text-sm text-slate-700">Museums</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>

      <View className="flex-1" />

      {/* Bottom Card */}
      <View className="relative z-30 p-4 pb-4">
        <Pressable
          onPress={() => router.push("/detail/1")}
          className="bg-white rounded-2xl p-4 active:scale-[0.98]"
          style={{ shadowColor: "#000", shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 12 }}
        >
          <View className="w-12 h-1.5 bg-slate-200 rounded-full self-center mb-4" />
          <View className="flex-row gap-4">
            <View className="w-24 h-24 rounded-lg overflow-hidden"
              style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 1 }}
            >
              <Image
                source={activePin.image}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            <View className="flex-1 justify-between py-0.5">
              <View>
                <View className="flex-row justify-between items-start">
                  <Text className="text-lg font-sans-bold text-slate-900 leading-tight flex-1 mr-2">
                    {activePin.title}
                  </Text>
                  <Pressable>
                    <Icon name="favorite" size={24} color="#94a3b8" />
                  </Pressable>
                </View>
                <View className="flex-row items-center gap-1 mt-1">
                  <Icon name="star" size={18} color="#facc15" />
                  <Text className="font-sans-bold text-slate-900">
                    {activePin.rating}
                  </Text>
                  <Text className="text-slate-500 font-sans">
                    ({activePin.reviewCount})
                  </Text>
                  <Text className="text-slate-300 mx-1">•</Text>
                  <Text className="text-green-600 font-sans-medium">
                    {activePin.status}
                  </Text>
                </View>
                <View className="flex-row items-center gap-3 mt-1">
                  <View className="flex-row items-center gap-0.5">
                    <Icon name="payment" size={14} color="#64748b" />
                    <Text className="text-xs text-slate-500 font-sans">
                      {activePin.price}
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-0.5">
                    <Icon name="child-care" size={14} color="#64748b" />
                    <Text className="text-xs text-slate-500 font-sans">
                      {activePin.ageRange}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row items-center gap-3 mt-4 pt-3 border-t border-slate-100">
            <View>
              <Text className="text-xs text-slate-400 font-sans-medium uppercase tracking-wider">
                Distance
              </Text>
              <View className="flex-row items-center gap-1">
                <Icon name="near-me" size={18} color="#2b9dee" />
                <Text className="text-slate-800 font-sans-semibold">
                  {activePin.distance}
                </Text>
              </View>
            </View>
            <Pressable
              className="flex-1 flex-row items-center justify-center gap-2 bg-primary py-3 rounded-xl active:scale-[0.98]"
              style={{
                shadowColor: "#3b82f6",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
              }}
            >
              <Text className="text-white font-sans-bold">Get Directions</Text>
              <Icon name="arrow-forward" size={20} color="#fff" />
            </Pressable>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
