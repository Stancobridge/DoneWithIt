import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListIem";
import color from "../config/color";

// import { Container } from './styles';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red Jacket for sale</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/mosh.jpg")}
            title="Stanley Okechukwu"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: color.secondary,
    fontWeight: "bold",
    fontSize: 29,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
