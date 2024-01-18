import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View Style={styles.ImageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button
          label={"Choose a photo"}
          theme={"primary"}
          onPress={pickImageAsync}
        />
        <Button label={"Use this photo"} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
