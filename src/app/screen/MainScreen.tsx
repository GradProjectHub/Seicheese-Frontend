import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';

export default function MainScreeen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>master</Text>
      <StatusBar style="auto" />


      <TamaguiProvider config={config}>
        <Button size="$3" theme="active" onPress={() => navigation.navigate('SubScreen')}>
            サブへ
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
