import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View, 
         TextInput, TouchableOpacity, Platform } from 'react-native';

import backgroundImage from '../../assets/imgs/login.jpg';
import commonStyles from '../commonStyles';

export default class Auth extends Component {

  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <ImageBackground style={styles.background} source={backgroundImage}>
        <Text style={styles.title}>
          Tasks
        </Text>
        <View style={styles.container}>
          <TextInput placeholder='E-mail' value={this.state.email} style={styles.input} 
                     onChangeText={email => this.setState({email})}/>
          <TextInput placeholder='Senha' value={this.state.password} style={styles.input} 
                     onChangeText={password => this.setState({password})}/>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.text}>
                Entrar
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 70,
    marginBottom: 10
  },
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 10,
    backgroundColor: '#FFF',
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 15
  },
  container: {
    padding: 20,
    width: '90%',
  },
  button: {
    backgroundColor: '#080',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    fontFamily: commonStyles.fontFamily,
    color: '#FFF',
    fontSize: 20,
  }
});