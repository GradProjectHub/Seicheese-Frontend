import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <TamaguiProvider config={config}>
        <View style={styles.loginBox}>
          <Text style={styles.loginText}>ログイン</Text>
          
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
          
          <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.linkText}>新規登録</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>パスワードを忘れた方はこちら</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={() => navigation.navigate('MainApp')}
          >
            <Text style={styles.loginButtonText}>ログイン</Text>
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
  loginBox: {
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
  loginText: {
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
  linkText: {
    color: 'blue',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
