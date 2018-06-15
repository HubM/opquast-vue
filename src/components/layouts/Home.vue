<template>
  <section>
    <article class="columns home-certification-1">
      <div class="column">
        <h1>La certification <br>
          des professionnels du web
        </h1>
        <p>Démontrez votre crédibilité et vos compétences. Obtenez votre certification reconnue par l'État : Maîtrise de la qualité en projet web.</p>
        <Link class="btn btn-primary" path="/" message="démarrer" />
      </div>
      <img src="~assets/homepage/illustration_1.svg" alt="Illustration qui représente les bonnes pratiques web">
    </article>
    <article class="columns home-certification-2">
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
    <article class="home-evidence">
      <ul>
        <li>
          <img src="~assets/homepage/icn-certif.svg" alt="Illustration qui représente les certifiés Opquast">
          <h4></h4>
        </li>
      </ul>
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

