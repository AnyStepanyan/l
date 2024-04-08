<template>
  <v-sheet class="mx-auto ma-10 text-center" height="auto" max-width="700">
    <h1 class="text-capitalize font-weight-black">
      {{ currentPost.title }}
    </h1>

    <h5 class="ma-7">Post Number {{ currentPost.id }}</h5>

    <v-img
      height="400px"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-img>

    <v-textarea
      v-if="edit === false"
      class="ma-8"
      maxlength="auto"
      v-model="editedText"
      :value="editedText === null ? currentPost.body : editedText"
      
    >
    </v-textarea>

    <p v-if="edit === true" class="ma-8">
      {{ editedText === null ? currentPost.body : editedText }}
    </p>

    <div class="d-flex flex-end">
      <slot name="body"></slot>
      <!-- <v-btn class="mr-2" variant="tonal" @click="edit = false"> Edit </v-btn>
      <v-btn
        v-if="edit === false"
        class="mr-2"
        variant="tonal"
        @click="updatePost(currentPost.id)"
      >
        Done
      </v-btn>

      <v-btn
        class="mr-2"
        variant="tonal"
        @click="deletePost(currentPost.id), $router.push({ name: 'home' })"
      >
        Delete
      </v-btn> -->
    </div>
  </v-sheet>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  modelValue: [String, null] ,
  currentPost: Object,
  edit: {
    type: Boolean,
    default: true,
  },
  editedText: String,
});

const emits = defineEmits(['update:modelValue'])
const editedText = ref(props.modelValue)


watch(() => props.modelValue, (newVal) => {
editedText.value = newVal
})

watch(() => editedText, (newVal) => {
  emits('update:modelValue', newVal)
})
</script>
