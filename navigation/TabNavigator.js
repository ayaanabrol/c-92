import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import {RFValue} from "react-native-responsive-fontsize";

import CreateBankScreen from '../screens/CreateBankScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "SearchScreen") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "CreateBankScreen") {
                        iconName = focused ? "add-circle" : "add-circle-outline";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            size={RFValue(25)}
                            color={color}
                            style={styles.icons}
                        />
                    );
                }
            })}
            activeColor={"#ee8249"}
            inactiveColor={"gray"}
        >
            <Tab.Screen name="SearchScreen" component={SearchScreen} />
            <Tab.Screen name="CreateBankScreen" component={CreateBankScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2a2a2a",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});

export default BottomTabNavigator