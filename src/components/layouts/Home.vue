<template>
  <section>
    <article class="columns contained home-certification-1">
      <div class="column">
        <h1>La certification <br>
          des professionnels du web
        </h1>
        <p>Démontrez votre crédibilité et vos compétences. Obtenez votre certification reconnue par l'État : Maîtrise de la qualité en projet web.</p>
        <Link class="btn btn-primary" path="/" message="démarrer" />
      </div>
      <img src="~assets/homepage/illustration_1.svg" alt="Illustration qui représente les bonnes pratiques web">
    </article>
    <article class="columns contained home-certification-2">
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
    <article class="columns contained">
      <div class="column">
        <h3 class="color-scooter">Qualité web</h3>
      </div>
    </article>
  </section>
</template>

<script>
import Link from '../elements/Link';

export default {
  name: 'home',
  components: {
    Link
  }
}
</script>

