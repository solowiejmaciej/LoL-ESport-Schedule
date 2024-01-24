<template>
  <div class="relative">
    <div class="flex items-center space-x-2"></div>
    <button
      @click="isOpen = !isOpen"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Select a tournament
    </button>
    <div
      v-if="isOpen"
      class="absolute bg-slate-800 mt-2 rounded shadow p-2 max-h-80 min-w-80 overflow-auto"
    >
      <div
        v-for="tournament in tournaments"
        :key="tournament.id"
        class="flex items-center space-x-2 cursor-pointer p-4 hover:bg-slate-600 bg-slate-800 text-white rounded"
        @click="handleTournamentSelect(tournament)"
      >
        <span class="text-lg">
          {{
            tournament.slug
              .split("_")
              .map((word, index) => (index === 0 ? word.toUpperCase() : word))
              .join(" ")
          }}
        </span>
      </div>
    </div>
  </div>
  <div class="flex items-center space-x-2">
    <span
      class="text-lg font-bold text-white bg-slate-800 px-2 py-1 rounded ml-2"
    >
      {{ formattedTournamentName }}
    </span>
  </div>
</template>

<script>
import { TournamentService } from "../services/TournamentService.js";

export default {
  computed: {
    formattedTournamentName() {
      if (!this.selectedTournament) return "";
      return this.selectedTournament.slug
        .split("_")
        .map((word, index) => (index === 0 ? word.toUpperCase() : word))
        .join(" ");
    },
  },
  name: "TournamentSelector",
  emits: ["update:selectedTournament"],
  methods: {
    handleTournamentSelect(tournament) {
      this.selectedTournament = tournament;
      this.$emit("update:selectedTournament", tournament.id);
      console.warn(tournament.id);
      this.isOpen = false;
    },
  },
  props: {
    leagueId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tournaments: [],
      isOpen: false,
      selectedTournament: null,
    };
  },
  watch: {
    async leagueId(newVal, oldVal) {
      this.tournaments = await TournamentService.getTournamentsForLeague(
        newVal
      );
      this.selectedTournament = this.tournaments[0];
      this.$emit("update:selectedTournament", this.selectedTournament.id);
    },
  },
  async mounted() {
    this.tournaments = await TournamentService.getTournamentsForLeague(
      this.leagueId
    );
    this.selectedTournament = this.tournaments[0];
    this.$emit("update:selectedTournament", this.selectedTournament.id);
  },
};
</script>
