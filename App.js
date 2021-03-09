import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import {Platform} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ThemeProvider, Button, colors} from 'react-native-elements';
import {useColorScheme} from 'react-native-appearance';
import BottomTab from './components/BottomTab';
import Main from './pages/BookShelf';
import My from './pages/My';
import Search from './pages/Search';
import AddBook from './pages/AddBook';
import AddBook2 from './pages/AddBook2';
import Camera from './pages/Camera';

const theme = {
  Button: {
    raised: true,
  },
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = (props) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Main}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="book" color={focused ? '' : 'gray'} />
        ),
        tabBarLabel: '书架',
      }}
    />
    <Tab.Screen
      name="My"
      component={My}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="person" color={focused ? '' : 'gray'} />
        ),
        tabBarLabel: '我的',
      }}
    />
  </Tab.Navigator>
);

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="AddBook" component={AddBook2} />
            <Stack.Screen name="Camera" component={Camera} />
            {/* <Stack.Screen name="AddBook2" component={AddBook2} /> */}
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
