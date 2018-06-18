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
          icon:`<span class="icon-certificate"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>`,
          link: "/certification",
        },
        1: {
          name: "Formations",
          description: "Les différentes formations",
          icon: `<span class="icon-school"><span class="path1"></span><span class="path2"></span></span>`,
          link: "/formations",
        },        
        2: {
          name: "Faq",
          description: "Les réponses à vos questions !",
          icon: `<span class="icon-question"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>`,
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
          icon: `<span class="icon-backpack"><span class="path1"></span><span class="path2"></span></span>`,
          link: "/ecoles",
        },
        1: {
          name: "Entreprises",
          description: "Les réponses à vos questions !",
          icon: `<span class="icon-work"><span class="path1"></span><span class="path2"></span></span>`,
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
          icon: `<span class="icon-check"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>`,
          link: "/checklist",
        }, 
        1: {
          name: "Glossaire",
          description: "Tout le vocabulaire pour être pro",
          icon: `<span class="icon-book"><span class="path1"></span><span class="path2"></span></span>`,
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