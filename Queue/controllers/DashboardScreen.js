import React from 'react';
import { ToastAndroid, BackHandler, AsyncStorage, Platform, PermissionsAndroid, Dimensions } from 'react-native';

import { SetContentRefresher } from '../systems/Contents';
import SecondScreen from "../views/SecondScreenView";

export default class DashboardScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {}

        this.method = {
            modalOpen: this._modalOpen.bind(this),
            modalClose: this._modalClose.bind(this),
            setState: this._setState.bind(this),
        }

    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            SetContentRefresher(this.ContentRefresh);
        })
    }

    componentWillUnmount() { }

    // * ====================================================================
    // ** MODAL SETUP
    // * ====================================================================

    _modalOpen = () => { this.setState({ isModalVisible: true }) }

    _modalClose = () => { this.setState({ isModalVisible: false }) }

    _showModal = (modal) => {

        this.setState({
            modal: modal,
        }, () => {
            this._modalOpen();
        })

    }

    _setState = (data, res = null) => {
        this.setState(data, res);
    }

    // * ====================================================================
    // ** NAVIGATION SETUP
    // * ====================================================================

    ActionNavigate = (Page, Params) => {
        const { push } = this.props.navigation;

        push(Page, Params);
    }

    ActionPop = (value) => {
        this.props.navigation.pop(value)
    }

    ContentRefresh = (con) => {
        this.setState({
            content: con
        });
    }

    componentWillMount = () => {}

    render = () => {

        return <SecondScreen />

    }


}