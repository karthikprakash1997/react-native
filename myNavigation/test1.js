
import {View,Text} from 'react-native';
import  React, {Component} from 'react';
import { NavigationBar, RightBar, BarButton, SearchBar} from 'navigation-react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {DrawerNavigation} from 'react-navigation'

class Test extends Component {render(){
    return (
        <>
                <NavigationBar largeTitle={false} icon={Icon.getImageSource('ios-trash')} >
                    <SearchBar
                        autoCapitalize="none"
                        obscureBackground={false}
                    >
                    </SearchBar>
                    <RightBar>
                        <BarButton title="Search" search={true} />
                    </RightBar>
                </NavigationBar>
                <View>
                    <Text>text</Text>
                </View>
            </>
    )
}}
export default Test
