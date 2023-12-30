import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Text from "./Text/Text";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Header() {
  return (
    <View style={styles.header}>
      <Text preset="h4">English to Bangla Dictionary</Text>
      <Pressable>
        <FontAwesome5 name="info-circle" size={24} color={colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    backgroundColor: colors.darkGrey,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
