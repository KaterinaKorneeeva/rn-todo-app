import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import {gStyle} from '../../styles/style'



export default function FullInfo({route}) {
    // const loadScene = () => {
    //     navigation.goBack();
    // }

    return (
      <View style={gStyle.main}>
        <Image style= {styles.image} source = {{ uri: route.params.img }}/>
        <Text style={gStyle.title}>{route.params.name}</Text>
        <Text style={styles.full}>{route.params.full}</Text>
      </View>
    )
  
}


const styles = StyleSheet.create({
     
  full: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign : 'center',
    marginTop: 5,
    color: '#474747'
  },
  image: {
    width: '100%',
    height: 200,
  }


});
