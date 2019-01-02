import React from 'react'
import { AsyncStorage } from 'react-native'
import { createBottomTabNavigator, createTabNavigator, createStackNavigator, createAppContainer}
 from 'react-navigation'

// App Screen
// import SecondScreen from '../controllers/DashboardScreen'
import FirstScreen from '../controllers/LoginScreen'
import RegisterScreenView from '../controllers/RegisterScreen'
import LoginSreenView from '../controllers/LoginScreen'
import ForgotScreen from '../controllers/ForgotScreen'
import ForgotCodeScreen from '../controllers/ForgotCodeScreen'
import NewPasswordScreen from '../controllers/NewPasswordScreen'
import MainScreen from '../controllers/MainScreen'
import MyQueueScreen from '../controllers/MyQueueScreen'
import MyPlaceScreen from '../controllers/MyPlaceScreen'
import EditProfileScreen from '../controllers/EditProfileScreen'

// ********************************************************************************
// * APP Config
// ********************************************************************************

export const AppConfig = {
}

// ********************************************************************************
// * Main Drawer Navigator
// ********************************************************************************
const tabNavigator = createBottomTabNavigator({
        Main : {
            screen : MainScreen,
        },
        MyQueue : {
            screen : MyQueueScreen,
        },
        Profil : {
            screen : EditProfileScreen,
        },
        MyPlace : {
            screen : MyPlaceScreen,
        }
    },{      
    tabBarOptions:{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#1c3144',
        activeBackgroundColor: '#1c3144',
        labelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 12


        },
    },
})
export const MainDrawer = (auth) => {
    return createAppContainer(
        createStackNavigator({

            First: {
                screen: FirstScreen,
                navigationOptions : {
                    header : null
                }
            },
            Second: {
                screen: tabNavigator,
                navigationOptions : {
                    header : null
                }
            },
            RegisterView:{
                screen: RegisterScreenView,
                navigationOptions : {
                    header : null
                }
            },
            LoginView:{
                screen: LoginSreenView,
                navigationOptions : {
                    header : null
                }
            },
            ForgotView: {
                screen: ForgotScreen,
                navigationOptions : {
                    header : null
                }
            },
            ForgotCodeView: {
                screen: ForgotCodeScreen,
                navigationOptions : {
                    header : null
                }
            },
            NewPassword:{
                screen: NewPasswordScreen,
                navigationOptions : {
                    header : null
                }
            }
        }, {    
                disableOpenGesture: true,
                initialRouteName: auth ? "Second" : "First"
            })
    )
}