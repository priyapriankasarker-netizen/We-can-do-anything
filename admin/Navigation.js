import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Add your screens here */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;