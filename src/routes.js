/************
COMPONENTS
**************/
import Home from './components/pages/Home';
import _404 from './components/pages/_404.vue';
import Certification from './components/pages/Certification.vue'
import Formations from './components/pages/Formations.vue'
import Faq from './components/pages/Faq.vue'
import Ecoles from './components/pages/Ecoles.vue'
import Entreprises from './components/pages/Entreprises.vue'
import Checklist from './components/pages/Checklist/Checklist.vue'
import Glossaire from './components/pages/Glossaire.vue'
import Emplois from './components/pages/Emplois.vue'
import Blog from './components/pages/Blog.vue'
import About from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue'
import Partenaires from './components/pages/Partenaires.vue'
import MentionsLegales from './components/pages/MentionsLegales.vue'
import Presse from './components/pages/Presse.vue'

const routes = [
  { 
    path: '/', 
    component: Home,
  },

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

  // footer links
  { path: '/a-propos', component: About },
  { path: '/contact', component: Contact },
  { path: '/partenaires', component: Partenaires },
  { path: '/mentions-legales', component: MentionsLegales },
  { path: '/presse', component: Presse },


  { path: '*', component: _404 },
]

export default routes;
