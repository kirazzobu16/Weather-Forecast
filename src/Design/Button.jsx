import { UseTheme } from "../Context/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import SetButton from 'react-bootstrap/Button';
import "../App.css"

function Button() {
    const {theme,setTheme}=UseTheme()
     
  return (
    <div>       
        <SetButton variant={theme==="light"?"primary":"info"} className="position" onClick={()=>setTheme(theme==="light"?"dark" :"light")}>Change Theme</SetButton>        
    </div>
  )
}

export default Button