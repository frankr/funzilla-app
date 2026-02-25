import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@/components/Icon";

export default function Saved() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-1 items-center justify-center px-8">
        <View className="w-16 h-16 rounded-full bg-primary/10 items-center justify-center mb-4">
          <Icon name="favorite-border" size={32} color="#2b9dee" />
        </View>
        <Text className="text-xl font-sans-bold text-slate-900 mb-2">
          Saved Activities
        </Text>
        <Text className="text-slate-500 font-sans text-center leading-relaxed">
          Activities you save will appear here for quick access later.
        </Text>
      </View>
    </SafeAreaView>
  );
}
