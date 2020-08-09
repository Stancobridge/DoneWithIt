import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
} from "react-native";

export default function App() {
  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
        {
          text: "Ask me later",
          style: {
            backgroundColor: "purple",
            color: "white",
            borderRadius: 5,
          },
          onPress: () => console.log("Ask me later pressed"),
        },
      ],
      { cancelable: false }
    );

  const handleImageTouch = () => {
    // Alert.alert("You typed", "Here is what u typed", [
    //   {
    //     text: "dfd",
    //   },
    // ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={5} onPress={createThreeButtonAlert}>
        DoneWithIt numberOfLines numberOfLines numberOfLines numberOfLines
        numberOfLines numberOfLines numberOfLines numberOfLines numberOfLines
        numberOfLines numberOfLines numberOfLines numberOfLines numberOfLines
        numberOfLines numberOfLines numberOfLines numberOfLines numberOfLines
        numberOfLines numberOfLines numberOfLines numberOfLines numberOfLines
        numberOfLines numberOfLines numberOfLines numberOfLines numberOfLines
      </Text>
      <TouchableHighlight onPress={handleImageTouch}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View
          style={{
            width: 300,
            height: 90,
            backgroundColor: "green",
            borderRadius: 20,
          }}
        ></View>
      </TouchableNativeFeedback>
      <Button title="Hello" color="orange" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
