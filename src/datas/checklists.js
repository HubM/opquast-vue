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
{
  title: ``,
  rubrique: ``,
  index: ,
  content: {
    created: ``,
    objectif: ``,
    solution_technique: ``,
    moyen_controle: ``
  }
},
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
        'fichiers',
        'formulaires',
        'hyperliens',
        'identification',
        'internationalisation',
        'mobile',
        'navigation',
        'newsletter',
        'présentation',
        'sécurité',
        'performances',
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
          title: `Les captchas audio peuvent être réécoutés à volonté.`,
          index: 2,
          rubrique: `alternatives`,
          content: {
            created: `23 juin 2014`,
            objectif: `<p>
                        Faciliter l’accès aux contenus ou services protégés par des captchas pour les utilisateurs ne pouvant exploiter les captchas graphiques.
                       </p>
                       <p>
                         Faciliter l’utilisation des captchas audio.&nbsp;
                       </p>`,
            solution_technique: `<p>
                                  Fournir un lien permettant de télécharger le captcha audio.
                                 </p>
                                 <p>
                                  Mettre à disposition le captcha audio via un player permettant de le rejouer à volonté.
                                </p>`,
            moyen_controle: `<p>
                              Identifier les formulaires utilisant un captcha audio, et pour chacun de ces formulaires :
                            </p>
                            <ul>
                              <li>s’assurer que le captcha audio peut être rejoué ;</li>
                              <li>vérifier que le contenu correspond toujours à la saisie attendue.</li>
                            </ul>`
          }
        },
        {
          title: `Le codage de caractères utilisé est UTF-8.`,
          index: 3,
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
        {
          title: `Chaque identifiant HTML n'est utilisé qu'une seule fois par page.`,
          index: 4,
          rubrique: `code`,
          content: {
            created: `7 septembre 2015`,
            objectif: `<p>
                        Éviter les erreurs de restitution du contenu ou d’interaction via les scripts.
                      </p>
                      <p>
                        Limiter les risques d’interprétation hasardeuse du Document Object Model (DOM) par des agents utilisateurs différents.
                      </p>`,
            solution_technique: `<p>La solution la plus radicale consiste à s’assurer de la validité complète du code source des pages, à l’aide d’un validateur tel que http://validator.w3.org. Cette solution conduit cependant à tenir compte de l’ensemble des erreurs de validation du code source qui n’entrent pas dans le champ de cette bonne pratique. Pour s’en tenir au seul champ de cette bonne pratique, on veillera à éviter toute valeur dupliquée d’un attribut ID dans une même page HTML.</p>`,
            moyen_controle: `<p>Soumettre la page au validateur HTML du W3C (validator.w3.org) et vérifier que chaque valeur d’attribut id est unique dans la page.</p>`
          }
        },
        {
          title: `Les dates sont présentées dans des formats explicites.`,
          index: 5,
          rubrique: `code`,
          content: {
            created: `23 juin 2014`,
            objectif: `<p>
                        Éviter aux utilisateurs les risques de méprise sur le sens d’une date.
                      </p>
                      <p>
                        Faciliter la compréhension et la réutilisation des contenus concernés.
                      </p>`,
            solution_technique: `<p>
                                  S’assurer que le mois est écrit en toutes lettres (« décembre ») ou en abrégé (« déc. »), mais pas au format numérique.
                                </p>
                                <p>
                                  Indiquer les 4 chiffres de l’année.
                                </p>
                                <p>
                                  Cette exigence doit être prévue dans les systèmes de gestion de contenu où la datation est automatisée.
                                </p>`,
            moyen_controle: `<p>
                              Identifier les pages comportant des dates, et pour chacune des dates trouvées :
                             </p>
                             <ul>
                              <li>Vérifier que le mois n’est pas indiqué dans un format numérique, par exemple 12/12/2012.</li>
                              <li>Vérifier que l’année est indiquée sur quatre chiffres et non deux, par exemple 12/12/12.</li>
                             </ul>
                             <p>Les dates saisies par l’utilisateur final dans les formulaires ne sont pas concernées par cette bonne pratique : leur format est considéré comme suffisamment explicite, dès lors que la saisie s’effectue via un datepicker ou bien manuelle et que le format attendu est indiqué.&nbsp;</p>`      
          }
        },
        {
          title: `Le titre de chaque page permet d'identifier son contenu.`,
          index: 6,
          rubrique: `contenus`,
          content: {
            created: `23 juin 2014`,
            objectif: `<p>Permettre aux utilisateurs d'identifier immédiatement la nature des contenus de chaque page dans les onglets, les favoris, dans la fenêtre du navigateur ou encore dans les lecteurs d'écran. </p><p>Améliorer le référencement des pages et leur présentation dans les moteurs de recherche.</p>`,
            solution_technique: `<p>Rédiger le contenu de l'élément <code>title</code> de chaque page de manière à ce qu'il décrive, de la façon la plus concise possible, le contenu ou la fonction de la page , y compris à la suite d'une requête Ajax modifiant de manière essentielle le contenu de la page.</p><p>Préciser quelle est l'étape en cours d'un processus dans l'élément title des pages. Par exemple, inscrire «&nbsp;Étape 3 de votre inscription&nbsp;» dans l'élément <code>title</code> de la page correspondant à la troisième étape d'un formulaire d'inscription. </p><p>Préciser, dans le cas de l'affichage d'une série de résultats de recherche, quel est l'intervalle de résultats affiché dans la page courante. Par exemple, « Résultats 10 à 19 de la recherche sur “Foo”&nbsp;».</p><p>Préciser l'état dans le titre d'une page de demande de confirmation ou d'annulation lors de la soumission d'un formulaire (exemple : «&nbsp;Demande de confirmation de suppression - Mes documents&nbsp;»).</p>`,
            moyen_controle: `<p>Dans toutes les pages du site, y compris dans les pages d'un processus ou d'une série de résultats de recherche, ou encore dans les pages dont le contenu peut être modifié de manière majeure via Ajax :</p><ul>
<li>Vérifier que chaque titre de page (élément <code>title</code>) permet d'identifier le contenu ou la fonction de la page.</li>
				</ul>`
          }
        },
        {
          title: `Les contenus publicitaires ou sponsorisés sont identifiés comme tels.`,
          index: 7,
          rubrique: `contenus`,
          content: {
            created: `23 juin 2014`,
            objectif: `<p>Permettre une identification immédiate des contenus publicitaires ou sponsorisés.</p><p>Éviter les confusions entre contenus rédactionnels et publicitaires.</p><p>Prévenir les risques associés aux conflits d'intérêt.</p>`,
            solution_technique: `<p>Signaler les publicités par une mention permettant de les identifier (publicité, pub, partenariats…).</p><p>Dans la mesure du possible, séparer graphiquement la publicité du reste du contenu.</p>`,
            moyen_controle: `<p>Au sein du site examiné :</p><ul>
<li>Identifier les contenus publicitaires, ce qui peut être simplifié par l'examen des templates (particulièrement dans le cas du recours à une régie publicitaire). </li>
					<li>Vérifier que tous les espaces dédiés à la publicité comportent une mention permettant de les identifier sans ambiguïté&nbsp;: typiquement, la mention «&nbsp;publicité&nbsp;» affichée au dessus ou en dessous du contenu concerné.</li>
				</ul>`
          }
        },
        {
          title: `La nature et les caractéristiques quantifiables des produits et services sont indiquées.`,
          rubrique: `e-commerce`,
          index: 8,
          content: {
            created: `23 juin 2014`,
            objectif: `<p>Permettre aux utilisateurs d'identifier précisément la nature et les spécifications des produits proposés.</p>`,
            solution_technique: `<p>Indiquer sur le site les informations relatives à la nature ainsi qu'aux caractéristiques des produits et services proposés.</p>`,
            moyen_controle: `<p>Dans les pages produits, ou dans la page d'accueil, ou la page des mentions légales, la page d'aide ou encore dans les pages consacrées aux conditions générales d'utilisation ou de vente :</p><ul>
<li>Vérifier la présence d'informations relatives à la nature et aux caractéristiques des produits et services proposés.</li>
				</ul>`
          }
        },
        {
          title: `Chaque champ de formulaire est associé dans le code source à une étiquette qui lui est propre.`,
          rubrique: `formulaires`,
          index: 9,
          content: {
            created: `23 juin 2014`,
            objectif: `<p>Faciliter la compréhension des données attendues dans les formulaires.</p><p>Permettre aux aides techniques d'accessibilité de restituer les champs de formulaires en les associant systématiquement à une étiquette indiquant leur rôle et la nature de la saisie attendue.</p><p>Faciliter la saisie en permettant de sélectionner le champ via un clic sur son étiquette aussi bien que sur le champ lui-même (particulièrement en cas de case à cocher ou de case radio).</p>`,
            solution_technique: `<p>Donner à chaque champ de formulaire une étiquette qui lui soit explicitement associée&nbsp;:</p><ul>
<li>si l'étiquette est visible, sous la forme d'un élément <code>label</code> doté d'un attribut <code>for</code> reprenant la valeur de l'attribut <code>id</code> affecté au champ, par exemple :</li>
				</ul><p>&lt;label for="nom1"&gt;Nom de famille&nbsp;:&lt;/label&gt;</p><p>&lt;input id="nom1" type="text" name="nom"&gt;</p><ul>
<li>si l'affichage de l'étiquette n'est pas souhaitée, sous la forme d'un attribut <code>title</code> du champ lui-même.</li>
				</ul><p>Le recours à une étiquette &lt;label for="…"&gt; masquée via les styles CSS est déconseillé au profit de l'attribut title du champ.</p>`,
            moyen_controle: `<p>Pour chaque champ de formulaire&nbsp;: </p><ul>
<li>Vérifier, en regardant le code source ou à l'aide de Firebug, que l'attribut <code>for</code>, propre à l'élément <code>label</code>, ainsi que l'attribut <code>id</code> du champ ont exactement le même contenu. Si les valeurs de ces deux attributs sont effectivement identiques, l'étiquette (<code>label</code>) est bien associée au champ (<code>input</code>). </li>
					<li>Dans le cas où aucune étiquette n'est visible dans le site, vérifier que chaque champ de formulaire est doté d'un attribut <code>title</code>.</li>
				</ul><p>Dans les deux cas, vérifier enfin que l'étiquette décrit effectivement le rôle du champ ou la nature de l'information qui doit y être saisie. Cette bonne pratique ne peut donc être automatisée mais nécessite un examen manuel de chaque formulaire</p><p>Lorsqu'une étiquette <code>label</code> est présente mais masquée à l'affichage avec les propriétés CSS <code>display</code> ou <code>visibility</code>, la bonne pratique 139 exigeant que les contenus nécessaires aux lecteurs d'écran ne leur soient pas dissimulés est, du coup, invalidée.</p>`
          }
        },
        {
          title: `L'utilisateur est averti lorsqu'une saisie est sensible à la casse.`,
          rubrique:`formulaires`,
          index: 10,
          content: {
            created: `23 juin 2014`,
            objectif: `<p>Éviter le risque d'erreur et donc éviter à l'utilisateur de devoir remplir plusieurs fois un même champ.</p><p>Éviter l'incompréhension de l'utilisateur qui pense avoir rempli correctement le champ et qui le voit signalé en erreur.</p>`,
            solution_technique: `<p>Si la saisie attendue est sensible à la casse, préciser dans l'étiquette associée au champ qu'elle doit être réalisée en majuscules ou en minuscules selon le cas.</p>`,
            moyen_controle: `<p>Pour chaque formulaire&nbsp;:</p><ul>
<li>Détecter les champs dont la saisie est sensible à la casse en inscrivant le texte demandé en majuscules puis en minuscules et contrôler si, dans l'un des deux cas, la saisie est rejetée ;</li>
					<li>En cas de rejet de la saisie à cause de sa casse, vérifier que l'étiquette associée à chaque champ, via l'élément <code>label</code> ou dans l'attribut <code>title</code>, informe l'utilisateur de cette sensibilité.</li>
				</ul><p>Ce contrôle gagne à être mené de pair avec ceux des bonnes pratique 36 sur l'indication des données rejetées en cas d'erreur et 39 sur l'indication des champs obligatoires mais aussi 115 et 117 et encore avec celui de la bonne pratique 119 sur l'indication du format de saisie attendu. Il peut être facilité en ayant réalisé au préalable la vérification de la bonne pratique 35 sur la présence et le balisage de l'étiquette des champs de formulaire.</p>`
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
        {
          title: `Chaque zone d'interaction tactile est de taille suffisante.`,
          rubrique: `interactions`,
          index: 2,
          content: {
            created: `14 février 2013`,
            objectif: `<p>
                        Limiter le risque d'erreurs.
                        <p>`,
            solution_technique: `<p>
                                  Prévoir des zones d'interaction (liens, boutons) d'au moins 8mm de plus petit côté. 
                                <p>`,
            moyen_controle: ``
          }
        },
        {
          title: `Les animations et contenus mutimédias utilisent les éléments HTML5 appropriés.`,
          rubrique: `multimédia`,
          index: 3,
          content: {
            created: `16 décembre 2014`,
            objectif: `<p>
                        Permettre la restitution des contenus vidéos et audio indépendamment du navigateur ou du périphérique.
                        <p>`,
            solution_technique: `<p>
                                  Utiliser les éléments HTML5 audio et video. 
                                <p>`,
            moyen_controle: ``
          }
        },
        {
          title: `Les contenus multimédia ne sont téléchargés qu'à la demande explicite de l'utilisateur.`,
          rubrique: `multimédia`,
          index: 4,
          content: {
            created: `16 décembre 2014`,
            objectif: `<p>
                        Limiter la consommation de données.
                        <p>`,
            solution_technique: `<p>
                                  Ne pas recourir à des contenus vidéos, audio ou animations déclenchés automatiquement au chargement de la page.
                                </p>
                                <p>
                                  Ne pas précharger les contenus vidéos, audio ou animations avant leur déclenchement par l'utilisateur.
                                <p>`,
            moyen_controle: ``
          }      
        },
        {
          title: `Le serveur ne force pas la redirection de la version desktop vers la version mobile.`,
          rubrique: `navigation`,
          index: 5,
          content: {
            created: `14 février 2013`,
            objectif: `<p>
                        Laisser le choix à l'utilisateur de la version ayant ses préférences.
                         </p>`,
            solution_technique: `<p>
                                  Ne pas rediriger côté serveur vers la version mobile (en dynamic serving ou en cas de version mobile dédiée) sans possibilité pour l'utilisateur de désactiver cette redirection.
                                </p>`,
            moyen_controle: ``
          }
        }
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
      rules: []
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
      ],
      rules: []
    },
    4: {
      title: 'Éco-concept',
      icon: `<span class="icon-flower"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span></span>`,
      nbCriteres: 150,
      rubriques: [
        'tous',
        'conception',
        'ergonomie',
        'développement',
        'hébergement',
        'contenu',
      ],
      rules: []
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
        'multimédia',
        'formulaires',
        'hyperliens',
        'identification',
        'internationalisation',
        'mobile',
        'navigation',
        'présentation',
        'sécurité',
        'performances',
        'tableaux'
      ],
      rules: []
    },
    6: {
      title: 'Accesibilité premier pas',
      icon: `<span class="icon-accessible--1"></span>`,
      nbCriteres: 40,
      rubriques: [
        'html'
      ],
      rules: []
    },
    7: {
      title: 'Accesibilité second pas',
      icon: `<span class="icon-accessible--2"></span>`,
      nbCriteres: 70,
      rubriques: [
        'tous',
        'html',
        'js'
      ],
      rules: []
    },
    8: {
      title: 'Green it',
      icon: `<span class="icon-plant"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>`,
      nbCriteres: 120,
      rubriques: [
        'tous',
        'pilotage',
        'achat responsables',
        'allongement',
        'poste de travail',
        'téléphonie',
        'impression',
        'logiciel',
        'réseau',
        'data center',
      ],
      rules: []
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
      ],
      rules: []
    },
  },
}