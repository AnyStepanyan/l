<template>
    <div>
        <DetailedPostContent
    :current-post="currentPost"
        :edit="edit"
        :edited-text="editedText"
        >

        <template #body>
            <GreyButtons
      button-name="Edit"
      @click:eventHandler="edit = false"
      />

      <GreyButtons
      v-if="edit === false"
 button-name="Done"
  @click:eventHandler="updatePost(currentPost.id)"
  />
      <GreyButtons
      button-name="Delete"
      @click:eventHandler="deletePost(currentPost.id)"
      />
        </template>
    </DetailedPostContent>
        <DetailedPostComments />
    </div>

</template>

<script setup>
import DetailedPostContent from '../components/DetailedPostContent.vue'
import DetailedPostComments from '../components/DetailedPostComments.vue'
import GreyButtons from '@/components/GreyButtons.vue';
import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { useRoute } from "vue-router";


const store = useStore();
const router = useRoute();
const edit = ref(true);
const editedText = ref(null);

store.commit(
  "setCurrentPostFromServer",
  store
    .dispatch("getCurrentPostFromServer", router.params.id)
    .then((res) => res)
);
const currentPost = computed(() => store.getters.currentPostFromServer);

const updatePost = (id) => {
  edit.value = true;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      body: editedText.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).catch((error) => {
    console.error(error);
  });
};

const deletePost = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  }).catch((error) => {
    console.error(error);
  });
};
</script>