// import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mobile from "../catagories/mobile"
import Electronic from "../catagories/electrolices"
import Book from "../catagories/book"
import Property from "../catagories/property"
import Vechicles from "../catagories/vechicles"
import Bike from "../catagories/bikes"
import Services from "../catagories/services"
import Kids from "../catagories/kids"
import MyTabs from './bottomnavigation'
import Login from "../screens/Login"
import Chatpage from "../screens/chatpage"
import Furnicheralldata from '../screens/Alldata/ferni';
import Itemdetails from '../screens/itemdetails'
import Job from "../screens/Alldata/job"
import Fashionalldata from '../screens/Alldata/fashion';
import Signup from "../screens/Signup"
import Joballdata from "../screens/Alldata/job"
import Kidalldata from "../screens/Alldata/kid"
import Bookdata from "../config/bookdata"
import Mobilealldata from "../screens/Alldata/mobilealldata"
import Bikealldata from "../screens/Alldata/bikealldata"
import Bookalldata from "../screens/Alldata/bookalldata"
import Electronicalldata from "../screens/Alldata/electronicalldata"
import Animalalldata from "../screens/Alldata/animalalldata"
import Servicesalldata from "../screens/Alldata/servicesalldata"
import Vechiclesalldata from "../screens/Alldata/vechiclesalldata"
import Vechilesdata from "../config/vechilesdata"
import Propertyalldata from "../screens/Alldata/propertyalldata"
import Business from "../catagories/bussiness"
import Home from "../screens/Home"
import Profile from '../screens/profile';
import Furnicture from "../catagories/furnicture"
import Propertyforrent from "../catagories/propertyforrent"
import Propertyforsell from '../catagories/propertyforsell';
import Businessalldata from "../screens/Alldata/businessalldata"
import Propertyrralldata from "../screens/Alldata/propertyrralldata";
import Fashin from "../catagories/fashin"
// import Furnicheralldata from '../screens/Alldata/ferni';

const Stack = createNativeStackNavigator();



export default function Navigation() {
     return (
          <Stack.Navigator
               screenOptions={({
                    headerTitleAlign: "center",
                    headerShown: false
               })}
          >
               <Stack.Screen options={{
                    title: 'Olx Pakistan',
                    headerStyle: {
                         // backgroundColor: '#870c0c',

                    },
                    headerTintColor: 'blue',

                    headerTitleStyle: {
                         fontWeight: 'bold',


                    },
               }} name="Olx Pakistan" component={MyTabs} />
               <Stack.Screen
                    name="Propertyalldata"
                    component={Propertyalldata}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Vechicles"
                    component={Vechicles}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Joballdata"
                    component={Joballdata}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
                              <Stack.Screen
                    name="Chatpage"
                    component={Chatpage}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Furnicheralldata"
                    component={Furnicheralldata}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Fashionalldata"
                    component={Fashionalldata}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Kids"
                    component={Kids}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Propertyforsell"
                    component={Propertyforsell}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Kidalldata"
                    component={Kidalldata}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Fashin"
                    component={Fashin}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Furnicture"
                    component={Furnicture}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Job"
                    component={Job}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Propertyforrent"
                    component={Propertyforrent}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Business"
                    component={Business}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Propertyrralldata"
                    component={Propertyrralldata}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Vechilesdata"
                    component={Vechilesdata}
                    options={{
                         title: 'Vechicles',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                         title: 'Home',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Mobilealldata"
                    component={Mobilealldata}
                    options={{
                         title: 'All Mobile Ads',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Businessalldata"
                    component={Businessalldata}
                    options={{
                         title: 'All Mobile Ads',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Animalalldata"
                    component={Animalalldata}
                    options={{
                         title: 'All Animals Ads',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Bikealldata"
                    component={Bikealldata}
                    options={{
                         title: 'All Bikes Ads',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Bookalldata"
                    component={Bookalldata}
                    options={{
                         title: 'All Bikes Ads',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Electronicalldata"
                    component={Electronicalldata}
                    options={{
                         title: 'All Electronics Ads',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Servicesalldata"
                    component={Servicesalldata}
                    options={{
                         title: 'All Services Ads',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Vechiclesalldata"
                    component={Vechiclesalldata}
                    options={{
                         title: 'All Vechiles Ads',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Itemdetails"
                    component={Itemdetails}
                    options={{
                         title: 'Itemdetails',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Property"
                    component={Property}
                    options={{
                         title: 'Property',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Book"
                    component={Book}
                    options={{
                         title: 'Book',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Electronic"
                    component={Electronic}
                    options={{
                         title: 'Electronic',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen
                    name="Mobile"
                    component={Mobile}
                    options={{
                         title: 'Mobile',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                         },
                    }}
               />
               <Stack.Screen name="Services" component={Services}
                    options={{
                         title: 'Services',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                              //   color:"white"
                         },
                         headerTintColor: 'Blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                              color: "white"
                         },
                    }} />
               <Stack.Screen name="Bike" component={Bike}
                    options={{
                         title: 'Bike',
                         headerStyle: {
                              // backgroundColor: '#870c0c',
                              //   color:"white"
                         },
                         headerTintColor: 'blue',

                         headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign: "center",
                              color: "white"
                         },
                    }} />
          </Stack.Navigator>
     );
}