/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { MainDrawer } from "./mobileskeleton/systems/Config";

export default class App extends Component {

  constructor (props) {

    super(props);

    this.state = {
      isAuth: null,
    }

  }

  componentWillMount = () => {}

  render() {

    const MyApp = MainDrawer(false);
    return <MyApp />

  }

}