import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Form({addHandler}) {

    const [text, setValue] = useState ('') 

    const onChange = (text) => {
        setValue(text)

    };
  

  return (
      <View>
            <TextInput style={styles.input}  onChangeText = {onChange} placeholder ='Внесите задачу...'/>
            <Button color='' onPress ={() => addHandler(text) } title= "Добавить задачу"/>
      </View>
  );
}



const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderColor: '#000',
        borderBottomWidth: 1,
        marginVertical: '20%',
        marginHorizontal: '20%',
        width: '60%',


    },

  
});

