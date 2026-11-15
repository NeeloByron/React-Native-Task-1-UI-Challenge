import { Text, View } from "react-native";
import type { ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type Chat = {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar?: ImageSourcePropType;
  unreadCount?: number;
  isTyping?: boolean;
  isRead?: boolean;
};

type Props = {
  chat: Chat;
};

export default function ChatListItem({ chat }: Props) {
  return (
    <View className="flex-row items-center px-5 py-3">
      <View className="h-16 w-16 items-center justify-center rounded-full bg-orange-100">
        <Text className="text-xl font-bold text-orange-700">{chat.name.charAt(0)}</Text>
      </View>

      <View className="ml-3 flex-1 border-b border-gray-100 pb-4">
        <View className="flex-row items-center justify-between">
          <Text numberOfLines={1} className="mr-2 flex-1 text-base font-semibold text-gray-900">{chat.name}</Text>
          <Text className="text-xs text-gray-800">{chat.time}</Text>
        </View>

        <View className="mt-2 flex-row items-center">
          <Text numberOfLines={1} className={`mr-3 flex-1 text-sm ${ chat.isTyping ? "font-semibold text-orange-600" : "text-gray-600"}`}>
            {chat.isTyping ? "Typing..." : chat.message}
          </Text>

          {(chat.unreadCount ?? 0) > 0 ? (
            <View className="h-5 min-w-[20px] items-center justify-center rounded-full bg-orange-500 px-1">
              <Text className="text-xs text-white">
                {chat.unreadCount}
              </Text>
            </View>
          ) : chat.isRead ? (
            <Ionicons name="checkmark-done" size={18} color="#ea580c" />
          ) : null}
        </View>
      </View>
    </View>
  );
}