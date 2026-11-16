import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export default function ChatHeader({
  searchQuery,
  onSearchChange,
}: Props) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <View className="flex-row items-center justify-between px-5 py-5">
       {searchOpen ? (
        <TextInput
                  autoFocus
                  value={searchQuery}
                  onChangeText={onSearchChange}
                  placeholder="Search chats..."
                  placeholderTextColor="#6b7280"
                  accessibilityLabel="Search chats"
                  className="mr-4 flex-1 rounded-xl bg-gray-100 px-3 py-2 text-base text-gray-900"/>
           ) : (
        <Text className="text-3xl font-bold text-[#F56621]"> HALODEK </Text> )}

      <View className="flex-row items-center gap-5">
         <Pressable
                    accessibilityLabel={searchOpen ? "Close search" : "Search chats"}
                    accessibilityRole="button"
                    hitSlop={10}
                    onPress={() => {
                                     setSearchOpen(!searchOpen);
                                     onSearchChange("");}}>
          <Ionicons
                    name={searchOpen ? "close" : "search-outline"}
                    size={28}
                    color="#111" />
        </Pressable>

        <Pressable accessibilityLabel="Open menu" >
          <Ionicons name="ellipsis-vertical" size={24} color="#111" />
        </Pressable>
      </View>
    </View>
  );
}  