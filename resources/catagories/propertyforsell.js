import React,{useState} from "react"
import {Picker} from '@react-native-picker/picker';
import { View,Text,TouchableOpacity,TextInput,StyleSheet,ScrollView,SafeAreaView} from "react-native"
import Mobilepicker from "../elements/mobilepicker";
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';

export default function Propertyforsell ({navigation},props){
          // const ty = 
          const [subcat_id, setSubcat_id] = useState(null);
          const [cat_id,setCat_id] = useState(3)
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
          const[bedrooms,setBedrooms]=useState(null)
          const [bathrooms,setBathrooms]=useState(null)
          const[is_furnished,setIs_furnished]=useState(null)
          const[area,setArea]=useState(null)
          const[land,setLand]=useState(null)
          const[floor_level,setFloor_level]=useState(null)
          const [area_unit,setArea_unit]=useState(null)
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
                     is_furnished,
                     bedrooms,
                     bathrooms,
                     
                     // phone_number,
                     city,
                     state,
                     area,
                     floor_level,
                     area_unit,
                     // IsPhone,
                     main_img,
                     description,
                     land,
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
<View  style={[styles.pick,{borderColor:"black",borderWidth:5}]}>
   <Picker
  selectedValue={subcat_id}
  onValueChange={(itemValue, itemIndex) =>{
            setSubcat_id(itemValue)
                
          }

} 
   >
      <Picker.Item label="Choose Property Type" value={null} />
      <Picker.Item label="Houses" value={24} />
      <Picker.Item label="Apartments & Flats" value={25} />
      <Picker.Item label="Portions & Floors" value={27} />
      <Picker.Item label="Shops - Offices - Commercials Spaces" value={26} />
      <Picker.Item label="Land & Plots" value={23} />
   </Picker>
</View>

{subcat_id===24?<View>

                              <View  style={[styles.pick]}>
                         <Picker
  selectedValue={area_unit}
  onValueChange={(itemValue, itemIndex) =>{
            setArea_unit(itemValue)
                
          }

}
>
            <Picker.Item label="Area Unit" value=""/>

            <Picker.Item label="Kanal" value="Kanal" />
  <Picker.Item label="Marla"  value="Marla" />
  <Picker.Item label="Square Feet" value="Square Feet" />
  <Picker.Item label="Square Meter" value="Square Meter" />
  <Picker.Item label="Square Yard" value="Square Yard" />
</Picker>
</View>


<View  style={[styles.pick]}>
                         <Picker
  selectedValue={bedrooms}
  onValueChange={(itemValue, itemIndex) =>{
            setBedrooms(itemValue)
                
          }

}
>
            <Picker.Item label="Bedrooms" value=""/>

            <Picker.Item label="1" value="1" />
  <Picker.Item label="2"  value="2" />
  <Picker.Item label="3" value="3" />
  <Picker.Item label="4" value="4" />
  <Picker.Item label="5" value="5" />
  <Picker.Item label="6" value="6" />
  <Picker.Item label="Studio" value="Studio" />
</Picker>
</View>


<View  style={[styles.pick]}>
                         <Picker
  selectedValue={bathrooms}
  onValueChange={(itemValue, itemIndex) =>{
            setBathrooms(itemValue)
                
          }

}
>
            <Picker.Item label="Bathrooms" value=""/>

            <Picker.Item label="1" value="1" />
  <Picker.Item label="2"  value="2" />
  <Picker.Item label="3" value="3" />
  <Picker.Item label="4" value="4" />
  <Picker.Item label="5" value="5" />
  <Picker.Item label="6" value="6" />
  <Picker.Item label="6+" value="6+" />
</Picker>
</View>


<View  style={[styles.pick]}>
                         <Picker
  selectedValue={is_furnished}
  onValueChange={(itemValue, itemIndex) =>{
            setIs_furnished(itemValue)
                
          }

}
>
<Picker.Item label="Furnished or not" value=""/>

            <Picker.Item label="Furnished" value="Furnished" />
  <Picker.Item label="Unfurnished"  value="Unfurnished" />
</Picker>
</View>


<View style={{alignItems:"center"}}>
   {/* <Text>ssdds</Text> */}
<TextInput style={styles.inps}   placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text)=>setPostman_name(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="You Prices" />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPhone_number(text)} placeholder="You Number" />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setArea(text)} placeholder="Area" />
          <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text)=>setTitle(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your State" onChangeText={(text)=>setState(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your City" onChangeText={(text)=>setCity(text)} />
          <TextInput multiline minHeight={70}  placeholderTextColor="gray" style={styles.inpscom}  placeholder="Discription" onChangeText={(text)=>setDescription(text)} />
          <TouchableOpacity style={styles.button} onPress={savedata}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Post Your Ads</Text>
      </LinearGradient>
          </TouchableOpacity>
</View>
</View>:<View></View>}


