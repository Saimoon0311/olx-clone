import React, { Component, useEffect, useState } from 'react';
import { NativeBaseProvider } from "native-base"
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, ActivityIndicator, ImageBackground } from 'react-native';
import firestore from '@react-native-firebase/firestore';
// import Card from "../elements/card"
import { VStack, Box, Divider } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { borderRadius } from 'styled-system';
// import Navigation from './navigation';
export default function Animalalldata({ navigation }) {
  const back = () => {
    navigation.goBack()
  }
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  console.log("data======>>>>>>>", data);

  useEffect(() => {
    fetch('https://olx.devoa.xyz/api/animal_cat')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);



  return (
    <View>
      {isLoading ? <ActivityIndicator size={100} color="#0c0e87" style={{ marginTop: 200 }} /> :
        <View style={{ backgroundColor: "#0c0e87", position: "relative" }} >
          <View style={styles.head}>

            <Ionicons name="arrow-undo-outline" color="white" onPress={back} size={24} style={{ paddingTop: 20, paddingLeft: 10 }} />
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }} >Animals Ads</Text>
          </View>
          <View style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 300 }} >
              <FlatList
                data={data}
                keyExtractor={(item) => item.key}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <NativeBaseProvider>
                      <View style={styles.nn}>
                        <TouchableOpacity onPress={() => navigation.navigate("Itemdetails", item)}>

                          <View>
                            <Box border={1} style={{ backgroundColor: "white", borderRadius: 20, borderColor: "#010385" }}>
                              <VStack space={0} divider={<Divider />}>
                                <Box px={0} pt={0}>
                                  <Image style={{ width: 300, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} source={{ uri: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}`}} />
                                </Box>

                                <Box px={4} pt={3} style={{ flexDirection: "row" }}>
                                  <Text style={styles.te}>
                                    Prices :<Text numberOfLines={1} style={styles.tes}> {item.price} </Text>
                                  </Text>
                                </Box>
                                <Box px={4} pt={3} style={{ flexDirection: "row" }}>
                                  <Text style={styles.te}>
                                    Title : <Text numberOfLines={1} style={styles.tes}> {item.title} </Text>
                                  </Text>
                                </Box>
                                <Box px={4} pb={4} pt={3} style={{ flexDirection: "row" }}>
                                  <Text style={styles.te}>
                                    Location :<Text numberOfLines={1} style={styles.tes}> {item.city} </Text>
                                  </Text>
                                </Box>
                              </VStack>
                              {/* </ImageBackground> */}
                            </Box>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </NativeBaseProvider>
                  )

                }} />
            </ScrollView>
          </View>
        </View>
      }
    </View>
  )
}



const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    backgroundColor: "white"
  },
  nn: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  head: {
    height: 100,
    position: "relative",
  },
  te: {
    color: "#010385",
    fontWeight: "bold",
    fontSize: 20
  },
  tes: {
    color: "black",
    fontWeight: "normal",
    fontSize: 15
  }
});