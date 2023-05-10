<template>
  <div>
    <h1>{{ likes }}</h1>
    <button @click="addLike">add Like</button>
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
        v-focus
    />
    <div class="app__btns">
      <my-button
      >
        Создать пост
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-from
      />
    </my-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
    />
    <div v-else>
      Идёт загрузка...
    </div>
  </div>
</template>

<script>
import PostFrom from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {ref} from 'vue';
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "../hooks/useSortedPosts.js";
import useSortedAndSearchedPosts from "../hooks/useSortedAndSearchedPosts.js"

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostList,PostFrom
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}

      ]
    }
  },
  setup(props){
    const {posts, totalPages, isPostsLoading} = usePosts(10)
    const {SortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, SortedAndSearchedPosts} = useSortedAndSearchedPosts()
    return {
      posts,
      totalPages,
      isPostsLoading,
      SortedPosts,
      selectedSort,
      searchQuery,
      SortedAndSearchedPosts
    }
  }
}
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;

}
.observer {
  height: 30px;
  background: green;
}
</style>