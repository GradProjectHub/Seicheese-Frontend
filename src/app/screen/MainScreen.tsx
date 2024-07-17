import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';

export default function MainScreen({ navigation }) {
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
});
