<script setup lang="ts">
import {useItemsStore} from "@/stores/items";
import {computed, ref} from "vue";
import Item from "@/components/item.vue";

const itemsStore = useItemsStore()

const items = computed(() => itemsStore.inventory)

const draggingItem = ref<number | null>(null);

const onDragStart = (id: number) => {
  draggingItem.value = id;
};

const onDrop = (id: number) => {
  console.log('Drop on item ID:', id);
  if (draggingItem.value !== null) {
    itemsStore.moveItem(draggingItem.value, id);
  } else {
    console.error("Dragging item was null on drop");
  }
};

const popupVisible = ref(false);
const popupItemId = ref<number | null>(null);
const popupItemColor = ref<string | null>(null);
const popupItemCount = ref<number | null>(null);
const inputCount = ref(0);

const openPopup = (id: number) => {
  popupItemId.value = id;
  const item = items.value.find(i => i.id === id);
  if (item) {
    inputCount.value = item.count
    popupItemColor.value = item.color
    popupItemCount.value = item.count
  }
  popupVisible.value = true
};

const closePopup = () => {
  popupVisible.value = false
  popupItemId.value = null
};

const decreaseCount = () => {
  if (popupItemId.value !== null) {
    itemsStore.changeItem(popupItemId.value, inputCount.value);
    closePopup();
  }
};
</script>

<template>
  <div class="page">
    <aside>
      <img src="https://www.mmppicture.co.in/wp-content/uploads/2020/07/Blur-Background-64.jpg" alt="">
      <div class="item-detail">
        <p class="item-name skeleton"></p>
        <div class="item-desc">
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
        </div>
      </div>
      <div class="item-meta">
        <p class="skeleton"></p>
      </div>
    </aside>
    <main>
      <Item v-for="item in items" :key="item.id" :color="item.color" :count="item.count" :id="item.id"
            @dragstart="onDragStart(item.id)"
            @dragover.prevent
            @drop.prevent="onDrop(item.id)"
            :draggable="true"
            @click="openPopup(item.id)"
      />
      <div v-if="popupVisible" class="popup">
        <div class="popup-content">
          <div class="popup-hero">
            <Item :id="-1" :color="popupItemColor" :count="-1" />
          </div>
          <hr />
          <div class="popup-desc">
            <p class="popup-name skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
          </div>
          <div class="popup-control">
            <input v-model.number="inputCount" type="number" min="0" />
            <div class="popup-buttons">

              <button @click="closePopup" class="close">Отмена</button>
              <button @click="decreaseCount" class="submit">Подтвердить</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <p class="skeleton"></p>
    </footer>



  </div>
</template>

<style scoped>
aside {
  grid-area: aside;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}

.page {
  min-height: 100vh;
  padding: 2rem;

  background-color: #1d1d1d;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "aside main"
    "footer footer"
  ;
  gap: 1.5rem;
  width: 100%;
}



aside, main, footer {
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: .8em;
  position: relative;
}

aside {
  padding: 0.87rem;
}

aside > img {
  width: 100%;
  object-fit: cover;
  border-radius: .5rem;
  margin-bottom: 1.25rem;
}

.item-detail, .item-desc, .item-meta {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
}

.item-detail > p, .item-desc > p, .item-meta > p {
  padding: 10px;

  border-radius: .5em;
}

.skeleton {
  content: " ";
  background: linear-gradient(90deg, #333333 25%, #636363 50%, #333333 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  width: 100%;
  height: 1em;
  border-radius: .8em;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.item-name {
  width: 70%;
  height: 2em;
  margin-bottom: 1.5rem;
}

.item-desc > p:not(:last-child) {
  margin-bottom: 1rem;
  width: 100%;
}

.item-desc > p:last-child {
  margin-bottom: 1.5rem;
  width: 100%;
}

.item-desc > p:nth-child(1) {
  width: 75%;
}

.item-desc > p:nth-child(2) {
  width: 90%;
}

.item-desc > p:nth-child(3) {
  width: 80%;
}

.item-desc > p:nth-child(4) {
  width: 78%;
}

.item-desc > p:nth-child(5) {
  width: 75%;
}

.item-meta > p {
  width: 50%;
  margin-bottom: .6rem;
}



main {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
}



footer {
  display: flex;
  align-items: center;
  padding: 1.125rem;
}

footer > p {
  width: 100%;
  height: 2.25rem;
  border-radius: .75rem;
}


.popup {
  position: absolute;
  right: 0;
  background-color: #262626;
  height: 100%;
  border-radius: 0 1rem 1rem 0;
  padding: 1.25rem;
  border: 1px solid #4d4d4d;
}

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-hero {
  width: 250px;
  height: 250px;
}

.popup-desc {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em
}

hr {
  width: 100%;
  margin: 1rem 0;
  border-color: #4d4d4d;
}

.popup-name {
  height: 2em;
}

.popup-control {
  background-color: #262626;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1em;
  border: 1px solid #4d4d4d;
  border-radius: 0 0 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.popup-control > input {
  padding: .4em;
  background: none;
  border: 1px solid #4d4d4d;
  border-radius: .4em;
  color: #fff;
  font-size: 1.2em;
}

.popup-buttons {
  display: grid;
  grid-template-columns: auto auto;
  gap: .5em
}

.popup-buttons > button {
  padding: 1em;
  border-radius: .8em;
}

.popup-buttons > button.close {
  background-color: #fff;
  color: #2d2d2d;
}

.popup-buttons > button.submit {
  color: #fff;
  background-color: #fa7272;
}
</style>
