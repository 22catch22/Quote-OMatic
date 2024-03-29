import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View , Card, Pressable} from 'react-native';
import quotes from '../Quotes/Quotes.json';
import React from 'react';
import { useState} from 'react';
 



export default function Qfetcher(){
 // Here we set up a function to retrive a random ID from the 'Quotes' Array
const [quote, setquote] = useState("");
 
const min = 0;

const max = quotes.length;
//Setting up the random function thing
const ranid = Math.floor(Math.random() * (max - min)) + min; 
//stringify it
let x = JSON.stringify(quotes[ranid]);

 //return it

return(

<View style = {style.container}>

<Text style = {style.text}> 

{"\n"} 

{"\n"}

{quote}

</Text>

<Pressable style = {style.buttoncontainer} onPress={() => setquote(x)}>Get a Quote</Pressable>

</View>

)}

style = StyleSheet.create

({
container:{
flex:1,
height:800,
width:500,
backgroundColor:"darkcyan",
alignItems:"center",
},
  
buttoncontainer:{
flex:3,
alignItems:"center",
margin:"auto",
color : "red",
},



text:{
fontStyle:"italic",
fontSize:10,
textAlign :'center',
alignContent:'center',
flexWrap:'wrap',
padding: 'auto',
 
}})



 