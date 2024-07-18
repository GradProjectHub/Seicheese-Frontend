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
import { TamaguiProvider, Button } from 'tamagui';
import config from '../../tamagui.config';

const items = [
  { id: "1", title: "機動戦士ガンダム", count: 5 },
  { id: "2", title: "機動戦士Zガンダム", count: 6 },
  { id: "3", title: "機動戦士ガンダムZZ", count: 2 },
  { id: "4", title: "機動戦士ガンダム逆襲のシャア", count: 40 },
  { id: "5", title: "機動戦士ガンダムユニコーン", count: 2 },
];

const Separator = () => <View style={styles.separator} />;

export default function Work_list_detail({ navigation }) {
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
      <View style={styles.header}>
        <TamaguiProvider config={config}>
          <Button size="$3" theme="active"onPress={() => navigation.navigate('Work_list')}>
            戻る
          </Button>
        </TamaguiProvider>
      </View>
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
    alignItems: "flex-end", // 左詰めにするために変更
  },
  titleContainer: {
    width: "60%",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: '20%',
    marginVertical: 20,
    color: "#000",
    textAlign: "right", // 左詰めにするために変更
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
  header:{
    position: 'absolute',
    top: 20, 
    left: 20,
    zIndex: 1,
  }
});
