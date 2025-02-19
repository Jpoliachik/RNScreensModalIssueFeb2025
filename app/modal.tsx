import { View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ModalScreen() {
  // const insets = useSafeAreaInsets();

  // marginBottom should inset the yellow view so there's a white space at the bottom of the screen
  return <View style={{ backgroundColor: "yellow", flex: 1, marginBottom: 72 }} />;
}
