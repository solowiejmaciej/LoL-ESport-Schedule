<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Select a league
    </button>
    <div
      v-if="isOpen"
      class="absolute bg-slate-800 mt-2 rounded shadow p-2 max-h-80 min-w-80 overflow-auto"
    >
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search leagues"
        class="p-2 mb-2 w-full bg-slate-800 text-white rounded"
      />
      <div
        v-for="league in filteredLeagues"
        :key="league.id"
        class="flex items-center space-x-2 cursor-pointer p-4 hover:bg-slate-600 bg-slate-800 text-white rounded"
        @click="selectLeague(league.id)"
      >
        <img :src="league.image" class="w-10 h-10" />
        <span class="text-lg">{{ league.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { leagues } from "../constants/leagues.js";

export default {
  data() {
    return {
      leagues: leagues,
      isOpen: false,
      selectedLeague: null,
      searchQuery: "",
    };
  },
  computed: {
    filteredLeagues() {
      return this.leagues.filter((league) =>
        league.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    selectLeague(id) {
      this.selectedLeague = id;
      this.$emit("update:selectedLeague", id);
      this.isOpen = false;
    },
    emits: ["update:selectedLeague"],
  },
};
</script>
