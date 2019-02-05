import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'native-base';

// Auth stack screen imports
import AuthLoading from './src/components/screens/AuthLoading';
import Welcome from './src/components/screens/Welcome';
import SignUp from './src/components/screens/SignUp';
import SignIn from './src/components/screens/SignIn';
import ForgetPassword from './src/components/screens/ForgetPassword';

// App stack screen imports
import Home from './src/components/screens/Home';
import Settings from './src/components/screens/Settings';
import Profile from './src/components/screens/Profile';


// App tabs located at the bottom of the screen
const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  },
  Settings: {
    screen: Settings
  }
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    // Set the header icon
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name='md-menu' size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})

// App Stack
const AppDrawerNavigator = createDrawerNavigator({
  Tabs: AppStackNavigator,
  Home: Home,
  Profile: Profile,
  Settings: Settings
});

// Auth Stack
const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: () => ({
      title: `Welcome to this app`, //for the header screen
      headerBackTitle: 'Back'
    }),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      title: `Create a new account`,
    }),
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({
      title:`Log in to your account`,
    }),
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: () => ({
      title:`Create a new password`,
    }),
  },
})

export default createSwitchNavigator({
  // screen: name
  AuthLoading: AuthLoading,
  Auth: AuthStackNavigator, //the Auth Stack
  App: AppDrawerNavigator, //the App Stack
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
