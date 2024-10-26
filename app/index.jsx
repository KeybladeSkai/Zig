import { Text, View} from "react-native";
import { Link } from "expo-router";
const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={"/login"}>
        <Text>Go to Login Screen</Text>
      </Link>
    </View>
  );
};

export default index;
