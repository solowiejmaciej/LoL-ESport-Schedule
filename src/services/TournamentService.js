import httpClient from "./httpClient";

const END_POINT = "/getTournamentsForLeague";

const getTournamentsForLeague = async (leagueId) => {
  const response = await httpClient.get(END_POINT, {
    params: {
      leagueId: leagueId,
    },
  });
  return response.data.data.leagues[0].tournaments;
};

export const TournamentService = { getTournamentsForLeague };
