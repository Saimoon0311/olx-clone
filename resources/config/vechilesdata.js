import React, {Component,useState,useEffect} from 'react';
import {NativeBaseProvider} from "native-base"
import {View,Text, FlatList,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView,Image,ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Card from "../elements/card"
import { VStack, Box, Divider } from 'native-base';
import Navigation from './navigation';

export default function Vechilesdata({navigation}){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  console.log("data======>>>>>>>",data);

  useEffect(() => {
    fetch('https://olx.devoa.xyz/api/vec_cat')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error)) 
      .finally(() => setLoading(false));
  }, []);

  return(
              <View>
                   {isLoading ?<ActivityIndicator size="large" color="#06065e" style={{marginLeft:60}} />: 
                        <FlatList
                        data={data}
                        // navigation={navigation}
                        keyExtractor={(item)=>item.key}
                        horizontal
                        renderItem={({item})=>{
                                  return(
                                            // <TouchableOpacity
                                            // onPress={()=>{
                                            //           navigation.navigate("Itemdetails")
                                            // }}
                                            // >
                                            <View style={{justifyContent:"space-around",paddingLeft:20,paddingTop:10}}>
                                                                      <Box border={1} borderRadius='md' style={{width:180,backgroundColor:"white"}}>
                                                  <VStack space={0} divider={<Divider />}>
                                                    <Box px={0} pt={0}>
                                                    <Image style={{width:180,height:100}} source= { {uri:item.img2}}/>
                                                    </Box>
                                                    <Box px={4} pt={3}>
                                                      <Text>
                                                     {item.price} 
                                                     </Text>
                                                        </Box>
                                                    <Box px={4} pt={3}>
                                                    <Text numberOfLines={1} >
                                                    {item.title} 
                                                    </Text>
                                                    </Box>
                                                    <Box px={4} pb={4} pt={3}>
                                                      <Text>
                                                      {item.city}
                                                    </Text>
                                                    </Box>
                                                  </VStack>
                                                </Box>
                                                </View>
                                              //  </TouchableOpacity>    
                                  )
                        }}
                        />
                      }
              </View>
    )
    }






// export default class Mobiledata extends Component{
//   constructor(props){
//  super(props);
//  this.state={ 
//  list:[],
//  }
// }
 
//  async componentDidMount(){
//     const  Donate = await
//       firestore()
//       .collection(`Myads/UW6nTBTkLMrOUKbXcI2A/mobile`)
//       .get()
//       .then((querySnapshot)=>{
//             var li = []
//             querySnapshot.forEach(documentSnapshot=>{
//              li.push({
//                       ...documentSnapshot.data(),
//                       key: documentSnapshot.id,
//             })  
//           })
//          this.setState({list:li})
//     console.log ("mobile ==>>",li)
//     }
    
//     )
//     .catch((error)=>{
//               console.log("Error==>>>>",error)
//     })       
            
//  }

//  render(navigation,props){

//   // this.props.Navte


 
          
//   return(
//     <View>
//        <FlatList
//           data={this.state.list}
//           keyExtractor={(item)=>item.key}
//           horizontal
//           renderItem={({item})=>{
//              return(

//           <TouchableOpacity>
// <View style={{justifyContent:"space-around",paddingLeft:20,paddingTop:1}}>
//                           <Box border={1} borderRadius='md' style={{width:180,backgroundColor:"white"}}>
//       <VStack space={0} divider={<Divider />}>
//         <Box px={0} pt={0}>
//           <Image style={{width:175,height:100}} source= { {uri:item.image1}}/>
//         </Box>
//         <Box px={4} pt={3}>
//          {item.price}
//         </Box>
//         <Box px={4} pt={3}>
//         {item.status}
//         </Box>
//         <Box px={4} pb={4} pt={3}>
//           {item.location}
//         </Box>
//       </VStack>
//     </Box>
//     </View>
//     </TouchableOpacity>
//                     )

//              }}/>
//      </View>

//   )}
// }


const styles = StyleSheet.create({
  hh:{
// justifyContent:"center",
// alignContent:"center",
alignItems:"center",
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
        marginTop:20,
        display:"flex",
        flexWrap:"wrap",
        backgroundColor:"lightgray",
        borderRadius:8,
        // borderWidth:2,
        // width:300,
        // height:200,
        // borderColor:"black",
        // borderWidth:2
    },
    itemtexts:{
// backgroundColor:"#870c0c",
// color:"white",
fontSize:30,
fontWeight:"bold",
color:"white",
    },
    itemtext: {
        // borderWidth:1,
        fontSize: 18,
        fontWeight: '300',
        // color:"#c2c0b8"
        // textAlign: 'center',
    },
    btn:{
      backgroundColor:"#c77f7f",
      // fontWeight: "bold",
      // borderColor:"red",
      paddingBottom:6 ,
      marginTop:20,
      width:250,
      // marginLeft:40,
      fontSize:20,
      borderRadius:3,
      fontWeight:"bold",
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center",
      height:40,
      // borderWidth:2,
      textAlign:"center",
      color:"#870c0c",
          },
          blood:{
// justifyContent:"center",
backgroundColor:"#870c0c",
borderRadius:8,
// color:"white",
alignItems:"center",
          },
          itemtextss:{
            fontSize:20,
            color:"white",
            // backgroundColor:"gray",
            fontWeight:"bold"
          } 
        
});