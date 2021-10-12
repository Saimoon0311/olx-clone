import React, { useState, useCallback } from "react";
import { ImageSlider } from "react-native-image-slider-banner";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';

export default function Itemdetails({ route, navigation }) {
  const item = route.params;
  console.log(item);
  const openDialScreen = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = `telprompt:${item.IsPhone}`;
    } else {
      number = `tel:${item.IsPhone}`;
    }
    Linking.openURL(number);
  };

  //    {{  For Number sms }} 

  const openSms = useCallback(async (phoneNumber, message) => {
    const separator = Platform.OS === 'ios' ? '&' : '?'
    phoneNumber = item.IsPhone
    const url = `sms:${phoneNumber}${separator}body=${""}`
    await Linking.openURL(url)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <ScrollView>
          <View>
            <ImageSlider
              data={[
                { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` },
                item.img2 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img2}` },
                item.img3 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img3}` },
                item.img4 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img4}` },
                item.img5 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img5}` },
                item.img6 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img6}` },
                item.img7 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img7}` },
                item.img8 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img8}` },
                item.img9 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img9}` },
                item.img10 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img10}` },
                item.img11 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img11}` },
                item.img2 === null ? { img: `https://olx.devoa.xyz/User/images/post_images/${item.main_img}` } : { img: `https://olx.devoa.xyz/User/images/post_images/${item.img12}` },
              ]}
              showIndicator={true}
              closeIconColor="#010385"
              previewImageStyle={{ width: "100%", resizeMode: "stretch" }}
              showHeader
              headerLeftComponent={<Ionicons name="arrow-back-outline" color="#fff" size={34} onPress={() => navigation.goBack()} />}
              headerCenterComponent={<Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{item.title}</Text>}
              headerStyle={{ padding: 10, backgroundColor: 'rgba(0,0,0, 0.6)', }}
              caroselImageStyle={{ height: 250 }}
              indicatorContainerStyle={{ bottom: 0 }}
            />
            <View style={styles.main}>
              <Text style={{ fontSize: 25, paddingBottom: 10, marginTop: 10, fontWeight: "bold", color: "#010385" }}>Rs = <Text style={{ color: "black" }}> {item.price} </Text></Text>
            </View>
            <View style={styles.main}>
              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
            </View>
            <View style={[styles.mains, { marginLeft: 14 }]}>
              <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}> Title : </Text>
              <Text style={{ fontSize: 20, paddingBottom: 10 }}>{item.title}</Text>
            </View>
            <View style={styles.main}>
              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
            </View>

            <View style={[styles.mains, { marginLeft: 14 }]}>
              <Ionicons name="location-sharp" size={30} />
              <Text style={{ fontSize: 20, paddingBottom: 10 }}>{item.city} , {item.state}</Text>
            </View>

            <View style={styles.main}>
              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
            </View>
            <View style={{ flexDirection: "row" }} >
              <Text style={{ fontWeight: "bold", fontSize: 30, color: "#010385", textDecorationLine: "underline", marginLeft: 20 }}>Details</Text>
              <Text style={{ fontWeight: "bold", fontSize: 25, color: "#010385", paddingTop: 7 }}> :</Text>
            </View>
            <Text></Text>
            <View style={styles.main}>
              <View style={styles.mainss}>
                <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Prices : </Text>
                <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.price}</Text>
              </View>
              {item.condition === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Condition : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.condition} </Text>
                  </View>
                </View>
              }
              {/* For fuel type */}
              {item.fuel === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Fuel Type : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.fuel} </Text>
                  </View>
                </View>
              }
              {/* For Componey maker */}

              {item.make === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Company Maker : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.make} </Text>
                  </View>
                </View>
              }
              {/* For Year */}
              {item.year === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Registration Year : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.year} </Text>
                  </View>
                </View>
              }
              {/* Package type */}
              {item.package_type === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Package Type : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.package_type} </Text>
                  </View>
                </View>
              }
              {/* Positon Type */}
              {item.position_type === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Position Tpye : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.position_type} </Text>
                  </View>
                </View>
              }
              {/* Access Type */}
              {item.type === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Accessories Type : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.type} </Text>
                  </View>
                </View>
              }
              {/*  Monthly Instalmunt */}
              {item.monthly_installment === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Monthly Installment : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.monthly_installment} </Text>
                  </View>
                </View>
              }
              {/*  Instalment Plane */}
              {item.installment_plan === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Installment Plane : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.installment_plan} </Text>
                  </View>
                </View>
              }
              {/* Registered */}
              {item.registered === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Resgisterd : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.registered} </Text>
                  </View>
                </View>
              }
              {/* Salary From */}
              {item.sallery_from === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Salary From : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.sallery_from} </Text>
                  </View>
                </View>
              }
              {/* Salary to */}
              {item.sallery_to === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Salary To : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.sallery_to} </Text>
                  </View>
                </View>
              }
              {/* Area */}
              {item.area === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Area : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.area} </Text>
                  </View>
                </View>
              }
              {/* Area unit */}
              {item.area_unit === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Area Unit : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.area_unit} </Text>
                  </View>
                </View>
              }
              {/* bathroom */}
              {item.bathrooms === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Total Bathrooms : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.bathrooms} </Text>
                  </View>
                </View>
              }
              {/* Badrooms */}
              {item.bedrooms === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Total Badrooms : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.bedrooms} </Text>
                  </View>
                </View>
              }
              {/* Kilo Meter */}
              {item.KmDriven === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Kilometer Derived : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.KmDriven} </Text>
                  </View>
                </View>
              }
              {/* Down payment */}
              {item.down_payment === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>Down Payment : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.down_payment} </Text>
                  </View>
                </View>
              }
              {/* Flour Level */}
              {item.floor_level === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Floor Level : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.floor_level} </Text>
                  </View>
                </View>
              }
              {/* Flournished */}
              {item.furnished === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Furnished : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.furnished} </Text>
                  </View>
                </View>
              }
              {/* Type Of area */}
              {item.type_of_ad === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Area Type : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.type_of_ad} </Text>
                  </View>
                </View>
              }
              {/* REgister in */}
              {item.Registered_In === null ? <View></View> :
                <View>
                  <View style={styles.mainss}>
                    <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
                  </View>
                  <View style={styles.mainss}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, color: "#010385", fontWeight: "bold" }}>Regsitered In : </Text>
                    <Text style={{ fontSize: 20, marginLeft: "auto" }} >{item.Registered_In} </Text>
                  </View>
                </View>
              }
            </View>
            <View style={styles.main}>
              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
            </View>
            <View style={[styles.main]}>
              <Text></Text>
              <View style={{ flexDirection: "row" }} >
                <Text style={{ fontWeight: "bold", fontSize: 30, color: "#010385", textDecorationLine: "underline" }}>Description</Text>
                <Text style={{ fontWeight: "bold", fontSize: 25, color: "#010385", paddingTop: 7 }}> :</Text>
              </View>
              <Text></Text>
              <Text style={{ fontSize: 20, paddingBottom: 10, textAlign: "justify" }}> {item.description} </Text>

            </View>
            <View style={styles.main}>

              <Text style={{ flex: 1, height: 1, backgroundColor: 'black' }} ></Text>
            </View>
            <View style={[styles.main, { flexDirection: "row" }]}>
              <View>
                <Ionicons name="person-circle" size={120} />
              </View>
              <View>
                <Text style={{ fontSize: 30, top: 15, fontWeight: "bold", paddingRight: 120 }} numberOfLines={2} >{item.postman_Name}</Text>
                <TouchableOpacity style={{ top: 15 }} onPress={() => navigation.navigate("Profile", item)}>
                  <Text style={{ fontSize: 20, textDecorationLine: "underline" }} >View Profile</Text>
                </TouchableOpacity>
              </View>
              {/* <View style={{marginLeft:"auto",top:40}} >
                                      <TouchableOpacity onPress={()=>navigation.navigate("Profile",item)}>
                                        <Ionicons name="arrow-forward-outline" size={40}/>
                                      </TouchableOpacity>
                                      </View> */}
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        </ScrollView>


        {/* For Phone Number */}

      </View>
      {item.IsPhone === null ? <View style={{ position: "absolute", bottom: 5, alignSelf: "center" }} >
        <View style={{ flexDirection: "row", bottom: 0, alignSelf: "center" }} >
          <TouchableOpacity style={{ backgroundColor: "#0606d6", width: 200, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 20, marginRight: 10 }}  onPress={() => navigation.navigate("Chatpage", item)} >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Ionicons name="chatbubbles-outline" color="white" size={30} />
              <Text style={{ color: "white", fontSize: 23, paddingLeft: 20, fontWeight: "bold" }} >Chat</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View> :

        <View style={{ position: "absolute", bottom: 5, alignSelf: "center" }} >
          <View style={{ flexDirection: "row", bottom: 0, alignSelf: "center" }} >
            <TouchableOpacity style={{ backgroundColor: "#0606d6", width: 95, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 20, marginRight: 10 }}  onPress={() => navigation.navigate("Chatpage", item)}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Ionicons name="chatbubbles-outline" color="white" size={30} />
                <Text style={{ color: "white", fontSize: 23, paddingLeft: 2 }} >Chat</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#0606d6", width: 95, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 20, marginRight: 10 }} onPress={openSms} >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Ionicons name="chatbox-ellipses-outline" color="white" size={30} />
                <Text style={{ color: "white", fontSize: 23, paddingLeft: 2 }} >SMS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#0606d6", width: 95, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 20, marginRight: 10 }} onPress={openDialScreen}  >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Ionicons name="call-outline" color="white" size={30} />
                <Text style={{ color: "white", fontSize: 23, paddingLeft: 2 }} >Call</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      }
    </SafeAreaView>


  )
}



const styles = StyleSheet.create({
  main: {
    marginLeft: 20,
    fontSize: 10,
    marginRight: 20
    // flexDirection:"row"
  },
  mains: {
    marginLeft: 20,
    flexDirection: "row",
    // justifyContent:"space-around"
  },
  mainss: {
    flexDirection: "row"
  },
})