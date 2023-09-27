import { ThemeProvider } from "@mui/material";
import { Navbar } from "./Components/Layout/NavBar/NavBar";
import { Home } from "./Components/Pages/Home/Home";
import ItemListContainer from "./Components/Pages/ItemListContainer/ItemListContainer";
import {Login} from "./Components/Pages/Login/Login"
import MaterialUI from "./Components/Pages/MaterialUI/MaterialUI";
import { customTheme } from "./themeConfig";
import { ThemeContext } from "@emotion/react";

function App() {
  let saludo = "Hola Agustín, como te va?"
  return (
    <ThemeProvider theme = {customTheme}>
    <div>
      <Navbar/>
      <Home/>
      <Login/>
      <ItemListContainer saludo={saludo} edad={25}/>
      <MaterialUI/>
    </div>
    </ThemeProvider>
  );
}
export default App;
