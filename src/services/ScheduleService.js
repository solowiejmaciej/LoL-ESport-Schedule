import httpClient from "./httpClient";

const END_POINT = "/getSchedule";

const getSchedule = async (leagueId) => {
  const response = await httpClient.get(END_POINT, {
    params: {
      leagueId: leagueId,
    },
  });
  return response.data.data.schedule;
};

export const scheduleService = { getSchedule };
