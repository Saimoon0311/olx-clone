import React, {Component,useState,useEffect,useContext} from 'react';
import {NativeBaseProvider} from "native-base"
import {View,Text, FlatList,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView,Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from "../elements/card"
import { VStack, Box, Divider } from 'native-base';

const Servicesdata = ({navigation},props) => {

          console.log("==>", props[0])

const [list,setList]=useState()
useEffect(()=>{
          firestore()
          .collection(`Myads/UW6nTBTkLMrOUKbXcI2A/services`)
          .get()
          .then((querySnapshot)=>{
                    var li=[]
                    querySnapshot.forEach(documentSnapshot=>{
                              li.push({
                                        ...documentSnapshot.data(),
                                        key:documentSnapshot.id,
                              })
                    })
                    setList(li)
                    // console.log(li)
          }
          )
          .catch((error)=>{
          console.log(error)
          })
},[])


return(
          <View>
                    <FlatList
                    data={list}
                    navigation={navigation}
                    keyExtractor={(item)=>item.key}
                    horizontal
                    renderItem={({item})=>{
                              return(
                                        // <TouchableOpacity
                                        // // onPress={()=>{
                                        // //           navigation.navigate("Itemdetails")
                                        // // }}
                                        // >
                                        <View style={{justifyContent:"space-around",paddingLeft:20,paddingTop:10}}>
                                                                  <Box border={1} borderRadius='md' style={{width:180,backgroundColor:"white"}}>
                                              <VStack space={0} divider={<Divider />}>
                                                <Box px={0} pt={0}>
                                                <Image style={{width:180,height:100}} source= { {uri:item.image1.uri}}/>
                                                </Box>
                                                <Box px={4} pt={3}>
                                                 {item.price}
                                                </Box>
                                                <Box px={4} pt={3}>
                                                {item.status}
                                                </Box>
                                                <Box px={4} pb={4} pt={3}>
                                                  {item.location}
                                                </Box>
                                              </VStack>
                                            </Box>
                                            </View>
                                        //     </TouchableOpacity>    
                              )
                    }}
                    />
          </View>
)
}

export default Servicesdata;