import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const rootStack = createStackNavigator({
    Main
});

const Routes = createAppContainer(rootStack);

export default Routes;