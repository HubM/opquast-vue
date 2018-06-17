export default {
  mainItems: {
    0: {
      name: "Certifications",
      color: "#40aa27",
      class: "certifs",
      subLinks: {
        0: {
          name: "Certification Opquast",
          description: "La certification des professionnels du web",
          icon: "src/assets/menu/certification-certif.svg",
          link: "/certification",
        },
        1: {
          name: "Formations",
          description: "Les différentes formations",
          icon: "src/assets/menu/certification-formations.svg",
          link: "/formations",
        },        
        2: {
          name: "Faq",
          description: "Les réponses à vos questions !",
          icon: "src/assets/menu/certification-faq.svg",
          link: "/faq",
        },

      }
    },
    1: {
      name: "Partenariat",
      color: "#00a2ba",
      class: "partenariat",
      subLinks: {
        0: {
          name: "Écoles",
          description: "La certification des professionnels du web",
          icon: "src/assets/menu/formation-ecole.svg",
          link: "/ecoles",
        },
        1: {
          name: "Entreprises",
          description: "Les réponses à vos questions !",
          icon: "src/assets/menu/formation-entreprise.svg",
          link: "/entreprises",
        },
      }    
    },
    2: {
      name: "Bonnes pratiques",
      class:"practices",
      color: "#fc4b62",
      subLinks: {
        0: {
          name: "Checklist",
          description: "Les bonnes pratiques à valider",
          icon: "src/assets/menu/bonnes-pratiques-check.svg",
          link: "/checklist",
        }, 
        1: {
          name: "Glossaire",
          description: "Tout le vocabulaire pour être pro",
          icon: "src/assets/menu/bonnes-pratiques-glossaire.svg",
          link: "/glossaire",
        },      
      }
    },
  },
  links: {
    0: {
      name: "Emplois",
      link: "/emplois"
    },
    1: {
      name: "Blog",
      link: "/blog"
    }
  }
}