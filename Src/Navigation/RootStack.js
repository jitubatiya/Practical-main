import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home/Home';
import Serach from '../Screen/Serach/Serach';
import Favourites from '../Screen/Favourites/Favourites';
import DetailPage from '../Screen/DetailPage/DetailPage';
const RootStackNav = createNativeStackNavigator();

const RootStack = () => (
    <RootStackNav.Navigator
        screenOptions={{
            headerShown: false, headerBackTitleVisible: false
        }}
    >
        <RootStackNav.Screen name="Home" component={Home} />
        <RootStackNav.Screen name="Serach" component={Serach} />
        <RootStackNav.Screen name="Favourites" component={Favourites} />
        <RootStackNav.Screen name="DetailPage" component={DetailPage} />
    </RootStackNav.Navigator>
)
export default RootStack; 