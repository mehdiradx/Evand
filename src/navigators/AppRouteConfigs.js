import { createStackNavigator } from "react-navigation";
import UserList from "../screens/UserList";
import User from "../screens/User";

const AppRouteConfigs = createStackNavigator({
  UserList: { screen: UserList },
  User: { screen: User }
});

export default AppRouteConfigs;
