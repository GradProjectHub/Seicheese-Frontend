import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Signup() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <TamaguiProvider config={config}>
        <View style={styles.registerBox}>
          <Text style={styles.registerText}>新規登録</Text>
          
          <Text style={styles.label}>メールアドレス</Text>
          <TextInput 
            style={styles.textInput} 
            placeholder="メールアドレス" 
            keyboardType="email-address"
          />

          <Text style={styles.label}>パスワード</Text>
          <TextInput 
            style={styles.textInput} 
            placeholder="パスワード" 
            secureTextEntry
          />

          <Text style={styles.label}>パスワード再入力</Text>
          <TextInput 
            style={styles.textInput} 
            placeholder="パスワード再入力" 
            secureTextEntry
          />

          <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
            <Text style={styles.registerButtonText}>登録</Text>
          </TouchableOpacity>
        </View>
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
  registerBox: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.25, // for iOS shadow
    shadowRadius: 3.84, // for iOS shadow
  },
  registerText: {
    fontSize: 24,
    marginBottom: 20,
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
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
