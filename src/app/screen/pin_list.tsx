import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { TamaguiProvider, Button } from 'tamagui';
import config from '../../tamagui.config';

const pinsPerPage = 20; // 1ページに表示するピンの数



// ピンの画像パスの配列
const pinImages = [
  require('../../assets/pin_img/pin_1.png'),
  require('../../assets/pin_img/pin_2.png'),
  require('../../assets/pin_img/pin_3.png'),
  require('../../assets/pin_img/pin_4.png'),
  require('../../assets/pin_img/pin_5.png'),

  // ...他の画像パスを追加
];

export default function Pin_list({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);

  // ピンのデータと画像パスをマッピング
  const pins = pinImages.map((image, index) => ({
    id: index,
    image: image,
    points: 100, // ポイントを100に統一
  }));

  const totalPages = Math.ceil(pins.length / pinsPerPage);
  const displayedPins = pins.slice((currentPage - 1) * pinsPerPage, currentPage * pinsPerPage);

  const openPinCheck = (pin) => {
    setSelectedPin(pin);
    setModalVisible(true);
  };

  const handleExchange = () => {
    // 交換処理のロジックをここに追加
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TamaguiProvider config={config}>
          <Button size="$3" theme="active" onPress={() => navigation.navigate('MenuScreen')}>
            戻る
          </Button>
        </TamaguiProvider>
      </View>
      <StatusBar style="auto" />

      <TamaguiProvider config={config}>
        

        <ScrollView contentContainerStyle={styles.pinsContainer}>
          {displayedPins.map((pin) => (
            <TouchableOpacity key={pin.id} style={styles.pin} onPress={() => openPinCheck(pin)}>
              <View style={styles.pinContent}>
                <Image source={pin.image} style={styles.pinImage} />
              </View>
              <View style={styles.pointContainer}>
                <Text style={[styles.pointText]}>{pin.points}pt</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <TouchableOpacity key={page} onPress={() => setCurrentPage(page)}>
              <Text style={[styles.pageNumber, page === currentPage && styles.currentPage]}>{page}</Text>
            </TouchableOpacity>
          ))}
        </View>

        
      </TamaguiProvider>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedPin && (
              <>
                <Image source={selectedPin.image} style={styles.modalImage} />
                <Text style={styles.modalPoints}>{selectedPin.points}pt</Text>
                <Text style={styles.modalText}>このピンを交換しますか？</Text>
                <View style={styles.modalButtons}>
                  <TouchableOpacity style={styles.modalButton} onPress={handleExchange}>
                    <Text style={styles.modalButtonText}>はい</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalButtonText}>いいえ</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
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
  
  
  pinsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // 左揃えに変更
    alignItems: 'center',
    padding: 20,
    paddingBottom: 100,
    marginTop: 100, // 上部のボックス分の余白を追加
  },
  pin: {
    width: '22%', // 4列のためにおおよその幅
    height: 100, // ピンの高さを100に変更
    backgroundColor: '#FFF',
    margin: '1%',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinContent: {
    flex: 1, // ピンのコンテンツをフルサイズにする
    alignSelf: 'stretch', // 横幅を親要素に合わせる
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinImage: {
    width: 50, // 画像のサイズを適宜調整
    height: 50, // 画像のサイズを適宜調整
    resizeMode: 'contain', // 画像のリサイズモードを設定
  },
  pointContainer: {
    position: 'absolute',
    bottom: 5, // ピンの下部に配置
    width: '100%',
    alignItems: 'center',
  },
  pointText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080', // グレーに設定
  },
  pagination: {
    position: 'absolute',
    bottom: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  modalPoints: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#008CBA',
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  header: {
    position: 'absolute',
    top: 40, 
    left: 20, 
  },
});
