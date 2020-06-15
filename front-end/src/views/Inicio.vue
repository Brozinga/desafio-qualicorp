<template>
  <nav class="level">
    <div class="level-item has-text-centered">
      <div>
        <p class="title">Clientes</p>
        <p class="heading">Quantidade de clientes na base</p>
        <span class="tag is-primary is-medium">{{count}}</span>
      </div>
    </div>
  </nav>
</template>

<script>
import Service from "../service/api";

export default {
  name: "Inicio",
  data() {
    return {
      count: 0
    };
  },
  created() {
    this.PegarTodos();
  },
  methods: {
    PegarTodos() {
      const self = this;
      Service.GetAll(response => {
        self.count = response.data.message.length;
      });
    }
  }
};
</script>

<style>
</style>
