import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import *as Screens from "../screens";
import {createDrawerNavigator} from 'react-navigation-drawer'

const ScreensApp= createStackNavigator(
{
 login: {screen:Screens.LoginScreen},
 signUp:{screen:Screens.SignUpScreen},
 collage:{screen:Screens.CollageScreen},
 department:{screen:Screens.DepartmentsScreen},
 stage :{screen:Screens.StagesScreen,},
 group:{screen:Screens.GroupScreen,},
}
)
 
const SideNav = createDrawerNavigator({
 Main :{screen:ScreensApp},
 logOut:{screen:Screens.LoginScreen},
});
 const MainNav = createAppContainer(SideNav)
export default MainNav;