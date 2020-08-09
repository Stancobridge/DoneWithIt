import React from "react";
import { StyleSheet, View } from "react-native";
import color from "../config/color";

export default function ListItemDeleteAction(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.danger,
  },
});
