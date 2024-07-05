import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Route from './app/Route/route';


import Header from './app/screen/Header';


export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Route />
    </NavigationContainer>
    
  );
}
