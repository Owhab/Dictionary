import React from "react";
import Text from "../components/Text/Text";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Details({ navigation, route }) {
  const word = route.params.word;
  return (
    <SafeAreaView>
      <Header backBtn={true} />
      <View style={styles.details}>
        <Text style={styles.wordText}>English: {word.en}</Text>
        <Text style={styles.wordText}>Bangla: {word.bn}</Text>
      </View>
      {/* <View style={styles.details}></View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  details: {
    backgroundColor: colors.black,
    padding: spacing[5],
  },
  wordText: {
    color: colors.white,
  },
});
