import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  unreadOnly: boolean;
  onUnreadOnlyChange: (value: boolean) => void;
};

export default function ChatHeader({
  searchQuery,
  onSearchChange,
  unreadOnly,
  onUnreadOnlyChange,
}: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View className="px-5 py-5">
      <View className="flex-row items-center justify-between">
        {searchOpen ? (
          <TextInput
                  autoFocus
                  value={searchQuery}
                  onChangeText={onSearchChange}
                  placeholder="Search chats..."
                  placeholderTextColor="#6b7280"
                  accessibilityLabel="Search chats"
                  className="mr-4 flex-1 rounded-xl bg-gray-100 px-3 py-2 text-base text-gray-900" />
            ) : (
          <Text className="text-3xl font-bold text-[#F56621]"> HALODEK </Text>
        )}

        <View className="flex-row items-center gap-5">
          <Pressable
                     accessibilityLabel={searchOpen ? "Close search" : "Search chats"}
                     accessibilityRole="button"
                     hitSlop={10}
                     onPress={() => {
                                       setSearchOpen(!searchOpen);
                                       setMenuOpen(false);
                                       onSearchChange(""); }} >
             <Ionicons
                     name={searchOpen ? "close" : "search-outline"}
                     size={28}
                     color="#111"  />
          </Pressable>

          <Pressable
            accessibilityLabel="Toggle chat menu"
            accessibilityRole="button"
            accessibilityState={{ expanded: menuOpen }}
            hitSlop={10}
            onPress={() => setMenuOpen(!menuOpen)}>

            <Ionicons name="ellipsis-vertical" size={24} color="#111" />
          </Pressable>
        </View>
      </View>

      {menuOpen && (
        <View className="mt-4 rounded-xl border border-gray-200 bg-white">
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              onUnreadOnlyChange(false);
              setMenuOpen(false);
            }}
            className="flex-row items-center justify-between px-4 py-3">
            <Text className="text-base text-gray-900">All chats</Text>
            {!unreadOnly && (
              <Ionicons name="checkmark" size={20} color="#F56621" />
            )}
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={() => {
              onUnreadOnlyChange(true);
              setMenuOpen(false);
            }}
            className="flex-row items-center justify-between border-t border-gray-100 px-4 py-3">
            <Text className="text-base text-gray-900">Unread chats</Text>
            {unreadOnly && (
              <Ionicons name="checkmark" size={20} color="#F56621" />
            )}
          </Pressable>
        </View>
      )}
    </View>
  );
}