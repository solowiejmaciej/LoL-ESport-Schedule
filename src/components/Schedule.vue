<template>
  <div>Schedule for {{ leagueId }}</div>
</template>

<script>
export default {
  name: "Schedule",
  props: {
    leagueId: {
      type: String,
      required: true,
    },
  },
};
</script>
