<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="https://www.pinclipart.com/picdir/big/74-746365_introducing-clients-manager-manage-icon-png-blue-clipart.png" />
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a
          v-for="link in links"
          :key="link.title"
          class="navbar-item"
          @click="$router.push(link.url)"
        >{{link.title}}</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["links"],
  methods: {
    goToMySite: () => window.open("https://naufalafif.com", "_blank")
  }
};
</script>
<style scoped>
a.navbar-item {
  text-transform: capitalize;
}
</style>
