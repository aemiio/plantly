import { Tabs, Redirect } from "expo-router";
import { theme } from "@/theme";
import Entypo from "@expo/vector-icons/Entypo";
import { useUserStore } from "../../store/userStore";
import { AntDesign } from "@expo/vector-icons";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding,
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href={"/onboarding"} />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
