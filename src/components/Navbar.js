import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import { AppTextBold } from '../components/ui/AppTextBold';
import {THEME} from '../theme'
export const Navbar = props => {


  return (
      <View style={{...styles.navbar, ...Platform.select({
          ios: styles.navbarIos,
          android :  styles.navbarAndroid,
      })}}>
          <AppTextBold style={styles.text}>{props.title}</AppTextBold>
      </View>
  );
}


const styles = StyleSheet.create({
    navbar: {
        height: 70  ,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbarIos: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1,
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : THEME.WHITE_COLOR,
        fontSize: 19,
        textAlign: 'center',
    }

  
});
