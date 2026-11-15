import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const tabs = ["Chat", "Status", "Calls"] as const;  // the 3 tabs we want to show 
type Tab = (typeof tabs)[number]; // tab can only be "Chat", "Status", "Calls".

export default function ChatTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Chat"); // remembers the selected tab. Start with "chat" selected

  return (
    // container that puts the tab next to each other
    <View className="mx-5 my-4 flex-row rounded-2xl bg-orange-50 p-1">
     {/* makes one button for each name in the tab list. */}
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
           <Pressable
                     key={tab} // gives each button its own name tag.
                     onPress={() => setActiveTab(tab)} // when pressed, remembers this tab
                     accessibilityRole="tab"
                     accessibilityState={{ selected: isActive }}
                     className={`flex-1 items-center rounded-xl py-3 ${ isActive ? "bg-orange-500" : "bg-transparent"}`}>
             {/* the selected tab gets white text; others get orange text. */}
             <Text className={`text-base font-semibold ${ isActive ? "text-white" : "text-orange-700" }`} > {tab} </Text>
         </Pressable>
        );
      })}
    </View>
  );
}