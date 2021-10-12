import React, { useState, useEffect,Component } from 'react';
import auth from '@react-native-firebase/auth';
import TypeWriter from 'react-native-typewriter'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from "../screens/Login"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Text,Image,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView } from "react-native"
import Card from "../elements/card"
import { Avatar } from 'react-native-elements';
import {NativeBaseProvider,Box,Center} from "native-base"
import Imagss from "../elements/imagepicker"
import Dialog, { DialogContent } from 'react-native-popup-dialog';
export default function Myaccount({navigation}){
const Nav =()=>{
  navigation.navigate("Signup")
}
const Navs = ()=>{
  navigation.navigate("Myaccount")
}
  const Logout= async ()=>{
    // await AsyncStorage.removeItem("Data")
    setUser(nulls)
    // try {
       const nulls = await AsyncStorage.removeItem("Data")
    //     auth().signOut()
    //           .then(() => console.log('User signed out!'))
    //           // setInitializing(true)

    //   })
      
    // } catch (error) {
    //   console.log(error)
    // }
  }

const ff = ()=>{
  user== null?  <Login Nav={Nav} />:
  <Text>login</Text>
}

const getdatas = async ()=>{
      try {
        var item = await  AsyncStorage.getItem("Data")
       var ite = JSON.parse(item)
        setUser(ite)
        console.log(ite)
      } catch (error) {
        console.log("error")
      }
    }
  

//   // Set an initializing state whilst Firebase connects
// const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();

// // Handle user state changes
// function onAuthStateChanged(user) {
//   // setUser(user);
//   if (initializing) setInitializing(false);
// }
useEffect(() => {
  getdatas()
  ff()
  // var items = JSON.parse(user)
  console.log("mu ACCOUNT",user)
  // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //     return subscriber;
}, []);


if (!user) {
  return (
    <View>
      <Login Nav={Nav} Navs={Navs} />
    </View>
  );
}        

return(
<ScrollView contentContainerStyle={{ paddingBottom: 40 }} >
<SafeAreaView>
  <View style={{ backgroundColor: "#0c0e87" }}>
    <View style={{ position: "relative" }}>
      <View style={{ height: 200, backgroundColor: "#0c0e87", justifyContent: "center", alignItems: "center", position: "relative" }}>
       <Avatar
       size={130}
       rounded
       source={{uri:`https://olx.devoa.xyz/User/images/profile_images/${user.user_img}`}}
       />
        <Text style={{ color: "white", fontSize: 30 }} >{user.name}</Text>
      </View>
    </View>
    <View>
      <View style={{ backgroundColor: "#f5f5f5", height: "100%", alignItems: "center", paddingTop: 50, borderTopStartRadius: 30, borderTopEndRadius: 30 }} >
              
      <View>
                <TouchableOpacity style={styles.bht} onPress={Logout} >
                  <Text style={styles.bhts}>
                    Sign Out
                  </Text>
                  <Ionicons name="log-out-outline" size={35} color={"#700606"} />
                </TouchableOpacity>
              </View>

      </View>
    </View>
  </View>
</SafeAreaView>
</ScrollView>
);
}





const styles = StyleSheet.create(
{
MainContainer:
{
flex: 1,
justifyContent: 'center',
alignItems: 'center',
paddingTop: (Platform.OS === 'ios') ? 20 : 0
},

SplashScreen_RootView:
{
justifyContent: 'center',
// flex:1,  
// margin: 10,  
position: 'absolute',
width: '100%',
height: '100%',
},

SplashScreen_ChildView:
{
justifyContent: 'center',
alignItems: 'center',
},
bht: {
flexDirection: "row",
backgroundColor: "#f27e7e",
// fontWeight: "bold",
borderColor: "blue",
paddingTop: 5,
width: 290,
fontSize: 20,
borderRadius: 50,
fontWeight: "bold",
justifyContent: "space-around",
alignItems: "center",
alignContent: "center",
height: 40,
// borderWidth:2,
textAlign: "center",
},
bhts: {
flexDirection: "row",
// backgroundColor:"#9ae6a0",
// fontWeight: "bold",
// borderColor:"red",
paddingTop: 4,
// marginTop:10,
// width:250,
// marginLeft:40,
fontSize: 20,
borderRadius: 9,
fontWeight: "bold",
justifyContent: "center",
alignItems: "center",
alignContent: "center",
height: 40,
// borderWidth:2,
textAlign: "center",
color: "#700606",
// justifyContent:"center"

},
bhtl: {
flexDirection: "row",
backgroundColor: "#bbdbb8",
// fontWeight: "bold",
borderColor: "blue",
paddingTop: 5,
width: 290,
fontSize: 20,
borderRadius: 50,
fontWeight: "bold",
justifyContent: "space-around",
alignItems: "center",
alignContent: "center",
height: 40,
// borderWidth:2,
textAlign: "center",
color: "#0d7a02",
},
bhtsl: {
flexDirection: "row",
// backgroundColor:"#9ae6a0",
// fontWeight: "bold",
// borderColor:"red",
paddingTop: 4,
// marginTop:10,
// width:250,
// marginLeft:40,
fontSize: 20,
borderRadius: 9,
fontWeight: "bold",
justifyContent: "center",
alignItems: "center",
alignContent: "center",
height: 40,
// borderWidth:2,
textAlign: "center",
color: "#0d7a02",
// justifyContent:"center"

},
in: {
backgroundColor: "#e3e1e1",
color: "black",
borderRadius: 50,
width: 230,
paddingLeft: 20

},
inp: {
display: "flex",
flexDirection: "row",
// justifyContent:"center",
backgroundColor: "#e3e1e1",
//  margin:20,
borderRadius: 50,
paddingLeft: 10
},
});
