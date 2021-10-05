


//         import DropDown, {
//           Select,
//           Option,
//           OptionList,
//         } from 'react-native-option-select';

//         class Optionss extends Component {
//           constructor(props) {
//             super(props);

//             this.state = {
//               canada: ''
//             };
//           }

//           _getOptionList() {
//             return this.refs['OPTIONLIST'];
//           }


//           _canada(province) {

//           this.setState({
//               ...this.state,
//               canada: province
//             });
//           }

//           render() {
//             return (
//               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                   <Select
//                     width={250}
//                     optionListRef={this._getOptionList.bind(this)}
//                     defaultValue="Select a Province in Canada ..."
//                     onSelect={this._canada.bind(this)}>
//                     <Option value = {{id : "alberta"}}>Alberta</Option>
//                     <Option>British Columbia</Option>
//                     <Option>Manitoba</Option>
//                     <Option>New Brunswick</Option>
//                     <Option>Newfoundland and Labrador</Option>
//                     <Option>Northwest Territories</Option>
//                     <Option>Nova Scotia</Option>
//                     <Option>Nunavut</Option>
//                     <Option>Ontario</Option>
//                     <Option>Prince Edward Island</Option>
//                     <Option>Quebec</Option>
//                     <Option>Saskatchewan</Option>
//                     <Option>Yukon</Option>
//                   </Select>

//                   <Text>Selected Canada's province: {this.state.canada}</Text>

//                   <OptionList ref="OPTIONLIST"/>
//               </View>
//             );
//           }
//         }

//         AppRegistry.registerComponent('Optionss', () => Optionss);



// import SelectDropdown from 'react-native-select-dropdown'

// export default function Optionss(){
//           const countries = ["Egypt", "Canada", "Australia", "Ireland"]
//           return(
// // <View>
// <SelectDropdown
// 	data={countries}
// 	onSelect={(selectedItem, index) => {
// 		console.log(selectedItem, index)
// 	}}
// 	buttonTextAfterSelection={(selectedItem, index) => {
// 		// text represented after item is selected
// 		// if data array is an array of objects then return selectedItem.property to render after item is selected
// 		return selectedItem
// 	}}
// 	rowTextForSelection={(item, index) => {
// 		// text represented for each item in dropdown
// 		// if data array is an array of objects then return item.property to represent item in dropdown
// 		return item
// 	}}
// />
// // </View>
//           );
// }





import React, { useState } from "react"
// import React, {
//           Component,
//           AppRegistry,
//           // Text,
//           // View,
//           Button,
//           TouchableOpacity
//         } from 'react-native';
import {
    FormControl,
    Select,
    HStack,
    Text,
    View,
    Button,
    Container,
    CheckIcon,
    StyleSheet,
    Center,
    NativeBaseProvider,
} from "native-base"
import GetLocation from 'react-native-get-location'
// import MapComponent from "./LOcation"
export default function Optionss() {
    const [value, setValue] = React.useState("")
    const { locations, setLocation } = React.useState("")
    const Locationgeter = (locations) => {
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
    return (


        <Container>
            <FormControl isRequired isInvalid>
                {/* <FormControl.Label>Select Item</FormControl.Label> */}
                <Select

                    selectedValue={value}
                    minWidth={300}
                    // size={300}
                    // backgroundColor="red"
                    accessibilityLabel="Choose your Location"
                    placeholder="Choose your Location"
                    onValueChange={(itemValue) => {
                        setValue(itemValue)
                    }}
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size={1} />,
                    }}
                    mt={1}
                >
                    {/* <Select.Item label="Get Your Current Location" onPress={Locationgeter}value={<MapComponent/>} /> */}
                    <Select.Item label="Karachi" value="js" />
                    <Select.Item label="Karachi,Pak Colony" value="java" />
                    <Select.Item label="Karachi,Garden" value="java" />
                    <Select.Item label="Karachi," value="java" />
                    <Select.Item label="Peshawar" value="java" />
                    <Select.Item label="Peshawar" value="java" />
                    <Select.Item label="Hydrabad" value="ts" />
                    <Select.Item label="Quatta" value="c" />
                    <Select.Item label="KPK" value="py" />
                    <Select.Item label="Peshawar" value="java" />
                    <Select.Item label={<Button onPress={Locationgeter}>
                        <Text>button</Text>

                    </Button>} value="java" />
                </Select>
                {/* <FormControl.HelperText mt={1}>
                                                  We'll keep this between us.
                                        </FormControl.HelperText> */}
                {/* <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage> */}
            </FormControl>
            {/* 
                              <HStack mt={3} alignItems="baseline">
                                        <Text fontSize="md">Selected Values: </Text>
                                        <Text fontSize="md" bold>
                                                  {value}
                                        </Text>
                              </HStack> */}
        </Container>

    )
}

// const styles = StyleSheet.create({
// selection:{

// }  
// });




// export const Example = () => {
//   const [value, setValue] = React.useState("js")
//   return (
//     <Container>
//       <FormControl isRequired isInvalid>
//         <FormControl.Label>Select Item</FormControl.Label>
//         <Select
//           selectedValue={value}
//           minWidth={200}
//           accessibilityLabel="Select your favorite programming language"
//           placeholder="Select your favorite programming language"
//           onValueChange={(itemValue) => {
//             setValue(itemValue)
//           }}
//           _selectedItem={{
//             bg: "teal.600",
//             endIcon: <CheckIcon size={5} />,
//           }}
//           mt={1}
//         >
//           <Select.Item label="JavaScript" value="js" />
//           <Select.Item label="TypeScript" value="ts" />
//           <Select.Item label="C" value="c" />
//           <Select.Item label="Python" value="py" />
//           <Select.Item label="Java" value="java" />
//         </Select>
//         <FormControl.HelperText mt={1}>
//           We'll keep this between us.
//         </FormControl.HelperText>
//         <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
//       </FormControl>

//       <HStack mt={3} alignItems="baseline">
//         <Text fontSize="md">Selected Values: </Text>
//         <Text fontSize="md" bold>
//           {value}
//         </Text>
//       </HStack>
//     </Container>
//   )
// }
