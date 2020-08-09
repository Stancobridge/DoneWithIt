import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ButtonApp from "../components/ButtonApp";
import color from "../config/color";

// import { Container } from './styles';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        blurRadius={2}
        source={require("../../assets/background.jpg")}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View style={styles.iconLogo}>
          <Image
            source={require("../../assets/logo-red.png")}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
            }}
          >
            Sell What You Don't Need
          </Text>
        </View>
        <View>
          <View style={[styles.viewThree]}>
            <ButtonApp
              style={{
                backgroundColor: color.primary,
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </ButtonApp>
            <ButtonApp
              style={{
                backgroundColor: color.secondary,
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </ButtonApp>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  iconLogo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
  },

  viewOne: {
    backgroundColor: "purple",
    flexGrow: 1,
  },
  viewTwo: {
    backgroundColor: "#fc4364",
  },
  viewThree: {
    alignSelf: "flex-end",
    padding: 20,
    marginBottom: 30,
    width: "100%",
  },
  viewImage: {
    position: "absolute",
    top: StatusBar.currentHeight + 50,
    width: "40%",
    height: "20%",
    zIndex: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default WelcomeScreen;
