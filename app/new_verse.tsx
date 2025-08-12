import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function AddItemModal() {
  return (
    <>
      <Stack.Screen options={{ title: "Default Title" }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the Add Item modal</Text>
      </View>
    </>
  );
}
