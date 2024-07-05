import React from 'react'
import { View, Text, Button } from 'react-native'
const Header = () => {
 return (
<View style={styles.headerContainer}>
    
<Text style={styles.headerText}>ヘッダー</Text>
</View>
 )
}
const styles = {
  headerContainer: {
    height: 120,
    
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  headerText: {
    
    color: '#777',
    fontSize: 16,
  },
} as const;
export default Header