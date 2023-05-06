import React, { useEffect, useState } from 'react'
import {View,Text,ActivityIndicator, Alert, RefreshControl,FlatList,TouchableOpacity} from 'react-native'
import NewsContainer from '../../components/NewsContainer'
import {useDispatch, useSelector} from 'react-redux';


const {fetch_top_news} = require('../../call_apis.js')


export default function TopNews(props) {
   const [data,setData] = useState([{
    "title":"``"
   }])

   const [FetchError,setFetchErorr] = useState("")
    const [isLoading,setIsLoading] = useState(true)
   
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
        setIsLoading(false)
        get_news()
     
    }

    const TryAgain = ()=>{
        setIsLoading(true)
        get_news()
    }
   
    useEffect(()=>{
     
        get_news()
    },[])
    

    useEffect(()=>{
        if(category!= ""&&category.screen == "top_news"){
            setIsLoading(true)
            if(category.category != "top_news"){
                console.log(category)
            get_news(category.category)
        }else{
            get_news()
        }

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