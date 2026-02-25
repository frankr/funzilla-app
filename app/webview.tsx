import { Pressable, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { Icon } from "@/components/Icon";

function firstParam(value: string | string[] | undefined): string | null {
  if (!value) return null;
  if (Array.isArray(value)) return value[0] ?? null;
  return value;
}

export default function WebsiteWebViewScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ url?: string | string[]; title?: string | string[] }>();
  const rawUrl = firstParam(params.url);
  const title = firstParam(params.title) ?? "Website";

  if (!rawUrl) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center gap-4 px-6">
          <Text className="text-base text-rose-700 text-center">Website URL is missing.</Text>
          <Pressable onPress={() => router.back()} className="rounded-xl bg-primary px-4 py-2">
            <Text className="text-white font-sans-bold">Back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-row items-center gap-3 border-b border-slate-200 px-4 py-3">
        <Pressable onPress={() => router.back()} className="h-9 w-9 items-center justify-center rounded-full bg-slate-100">
          <Icon name="arrow-back" size={22} color="#1e293b" />
        </Pressable>
        <View className="flex-1">
          <Text className="text-sm text-slate-500">Activity Website</Text>
          <Text className="text-base font-sans-bold text-slate-900" numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
      <WebView source={{ uri: rawUrl }} startInLoadingState />
    </SafeAreaView>
  );
}
