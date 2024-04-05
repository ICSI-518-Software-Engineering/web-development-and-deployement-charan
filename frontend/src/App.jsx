import { Routes, Route } from 'react-router-dom'
import Calculator from './components/Calculator'
import Profile from "./components/Profile";
import Navbar from './components/Navbar';
import InventoryApp from './components/InventoryApp'
import API from './components/API'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Profile />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/inventory-app" element={<InventoryApp />} />
                <Route path="/data-fetching" element={<API />} />
            </Routes>
        </>
    )
}

export default App;