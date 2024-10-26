import { Stack } from "expo-router";
import { useFonts } from "expo-font";
const layout = () => {
  useFonts({
    "outFit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "outFit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "outFit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="login/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default layout;
