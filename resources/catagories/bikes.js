import React,{useState} from "react"
import {Picker} from '@react-native-picker/picker';
import { View,Text,TouchableOpacity,TextInput,StyleSheet,ScrollView,SafeAreaView} from "react-native"
import Mobilepicker from "../elements/mobilepicker";
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import { showMessage } from "react-native-flash-message";

export default function Bike ({navigation},prop){
          // const ty = 
          const [subcat_id, setSubcat_id] = useState(null);
          const [cat_id,setCat_id] = useState(6)
          const [make,setMake]=useState(null)
          const [price,setPrice]=useState(null)
          const [description,setDescription]=useState(null)
          const [state,setState]=useState(null)
          const [city,setCity]=useState(null)
          const [title,setTitle]=useState(null)
          const [phone_number,setPhone_number]=useState(null)
          const [postman_name,setPostman_name]=useState(null)
          const [registered_in,setRegistered_in]=useState(null)
          const [main_img,setMain_img]=useState(null)
          const [img2,setImg2]=useState(null)
          const [img3,setImg3]=useState(null)
          const [img4,setImg4]=useState(null)
          const [img5,setImg5]=useState(null)
          const [img6,setImg6]=useState(null)
          const [img7,setImg7]=useState(null)
          const [img8,setImg8]=useState(null)
          const [img9,setImg9]=useState(null)
          const [img10,setImg10]=useState(null)
          const [img11,setImg11]=useState(null)
          const [img12,setImg12]=useState(null)
          const[type,setType]=useState(null)  
          const[condition,setCondition]=useState(null)
          const rep =()=>{
             navigation.goBack()
          }
          const savedata=(itemValue)=>{
             if (price === null) {
                alert("Please Enter Price")
             } else if(description===null){
               alert("Please enter discription")
             }
             else if(title===null){
               alert("Please enter title")
            }
            else if(postman_name===null){
               showMessage({
                  type:"danger",
                  icon:"danger",
                  message:"Username or Password is incorrect"
                })
            }
            else{
               var dataa = new FormData()
               dataa.append(
                     "price",
                     price
               )
               dataa.append(
                  "subcat_id",
                  subcat_id
            )
            dataa.append(
               "cat_id",
               cat_id
         )
      dataa.append(
         "postman_name",
         postman_name
   )
   dataa.append(
      "make",
      make
)
dataa.append(
   "title",
   title
)
dataa.append(
   "phone_number",
   phone_number
)
dataa.append(
   "description",
   description
)
dataa.append(
   "state",
   state
)
dataa.append(
   "city",
   city
)
dataa.append(
   "main_img",
   {
      name:main_img[0].fileName,
      uri :main_img[0].uri,
      type: main_img[0].type,
   },
)
dataa.append(
   "type",
   type
)
dataa.append(
   "condition",
   condition
)
if (img2===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img2",
      {
         name:img2[0].fileName,
         uri :img2[0].uri,
         type:img2[0].type,
      }
   )  
}
if (img3===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img3",
      {
         name:img3[0].fileName,
         uri :img3[0].uri,
         type:img3[0].type,
      }
   )  
}
if (img4===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img4",
      {
         name:img4[0].fileName,
         uri :img4[0].uri,
         type:img4[0].type,
      }
   )  
}
if (img5===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img5",
      {
         name:img5[0].fileName,
         uri :img5[0].uri,
         type:img5[0].type,
      }
   )  
}
if (img6===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img6",
      {
         name:img6[0].fileName,
         uri :img6[0].uri,
         type:img6[0].type,
      }
   )  
}
if (img7===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img7",
      {
         name:img7[0].fileName,
         uri :img7[0].uri,
         type:img7[0].type,
      }
   )  
}
if (img8===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img8",
      {
         name:img8[0].fileName,
         uri :img8[0].uri,
         type:img8[0].type,
      }
   )  
}
if (img9===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img9",
      {
         name:img9[0].fileName,
         uri :img9[0].uri,
         type:img9[0].type,
      }
   )  
}
if (img10===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img10",
      {
         name:img10[0].fileName,
         uri :img10[0].uri,
         type:img10[0].type,
      }
   )  
}
if (img11===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img11",
      {
         name:img11[0].fileName,
         uri :img11[0].uri,
         type:img11[0].type,
      }
   )  
}
if (img12===null) {
   console.log("no datas")
} else {
   dataa.append(
      "img12",
      {
         name:img12[0].fileName,
         uri :img12[0].uri,
         type:img12[0].type,
      }
   )  
}
               fetch("https://olx.devoa.xyz/api/post", {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                     },
                     body:dataa
               })
               
               .then((response) => response.json())
               .then((responseData) => {
                  alert("Your Ad Has Been Posted")
                  rep()
                  console.log(
                     responseData,
                     main_img
                     )
                  })
                  .done();
          




            }








            
          }
          handleCallback = (childData) =>{
            setMain_img(childData)
        }
        handleCallbacks=(childData2)=>{
                       setImg2(childData2)
        }
        handleCallbackss=(childData3)=>{
         setImg3(childData3)
}
handleCallbacksss=(childData4)=>{
   setImg4(childData4)
}

handleCallbacka = (childDataa) =>{
   setImg5(childDataa)
}
handleCallbackaa=(childDataaa)=>{
              setImg6(childDataaa)
}
handleCallbackaaa=(childDataaaa)=>{
setImg7(childDataaaa)
}
handleCallbackb=(childDatab)=>{
setImg8(childDatab)
}

handleCallbackbb = (childDatabb) =>{
   setImg9(childDatabb)
}
handleCallbackbbb=(childDatabbb)=>{
              setImg10(childDatabbb)
}
handleCallbackc=(childDatac)=>{
setImg11(childDatac)
}
handleCallbackcc=(childDatacc)=>{
setImg12(childDatacc)
}
                 
          return(
            <SafeAreaView><ScrollView>
                    <View>
                       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                              <View style={{flexDirection:"row"}}>
                              <Mobilepicker  parentCallback = {handleCallback}/>
                              <Mobilepicker  parentCallback = {handleCallbacks}/>
                              <Mobilepicker  parentCallback = {handleCallbackss}/>
                              <Mobilepicker  parentCallback = {handleCallbacksss}/>

                              <Mobilepicker  parentCallback = {handleCallbacka}/>
                              <Mobilepicker  parentCallback = {handleCallbackaa}/>
                              <Mobilepicker  parentCallback = {handleCallbackaaa}/>
                              <Mobilepicker  parentCallback = {handleCallbackb}/>
                              <Mobilepicker  parentCallback = {handleCallbackbb}/>
                              <Mobilepicker  parentCallback = {handleCallbackbbb}/>
                              <Mobilepicker  parentCallback = {handleCallbackc}/>
                              <Mobilepicker  parentCallback = {handleCallbackcc}/>

                              </View>
                              </ScrollView>
                              <View style={[styles.pick,{borderColor:"black",borderWidth:5}]}>
                                 <Picker
                                 selectedValue={subcat_id}
                                 onValueChange={(itemValue,itemIndex)=>{
                                    setSubcat_id(itemValue)
                                 }}
                                 >
                                    <Picker.Item label="Chosse You ads type" value={null} />
                                    <Picker.Item label="Motorcycles" value={48} />
                                    <Picker.Item label="Spare Parts" value={49} />
                                    <Picker.Item label="Bycycles" value={50} />
                                    <Picker.Item label="ATV & Quads" value={51} />
                                    <Picker.Item label="Scooters" value={52} />
                                 </Picker>
                              </View>

{subcat_id===48 || subcat_id===52 ?
<View>
<View  style={styles.pick}>
                         <Picker
  selectedValue={make}
  onValueChange={(itemValue, itemIndex) =>{
            setMake(itemValue)
                
          }

}
>
            <Picker.Item label="Comapny Name" value=""/>

            <Picker.Item label="Crown" value="Crown" />
  <Picker.Item label="Eagle"  value="Eagle" />
  <Picker.Item label="Ghani" value="Ghani" />
  <Picker.Item label="Habib" value="Habib" />
  <Picker.Item label="Harley Davidson" value="Harley Davidson" />
  <Picker.Item label="Honda" value="Honda" />
  <Picker.Item label="Suzuki" value="Suzuki" />
  <Picker.Item label="Super Star" value="Super Star" />
  <Picker.Item label="Unique" value="Unique" />
  <Picker.Item label="United" value="United" /> 
   <Picker.Item label="VESPA" value="VESPA" />
   <Picker.Item label="Ravi" value="Ravi" />
   <Picker.Item label="Power" value="Power" />
   <Picker.Item label="Metro" value="Metro" />
   <Picker.Item label="Sohrab" value="Sohrab" />
   <Picker.Item label="Sport $ Heavy Bike" value="Sport $ Heavy Bike" />
   <Picker.Item label="Road Prince" value="Road Prince" />
   <Picker.Item label="Yamaha" value="Yamaha" />
   {/* <Picker.Item label="Nokia" value="Nokia" />
   <Picker.Item label="iNew" value="iNew" />
   <Picker.Item label="Sony" value="Sony" /> */}
   <Picker.Item label="Other Bike" value="Other Bike" />
</Picker>
</View>
<View style={{alignItems:"center"}}>
   {/* <Text>ssdds</Text> */}
<TextInput style={styles.inps}   placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text)=>setPostman_name(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="You Prices" />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="Year" />
          <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text)=>setTitle(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your State" onChangeText={(text)=>setState(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your City" onChangeText={(text)=>setCity(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Number"  keyboardType="number-pad" onChangeText={(text)=>setPhone_number(text)} />
          <TextInput multiline minHeight={70}  placeholderTextColor="gray" style={styles.inpscom}  placeholder="Discription" onChangeText={(text)=>setDescription(text)} />
          <TouchableOpacity style={styles.button} onPress={savedata}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Post Your Ads</Text>
      </LinearGradient>
          </TouchableOpacity>
</View>
</View>
:<View></View>}
{subcat_id===49 || subcat_id===50 || subcat_id===51  ?
<View>
<View style={{alignItems:"center"}}>
   {/* <Text>ssdds</Text> */}
<TextInput style={styles.inps}   placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text)=>setPostman_name(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="You Prices" />
          <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text)=>setTitle(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your State" onChangeText={(text)=>setState(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your City" onChangeText={(text)=>setCity(text)} />
          <TextInput style={styles.inps}  keyboardType="number-pad"  placeholderTextColor="gray" placeholder="Number" onChangeText={(text)=>setPhone_number(text)} />
          <TextInput multiline minHeight={70}  placeholderTextColor="gray" style={styles.inpscom}  placeholder="Discription" onChangeText={(text)=>setDescription(text)} />
          <TouchableOpacity style={styles.button} onPress={savedata}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Post Your Ads</Text>
      </LinearGradient>
          </TouchableOpacity>
</View>
</View>
:
<View></View>}
                     
                    </View>
                       </ScrollView>
                    </SafeAreaView>
          )
}

const styles = StyleSheet.create({
          inps:{
                  //   borderColor:"black",
                  //   borderWidth:2,
                    width:300,
                    backgroundColor:"#e3e1e1",
                    borderRadius:19,
                    paddingLeft:20,
                    marginTop:10,
                    color:"black",
                    
          },
       inpscom:{
         // borderColor:"black",
         backgroundColor:"#e3e1e1",
         // borderWidth:7,
         width:300,
         borderRadius:19,
         // paddingTop:-10,
         marginTop:10,
         // height:200,
         paddingLeft:20,
         paddingRight:20,
         color:"black",
       },
       btn:{
          marginTop:20,
          backgroundColor:"red",

       },
       gradient: {
         flex: 1,
         justifyContent: 'center',
         alignItems:'center',
         borderRadius: 5
       },
       text: {
         color: 'white',
         fontSize: 16
       },
       button: {
         width: '70%',
         height: 45,
         marginTop:20
       },
       pick:{
         //  borderColor:"blue",
          borderWidth:2,
          justifyContent:"space-around",
         // marginLeft:10,
         // marginRight:10,
         margin:10,
         borderRadius:20,
         fontWeight:"bold",
          //  width:500,
         //  backgroundColor:"black",
          color:"white"
       }
})