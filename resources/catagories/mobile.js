import React,{useState} from "react"
import {Picker} from '@react-native-picker/picker';
import { View,Text,TouchableOpacity,TextInput,StyleSheet,ScrollView,SafeAreaView} from "react-native"
import Mobilepicker from "../elements/mobilepicker";
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import Mobiledata from "../config/mobiledata"
import { borderColor } from "styled-system";
export default function Mobile ({navigation},prop){
          // const ty = 
          const [user_id,setUser_id]=useState(2)
          const [subcat_id, setSubcat_id] = useState(null);
          const [cat_id,setCat_id] = useState(1)
          const [make,setMake]=useState(null)
          const [price,setPrice]=useState(null)
          const [description,setDescription]=useState(null)
          const [state,setState]=useState(null)
          const [city,setCity]=useState(null)
          const [postman_name,setPostman_name]=useState(null)
          const [phone_number,setPhone_number]=useState(null)
          const [title,setTitle]=useState(null)
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
         //  const jj = {
         //     name
         //  }
          const rep =()=>{
             navigation.goBack()
          }
          const savedata=()=>{
             if (price === null) {
                alert("Please Enter Price")
             } else if(main_img===null){
                alert("Please Select At Least One Image")
             }else if(title===null){
                alert("Please Enter The Title")
             }else if(description===null){
               alert("Please Enter The Description")
            }else if(state===null){
               alert("Please Enter The State")
            }else if(city===null){
               alert("Please Enter The City")
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
            "user_id",
            user_id
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
dataa.append(
   "img2",
   img2
)
dataa.append(
   "img3",
   img3
)
dataa.append(
   "img4",
   img4
)
dataa.append(
   "img5",
   img5
)
dataa.append(
   "img6",
   img6
)
dataa.append(
   "img7",
   img7
)
dataa.append(
   "img8",
   img8
)
dataa.append(
   "img9",
   img9
)
dataa.append(
   "img10",
   img10
)
dataa.append(
   "img11",
   img11
)
dataa.append(
   "img12",
   img12
)
               fetch("https://olx.devoa.xyz/api/post", {
                  method: 'POST',
                  // headers: {
                  //     'Accept': 'application/json',
                  //     'Content-Type': 'application/json'
                  //    },
                 body:dataa

                  // body: JSON.stringify({
                  //    price,
                  //    subcat_id,
                  //    cat_id,
                  //    user_id,
                  //    postman_name,
                  //    make,
                  //    title,
                  //    phone_number,
                  //    type,
                  //    city,
                  //    state,
                  //    main_img:{
                  //       name:main_img[0].fileName,
                  //       uri :main_img [0].uri,
                  //       type: main_img[0].type,
                  //    },
                  //    condition,
                  //    description,
                  //    img2,
                  //    img3,
                  //    img4,
                  //    img5,
                  //    img6,
                  //    img7,
                  //    img8,
                  //    img9,
                  //    img10,
                  //    img11,
                  //    img12,
                  // })
               })
               
               .then((response) => response.json())
               .then((responseData) => {
                  alert("Your Ad Has Been Posted")
                  rep()
                  console.log(
                     responseData
                     //  "hhdhdydydydyydydyyd====>>>>>"+ main_img.name
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
                              <View style={[styles.pick,{borderColor:"black",borderWidth:5}]}  >
                                 
                              <Picker 
  selectedValue={subcat_id}
  onValueChange={(itemValue, itemIndex) =>{
            setSubcat_id(itemValue)}}>

<Picker.Item label="Please Select The Item Type" value={null} />
<Picker.Item label="Mobile Phone" value={13} />
<Picker.Item label="Mobile Accessories" value={12} />
<Picker.Item label="Tablets" value={11} />
                              </Picker>
</View>
                      {/* Mobile Phones */}

{subcat_id===13?<View>
<View style={[styles.pick]} >
   <Picker
  selectedValue={make}
  onValueChange={(itemValue, itemIndex) =>{
            setMake(itemValue)
                
          }

}
>
            <Picker.Item label="Company Name" value={null}/>

            <Picker.Item label="Samsung" value="Samsung" />
  <Picker.Item label="Motorola"  value="Motorola" />
  <Picker.Item label="Infinix" value="Infinix" />
  <Picker.Item label="Iphone" value="Iphone" />
  <Picker.Item label="Huawei" value="Huawei" />
  <Picker.Item label="Qmobile" value="Qmobile" />
  <Picker.Item label="Realme" value="Realme" />
  <Picker.Item label="Readmi" value="Readmi" />
  <Picker.Item label="Vivo" value="Vivo" />
  <Picker.Item label="Tecno" value="Tecno" /> 
   <Picker.Item label="Google" value="Google" />
   <Picker.Item label="HTC" value="HTC" />
   <Picker.Item label="Asus" value="Asus" />
   <Picker.Item label="Honor" value="Honor" />
   <Picker.Item label="LG" value="LG" />
   <Picker.Item label="Lenovo" value="Lenovo" />
   <Picker.Item label="One Plus" value="One Plus" />
   <Picker.Item label="Oppo" value="Oppo" />
   <Picker.Item label="Nokia" value="Nokia" />
   <Picker.Item label="iNew" value="iNew" />
   <Picker.Item label="Sony" value="Sony" />
   <Picker.Item label="Other Mobile" value="Other Mobile" />
</Picker>
</View>
<View style={styles.pick}  >
       <Picker
  selectedValue={condition}
  onValueChange={(itemValue, itemIndex) =>{
            setCondition(itemValue)
                
          }

}>
   <Picker.Item label="Condition Type" value={null} />
   <Picker.Item label="New" value="New" />
   <Picker.Item label="Used" value="Used" />
</Picker>
</View>
<View style={{alignItems:"center"}}>
<TextInput style={styles.inps}   placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text)=>setPostman_name(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="You Prices" />
          <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text)=>setTitle(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="State" onChangeText={(text)=>setState(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="City" onChangeText={(text)=>setCity(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Number" keyboardType="number-pad" onChangeText={(text)=>setPhone_number(text)} />
          <TextInput multiline minHeight={70}  placeholderTextColor="gray" style={styles.inpscom}  placeholder="Discription" onChangeText={(text)=>setDescription(text)} />
          <TouchableOpacity style={styles.button} onPress={savedata}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Post Your Ads</Text>
      </LinearGradient>
          </TouchableOpacity>
</View>
</View>:<View>
   </View>}


            {/* For accessiories */}

{subcat_id===12?
<View>
<View style={styles.pick}  >
       <Picker
  selectedValue={condition}
  onValueChange={(itemValue, itemIndex) =>{
            setCondition(itemValue)
                
          }

}>
   <Picker.Item label="Condition Type" value={null} />
   <Picker.Item label="New" value="New" />
   <Picker.Item label="Used" value="Used" />
</Picker>
</View>
<View style={styles.pick}  >
<Picker
  selectedValue={type}
  onValueChange={(itemValue, itemIndex) =>{
            setType(itemValue)
                
          }

}>
   <Picker.Item label="accessories Type" value={null} />
   <Picker.Item label="Mobile" value="Mobile" />
   <Picker.Item label="Tablets" value="Tablets" />
</Picker>
</View>
<View style={{alignItems:"center"}}>

<TextInput style={styles.inps}   placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text)=>setPostman_name(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="You Prices" />
          <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text)=>setTitle(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="State" onChangeText={(text)=>setState(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="City" onChangeText={(text)=>setCity(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Number" keyboardType="number-pad" onChangeText={(text)=>setPhone_number(text)} />
          <TextInput multiline minHeight={70}  placeholderTextColor="gray" style={styles.inpscom}  placeholder="Discription" onChangeText={(text)=>setDescription(text)} />
          <TouchableOpacity style={styles.button} onPress={savedata}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Post Your Ads</Text>
      </LinearGradient>
          </TouchableOpacity>
</View>
</View>:
<View></View>
}

                       {/* For Tablets */}

{subcat_id===11?<View>
<View style={styles.pick} >
   <Picker
  selectedValue={make}
  onValueChange={(itemValue, itemIndex) =>{
            setMake(itemValue)
                
          }

}
>
            <Picker.Item label="Company Name" value={null}/>

            <Picker.Item label="Samsung" value="Samsung" />
  <Picker.Item label="Apple"  value="Apple" />
  <Picker.Item label="Dany Tabs" value="Dany tabs" />
  <Picker.Item label="Q Tabs" value="Q Tabs" />
   <Picker.Item label="Other Tablets" value="Other tablets" />
</Picker>
</View>
<View style={styles.pick}  >
       <Picker
  selectedValue={condition}
  onValueChange={(itemValue, itemIndex) =>{
            setCondition(itemValue)
                
          }

}>
   <Picker.Item label="Condition Type" value={null} />
   <Picker.Item label="New" value="New" />
   <Picker.Item label="Used" value="Used" />
</Picker>
</View>
<View style={{alignItems:"center"}}>
<TextInput style={styles.inps}   placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text)=>setPostman_name(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="You Prices" />
          <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text)=>setTitle(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="State" onChangeText={(text)=>setState(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="City" onChangeText={(text)=>setCity(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Number" keyboardType="number-pad" onChangeText={(text)=>setPhone_number(text)} />
          <TextInput multiline minHeight={70}  placeholderTextColor="gray" style={styles.inpscom}  placeholder="Discription" onChangeText={(text)=>setDescription(text)} />
          <TouchableOpacity style={styles.button} onPress={savedata}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Post Your Ads</Text>
      </LinearGradient>
          </TouchableOpacity>
</View>
</View>:<View>
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