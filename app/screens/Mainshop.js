/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import { View, Text, Image, SafeAreaView,TextInput ,StyleSheet,ScrollView, Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class shop extends Component {
    render(){
        return (
            <View style={{flex:1,backgroundColor:'#fff',}}>
                <View style={{flexDirection:'row',flex:200,backgroundColor:'#fdc92e',marginTop:-30,padding:10,}}>
                 <TouchableOpacity>
                       <Icon name="arrow-left" size={25} style={style.footericon} />
                </TouchableOpacity>
                <View style={style.search}>
                    <View style={style.searchwrapper}>
                        <Icon name="search" size={20} style={style.searchicon}/>
                        <TextInput placeholder="Search for anything" style={style.searchinput}/>
                    </View>
                </View>
                <Image source={require("../assest/image/onboard1.png")} style={{marginTop:10,width:100,height:100,marginLeft:5}}/>


                </View>
                <View style={{flexDirection:'row',flex:40,backgroundColor:'gray',opacity:10}}>
                    <Text style={{fontSize:15,textAlign:'center',color:'black',marginLeft:20}}>100 Items </Text>
                </View>
                <View style={{flex:1000,flexDirection:"row",justifyContent:"center",alignItems:"center",}}  >
                  <ScrollView style={{flex:1000,}}  >
                    
                      <View style={{flexDirection:"row",flex:500,paddingBottom:40,marginTop:20}}>
                        <Image source={require('../assest/image/fruit.png')} style={{width:150,height:90,justifyContent:'center',alignItems:'center',marginTop:-15}}/>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Big Onions{'\n'}RS .230.0/1KG</Text>
                        <TouchableOpacity style={{  justifyContent:"center",
                                                    alignItems:"center",
                                                    position:"absolute",
                                                    borderRadius:20,
                                                    padding:10,
                                                    width:80,
                                                    height:40,
                                                    backgroundColor:"#ffb74d",
                                                    zIndex:30,
                                                    marginTop:5,
                                                    marginLeft:270}}>
                        <Text style={style.buttontext}>{' ADD '}</Text>
        
                        </TouchableOpacity>                       
                      </View>
                      <View style={{flexDirection:"row",flex:500,paddingBottom:40}}>
                        <Image source={require('../assest/image/fruit.png')} style={{width:150,height:90,justifyContent:'center',alignItems:'center',marginTop:-15}}/>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Big Onions{'\n'}RS .230.0/1KG</Text>
                        <TouchableOpacity style={{  justifyContent:"center",
                                                    alignItems:"center",
                                                    position:"absolute",
                                                    borderRadius:20,
                                                    padding:10,
                                                    width:80,
                                                    height:40,
                                                    backgroundColor:"#ffb74d",
                                                    zIndex:30,
                                                    marginTop:5,
                                                    marginLeft:270}}>
                        <Text style={style.buttontext}>{' ADD '}</Text>
        
                        </TouchableOpacity>                       
                      </View>
                      <View style={{flexDirection:"row",flex:500,paddingBottom:40}}>
                        <Image source={require('../assest/image/fruit.png')} style={{width:150,height:90,justifyContent:'center',alignItems:'center',marginTop:-15}}/>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Big Onions{'\n'}RS .230.0/1KG</Text>
                        <TouchableOpacity style={{  justifyContent:"center",
                                                    alignItems:"center",
                                                    position:"absolute",
                                                    borderRadius:20,
                                                    padding:10,
                                                    width:80,
                                                    height:40,
                                                    backgroundColor:"#ffb74d",
                                                    zIndex:30,
                                                    marginTop:5,
                                                    marginLeft:270}}>
                        <Text style={style.buttontext}>{' ADD '}</Text>
        
                        </TouchableOpacity>                       
                      </View>
                      <View style={{flexDirection:"row",flex:500,paddingBottom:40}}>
                        <Image source={require('../assest/image/fruit.png')} style={{width:150,height:90,justifyContent:'center',alignItems:'center',marginTop:-15}}/>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Big Onions{'\n'}RS .230.0/1KG</Text>
                        <TouchableOpacity style={{  justifyContent:"center",
                                                    alignItems:"center",
                                                    position:"absolute",
                                                    borderRadius:20,
                                                    padding:10,
                                                    width:80,
                                                    height:40,
                                                    backgroundColor:"#ffb74d",
                                                    zIndex:30,
                                                    marginTop:5,
                                                    marginLeft:270}}>
                        <Text style={style.buttontext}>{' ADD '}</Text>
        
                        </TouchableOpacity>                       
                      </View>

                      <View style={{flexDirection:"row",flex:500,paddingBottom:40}}>
                        <Image source={require('../assest/image/fruit.png')} style={{width:150,height:90,justifyContent:'center',alignItems:'center',marginTop:-15}}/>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Big Onions{'\n'}RS .230.0/1KG</Text>
                        <TouchableOpacity style={{  justifyContent:"center",
                                                    alignItems:"center",
                                                    position:"absolute",
                                                    borderRadius:20,
                                                    padding:10,
                                                    width:80,
                                                    height:40,
                                                    backgroundColor:"#ffb74d",
                                                    zIndex:30,
                                                    marginTop:5,
                                                    marginLeft:270}}>
                        <Text style={style.buttontext}>{' ADD '}</Text>
        
                        </TouchableOpacity>                       
                      </View>


                    
                      <View style={{flexDirection:"row",flex:500,paddingBottom:40}}>
                        <Image source={require('../assest/image/fruit.png')} style={{width:150,height:90,justifyContent:'center',alignItems:'center',marginTop:-15}}/>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Big Onions{'\n'}RS .230.0/1KG</Text>
                        <TouchableOpacity style={{  justifyContent:"center",
                                                    alignItems:"center",
                                                    position:"absolute",
                                                    borderRadius:20,
                                                    padding:10,
                                                    width:80,
                                                    height:40,
                                                    backgroundColor:"#ffb74d",
                                                    zIndex:30,
                                                    marginTop:5,
                                                    marginLeft:270}}>
                        <Text style={style.buttontext}>{' ADD '}</Text>
                        
        
                        </TouchableOpacity>                       
                      </View>
                      <View style={{flexDirection:"row",flex:500,paddingBottom:40}}>
                        <Image source={require('../assest/image/fruit.png')} style={{width:150,height:90,justifyContent:'center',alignItems:'center',marginTop:-15}}/>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Big Onions{'\n'}RS .230.0/1KG</Text>
                        <TouchableOpacity style={{  justifyContent:"center",
                                                    alignItems:"center",
                                                    position:"absolute",
                                                    borderRadius:20,
                                                    padding:10,
                                                    width:80,
                                                    height:40,
                                                    backgroundColor:"#ffb74d",
                                                    zIndex:30,
                                                    marginTop:5,
                                                    marginLeft:270}}>
                        <Text style={style.buttontext}>{' ADD '}</Text>
        
                        </TouchableOpacity>                       
                      </View>
                      <View style={{flexDirection:"row",flex:500,paddingBottom:40,marginBottom:10}}>
                        <Image source={require('../assest/image/fruit.png')} style={{width:150,height:90,justifyContent:'center',alignItems:'center',marginTop:-15}}/>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Big Onions{'\n'}RS .230.0/1KG</Text>
                        <TouchableOpacity style={{  justifyContent:"center",
                                                    alignItems:"center",
                                                    position:"absolute",
                                                    borderRadius:20,
                                                    padding:10,
                                                    width:80,
                                                    height:40,
                                                    backgroundColor:"#ffb74d",
                                                    zIndex:30,
                                                    marginTop:5,
                                                    marginLeft:270}}>
                        <Text style={style.buttontext}>{' ADD '}</Text>
        
                        </TouchableOpacity>                       
                      </View>
                      
                      
                        
                
                    </ScrollView>
                </View>
                    
               
               


            </View>
        );
    }
}

export default shop;

const style = StyleSheet.create({
    footericon:{

        
        marginTop:55,
        marginRight:5

    },
    search:{
       
        backgroundColor:'#ffffff',
        borderRadius:20,
        width:200,
        height:40,
        marginTop:50,  
        shadowColor:'#000000',
        shadowOffset:{
            height:5,
            width:0,
        },
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:10,
    },
    searchwrapper:{
        flexDirection:'row',
  
    },
    searchicon:{
        color:'#000000',
        marginLeft:10,
        justifyContent:'center',
        marginTop:5,
        width:20,
        height:20
  
  
  
    },
    buttontext:{
        color:"#fff",
        opacity:10,
        fontWeight:"bold"
    
      },
    searchinput:{
        color:'#b4b4b4',
        fontFamily:'Montserrat-Medium',
        marginTop:-10,
        marginLeft:10,
  
    },

});



