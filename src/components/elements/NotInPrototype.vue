<template>
  <section class="columns contained is-vcentered not-in-proto">
    <div class="column">
      <h1>Page en construction</h1>
      <p>
        Cette page est en cours de construction afin de vous garantir une meilleure expérience
        sur notre site.
      </p>
      <Link class="btn btn-primary" path="/" message="Retour à l'accueil" />
    </div>
    <img src="~assets/notInProto/illustration.svg" alt="Illustration qui représente que le site Opquast est en cours de réalisation" class="column">
  </section>
</template>

<script>
import Link from './Link';
export default {
  name: "notInPrototype",
  components: {
    Link
  }
}
</script>
