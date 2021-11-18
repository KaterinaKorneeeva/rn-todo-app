import React from 'react';
import { StyleSheet, View } from 'react-native';

export const AppCard = props =>(
    <View style={ {...styles.default, ...props.style} }>{props.children}</View>
) 

const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000', // тень для IOS
        shadowRadius: 2, // тень для IOS
        shadowOpacity: 0.3, // тень для IOS
        shadowOffset: { width: 2, height: 2}, // тень для IOS
        elevation: 8, // тень для android
        backgroundColor: '#fff',
        borderRadius: 10,
       

    },

});