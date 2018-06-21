/* CATEGORY STRUCTURE

  1: {
    title: '',
    icon: ``,
    nbCriteres: ,
    rubriques: [
    ],
    rules: {
    }
  },
*/

/* RULE STRUCTURE
  
   id: {
     title: ``,
     rubrique: ``,
     content: {
       created: ``,
       objectif: ``,
       solution_technique: ``,
       moyen_controle: ``
     }
*/

export default {
  category: {
    0: {
      title: 'Qualité web',
      icon: `<span class="icon-qualite-web"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>`,
      nbCriteres: 10,
      rubriques: [
        'tous',
        'alternatives',
        'code',
        'contact',
        'contenus',
        'e-commerce',
        'espace publics',
        'fichiers et multimédia',
        'formulaires',
        'hyperliens',
        'identification',
        'internationalisation',
        'mobile',
        'navigation',
        'newsletter',
        'présentation',
        'sécurité et confidentialité',
        'serveur et performances',
        'syndication',
        'tableaux'
      ],
      rules: [  
        {
          title: `Chaque image décorative est dotée d'une alternative textuelle appropriée.`,
          index: 1,
          rubrique: `alternatives`,
          content: {
            created: `Fournir aux robots d’indexation uniquement des informations pertinentes.`,
            objectif: `<p>
                        Éviter aux utilisateurs placés dans des contextes où les images ne sont pas perceptibles (navigateur texte, lecteur d’écran, navigateur avec images désactivées) d’être perturbés par des informations sur des images qui leur sont inutiles.
                      </p>
                      <p>
                        Fournir aux robots d’indexation uniquement des informations pertinentes.
                      </p>`,
            solution_technique: `<p>
                                  D’une manière générale, si un code (un attribut HTML, par exemple) est prévu pour l’alternative, il doit être présent, mais en restant vide. Pour les cas les plus courants :
                                </p>
                                <ul>
                                  <li>
                                    <p>Donner à chaque élément img décoratif un attribut alt vide (alt="").</p>
                                  </li>
                                  <li>
                                    <p>Donner à chaque élément area décoratif un attribut alt vide.</p>
                                  </li>
                                  <li>
                                    <p>Laisser vide le contenu de chaque élément object concerné (entre les balises &lt;object&gt; et &lt;/object&gt;.</p>
                                    </li>
                                  <li>
                                    <p>Laisser vide le contenu de chaque élément canvas concerné.</p>
                                  </li>
                                  <li>
                                    <p>Ne donner à chaque élément svg concerné aucun attribut ARIA qui lui confère un label (aria-labelledby, aria-describedby, etc.).</p>
                                  </li>
                                </ul>
                                `,
            moyen_controle: `<p>
                              Cette vérification s’effectue dans le code HTML généré à l’aide d’un inspecteur de code ou d’une barre d’outils dédiée :
                             </p>
                             <ul>
                              <li>
                                <p>Tester au préalable la présence des attributs alt en vérifiant la validité du code HTML généré, par exemple avec le validateur du W3C (le validateur HTML signale les images privées d’alternative) : chaque image décorative doit avoir un attribut alt (présent mais vide).</p>
                              </li>
                              <li>
                                <p>Vérifier que chaque image img ne véhiculant pas d’information nécessaire à la compréhension du contenu a bien un alt vide.</li>
                              </li>
                              <li>
                                <p>Vérifier les éventuels autres objets graphiques du type object, canvas dont le contenu (entre les balises ouvrantes et fermantes) doit être vide.</p>
                              <li>
                                <p>Vérifier les éventuels autres éléments du type svg susceptibles de recevoir une alternative via un attribut ARIA.</p>
                              </li>
                             </ul>`
            
          }
        },
        {
          title: `Le codage de caractères utilisé est UTF-8.`,
          index: 2,
          rubrique: `code`,
          content: {
            created: `23 juin 2014`,
            objectif: `<p>
                        Recourir à un jeu de caractères international.
                      </p>
                      <p>
                        Prévenir les défauts d’affichage.
                      </p>
                      <p>
                        Faciliter la manipulation des contenus par les utilisateurs et les développeurs.
                      </p>`,
            solution_technique: `<p>
                                    Configurer le serveur et les bases de données de manière à utiliser UTF-8.
                                  </p>
                                  <p>
                                    Choisir des outils (logiciels de développement, frameworks, CMS, outils de production de contenu) compatibles avec UTF-8.
                                  </p>`,
            moyen_controle: `<p>
                              Cette vérification s’effectue en trois temps. Pour chaque page examinée :
                            </p>
                            <ul>
                              <li>
                                <p>Vérifier l’indication du jeu de caractères donnée par l’en-tête HTTP content-type envoyée par le serveur, par exemple à l’aide de la fonctionnalité En-têtes HTTP (dans le menu Information) de la Web Developer Toolbar dans Firefox.</p>
                              </li>
                              <li>
                                <p>Vérifier, le cas échéant, la conformité à cet en-tête de l’élément meta http-equiv="Content-Type" dans le code HTML des pages, par exemple à l’aide de Web Developer Toolbar dans Firefox (menu Voir source).</p>
                              </li>
                              <li>
                                <p>Vérifier que le contenu des pages est effectivement encodé en UTF-8 (absence de caractères inattendus ou erronés), par exemple en soumettant la page à une validation HTML auprès du validateur du W3C (validator.w3.org).</p>
                              </li>
                            </ul>
                            <p>
                              L’outil Internationalization Checker du W3C (validator.w3.org/i18n-checker/) permet de combiner ces trois étapes.&nbsp;
                            </p>`
          }
        },
      ]
    },
    1: {
      title: 'Web mobile',
      icon: `<span class="icon-mobile"><span class="path1"></span><span class="path2"></span></span>`,
      nbCriteres: 50,
      rubriques: [
        'tous',
        'interactions',
        'multimédia',
        'navigation',
        'présentation',
        'performances'
      ],
      rules: [
        {
          title: `Les numéros de téléphone sont activables via le protocole approprié.`,
          rubrique: `interactions`,
          index: 1,
          content: {
            created: `14 février 2013`,
            objectif: `<p>
                        Éviter à l'utilisateur de devoir copier un numéro de téléphone. 
                        Permettre le déclenchement immédiat des fonctionnalités d'appel.
                        <p>`,
            solution_technique: `<p>
                                  Baliser les numéros de téléphone avec un élément a et utiliser le protocole tel dans l' attribut href. 
                                <p>`,
            moyen_controle: ``
          }        
        },
      ],
    },
    2: {
      title: 'SEO',
      icon: `<span class="icon-search"><span class="path1"></span><span class="path2"></span></span>`,
      nbCriteres: 200,
      rubriques: [
        'tous',
        'alternatives',
        'cadres',
        'structure',
        'contenu',
        'domaines',
        'hyperliens',
        'metadonnées',
        'navigation',
        'présentation',
        'serveur'
      ],
    },
    3: {
      title: 'Performance',
      icon: `<span class="icon-repair"><span class="path1"></span><span class="path2"></span></span>`,
      nbCriteres: 400,
      rubriques: [
        'tous',
        'css',
        'html',
        'images',
        'scripts',
        'serveur',
      ]
    },
    4: {
      title: 'Éco-concept',
      icon: `<span class="icon-flower"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span></span>`,
      nbCriteres: 150,
      rubriques: [
        'tous',
        'conception fonctionnelle',
        'ergonomie',
        'conception technique',
        'développement',
        'conception graphique',
        'hébergement',
        'contenu',
      ]
    },
    5: {
      title: 'Opquast website',
      icon: `<span class= "icon-web"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>`,
      nbCriteres: 20,
      rubriques: [
        'tous',
        'alternatives',
        'code',
        'contact',
        'contenus',
        'e-commerce',
        'fichiers et multimédia',
        'formulaires',
        'hyperliens',
        'identification',
        'internationalisation',
        'mobile',
        'navigation',
        'présentation',
        'sécurité et confidentialité',
        'serveur et performances',
        'tableaux'
      ]
    },
    6: {
      title: 'Accesibilité premier pas',
      icon: `<span class="icon-accessible--1"></span>`,
      nbCriteres: 40,
      rubriques: [
        'html'
      ]
    },
    7: {
      title: 'Accesibilité second pas',
      icon: `<span class="icon-accessible--2"></span>`,
      nbCriteres: 70,
      rubriques: [
        'tous',
        'html',
        'js'
      ]
    },
    8: {
      title: 'Green it',
      icon: `<span class="icon-plant"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>`,
      nbCriteres: 120,
      rubriques: [
        'gouvernance et pilotage',
        'achat it responsables',
        'allongement de la durée de vie',
        'poste de travail',
        'téléphonie',
        'impression',
        'logiciel',
        'réseau',
        'data center',
      ]
    },
    9: {
      title: 'Open data',
      icon: `<span class="icon-data"></span>`,
      nbCriteres: 15,
      rubriques: [
        'tous',
        'api',
        'animation',
        'applications',
        'catalogage',
        'format',
        'historique',
        'identification',
        'licence',
        'linkeddata',
        'nommage',
        'transparence',
        'utilisabilité',
        'vie privée'
      ]
    },
  },
}