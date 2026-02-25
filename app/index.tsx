import { View, Text, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@/components/Icon";
import { IMAGES } from "@/constants/MockData";

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-1 relative overflow-hidden">
        {/* Background Decorations */}
        <View className="absolute -top-12 -left-20 w-64 h-64 rounded-full bg-mint-accent opacity-60" />
        <View className="absolute bottom-[20%] -right-24 w-72 h-72 rounded-full bg-orange-accent opacity-60" />

        {/* Header */}
        <View className="relative z-10 flex-row items-center justify-center px-6 pt-4 pb-4">
          <View className="flex-row items-center gap-2">
            <Icon name="explore" size={30} color="#2b9dee" />
            <Text className="text-slate-900 text-2xl font-sans-extrabold tracking-tight">
              Funzilla
            </Text>
          </View>
        </View>

        {/* Main Content */}
        <View className="relative z-10 flex-1 px-6">
          <View className="relative flex-1 justify-center">
            {/* Decorative Icons */}
            <View className="absolute -top-4 -right-2 z-20">
              <Icon name="auto-awesome" size={36} color="#ffcda6" />
            </View>
            <View className="absolute -bottom-6 -left-4 z-20">
              <Icon name="star" size={44} color="#bef2e5" />
            </View>

            {/* Image Container */}
            <View className="relative w-full overflow-hidden rounded-[40px]" style={{ aspectRatio: 4 / 5 }}>
              <Image
                source={IMAGES.welcomeHero}
                className="w-full h-full"
                resizeMode="cover"
              />
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="absolute inset-0"
              />
            </View>
          </View>

          <View className="items-center pt-8 pb-4">
            <Text className="text-slate-900 text-[34px] font-sans-extrabold leading-[1.1] tracking-tight mb-3 text-center">
              Weekends,{"\n"}
              <Text className="text-primary">simplified.</Text>
            </Text>
            <Text className="text-slate-500 text-lg font-sans-medium leading-relaxed text-center max-w-[280px]">
              Discover activities your kids will actually love.
            </Text>
          </View>
        </View>

        {/* Footer Actions */}
        <View className="relative z-10 px-6 pb-8 pt-2">
          <Pressable
            onPress={() => router.push("/interests")}
            className="flex-row items-center justify-center rounded-full bg-primary py-4 active:scale-[0.98]"
            style={{
              shadowColor: "#2b9dee",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 8,
            }}
          >
            <Text className="text-lg font-sans-bold tracking-wide text-white mr-2">
              Get Started
            </Text>
            <Icon name="arrow-forward" size={24} color="#fff" />
          </Pressable>
          <View className="mt-4 items-center">
            <Text className="text-sm font-sans-medium text-slate-400">
              Already have an account?{" "}
              <Text className="text-slate-800 font-sans-bold">Log in</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
