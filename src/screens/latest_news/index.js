import React, { useEffect, useState } from 'react'
import {View,Text,ActivityIndicator, Alert, RefreshControl,TouchableOpacity} from 'react-native'
import NewsContainer from '../../components/NewsContainer'
import { FlatList } from 'react-native-gesture-handler'
import {useDispatch, useSelector} from 'react-redux';
import { fetch_headlines,fetch_top_news } from '../../call_apis';

export default function LatestNews(props) {
   
        const [data,setData] = useState([])
        const [isLoading,setIsLoading] = useState(true)
        const [FetchError,setFetchErorr] = useState("")
      
       
        var category = useSelector(state => state.modalData.category);
     
        const get_news = async(category="pakistan")=>{
            let fetchData =await fetch_top_news(category)
        
            if(fetchData.status == 'succes'){
             
                setFetchErorr("")
                setData(fetchData.data.articles)
                setIsLoading(false)
               
            }else{
                console.log(fetchData.error)
                setFetchErorr(fetchData.error)
                setIsLoading(false)
    
    
            }
        }


        
        
        
            const handleOnRefresh = ()=>{
                setIsLoading(true)
                get_headline_news('us')

             
            }

        const get_headline_news = async(country="us")=>{
             let fetchData =await fetch_headlines(country)
           
            
             if(fetchData.status == 'succes'){
              
                 
                
                      
                setFetchErorr("")
                
                setData(fetchData.data.articles)
     
                 
                 setIsLoading(false)
                
             }else{
                 console.log(fetchData.error)
                 setFetchErorr(fetchData.error)

                 setIsLoading(false)
     
     
             }
         }
         
         const TryAgain = ()=>{
            setIsLoading(true)
            get_headline_news('us')

        }
        
         useEffect(()=>{
            get_headline_news('us')
         },[])
         
     
         useEffect(()=>{
             if(category != "" && category.screen == "latest_news"){
               
                if(category.category != "")
                 get_news(category.category)
                 
             }else{
                get_headline_news('us')
             }
         },[category])
         
         if(isLoading == false){
            if(FetchError){
                return <View style={{alignSelf:'center',marginTop:25}}>

                <Text style={{color:"black",fontSize:17}}>{FetchError}</Text>
                <TouchableOpacity onPress={TryAgain} style={{marginTop:10}}>
                    <Text style={{color:"#023164",fontSize:17,textAlign:'center'}}>Try Again</Text>
                </TouchableOpacity>
                </View>
            }else{
            return(
            
                <FlatList 
                data={data}
                
                
               refreshControl={
                <RefreshControl 
                
                onRefresh={handleOnRefresh}
                refreshing={isLoading}
                title="Pull to refresh"
                progressBackgroundColor={'#023164'}
                colors={["white", "#023164", "#023164"]}
                />
               }
                keyExtractor = {(item) => item.title}
                renderItem={({item})=><NewsContainer  navigation={props.navigation}  data={item}/>}
                />
            
         )
        }
        }else{
            return <ActivityIndicator size={'large'} color={'#023164'} style={{marginTop:20}}/>
        }
        
    }
