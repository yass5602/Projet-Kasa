// app.jsx gère le routage de l'appli, les composants, les liens entre les pages.
// Pour importer les routes dans l'appli :
 // - BrowserRouter ou Router est le routage principal de l'appli React.
 // - Route créer un lien entre une URl et un composant.
 // - Routes (anciennement Switch) regroupe plusieurs routes.
 
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Home from './home';
 import About from './about';
 import Header from './header';
 import Footer from './footer';
 import Error from './error'; // Importez le composant Error
 
 function App() {
   return (<Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> {/* Pour que Home soit la page d'accueil par défaut */}
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} /> {/* Route d'erreur */}
    </Routes>
    <Footer />
  </Router>
);
}
export default App;