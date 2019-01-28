import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const rootStack = createStackNavigator({
    Main,
    Product
});

const Routes = createAppContainer(rootStack);

export default Routes;