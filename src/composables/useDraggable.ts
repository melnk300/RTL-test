// useDraggable.ts
import { ref } from 'vue';
import { useItemsStore } from "@/stores/items";

export function useDraggable() {
  const draggingItem = ref<number | null>(null);
  const itemsStore = useItemsStore();

  const onDragStart = (id: number) => {
    draggingItem.value = id;
    console.log("draffingItem on start ", draggingItem.value)
  };

  const onDrop = (id: number) => {
    console.log(id, draggingItem.value)
    if (draggingItem.value !== null) {
      itemsStore.moveItem(draggingItem.value, id);
      draggingItem.value = null;
    }
  };

  return {
    draggingItem,
    onDragStart,
    onDrop
  };
}