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
import MakePlaceScreen from '../controllers/MakePlaceScreen'
import EmptyMyPlaceScreen from '../controllers/EmptyMyPlaceScreen'
import EditProfileScreen from '../controllers/EditProfileScreen'
import OnProcessScreen from '../controllers/OnProcessScreen'
import ProfilScreen from '../controllers/ProfileScreen'
import TakeQueueScreen from '../controllers/TakeQueueScreen'
import ImageView from '../views/components/ImageView'
import SplashScreen from '../controllers/SplashScreen';

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
            navigationOptions:{
                tabBarIcon: ({tintColor})=>(
                    <ImageView
                        imageSrc={require('../assets/images/home.png')}
                        width={25}
                        height={25} />
                ),
            },
        },
        MyQueue : {
            screen : MyQueueScreen,
            navigationOptions:{
                tabBarIcon: ({tintColor})=>(
                    <ImageView
                        imageSrc={require('../assets/images/queue.png')}
                        width={30}
                        height={30} 
                        type={'box'}/>
                ),
            }
        },
        MyPlace : {
            screen : MyPlaceScreen,
            navigationOptions:{
                tabBarIcon: ({})=>(
                    <ImageView
                        imageSrc={require('../assets/images/placeIcon.png')}
                        width={25}
                        height={25} 
                        type={'box'}/>
                ),
            }
        },
        Profil : {
            screen : ProfilScreen,
            navigationOptions:{
                tabBarIcon: ({tintColor})=>(
                    <ImageView
                        imageSrc={require('../assets/images/user.png')}
                        width={25}
                        height={25} 
                        type={'box'}/>
                ),
            }
        }
    },{
        tabBarOptions:{
            activeBackgroundColor: '#EDEDED',
            showLabel: false,
        },
})
export const MainDrawer = (auth) => {
    return createAppContainer(
        createStackNavigator({
            Splash : {
                screen : SplashScreen,
                navigationOptions:{
                    header : null
                }
            },
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
            },
            EditProfile:{
                screen: EditProfileScreen,
                navigationOptions : {
                    header: null
                }
            },
            Profile:{
                screen: ProfilScreen,
                navigationOptions : {
                    header: null
                }
            },
            Take:{
                screen: TakeQueueScreen,
                navigationOptions : {
                    header: null
                }
            },
            Make:{
                screen: MakePlaceScreen,
                navigationOptions : {
                    header: null
                }
            },
            Place:{
                screen: MyPlaceScreen,
                navigationOptions : {
                    header: null
                }
            },
            Process:{
                screen: OnProcessScreen,
                navigationOptions : {
                    header: null
                }
            }
        }, {    
                disableOpenGesture: true,
                initialRouteName: "Splash"
            })
    )
}