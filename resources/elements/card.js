import React from 'react';
import { View,Text,SafeAreaView,ScrollView,TextInput,StyleSheet,TouchableOpacity,Image } from "react-native"
import { VStack, Box, Divider } from 'native-base';

export default function Card () {
  return (
    <Box border={1} borderRadius='md' style={{width:180}}>
      <VStack space={0} divider={<Divider />}>
        <Box px={0} pt={0}>
          <Image style={{width:180,height:100}} source={{uri:"https://images.olx.com.pk/thumbnails/183539381-400x300.webp"}}/>
        </Box>
        <Box px={4} pt={3}>
        12000
        </Box>
        <Box px={4} pt={3}>
        phone with All accessories 8 months warranty left
        </Box>
        <Box px={4} pb={4} pt={3}>
          karachi
        </Box>
      </VStack>
    </Box>
  );
}