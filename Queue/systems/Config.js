import React from 'react'
import { AsyncStorage } from 'react-native'

import { createBottomTabNavigator, createTabNavigator, createStackNavigator, createAppContainer }
 from 'react-navigation'

// App Screen
import SecondScreen from '../controllers/DashboardScreen'
import FirstScreen from '../controllers/LoginScreen'
import RegisterScreenView from '../controllers/RegisterScreen'

// ********************************************************************************
// * APP Config
// ********************************************************************************

export const AppConfig = {
}

// ********************************************************************************
// * Main Drawer Navigator
// ********************************************************************************

export const MainDrawer = (auth) => {
    return createAppContainer(
        createStackNavigator({

            First: {
                screen: FirstScreen
            },
            Second: {
                screen: SecondScreen
            },
            RegisterView:{
                screen: RegisterScreenView
            }
        }, {
                headerMode: 'none',
                disableOpenGesture: true,
                initialRouteName: auth ? "Second" : "First"
            })
    )
}