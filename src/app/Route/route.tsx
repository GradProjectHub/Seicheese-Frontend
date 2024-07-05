import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screen/MainScreen';
import SubScreen from '../screen/subscreen';
import TestScreen from '../test';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuScreen from '../menu';

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

//ボタンなどに使う
function MainStackNavigator() {
  return (
    <MainStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <MainStack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false,  }} />
      <MainStack.Screen name="SubScreen" component={SubScreen} />
    </MainStack.Navigator>
  );
}


// フッター用
export default function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="マップ"
        screenOptions={{
          tabBarActiveTintColor: '#000000',
        }}
      >
        <Tab.Screen
          name="スタンプ"
          component={TestScreen}
          options={{
            tabBarLabel: 'スタンプ',
            tabBarIcon: ({ color, size }) => (
              <Icon name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="マップ"
          component={MainStackNavigator}
          options={{
            tabBarLabel: 'マップ',
            tabBarIcon: ({ color, size }) => (
              <Icon name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="メニュー"
          component={MenuScreen}
          options={{
            tabBarLabel: 'メニュー',
            tabBarIcon: ({ color, size }) => (
              <Icon name="file" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }