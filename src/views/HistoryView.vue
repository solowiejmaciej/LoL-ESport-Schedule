<template>
  <div class="flex justify-center w-full pt-10">
    <div class="text-center">
      <span
        class="font-bold text-white bg-slate-800 p-4 rounded-lg text-center text-4xl"
      >
        Upcoming matches
      </span>
      <div class="flex flex-col items-center justify-center space-y-4 mt-4">
        <Match
          v-for="match in unstartedMatches"
          :key="match.id"
          :event="match"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { scheduleService } from "../services/ScheduleService.js";
import Match from "../components/Match.vue";

export default {
  components: {
    Match,
  },
  name: "HistoryView",
  props: {
    leagueId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      schedule: [],
      unstartedMatches: [],
      completedMatches: [],
    };
  },

  async mounted() {
    this.schedule = await scheduleService.getSchedule(this.leagueId);
    this.unstartedMatches = this.schedule.events.filter(
      (event) => event.state === "unstarted"
    );
    this.completedMatches = this.schedule.events.filter(
      (event) => event.state === "completed"
    );
  },

  watch: {
    async leagueId(newVal, oldVal) {
      this.schedule = await scheduleService.getSchedule(newVal);
      this.unstartedMatches = this.schedule.events.filter(
        (event) => event.state === "unstarted"
      );
      this.completedMatches = this.schedule.events.filter(
        (event) => event.state === "completed"
      );
    },
  },
};
</script>
