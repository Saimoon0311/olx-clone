import React, { useEffect, useState } from "react"
import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, Button } from "react-native"
import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import iam from "../Images/80qW.gif"

export default function Login(props) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [namee, setNamee] = useState(null)
  const Signup = () => {
    props.Nav()
  }





  // For Email And password auth







  // For google login error


  // async function onGoogleButtonPress() {
  //           // Get the users ID token
  //           const { idToken } = await GoogleSignin.signIn();

  //           // Create a Google credential with the token
  //           const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //           // Sign-in the user with the credential
  //           console.log("User login")         
  //           return auth().signInWithCredential(googleCredential);
  // }
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId:
  //     '537203081316-734316bfjp1v24rngh67j4ca29q3gd6i.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true,
  //      // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //   });
  // }, []); 

  return (
    // <ScrollView>
    // {/* <View style={styles. SplashScreen_ChildView}>
    //   <View>
    //     <Ionicons name="person-circle" size={150} />
    //   </View>
    //   <Text></Text>
    //   <View>

    //   <TextInput placeholderTextColor="black" onChangeText={(text)=>setNamee(text)} style={styles.in} placeholder="Enter Your Name" />
    //     <Text></Text>
    //     <TextInput placeholderTextColor="black" onChangeText={(text)=>setEmail(text)} style={styles.in}  placeholder="Enter Your Email" />
    //     <Text></Text>
    //     <TextInput placeholderTextColor="black"  secureTextEntry={true} onChangeText={(text)=>setPassword(text)} style={styles.in} placeholder="Enter Your Password" />
    //     <Text></Text>
    //     <View style={{justifyContent:"center",alignItems:"center"}}>

    //     <Text>Forget Password ?</Text>
    //     </View>
    //     <Text></Text>
    //   </View>
    //   <Text></Text>
    //   <View>
    //   <TouchableOpacity style={styles.bhtl} onPress={onEmailsign} >
    //                     <Text style={styles.bhtsl}>
    //                      Login
    //                     </Text>
    //                    <Ionicons name="log-in-outline" size={25} color={"#0d7a02"} />
    //                   </TouchableOpacity>                
    //   </View>
    //   <Text></Text>
    //   <View>
    //   <TouchableOpacity onPress={onFacebookButtonPress} style={styles.bht} >
    //                     <Text style={styles.bhts}>
    //                      Login With Facebook
    //                     </Text>
    //                    <Ionicons name="log-in-outline" size={35} color={"#0e0ee3"} />
    //                   </TouchableOpacity>
    //   </View>
    // </View> */}








    <ScrollView contentContainerStyle={{ paddingBottom: 40 }} >
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
              <View style={styles.inp} >
                <Ionicons name="people-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" onChangeText={(text) => setNamee(text)} style={styles.in} placeholder="Enter Your Name" />
              </View>
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
                <TouchableOpacity style={styles.bhtl} >
                  <Text style={styles.bhtsl}>
                    Login
                  </Text>
                  <Ionicons name="log-in-outline" size={25} color={"#0d7a02"} />
                </TouchableOpacity>
              </View>
              <Text></Text>
              <View>
                <TouchableOpacity style={styles.bht} >
                  <Text style={styles.bhts}>
                    Login With Facebook
                  </Text>
                  <Ionicons name="log-in-outline" size={35} color={"#0e0ee3"} />
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
