import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_TODOS} from '../types';
import { ScreenContext } from '../screen/screenContext';
import {Http} from '../../http';

export const TodoState = ({ children }) => {
    const initialState = {
        // todos: [{ id: '2', title: 'Изучить React Native' },]
          todos: [], 
          loading: false,
          error: null,
    }

    const { changeScreen } = useContext(ScreenContext)
   
    const addTodo = async title => {
        // const response = await fetch(
        //     'https://rn-todo-app-ee55b-default-rtdb.firebaseio.com/todos.json',
        //     {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ title })
        //     }
        // )
        
        // const data = await response.json()

       
        clearError()
        try {
            const data = await Http.post(
                'https://rn-todo-app-ee55b-default-rtdb.firebaseio.com/todos.json', 
                {title}
            )
            dispatch({ type: ADD_TODO, title, id: data.name })
        } catch (e) {
            showLoader('Что-то пошло не так')
        }
       
    }

    const removeTodo = id => {

        const todo = state.todos.find(t => t.id === id)
        Alert.alert(
            'Удаление элемента',
            `Вы уверены, что хотите удалить "${todo.title}"?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: async () => {
                        changeScreen(null)
                        clearError()
                        try {
                            await Http.delete(`https://rn-todo-app-ee55b-default-rtdb.firebaseio.com/todos/${id}.json`)
                        } catch (e) {
                            showLoader('Что-то пошло не так')
                        }
                        // await fetch(`https://rn-todo-app-ee55b-default-rtdb.firebaseio.com/todos/${id}.json`, {
                        //     method: 'DELETE',
                        //     headers: { 'Content-Type': 'application/json' }
                        // })
                        dispatch({ type: REMOVE_TODO, id })
                    }
                }
            ],
            { cancelable: false }
        )

    }


//  получаем список дел  
    const fetchTodos = async title => {
        showLoader()
        clearError()
        try {
        //     const response = await fetch ('https://rn-todo-app-ee55b-default-rtdb.firebaseio.com/todos.json' , {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json' }
        // })
        // const data = await response.json()
        const data = await Http.get('https://rn-todo-app-ee55b-default-rtdb.firebaseio.com/todos.json')
        const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
        dispatch({ type: FETCH_TODOS, todos })

        } catch (e) {
            showError('Что-то пошло не так...')
            console.log(e)
        }
        finally {
            hideLoader()
        }
    }

    const updateTodo = async (id, title) => {
        clearError()
        try {
            //обновляем только title
            // await fetch(`https://rn-todo-app-ee55b-default-rtdb.firebaseio.com/todos/${id}.json`, {
            //     method: 'PATCH',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({title})
            // })
            await Http.patch(`https://rn-todo-app-ee55b-default-rtdb.firebaseio.com/todos/${id}.json`,{title} )
            dispatch({ type: UPDATE_TODO, id, title })
        } catch (e) {
            showError('Что-то пошло не так...')
            console.log(e) 
        }
       
    }
    



    const showLoader = () => dispatch({type: SHOW_LOADER})
    const hideLoader = () => dispatch({type: HIDE_LOADER})
    const showError = error => dispatch({ type: SHOW_ERROR, error })
    const clearError = () => dispatch({type: CLEAR_ERROR})


    const [state, dispatch] = useReducer(todoReducer, initialState)
    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                addTodo,
                removeTodo,
                updateTodo,
                fetchTodos,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}