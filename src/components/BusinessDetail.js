import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const BusinessDetail = ({ data }) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BusinessDetail;
