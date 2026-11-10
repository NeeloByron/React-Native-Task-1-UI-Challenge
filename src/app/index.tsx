import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatHeader from "@/components/ChatHeader";

export default function Index() {
  return (
        <SafeAreaView className="flex-1 bg-white">
          <View className="flex-1">
            <ChatHeader />
          </View>
       </SafeAreaView>
  );
}

