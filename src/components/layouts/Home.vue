<template>
  <section>
    <article class="columns certification-opquast">
      <div class="column">
        <h3 class="color-scooter">certification Opquast</h3>
        <h1>La certification <br>
          des professionnels du web
        </h1>
        <p>Démontrez votre crédibilité et vos compétences. Obtenez votre certification reconnue par l'État : Maîtrise de la qualité en projet web.</p>
        <Link class="btn btn-primary" path="/certification" message="démarrer" />
      </div>
      <img src="~assets/homepage/illustration_1.svg" alt="Illustration qui représente les bonnes pratiques web">
    </article>
    <article></article>
    <article></article>
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

