import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@/components/Icon";
import { INTERESTS } from "@/constants/MockData";
import { useAppState } from "@/contexts/AppContext";

export default function Interests() {
  const router = useRouter();
  const { selectedInterests, setSelectedInterests } = useAppState();
  const [selected, setSelected] = useState<string[]>(selectedInterests);

  const toggleInterest = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    setSelectedInterests(selected);
    router.push("/setup");
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light" edges={["top"]}>
      <View className="flex-1">
        {/* Header */}
        <View className="px-6 pt-6 pb-6">
          {/* Progress */}
          <View className="flex-row items-center justify-center gap-3 py-5 mb-4">
            <View className="h-2 w-2 rounded-full bg-primary/20" />
            <View className="h-2 w-8 rounded-full bg-primary" />
            <View className="h-2 w-2 rounded-full bg-primary/20" />
          </View>
          <Text className="text-slate-900 tracking-tight text-[32px] font-sans-bold leading-tight">
            What are you into?
          </Text>
          <Text className="text-slate-500 text-base font-sans-medium leading-normal pt-3">
            Select your interests to help us find the best matches.
          </Text>
        </View>

        {/* Grid */}
        <ScrollView
          className="flex-1 px-6 pb-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row flex-wrap justify-between">
            {INTERESTS.map((item) => {
              const isSelected = selected.includes(item.id);
              return (
                <Pressable
                  key={item.id}
                  onPress={() => toggleInterest(item.id)}
                  className={`w-[48%] mb-4 items-center justify-center gap-3 rounded-xl border-2 p-6 ${
                    isSelected
                      ? "bg-primary-light border-primary"
                      : "bg-white border-transparent"
                  }`}
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.05,
                    shadowRadius: 2,
                    elevation: 1,
                  }}
                >
                  <View
                    className={`h-14 w-14 items-center justify-center rounded-full ${
                      isSelected ? "bg-primary" : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      name={item.icon}
                      size={32}
                      color={isSelected ? "#fff" : "#2b9dee"}
                    />
                  </View>
                  <Text
                    className={`text-lg font-sans-bold ${
                      isSelected ? "text-primary" : "text-slate-900"
                    }`}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          {/* Bottom spacing for footer */}
          <View className="h-32" />
        </ScrollView>

        {/* Footer */}
        <View className="absolute bottom-0 left-0 right-0 px-6 py-6 pb-8 bg-white border-t border-slate-50">
          <Pressable
            onPress={() => router.push("/setup")}
            className="w-full pb-1 items-center"
          >
            <Text className="text-sm font-sans-semibold text-slate-500">
              Skip for now
            </Text>
          </Pressable>
          <Pressable
            onPress={handleNext}
            className="w-full items-center justify-center rounded-xl h-14 bg-primary mt-4 active:scale-[0.98]"
            style={{
              shadowColor: "#2b9dee",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 8,
            }}
          >
            <Text className="text-white text-lg font-sans-bold tracking-wide">
              Next
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
