import { View, FlatList } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context"; // keeps the screen's content away from things like the phone's notch.
import ChatHeader from "@/components/ChatHeader";
import ChatTabs from "@/components/ChatTab";
import ChatListItem from "@/components/ChatListItem";
import type { Chat } from "@/components/ChatListItem";
import NewChatButton from "@/components/NewChatButton";


// chat list
const chats: Chat[] = [
  {
    id: "1",
    name: "Faza Dzikrulloh",
    message: "",
    time: "14.30",
    avatar: require("../../assets/images/Faza.png"),
    isTyping: true,
  },
  {
    id: "2",
    name: "Hatypo Studio",
    sender: "Faza",
    message: "  Can you help me to do with new project...",
    time: "14.30",
    avatar: require("../../assets/images/hatypo Studio.png"),
    unreadCount: 2,
  },
  {
    id: "3",
    name: "Zhofran A",
    message: "I think we should upgrade the social media...",
    time: "14.00",
    avatar: require("../../assets/images/Zhofran.png"),
    unreadCount: 2,
  },
  {
    id: "4",
    name: "Vito Arvy",
    message: "Okay adhit, I’ll tell faza about it 👍🏻",
    avatar: require("../../assets/images/Vito.png"),
    time: "13.40",
  },
  {
    id: "5",
    name: "Raul",
    message: "Thanks Raul! 🙏🏻✨",
    avatar: require("../../assets/images/Raul.png"),
    time: "Yesterday",
    isRead: true,
  },
  {
    id: "6",
    name: "Farhan Bagas",
    message: "Great work farhan! 👍🏻 I’ll tell faza about logo...",
    avatar: require("../../assets/images/Farhan.png"),
    time: "29/08/22",
    isRead: true,
  },
  {
    id: "7",
    name: "Abdull",
    message: "Perfecto! 🔥 I will check it later",
    avatar: require("../../assets/images/abdull.png"),
    time: "28/08/22",
    isRead: true,
  },
  {
    id: "8",
    name: "Ibe hatypo",
    message: "nicely done bro! 👍🏻",
    avatar: require("../../assets/images/Ibe.png"),
    time: "",
    isRead: true,
  },
];


// builds the screen.
export default function Index() {
  return (
    // makes the screen fill the available space and give it a white background
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">  
        <ChatHeader />
        <ChatTabs />
        <FlatList
                  data={chats}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <ChatListItem chat={item} />}
                  contentContainerStyle={{ paddingBottom: 100 }} />
        <NewChatButton />
      </View>
    </SafeAreaView>
  );
}