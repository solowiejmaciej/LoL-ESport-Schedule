<template>
  <div class="min-h-screen bg-slate-80 pl-8 flex justify-center items-center">
    <div class="bg-slate-80 rounded-lg shadow-md p-6">
      <div class="flex items-center justify-center mb-4">
        <div class="flex items-center mr-4">
          <League :leagueId="selectedLeagueId" />
        </div>
        <div class="flex items-center mr-4">
          <LeagueSelector @update:selectedLeague="updateLeagueId" />
        </div>
        <div class="flex items-center">
          <TournamentSelector
            :leagueId="selectedLeagueId"
            @update:selectedTournament="updateTournamentId"
          />
        </div>
      </div>
      <Standings :standings="standings" class="w-full mt-2" />
    </div>
  </div>
</template>
<script>
import LeagueSelector from "../components/LeagueSelector.vue";
import TournamentSelector from "../components/TournamentSelector.vue";
import Standings from "../components/Standings.vue";
import League from "../components/League.vue";
import { standingsService } from "../services/StandingsService.js";

export default {
  name: "StandingsView",
  components: {
    LeagueSelector,
    Standings,
    League,
    TournamentSelector,
  },
  emits: ["update:selectedLeague"],
  data() {
    return {
      selectedLeagueId: "98767991302996019",
      standings: [],
      tournamentId: null,
    };
  },
  methods: {
    updateLeagueId(newLeagueId) {
      this.selectedLeagueId = newLeagueId;
      this.$emit("update:selectedLeague", newLeagueId);
    },
    async updateTournamentId(newTournamentId) {
      this.standings = await standingsService.getStandings(newTournamentId);
      this.tournamentId = newTournamentId;
    },
  },
  async mounted() {
    this.$emit("update:selectedLeague", this.selectedLeagueId);
  },
};
</script>
