import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <IconButton
        icon="magnify"
        size={24}
        onPress={() => console.log('ボタンクリック')}
      />
    </View>
  );
}

const styles = {
  headerContainer: {
    height: '10%',
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 50, 
  },
  iconButton: {
    marginTop: 10, 
  }
} as const;

export default Header;
