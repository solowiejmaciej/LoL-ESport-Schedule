<template>
  <div
    class="flex flex-col items-center justify-center p-4 bg-slate-800 rounded-lg shadow-md"
  >
    <p class="text-white text-sm mb-4">{{ formattedStartTime }}</p>
    <div class="flex items-center justify-center space-x-4">
      <div class="flex flex-col items-center justify-center">
        <img
          :src="event.match.teams[0].image"
          alt="Team 1 Logo"
          class="w-10 h-10 mb-2"
        />
        <p class="w-32 text-center text-sm font-semibold text-white">
          {{ event.match.teams[0].name }}
        </p>
      </div>
      <p class="text-xl font-bold text-white">VS</p>
      <div class="flex flex-col items-center justify-center">
        <img
          :src="event.match.teams[1].image"
          alt="Team 2 Logo"
          class="w-10 h-10 mb-2"
        />
        <p class="w-32 text-center text-sm font-semibold text-white">
          {{ event.match.teams[1].name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Match",
  props: ["event"],
  computed: {
    formattedStartTime() {
      return this.event.startTime.replace("T", " ").replace("Z", "");
    },
  },
};
</script>
