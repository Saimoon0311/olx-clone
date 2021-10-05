import React, { useState, useEffect } from 'react';
import { View,Text,SafeAreaView,ScrollView,TextInput,StyleSheet,TouchableOpacity,Image } from "react-native"
import Optionss from "../elements/optionselect"
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeBaseProvider,Box,Center} from "native-base"
import { display } from "styled-system";
import Pickers from "../elements/reactpicker"
import auth from '@react-native-firebase/auth';
import Icon from "react-native-vector-icons/Ionicons";
import Myaccount from "./Myaccount"
import Mobiledata from '../config/mobiledata'
import Bikedata from "../config/bikedata"
import Bookdata from "../config/bookdata"
import Propertyforselldata from "../config/propertyforsell"
import Login from "../screens/Login"
import Navigation from "../config/navigation"
import {NavigationContainer} from "@react-navigation/native"
import Vechilesdata from "../config/vechilesdata"
import Propertyalldata from './Alldata/propertyalldata';
import Businessalldata from './Alldata/businessalldata';
import Card from "../elements/card"
import Propertydata from "../config/propertydata"
import Servicesdata from '../config/servicesdata'
import Electronicdata from "../config/electronicdata";
import Propertyrralldata from './Alldata/propertyrralldata';
const Home = ({navigation})=>{ 

   const Mob=()=>{
      navigation.navigate("Mobilealldata")
   }
   const Vec=()=>{
    navigation.navigate("Vechiclesalldata")
 }
 const Bik=()=>{
  navigation.navigate("Bikealldata")
}
const Prope=()=>{
  navigation.navigate("Animalalldata")
}
const Ser=()=>{
  navigation.navigate("Servicesalldata")
}
const Pro=()=>{
  navigation.navigate("Propertyalldata")
}
const Elec=()=>{
  navigation.navigate("Electronicalldata")
}
const Boo=()=>{
  navigation.navigate("Bookalldata")
}
const Proo=()=>{
  navigation.navigate("Propertyrralldata")
}
const Buss=()=>{
navigation.navigate("Businessalldata")
}
const Ite=(item)=>{
  navigation.navigate("Itemdetails",item)
}
const Jobs=()=>{
  navigation.navigate("Joballdata")
}
const Kidss=()=>{
  navigation.navigate("Kidalldata")
}
const Fash=()=>{
  navigation.navigate("Fashionalldata")
}
const Furnicture=()=>{
  navigation.navigate("Furnicheralldata")
}



      return(
                    <SafeAreaView><ScrollView>
                    {/* <Pickers/>                */}
                    <View style={styles.inp}>

                              <Ionicons name="search-circle-sharp" size={50} color={"#acbf1b"}/>
                              <TextInput  style={styles.inputs} placeholder="Search Item"
                               placeholderTextColor="gray" /> 
                              <Ionicons name="notifications-sharp" size={50} color={"#acbf1b"}/>
       </View>
       {/* <View>
       <Text style={{fontSize:30,paddingLeft:20,fontWeight:"bold",textAlign:"center"}}>Browser</Text>
        </View> */}
        <Text></Text>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
       <View style={styles.tu}>
<TouchableOpacity style={styles.touchs} onPress={Mob}>
<Ionicons name="phone-portrait-outline" color={"skyblue"} size={50}/>
  <Text>Mobile</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.touchs} onPress={Vec}>
<Ionicons name="car-sport" color={"brown"} size={50}/>
  <Text>Vechicles</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.touchs} onPress={Prope}>
<Ionicons name="paw-sharp" color={"blue"} size={50}/>
  <Text>Animals</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.touchs} onPress={Elec}>
<Ionicons name="tv-outline"  color={"green"} size={50}/>
  <Text>Electronic</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.touchs} onPress={Bik}>
<Ionicons name="bicycle" color={"red"} size={50}/>
  <Text>MotorBike</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.touchs} onPress={Ser}>
<Ionicons name="browsers-sharp" color={"orange"} size={50}/>
  <Text>Services</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.touchs]} onPress={Boo}>
<Ionicons name="book" size={50}/>
  <Text>Books,Sports</Text>
  <Text>Hobbies</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.touchs} onPress={Jobs}>
<Ionicons name="journal" color={"#7104b0"}  size={50}/>
  <Text>Job</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.touchs} onPress={Kidss}>
<Ionicons name="tennisball-sharp" color={"#241cff"}  size={50}/>
  <Text>Kids</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.touchs} onPress={Buss}>
<Ionicons name="business" color={"#a7b004"} size={50}/>
  <Text>Business</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.touchs]} onPress={Furnicture}>
<Ionicons name="bed" color={"#703b06"} size={50}/>
  <Text>Furnicture and</Text>
  <Text> Home Appliances</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.touchs]} onPress={Fash}>
<Ionicons name="shirt" color={"#12828c"} size={50}/>
  <Text>Fashion &</Text>
  <Text>Beauty</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.touchs]} onPress={Proo}>
<Ionicons name="easel" color={"#856707"} size={50}/>
  <Text>Property For</Text>
  <Text>Rent</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.touchs,{marginRight:20}]} onPress={Pro}>
<Ionicons name="easel" color={"#856707"} size={50}/>
  <Text>Property For</Text>
  <Text>Sell</Text>
</TouchableOpacity>
       </View>
       </ScrollView>
       {/* upperend */}


       <NativeBaseProvider>
           <Text style={{fontSize:30,paddingTop:10,fontWeight:"bold",textAlign:"center"}}>Newest Release Ads</Text>
         {/* <ScrollView style={{flexDirection:"row"}} > */}
         <View style={{flexDirection:"row"}} >

       <Mobiledata Ite={Ite} />
         </View>
{/* </ScrollView> */}



</NativeBaseProvider> 

          </ScrollView></SafeAreaView>
          );
}
export default Home;

const styles = StyleSheet.create({
          inp:{
 display:"flex",
 color:"black",
 flexDirection:"row",
 justifyContent:"center",
 backgroundColor:"#e3e1e1",
margin:20,
borderRadius:50,
          },
  inputs:{
paddingLeft:20,
fontSize:20,
backgroundColor:"#e3e1e1",
color:"black",
borderRadius:50,
minWidth:200,
maxWidth:400,
height:50,
  },
  touchs:{
    justifyContent:"space-around",
    paddingLeft:20,
    textAlign:"center",
    alignItems:"center"
  },
  tu:{
   flexDirection:"row",
   justifyContent:"space-between",
  //  backgroundColor:"white"
  }
});
