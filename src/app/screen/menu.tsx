import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text>メニュー画面</Text>
      <StatusBar style="auto" />

      <TamaguiProvider config={config}>
        <Button size="$5" theme="active"onPress={() => navigation.navigate('Pin_list')}>
            ピンショップ
        </Button>
        <Button size="$5" theme="active"onPress={() => navigation.navigate('Work_list')}>
            作品一覧
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
});
