<template>
  <div>
    <section>
      <article class="columns is-tablet contained is-vcentered home-explication-1">
        <div class="column">
          <h1>La certification <br>
            des professionnels du web
          </h1>
          <p>Démontrez votre crédibilité et vos compétences. Obtenez votre certification reconnue par l'État : Maîtrise de la qualité en projet web.</p>
          <div class="actions">
            <a href="#" class="btn btn-secondary">
              obtenir
              <span class="icon-shopping"></span>
            </a>
            <Link class="btn btn-primary" path="/" message="découvrir" />

          </div>
        </div>
        <img src="~assets/homepage/illustration_1.svg" 
             alt="Illustration qui représente les bonnes pratiques web"
             class="column"
        >
      </article>
      <article class="columns contained home-explication-2">
        <img src="~assets/homepage/illustration_2.svg" alt="Illustration abstraite" class="is-hidden-mobile">
        <div class="column is-7-tablet is-offset-5 is-offset-3-widescreen">
          <p class="color-flamingo pre-title">certification Opquast</p>
          <h2>Maîtrise de la qualité en projet web </h2>
          <p>
            Cette certification, valable pendant 5 ans, concerne l’ensemble des professionnels amenées à concevoir, 
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
        <slick 
          ref="slick" 
          :options="slickOptionsEvidence" 
          class="home-evidence contained" 
          :is="isReadyForSliderEvidence ? 'slick' : 'ul'"
        >
          <li>
            <img src="~assets/homepage/icn-certif.svg" alt="Illustration qui représente les certifiés Opquast">
            <h3>3514 certifiés</h3>
            <hr>
            <p>
              Aujourd'hui, Opquast compte plus de 3 514 certifiés. Professionnels ou particuliers, 
              ces personnes peuvent affirmer qu'ils ont passés avec succès la certification Opquast,
              et qu'ils sont experts en qualité web.
            </p>
          </li>
          <li>
            <img src="~assets/homepage/icn-reconnu.svg" alt="Illustration qui représente que l'INCP reconnait la certification">
            <h3>Reconnue INCP 5 ans</h3>
            <hr>
            <p>
              La certification Opquast est reconnue à la Commission Nationale de la Certification Professionnelle. 
              De ce fait, Opquast bénéficie d'une valeur nationale et peut se qualifier de certification reconnue par l'état.
            </p>
          </li>
          <li>
            <img src="~assets/homepage/icn-formations.svg" alt="Illustration qui représente l'accompagnement dans les certifications Opquast">
            <h3>Accompagnement</h3>
            <hr>
            <p>
              Préparez vous à la certification en suivant nos formations. 
              Vous pouvez vous inscrire directement en ligne, et avoir accès à la plateforme pendant trois mois.
            </p>
          </li>
        </slick>
      </article>
      <article class="columns contained is-vcentered">
        <div class="column">
          <p class="color-scooter pre-title">Qualité web</p>
          <h2>Testez vos compétences !</h2>
          <h4 class="color-gray-chateau">Mini-test: 10 questions pour s'auto-évaluer</h4>
          <p>
            Vous n’êtes pas surs d’avoir les compétences nécessaires pour 
            passer notre certification ? Testez-vous avec ce mini test de 10 questions.
          </p>
          <Link class="btn btn-primary btn-extended" path="/" message="s'auto-évaluer" />
        </div>
        <img src="~assets/homepage/plateforme-illu@2x.jpg" 
            srcset="~assets/homepage/plateforme-illu@3x.jpg 3x"
            alt="Image qui représente l'interface de Opquast" class="column is-hidden-touch" style="width: 100%;">
      </article>
      <article class="columns contained is-vcentered home-bonnes-pratiques">
        <img src="~assets/homepage/illustration_3.svg" alt="Image qui représente l'interface de Opquast" class="column">
        <div class="column">
          <p class="color-princess-dark pre-title">Vérifier et découvrir</p>
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
          <slick ref="slick" :options="isReadyForSliderPartners ? slickOptionsPartners : ''" :is="isReadyForSliderPartners ? 'slick' : 'ul'" class="columns is-vcentered is-spaced">
            <li v-for="(partner, index) in partners" :key="index" class="column"> 
              <a :href="partner.link" target="_blank">
                <img :src="partner.logo_2x" :alt="partner.alternative" :srcset="partner.logo_3x" />
              </a>
            </li>
          </slick>
        </div>
      </article> 
      <article class="columns contained home-explication-3">
        <div class="column is-7 is-offset-0 is-offset-2-widescree ">
          <p class="color-flamingo pre-title">Partenariats</p>
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
        <img src="~assets/homepage/illustration_4.svg" alt="Illustration abstraite" class="is-hidden-mobile">
      </article>  
    </section>
    <div class="chat">
      <img src="~assets/chat.svg" alt="Icône qui représente un dialogue">
    </div>
    <Footer />
  </div>
</template>

<script>
import Link from '../elements/Link';
import Footer from '../footer/Footer';
import partners from '../../datas/home-partners';
import Slick from 'vue-slick';


export default {
  name: 'home',
  data() {
    return {
      partners: partners,
      isReadyForSliderPartners: window.innerWidth <= 768 ? true : false,
      isReadyForSliderEvidence: window.innerWidth <= 1024 ? true : false,
      slickOptionsEvidence: {
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        initialSlide: 0,
        easing: 'ease-in-out',
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              initialSlide: 0
            }
          },
          {
            breakpoint: 1024,
            settings: "unslick"
          },
        ]
      },
      slickOptionsPartners: {
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        initialSlide: 0,
        easing: 'ease-in-out',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 0
            }
          },
          {
            breakpoint: 768,
            settings: "unslick"
          },
        ]
      },      
    }
  },

  mounted() {
    this.initSlider();
  },
  methods: {
    initSlider() {
      window.addEventListener("resize",(e) => {
        if(e.srcElement.innerWidth <= 768) {
          this.isReadyForSliderPartners = true;
        } else {
          this.isReadyForSliderPartners = false;
        }
        if(e.srcElement.innerWidth <= 1024) {
          this.isReadyForSliderEvidence = true;
        } else {
          this.isReadyForSliderEvidence = false;
        }
      });
    }
  },
  components: {
    Link,
    Footer,
    Slick,
  },
}
</script>

