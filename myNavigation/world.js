import  React from 'react';
import Test from './test';
import Test1 from './test1';
import {TabBar,TabBarItem} from 'navigation-react-native';



const World =(props)=>{return (
    
    <TabBar bottomTabs={true} swipeable={true} selectedTintColor="deepskyblue" >
    <TabBarItem image={require('./backicon.png')} >
    <Test1></Test1>
    </TabBarItem>
    <TabBarItem title="Test1" >
    <Test/>
     </TabBarItem>
    </TabBar>
        
    
);}


export default World
