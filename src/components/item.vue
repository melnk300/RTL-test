<script setup lang="ts">
import {defineProps} from 'vue';
import {useItemsStore} from "@/stores/items";

interface Props {
  id: number;
  color: string;
  count: number;
}

const props = defineProps<Props>();

const itemsStore = useItemsStore();
</script>

<template>
  <div class="item">
    <template v-if="color">
      <div class="item-content" :style="{ backgroundColor: color }"></div>
      <div class="item-count" v-if="id != -1">{{ count }}</div>
    </template>
    <template v-else>
      <button @click="itemsStore.addItem(id)">Добавить</button>
    </template>
  </div>
</template>

<style scoped>


.item {
  position: relative;
  padding: 3.5rem;
  border: 1px solid #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
}

.item-content {
  position: relative;
  content: " ";
  background-color: v-bind(color);
  width: 100%;
  height: 100%;
}

.item-content:after {
  position: absolute;
  content: " ";
  background-color: v-bind(color);
  opacity: .8;
  width: 100%;
  height: 100%;
  bottom: 10px;
  left: 10px;
  filter: brightness(1.5) blur(2px);
}

.item-count {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 10px 15px;
  border-radius: 10px 0 0 0;
  color: #f6f6f6;
  border-top: 1px solid #f6f6f6;
  border-left: 1px solid #f6f6f6;
}

button {
  all: unset;
  color: royalblue;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
}

</style>