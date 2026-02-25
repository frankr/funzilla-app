import { useState } from "react";
import { View, Text, Pressable, ScrollView, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import { Icon } from "@/components/Icon";
import { IMAGES } from "@/constants/MockData";

export default function ProfileSetup() {
  const router = useRouter();
  const [age, setAge] = useState(5);
  const [name, setName] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-1">
        {/* Header */}
        <View className="px-6 pt-4 pb-4 flex-row items-center justify-between bg-white">
          <Pressable
            onPress={() => router.back()}
            className="p-2 -ml-2 rounded-full"
          >
            <Icon name="arrow-back" size={24} color="#1e293b" />
          </Pressable>
          <View className="items-center">
            <Text className="text-xs font-sans-bold text-primary tracking-widest uppercase">
              Step 2 of 3
            </Text>
          </View>
          <Pressable onPress={() => router.replace("/(tabs)")}>
            <Text className="text-sm font-sans-semibold text-slate-400">
              Skip
            </Text>
          </Pressable>
        </View>

        {/* Content */}
        <ScrollView
          className="flex-1 px-6"
          showsVerticalScrollIndicator={false}
        >
          <View className="items-center mb-8">
            <Text className="text-3xl font-sans-extrabold text-slate-900 mb-2 leading-tight text-center">
              Tell us about{"\n"}your kid
            </Text>
            <Text className="text-slate-500 text-base font-sans">
              We'll find the perfect adventures for them.
            </Text>
          </View>

          {/* Avatar */}
          <View className="items-center mb-8">
            <View className="relative">
              <View className="w-28 h-28 rounded-full overflow-hidden border-4 border-white"
                style={{
                  shadowColor: "#2b9dee",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.15,
                  shadowRadius: 20,
                  elevation: 4,
                }}
              >
                <Image
                  source={IMAGES.profileAvatar}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
              <Pressable className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full items-center justify-center border-2 border-white"
                style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 4, elevation: 3 }}
              >
                <Icon name="add-a-photo" size={18} color="#fff" />
              </Pressable>
            </View>
          </View>

          {/* Name Input */}
          <View className="mb-8">
            <Text className="text-sm font-sans-bold text-slate-700 ml-1 mb-2">
              Name
            </Text>
            <View className="relative">
              <TextInput
                placeholder="Child's First Name"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#94a3b8"
                className="w-full bg-slate-50 rounded-full py-4 pl-6 pr-12 text-lg font-sans-medium text-slate-900"
                style={{
                  borderWidth: 1,
                  borderColor: "#e2e8f0",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.05,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              />
              <View className="absolute right-5 top-0 bottom-0 justify-center">
                <Icon name="face" size={24} color="#2b9dee" />
              </View>
            </View>
          </View>

          {/* Age Slider */}
          <View className="mb-10 p-5 rounded-2xl bg-primary/5 border border-primary/10">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-sm font-sans-bold text-slate-700">Age</Text>
              <View className="px-3 py-1 bg-white rounded-lg"
                style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
              >
                <Text className="text-primary font-sans-bold text-lg">
                  {age}{" "}
                  <Text className="text-xs font-sans text-slate-400">years</Text>
                </Text>
              </View>
            </View>

            {/* Progress bar */}
            <View className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-2">
              <View
                className="h-full bg-primary rounded-full"
                style={{ width: `${(age / 12) * 100}%` }}
              />
            </View>

            <Slider
              minimumValue={0}
              maximumValue={12}
              step={1}
              value={age}
              onValueChange={(val) => setAge(val)}
              minimumTrackTintColor="transparent"
              maximumTrackTintColor="transparent"
              thumbTintColor="#2b9dee"
              style={{ width: "100%", height: 40, marginTop: -20 }}
            />

            <View className="flex-row justify-between mt-2">
              <Text className="text-xs font-sans-medium text-slate-400">0</Text>
              <Text className="text-xs font-sans-medium text-slate-400">12</Text>
            </View>
          </View>

          {/* Mini Interests */}
          <View className="mb-6">
            <View className="flex-row items-center gap-2 mb-4">
              <Text className="text-lg font-sans-bold text-slate-900">
                Interests
              </Text>
              <View className="bg-slate-100 px-2 py-0.5 rounded-full">
                <Text className="text-xs font-sans text-slate-400">
                  Select top 3
                </Text>
              </View>
            </View>
            <View className="flex-row gap-3">
              <Pressable className="flex-1 items-center justify-center p-4 rounded-2xl bg-primary/10 border-2 border-primary relative">
                <View className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full items-center justify-center">
                  <Icon name="check" size={14} color="#fff" />
                </View>
                <View className="w-12 h-12 mb-2 rounded-full bg-white items-center justify-center"
                  style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
                >
                  <Text className="text-2xl">🦕</Text>
                </View>
                <Text className="font-sans-bold text-primary text-sm">
                  Dinosaurs
                </Text>
              </Pressable>

              <Pressable className="flex-1 items-center justify-center p-4 rounded-2xl bg-slate-50 border-2 border-transparent">
                <View className="w-12 h-12 mb-2 rounded-full bg-white items-center justify-center border border-slate-100"
                  style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
                >
                  <Text className="text-2xl">🚀</Text>
                </View>
                <Text className="font-sans-semibold text-slate-600 text-sm">
                  Space
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Bottom spacing */}
          <View className="h-28" />
        </ScrollView>

        {/* Sticky Footer */}
        <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 pb-8">
          <Pressable
            onPress={() => router.replace("/(tabs)")}
            className="w-full bg-primary rounded-full py-4 flex-row items-center justify-center gap-2 active:scale-[0.98]"
            style={{
              shadowColor: "#3b82f6",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 8,
            }}
          >
            <Text className="text-white font-sans-bold text-lg">
              Finish Setup
            </Text>
            <Icon name="arrow-forward" size={24} color="#fff" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
