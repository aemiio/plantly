import { Stack } from "expo-router";
import { theme } from "@/theme";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: " ",
          headerBackVisible: false,
          headerTintColor: theme.colorBlack,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
