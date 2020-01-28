import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import References from '../views/References';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/references',
        name: 'References',
        component: References
    },
]

export default routes;