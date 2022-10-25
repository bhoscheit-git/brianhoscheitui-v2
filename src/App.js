import './App.css';
import GlobalHeader from './components/GlobalHeader';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import GlobalFooter from './components/GlobalFooter';

const App = () => (
    <>
        <GlobalHeader />
        <div className="app-container">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route
                    path="*"
                    element={<Navigate to="/home" />}
                />
            </Routes>
        </div>
        <GlobalFooter />
    </>
)

export default App;

