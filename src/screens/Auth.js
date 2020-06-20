import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View, 
         TextInput, TouchableOpacity, Platform } from 'react-native';

import backgroundImage from '../../assets/imgs/login.jpg';
import commonStyles from '../commonStyles';

export default class Auth extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isNewUser: false,
  }

  signinOrSignup = () => {
    if ( this.state.isNewUser ) {

    } else {

    }
  }

  render() {
    return (
      <ImageBackground style={styles.background} source={backgroundImage}>
        <Text style={styles.title}>
          Tasks
        </Text>
        <View style={styles.container}>
          <Text style={styles.subtitle}>
            {this.state.isNewUser ? 'Crie sua conta' : 'Login'}
          </Text>
          {this.state.isNewUser &&
            <TextInput placeholder='Nome' value={this.state.name} style={styles.input} 
                       onChangeText={name => this.setState({name})}/>
          }
          <TextInput placeholder='E-mail' value={this.state.email} style={styles.input} 
                     onChangeText={email => this.setState({email})}/>
          <TextInput placeholder='Senha' value={this.state.password} style={styles.input} 
                     onChangeText={password => this.setState({password})} secureTextEntry={true}/>
          {this.state.isNewUser &&
            <TextInput placeholder='Confirme a senha' value={this.state.confirmPassword} style={styles.input} 
                       onChangeText={confirmPassword => this.setState({confirmPassword})}/>
          }
          
          <TouchableOpacity onPress={this.signinOrSignup}>
            <View style={styles.button}>
              <Text style={styles.text}>
                {this.state.isNewUser ? 'Entrar' : 'Cadastrar'} 
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{padding: 10}} 
            onPress={() => this.setState({isNewUser: !this.state.isNewUser})}>
          <Text style={styles.text}>
            {this.state.isNewUser ? 'Já possui conta?' : 'Ainda não possui conta?'} 
          </Text>
        </TouchableOpacity>
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
  subtitle: {
    fontSize: 20,
    fontFamily: commonStyles.fontFamily,
    color: '#FFF',
    textAlign: 'center',
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
    backgroundColor: 'rgba(100,100,100,0.3)',
    borderRadius: 15
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