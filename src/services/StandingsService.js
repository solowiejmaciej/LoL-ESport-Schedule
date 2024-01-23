import httpClient from "./httpClient";

const END_POINT = "/getStandings";

const getStandings = async (tournamentId) => {
  const response = await httpClient.get(END_POINT, {
    params: {
      tournamentId: tournamentId,
    },
  });
  return response.data.data.standings;
};

export const standingsService = { getStandings };
