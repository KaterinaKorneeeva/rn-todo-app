import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableHighlight, Platform} from 'react-native';

export default function App() {

  
  const handleButtonPress= () => 
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  const handleButtonPress2= () => 
  Alert.prompt(
    "Alert Title",
    "Main Text", text => console.log(text)
   
  );


  return (
    <SafeAreaView style={styles.mainBlock}>
      <View style={[styles.box, {backgroundColor: 'orange'}]}></View>
      <View style={[styles.box, {backgroundColor: 'blue'}]}></View>
      <View style={[styles.box, , {backgroundColor: 'grey'}]}></View>
    </SafeAreaView>
    // <SafeAreaView  style={[simpleStyles, styles.container]}>
    //   <Text style={styles.text}> Hello Open up App.js to start working on your app!</Text>
    //   <Text numberOfLines={1} >  Hello Open up App.js {'\n'} to start working on your app!</Text>
     
    //   <Button
    //   onPress = {handleButtonPress}
    //   title="Learn More"
    //   />

    //   <Button
    //   onPress = {handleButtonPress2}
    //   title="Learn More"
    //   />
    //   <TouchableHighlight onPress={handleButtonPress2}>
    //     <Image
    //       style={styles.tinyLogo}
    //       source={{
    //         uri: 'https://reactnative.dev/img/tiny_logo.png',
    //       }}
    //     />
    //   </TouchableHighlight>
    //   <View style={styles.box}>
    //   <Text numberOfLines={1} >  New Viww{'\n'} </Text>
    //   </View>

    //   <StatusBar style="auto" />
    // </SafeAreaView>

    
  );
}


const simpleStyles = {backgroundColor:'orange', color: 'blue'}

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'flex-end',
    justifyContent: 'space-around',

    alignItems: 'center'

  },
  box: {
    
    backgroundColor: 'red',
    width: 100,
    height:100,
  }
  // text: {
  //   color :'red',
  // },
  // textorange: {
  //   color :'orange !important' ,
  // },
  // tinyLogo: {
  //   width: 150,
  //   height: 150,
  // },
  // box: {
  //   backgroundColor: '#CCC',
  //   width: '50%',
  //   height: 150,
  //   borderRadius: 5,
  //   opacity:.9,
  //   borderWidth:2,
  //   borderColor: 'green',
  //   borderStyle: 'dotted',
  //   top: Platform.OS === "ios" ? 30 : 150,
  //   left: 200,
  //   position: 'absolute',
  // }
});
