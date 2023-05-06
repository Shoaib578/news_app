import React from 'react'
import { StyleSheet,View,Platform } from 'react-native';
import WebView from 'react-native-webview';


export default class Channel extends React.Component {
    
    render(){
        return (
           
               <WebView
                    style={ styles.container }
                    sharedCookiesEnabled={true}
                allowUniversalAccessFromFileURLs={true}
                allowFileAccessFromFileURLs={true}
                allowFileAccess={true}
                startInLoadingState={true}
                pullToRefreshEnabled={true}
                allowsBackForwardNavigationGestures={true}
                mediaPlaybackRequiresUserAction={false}
                allowsInlineMediaPlayback={true}
                allowsFullscreenVideo={false}
                    source={{uri:this.props.route.params.url}}
            />
           
        )
    }
}


var styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  backgroundVideo: {
  width:'100%',
  height:'100%'
  },
});