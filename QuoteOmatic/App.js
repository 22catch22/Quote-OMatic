
import { StatusBar } from 'expo-status-bar';
import {Button, Animated, StyleSheet, Text, View ,Card, ImageBackground } from 'react-native';
import Qfetcher from './components/qfinder';
 
const image = {uri:'//images.unsplash.com/photo-1472552944129-b035e9ea3744?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
export default function welcomescreen(){


return (
 
<View style = {style.container1}>
        
<ImageBackground source={image} resizeMode='cover' style = {style.image}> 


<View style = {style.container2}>

<Qfetcher/>

</View>

</ImageBackground>

</View>
 
)
}
style = StyleSheet.create
({

 container1:{
 flex:3,
 height:800,
 width:500,
 alignItems:"center",
 },

   container2:{

flex:1,
height:800,
width:400,
 },

 buttoncontainer:{
 flex:5,
 height: 300,
 width:200,
 
  alignItems:"center",
 margin:"auto",
 backgroundColor:"darkcyan",
  color : "white",
  },
  
text:{
fontSize:50,
textAlign :'center',
alignContent:'center',
flexWrap:'wrap',
padding: 'auto',
color:'white',
},

 
image:
{flex:1,
justifyContent:'center'}

})
