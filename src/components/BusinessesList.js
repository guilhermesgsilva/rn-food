import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BusinessDetail from "./BusinessDetail";

const BusinessesList = ({ title, businesses }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Businesses: {businesses.length}</Text>
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
  title: { fontSize: 18, fontWeight: "bold" },
});

export default BusinessesList;
