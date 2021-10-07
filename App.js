// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// // import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import MyTabs from "./resources/config/bottomnavigation"
// import Navigation from './resources/config/navigation';
// function App(){
//   return(
//       <NavigationContainer>
// <Navigation/>
// </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
  
// });

// export default App;

















import React, { Component } from 'react';  
 import { Platform, StyleSheet, View, Text,  
 Image, TouchableOpacity, Alert } from 'react-native';  
 import Navigation from './resources/config/navigation';
 import { NavigationContainer } from '@react-navigation/native';
 import FlashMessage from "react-native-flash-message";
 import imageee from "./resources/Images/12569.gif"
import { Provider } from 'react-redux';
import store from './resources/redux/store';
 export default class App extends Component  
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  


    }, 5000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <Image source={require('./resources/Images/Untitled-1.png')}  
                    style={{width:'100%', height: 900, resizeMode: 'contain'}} />  
                <Text>Hyuidn jfium dkuddkk</Text>
                </View>  
             </View> )  
         return(
           <Provider store={store} >
              {(this.state.isVisible === true) ? Splash_Screen : 
           <NavigationContainer>
           <Navigation/>
         </NavigationContainer>}
               <FlashMessage position="top" />
               </Provider>
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        // margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#30c1d4',  
        flex:1,  
    },  
});  

























// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import MyTabs from "./resources/config/bottomnavigation"
// import Navigation from './resources/config/navigation';
// import { View, Text } from 'react-native';
// class App extends React.Component { performTimeConsumingTask = async() => {
// return new Promise((resolve) => setTimeout(
// () => { resolve('result') }, 2000
// )
// )
// }
// async componentDidMount() {
// const data = await this.performTimeConsumingTask();
// if (data !== null) { 
//   console.log("dataaadad===>>>>>",data)
// }
// }
// render() { return (
//   <NavigationContainer>
//     <Navigation/>
//   </NavigationContainer>
// );
// }
// }
// const styles = { viewStyles: {
// flex: 1,
// alignItems: 'center', justifyContent: 'center', backgroundColor: '#79ff26'
// },
// textStyles: {
// color: '#ff4824', fontSize: 50, fontWeight: 'italic'
// }
// }
// export default App;