<template>
  <div>
    <h1>{{ league.name }}</h1>
    <img :src="league.image" class="w-10 h-10" />
  </div>
</template>

<script>
import { leagues } from "../constants/leagues.js";

export default {
  props: {
    leagueId: {
      type: String,
      required: true,
    },
  },
  name: "League",
  components: {},
  data() {
    return {
      league: leagues.find((league) => league.id === this.leagueId),
    };
  },
  mounted() {},
  methods: {},
  watch: {
    leagueId(newVal, oldVal) {
      this.league = leagues.find((league) => league.id === newVal);
    },
  },
};
</script>
