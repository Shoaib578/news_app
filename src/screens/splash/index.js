import React from 'react'
import {View,Text, StyleSheet,StatusBar} from 'react-native'

export default class Splash extends React.Component {
    constructor(props){
        super(props)

        setTimeout(()=>{
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Main' }]
            });
        },1000)
    }
    render(){
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#023164'}/>
                <Text style={{color:'white',fontSize:35,fontFamily:'serif'}}>NEWS</Text>
         <View style={{ borderColor:'white',borderWidth:1,width:'50%',alignSelf:'center',height:1,marginTop:10 }}></View>
         <View style={{ borderColor:'white',borderWidth:1,width:'30%',alignSelf:'center',height:1,marginTop:10 }}></View>

            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#023164",
        justifyContent:'center',
        alignItems:'center',
        
    }
})