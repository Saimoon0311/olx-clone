import React, { useState, useEffect,Component } from 'react';
import auth from '@react-native-firebase/auth';
import TypeWriter from 'react-native-typewriter'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from "../screens/Login"
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
  let delayMap = [
    // increase delay by 100ms at index 4
    { at: 4, delay: 100 },
    // increase delay by 400ms following every '.' character
    { at: '.', delay: 400 },
    // decrease delay by 200ms following every '!' character
    { at: /!/, delay: -200 }
  ]
  const Logout=()=>{
    auth()
          .signOut()
          .then(() => console.log('User signed out!'))
  }

  // Set an initializing state whilst Firebase connects
const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();

// Handle user state changes
function onAuthStateChanged(user) {
  setUser(user);
  if (initializing) setInitializing(false);
}
useEffect(() => {
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber; // unsubscribe on unmount
}, []);

if (initializing) return null;

if (!user) {
  return (
    <View>
      <Login Nav={Nav} />
    </View>
  );
}        

          return(
<View style={styles.profile} >
   
{/* <Text>Wellcome</Text> */}


{/* <Imagss/> */}
<View>
 <Avatar
      rounded
        source={{uri:user.photoURL}}
        size={150}
        onPress={()=>{
          // this.setState({ visible: true });
        }}

      />
</View>

  <View style={styles.te}>
    <Text style={{fontSize:30,color:"green"}}>{user.displayName}</Text>
  </View>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  {/* <TypeWriter typing={-1}>Hello World!</TypeWriter> */}
<View>
<TouchableOpacity style={styles.btn} onPress={Logout} >
  <Text style={styles.bhts}>
    Log out
  </Text>
  <Ionicons name={"log-out-outline"} size={30} color={"#610303"} />
</TouchableOpacity>
</View>

</View>
// </View>
          );
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