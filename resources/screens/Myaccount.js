import React, { useState, useEffect,Component } from 'react';
import auth from '@react-native-firebase/auth';
import TypeWriter from 'react-native-typewriter'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from "../screens/Login"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native"
import Card from "../elements/card"
import { Avatar } from 'react-native-elements';
import {NativeBaseProvider,Box,Center} from "native-base"
import Imagss from "../elements/imagepicker"
import Dialog, { DialogContent } from 'react-native-popup-dialog';
function Myaccount({navigation},props){
const Nav =()=>{
  navigation.navigate("Signup")
}
  const Logout=()=>{
    auth()
          .signOut()
          .then(() => console.log('User signed out!'))
  }

const getdatas = async ()=>{
      try {
        var item = await AsyncStorage.getItem("Data")
        setUser(item)
      } catch (error) {
        console.log(error)
      }
    }
  

//   // Set an initializing state whilst Firebase connects
// const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();

// // Handle user state changes
// function onAuthStateChanged(user) {
//   setUser(user);
//   if (initializing) setInitializing(false);
// }
useEffect(() => {
getdatas()
}, []);


// if (user==null) {
//   return (
//     <View>
//       <Login Nav={Nav} />
//     </View>
//   );
// }        

return(
  <View>
  {user==null?<Login/>:
      <View style={styles.profile} >
         
      {/* <Text>Wellcome</Text> */}
      
      
      {/* <Imagss/> */}
      <Text>hy</Text>
      </View>
  }
</View>
)


}
export default Myaccount;

const styles = StyleSheet.create({
  profile:{
    justifyContent:"space-around",
    marginVertical:40,
    paddingTop:90,
    alignItems:"center"
    // flex:1
  },
  te:{
    // marginTop:50,
    marginLeft:30,
    // fontSize:40
  },
    btn:{
      flexDirection:"row",
      backgroundColor:"#f29999",
      // fontWeight: "bold",
      borderColor:"blue",
      paddingTop:5 ,
      width:200,
      fontSize:20,
      borderRadius:50,
      fontWeight:"bold",
      justifyContent:"space-around",
      alignItems:"center",
      alignContent:"center",
      height:40,
      // borderWidth:2,
      textAlign:"center",
      color:"red",
    },
    bhts:{
      flexDirection:"row",
      // backgroundColor:"#9ae6a0",
      // fontWeight: "bold",
      // borderColor:"red",
      paddingTop:4 ,
      // marginTop:10,
      // width:250,
      // marginLeft:40,
      fontSize:20,
      borderRadius:9,
      fontWeight:"bold",
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center",
      height:40,
      // borderWidth:2,
      textAlign:"center",
      color:"#610303",
      // justifyContent:"center"
    
  },
})