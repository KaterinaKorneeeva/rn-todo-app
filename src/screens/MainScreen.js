import React, {useState, useEffect, useContext, useCallback} from 'react'
import { StyleSheet, FlatList, View, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../theme'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'
import { AppLoader } from '../components/ui/AppLoader'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'

export const MainScreen = () => {
    // const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext) // получаем из контекста
    const {changeScreen} = useContext(ScreenContext) // получаем из контекста
    const [deviceWidth, setDeviceWidth ]  = useState(
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
    )
   

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

   useEffect(() => {
      loadTodos()
    },[])


    useEffect(() => {
        const upDate = () => {
            const width = 
            Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }
        Dimensions.addEventListener('change', upDate)
        return () => {
            Dimensions.removeEventListener('change', upDate) 
        }
    })

    if (loading) {
        return <AppLoader />
    }

    if (error) {
        return (
        <View style={styles.center}>
            <AppText style={styles.error}>{error}</AppText>
            <AppButton onPress={loadTodos}>Повторить</AppButton>
        </View>
        )
    }
 
    let content =
        <View style={{width:deviceWidth}}> 
            <FlatList
                data={todos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />)
                }
            />
        </View>

    if (todos.length === 0) {
        content = <View style={styles.imgWrap}>
            <Image
                style={styles.image}
                //локальные картинки 
                source={require('../../assets/no-items.png')}
            //из веба
            // source = {{
            //     uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
            // }}
            />
        </View>
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )

}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    center: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontSize: 20,
        color: THEME.DANGER_COLOR
    }

});