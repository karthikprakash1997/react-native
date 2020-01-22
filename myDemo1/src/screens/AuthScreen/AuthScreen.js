import  React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import startTab from '../screenWithtabs/screenWithtabs';
//import {Navigation} from 'react-native-navigation'

class AuthScreen extends Component {
    
   
render(){
    return(
        <View>
            <Text>AuthScreen</Text>
            <Button title="move to next screen"></Button>
        </View>
    )
}}
export default AuthScreen