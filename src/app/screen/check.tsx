import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute, RouteProp, NavigationProp } from '@react-navigation/native';

// ナビゲーションパラメーターの型定義
type RootStackParamList = {
  Check: { nextScreen: string };
  // 他の画面の型定義も追加
};

type CheckScreenRouteProp = RouteProp<RootStackParamList, 'Check'>;

type CheckScreenNavigationProp = NavigationProp<RootStackParamList, 'Check'>;

export default function Check() {
  const navigation = useNavigation<CheckScreenNavigationProp>();
  const route = useRoute<CheckScreenRouteProp>();
  const nextScreen = route.params.nextScreen; // 次の画面名をパラメータとして受け取る

  const handleAuthentication = () => {
    // 認証ロジックをここに追加
    const isAuthenticated = true; // 認証が成功した場合

    if (isAuthenticated) {
      navigation.navigate(nextScreen as any);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TamaguiProvider config={config}>
        <View style={styles.boxTop}></View>
        <View style={styles.authBox}>
          <Text style={styles.authText}>認証</Text>
          <Text style={styles.label}>現在のパスワード</Text>
          <TextInput style={styles.textInput} placeholder="現在のパスワード" secureTextEntry />
          <TouchableOpacity style={styles.passwordLink} onPress={() => navigation.navigate('Pass_change')}>
            <Text style={styles.linkText}>パスワードを忘れた方はこちら</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authButton} onPress={handleAuthentication}>
            <Text style={styles.authButtonText}>次へ</Text>
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
  },
  boxBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#FFFFFF',
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
    marginBottom: 15, // パスワード入力とリンクのスペース
  },
  passwordLink: {
    marginBottom: 15, // パスワード入力とリンクのスペース
  },
  linkText: {
    color: 'blue',
    alignSelf: 'flex-start',
  },
  authButton: {
    backgroundColor: '#FFA500',
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
