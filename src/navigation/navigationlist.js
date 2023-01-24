import SplashScreen from '../screen/MainScreen/Splash';
import HomeScreen from '../screen/MainScreen/Home';
import Login from '../screen/MainScreen/Login/login';

export const stackNavigationList = [
  {name: 'splash', component: SplashScreen},
  {name: 'login', component: Login},
  {name: 'home', component: HomeScreen},
];
