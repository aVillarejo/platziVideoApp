import React from "react";
import { Text, View, StyleSheet } from "react-native";

function SuggestionListLayout(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
}

export default SuggestionListLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  title: {
    color: "#4c4c4c",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    marginLeft: 8
  }
});
