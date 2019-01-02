import NewPasswordScreenView from '../views/NewPasswordScreenView'
import React from 'react';
import { Alert, Keyboard } from 'react-native';
export default class NewPasswordScreen extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }

    New = async () => {

        Keyboard.dismiss();
        Alert.alert(
            'QUEUE',
            'Apakah anda benar-benar ingat password tersebut?',
            [
              {text: 'BELUM', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'IYA', onPress: () => this.props.navigation.push("LoginView")},
            ],
            { cancelable: false }
          )
    }

    render = () => {
        return <NewPasswordScreenView onPressNewPass={()=> this.New()}/>
    }
}