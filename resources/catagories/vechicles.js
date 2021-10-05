import React, { useState } from "react"
import { Radio, NativeBaseProvider } from 'native-base';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView } from "react-native"
import Mobilepicker from "../elements/mobilepicker";
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import Mobiledata from "../config/mobiledata"
export default function Vechicles({ navigation }, props) {
   const [subcat_id, setSubcat_id] = useState(null);
   const [cat_id, setCat_id] = useState(2)
   const [make, setMake] = useState(null)
   const [price, setPrice] = useState(null)
   const [description, setDescription] = useState(null)
   const [state, setState] = useState(null)
   const [city, setCity] = useState(null)
   const [title, setTitle] = useState(null)
   const [IsPhone, setIsPhone] = useState(null)
   const [phone_number, setPhone_number] = useState(null)
   const [postman_name, setPostman_name] = useState(null)
   const [KmDriven, setKmDriven] = useState(null)
   const [year, setYear] = useState(null)
   const [fuel, setFuel] = useState(null)
   const [registered_in, setRegistered_in] = useState(null)
   const [main_img, setMain_img] = useState(null)
   const [img2, setImg2] = useState(null)
   const [img3, setImg3] = useState(null)
   const [img4, setImg4] = useState(null)
   const [img5, setImg5] = useState(null)
   const [img6, setImg6] = useState(null)
   const [img7, setImg7] = useState(null)
   const [img8, setImg8] = useState(null)
   const [img9, setImg9] = useState(null)
   const [img10, setImg10] = useState(null)
   const [img11, setImg11] = useState(null)
   const [img12, setImg12] = useState(null)
   const [type, setType] = useState(null)
   const [condition, setCondition] = useState(null)
   const rep = () => {
      navigation.goBack()
   }
   const savedata = (itemValue) => {
      if (price === null) {
         alert("Please Enter Price")
      } else if (description === null) {
         alert("Please enter discription")
      }
      else if (title === null) {
         alert("Please enter title")
      }
      else if (postman_name === null) {
         alert("Please enter you name")
      }
      // else if(phone_number===null){
      //    alert("Please enter you number")
      // }
      else {
         fetch("https://olx.devoa.xyz/api/post", {
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               price,
               subcat_id,
               cat_id,
               postman_name,
               make,
               title,
               registered_in,
               year,
               KmDriven,
               phone_number,
               // phone_number,
               city,
               state,
               fuel,
               condition,
               IsPhone,
               main_img,
               description,
               img2,
               img3,
               img4,
               img5,
               img6,
               img7,
               img8,
               img9,
               img10,
               img11,
               img12,
            })
         })

            .then((response) => response.json())
            .then((responseData) => {
               alert("Your Ad Has Been Posted")
               rep()
               console.log(
                  responseData,

               )
            })
            .done();
      }
      //   let comapny = itemValue

   }
   handleCallback = (childData) => {
      setMain_img(childData)
   }
   handleCallbacks = (childData2) => {
      setImg2(childData2)
   }
   handleCallbackss = (childData3) => {
      setImg3(childData3)
   }
   handleCallbacksss = (childData4) => {
      setImg4(childData4)
   }

   handleCallbacka = (childDataa) => {
      setImg5(childDataa)
   }
   handleCallbackaa = (childDataaa) => {
      setImg6(childDataaa)
   }
   handleCallbackaaa = (childDataaaa) => {
      setImg7(childDataaaa)
   }
   handleCallbackb = (childDatab) => {
      setImg8(childDatab)
   }

   handleCallbackbb = (childDatabb) => {
      setImg9(childDatabb)
   }
   handleCallbackbbb = (childDatabbb) => {
      setImg10(childDatabbb)
   }
   handleCallbackc = (childDatac) => {
      setImg11(childDatac)
   }
   handleCallbackcc = (childDatacc) => {
      setImg12(childDatacc)
   }
   return (
      <SafeAreaView><ScrollView>
         <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
               <View style={{ flexDirection: "row" }}>
                  <Mobilepicker parentCallback={handleCallback} />
                  <Mobilepicker parentCallback={handleCallbacks} />
                  <Mobilepicker parentCallback={handleCallbackss} />
                  <Mobilepicker parentCallback={handleCallbacksss} />

                  <Mobilepicker parentCallback={handleCallbacka} />
                  <Mobilepicker parentCallback={handleCallbackaa} />
                  <Mobilepicker parentCallback={handleCallbackaaa} />
                  <Mobilepicker parentCallback={handleCallbackb} />
                  <Mobilepicker parentCallback={handleCallbackbb} />
                  <Mobilepicker parentCallback={handleCallbackbbb} />
                  <Mobilepicker parentCallback={handleCallbackc} />
                  <Mobilepicker parentCallback={handleCallbackcc} />

               </View>
            </ScrollView>
            <View style={[styles.pick, { borderColor: "black", borderWidth: 5 }]} >
               <Picker
                  selectedValue={subcat_id}
                  onValueChange={(itemValue, itemIndex) => {
                     setSubcat_id(itemValue)

                  }

                  }
               >
                  <Picker.Item label="Choose Ad Type" value={null} />
                  <Picker.Item label="Car" value={14} />
                  <Picker.Item label="Car on Installment" value={15} />
                  <Picker.Item label="Car Accessories" value={16} />
                  <Picker.Item label="Spare Parts" value={17} />
                  <Picker.Item label="Buses, Vans & Trucks" value={18} />
                  <Picker.Item label="Rickshaw & Chingchi" value={19} />
                  <Picker.Item label="Other Vehicles" value={20} />
                  <Picker.Item label="Boats" value={21} />
                  <Picker.Item label="Tractors & Trailers" value={22} />
               </Picker>
            </View>


            {subcat_id === 14 || subcat_id === 15 || subcat_id === 18 || subcat_id === 19 || subcat_id === 22 ? <View>
               <View style={styles.pick} >
                  <Picker
                     selectedValue={make}
                     onValueChange={(itemValue, itemIndex) => {
                        setMake(itemValue)

                     }

                     }
                  >
                     <Picker.Item label="Choose Your Car Maker" value={null} />
                     <Picker.Item label="Audi" value="Audi" />
                     <Picker.Item label="BMW" value="BMW" />
                     <Picker.Item label="Changan" value="Changan" />
                     <Picker.Item label="Chevrolet" value="Chevrolet" />
                     <Picker.Item label="Classic & Antique" value="Classic & Antique" />
                     <Picker.Item label="Daewoo" value="Daewoo" />
                     <Picker.Item label="FAW" value="FAW" />
                     <Picker.Item label="Honda" value="Honda" />
                     <Picker.Item label="Hyundi" value="Hyundi" />
                     <Picker.Item label="JAC" value="JAC" />
                     <Picker.Item label="KIA" value="KIA" />
                     <Picker.Item label="Land Rover" value="Land Rover" />
                     <Picker.Item label="Lexus" value="Lexus" />
                     <Picker.Item label="Mazda" value="Mazda" />
                     <Picker.Item label="Mitsubishi" value="Mitsubishi" />
                     <Picker.Item label="Other Company" value="Other Company" />
                  </Picker>
               </View>
               <View style={styles.pick} >
                  <Picker
                     selectedValue={condition}
                     onValueChange={(itemValue, itemIndex) => {
                        setCondition(itemValue)

                     }

                     }
                  >
                     <Picker.Item label="Condition Type" value="" />
                     <Picker.Item label="New" value="new" />
                     <Picker.Item label="Used" value="used" />
                  </Picker>
               </View>
               <View style={{ alignItems: "center" }}>
                  {/* <Text>ssdds</Text> */}
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text) => setPostman_name(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text) => setPrice(text)} placeholder="You Prices" />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text) => setTitle(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Your State" onChangeText={(text) => setState(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Your City" onChangeText={(text) => setCity(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Number" keyboardType="number-pad" onChangeText={(text) => setPhone_number(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Year" keyboardType="number-pad" onChangeText={(text) => setYear(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Fuel Type" onChangeText={(text) => setFuel(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Registered Where " onChangeText={(text) => setRegistered_in(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Kilo Meter Drived" keyboardType="number-pad" onChangeText={(text) => setKmDriven(text)} />
                  <TextInput multiline minHeight={70} placeholderTextColor="gray" style={styles.inpscom} placeholder="Discription" onChangeText={(text) => setDescription(text)} />
                  <TouchableOpacity style={styles.button} onPress={savedata}>
                     <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
                        <Text style={styles.text}>Post Your Ads</Text>
                     </LinearGradient>
                  </TouchableOpacity>
               </View>
            </View> :
               <View></View>}

            {subcat_id === 16 || subcat_id === 17 || subcat_id === 21 || subcat_id === 20 ? <View>

               <View style={styles.pick} >
                  <Picker
                     selectedValue={condition}
                     onValueChange={(itemValue, itemIndex) => {
                        setCondition(itemValue)

                     }

                     }
                  >
                     <Picker.Item label="Condition Type" value="" />
                     <Picker.Item label="New" value="new" />
                     <Picker.Item label="Used" value="used" />
                  </Picker>
               </View>
               <View style={{ alignItems: "center" }}>
                  {/* <Text>ssdds</Text> */}
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text) => setPostman_name(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text) => setPrice(text)} placeholder="You Prices" />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text) => setTitle(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Your State" onChangeText={(text) => setState(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Your City" onChangeText={(text) => setCity(text)} />
                  <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Number" keyboardType="number-pad" onChangeText={(text) => setPhone_number(text)} />
                  <TextInput multiline minHeight={70} placeholderTextColor="gray" style={styles.inpscom} placeholder="Discription" onChangeText={(text) => setDescription(text)} />
                  <TouchableOpacity style={styles.button} onPress={savedata}>
                     <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
                        <Text style={styles.text}>Post Your Ads</Text>
                     </LinearGradient>
                  </TouchableOpacity>
               </View>
            </View> :
               <View></View>}
         </View>
      </ScrollView>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   inps: {
      width: 300,
      backgroundColor: "#e3e1e1",
      borderRadius: 19,
      paddingLeft: 20,
      marginTop: 10,
      color: "black",

   },
   inpscom: {
      backgroundColor: "#e3e1e1",
      width: 300,
      borderRadius: 19,
      paddingRight: 20,
      marginTop: 10,
      paddingLeft: 20,
      color: "black",
   },
   btn: {
      marginTop: 20,
      backgroundColor: "red",

   },
   gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
   },
   text: {
      color: 'white',
      fontSize: 16
   },
   button: {
      width: '70%',
      height: 45,
      marginTop: 20
   },
   pick: {
      borderWidth: 2,
      justifyContent: "space-around",
      margin: 10,
      borderRadius: 20,
      fontWeight: "bold",
      color: "white"
   }
})