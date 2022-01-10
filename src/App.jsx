import {Navbar} from "./components/navegacion/index";
import ItemListContainer from "./components/container/index";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/home"
import ItemDetailContainer from "./components/itemDetailContainer";


const App = () => (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      
    <Route path ="/" element = {<Home/>}></Route>
    <Route path ="/productos" element = {<ItemListContainer/>}></Route>
    <Route path = "/categoria/:id" element = {<ItemListContainer/>}></Route>
    <Route path = "/item/:id" element = {<ItemDetailContainer/>}></Route>


    
    </Routes>
  </BrowserRouter> 
);
export default App;
