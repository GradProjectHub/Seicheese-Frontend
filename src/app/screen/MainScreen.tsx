import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { Button, TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MainScreen({ navigation }) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // 仮のマーカーデータ
  const markers = [
    { id: 1, coordinate: { latitude: 35.6255, longitude: 139.7761 }, title: "ガンダムベース東京" },
    { id: 2, coordinate: { latitude: 35.6586, longitude: 139.7454 }, title: "スカイツリー" },
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('位置情報へのアクセスが拒否されました');
        Alert.alert(
          'エラー',
          '位置情報へのアクセスが拒否されました。設定から位置情報へのアクセスを許可してください。',
          [{ text: 'OK' }]
        );
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        setErrorMsg('位置情報の取得に失敗しました');
        Alert.alert(
          'エラー',
          '位置情報の取得に失敗しました。インターネット接続を確認し、再度お試しください。',
          [{ text: 'OK' }]
        );
      }
    })();
  }, []);

  // 十字ポインターの表示状態を管理するためのuseStateフック
  const [showCross, setShowCross] = useState(false);

  // 十字ポインターの表示/非表示を切り替える関数
  const toggleCross = () => {
    setShowCross(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TamaguiProvider config={config}>
        {/* 地図の表示 */}
        {errorMsg ? (
          <Text style={styles.errorText}>{errorMsg}</Text>
        ) : location ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {markers.map(marker => (
              <Marker
                key={marker.id}
                coordinate={marker.coordinate}
                title={marker.title}
              />
            ))}
          </MapView>
        ) : (
          <Text style={styles.loadingText}>マップを読み込んでいます...</Text>
        )}
        {/* 十字ポインターと決定ボタンの表示 */}
        {showCross && (
          <View style={styles.crosshairContainer}>
            <Text style={styles.crosshair}>+</Text>
            <Button
              size="$3"
              theme="active"
              onPress={() => {
                setShowCross(false);
                navigation.navigate('SubScreen');
              }}
              style={styles.confirmButton}
            >
              決定
            </Button>
          </View>
        )}
        {/* 登録ボタン（十字表示中はキャンセルボタンに変化） */}
        <Button
          size="$3"
          theme="active"
          onPress={toggleCross}
          style={[styles.addbutton, showCross && styles.cancelButton]}
        >
          {showCross ? 'キャンセル' : '登録'}
        </Button>

        {/* チェックインボタン */}
        <Button
          size="$3"
          theme="active"
          onPress={() => navigation.navigate('SubScreen')}
          style={styles.checkbutton}
        >
          チェックイン
        </Button>
      </TamaguiProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F2F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crosshairContainer: {
    alignItems: 'center',
    zIndex: 1000,
  },
  crosshair: {
    fontSize: 50,
  },
  addbutton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 95,  // ボタンの幅
    height: 50,  // ボタンの高さ
  },
  checkbutton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#005DB4',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 120,
    height: 90,
    zIndex: 999,
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: 'green',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});
