import React, {Component} from 'react';
import { StyleSheet, View, Button, AsyncStorage} from 'react-native';
import api from '../services/api';

export default class App extends Component {
  state = {
    loggedInUser: null,
    errorMessage: null,
  };
  signIn = async () => {
    try{
      const response = await api.post('/auth/authenticate',{
        email: 'antonio@parafernalia.net.br',
        password: '123456',
      });
  
      const { user, token } = response.data;
  
      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ]);

      this.setState({ loggedInUser: user});

      Alert.alert('Login com sucesso!');

    } catch(response){
      this.setState({ errorMessage: response.data.error });
    }
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@CodeApi:token');
    const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'));
    
    if(token && user){
      this.setState({ loggedInUser: user });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.loggedInUser && <Text>{this.state.loggedInUser}</Text>}
        {!!this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}
        <Button onPress={this.signIn} title="Entrar" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
