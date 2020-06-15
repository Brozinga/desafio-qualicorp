<template>
  <div>
    <div>
      <ClienteForm ref="form" v-on:incrementar="adicionarCliente" :editId="editId"></ClienteForm>
    </div>
    <div class="is-three-fifths container">
      <table v-if="dados.length!=0" class="table col-md-24">
        <thead>
          <tr>
            <th class="invisible">Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>Status</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dados" v-bind:key="item.id">
            <th class="invisible" scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.birthday }}</td>
            <td v-if="item.isActive">
              <i class="material-icons status-active">check</i>
            </td>
            <td v-else>
              <i class="material-icons status-inactive">clear</i>
            </td>
            <td>
              <p class="buttons">
                <a class="button is-small is-primary" @click="editarCliente(item)">
                  <i class="material-icons">edit</i>
                </a>
                <a class="button is-small is-danger" @click="deletarCliente(item)">
                  <i class="material-icons">clear</i>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <br />
        <div class="notification is-light">
          Ops!
          <strong>Não foi encontrado dados</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClienteForm from "../components/ClienteForm.vue";
import Service from "../service/api";
import moment from "moment";

export default {
  name: "Cliente",
  components: {
    ClienteForm
  },
  data() {
    return {
      editId: "",
      dados: []
    }
  },
  created() {
    this.PegarTodos();
  },
  computed: {},
  methods: {
    PegarTodos(){
      const self = this;
      Service.GetAll(response => {
        sessionStorage.setItem("dados", JSON.stringify(response.data.message));
        self.dados = response.data.message.map(value => {
          value.birthday = moment(value.birthday).format("DD/MM/YYYY");
          return value;
        });
      });
    },
    editarCliente(cliente) {
      this.editId = cliente.id;
    },
    adicionarCliente() {
      this.editId = "";
    },
    delecaoCliente(cliente) {
      const self = this;
      Service.Delete(cliente.id, () => {
        self.PegarTodos();
      });
    },
    deletarCliente(cliente) {
      const self = this;
      this.$swal({
        title: "Tem certeza que deseja deletar?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirmar"
      }).then(result => {
        if (result.value) {
          self.delecaoCliente(cliente);
          self.PegarTodos();
        }
      });
    }
  }
};
</script>
<style>
.editing {
  background-color: #fff8db;
}

.table {
  margin-top: 50px;
  font-size: 12pt;
}

.invisible {
  display: none;
}

.clear-button {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
.status-active {
  color: #28a745;
}
.status-inactive {
  color: #dc3545;
}
</style>
