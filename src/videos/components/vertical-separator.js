import React from "react";
import { StyleSheet, View } from "react-native";

const VerticalSeparator = props => {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: props.color ? props.color : "#eaeaea"
        }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    padding: 3,
    borderTopWidth: 4,
    borderTopColor: "#eaeaea"
  }
});

export default VerticalSeparator;
