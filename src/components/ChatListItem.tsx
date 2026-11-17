import { useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
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
  sender?: string;
};

type Props = {
  chat: Chat;
};

const avatarColors = [
  "#BFE3ED",
  "#B9DFF5",
  "#D9CEF0",
  "#F3C5D1",
  "#F5D59F",
  "#BFE3ED",
  "#C8E8C5",
  "#F5E2A2",
];

export default function ChatListItem({ chat }: Props) {
  const backgroundColor = avatarColors[(Number(chat.id) - 1) % avatarColors.length];
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <View className="flex-row items-center px-5">
      <Pressable
        onPress={() => setPreviewOpen(true)}
        accessibilityRole="button"
        accessibilityLabel={`View ${chat.name}'s profile picture`}
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor,
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {chat.avatar ? (
          <Image
            source={chat.avatar}
            style={{ width: 64, height: 64 }}
            resizeMode="contain"
            accessibilityLabel={`${chat.name}'s avatar`}
          />
        ) : (
          <Text className="text-xl font-bold text-gray-700">
            {chat.name.charAt(0)}
          </Text>
        )}
      </Pressable>

      <View className="ml-3 min-h-[84px] flex-1 justify-center border-b border-gray-100 py-4">
        <View className="flex-row items-center justify-between">
          <Text numberOfLines={1} className="mr-2 flex-1 text-base font-semibold text-gray-900">{chat.name}</Text>
          <Text className="text-xs text-gray-800">{chat.time}</Text>
        </View>

        <View className="mt-2 flex-row items-center">
          <Text
            numberOfLines={1}
            className={`mr-3 flex-1 text-[13px] ${
              chat.isTyping ? "font-semibold text-orange-600" : "text-gray-600"
            }`}
          >
            {chat.isTyping
              ? "Typing..."
              : `${chat.sender ? `${chat.sender} ` : ""}${chat.message}`}
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

       <Modal
        visible={previewOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setPreviewOpen(false)}>
          
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            justifyContent: "center",
            alignItems: "center",
          }} >

          <Pressable
            onPress={() => setPreviewOpen(false)}
            accessibilityRole="button"
            accessibilityLabel="Close profile picture"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }} />

          <View
            style={{
              width: "85%",
              maxWidth: 400,
              alignItems: "center",
            }}>

            <Text className="mb-5 text-xl font-semibold text-white">
              {chat.name}
            </Text>

            {chat.avatar ? (
              <Image
                source={chat.avatar}
                resizeMode="contain"
                style={{ width: "100%", aspectRatio: 1 }}
                accessibilityLabel={`${chat.name}'s profile picture`}
              />
            ) : (
              <Text className="text-6xl text-white">
                {chat.name.charAt(0)}
              </Text>
            )}

            <Pressable
              onPress={() => setPreviewOpen(false)}
              accessibilityRole="button"
              accessibilityLabel="Close profile picture"
              className="mt-6 rounded-full bg-white/20 p-3">
              <Ionicons name="close" size={28} color="white" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}