import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleProp, ViewStyle } from "react-native";

const COMMUNITY_ICON_MAP: Record<string, string> = {
  "nature-people": "nature-people",
  "map-marker-distance": "map-marker-distance",
};

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export function Icon({ name, size = 24, color = "#000", style }: IconProps) {
  if (COMMUNITY_ICON_MAP[name]) {
    return (
      <MaterialCommunityIcons
        name={COMMUNITY_ICON_MAP[name] as any}
        size={size}
        color={color}
        style={style}
      />
    );
  }
  return (
    <MaterialIcons name={name as any} size={size} color={color} style={style} />
  );
}
