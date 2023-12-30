import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { colors } from "../theme/colors";
import Text from "../components/Text/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "../theme/spacing";
import { words } from "../data/words";

const Item = ({ item, navigation }) => (
  <Pressable
    onPress={() => navigation.navigate("Details", { word: item })}
    style={styles.item}
  >
    <Text preset="h3" style={styles.title}>
      {item.en}
    </Text>
  </Pressable>
);

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.home}>
        <Header backBtn={false} infoIcon={true} />
        <TextInput
          style={styles.searchInput}
          placeholder="Type any text"
          placeholderTextColor={colors.white}
        />

        <FlatList
          contentContainerStyle={styles.items}
          data={words}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: colors.black,
  },
  container: {
    padding: spacing[5],
  },
  searchInput: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: spacing[3],
    padding: spacing[3],
    margin: spacing[5],
    color: colors.white,
  },
  items: {
    paddingHorizontal: spacing[5],
  },
  item: {
    paddingVertical: spacing[2],
  },
  separator: {
    height: 1,
    backgroundColor: colors.grey,
  },
});
