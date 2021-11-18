import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image, Modal} from 'react-native';
import {gStyle} from '../../styles/style'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Form from './Form'


export default function Main({navigation}) {
    const loadScene = () => {
        navigation.navigate('Contacts');
    }

    const [news, setNews] = useState([
        { name : 'Google', anons: 'Google!!', full: 'Google is Cool', key: '1', img: 'https://itproger.com/img/courses/1615637098.jpg' },
        { name : 'Apple', anons: 'Apple!!', full: 'Apple is Cool', key: '2', img: 'https://itproger.com/img/courses/1538477858.jpg'  },
        { name : 'Yandex', anons: 'Yandex!!', full: 'Yandex is Cool',  key: '3', img: 'https://itproger.com/img/courses/1496744736.jpg' },
    ])

    const [modalWindow, setModalWindow] = useState (false)

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString()
            return [
                article,
                ... list
            ]
        })
        setModalWindow(false);
    }
    return (
      <View style={gStyle.main}>
        <Modal visible={modalWindow}>
            <View style={gStyle.main}>
                <AntDesign 
                    name="close" 
                    size={34}
                    color="red" 
                    style={styles.iconClose}
                    onPress={() => setModalWindow(false)}
                />
                <Text style = {styles.title}> Форма добавления статей</Text>
                <Form addArticle={addArticle}/>
            </View>
            
        </Modal>
        <Ionicons 
            name="add-circle-outline" 
            size={34}
            color="green" 
            style={styles.iconAdd}
            onPress={() => setModalWindow(true)}
        />
        <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
        {/* <Button title='Открыть страницу' onPress ={loadScene} /> */}
        <FlatList data={news} renderItem={({item}) => (
            <TouchableOpacity style = {styles.item} onPress = {() => navigation.navigate('FullInfo' , item)} >
                 <Image style={styles.image} source = {{ uri: item.img }}
                />
               <Text style = {styles.title}>{item.name} </Text>
               <Text style = {styles.anons}>{item.anons} </Text>
            </TouchableOpacity>

        )} />
      </View>
    )  
}

const styles = StyleSheet.create({
    iconAdd: {
        textAlign: 'center',
        marginBottom: 30,
    },
    iconClose: {
        textAlign: 'center',
    },
    header: {
        marginBottom: 30,
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        marginTop: 20,
        color: '#474747',
        textAlign : 'center',
    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign : 'center',
        marginTop: 5,
        color: '#474747',
    },
    image: {
        width: '100%',
        height: 200,
    }
  
});
