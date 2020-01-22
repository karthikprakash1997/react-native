import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import Findplace from './src/screens/Findplace/Findplace';
import Shareplace from './src/screens/Shareplace/Shareplace';
//import screenWithtabs from './src/screens/screenWithtabs/screenWithtabs'
//register a app
Navigation.registerComponent("awesome-places.Authscreen",()=>AuthScreen)
Navigation.registerComponent("awesome-places.Shareplace",()=>Shareplace)
Navigation.registerComponent("awesome-places.Findplace",()=>Findplace)
//Navigation.registerComponent("awesome-places.screenWithtabs",()=>screenWithtabs)

//start a app


Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: '"awesome-places.Authscreen"',
          }
        }],
        options: {
          topBar: {
            title: {
              text: 'Welcome screen'
            }
          }
        }
      }
    }
  });