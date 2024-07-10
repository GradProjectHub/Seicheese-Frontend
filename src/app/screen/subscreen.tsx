import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';

export default function SubScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TamaguiProvider config={config}>
          <Button size="$3" theme="active" onPress={() => navigation.navigate('MainScreen')}>
            戻る
          </Button>
        </TamaguiProvider>
      </View>
      <Text>subscreen！</Text>
      <StatusBar style="auto" />
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
  header: {
    position: 'absolute',
    top: 40, 
    left: 20, 
  },
});
