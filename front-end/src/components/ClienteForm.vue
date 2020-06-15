<template>
  <div>
    <div class="clear-button">
      <a
        href="#"
        v-show="cliente.name || cliente.email"
        @click="resetFormData()"
        class="button is-small is-danger"
      >X</a>
    </div>
    <form @submit="submit($event)" class="container">
      <div class="row">
        <div class="field col-md-12">
          <label class="label">Nome</label>
          <div class="control">
            <input
              class="input"
              v-model="cliente.name"
              type="text"
              placeholder="Digite o nome do cliente"
              required
            />
          </div>
        </div>
        <div class="field col-md-12">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              v-model="cliente.email"
              type="email"
              placeholder="Digite um email"
              required
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="field col-md-12">
          <label class="label">Aniversário</label>
          <div class="control">
            <input class="input" v-model="cliente.birthday" type="date" required />
          </div>
        </div>

        <div class="field-body col-md-12">
          <div class="field is-narrow">
            <label class="label">Status</label>
            <div class="control">
              <label class="radio">
                <input type="radio" v-model="cliente.isActive" checked value="true" />
                Ativo
              </label>
              <label class="radio">
                <input type="radio" v-model="cliente.isActive" value="false" />
                Inativo
              </label>
            </div>
          </div>
        </div>
      </div>
      <div v-if="erros">
        <div v-for="item in erros" v-bind:key="item.id">
          <br />
          <div class="notification is-warning">
            Ops!
            <strong>{{item.constraints.length}}</strong>
          </div>
        </div>
      </div>
      <div class="field is-grouped" style="margin-top:20px">
        <div class="control">
          <button class="button is-link">{{editAddText}} Cliente</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Service from "../service/api";
import moment from "moment";

export default {
  name: "ClienteForm",
  props: ["editId"],
  data() {
    return {
      cliente: {
        id: "",
        name: "",
        email: "",
        birthday: "",
        isActive: true
      },
      erros: []
    };
  },
  watch: {
    editId(val) {
      if (val) {
        let dados = JSON.parse(sessionStorage.getItem("dados")).filter(
          item => item.id === val
        )[0];

        this.cliente.id = dados.id;
        this.cliente.name = dados.name;
        this.cliente.email = dados.email;
        this.cliente.isActive = dados.isActive;
        this.cliente.birthday = moment(dados.birthday).format("YYYY-MM-DD");
      } else {
        this.resetFormData();
      }
    }
  },
  computed: {
    editAddText() {
      return this.cliente.id ? "Editar" : "Inserir";
    }
  },
  methods: {
    PegarTodos() {
      Service.GetAll(response => {
        sessionStorage.setItem("dados", JSON.stringify(response.data.message));
      });
    },
    resetFormData() {
      this.cliente = {
        id: "",
        name: "",
        email: "",
        birthday: "",
        isActive: true,
        createdAt: ""
      };
      this.erros = [];
      this.editId
    },
    submit(event) {
      event.preventDefault();
      const self = this;

      if (this.cliente.id) {
        Service.Put(this.cliente.id, this.cliente, (value, err) => {
          if (err) return (self.erros = err);
            self.$parent.PegarTodos();
            self.$parent.editId = "";
          self.resetFormData();
        });
      } else {
        Service.Create(this.cliente, (value, err) => {
          if (err) return (self.erros = err);
          self.$parent.PegarTodos();
          self.$parent.editId = "";
          self.resetFormData();
        });
      }
    }
  }
};
</script>