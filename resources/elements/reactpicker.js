import React,{useState} from "react"
import {Picker} from '@react-native-picker/picker';
import GetLocation from 'react-native-get-location'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View,StyleSheet } from "react-native";
import { backgroundColor, styles } from "styled-system";
export default function Pickers(){
          const [selectedLanguage, setSelectedLanguage] = useState();
          const {locations,setLocation} = React.useState()
          const Locationgeter =()=>{
                    GetLocation.getCurrentPosition({
                              enableHighAccuracy: true,
                              timeout: 15000,
                          })
                          .then(location => {
                                    
                              console.log(location);
                          })
                          .catch(error => {
                              const { code, message } = error;
                              console.warn(code, message);
                          })
          }

          return(
<View style={{backgroundColor:"white"}}>
<Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }
  >
            <Picker.Item label="Choose Your Location" value="kch"/>

            <Picker.Item label="Get Your Current Location" onPress={Locationgeter} value="cv" />
  <Picker.Item label="Karachi"  value="ka" />
  <Picker.Item label="Hydrabad" value="ha" />
</Picker>
</View>
          );
}

// const styles = StyleSheet.create({
//   locatinss:{
// //  paddingTop:20,
// //  flex:1,
// //  alignItems:"center",
// display:"flex",
// flexDirection:"row",
// //  justifyContent:"center"
// //  flexWrap:"wrap"

//   },
// });
