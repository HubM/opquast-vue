<template>
  <footer>
    <div class="columns contained footer">
      <nav class="column is-2 footer-links">
          <h4>liens</h4>
          <ul>
            <router-link tag="li" :to="item.path" v-for="(item,key) in menu.links" :key="key">
              {{ item.name }}
            </router-link>
          </ul>
      </nav>
      <div class="column is-offset-1 is-6">
        <h4>Newsletter</h4>
        <form class="newsletter">
          <input type="text" placeholder="Votre email" />
          <button type="submit">s'abonner</button>
        </form>
        <h4>Réseaux sociaux</h4>
        <ul class="socials">
          <li v-for="(social, key) in menu.socials" :key="key">
            <a :href="social.link" target="_blank">
              <img :src="social.logo" :alt="social.alternative">
            </a>
          </li>
        </ul>
      </div>
      <div class="column is-offset-1-widescreen is-3">
        <h4>Opquast</h4>
        <address>
          18, rue Lucien Granet 
          33 150 CENON
          France
        </address>
        <p itemprop="telephone">
          Tél : 
          <a href="tel:+33556401402">+33 5 56 40 14 02</a>
        </p>
      </div>
    </div>
    <div class="subfooter">
      <div class="contained is-spaced">
        <p>SAS au capital de 125 748€ - N° organisme de formation : 72.33.05637.33</p>
        <p>© Opquast. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import menu from '../../datas/footer-menu';
export default {
  name: 'footerApp',
  data() {
    return {
      menu: menu
    }
  }
}
</script>
