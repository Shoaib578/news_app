import { Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
container:{
    width:width,
    height:250,
   marginTop:2
},
news_title_container:{
   
    flex: 1,
    justifyContent: 'flex-end',
    bottom:30,
    left:20,
    position:'absolute',
    
   
  
},
news_title:{
    fontSize:16,
    width:width*2/2.2,
    color:'white',
    fontWeight:'bold',
    flexWrap:'wrap'
},
updated_at:{
    color:'white'
}
})
export default styles;