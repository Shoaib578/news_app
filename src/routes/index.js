import React,{useState} from 'react'
import { createStackNavigator,CardStyleInterpolators   } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View,Text,TextInput,Image, Dimensions, StatusBar,Modal, Touchable, TouchableOpacity, Keyboard} from 'react-native'
import {useDispatch,useSelector} from 'react-redux';


import TopNews from '../screens/top_news';
import LatestNews from '../screens/latest_news';
import styles from './styles';
import {Filter_by_category, VisibleModal, VisibleSearch} from '../redux/actions'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Pressable } from 'react-native';
import ViewNews from '../screens/view_news';
import Splash from '../screens/splash';

import ChooseNewChannel from '../screens/choose_news_channel';
import Channel from '../screens/channel';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const {width} = Dimensions.get('window')


const categories0 = ["top_news","latest_news"] 
const categories1 = ["Entertainment","Sports"]
const categories2 = ["Business","World"]
const categories3 = ["Pakistan","Live TV","Magazine"]

export default function Routes ({routeNameRef}){
   

 

   var searchRef = React.createRef()
   const dispatch = useDispatch()

   const LogoModal = (props)=>{
    const is_visible = useSelector(state => state.visibilityReducer.visible_modal);

        console.log(is_visible)
        return <Modal  animationType='slide' transparent visible={is_visible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text onPress={()=>{
               dispatch({
                type: VisibleModal,
                payload:false
              });
            }} style={styles.title}>Close</Text>
            
          </View>


          <Text style={styles.ModalTitle}>NEWS</Text>

         <View style={{ borderColor:'white',borderWidth:1,width:'70%',alignSelf:'center',height:1,marginTop:10 }}></View>


         <View style={{alignSelf:'center',width:'70%',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
         {categories0.map(category=>{
          if(category == "top_news"){
            return <TouchableOpacity key={category} onPress={()=>{
             props.props.navigation.navigate("Top")
            }}>
              
            <Text style={{color:"white"}}>Top</Text>
          </TouchableOpacity>
          }else{
            return <TouchableOpacity key={category} onPress={()=>{
              props.props.navigation.navigate("Latest")



            }}>
              
            <Text style={{color:"white"}}>Latest</Text>
          </TouchableOpacity>
          }
             
         })}
         </View>



         <View style={{alignSelf:'center',width:'70%',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
         {categories1.map(category=>{
             return <TouchableOpacity key={category} onPress={()=>{
                dispatch({
                  type: Filter_by_category,
                  payload:{
                    "category":category,
                    "screen":routeNameRef.current
                  }
                });
            }}>
  
              <Text style={{color:"white"}}>{category}</Text>
            </TouchableOpacity>
         })}
         </View>

         <View style={{alignSelf:'center',width:'70%',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
         {categories2.map(category=>{
             return <TouchableOpacity  key={category} onPress={()=>{
              dispatch({
                type: Filter_by_category,
                payload:{
                  "category":category,
                  "screen":routeNameRef.current
                }
              });
            }}>
  
              <Text style={{color:"white"}}>{category}</Text>
            </TouchableOpacity>
         })}
         </View>

         <View style={{alignSelf:'center',width:'70%',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          
         {categories3.map(category=>{

             return <TouchableOpacity  key={category} onPress={()=>{
              if(category != "Live TV"){
                dispatch({
                  type: Filter_by_category,
                  payload:{
                    "category":category,
                    "screen":routeNameRef.current
                  }
                });
              }else{
                dispatch({
                  type: VisibleModal,
                  payload:false
                });
                props.props.navigation.navigate("choose_news_channel")
              }
            
            }}>
  
              <Text style={{color:"white"}}>{category}</Text>
            </TouchableOpacity>
         })}
         </View>



         <View style={{ borderColor:'white',borderWidth:1,width:'70%',alignSelf:'center',height:1,marginTop:10 }}></View>


        
         


         

         
        </View>
      </Modal>
   }




   const LogoScreenComponent = ()=>{
        return null
    }

  const  headerSearchBar = ()=>{
    const is_visible = useSelector(state => state.visibilityReducer.visibleSearch)
    return <>
                <StatusBar backgroundColor={'#023164'}/>

        {is_visible?<View style={{backgroundColor:'#023164',width:width,flexDirection:'row',height:'100%'}}>

                <Pressable onPress={()=>{
                    dispatch({
                      type: VisibleSearch,
                      payload:false
                    });
                    Keyboard.dismiss()
                    }} style={{marginLeft:10,marginTop:12}}>
                <Entypo name='cross' color={'white'} size={30}/>

                </Pressable>
               
             
             <TextInput placeholder="Search" style={styles.search_bar} onChangeText={(val)=>{
              
              searchRef = val
             }} onSubmitEditing={()=>{
              dispatch({
                type: Filter_by_category,
                payload:{
                  "category":searchRef,
                  "screen":routeNameRef.current
                }
              });
             }}/>
           
            
        </View>:null}
    </>

            }

    const headerRight = ()=>{
      const is_visible = useSelector(state => state.visibilityReducer.visibleSearch)

      return <>
      
      {is_visible == false?<Pressable onPress={()=>{
          dispatch({
            type: VisibleSearch,
            payload:true
          });
        }} style={{marginRight:28,marginTop:8}}>
            <FontAwesome name='search' color={'white'} size={25}/>
        </Pressable>:null}
        </>  
    }

  const  TopNewsStack = ()=>(
        <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
        <Stack.Screen
          name="top_news"
          options={{headerLeft:headerSearchBar,headerRight:headerRight,headerTitle:'TOP',headerTitleAlign:'center',headerTitleStyle:{color:'white'},headerStyle:{backgroundColor:'#023164'}}}
          component={TopNews}
          
        />

        <Stack.Screen name='view_news' component={ViewNews} options={{headerStyle:{backgroundColor:'#023164'},headerTitle:'Article',headerTintColor:'white',headerTitleAlign:'center'}}/>
      


        </Stack.Navigator>
    )

  const  LatestNewsStack = ()=>(
        <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
        <Stack.Screen
          name="latest_news"
          options={{headerLeft:headerSearchBar,headerRight:headerRight,headerTitle:'LATEST',headerTitleAlign:'center',headerTitleStyle:{color:'white'},headerStyle:{backgroundColor:'#023164'}}}

          component={LatestNews}
          
        />
      
      <Stack.Screen name='view_news' component={ViewNews} options={{headerStyle:{backgroundColor:'#023164'},headerTitle:'Article',headerTintColor:'white',headerTitleAlign:'center'}}/>
    
        </Stack.Navigator>
    )


    const Main =(props)=>{
      

      return <Tab.Navigator  screenOptions={{headerShown:false,tabBarInactiveBackgroundColor:'#023164',tabBarActiveBackgroundColor:'#023164',tabBarHideOnKeyboard:true}}>
      <Tab.Screen name="Top" options={{tabBarIcon:()=><Text style={{color:'white',fontSize:16,top:5}}>TOP</Text>,tabBarLabel:''}}  component={TopNewsStack} />
     
      <Tab.Screen name="Logo" options={{tabBarButton:()=><View style={{backgroundColor:"#023164"}}><Text onPress={()=>{
          dispatch({
            type: VisibleModal,
            payload:true
          });
      }} style={{color:'white',fontSize:25,fontFamily:'serif'}}>NEWS</Text>
      <LogoModal props={props}/>
      </View>,tabBarLabel:''}} component={LogoScreenComponent}/>

      <Tab.Screen name="Latest"  options={{tabBarIcon:()=><Text style={{color:'white',fontSize:16,top:5,}}>LATEST</Text>,tabBarLabel:''}} component={LatestNewsStack} />
    </Tab.Navigator>
    }
   
        return(
          <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>

            <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />

            <Stack.Screen name="choose_news_channel" component={ChooseNewChannel}   options={{headerStyle:{backgroundColor:'#023164'},headerTitle:'Choose News Channel',headerTintColor:'white',headerTitleAlign:'center'}}/>
            <Stack.Screen name="channel" component={Channel}   options={{headerStyle:{backgroundColor:'#023164'},headerTitle:'Channel',headerTintColor:'white',headerTitleAlign:'center'}}/>

          </Stack.Navigator>
           

        )
    }
