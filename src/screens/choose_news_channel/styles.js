import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:20
    },
    channel:{
        width:80,
        height:80,
        marginTop:20,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'white',
      
         borderRadius: 50,
        overflow: 'hidden',
        marginLeft:20,
        marginRight: 'auto',
        alignItems: 'center',
    },
    channelImage:{
        width:80,
        height:80,
        
       
       
       
        alignSelf:'center',
      
    }
})

export default styles