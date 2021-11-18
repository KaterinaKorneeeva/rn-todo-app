import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

import { Formik } from 'formik';
export default function Form({addArticle}) {

  return (
    <View>
        <Formik 
            initialValues={{name: '', anons: '', full: '', img: ''}}
            onSubmit={(values, action)=> {
                console.log(values);
                addArticle(values)
                action.resetForm();
            }}>
                {(props) => (
                    <View>
                        <TextInput 
                            style={styles.input}
                            value= {props.values.name} 
                            placeholder = 'Введите название' 
                            onChangeText={props.handleChange('name')} // встроенная ф-ия handleChange и указываем поле
                        />
                         <TextInput 
                             style={styles.input}
                            value= {props.values.anons} 
                            multiline
                            placeholder = 'Введите анонс' 
                            onChangeText={props.handleChange('anons')} // встроенная ф-ия handleChange и указываем поле
                        />
                         <TextInput 
                            style={styles.input}
                            value= {props.values.full} 
                            multiline
                            placeholder = 'Введите текст статьи' 
                            onChangeText={props.handleChange('full')} // встроенная ф-ия handleChange и указываем поле
                        />
                         <TextInput 
                            style={styles.input}
                            value= {props.values.img} 
                            placeholder = 'вставьте фото' 
                            onChangeText={props.handleChange('img')} // встроенная ф-ия handleChange и указываем поле
                        />
                        <Button
                            title= 'Добавить'
                            onPress={props.handleSubmit} // встроенная ф-ия handleSubmit 
                        /> 
                    </View>
                )} 

        </Formik>
    </View>
  );
}

export const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver'
    }

})






