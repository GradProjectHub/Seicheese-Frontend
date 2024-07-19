import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Pass_change() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <TamaguiProvider config={config}>
        <View style={styles.boxTop}></View>
        <View style={styles.authBox}>
          <Text style={styles.authText}>パスワード変更</Text>
          
          <Text style={styles.label}>新しいパスワード</Text>
          <TextInput 
            style={styles.textInput} 
            placeholder="新しいパスワード" 
            secureTextEntry
          />
          
          <Text style={styles.label}>新しいパスワード（確認）</Text>
          <TextInput 
            style={styles.textInput} 
            placeholder="新しいパスワード（確認）" 
            secureTextEntry
          />
        
          <TouchableOpacity style={styles.authButton} onPress={() => {}}>
            <Text style={styles.authButtonText}>決定</Text>
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
    zIndex: 2, // ボックスが上に来るように設定
  },
  boxBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#FFFFFF',
    zIndex: 2, // ボックスが上に来るように設定
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
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordLink: {
    marginBottom: 15,
  },
  linkText: {
    color: 'blue',
    alignSelf: 'flex-start',
  },
  authButton: {
    backgroundColor: '#4CAF50', // 緑色
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  authButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
