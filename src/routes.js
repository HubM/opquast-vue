import Home from './components/layouts/Home';
import _404 from './components/layouts/_404.vue';

// to do
import Certification from './components/layouts/Certification.vue'
import Formations from './components/layouts/Formations.vue'
import Faq from './components/layouts/Faq.vue'

// to do
import Ecoles from './components/layouts/Ecoles.vue'
import Entreprises from './components/layouts/Entreprises.vue'

// to do
import Checklist from './components/layouts/Checklist.vue'
import Glossaire from './components/layouts/Glossaire.vue'

// to do
import Emplois from './components/layouts/Emplois.vue'
import Blog from './components/layouts/Blog.vue'

const routes = [
  { path: '/', component: Home },

  // Certifications pages
  { path: '/certification', component: Certification },
  { path: '/formations', component: Formations },
  { path: '/faq', component: Faq },

  // Partenariat pages
  { path: '/ecoles', component: Ecoles },
  { path: '/entreprises', component: Entreprises },
 
  // bonnes pratiques pages
  { path: '/checklist', component: Checklist },
  { path: '/glossaire', component: Glossaire },
  
  // main links pages
  { path: '/emplois', component: Emplois },
  { path: '/blog', component: Blog },  


  { path: '*', component: _404 },
]

export default routes;
