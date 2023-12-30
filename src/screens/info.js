import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Text from "../components/Text/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Info() {
  return (
    <SafeAreaView>
      <Header backBtn={true} infoIcon={false} />
      <View style={styles.container}>
        <Text>Abdul Owhab</Text>
      </View>
    </SafeAreaView>
  );
}

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    padding: spacing[5],
    height: ScreenHeight,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
