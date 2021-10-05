import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import Login from "../screens/Login"
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from "../config/navigation"
import { NavigationContainer } from "@react-navigation/native"

function Sell({ navigation }) {
  const Mobilest = () => {
    navigation.navigate("Mobile")
  }
  const Vechil = () => {
    navigation.navigate("Vechicles")
  }
  const Bik = () => {
    navigation.navigate("Bike")
  }
  const Serv = () => {
    navigation.navigate("Services")
  }
  const Elect = () => {
    navigation.navigate("Electronic")
  }
  const Boo = () => {
    navigation.navigate("Book")

  }
  const Proper = () => {
    navigation.navigate("Property")
  }
  const Buss = () => {
    navigation.navigate("Business")
  }
  const Pfr = () => {
    navigation.navigate("Propertyforrent")
  }
  const Pfs = () => {
    navigation.navigate("Propertyforsell")
  }
  const Job = () => {
    navigation.navigate("Job")
  }
  const Fur = () => {
    navigation.navigate("Furnicture")
  }
  const Fas = () => {
    navigation.navigate("Fashin")
  }
  const Kds = () => {
    navigation.navigate("Kids")
  }




  return (
    <SafeAreaView><ScrollView contentContainerStyle={{ paddingBottom: 40 }} >
      <View>
        {

        }

        <View>
        </View>

        <TouchableOpacity style={styles.btn} onPress={Mobilest}>
          <Ionicons name="phone-portrait-sharp" color={"skyblue"} size={50} />
          <Text style={{ fontSize: 30 }}>Mobile</Text>
          <Ionicons name="chevron-forward-outline" color={"skyblue"} size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Bik}>
          <Ionicons name="bicycle" size={50} color={"red"} />
          <Text style={{ fontSize: 30 }}>Moter Bike</Text>
          <Ionicons name="chevron-forward-outline" color={"red"} size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Proper}>
          <Ionicons name="paw-sharp" size={50} color={"blue"} />
          <Text style={{ fontSize: 30 }}>Animals</Text>
          <Ionicons name="chevron-forward-outline" color={"blue"} size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Elect}>
          <Ionicons name="tv-outline" size={50} color={"green"} />
          <Text style={{ fontSize: 30 }}>Electronic</Text>
          <Ionicons name="chevron-forward-outline" size={50} color={"green"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Serv}>
          <Ionicons name="browsers-sharp" size={50} color={"orange"} />
          <Text style={{ fontSize: 30 }}>Services</Text>
          <Ionicons color={"orange"} name="chevron-forward-outline" size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Boo}>
          <Ionicons name="book" size={50} />
          <View>
            <Text style={{ fontSize: 25, alignContent: "center", textAlign: "center" }}>Books,Sports</Text>
            <Text style={{ fontSize: 25, alignContent: "center", textAlign: "center" }}>Hobbies</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Buss}>
          <Ionicons name="business" size={50} color={"#a7b004"} />
          <Text style={{ fontSize: 30 }}>Business</Text>
          <Ionicons name="chevron-forward-outline" color={"#a7b004"} size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Vechil}>
          <Ionicons name="car-sport" size={50} color={"brown"} />
          <Text style={{ fontSize: 30 }}>Vechicles</Text>
          <Ionicons color={"brown"} name="chevron-forward-outline" size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Pfr}>
          <Ionicons name="easel" color={"#856707"} size={50} />
          <Text style={{ fontSize: 25 }}>Property For Rent</Text>
          <Ionicons color={"#856707"} name="chevron-forward-outline" size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Job}>
          <Ionicons name="journal" color={"#7104b0"} size={50} />
          <Text style={{ fontSize: 25 }}>Job</Text>
          <Ionicons color={"#7104b0"} name="chevron-forward-outline" size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Fas}>
          <Ionicons name="shirt" color={"#12828c"} size={50} />
          <Text style={{ fontSize: 25 }}>Fashion & Beauty</Text>
          <Ionicons color={"#12828c"} name="chevron-forward-outline" size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn]} onPress={Fur}>
          <Ionicons name="bed" color={"#703b06"} size={50} />
          <View>
            <Text style={{ fontSize: 25, alignContent: "center", textAlign: "center" }}>Furnicture and</Text>
            <Text style={{ fontSize: 25, alignContent: "center", textAlign: "center" }}>
              Home Appliances</Text>
          </View>
          <Ionicons color={"#703b06"} name="chevron-forward-outline" size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Pfs}>
          <Ionicons name="easel" color={"#856707"} size={50} />
          <Text style={{ fontSize: 25 }}>Property For Sell</Text>
          <Ionicons color={"#856707"} name="chevron-forward-outline" size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Kds}>
          <Ionicons name="tennisball-sharp" color={"#241cff"} size={50} />
          <Text style={{ fontSize: 30 }}>Kids</Text>
          <Ionicons color={"#241cff"} name="chevron-forward-outline" size={50} />
        </TouchableOpacity>

        {/* {mobilesss()} */}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
export default Sell;






const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 2,
    // borderColor:"red",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 10
  }
})