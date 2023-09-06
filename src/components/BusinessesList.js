import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

import BusinessListItem from "./BusinessListItem";

const BusinessesList = ({ title, businesses, navigation }) => {
  if (!businesses.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title} ({businesses.length})
      </Text>
      {/* <Text style={styles.subtitle}>Businesses: {businesses.length}</Text> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BusinessDetail", { id: item.id })
              }
            >
              <BusinessListItem data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  /* subtitle: {
    marginLeft: 15,
  }, */
});

export default withNavigation(BusinessesList);
