import React from "react"
import { StyleSheet, View ,Text,SafeAreaView,ScrollView,Image,TouchableOpacity,TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';

export default function Chatpage({navigation}){
          return(
            <View style={{paddingLeft:10,paddingTop:10,flex:1}} >
                      <View style={{flexDirection:"row",width:"100%"}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()} >
                        <Ionicons name="chevron-back-outline" size={40} />
                         </TouchableOpacity>
                         <TouchableOpacity>
                         <View style={{flexDirection:"row",left:10}}>
                         <Avatar
                         rounded
                         source={require("../Images/pexels-pixabay-326055.jpg")}
                         size={50}
                         />
                         <Text style={{top:4,left:10,fontSize:20}} >UserName</Text>
                        </View>
                         <View style={{flexDirection:"row",top:10,width:300,left:0}} >
                         <Text style={{flex: 1, height: 1, backgroundColor: 'black'}} ></Text>
                         </View>
                         <View style={{top:20,flexDirection:"row"}}>
                         <Text style={styles.text} >Rs 1100  </Text>
                         <Text style={styles.text} >Rs 1100  </Text>
                         <Ionicons name="chevron-forward-outline" size={30} style={{marginLeft:"auto"}} />
                         </View>
                         </TouchableOpacity>
                      </View>
                      <View style={{backgroundColor:"white",height:480,top:20,marginRight:10}}>
                           <ScrollView>

                           </ScrollView>
                      </View>
                      <View style={{position:"absolute",bottom:0,marginBottom:"auto",width:"100%",paddingRight:20,flexDirection:"row"}} >
                        <TextInput placeholder="Message" style={{backgroundColor:"gray",width:"90%",borderRadius:30,paddingLeft:20,bottom:10,marginLeft:10}} />
                        <TouchableOpacity>
                        <Ionicons name="send" size={30} style={{marginLeft:10}} />
                        </TouchableOpacity>
                      </View>
            </View>
          )
}



const styles = StyleSheet.create({
  text:{
   fontSize:20 
  }
})





