import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'

import HomePage from '../HomePage';
import Alarm from '../Screens/Alarm';
import Favorites from '../Screens/Favorites';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{ 
                showLabel: false,
                style: {
                    elevation: 1,
                    paddingHorizontal: 20,
                    paddingBottom: 20,
                    paddingTop: 10,
                    height: 60,
                    backgroundColor: '#FFFFFF'
                } 
            }}>
            <Tab.Screen name="Home" component={HomePage} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon name="home" size={35} color={focused ? "#318450" : "#78c896"} />
                )
            }} />
            <Tab.Screen name="Alarm" component={Alarm} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon name="bell" size={35} color={focused ? "#318450" : "#78c896"} />
                )
            }} />
            <Tab.Screen name="Favorites" component={Favorites} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon name="star" size={35} color={focused ? "#318450" : "#78c896"} />
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon name="user" size={35} color={focused ? "#318450" : "#78c896"} />
                )
            }} />
        </Tab.Navigator>
        
    )
}

export default Tabs;