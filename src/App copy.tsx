import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const items = [
  { id: "1", title: "機動戦士ガンダム", count: 5 },
  { id: "2", title: "機動戦士Zガンダム", count: 6 },
  { id: "3", title: "機動戦士ガンダムZZ", count: 2 },
  { id: "4", title: "機動戦士 逆襲のシャア", count: 40 },
  { id: "5", title: "機動戦士ガンダムユニコーン", count: 2 },
];

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const handlePress = (item) => {
    Alert.alert(`${item.title}がクリックされました`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handlePress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.itemContent}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemCount}>{">>"}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#6200ee" />
      <View style={styles.listContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ガンダムシリーズ</Text>
          <View style={styles.titleUnderline} />
        </View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center", // Center all content within this container
  },
  titleContainer: {
    alignItems: "center", // Center title and underline horizontally
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000", // Black color
    textAlign: "center", // Center the title text
  },
  titleUnderline: {
    borderBottomWidth: 2, // Increase thickness if desired
    borderBottomColor: "#000", // Black color
    width: "100%", // Ensure the underline spans the width of the title container
    marginTop: 5, // Space between title and underline
  },
  list: {
    flexGrow: 1,
    width: "100%",
  },
  item: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  itemText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    textAlign: "left",
  },
  itemCount: {
    fontSize: 16,
    color: "#999",
    textAlign: "left",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
  },
});
