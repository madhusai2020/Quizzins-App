import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function WrongScreenFruits(props) {
  const route = useRoute()
    const PScreenNameFruits= route.params.data2
    const PScoreFruits= parseInt(route.params.datawFruits)
    return (
        <View style={{alignItems:"center", justifyContent:"center", backgroundColor:"red", flex:1}}>
            <Text style={{fontSize:40, marginBottom:100, color:"white"}}>Wrong Answer! Next Question...</Text>
            <Image style={{height:'40%', width:'70%', marginBottom:100}}source={{uri:"https://thumbs.dreamstime.com/b/oops-sticky-note-yellow-pinned-red-push-pin-cork-board-92680037.jpg"}}></Image>
            <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:250, height:50,
  backgroundColor:"pink" }}  onPress= {()=>{props.navigation.navigate(PScreenNameFruits, {data1:PScoreFruits})}}
   
  >
    
  
    <Text style={{color:"black",fontWeight:"90", marginLeft:10, fontSize:30}}> Next question </Text>
  </TouchableOpacity>
  
        </View>
    )
}