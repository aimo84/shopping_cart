<template>
  <div>
        <button
            :data-test-accessory-id="item.matcode"
            class="flex flex-col gap-2 rounded-lg p-3 lg:p-4 text-center relative h-full hover:accessories-shadow-thick-red-500"
            :class="{
            'accessories-shadow-thick-red-500': accessories.find((e) => e === item.matcode)
            }"
            @click="toggleAccessories(item)"
        >
            <!-- <div class="bg-red-600 text-white absolute px-2 rounded">Tag</div> -->
            <img :src="item.image_url" class="w-full" :alt="item.name" >
            <div class="grid gap-1 flex-1 w-full">
            <div class="accessories-name">{{ item.name }}</div>
            <div class="text-4xl text-red font-bold top-0">{{ item.price.toLocaleString() }} {{ Locale.baht[$i18n.locale ]}}</div>
            </div>
            <div
            v-if="accessories.find((e) => e === item.matcode)"
            class="border border-transparent px-3 py-1 rounded-full w-[80%] m-auto text-white bg-red-pink-gradient"
            >
            {{ Locale.selected[$i18n.locale] }}
            </div>
            <div
            v-else
            class="border border-gray-700 px-3 py-1 rounded-full w-[80%] m-auto text-gray-600"
            >{{ Locale.select[$i18n.locale] }}</div>
        </button>
  </div>
</template>

<script>
  export default {
    props: [
      'item',
      'accessories',
      'Locale'
    ],
    methods: {
      toggleAccessories (item) {
        const selectedIndex = this.accessories.findIndex((e) => e === item.matcode)
        if (selectedIndex >= 0) return this.accessories.splice(selectedIndex, 1)
        return this.accessories.push(item.matcode)
      }
    }
  }
</script>

<style lang="scss" scoped>
    // @import "./styles.scss";
</style>
