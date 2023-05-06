import { Dimensions, StyleSheet } from "react-native";


const {width}  = Dimensions.get('window')
const styles = StyleSheet.create({
    search_bar:{
        width:width*2/2.5,
        padding:10,
        borderRadius:20,
        backgroundColor:'white',
        color:'#023164',
        
        borderColor:'#023164',
        borderWidth:1,
        marginLeft:10,
        marginTop:5,
        marginBottom:5
    },
    modalContent: {
        height: '60%',
        width: '100%',
        backgroundColor: '#023164',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
      },
      titleContainer: {
        height: '8%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      title: {
        color: '#fff',
        fontSize: 16,
      },
      pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
      },

      ModalTitle:{
        color:"white",
        fontSize:25,
        fontFamily:'serif',
        textAlign:'center',
        marginTop:20
      }
})

export default styles;