<template>
  <div
    class="min-h-screen text-white rounded flex flex-col items-center justify-center"
  >
    <div class="w-full max-w-2xl bg- rounded-lg shadow-md p-6 bg-slate-800">
      <div
        v-for="(standing, index) in standings"
        :key="'standing-' + index"
        class="mb-4"
      >
        <div
          v-for="(stage, stageIndex) in standing.stages"
          :key="'stage-' + stageIndex"
        >
          <div
            v-for="(section, sectionIndex) in stage.sections"
            :key="'section-' + sectionIndex"
          >
            <div
              v-for="(ranking, rankingIndex) in section.rankings"
              :key="'ranking-' + rankingIndex"
              class="my-4"
            >
              <h2 class="text-lg font-bold mb-2">
                Rank: {{ ranking.ordinal }}
              </h2>
              <ul class="space-y-2">
                <li
                  v-for="(team, teamIndex) in ranking.teams"
                  :key="'team-' + teamIndex"
                  class="flex items-center space-x-2"
                >
                  <img
                    :src="team.image"
                    :alt="team.name + ' logo'"
                    class="mr-2 w-10 h-10 rounded-full"
                  />
                  <span class="font-bold">{{ team.name }}</span>
                  <span class="ml-2">
                    <span class="text-green-500">{{ team.record.wins }}</span>
                    -
                    <span class="text-red-500">{{ team.record.losses }}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Standings",
  props: {
    standings: {
      required: true,
    },
  },
};
</script>
