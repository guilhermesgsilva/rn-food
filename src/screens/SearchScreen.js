import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";
import BusinessesList from "../components/BusinessesList.js";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchApi, businesses, errorMessage } = useBusinesses();

  const filterBusinesses = (price) => {
    return businesses.filter((business) => {
      return business.price === price;
    });
  };

  return (
    <View>
      {/* <Text>Search Screen</Text> */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearchSubmit={searchApi}
      />
      <View style={styles.messageContainer}>
        <Text style={styles.message}>
          We have found {businesses.length} businesses.
        </Text>
        {errorMessage ? (
          <Text style={styles.error}>{errorMessage}</Text>
        ) : (
          <></>
        )}
      </View>
      <BusinessesList
        title="Cost Effective"
        businesses={filterBusinesses("$")}
      />
      <BusinessesList title="Bit Pricier" businesses={filterBusinesses("$$")} />
      <BusinessesList
        title="Big Spender"
        businesses={filterBusinesses("$$$")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginRight: 15,
    marginBottom: 15,
  },
  message: {
    color: "grey",
    alignSelf: "flex-end",
  },
  error: {
    color: "red",
    alignSelf: "flex-end",
  },
});

export default SearchScreen;
