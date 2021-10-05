import React from "react"
import Ionicons from 'react-native-vector-icons/Ionicons';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';


export default function Profile({ route, navigation }) {
  const item = route.params;
  return (
    <View>
      <View style={{ flexDirection: "row" }} >
        <View>
          <Ionicons name="person-circle" size={120} />
        </View>
        <View style={{ paddingRight: 130 }}>
          <Text style={{ fontSize: 30, marginTop: 30 }} numberOfLines={2} >{item.postman_Name}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20 }} >
        <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
      </View>
      <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", marginTop: 20 }} >Published Ads</Text>

    </View>
  )
}