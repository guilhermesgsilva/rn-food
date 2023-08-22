import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  icon: { fontSize: 35, alignSelf: "center", marginHorizontal: 15 },
  input: { flex: 1, fontSize: 18 },
});

export default SearchBar;
