import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screen/MainScreen';
import SubScreen from '../screen/subscreen';
import TestScreen from '../test';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuScreen from '../screen/menu';
import Pin_list from '../screen/pin_list';
import Work_list from '../screen/work_list';
import Stamp from '../screen/stamp';
import Work_list_detail from '../screen/work_list_detail';
import Check from '../screen/check';
import Account_delete from '../screen/account_delete';
import Mail_change from '../screen/mail_change';
import Pass_change from '../screen/pass_change';

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
function MenuStackNavigator(){
  return (
    <MainStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <MainStack.Screen name="MenuScreen" component={MenuScreen} options={{ headerShown: false,  }} />
      <MainStack.Screen name="Pin_list" component={Pin_list} />
      <MainStack.Screen name="Work_list" component={Work_list} />
      <MainStack.Screen name="Work_list_detail" component={Work_list_detail} />
      <MainStack.Screen name="Check" component={Check} />
      <MainStack.Screen name="Mail_change" component={Mail_change} />
      <MainStack.Screen name="Pass_change" component={Pass_change} />
      <MainStack.Screen name="Account_delete" component={Account_delete} />
      
    </MainStack.Navigator>
  );
}
function StampStackNavigator(){
  return (
    <MainStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <MainStack.Screen name="Stamp" component={Stamp} options={{ headerShown: false,  }} />
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
          component={StampStackNavigator}
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
          component={MenuStackNavigator}
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