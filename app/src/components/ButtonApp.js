import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";

// import { Container } from './styles';

const ButtonApp = ({ style, children }) => {
  return (
    <>
      <TouchableHighlight
        style={[styles.buttonStyle, styles.loginButton, style]}
      >
        {children}
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: "100%",
    marginBottom: 10,
    borderRadius: 30,
    padding: 10,
  },
});

export default ButtonApp;
