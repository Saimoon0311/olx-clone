import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home"
import {View,Text,FlatList,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView,Image,Linking} from 'react-native';
import Chats from "../screens/Chat"
import Myaccount from "../screens/Myaccount.js"
import Myads from "../screens/Myad"
import Sell from "../screens/Sell"
import Navigation from "./navigation";
import { ActivityIndicator } from "react-native-paper";
import { style } from "styled-system";
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator 
    
    
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard:true,
        tabBarActiveTintColor:"#0c0e87",
        swipeEnabled:true,
        animationEnabled:true,
        tabBarActiveBackgroundColor:"#f5f5f5",
        
      })}

    >
      <Tab.Screen name="Home" 
      options={{ tabBarIcon: ({ color }) => ( <Ionicons name="home" 
      size={25} 
      color={color} /> )
       ,title:"HOMES",
       tabBarLabelStyle:{
        fontWeight:"bold"
               },
       }}   component={Home}  />


      <Tab.Screen name="Chats" options={{ tabBarIcon: ({ color }) => ( <Ionicons name="chatbox" 
      size={25} 
      color={color} /> )
       ,title:"CHATS",
       tabBarLabelStyle:{
        fontWeight:"bold"
               },
       }}    component={Chats}/>
{/* <BlurView   blurRadius={1} downsampleFactor={10} overlayColor={'rgba(0, 0, 255, .6)'}> */}
             <Tab.Screen name="Sell" options={{ tabBarIcon: () => {return(
                    <Image source={require("../Images/imm.png")}      style={{height:50,width:50,position:"absolute",bottom:0}}         /> 

                    )} 
              ,title:"SELL",
              tabBarLabelStyle:{
       fontSize:18,
       fontWeight:"bold"
              },
       
       }}    component={Sell} />
{/* </BlurView> */}
      <Tab.Screen name="Myad" options={{ tabBarIcon: ({ color }) => ( <Ionicons name="heart" 
      size={25} 
      color={color} /> )
       ,title:"MY ADS",
       tabBarLabelStyle:{
        fontWeight:"bold"
               },
       }}    component={Myads} />

<Tab.Screen name="Myaccount" options={{ tabBarIcon: ({ color }) => ( <Ionicons name="person" 
      size={25} 
      color={color} /> )
       ,title:"ACCOUNT",
       tabBarLabelStyle:{
        fontWeight:"bold"
               },
       }}    component={Myaccount} />
    </Tab.Navigator>
  );
}
export default MyTabs
