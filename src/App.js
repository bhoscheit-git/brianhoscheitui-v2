import './App.css';
import GlobalHeader from './components/GlobalHeader';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import GlobalFooter from './components/GlobalFooter';
import Experience from './pages/Experience';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';

const App = () => (
    <AuthProvider>
        <AppProvider>
            <GlobalHeader />
            <div className="app-container">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="*"
                        element={<Navigate to="/home" />}
                    />
                </Routes>
            </div>
            <GlobalFooter />
        </AppProvider>
    </AuthProvider>
)

export default App;

