import React, { useEffect, useState } from "react"
import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, Button,Alert,RefreshControl } from "react-native"
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin ,statusCodes} from 'react-native-google-signin';
import {showMessage} from "react-native-flash-message";
// import iam from "../Images/80qW.gif"

export default function Login(props) {



  const [refreshing, setRefreshing] = useState(false);
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [namee, setNamee] = useState(null)
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false))
    console.log("refresh")
  }, []);
  const Signup = () => {
    props.Nav()
  }
  const lo =()=>{
    props.Navs()
    console.log("hhhh")
  }
  useEffect(()=>{
  // if(AsyncStorage.getItem("user-info")){
  //   var user = AsyncStorage.getItem
  // }
  GoogleSignin.configure()
  },[])
async function login(){
  let item = {email,password}
  let result = await fetch("https://olx.devoa.xyz/api/login",{
    method:"POST",
    headers:{
      Accept :"application/json",
      "Content-Type" :"application/json",
    },
    body:JSON.stringify(item)
  })
  .then((response) => response.json())
      .then( async (json)  => {
        // console.log("==>",json[0])
        if (json[0] == "success") { 
            console.log("==>",json[1])
            const data= json[1]
             await AsyncStorage.setItem("Data",JSON.stringify(data))
            //  onRefresh()
             const g = await AsyncStorage.getItem("Data")
            //  refresh reset
        // props.Navs()
        // lo()
  //           auth() 
  // .createUserWithEmailAndPassword(email, password)
  // .then( async() => {
  //   console.log('User account created & signed in!',data);
  //   console.log('User account created & signed in!===================',g);
  // } 
  // )
  // .catch( async (error)  => {
  //   if (error.code == 'auth/email-already-in-use') {
//       const data= json[1]
//       await AsyncStorage.setItem("Data",JSON.stringify(data))
//       // onRefresh()
//       auth()
// .createUserWithEmailAndPassword(email, password)
// // .then( async() => {
// const g = await AsyncStorage.getItem("Data")
// // console.log('User account created & signed in!',data);
// // console.log('User account created & signed in!===================',g);
// // })
// console.log("jjj",error)
    }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });
  //           // console.log(data)
  //       } else {
  //         showMessage({
  //           type:"danger",
  //           icon:"danger",
  //           message:"Username or Password is incorrect"
  //         })
  //         // Alert.alert('Login Failed', 'Username or Password is incorrect');
  //         console.log(json)
  //       }
  //     })
  //     .catch((err) => {
  //       showMessage({
  //         type:"danger",
  //         icon:"danger",
  //         message:"Username or Password is incorrect"
  //       })
  //       console.log(err);
      });


  // result=await result.json();
  // AsyncStorage.setItem(JSON.stringify(result))
  // var user = AsyncStorage.getItem()
  // console.log("ysret=====>>>>>>>>"+ user)

}

const hy = async ()=>{
  
  // // Create a Google credential with the token
  // // Sign-in the user with the credential
  // console.log("data has google signi in")
  
  
  
  try {
    GoogleSignin.configure({
      // webClientId: '226354085812-12cdiu8i1hta98sqd8kr403sr2gqbo3g.apps.googleusercontent.com',
      // offlineAccess: true,
      androidClientId:  '226354085812-12cdiu8i1hta98sqd8kr403sr2gqbo3g.apps.googleusercontent.com'
    })
    // const { idToken } = await GoogleSignin.signIn();
    // // console.log(googleCredential)
    // return auth().signInWithCrede */ntial(googleCredential);
    
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const data ={
       email: userInfo.user.email,
       name : userInfo.user.name,
       yul : userInfo.user.photo,
    }
      await AsyncStorage.setItem("Data",JSON.stringify(data))
     const it = await AsyncStorage.getItem("Data")
     var its = JSON.parse(it)
      console.log("async syorage",its)
    console.log(data,userInfo)
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log("cancle",error)
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log("process",error)
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log("PLAY_SERVICES_NOT_AVAILABLE",error)
      // play services not available or outdated
    } else {
      console.log(error)
    }
  }


  
}
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}   >
      <SafeAreaView>
        <View style={{ backgroundColor: "#0c0e87" }}>
          <View style={{ position: "relative" }}>
            <View style={{ height: 200, backgroundColor: "#0c0e87", justifyContent: "center", alignItems: "center", position: "relative" }}>
              <Image style={{ width: 100, height: 100, borderRadius: 200 }} source={require("../Images/pexels-josh-sorenson-1714208.jpg")} />
              <Text style={{ color: "white", fontSize: 30 }} >Login</Text>
            </View>
          </View>
          <View>
            <View style={{ backgroundColor: "#f5f5f5", height: "100%", alignItems: "center", paddingTop: 50, borderTopStartRadius: 30, borderTopEndRadius: 30 }} >
              {/* <View style={styles.inp} >
                <Ionicons name="people-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" onChangeText={(text) => setNamee(text)} style={styles.in} placeholder="Enter Your Name" />
              </View> */}
              <Text></Text>
              <View style={styles.inp} >
                <Ionicons name="at-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" onChangeText={(text) => setEmail(text)} style={styles.in} placeholder="Enter Your Email" />
              </View>
              <Text></Text>
              <View style={styles.inp}>
                <Ionicons name="key-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={styles.in} placeholder="Enter Your Password" />
              </View>
              <Text></Text>
              <View style={{ justifyContent: "center", alignItems: "center" }}>

                <Text style={{ fontSize: 16 }} >Forget Password ?</Text>
                <Text></Text>
                <TouchableOpacity onPress={Signup} >
                  <Text style={{ fontSize: 20 }} >Don't Have An <Text style={{ textDecorationLine: "underline" }} >Account</Text></Text>
                </TouchableOpacity>
                <Text></Text>
              </View>

              <View>
                {/* <RefreshControl onRefresh={onRefresh}  refreshing={refreshing} > */}
                <TouchableOpacity style={styles.bhtl} onPress={login}  >
                  <Text style={styles.bhtsl}>
                    Login
                  </Text>
                  <Ionicons name="log-in-outline" size={25} color={"#0d7a02"} />
                </TouchableOpacity>
                {/* </RefreshControl> */}
              </View>
              <Text></Text>
              <View>
                <TouchableOpacity style={styles.bht} onPress={hy} >
                  <Text style={styles.bhts}>
                    Login With Facebook
                  </Text>
                  <Ionicons name="log-in-outline" size={35} color={"#0e0ee3"} />
                </TouchableOpacity>
              </View>
              <Text></Text>
              <View>
                <TouchableOpacity style={[styles.bht,{backgroundColor:"#d6b4cf"}]} onPress={hy} >
                  <Text style={[styles.bhts,{color:"#59154b"}]}>
                    Login With Google
                  </Text>
                  <Ionicons name="log-in-outline" size={35} color={"#59154b"} />
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
      backgroundColor: "#cad0ed",
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
      color: "#0e0ee3",
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
