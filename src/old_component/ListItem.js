import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ListItem({el, deleteHandler}) {


  return (
    <TouchableOpacity onPress={()=> deleteHandler(el.key)}>
        <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
   
    text: {
        padding: 20,
        textAlign : 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 20,
        width: '60%', 
        backgroundColor: '#ccc',
        marginLeft: '20%',
    }
  
});
