import { View, FlatList } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context"; // keeps the screen's content away from things like the phone's notch.
import ChatHeader from "@/components/ChatHeader";
import ChatTabs from "@/components/ChatTab";
import ChatListItem from "@/components/ChatListItem";
import type { Chat } from "@/components/ChatListItem";

// chat list
const chats: Chat[] = [
  {
    id: "1",
    name: "Faza Dzikrulloh",
    message: "",
    time: "14.30",
    // avatar: require("../../assets/images/avatars/faza.png"),
    isTyping: true,
  },
];

// builds the screen.
export default function Index() {
  return (
    // makes the screen fill the available space and give it a white background
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <ChatHeader /> {/* Shows the header */}
        <ChatTabs /> {/* Shows the chat tabs below the header. */}

        {/* Shows each chat in a scrollable list. */}
        <FlatList
                  data={chats}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <ChatListItem chat={item} />}
                  contentContainerStyle={{ paddingBottom: 100 }} />
      </View>
    </SafeAreaView>
  );
}