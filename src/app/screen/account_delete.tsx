import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';
import Icon from 'react-native-vector-icons/AntDesign'; // アイコンライブラリのインポート

export default function Account_delete({ navigation }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <TamaguiProvider config={config}>
        <View style={styles.boxTop}></View>
        <View style={styles.authBox}>
          <Text style={styles.authText}>アカウント削除</Text>
          
          <Text style={styles.warningText}>本当にアカウントを削除しますか？</Text>
          <Text style={styles.subWarningText}>※以降この操作は取り消せません。</Text>

          <TouchableOpacity 
            style={styles.checkboxContainer} 
            onPress={() => setChecked(!isChecked)}
          >
            <Icon 
              name={isChecked ? "checksquare" : "checksquareo"} 
              size={30} 
              color="#B9B8B8" 
            />
            <Text style={styles.checkboxLabel}>はい、同意します。</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.deleteButton, !isChecked && styles.disabledButton]}
            onPress={() => { if (isChecked) { /* handle delete action */ }}}
            disabled={!isChecked}
          >
            <Text style={styles.deleteButtonText}>削除</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('MenuScreen')}>
            <Text style={styles.cancelButtonText}>キャンセル</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxBottom}></View>
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
  boxTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#FFFFFF',
    zIndex: 2,
  },
  boxBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#FFFFFF',
    zIndex: 2,
  },
  authBox: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1,
  },
  authText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 30,
  },
  warningText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
    textAlign: 'center',
  },
  subWarningText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxLabel: {
    color: '#B9B8B8',
    fontSize: 16,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ff9999',
  },
  cancelButton: {
    backgroundColor: '#B0B0B0',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
