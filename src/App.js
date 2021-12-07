import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./page/home";
import Register1 from "./page/register1"; //Login no se cambia nombre por algo en el sis
import Register from "./page/register";
import News from "./page/news";
import Contacts from "./page/contacts"
import Tolls from "./page/tolls";
import Users from "./page/users";
import UsersManagement from "./page/users_management";
import PurchaseCard from "./page/card_purchase"
import CardSale from "./page/card_sale"
import CardRecharge from "./page/card_recharge";
import Footer from "./components/footer";
import TicketRegistration from "./page/ticket_registration";
import Consortium from "./page/consortium"

function App() {
  return ( 
  <>
    <Header />     
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/register1" element={<Register1 />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/news" element={<News />} />  
            <Route path="/contact" element={<Contacts />} />     
            <Route path="/tolls" element={<Tolls />} />             
            <Route path="/users" element={<Users />} />
            <Route path="/usersManagement" element={<UsersManagement />} />
            <Route path="/purchaseCard" element={<PurchaseCard />} />
            <Route path="/cardSale" element={<CardSale />} />  
            <Route path="/cardRecharge" element={<CardRecharge />} /> 
            <Route path="/ticketRegistration" element={<TicketRegistration />} /> 
            <Route path="/consortium" element={<Consortium />} /> 

          </Routes>
    <Footer />

  </>

  
  );
}

export default App;