{subcat_id===25 || subcat_id===27?
<View>

                              <View  style={[styles.pick]}>
                         <Picker
  selectedValue={area_unit}
  onValueChange={(itemValue, itemIndex) =>{
            setArea_unit(itemValue)
                
          }

}
>
            <Picker.Item label="Area Unit" value=""/>

            <Picker.Item label="Kanal" value="Kanal" />
  <Picker.Item label="Marla"  value="Marla" />
  <Picker.Item label="Square Feet" value="Square Feet" />
  <Picker.Item label="Square Meter" value="Square Meter" />
  <Picker.Item label="Square Yard" value="Square Yard" />
</Picker>
</View>


<View  style={[styles.pick]}>
                         <Picker
  selectedValue={bedrooms}
  onValueChange={(itemValue, itemIndex) =>{
            setBedrooms(itemValue)
                
          }

}
>
            <Picker.Item label="Bedrooms" value=""/>

            <Picker.Item label="1" value="1" />
  <Picker.Item label="2"  value="2" />
  <Picker.Item label="3" value="3" />
  <Picker.Item label="4" value="4" />
  <Picker.Item label="5" value="5" />
  <Picker.Item label="6" value="6" />
  <Picker.Item label="Studio" value="Studio" />
</Picker>
</View>


<View  style={[styles.pick]}>
                         <Picker
  selectedValue={bathrooms}
  onValueChange={(itemValue, itemIndex) =>{
            setBathrooms(itemValue)
                
          }

}
>
            <Picker.Item label="Bathrooms" value=""/>

            <Picker.Item label="1" value="1" />
  <Picker.Item label="2"  value="2" />
  <Picker.Item label="3" value="3" />
  <Picker.Item label="4" value="4" />
  <Picker.Item label="5" value="5" />
  <Picker.Item label="6" value="6" />
  <Picker.Item label="Plus" value="Plus" />
</Picker>
</View>


<View  style={[styles.pick]}>
                         <Picker
  selectedValue={floor_level}
  onValueChange={(itemValue, itemIndex) =>{
            setFloor_level(itemValue)
                
          }

}
>
            <Picker.Item label="Floor Level" value=""/>

            <Picker.Item label="1" value="1" />
  <Picker.Item label="2"  value="2" />
  <Picker.Item label="3" value="3" />
  <Picker.Item label="4" value="4" />
  <Picker.Item label="5" value="5" />
  <Picker.Item label="6" value="6" />
  <Picker.Item label="Plus" value="plus" />
  <Picker.Item label="Ground" value="Ground" />
</Picker>
</View>

<View  style={[styles.pick]}>
                         <Picker
  selectedValue={furnished}
  onValueChange={(itemValue, itemIndex) =>{
            setFurnished(itemValue)
                
          }

}
>
            <Picker.Item label="Furnished or not" value=""/>

            <Picker.Item label="Furnished" value="Furnished" />
  <Picker.Item label="Unfurnished"  value="Unfurnished" />
</Picker>
</View>


<View style={{alignItems:"center"}}>
   {/* <Text>ssdds</Text> */}
<TextInput style={styles.inps}   placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text)=>setPostman_name(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="You Prices" />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPhone_number(text)} placeholder="You Number" />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setArea(text)} placeholder="Area" />
          <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text)=>setTitle(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your State" onChangeText={(text)=>setState(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your City" onChangeText={(text)=>setCity(text)} />
          <TextInput multiline minHeight={70}  placeholderTextColor="gray" style={styles.inpscom}  placeholder="Discription" onChangeText={(text)=>setDescription(text)} />
          <TouchableOpacity style={styles.button} onPress={savedata}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Post Your Ads</Text>
      </LinearGradient>
          </TouchableOpacity>
</View>
</View>
:<View></View>}

