import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TamaguiProvider, Input, YStack, XStack, Label } from 'tamagui';
import config from '../../tamagui.config';

export default function SubScreen({ navigation }) {
  return (
    <TamaguiProvider config={config}>
      <View style={styles.container}>
        <YStack
          backgroundColor="white"
          padding="$4"
          borderRadius="$4"
          width="90%"
          maxWidth={400}
        >
          <Text style={styles.title}>詳細情報を登録</Text>
          
          <Label htmlFor="workName" style={styles.label}>作品名</Label>
          <Input id="workName" placeholder="作品名を入力" style={styles.input} />
          
          <Label htmlFor="registrationName" style={styles.label}>登録名</Label>
          <Input id="registrationName" placeholder="登録名を入力（任意）" style={styles.input} />
          
          <Label htmlFor="memo" style={styles.label}>メモ</Label>
          <Input id="memo" placeholder="メモを入力" multiline numberOfLines={4} style={styles.input} />
          
          <XStack justifyContent="space-between" marginTop="$4">
            <Button 
              onPress={() => navigation.goBack()} 
              style={styles.button}
              backgroundColor="#f0f0f0"
              color="#333"
            >
              キャンセル
            </Button>
            <Button 
              onPress={() => console.log('登録')} 
              style={styles.button}
              backgroundColor="#4a90e2"
              color="white"
            >
              登録
            </Button>
          </XStack>
        </YStack>
        
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: 'white',
    borderColor: '#e0e0e0',
    color: '#333',
  },
  button: {
    width: '48%',
  },
});