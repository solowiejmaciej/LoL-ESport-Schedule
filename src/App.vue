<template>
  <div class="flex min-h-screen bg-slate-700">
    <StandingsView @update:selected-league="handleLeagueIdChanged" />
    <HistoryView :league-id="this.selectedLeagueId" />
  </div>
</template>

<script>
import StandingsView from "./views/StandingsView.vue";
import HistoryView from "./views/HistoryView.vue";

export default {
  components: {
    StandingsView,
    HistoryView,
  },
  data() {
    return {
      selectedLeagueId: null,
    };
  },
  methods: {
    handleLeagueIdChanged(newLeagueId) {
      this.selectedLeagueId = newLeagueId;
    },
  },
};
</script>
