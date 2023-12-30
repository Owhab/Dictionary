import React from "react";
import Text from "../components/Text/Text";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, StyleSheet, View } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Details({ navigation, route }) {
  const word = route.params.word;
  return (
    <SafeAreaView>
      <Header backBtn={true} infoIcon={true} />
      <View style={styles.container}>
        <View style={styles.details}>
          <Text preset="h3" style={styles.wordText}>
            English: {word.en}
          </Text>
          <Text preset="h3" style={styles.wordText}>
            Bangla: {word.bn}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: ScreenHeight,
  },
  details: {
    backgroundColor: colors.black,
    padding: spacing[5],
  },
  wordText: {
    color: colors.white,
  },
});
