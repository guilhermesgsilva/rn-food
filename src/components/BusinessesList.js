import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BusinessDetail from "./BusinessDetail";

const BusinessesList = ({ title, businesses }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title} ({businesses.length})
      </Text>
      {/* <Text style={styles.subtitle}>Businesses: {businesses.length}</Text> */}
      <FlatList
        horizontal
        data={businesses}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => {
          return <BusinessDetail data={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  /* subtitle: {
    marginLeft: 15,
  }, */
});

export default BusinessesList;
