import React from 'react'
import {View,Text,Image, ImageBackground} from 'react-native'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

import moment from "moment";


export default class NewsContainer extends React.Component {
    
    render(){
        return(
            
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('view_news',{url:this.props.data.url})}>

            <ImageBackground source={this.props.data.urlToImage?{uri:this.props.data.urlToImage}:require('../../../assets/no_image_found.png')} style={styles.container}>
                
                <View style={styles.news_title_container}>
                <Text style={styles.news_title}>{this.props.data.title}</Text>
                <Text style={styles.updated_at}>Update: { moment(this.props.data.publishedAt).fromNow().toString()}</Text>
                </View>
               
            </ImageBackground>

            </TouchableOpacity>

           
        )
    }
}