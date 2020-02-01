import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import MyWork from '../views/MyWork';

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
        path: '/my-work',
        name: 'MyWork',
        component: MyWork
    },
]

export default routes;