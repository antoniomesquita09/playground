import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TouchableOpacity
  } from 'react-native';

  export default class SignIn extends React.Component {
    signIn = async () => {
      await AsyncStorage.setItem('userToken', '123456789');
      this.props.navigation.navigate('AuthLoading');
    }
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.signIn}
            style={styles.button}>
            <Text style={styles.text}>Complete sign In</Text>    
          </TouchableOpacity>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aa73b7',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })