import React,{useState} from "react"
import {Picker} from '@react-native-picker/picker';
import { View,Text,TouchableOpacity,TextInput,StyleSheet,ScrollView,SafeAreaView} from "react-native"
import Mobilepicker from "../elements/mobilepicker";
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';

export default function Kids ({navigation},prop){
          // const ty = 
          const [subcat_id, setSubcat_id] = useState(null);
          const [cat_id,setCat_id] = useState(14)
          const [price,setPrice]=useState(null)
          const [description,setDescription]=useState(null)
          const [state,setState]=useState(null)
          const [city,setCity]=useState(null)
          const [title,setTitle]=useState(null)
          const [phone_number,setPhone_number]=useState(null)
          const [postman_name,setPostman_name]=useState(null)
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
          const [condition,setCondition]=useState(null)
          const rep =()=>{
             navigation.goBack()
          }
          const savedata=(itemValue)=>{
             if (price === null) {
                alert("Please Enter Price")
             }
             else if(description===null){
               alert("Please enter discription")
             }
             else if(title===null){
               alert("Please enter title")
            }
            else if(postman_name===null){
               alert("Please enter you name")
            }
            else{

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
                     title,
                     phone_number,
                     city,
                     condition,
                     state,
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
                     main_img
                     )
                  })
                  .done();
            }
          //   let comapny = itemValue
                    
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
  onValueChange={(itemValue, itemIndex) =>{
            setSubcat_id(itemValue)
                
          }

}
>
            <Picker.Item label="Kids" value={null}/>

            <Picker.Item label="Kids Furnitures" value={125} />
  <Picker.Item label="Toys"  value={126} />
  <Picker.Item label="Parms & Walkers" value={127} />
  <Picker.Item label="Swing & Slides" value={128} />
  <Picker.Item label="Kids Bikes" value={129} />
  <Picker.Item label="Kids Accessories" value={130} />
</Picker>
</View>

{subcat_id===null?<View></View>:
<View>
  

<View style={{alignItems:"center"}}>
   {/* <Text>ssdds</Text> */}
<TextInput style={styles.inps}   placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text)=>setPostman_name(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="You Prices" />
          <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text)=>setTitle(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPhone_number(text)} placeholder="You Number" />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your State" onChangeText={(text)=>setState(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your City" onChangeText={(text)=>setCity(text)} />
          <TextInput multiline minHeight={70}  placeholderTextColor="gray" style={styles.inpscom}  placeholder="Discription" onChangeText={(text)=>setDescription(text)} />
          <TouchableOpacity style={styles.button} onPress={savedata}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Post Your Ads</Text>
      </LinearGradient>
          </TouchableOpacity>
</View>

   </View>}
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
paddingRight:20,
paddingLeft:20,
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