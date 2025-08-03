import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
       
        <div className="min-h-screen">
          <Header />
          <main className="layout-container pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}