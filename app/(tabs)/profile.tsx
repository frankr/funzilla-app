import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@/components/Icon";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-1 items-center justify-center px-8">
        <View className="w-16 h-16 rounded-full bg-primary/10 items-center justify-center mb-4">
          <Icon name="person-outline" size={32} color="#2b9dee" />
        </View>
        <Text className="text-xl font-sans-bold text-slate-900 mb-2">
          Your Profile
        </Text>
        <Text className="text-slate-500 font-sans text-center leading-relaxed">
          Manage your family profiles, preferences, and membership settings.
        </Text>
      </View>
    </SafeAreaView>
  );
}
