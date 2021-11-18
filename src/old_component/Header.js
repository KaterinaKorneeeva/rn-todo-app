import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {


  return (
      <View styles={styles.main}>
          <Text styles={styles.text}> Список дел</Text>
      </View>
  );
}


const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        backgroundColor: 'green',


    },
    text: {
        color: 'red',
        fontSize: 19,
        textAlign: 'center',
    }

  
});
