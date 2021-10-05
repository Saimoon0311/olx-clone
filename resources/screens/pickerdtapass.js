import React,{useState} from "react"
import { View,Text } from "react-native"
import {Picker} from '@react-native-picker/picker';

export default function Pickerrsss(prop){
          const [selectedLanguage, setSelectedLanguage] = useState();
return(
          <View>
                    <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }
  >
            <Picker.Item label={prop.label} value={prop.value}/>

            <Picker.Item label={prop.labels} value="cv" />
  <Picker.Item label= "Karachi"  value="ka" />
  <Picker.Item label="Hydrabad" value="ha" />
</Picker>
          </View>
)
}