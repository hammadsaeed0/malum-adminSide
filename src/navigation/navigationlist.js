import SplashScreen from '../screen/MainScreen/Splash';
import HomeScreen from '../screen/MainScreen/Home';
import Login from '../screen/MainScreen/Login/login';
import AddCustomer from '../screen/MainScreen/Add Customer';
import EditCustomer from '../screen/MainScreen/Edit Customer';
import AddProduct from '../screen/MainScreen/Add Product';
import EditProduct from '../screen/MainScreen/Edit Product';
import AddRegion from '../screen/MainScreen/Add Region';
import EditRegion from '../screen/MainScreen/Edit Region';
import ViewBill from '../screen/MainScreen/View Bill';
import AddDirectPayment from '../screen/MainScreen/Add DirectPayment';
import AddCustomerPayment from '../screen/MainScreen/Add Customer Payment';
import AddMajorDiscount from '../screen/MainScreen/Add Major Discount';





export const stackNavigationList = [
  {name: 'splash', component: SplashScreen},
  {name: 'login', component: Login},
  {name: 'home', component: HomeScreen},
  {name: 'AddCustomer', component: AddCustomer},
  {name: 'EditCustomer', component: EditCustomer},
  {name: 'AddProduct', component: AddProduct},
  {name: 'EditProduct', component: EditProduct},
  {name: 'AddRegion', component: AddRegion},
  {name: 'EditRegion', component: EditRegion},
  {name: 'ViewBill', component: ViewBill},
  {name: 'AddDirectPayment', component: AddDirectPayment},
  {name: 'AddCustomerPayment', component: AddCustomerPayment},
  {name: 'AddMajorDiscount', component: AddMajorDiscount},

];
