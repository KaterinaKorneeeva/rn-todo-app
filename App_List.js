import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button,  Image, TouchableHighlight, Platform, FlatList} from 'react-native';
import Header from './src/old_component/Header'
import ListItem from './src/old_component/ListItem'
import Form from './src/old_component/Form'

export default function App() {
  const [listOfItems , setListOfItems]  = useState ([
    {text: 'Купить кофе', key: '1'},
    {text: 'Погулять', key: '2'},
    {text: 'Помыть машину', key: '3'},
  ])

  const addHandler = (text) => {
    console.log('tesxt', text),
    setListOfItems ((list) => {
      return [
        {text : text, key : Math.random().toString(36).substring(7)},
        ... list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems ((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }
  return (
      <View>
        <Header />
        <Form addHandler = {addHandler}/>
        <View>
          <FlatList data={listOfItems}  renderItem = {({item}) => (
            <ListItem el = {item} deleteHandler = {deleteHandler}/>
          )}/>
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  
});
