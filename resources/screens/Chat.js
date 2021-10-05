import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function Chats({ navigation }) {
  return (
    <ScrollView >
      <SafeAreaView>
        <View style={{ backgroundColor: "#0c0e87" }}>
          <View >
            <View style={{ height: 100, backgroundColor: "#0c0e87", justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 30 }} >Chats</Text>
            </View>
          </View>
          <View>
            <View style={{ backgroundColor: "#f5f5f5", paddingTop: 40, borderTopStartRadius: 30, borderTopEndRadius: 30, paddingLeft: 10, paddingRight: 10 }} >
              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Chatpage")}
              >
                <View style={{ flexDirection: "row", height: 130, alignItems: "center" }} >
                  <Avatar
                    rounded
                    size={100}
                    source={require("../Images/pexels-pixabay-326055.jpg")}
                  />
                  <View style={{ bottom: 40, left: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }} >hy</Text>
                  </View>
                  <Text style={{ fontSize: 20 }} >huii</Text>
                </View>
                {/* <Button  title="delete" onPress={} /> */}
              </TouchableOpacity>
              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
              <TouchableOpacity>
                <View style={{ flexDirection: "row", height: 130, alignItems: "center" }} >
                  <Avatar
                    rounded
                    size={100}
                    source={require("../Images/pexels-pixabay-326055.jpg")}
                  />
                  <View style={{ bottom: 40, left: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }} >hy</Text>
                  </View>
                  <Text style={{ fontSize: 20 }} >huii</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
              <TouchableOpacity>
                <View style={{ flexDirection: "row", height: 130, alignItems: "center" }} >
                  <Avatar
                    rounded
                    size={100}
                    source={require("../Images/pexels-pixabay-326055.jpg")}
                  />
                  <View style={{ bottom: 40, left: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }} >hy</Text>
                  </View>
                  <Text style={{ fontSize: 20 }} >huii</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
              <TouchableOpacity>
                <View style={{ flexDirection: "row", height: 130, alignItems: "center" }} >
                  <Avatar
                    rounded
                    size={100}
                    source={require("../Images/pexels-pixabay-326055.jpg")}
                  />
                  <View style={{ bottom: 40, left: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }} >hy</Text>
                  </View>
                  <Text style={{ fontSize: 20 }} >huii</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
              <TouchableOpacity>
                <View style={{ flexDirection: "row", height: 130, alignItems: "center" }} >
                  <Avatar
                    rounded
                    size={100}
                    source={require("../Images/pexels-pixabay-326055.jpg")}
                  />
                  <View style={{ bottom: 40, left: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }} >hy</Text>
                  </View>
                  <Text style={{ fontSize: 20 }} >huii</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
              <TouchableOpacity>
                <View style={{ flexDirection: "row", height: 130, alignItems: "center" }} >
                  <Avatar
                    rounded
                    size={100}
                    source={require("../Images/pexels-pixabay-326055.jpg")}
                  />
                  <View style={{ bottom: 40, left: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }} >hy</Text>
                  </View>
                  <Text style={{ fontSize: 20 }} >huii</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </View> */}
      </SafeAreaView>
    </ScrollView>
  )
}




const styles = StyleSheet.create({
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
  }


})






























