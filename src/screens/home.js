import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { colors } from "../theme/colors";
import Text from "../components/Text/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "../theme/spacing";
import { words } from "../data/words";

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text preset="small" style={styles.title}>
      {item.en}
    </Text>
  </View>
);

export default function Home() {
  return (
    <SafeAreaView style={styles.home}>
      <Header />
      <TextInput
        style={styles.searchInput}
        placeholder="Type any text"
        placeholderTextColor={colors.white}
      />
      <ScrollView style={styles.container}>
        <View>
          <FlatList
            contentContainerStyle={styles.items}
            data={words}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: colors.black,
    flex: 1,
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
  items: {},
  item: {
    paddingVertical: spacing[2],
  },
});
