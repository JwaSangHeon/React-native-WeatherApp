import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{ width: 200, height: 200, backgroundColor: "tomato" }}
      ></View>
      <View style={{ width: 200, height: 200, backgroundColor: "teal" }}></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "orange" }}
      ></View>
    </View>
  );
}
