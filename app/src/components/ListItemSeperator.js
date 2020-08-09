import React from "react";
import { StyleSheet, View } from "react-native";
import color from "../config/color";

export default function ListItemSeperator(props) {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: color.light,
  },
});
