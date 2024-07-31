import { defineStore } from 'pinia'
import {useLocalStorage} from "@vueuse/core";

type Item = {
  id: number
  color: string
  count: number
}

export const useItemsStore = defineStore("items", {
  state: () => ({
    inventory: useLocalStorage<Array<Item>>("items", Array(25).fill(null).map((item, indx) => {
      return {
        color: "",
        count: -1,
        id: indx
      }
    }))
  }),
  actions: {
    addItem(id: number) {
      let item = this.inventory[this.inventory.indexOf(this.inventory.filter((item) => item.id == id)[0])]
      item.color = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`
      item.count = Math.floor(Math.random() * 10) + 1
    },
    moveItem(fromId: number, toId: number) {
      const fromIndex = this.inventory.findIndex(item => item.id === fromId);
      const toIndex = this.inventory.findIndex(item => item.id === toId);

      if (fromIndex !== -1 && toIndex !== -1) {
        const temp = this.inventory[fromIndex];
        this.inventory[fromIndex] = this.inventory[toIndex];
        this.inventory[toIndex] = temp;
      }
    },
    changeItem(id: number, count: number) {
      const item = this.inventory.find(item => item.id === id);
      if (item) {
        item.count = Math.max(0, item.count - count);
      }
    }
  }
})