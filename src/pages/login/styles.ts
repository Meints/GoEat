import { StyleSheet } from "react-native";
import {themas} from '../../global/themes'
export const style = StyleSheet.create({
  boxTop:{
    //backgroundColor : 'red',
    width:'100%',
    alignItems: 'center',  
    justifyContent: 'center'
  },
  boxMid:{
    //backgroundColor : 'green',
    width:'100%',
    paddingHorizontal: 37
  },
  boxBotton:{
    padding:30,
    width:'100%',
    alignItems: 'center',  
    justifyContent: 'center',
  },
  logo:{
    width: 1000, height: 100 
  },
  text:{
    fontWeight:'bold',
    marginTop:40,
    fontSize:30
  },
  titleInput:{
    marginLeft:5,
    color:themas.colors.gray,
    marginTop : 20
  },
  boxInput:{
    width:'100%',
    height:40,
    borderWidth:1,
    borderRadius:40,
    marginTop:10,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:5,
    backgroundColor:themas.colors.ligthGray,
    borderColor:themas.colors.ligthGray
  },
  input:{
    height:'100%',
    width:'90%',
    borderRadius:40,
    backgroundColor:themas.colors.ligthGray,
    borderBlockColor:themas.colors.ligthGray
  },
  button:{
    marginBottom:40,
    width:280,
    height:50,
    alignItems: 'center',  
    justifyContent: 'center',
    backgroundColor:themas.colors.primary,
    borderRadius : 40,
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:3,
    },
    shadowOpacity:0.29,
    shadowRadius:4.65,
    elevation:7
  },
  textButton:{
   fontSize:16,
   color:'#FFFF',
   fontWeight:'bold'
  },
  textBottom:{
    fontSize:16,
    color:themas.colors.gray
  }
  
})