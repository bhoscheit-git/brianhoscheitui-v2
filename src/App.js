import './App.css';
import GlobalHeader from './components/GlobalHeader';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import GlobalFooter from './components/GlobalFooter';
import Experience from './pages/Experience';
import { AppProvider } from './context/AppContext';

const App = () => (
    <AppProvider>
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
    </AppProvider>
)

export default App;

