import { BestResultSearchControllerSearchV1Data, MoviesSearchControllerSearchV1Data, PersonsSearchControllerSearchV1Data, PlaylistsSearchControllerSearchV1Data, TvSeriesSearchControllerSearchV1Data, UsersSearchControllerSearchV1Data } from './__generated__';
import { client } from './__generated__/client.gen';
import { 
  moviesSearchControllerSearchV1,
  tvSeriesSearchControllerSearchV1,
  personsSearchControllerSearchV1,
  playlistsSearchControllerSearchV1,
  usersSearchControllerSearchV1,
  bestResultSearchControllerSearchV1
} from './__generated__/sdk.gen';

export function createClient(config?: {
  baseUrl?: string;
  token?: string;
  language?: string;
  version?: 'v1';
}) {
  if (config) {
    client.setConfig({
      baseUrl: config.baseUrl || 'https://api.recomend.app',
      headers: {
        ...(config.token && { Authorization: `Bearer ${config.token}` }),
        ...(config.language && { language: config.language }),
      },
    });
  }

  return {
    // Search methods
	search: {
		movies: (params: Omit<MoviesSearchControllerSearchV1Data, 'url'>) => moviesSearchControllerSearchV1(params),
		tvSeries: (params: Omit<TvSeriesSearchControllerSearchV1Data, 'url'>) => tvSeriesSearchControllerSearchV1(params),
		persons: (params: Omit<PersonsSearchControllerSearchV1Data, 'url'>) => personsSearchControllerSearchV1(params),
		playlists: (params: Omit<PlaylistsSearchControllerSearchV1Data, 'url'>) => playlistsSearchControllerSearchV1(params),
		users: (params: Omit<UsersSearchControllerSearchV1Data, 'url'>) => usersSearchControllerSearchV1(params),
		bestResult: (params: Omit<BestResultSearchControllerSearchV1Data, 'url'>) => bestResultSearchControllerSearchV1(params),
	},
    // Utility methods
    setToken: (token: string) => {
      client.setConfig({
        headers: {
          ...client.getConfig().headers,
          Authorization: `Bearer ${token}`,
        },
      });
    },
    
    setLanguage: (language: string) => {
      client.setConfig({
        headers: {
          ...client.getConfig().headers,
          language,
        },
      });
    },
    
    client,
  };
}

export * from './__generated__/types.gen';

export default createClient;