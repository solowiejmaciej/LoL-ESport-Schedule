<template>
  <div>history!</div>
</template>

<script>
import { scheduleService } from "../services/ScheduleService.js";

export default {
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
