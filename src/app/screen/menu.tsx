import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { TamaguiProvider, YStack, XStack } from 'tamagui';
import config from '../../tamagui.config';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MenuScreen({ navigation }) {
  const [animeVisible, setAnimeVisible] = useState(true);
  const [mangaVisible, setMangaVisible] = useState(true);
  const [dramaVisible, setDramaVisible] = useState(true);

  const toggleSwitch = (setter) => () => setter(prev => !prev);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.whiteBox}>
        <ScrollView>
          <TamaguiProvider config={config}>
            <YStack space="$6" padding="$4">
              <View style={styles.titleContainer}>
                <Text style={styles.mainTitle}>メニュー</Text>
              </View>
              
              <YStack space="$4" alignItems="center">
                <TouchableOpacity onPress={() => navigation.navigate('Work_list')}>
                  <Text style={styles.linkText}>作品一覧</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Pin_list')}>
                  <Text style={styles.linkText}>ピン一覧</Text>
                </TouchableOpacity>
              </YStack>
              
              <YStack space="$4">
                <Text style={styles.sectionTitle}>マップ設定</Text>
                <YStack space="$3" paddingLeft="$4">
                  <Text style={styles.subSectionTitle}>聖地の非表示</Text>
                  <XStack space="$4" alignItems="center" justifyContent="space-between">
                    <Text style={styles.optionText}>アニメ</Text>
                    <TouchableOpacity onPress={toggleSwitch(setAnimeVisible)}>
                      <Icon name={animeVisible ? "toggle-on" : "toggle-off"} size={30} color={animeVisible ? "#81b0ff" : "#767577"} />
                    </TouchableOpacity>
                  </XStack>
                  <XStack space="$4" alignItems="center" justifyContent="space-between">
                    <Text style={styles.optionText}>マンガ</Text>
                    <TouchableOpacity onPress={toggleSwitch(setMangaVisible)}>
                      <Icon name={mangaVisible ? "toggle-on" : "toggle-off"} size={30} color={mangaVisible ? "#81b0ff" : "#767577"} />
                    </TouchableOpacity>
                  </XStack>
                  <XStack space="$4" alignItems="center" justifyContent="space-between">
                    <Text style={styles.optionText}>ドラマ</Text>
                    <TouchableOpacity onPress={toggleSwitch(setDramaVisible)}>
                      <Icon name={dramaVisible ? "toggle-on" : "toggle-off"} size={30} color={dramaVisible ? "#81b0ff" : "#767577"} />
                    </TouchableOpacity>
                  </XStack>
                </YStack>
              </YStack>
              
              <YStack space="$4">
                <Text style={styles.sectionTitle}>アカウント設定</Text>
                <YStack space="$3" paddingLeft="$4">
                  <TouchableOpacity style={styles.settingButton} onPress={() => {}}>
                    <Text style={styles.settingButtonText}>メールアドレス変更</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.settingButton} onPress={() => {}}>
                    <Text style={styles.settingButtonText}>パスワード変更</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.settingButton, styles.deleteButton]} onPress={() => {}}>
                    <Text style={styles.deleteButtonText}>アカウント削除</Text>
                  </TouchableOpacity>
                </YStack>
              </YStack>
            </YStack>
          </TamaguiProvider>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F4F8',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    whiteBox: {
      backgroundColor: 'white',
      borderRadius: 20,
      width: '100%',
      height: '95%',
      padding: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    titleContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    mainTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#2C3E50',
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#34495E',
      marginBottom: 10,
    },
    subSectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#7F8C8D',
      marginBottom: 10,
    },
    linkText: {
      fontSize: 20,
      color: '#3498DB',
      fontWeight: '600',
      paddingVertical: 10,
    },
    optionText: {
      fontSize: 16,
      color: '#2C3E50',
    },
    settingButton: {
      backgroundColor: '#ECF0F1',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginBottom: 10,
    },
    settingButtonText: {
      color: '#2C3E50',
      fontSize: 16,
      fontWeight: '600',
    },
    deleteButton: {
      backgroundColor: '#E74C3C',
    },
    deleteButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
  });