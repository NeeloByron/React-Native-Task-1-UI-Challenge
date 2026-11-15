import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NewChatButton() {
  return (
    <Pressable
               accessibilityRole="button" 
               accessibilityLabel="Start a new chat"
               className="absolute bottom-5 right-5 h-[72px] w-[72px] items-center justify-center rounded-full bg-orange-500" // place a round orange button near the bottom-right corner
               style={{
                        elevation: 6,
                        shadowColor: "#f97316",
                        shadowOffset: { width: 0, height: 6 },
                        shadowOpacity: 0.3,
                        shadowRadius: 12,}}>
        {/* Puts a white plus sign in the middle of the button. */}
       <Ionicons name="add" size={36} color="white" />
    </Pressable>
  );
}