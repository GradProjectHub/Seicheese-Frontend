import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';

const TestScreen=() =>{
  return (
    <View style={styles.container}>
      
      <Text>おはよう！</Text>
      <StatusBar style="auto" />

      <TamaguiProvider config={config}>
        <Button size="$3" theme="active">
            スタート
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

export default TestScreen;
