import React from 'react';
import Main from './src/old_component/Main'
import FullInfo from './src/old_component/FullInfo'

import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { CreateBottomTabNavigation } from '@react-navigation/bottom-tabs'
const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer> 
        <Stack.Navigator>
            <Stack.Screen
                name = "Main"
                component = {Main}
                options = {{title: 'Главная'}}
            />
             <Stack.Screen
                name = "FullInfo"
                component = {FullInfo}
                options = {{title :'Статья'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}