import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import RidersOnline from "./pages/RidersOnline";
import RidersOnmove from "./pages/RidersOnmove";
import RidersOrderdetail from "./pages/RidersOrderdetail";
import RegisterRiders from "./pages/RegisterRiders";
import RiderProfile from "./pages/RiderProfile";
import NewApplications from "./pages/NewApplications";
import RiderAppdetails from "./pages/RiderAppdetails";
import RidersWallet from "./pages/RidersWallet";
import RiderwaletDetail from "./pages/RiderwaletDetail";
import RidertransactionDetail from "./pages/RidertransactionDetail";
import TransactionRequest from "./pages/TransactionRequest";
import TransactionRequestdetail from "./pages/TransactionRequestdetail";
import OrderHistory from "./pages/OrderHistory";
import OrderDetails from "./pages/OrderDetails";
import FaqsList from "./pages/FaqsList";
import NewFaq from "./pages/NewFaq";
import Notification from "./pages/Notification";
import NewNotifications from "./pages/NewNotifications";
import Support from "./pages/Support";
function App() {
  return (
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route  element={ <Home /> } path="/"/>
      <Route  element={ <RidersOnline /> } path="/rider"/>
      <Route  element={ <RidersOnmove /> } path="/move"/>
      <Route  element={ <RidersOrderdetail /> } path="/order"/>
      <Route  element={ <RegisterRiders /> } path="/register"/>
      <Route  element={ <RiderProfile /> } path="/profile"/>
      <Route  element={ <NewApplications /> } path="/applications"/>
      <Route  element={ <RiderAppdetails /> } path="/app-detail"/>
      <Route  element={ <RidersWallet /> } path="/wallet"/>
      <Route  element={ <RiderwaletDetail /> } path="/wallet-detail"/>
      <Route  element={ <RidertransactionDetail /> } path="/transaction-detail"/>
      <Route  element={ <TransactionRequest /> } path="/transaction-request"/>
      <Route  element={ <TransactionRequestdetail /> } path="/request-detail"/>
      <Route  element={ <OrderHistory /> } path="/order-history"/>
      <Route  element={ <OrderDetails /> } path="/order-detail"/>
      <Route  element={ <FaqsList /> } path="/faq-list"/>
      <Route  element={ <NewFaq /> } path="/newfaq"/>
      <Route  element={ <Notification /> } path="/notification"/>
      <Route  element={ <NewNotifications /> } path="/newnotification"/>
      <Route  element={ <Support /> } path="/support"/>
     </Routes>
     
     </BrowserRouter>
  );
}

export default App;
