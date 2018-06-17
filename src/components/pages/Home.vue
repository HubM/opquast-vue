<template>
  <div>
    <section>
      <article class="columns contained is-vcentered home-explication-1">
        <div class="column">
          <h1>La certification <br>
            des professionnels du web
          </h1>
          <p>Démontrez votre crédibilité et vos compétences. Obtenez votre certification reconnue par l'État : Maîtrise de la qualité en projet web.</p>
          <Link class="btn btn-primary" path="/" message="démarrer" />
        </div>
        <img src="~assets/homepage/illustration_1.svg" alt="Illustration qui représente les bonnes pratiques web">
      </article>
      <article class="columns contained home-explication-2">
        <img src="~assets/homepage/illustration_2.svg" alt="Illustration abstraite">
        <div class="column is-7 is-offset-3">
          <h3 class="color-flamingo">certification Opquast</h3>
          <h2>Maîtrise de la qualité en projet web </h2>
          <p>
            Cette certification concerne l’ensemble des professionnels amenées à concevoir, 
            produire, maintenir ou travailler sur les sites Web et leurs déclinaisons mobiles. 
            Elle permet d’évaluer la maîtrise professionnelle des fondamentaux, des bonnes pratiques du Web, 
            et des risques associés à la mise en œuvre de ces différentes règles.
          </p>
          <p>
            Les avantages de la certification Opquast ? Mieux travailler, mieux communiquer et faire reconnaître ses compétences Web.
          </p>  
          <Link class="btn btn-primary" path="/certification" message="découvrir" />
        </div>
      </article>
      <article class="bck-cloud">
        <ul class="home-evidence contained">
          <li>
            <img src="~assets/homepage/icn-certif.svg" alt="Illustration qui représente les certifiés Opquast">
            <h4>3514 certifiés</h4>
            <hr>
            <p>
              Aujourd'hui, Opquast compte plus de 3 514 certifiés. Professionnels ou particuliers, 
              ces personnes peuvent affirmer qu'ils ont passés avec succès la certification Opquast,
              et qu'ils sont experts en qualité web.
            </p>
          </li>
          <li>
            <img src="~assets/homepage/icn-reconnu.svg" alt="Illustration qui représente que l'INCP reconnait la certification">
            <h4>Reconnue INCP</h4>
            <hr>
            <p>
              La certification Opquast est reconnue à la Commission Nationale de la Certification Professionnelle. 
              De ce fait, Opquast bénéficie d'une valeur nationale et peut se qualifier de certification reconnue par l'état.
            </p>
          </li>
          <li>
            <img src="~assets/homepage/icn-formations.svg" alt="Illustration qui représente l'accompagnement dans les certifications Opquast">
            <h4>Accompagnement</h4>
            <hr>
            <p>
              Préparez vous à la certification en suivant nos formations. 
              Vous pouvez vous inscrire directement en ligne, et avoir accès à la plateforme pendant trois mois.
            </p>
          </li>
        </ul>
      </article>
      <article class="columns contained is-vcentered">
        <div class="column">
          <h3 class="color-scooter">Qualité web</h3>
          <h2>Testez vos compétences !</h2>
          <h4 class="color-gray-chateau">Mini-test: 10 questions pour s'auto-évaluer</h4>
          <p>
            Vous n’êtes pas surs d’avoir les compétences nécessaires pour 
            passer notre certification ? Testez-vous avec ce mini test de 10 questions.
          </p>
          <Link class="btn btn-primary" path="/" message="s'auto-évaluer" />
        </div>
        <img src="~assets/homepage/plateforme-illu.jpg" 
            srcset="~assets/homepage/plateforme-illu@2x.jpg 2x, ~assets/homepage/plateforme-illu@3x.jpg 3x"
            alt="Image qui représente l'interface de Opquast" class="column" style="width: 100%;">
      </article>
      <article class="columns contained is-vcentered">
        <img src="~assets/homepage/illustration_3.svg" alt="Image qui représente l'interface de Opquast" class="column">
        <div class="column home-bonnes-pratiques">
          <h3 class="color-princess-dark">Vérifier et découvrir</h3>
          <h2>Bonnes pratiques</h2>
          <p>
            Opquast a recensé pour vous une liste de bonnes pratiques applicables sur le web. 
            Vous trouverez une check-list, allant du prototype, au design, à l'intégration, 
            au développement, jusqu'à la rédaction. Toutes ces bonnes pratiques rentrent dans une 
            logique de qualité web et ont pour objectif d'optimiser l'expérience de l'internaute. 
            Suivez le guide des bonnes pratiques et servez vous en pour obtenir la certification 
            Opquast
          </p>
          <Link class="btn btn-primary" path="/checklist" message="apprendre" />
        </div>
      </article>
      <article class="bck-cloud">
        <div class="contained home-partners">
          <h2>Nos partenaires certifiés</h2>
          <router-link to="/entreprises" class="show-all">voir tous</router-link>
          <ul class="columns is-vcentered is-spaced">
            <li v-for="(partner, index) in partners" :key="index" class="column"> 
              <a :href="partner.link" target="_blank">
                <img :src="partner.logo_2x" :alt="partner.alternative" :srcset="partner.logo_3x" />
              </a>
            </li>
          </ul>
        </div>
      </article> 
      <article class="columns contained home-explication-3">
        <div class="column is-7 is-offset-2">
          <h3 class="color-flamingo">Partenariats</h3>
          <h2>Écoles et entreprises, découvrez nos offres</h2>
          <p>
            Faites certifier vos employés et étudiants ! Assurez vous qu’ils maitrisent toutes les 
            bonnes pratiques de la qualité web avec notre certification en ligne ou nos formations 
            présentielles.
          </p>
          <p>
            Les avantages de la certification Opquast ? Mieux travailler, mieux communiquer et faire reconnaître ses compétences Web.
          </p>  
          <Link class="btn btn-primary" path="/formations" message="devenir partenaire" />
        </div>
        <img src="~assets/homepage/illustration_4.svg" alt="Illustration abstraite">
      </article>  
    </section>
    <Footer />
  </div>
</template>

<script>
import Link from '../elements/Link';
import Footer from '../footer/Footer';
import partners from '../../datas/home-partners';

export default {
  name: 'home',
  data() {
    return {
      partners: partners
    }
  },
  components: {
    Link,
    Footer
  },
}
</script>

