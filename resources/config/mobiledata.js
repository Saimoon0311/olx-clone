import React, { Component, useState, useEffect } from 'react';
import { NativeBaseProvider } from "native-base"
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Card from "../elements/card"
import { VStack, Box, Divider } from 'native-base';
import Navigation from './navigation';
import { DataNavigation } from 'react-data-navigation';

export default function Mobiledata(props, { navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  console.log("data======>>>>>>>", data);

  useEffect(() => {
    fetch('https://olx.devoa.xyz/api/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading ?
        <View style={{ margin: 130 }} >
          <ActivityIndicator size={100} color="#0c0e87" />
        </View> :
        <FlatList
          data={data}
          // navigation={navigation}
          keyExtractor={(item) => item.key}
          // horizontal
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => props.Ite(item)} >
                <View style={{ margin: 10, alignSelf: "center", justifyContent: "center" }} >
                  <Box border={1} borderRadius='md' style={{  backgroundColor: "white" ,borderTopLeftRadius: 10, borderTopRightRadius: 10,width:155}}>
                    <VStack space={0} divider={<Divider />}>
                      <Box>
                        <Image style={{ width: "100%", height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` }} />
                      </Box>
                      <Box px={4} pt={3}>
                        <Text>
                          {item.price}
                        </Text>
                      </Box>
                      <Box px={4} pt={3} >
                        <Text numberOfLines={1} >
                          {item.title}
                        </Text>
                      </Box>
                      <Box px={4} pb={4} pt={3}>
                        <Text  numberOfLines={1} >
                          {item.city}
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      }
    </View>
  )
}


const styles = StyleSheet.create({
  hh: {
    // justifyContent:"center",
    // alignContent:"center",
    alignItems: "center",
    // borderRadius:8,

    // textAlign:"center",

  },
  itemsList: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // width:350,
    // display:'flex',
    // backgroundColor:"yellow",
    // paddingTop:40,
    // paddingLeft:10,
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "lightgray",
    borderRadius: 8,
    // borderWidth:2,
    // width:300,
    // height:200,
    // borderColor:"black",
    // borderWidth:2
  },
  itemtexts: {
    // backgroundColor:"#870c0c",
    // color:"white",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  itemtext: {
    // borderWidth:1,
    fontSize: 18,
    fontWeight: '300',
    // color:"#c2c0b8"
    // textAlign: 'center',
  },
  btn: {
    backgroundColor: "#c77f7f",
    // fontWeight: "bold",
    // borderColor:"red",
    paddingBottom: 6,
    marginTop: 20,
    width: 250,
    // marginLeft:40,
    fontSize: 20,
    borderRadius: 3,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 40,
    // borderWidth:2,
    textAlign: "center",
    color: "#870c0c",
  },
  blood: {
    // justifyContent:"center",
    backgroundColor: "#870c0c",
    borderRadius: 8,
    // color:"white",
    alignItems: "center",
  },
  itemtextss: {
    fontSize: 20,
    color: "white",
    // backgroundColor:"gray",
    fontWeight: "bold"
  }

});










