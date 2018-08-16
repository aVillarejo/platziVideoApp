import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Empty = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.msg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
    //backgroundColor:"#eaeaea"
  },
  text: {
    fontSize: 16
  }
});

export default Empty;
