import './App.css';
import GlobalHeader from './components/GlobalHeader';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import GlobalFooter from './components/GlobalFooter';
import Experience from './pages/Experience';

const App = () => (
    <>
        <GlobalHeader />
        <div className="app-container">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
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

