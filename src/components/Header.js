import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "./Text/Text";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";
import { AntDesign } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text preset="h4">English to Bangla Dictionary</Text>
      <AntDesign name="infocirlce" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    backgroundColor: colors.darkGrey,
  },
});
