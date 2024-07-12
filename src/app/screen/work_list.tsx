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
  { id: "1", title: "仮面ライダーシリーズ", count: 5 },
  { id: "2", title: "ガンダムシリーズ", count: 6 },
  { id: "3", title: "サザエさん", count: 2 },
  { id: "4", title: "ドラえもん", count: 40 },
  { id: "5", title: "NARUTO", count: 2 },
  { id: "6", title: "のだめカンタービレ", count: 40 },
];

const Separator = () => <View style={styles.separator} />;

export default function Work_list({ navigation }) {
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
      <View style={styles.header}>
        <TamaguiProvider config={config}>
          <Button size="$3" theme="active"onPress={() => navigation.navigate('MenuScreen')}>
            戻る
          </Button>
        </TamaguiProvider>
      </View>
      <StatusBar style="light" backgroundColor="#6200ee" />
      <View style={styles.listContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>作品一覧</Text>
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
    width: "40%",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop:50,
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
  header:{
    position: 'absolute',
    top: 40, 
    left: 20,
    zIndex: 1,
  }
});
