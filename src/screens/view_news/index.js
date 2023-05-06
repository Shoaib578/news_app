import React  from 'react'
import {View,Text,StyleSheet,StatusBar} from 'react-native'
import { WebView } from 'react-native-webview';


export default class ViewNews extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            <StatusBar backgroundColor={'#023164'}/>

     <WebView
      style={styles.container}
     
      source={{ uri: this.props.route.params.url}}
    />
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#023164",
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,
      
      
    },
 
  });