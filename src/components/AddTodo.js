import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, Keyboard } from 'react-native';
import { THEME } from '../theme'
import { AntDesign } from '@expo/vector-icons';

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss() //  закрытие клавиатуры
        } else {
            Alert.alert('Название дела не может быть пустым')
        }


    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                // onChangeText = {text => setValue(text)}
                onChangeText={setValue}
                value={value}
                placeholder="Ввведите задачу"
                autoCorrect={false}
                autoCapitalize="none"
            // keyboardType="number-pad"

            />
            {/* иконка с текстом */}
            <AntDesign.Button
                onPress={pressHandler}
                name="pluscircleo"
            >
                Добавить
            </AntDesign.Button>




        </View>
    );
}


const styles = StyleSheet.create({
    block: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,

    },
    input: {
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: THEME.MAIN_COLOR,
        width: '60%',
        padding: 10,
    },
    button: {
        width: '30%'
    }
});
