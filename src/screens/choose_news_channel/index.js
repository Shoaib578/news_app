import React from 'react'
import {View,Text,Image,StyleSheet, Pressable} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const news_channels = [
    {
        "name":"aljazeera",
        "image":require("../../../assets/aljazeera_logo.gif"),
        "link":"https://www.youtube.com/embed/gCNeDWCI0vo"
    },
    {
        "name":"geo_news",
        "image":require("../../../assets/geo_news.gif"),
        
        "link":"https://www.youtube.com/embed/ZHnGDcSrBxc"
    },{
        "name":"ptv_sports",
        "width":80,
        "height":45,
        "image":require("../../../assets/ptv_sports.gif"),
        "link":"https://www.youtube.com/embed/e6R1jhSuoKg"
    },{
        "name":"ary_news",
        "image":require("../../../assets/ary_news_logo.gif"),
        "link":"https://www.youtube.com/embed/sUKwTVAc0Vo"
    },
   {
        "name":"samaa_new",
        "image":require("../../../assets/samaa_news_logo.gif"),
        "link":"https://www.youtube.com/embed/q0TTqU1K7-s"
    },{
        "name":"khyber_news",
        "width":45,
        "height":45,
        "image":require("../../../assets/khyber_news.png"),
        "link":"https://www.mjunoon.tv/embedplayer/khyber-news-live.html"
    }
    ,{
        "name":"92_news",
        "image":require("../../../assets/92_news.png"),
        "link":"https://www.youtube.com/embed/Yz6fgxw5ZEU"
    },

    ,{
        "name":"mashriq_tv",
        "image":require("../../../assets/mashriq_tv.jpg"),
        "link":"https://www.youtube.com/embed/8e5cjgKRu7s"
    }
    
]
export default class ChooseNewChannel extends React.PureComponent{

    render(){
        return(
            <View style={styles.container}>
                

                {news_channels.map(data=>{
                    return  <TouchableOpacity key={data.name} onPress={()=>this.props.navigation.navigate('channel',{url:data.link})} style={styles.channel}>
                    <Image style={[styles.channelImage,data.width && data.height?{width:data.width,height:data.height,marginTop:20}:{}]} source={data.image}/>
    
                    </TouchableOpacity>
                })}
               

               
              


            </View>
        )
    }
}






