import React, { Fragment, Component } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Avatar } from 'react-native-elements';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class Imagss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: '',

    }
  }

  componentDidMount() {
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  chooseImage = () => {
    // this.props.parentCallback(this.state.fileUri)
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      // console.log('Response = ', r);

      if (response.didCancel) {
        this.setState({ visible: false });
        console.log('User cancelled image picker');
      } else if (response.error) {
        this.setState({ visible: false });
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        const responses = response.assets[0].uri
        const im = response.assets[0]
        this.props.parentCallback(im)
        console.log("assexr=====>>>>>>=====", responses)
        this.setState({ visible: false });
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: responses
        });
      }
    });
  }

  launchCamera = async () => {
    // await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.CAMERA)
    let options = {
      // PermissionStatus : ?,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response) => {
      // let response = responses.assets[0]              
      console.log('Camera Lunch == ', response);

      if (response.didCancel) {
        this.setState({ visible: false });
        console.log('User cancelled image picker');
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      }
      else if (response.error) {
        this.setState({ visible: false });
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        const source = { uri: response.uri };

        const responses = response.assets[0].uri
        const im = response.assets[0]
        this.props.parentCallback(im)
        console.log("assexr=====>>>>>>=====", responses)
        this.setState({ visible: false });
        console.log('patanhi', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: responses
        });
      }
    });

  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      //  const response = a.assets


      if (response.didCancel) {
        this.setState({ visible: false });
        console.log('User cancelled image picker');
      } else if (response.error) {
        this.setState({ visible: false });
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const responses = response.assets[0].uri
        const im = response.assets[0]
        this.props.parentCallback(im)
        console.log("assexr=====>>>>>>=====", responses)
        this.setState({ visible: false });
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: responses
        });
      }
    });

  }

  renderFileData(props) {
    if (this.state.fileData) {
      return <Image source={{ uri: this.state.fileData }}
        onPress={() => {
          this.setState({ visible: true });
        }}
        style={styles.images}
      />
    }
    //      else {
    // return <Image source={{uri:"https://p.kindpng.com/picc/s/391-3918958_phone-icon-mobile-phone-hd-png-download.png"}}
    //   style={styles.images}
    // />
    // }
  }

  renderFileUri(props) {
    if (this.state.fileUri) {
      return <View style={styles.images}>
        <Avatar
          rounded
          source={{ uri: this.state.fileUri }}
          onPress={() => {
            this.setState({ visible: true });
          }}
          size={100}

        // style={{styles.images}}
        />
      </View>
    } else {
      return <View style={styles.images}>
        <Ionicons name="person-add-sharp"
          size={90}
          onPress={() => {
            this.setState({ visible: true });
          }}
          color={"white"} />
        {/* <Avatar
      rounded
        source={{uri:this.props.user.photoURL}}
        size={130}
        onPress={()=>{
          this.setState({ visible: true });        
        }}

      /> */}
      </View>
    }
  }
  render(props) {
    // const uri = {this.props.}
    return (
      <View>

        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent>
            <Fragment>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView>
                <View style={styles.body}>

                  <View style={styles.btnParentSection}>
                    {/* {this.renderFil eData()} */}
                    <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
                      <Text style={styles.btnText}>Choose File</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
                      <Text style={styles.btnText}>Directly Launch Camera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
                      <Text style={styles.btnText}>Directly Launch Image Library</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </SafeAreaView>
            </Fragment>

          </DialogContent>
        </Dialog>


        {this.renderFileUri()}

      </View>
    );
  }
};

const styles = StyleSheet.create({
  //   scrollView: {
  //     backgroundColor: Colors.lighter,
  //   },

  //   body: {
  //     backgroundColor: Colors.white,
  //     justifyContent: 'center',
  //     borderColor: 'black',
  //     borderWidth: 1,
  //     height: Dimensions.get('screen').height - 20,
  //     width: Dimensions.get('screen').width
  //   },
  //   ImageSections: {
  //     display: 'flex',
  //     flexDirection: 'row',
  //     paddingHorizontal: 8,
  //     paddingVertical: 8,
  //     justifyContent: 'center'
  //   },
  images: {
    //     width: 80,
    //     height: 80,
    //     borderRadius:70,
    //     borderColor: 'black',
    //     borderWidth: 1,
    // marginHorizontal: 30,
    // marginVertical:40
  },
  //   btnParentSection: {
  //     alignItems: 'center',
  //     marginTop:10
  //   },
  btnSection: {
    //     width: 200,
    height: 50,
    //     backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    //     borderRadius: 3,
    //     marginBottom:10
  },
  //   btnText: {
  //     textAlign: 'center',
  //     color: 'gray',
  //     fontSize: 14,
  //     fontWeight:'bold'
  //   }
});