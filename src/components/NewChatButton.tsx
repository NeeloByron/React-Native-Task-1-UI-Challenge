import { useState } from "react";
import { Pressable , Modal, ScrollView, Text, View,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Contact = {
  id: string;
  name: string;
};

type Props = {
  contacts: Contact[];
  onSelectContact: (name: string) => void;
};

export default function NewChatButton({
  contacts,
  onSelectContact,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        accessibilityRole="button"
        accessibilityLabel="Start a new chat"
        className="absolute bottom-5 right-5 h-[72px] w-[72px] items-center justify-center rounded-full bg-[#F56621]"
        style={{
          elevation: 6,
          shadowColor: "#F56621",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.3,
          shadowRadius: 12,
        }}
      >
        <Ionicons name="add" size={36} color="white" />
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="slide"
        onRequestClose={() => setOpen(false)}
      >
        <View className="flex-1 justify-center bg-black/50 px-5">
          <View
            className="rounded-2xl bg-white p-5"
            style={{ maxHeight: "80%" }}
          >
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-xl font-bold text-gray-900">
                Select a contact
              </Text>

              <Pressable
                onPress={() => setOpen(false)}
                accessibilityRole="button"
                accessibilityLabel="Close contact picker"
                hitSlop={10}
              >
                <Ionicons name="close" size={26} color="#111" />
              </Pressable>
            </View>

            <ScrollView>
              {contacts.map((contact) => (
                <Pressable
                  key={contact.id}
                  onPress={() => {
                    setOpen(false);
                    onSelectContact(contact.name);
                  }}
                  accessibilityRole="button"
                  className="border-b border-gray-100 py-4"
                >
                  <Text className="text-base text-gray-900">
                    {contact.name}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}