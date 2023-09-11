/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

 import {

   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
 } from 'react-native';



class Thankyou extends Component{
  onpressbutton =()=>{
    this.props.navigation.navigate('Home')
  };
    render(){
        return (
            <View style={styles.view}>
                <View style={styles.Container1}>
                  <Text style={styles.text1}>
                    Thank you
                  </Text>
                </View>
                <View style={styles.Container}>
                    <Image
                    source={require('../assest/image/onboard2.png')}
                    style={styles.image}
                    />
                </View>

                <View style={styles.Container2}>
                  
                  <Text style={styles.text}>
                   Your online account is successfully {'\n'}created.
                  </Text>


                  <TouchableOpacity onPress={this.onpressbutton} style={styles.button}>
                          <Text style={styles.text3}>{'LOGIN '}</Text>
                 </TouchableOpacity>
                </View>



            </View>
        );
    }
}

 const styles = StyleSheet.create({
     view:{
         flex:1,
         backgroundColor:'#FDCE42',
         justifyContent:'center',
         alignItems:'center',
       
        },
      Container: {
        alignItems:'center',
        width:100,
        height:100,
        paddingBottom:10,
        marginBottom:290,
        marginTop:-150,

      },
      Container1: {
        justifyContent:'center',
        alignItems:'center',
        width:300,
        height:150,
        marginTop:250,
        marginBottom:100,

      },
      Container2: {
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20,
        marginTop:-150,
        marginBottom:150,


      },

      image: {
        width:300,
        height:300,
        marginBottom:100,
        marginTop:-130,

   },
   button:{
       borderWidth:3,
       borderRadius:30,
       backgroundColor:'#fdc92e',
       width:250,
       height:50,
       marginTop:10,
       borderColor:'#000000',
       
   },

   text:{
     fontSize:18,
     paddingHorizontal:30,
     textAlign:'center',
     fontWeight:'bold',
     marginTop:-50,
     color:'#000000',
     marginBottom:20,

   },
   text1:{
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    color:'#000000',
    marginTop:-300,
  },
text3:{
    marginTop:6,
     fontSize:18,
     paddingHorizontal:30,
     textAlign:'center',
     color:'#000000',
     fontWeight:'bold',


    },

 });

 export default Thankyou;
