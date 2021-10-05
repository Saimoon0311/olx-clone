import React, {Component,useState,useEffect,useContext} from 'react';
import {NativeBaseProvider} from "native-base"
import {View,Text, FlatList,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView,Image,ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from "../elements/card"
import { VStack, Box, Divider } from 'native-base';

const Propertydata = ({navigation},props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
          console.log("==>", props[0])

const [list,setList]=useState()
useEffect(()=>{
          // firestore()
          // .collection(`Myads/UW6nTBTkLMrOUKbXcI2A/animals`)
          // .get()
          // .then((querySnapshot)=>{
          //           var li=[]
          //           querySnapshot.forEach(documentSnapshot=>{
          //                     li.push({
          //                               ...documentSnapshot.data(),
          //                               key:documentSnapshot.id,
          //                     })
          //           })
          //           setList(li)
          //           // console.log(li)
          // }
          // )
          // .catch((error)=>{
          // console.log(error)
          // })
    fetch('https://olx.devoa.xyz/api/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error)) 
      .finally(() => setLoading(false));


},[])


return(
//           <View>
//                {isLoading ?    <ActivityIndicator size="large" color="#00ff00" /> : 
//                     <FlatList
//                     data={data.data}
//                     navigation={navigation}
//                     keyExtractor={(item)=>item.key}
//                     horizontal
//                     renderItem={({item})=>{
//                               return(
//                                         // <TouchableOpacity
//                                         // // onPress={()=>{
//                                         // //           navigation.navigate("Itemdetails")
//                                         // // }}
//                                         // >
//                                         <View style={{justifyContent:"space-around",paddingLeft:20,paddingTop:10}}>
//                                                                   <Box border={1} borderRadius='md' style={{width:180,backgroundColor:"white"}}>
//                                               <VStack space={0} divider={<Divider />}>
//                                                 <Box px={0} pt={0}>
//                                                 {/* <Image style={{width:180,height:100}} source= { {uri:item.image1.uri}}/> */}
//                                                 </Box>
//                                                 <Box px={4} pt={3}>
//                                                  {/* {item.price} */}
//                                                  <Text>PRicsd</Text>
//                                                 </Box>
//                                                 <Box px={4} pt={3}>
//                                                 {item.title} 
//                                                 </Box>
//                                                 <Box px={4} pb={4} pt={3}>
//                                                   {/* {item.location} */}
// <Text>Location</Text>
//                                                 </Box>
//                                               </VStack>
//                                             </Box>
//                                             </View>
//                                         //     </TouchableOpacity>    
//                               )
//                     }}
//                     />
//                   }
//           </View>


<Text>Hy</Text>
)
}

export default Propertydata;