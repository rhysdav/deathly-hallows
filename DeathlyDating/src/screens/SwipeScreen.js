/**
 * DealthlyDating React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content} from 'native-base';

import WelcomeScreen from './components/WelcomeScreen';
import SwipeScreen from './components/WelcomeScreen';

export default class WelcomeScreen extends Component {
  render() {
    return (
        <Container>
            <Content>
            </Content>
        </Container>
    );
  }
}
