import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import { AppTextBold } from '../components/ui/AppTextBold';
export const Todo = ({ todo,  onRemove, onOpen }) => {

  
  const longPressHandler = () => {
    onRemove(todo.id)
  }

  return (
      <TouchableOpacity
        onPress={() => onOpen(todo.id)}
        onLongPress ={longPressHandler}
      >
        <View style={styles.todo}>
          <AppTextBold>{todo.title}</AppTextBold>
        </View>
      </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    },

 
});
