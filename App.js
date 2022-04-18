import { StyleSheet, Text, View } from "react-native";
import * as Screens from "./src/screens";
import MainNav from "./src/components/navication";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      "Araz-Persian": require("./assets/Fonts/Araz-Persian-Font.ttf"),
      
    });
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setfontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <Screens.MainScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
