import { BestResultSearchControllerSearchV1Data, CreateReviewDto, MoviesSearchControllerSearchV1Data, PersonsSearchControllerSearchV1Data, PlaylistsSearchControllerSearchV1Data, TvSeriesSearchControllerSearchV1Data, UsersSearchControllerSearchV1Data } from './__generated__';
import { client } from './__generated__/client.gen';
import { 
  bestResultSearchControllerSearchV1,
  movieReviewsControllerUpsertMovieReviewV1,
  moviesSearchControllerSearchV1,
  personsSearchControllerSearchV1,
  playlistsSearchControllerSearchV1,
  tvSeriesReviewsControllerUpsertTvSeriesReviewV1,
  tvSeriesSearchControllerSearchV1,
  usersSearchControllerSearchV1
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
    movies: {
      review: {
        upsert: (movieId: number, data: CreateReviewDto) => movieReviewsControllerUpsertMovieReviewV1({ path: { movieId }, body: data }),
      }
    },
    tvSeries: {
      review: {
        upsert: (tvSeriesId: number, data: CreateReviewDto) => tvSeriesReviewsControllerUpsertTvSeriesReviewV1({ path: { tvSeriesId }, body: data }),
      }
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

export type ApiClient = ReturnType<typeof createClient>;

export * from './__generated__/types.gen';

export default createClient;