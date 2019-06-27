
import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) =>{
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
             <Text style={textStyle}>{props.headerText}</Text>
        </View>
       
    );
   
};
const styles = {
    viewStyle:{
        backgroundColor:'#a086F8',
        justifyContent : 'center',
        alignItems : 'center',
        height:60,
        paddingTop:5,
        shadowOffset:{width:0,height:6},
        elevation:2,
        position:'relative'

    },
    textStyle:{
        fontSize:30
    }
};
export  {Header};