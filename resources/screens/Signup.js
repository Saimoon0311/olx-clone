import React, { useEffect, useState } from "react"
import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, Button } from "react-native"
import auth from '@react-native-firebase/auth';
import { Item, Input, Icon, Label } from 'native-base'
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Imagss from '../elements/imagepicker'

export default function Signup({ navigation }) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [username, setUsername] = useState(null)
  const [contact, setContact] = useState(null)
  const [address, setAddress] = useState(null)
  const [gender, setGender] = useState(null)
  const [confirmpassword, setConfirmpassword] = useState(null)
  const [user_img, setUser_img] = useState(null)
  const Signup = () => {
    // navigation.navigate("Signup")
    navigation.goBack()
  }
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    console.log("User login complete")
    // navigation.replace("Olx Pakistan")
    return auth().signInWithCredential(facebookCredential);
  }


  // For Email And password auth

  async function onEmailsign() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || reg.test(email) === false) {
      alert("PLease enter your email")
    } else if (password === null) {
      alert("Please ENter Your Password")
    } else if (username === null) {
      alert("Please Enter Your Name")
    } else if (address === null) {
      alert("Please Enter Your Address")
    } else if (contact === null) {
      alert("Please Enter Your Conatct")
    } else if (password != confirmpassword) {
      alert("Please Enter TheCorrect Password")
    }
    else {
      var dataa = new FormData()
      dataa.append(
        "email",
        email
  )
  dataa.append(
    "password",
    password
)
dataa.append(
  "username",
  username
)
dataa.append(
  "user_img",
  {
    name:user_img[0].fileName,
    uri :user_img[0].uri,
    type:user_img[0].type,
 },
)
dataa.append(
  "contact",
  contact
)
dataa.append(
  "address",
  address
)
dataa.append(
  "gender",
  gender
)

      fetch("https://olx.devoa.xyz/api/register", {
        method: 'POST',
        body: dataa
      })

        .then((response) => response.json())
        .then((responseData) => {
          Signup()
          alert("Account Has Been Created Sucessfully")
          console.log(
            responseData,
            user_img
          )
        })
        .done();
    }
  }




  handleCallback = (childData) => {
    setUser_img(childData)
  }


  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }} >
      <SafeAreaView>
        <View style={{ backgroundColor: "#0c0e87" }}>
          <View style={{ position: "relative" }}>
            <View style={{ height: 200, backgroundColor: "#0c0e87", justifyContent: "center", alignItems: "center", position: "relative" }}>
              {/* <Image style={{width:100,height:100,borderRadius:200}}  source={require("../Images/pexels-athena-2582937.jpg")} /> */}
              <Imagss parentCallback={handleCallback} />
              <Text style={{ color: "white", fontSize: 30 }} >Signup</Text>
            </View>
          </View>
          <View>
            <View style={{ backgroundColor: "white", borderRadius: 30, height: "100%", alignItems: "center", paddingTop: 50 }} >

              <View style={styles.inp}>
                <Ionicons name="people-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" onChangeText={(text) => setUsername(text)} style={styles.in} placeholder="Enter Your Name" />
              </View>
              <Text></Text>
              <View style={styles.inp}>
                <Ionicons name="at-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" onChangeText={(text) => setEmail(text)} style={styles.in} placeholder="Enter Your Email" />
              </View>
              <Text></Text>
              <View style={styles.inp}>
                <Ionicons name="call-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text) => setContact(text)} style={styles.in} placeholder="Enter Your Contact" />
              </View>
              <Text></Text>
              <View style={styles.inp}>
                <Ionicons name="home-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" onChangeText={(text) => setAddress(text)} style={styles.in} placeholder="Enter Your Address" />
              </View>
              <Text></Text>
              <View style={styles.inp}>
                <Ionicons name="man-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" onChangeText={(text) => setGender(text)} style={styles.in} placeholder="Enter Your Gender" />
              </View>
              <Text></Text>
              <View style={styles.inp}>
                <Ionicons name="key-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={styles.in} placeholder="Enter Your Password" />
              </View>
              <Text></Text>
              <View style={styles.inp}>
                <Ionicons name="key-outline" size={35} color={"gray"} style={{ paddingTop: 5 }} />
                <TextInput placeholderTextColor="gray" secureTextEntry={true} onChangeText={(text) => setConfirmpassword(text)} style={styles.in} placeholder="Enter Your Confirm Password" />
              </View>
              <Text></Text>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={Signup} >
                  <Text style={{ fontSize: 20, textDecorationLine: "underline" }} >Aleardy Have An Account ?</Text>
                </TouchableOpacity>
                <Text></Text>
              </View>

              <View>
                <TouchableOpacity style={styles.bhtl} onPress={onEmailsign} >
                  <Text style={styles.bhtsl}>
                    SignUp
                  </Text>
                  <Ionicons name="log-in-outline" size={25} color={"#0d7a02"} />
                </TouchableOpacity>
              </View>
              <Text></Text>
              <View>
                <TouchableOpacity onPress={onFacebookButtonPress} style={styles.bht} >
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
      textAlign: "center",
    },
    bhts: {
      flexDirection: "row",
      paddingTop: 4,
      fontSize: 20,
      borderRadius: 9,
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      height: 40,
      textAlign: "center",
      color: "#0e0ee3",
    },
    bhtl: {
      flexDirection: "row",
      backgroundColor: "#bbdbb8",
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
      textAlign: "center",
      color: "#0d7a02",
    },
    bhtsl: {
      flexDirection: "row",
      paddingTop: 4,
      fontSize: 20,
      borderRadius: 9,
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      height: 40,
      textAlign: "center",
      color: "#0d7a02",

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
      backgroundColor: "#e3e1e1",
      //  margin:20,
      borderRadius: 50,
      paddingLeft: 10,
    },
  });
