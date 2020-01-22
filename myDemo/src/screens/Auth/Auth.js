import  React, {Component} from 'react';
import {View} from 'react-native'
import { StackNavigator } from "react-navigation";

const App = StackNavigator({
    Main: { screen: Main }
});

class Auth extends Component {render(){

    return(
         <View>
         <Button title="Log In"
                onPress={() => {
                props.navigation.navigate("Main");
                }}
            />
         </View>

    )
}}
export default Auth