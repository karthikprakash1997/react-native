/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import  React,{Component} from 'react';
import {
  TouchableHighlight,
  Text
} from 'react-native';

import {StateNavigator} from 'navigation';
import {NavigationHandler} from 'navigation-react';
import {NavigationStack} from 'navigation-react-native';
import World from './world';
import Test from './test'
import Test1 from './test1';



var stateNavigator = new StateNavigator([
  {key: 'hello'},
  {key: 'world', trackCrumbTrail: true},
  {key:'test',trackCrumbTrail: true},
  {key:'test1',trackCrumbTrail: true}
]);

const {hello, world,test,test1} = stateNavigator.states;

hello.renderScene = () => (
  <TouchableHighlight
    onPress={() => {
      stateNavigator.navigate('world', {size: 20});
    }}>
    <Text>Hello</Text>
    
  </TouchableHighlight>
);

world.renderScene = (props) => (
  <World clickedHandler={props.navigationHandler}>
  </World>
);
test.renderScene = () => (
   <Test></Test>);

test1.renderScene = () => (
    <Test1></Test1>);  


stateNavigator.navigate('hello');


class App extends Component {
  render(){
  return(
   <NavigationHandler stateNavigator = {stateNavigator}>
    <NavigationStack />
   </NavigationHandler>
  )
}}
export default App
/*const App =()=>{
 {
   return(
     <View>
       <Text>hello</Text>
     </View>
   )
 }
}
export default App*/


