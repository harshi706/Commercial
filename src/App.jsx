import './App.css'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Demo from './components/Demo'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Last from './Last'
import Multicard from './Multicard'
import { FormProvider } from './components/FormContext'

function App() {

  return (
    <>
    <FormProvider>
    <Router>
    <Routes>
    <Route path="/" element={<First />} />
    <Route path="/shipping" element={<Second />} />
    <Route path="/billing" element={<Demo />} />
    <Route path="/payment" element={<Third />} />
    <Route path="/last" element={<Last />} />
    <Route path="/multi" element={<Multicard />} />

    </Routes>
    {/* <Navbar/> */}
    </Router>
    </FormProvider>
    </>
  )
}

export default App
