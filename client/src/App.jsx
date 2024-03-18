import { Routes, Route } from 'react-router-dom'
import InventoryApp from './components/InventoryApp';
import API from './components/API';

const App = () => {
    return (
        <>
            <Routes>
                <Route index element={<API />} />
                <Route path="/inventory-app" element={<InventoryApp />} />
            </Routes>
        </>
    )
}

export default App;