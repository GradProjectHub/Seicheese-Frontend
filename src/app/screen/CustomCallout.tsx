import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CustomCallout = ({ title, address, details }) => {
  return (
    <View >
      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.address}>{address}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.details}>{details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  box: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#F3F2F8',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  address: {
    color: 'gray',
    textAlign: 'center',
  },
  details: {
    color: 'gray',
    textAlign: 'center',
  },
});

export default CustomCallout;
