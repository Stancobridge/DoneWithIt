import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import colors from "../config/color";

// import { Container } from './styles';

const ViewImage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexDs}>
        <AntDesign
          style={styles.openView}
          name="close"
          size={30}
          color="white"
        />
        <AntDesign
          name="delete"
          size={30}
          color="white"
          style={styles.closeView}
        />
      </View>
      <View
        style={{
          display: "flex",
        }}
      >
        <Image
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
          }}
          source={require("../../assets/chair.jpg")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  flexDs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  openView: {
    // height: 40,
    // width: 40,
    marginLeft: 25,
  },
  closeView: {
    // height: 40,
    // width: 40,
    marginRight: 25,
  },
});

export default ViewImage;
