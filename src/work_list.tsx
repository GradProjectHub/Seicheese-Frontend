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
  { id: "1", title: "仮面ライダーシリーズ", count: 5 },
  { id: "2", title: "ガンダムシリーズ", count: 6 },
  { id: "3", title: "サザエさん", count: 2 },
  { id: "4", title: "ドラえもん", count: 40 },
  { id: "5", title: "NARUTO", count: 2 },
  { id: "6", title: "のだめカンタービレ", count: 40 },
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
        <Text style={styles.itemCount}>登録数 {item.count}件</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#6200ee" />
      <View style={styles.listContainer}>
        <Text style={styles.title}>作品一覧</Text>
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
    alignItems: "flex-start", // 左詰めにするために変更
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#6200ee",
    textAlign: "left", // 左詰めにするために変更
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
    textAlign: "left", // 左詰めにするために追加
  },
  itemCount: {
    fontSize: 16,
    color: "#999",
    textAlign: "left", // 左詰めにするために追加
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
  },
});
