import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

export default function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
          <View style={styles.right}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    flexDirection: "row"
    //backgroundColor: "blue"
    //marginBottom: 20
    // shadowColor: "gray",
    // shadowOffset: { width: 9, height: 8 },
    // shadowRadius: 10,
    // shadowOpacity: 0.9
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: "contain"
  },
  right: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
