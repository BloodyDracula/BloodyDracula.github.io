<template>
<form @submit.prevent>
      <h4>Создание поста</h4>
      <my-input
          v-focus
      v-model="post.title"
      type="text"
      placeholder="Название"
      />
      <my-input
      v-model="post.body"
      type="text" 
      placeholder="Описание"
      />
      <my-button
      class="btn"
      style="align-self: flex-end"
      @click="createPost"
      >
      Создать
      </my-button>
    </form>
</template>

<script>
import MyInput from "./UI/MyInput.vue";
import MyButton from "./UI/MyButton.vue";
export default {
  components: {MyButton,MyInput},
  data() {
          return {
            post: {
              title: '',
              body: ''
            }
          }
        },
        methods: {
          createPost() {
            this.post.id = Date.now();
           this.$emit('create', this.post)
           this.post = {
            title: '',
            body: ''
           }
          }
        },
    }
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}


</style>