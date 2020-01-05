import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import CheckIns from './pages/CheckIns';
import HelpList from './pages/HelpOrders/HelpList';
import HelpDetails from './pages/HelpOrders/HelpDetails';
import Help from './pages/HelpOrders/Help';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn }),
        App: createBottomTabNavigator(
          {
            CheckIns,
            HelpOrders: {
              screen: createStackNavigator(
                {
                  HelpList,
                  Help,
                  HelpDetails,
                },
                {
                  headerBackTitle: false,
                  defaultNavigationOptions: {
                    title: '',
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),

              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="help" size={22} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
