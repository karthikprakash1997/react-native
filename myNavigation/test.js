import  React from 'react';
import {View,Text} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
const Test =()=>{return (
    <>
        <SearchBar
            containerStyle={{backgroundColor:'white',height:'10%'}}
            inputContainerStyle={{backgroundColor:'white',height:'10%'}}
            placeholder='type here'>
        </SearchBar>
        <View>
            <Text>test</Text>
            <Icon size={30} name="ios-trash" color="red"/>
        </View>
    </>
);}
export default Test