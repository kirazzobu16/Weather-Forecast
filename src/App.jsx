
import {ThemeProvider} from './Context/ThemeContext'
import Container from './Design/Container'
import { WeatherProvider } from "./Context/WeatherContext"


function App() {

  return (
    <div>
       <ThemeProvider>
        <WeatherProvider>
          <Container/>
        </WeatherProvider>
       </ThemeProvider>
       
    </div>
  )
}

export default App