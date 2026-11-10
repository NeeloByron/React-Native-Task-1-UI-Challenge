import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatHeader() {
  return (
    <View className="flex-row items-center justify-between px-5 py-5">
      <Text className="text-3xl font-bold text-orange-600"> HALODEK </Text>

      <View className="flex-row items-center gap-5">
        <Pressable accessibilityLabel="Search chats">
          <Ionicons name="search-outline" size={28} color="#111" />
        </Pressable>

        <Pressable accessibilityLabel="Open menu">
          <Ionicons name="ellipsis-vertical" size={24} color="#111" />
        </Pressable>
      </View>
    </View>
  );
}  