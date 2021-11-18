import React, { useState } from 'react';

import { StyleSheet, FlatList, View, Alert } from 'react-native';
import { gStyle } from './styles/style'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import MainStack from './navigate'

import 'react-native-gesture-handler'
import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/todoState';
import { ScreenState } from './src/context/screen/screenState';



const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
});

// async function loadApplication() {
//   await Font.loadAsync({
//     'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
//     'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
//   });
// }

//Реак Нэтив начинает работать именно с файлом App.js 
//и его следует сделать системным без какого-либо шаблона и показывать какой Layout нам рендерить
//логика - работа с шрифтамиь работа с конекстами 

export default function App() {
  const [font, setFont] = useState(false);


  return (
    <>
      {(font)
        ?
        <ScreenState>
          <TodoState>
            <MainLayout></MainLayout>
          </TodoState>
        </ScreenState>
        :
        <AppLoading
          startAsync={fonts}
          onFinish={() => setFont(true)}
          onError={err => console.warn(err)}
        />
      }
    </>
  )
}