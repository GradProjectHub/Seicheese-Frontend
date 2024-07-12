import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';

const stampsPerPage = 20; // 1ページに表示するスタンプの数 (5行 * 4列)

// スタンプの画像パスの配列
const stampImages = [
  require('../../assets/stamp_img/stamp_1.png'),
  require('../../assets/stamp_img/stamp_1.png'),
  require('../../assets/stamp_img/stamp_1.png'),
  require('../../assets/stamp_img/stamp_1.png'),


  // ...他の画像パスを追加
];

export default function Stamp() {
  const [currentPage, setCurrentPage] = useState(1);

  // スタンプのデータと画像パスをマッピング
  const stamps = stampImages.map((image, index) => ({
    id: index,
    image: image,
  }));

  const totalPages = Math.ceil(stamps.length / stampsPerPage);
  const displayedStamps = stamps.slice((currentPage - 1) * stampsPerPage, currentPage * stampsPerPage);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TamaguiProvider config={config}>
        <View style={styles.background}></View>

        <View style={styles.sheet}>
          <ScrollView contentContainerStyle={styles.stampsContainer}>
            {displayedStamps.map((stamp) => (
              <View key={stamp.id} style={styles.stamp}>
                <View style={styles.stampContent}>
                  <Image source={stamp.image} style={styles.stampImage} />
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <TouchableOpacity key={page} onPress={() => setCurrentPage(page)}>
                <Text style={[styles.pageNumber, page === currentPage && styles.currentPage]}>{page}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </TamaguiProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFF070',
  },
  sheet: {
    flex: 1,
    width: '90%',
    marginTop: 120,
    marginBottom: 120,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
  },
  stampsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // 左揃えに変更
    alignItems: 'flex-start',
    padding: 10,
    paddingBottom: 0,
  },
  stamp: {
    width: '23%', // 4列にするために幅を調整
    aspectRatio: 1,
    backgroundColor: '#FFF',
    margin: '1%',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stampContent: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stampImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  pageNumber: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  currentPage: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 20,
  },
});