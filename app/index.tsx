import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Benefit, Main} from './components/screens';

function MainScreen() {
  return <Main />;
}
function BenefitScreen() {
  return <Benefit />;
}

const Stack = createNativeStackNavigator();
const RootView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Benefit" component={BenefitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RootView};
