import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    AsyncStorage
  } from 'react-native';

  export default class Settings extends React.Component {
    singOut = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('AuthLoading');
    }
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.singOut}
            style={styles.button}>
            <Text style={styles.text}>Sign Out</Text>  
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