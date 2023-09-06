import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const BusinessListItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image_url }} />
      <Text style={styles.name}>{data.name}</Text>
      <Text>
        {data.rating} Stars, {data.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold",
  },
});

export default BusinessListItem;
