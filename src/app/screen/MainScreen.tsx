import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import CustomCallout from './CustomCallout'; // カスタムコールアウトをインポート

const CustomTouchableOpacity = ({ onPress, style, children }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      style={[style, isPressed && styles.pressed]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default function MainScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const markers = [
    { id: 1, coordinate: { latitude: 35.6586, longitude: 139.7454 }, title: "東京タワー", address: "東京都港区芝公園4丁目2−8", details: "観光名所" },
    { id: 2, coordinate: { latitude: 35.6255, longitude: 139.7761 }, title: "ガンダムベース東京", address: "東京都江東区", details: "ガンダム関連の展示" },
    { id: 3, coordinate: { latitude: 34.819824, longitude: 137.033426 }, title: "齋藤家", address: "愛知県豊橋市", details: "住宅" },
    { id: 4, coordinate: { latitude: 35.62356, longitude: 140.18459 }, title: "野口家", address: "千葉県東金市", details: "住宅"},
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

  const [showCross, setShowCross] = useState(false);
  const toggleCross = () => {
    setShowCross(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TamaguiProvider config={config}>
        {errorMsg ? (
          <Text style={styles.errorText}>{errorMsg}</Text>
        ) : location ? (
          <MapView
            style={[styles.map]}
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
              >
                <Callout>
                  <CustomCallout
                    title={marker.title}
                    address={marker.address}
                    details={marker.details}
                  />
                </Callout>
              </Marker>
            ))}
          </MapView>
        ) : (
          <Text style={styles.loadingText}>マップを読み込んでいます...</Text>
        )}
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
        <Button
          size="$3"
          theme="active"
          onPress={toggleCross}
          style={[styles.addbutton, showCross && styles.cancelButton]}
        >
          {showCross ? 'キャンセル' : '登録'}
        </Button>
        <CustomTouchableOpacity
          style={[styles.checkbutton, styles.shadow]}
          onPress={() => {
          }}
        >
          <Text style={styles.buttonText}>チェックイン</Text>
        </CustomTouchableOpacity>
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
    position: 'absolute',
    alignItems: 'center',
    zIndex: 1000,
  },
  crosshair: {
    fontSize: 80,
  },
  addbutton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 95,
    height: 50,
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
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  buttonText: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 90,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.5,
    transform: [{ scale: 0.95 }],
  },
});
