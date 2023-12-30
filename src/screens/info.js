import { Dimensions, Linking, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Text from "../components/Text/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Info() {
  const openLink = (link) => {
    Linking.openURL(link);
  };
  return (
    <SafeAreaView>
      <Header backBtn={true} infoIcon={false} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text preset="h4">Developed By: </Text>
          <Text preset="h3">Abdul Owhab</Text>
          <Text>Software Developer, Coder71 Limited</Text>
        </View>
        <View style={styles.socialSection}>
          <Text preset="h4">Follow Me</Text>
          <View style={styles.social}>
            <Pressable
              style={styles.socialIcon}
              onPress={() => openLink("https://facebook.com/abdulowhab.bd")}
            >
              <Entypo name="facebook" size={24} color={colors.white} />
            </Pressable>
            <Pressable
              style={styles.socialIcon}
              onPress={() => openLink("https://linkedin.com/in/abdulowhab")}
            >
              <Entypo name="linkedin" size={24} color={colors.white} />
            </Pressable>
            <Pressable
              style={styles.socialIcon}
              onPress={() => openLink("https://github.com/Owhab")}
            >
              <AntDesign name="github" size={24} color={colors.white} />
            </Pressable>
          </View>
        </View>
        <Pressable
          onPress={() => openLink("https://abdulowhab.netlify.app")}
          style={styles.website}
        >
          <Text>https://abdulowhab.netlify.app</Text>
          <Feather name="external-link" size={24} color={colors.white} />
        </Pressable>
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
  content: {
    alignItems: "center",
  },
  socialSection: {
    marginTop: spacing[5],
    alignItems: "center",
  },
  social: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  socialIcon: {
    marginHorizontal: spacing[3],
    marginTop: spacing[3],
  },
  website: {
    flexDirection: "row",
    marginTop: spacing[8],
  },
});
