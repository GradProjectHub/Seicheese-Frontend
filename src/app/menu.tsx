import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';
import Footer from './main/Footer'
import Header from './main/Header';

const MenuScreen=() =>{
  return (
    <View style={styles.container}>
      <Header />
      <Text>こんにちは！</Text>
      <StatusBar style="auto" />

      <TamaguiProvider config={config}>
        <Button size="$3" theme="active">
            スタート
        </Button>
      </TamaguiProvider>
      <Footer />
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
});

export default MenuScreen;
