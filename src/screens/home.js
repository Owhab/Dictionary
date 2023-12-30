import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import { colors } from "../theme/colors";
import Text from "../components/Text/Text";

export default function Home() {
  return (
    <View style={styles.home}>
      <Header />
      <View>
        <Text>Hello World</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: colors.black,
    flex: 1,
  },
});
