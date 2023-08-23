import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [businesses, setBusinesses] = useState([]);

  const handleSearchSubmit = async () => {
    try {
      const response = await yelp.get("/businesses/search", {
        params: { term: searchTerm, location: "san jose", limit: 20 },
      });
      setBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
      />
      <Text>We have found {businesses.length} businesses</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