{subcat_id===26?
<View style={{alignItems:"center"}}>
   {/* <Text>ssdds</Text> */}
<TextInput style={styles.inps}   placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text)=>setPostman_name(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="You Prices" />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPhone_number(text)} placeholder="You Number" />
          <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text)=>setTitle(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your State" onChangeText={(text)=>setState(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your City" onChangeText={(text)=>setCity(text)} />
          <TextInput multiline minHeight={70}  placeholderTextColor="gray" style={styles.inpscom}  placeholder="Discription" onChangeText={(text)=>setDescription(text)} />
          <TouchableOpacity style={styles.button} onPress={savedata}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Post Your Ads</Text>
      </LinearGradient>
          </TouchableOpacity>
</View>
:<View></View>}
{subcat_id===23?
<View>

                              <View  style={[styles.pick]}>
                         <Picker
  selectedValue={area_unit}
  onValueChange={(itemValue, itemIndex) =>{
            setArea_unit(itemValue)
                
          }

}
>
            <Picker.Item label="Area Unit" value=""/>

            <Picker.Item label="Kanal" value="Kanal" />
  <Picker.Item label="Marla"  value="Marla" />
  <Picker.Item label="Square Feet" value="Square Feet" />
  <Picker.Item label="Square Meter" value="Square Meter" />
  <Picker.Item label="Square Yard" value="Square Yard" />
</Picker>
</View>


<View  style={[styles.pick]}>
                         <Picker
  selectedValue={land}
  onValueChange={(itemValue, itemIndex) =>{
            setLand(itemValue)
                
          }

}
>
            <Picker.Item label="Land Type" value=""/>

            <Picker.Item label="Agriculture Land" value="Agriculture Land" />
  <Picker.Item label="Commercial Plots"  value="Commercial Plots" />
  <Picker.Item label="Files" value="Files" />
  <Picker.Item label="Industrial Area" value="Industrial Area" />
  <Picker.Item label="Residential Plots" value="Residential Plots" />
  <Picker.Item label="Plot Form" value="Plot Form" />
</Picker>
</View>






<View style={{alignItems:"center"}}>
   {/* <Text>ssdds</Text> */}
<TextInput style={styles.inps}   placeholderTextColor="gray" placeholder="Your Name " onChangeText={(text)=>setPostman_name(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPrice(text)} placeholder="You Prices" />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setPhone_number(text)} placeholder="You Number" />
          <TextInput style={styles.inps}  placeholderTextColor="gray" keyboardType="number-pad" onChangeText={(text)=>setArea(text)} placeholder="Area" />
          <TextInput style={styles.inps} placeholderTextColor="gray" placeholder="Title" onChangeText={(text)=>setTitle(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your State" onChangeText={(text)=>setState(text)} />
          <TextInput style={styles.inps}  placeholderTextColor="gray" placeholder="Your City" onChangeText={(text)=>setCity(text)} />
          <TextInput multiline minHeight={70}  placeholderTextColor="gray" style={styles.inpscom}  placeholder="Discription" onChangeText={(text)=>setDescription(text)} />
          <TouchableOpacity style={styles.button} onPress={savedata}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
        <Text style={styles.text}>Post Your Ads</Text>
      </LinearGradient>
          </TouchableOpacity>
</View>
</View>
:<View></View>}
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
paddingRight:20,
// height:200,
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