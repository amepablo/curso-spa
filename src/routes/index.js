import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// Creación rutas
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'
}

// Manejador - Muestra elementos según lógica
const router = async () => {
    const header = null || document.getElementById('header');   //Elementos al cual le vamos a hacer render
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();  // Empujar Header
    let hash = getHash();   // Obtenemos el Hash
    let route = await resolveRoutes(hash);  // Aplicamos resolve

    // Validamos route
    let render = routes[route] ? routes[route] : Error404; 
    content.innerHTML = await render(); // Hacemos render de app


};

export default router;