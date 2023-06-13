import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import Category from './src/pages/Category';
import About from './src/pages/About';
import DetilProduct from './src/pages/DetilProduct';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Kategori') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        } else if (route.name === 'Bantuan') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }


        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='Kategori' component={Category} />
      <Tabs.Screen name='Bantuan' component={About} />
    </Tabs.Navigator>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name='main' component={TabNavigation} />
        <Stack.Screen name='detil' component={DetilProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
