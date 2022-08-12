import HomePage from '@/views/HomePage'
import AboutMe from '@/views/AboutMe'
import ContactMe from '@/views/ContactMe'
import MyWork from '@/views/MyWork'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: AboutMe,
  },
  {
    path: '/contact',
    name: 'ContactMe',
    component: ContactMe,
  },
  {
    path: '/my-work',
    name: 'MyWork',
    component: MyWork,
  },
]

export default routes