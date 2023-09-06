import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

import yelp from "../api/yelp";

const BusinessDetailScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [businessData, setBusinessData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getBusinessData = async (id) => {
    try {
      const response = await yelp.get(`/businesses/${id}`);
      setBusinessData(response.data);
    } catch (e) {
      setErrorMessage("Something went wrong, try again later.");
    }
  };

  useEffect(() => {
    getBusinessData(id);
  }, []);

  if (!businessData) {
    return null;
  }

  return (
    <View style={styles.list}>
      <Text style={styles.title}>{businessData.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={businessData.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 15,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default BusinessDetailScreen;
