import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import color from "../config/color";

const Card = ({ title, subTitle, image }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
  },
  card: {
    // shadowOffset: 20,
    borderRadius: 15,
    backgroundColor: color.white,
    // width: "100%",
    // height: 200,
    // marginLeft: 20,
    // marginRight: 20,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: color.secondary,
    fontWeight: "bold",
  },
});
export default Card;
