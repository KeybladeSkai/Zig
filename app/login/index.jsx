import { View, Text, Image, Pressable } from "react-native";
import Colors from "../../constants/Colors";
const LoginScreen = () => {
  return (
    <View style={{ backgroundColor: Colors["60-White"] }}>
      <Image
        source={require("../../assets/images/Anime_Girl_45-removebg-preview.png")}
        style={{ width: "100%", height: 400 }}
      />
      <View
        style={{
          padding: 17,
          display: "flex",
          justifyContent: "space-between",
          height: "50%",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Text
            style={{
              fontFamily: "outFit-Bold",
              fontSize: 30,
              textAlign: "center",
              padding: 10,
            }}
          >
            Zig your merch with anime fans
          </Text>

          <Text
            style={{
              fontFamily: "outFit-Regular",
              fontSize: 24,
              fontSize: 14,
              textAlign: "center",
              color: Colors["10-Gray"],
            }}
          >
            A platform for obsessed Anime nerds and fans to share cool merch,
            boyaaaah....
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: Colors["30-Orange"],
            height: 60,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 14,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "outFit-Bold" }}>
            Get started
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default LoginScreen;
