import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const tabs = ["Chat", "Status", "Calls"] as const;
type Tab = (typeof tabs)[number];

export default function ChatTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Chat");

  return (
    <View className="mx-5 my-4 flex-row rounded-2xl bg-orange-50 p-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <Pressable
            key={tab}
            onPress={() => setActiveTab(tab)}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            className={`flex-1 items-center rounded-xl py-3 ${
              isActive ? "bg-orange-500" : "bg-transparent"
            }`}
          >
            <Text
              className={`text-base font-semibold ${
                isActive ? "text-white" : "text-orange-700"
              }`}
            >
              {tab}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}