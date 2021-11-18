import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal, Alert } from 'react-native';
import { THEME } from '../theme'
import { AppButton } from './ui/AppButton';

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value)
    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Ошибка', `минимальная длина назваия 3 символа. Сейчас ${
                title.trim().length
                } символов.`
            )
        } else {
            onSave(title)
        }
    }

    const cancelHandler = () => {
        setTitle(value)
        onCancel()
    }
    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}

                    placeholder='Введите название'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={cancelHandler} >
                        Отменить
                    </AppButton>

                    <AppButton onPress={saveHandler} >
                        Сохранить
                    </AppButton>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    input: {
        borderBottomColor: THEME.MAIN_COLOR,
        width: '80%',
        borderBottomWidth: 2,
    },
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});