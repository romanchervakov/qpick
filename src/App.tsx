import { Routes, Route } from "react-router-dom"
import { Store } from "./pages/Store"
import { Bag } from "./pages/Bag"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { BagProvider } from "./context/BagContext"

function App() {
  return <BagProvider>
            <main>
              <Header/>
              <Routes>
                <Route path="/store" element={<Store/>}/>
                <Route path="/bag" element={<Bag/>}/>
              </Routes>
              <Footer/>
            </main>
         </BagProvider>
}

export default App
