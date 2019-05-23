<template>
  <div class="todos">
    <h1>Simple 'TODO' using local storage.</h1>
    <h2>New task:</h2>
    <input
      type="text"
      v-model="todo"
      @keydown.enter="$store.commit('CREATE_TODO', todo); todo = '';"
    >
    <h2>Created tasks: </h2>

    <transition-group
      name="list-complete"
      tag="div"
      class="todos__items-container"
    >
    <!--<span-->
      <!--v-for="item in items"-->
      <!--v-bind:key="item"-->
      <!--class="list-complete-item"-->
    <!--&gt;-->
      <!--{{ item }}-->
    <!--</span>-->

      <div
        v-for="item in tasks"
        :key="item.text"
        :class="{'done': item.done}"
        class="todos__item"
      >
        <span class="todos__item-text">
          {{item.text}}
        </span>
        <div class="todos__item-controls">
          <base-switch
            :id="`done-handler-${item.text}`"
            :value.sync="item.done"
            @update:value="todoButtonHandler(item)"
            color="blue"
            round
          />
          <button @click="$store.commit('REMOVE_TODO', item)">remove</button>
        </div>
      </div>

    </transition-group>
    <button @click="$store.commit('CLEAR_ALL_TODOS')">Remove all</button>
  </div>
</template>

<script>
  import BaseSwitch from '@/components/base/BaseSwitch'

  export default {
    name: 'Todos',
    data() {
      return {
        todo: ''
      }
    },
    computed: {
      tasks() {
        return this.$store.getters.itemsSorted;
      }
    },
    components: {
      BaseSwitch
    },
    methods: {
      todoButtonHandler(todo) {
        todo.done ? this.$store.commit('TODO_DONE', todo) : this.$store.commit('TODO_UNDONE', todo);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .todos {
    padding: 20px;
    &__item {
      color: #b71c1c;
      padding-bottom: 2rem;
      border-bottom: 1px solid #eeeeee;
      font-size: 1.6rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }
      &.done {
        color: #4caf50;
        /*font-size: 1rem;*/
      }
      transition: all .4s;



    }
    &__item-text {

    }
    &__item-controls {
      display: flex;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
      }
    }
    &__items-container {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
  }


  /*.list-complete-item {*/
    /*transition: all 1s;*/
    /*display: inline-block;*/
    /*margin-right: 10px;*/
  /*}*/
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active below version 2.1.8 */ {
    opacity: 0;
    /*transform: translateY(30px);*/
  }
  .list-complete-leave-active {
    position: absolute;
  }
</style>
