export interface Settings {
  client_id: string;
  client_secret: string;
  redirect_uri?: string;
  debug?: boolean;
  endpoint?: string;
  pagination?: boolean;
  useragent?: string;
}

export interface Movie {
  title: string;
  year: number;
  ids: {
    trakt: number;
    slug: string;
    imdb: string;
    tmdb: number;
  };
}

export interface Show {
  title: string;
  year: number;
  ids: {
    trakt: number;
    slug: string;
    tvdb: number;
    imdb: string;
    tmdb: number;
  };
}

export interface Season {
  number: 0;
  ids: {
    trakt: number;
    tvdb: number;
    tmdb: number;
  };
}

export interface Episode {
  season: number;
  number: number;
  title: string;
  ids: {
    trakt: number;
    tvdb: number;
    imdb: string;
    tmdb: number;
  };
}

export interface Person {
  name: string;
  ids: {
    trakt: number;
    slug: string;
    imdb: string;
    tmdb: number;
  };
}

export interface Sharing {
  twitter?: boolean;
  tumblr?: boolean;
}

export interface ExtFull {
  extended: "full";
}

export interface ExtEpisodes {
  extended: "full" | "episodes";
}

export interface Calendars extends ExtFull {
  start_date: string;
  days: string;
}

export interface CheckinBody {
  movie?: Movie;
  episode?: Episode;
  sharing?: Sharing;
  message?: string;
  venue_id?: string;
  venue_name?: string;
  app_version?: string;
  app_date?: string;
}

export interface ScrobbleBody {
  movie?: Movie;
  episode?: Episode;
  progress?: number;
  app_version?: string;
  app_date?: string;
}

export interface Comment {
  comment?: string;
  spoiler?: boolean;
  review?: string;
}

export type CommentType = "all" | "reviews" | "shouts";

export interface CommentBody extends Comment {
  movie?: Movie;
  show?: Show;
  season?: Season;
  episode?: Episode;
  list?: any;
}
export interface CommentQuery {
  comment_type?: CommentType;
  type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "listsExtFull";
  include_replies?: boolean;
}

export type TypeType =
  | "all"
  | "personal"
  | "official"
  | "watchlists"
  | "recommendations";

export interface Type {
  type?: TypeType;
}

export interface Id {
  id: string | number;
}

export interface Pagination {
  page?: number | string;
  limit?: number | string;
  pagination?: boolean;
}

export type PeriodType = "daily" | "weekly" | "monthly" | "yearly" | "all";

export interface Period {
  period?: PeriodType;
}

export type SortType =
  | "newest"
  | "oldest"
  | "likes"
  | "replies"
  | "highest"
  | "lowest"
  | "plays";

export interface Sort {
  sort?: SortType;
}

export interface MovieQuery {
  type: "movie";
  fields?:
    | "title"
    | "tagline"
    | "overview"
    | "people"
    | "translations"
    | "aliases";
}

export interface ShowQuery {
  type: "show";
  fields: "title" | "overview" | "people" | "translations" | "aliases";
}

export interface EpisodeQuery {
  type: "episode";
  fields?: "title" | "overview";
}

export interface PersonQuery {
  type: "person";
  fields?: "name" | "biography";
}

export interface ListQuery {
  type: "list";
  fields?: "name" | "description";
}

type IdType = "trakt" | "imdb" | "tmdb" | "tvdb";

export interface SearchId {
  id_type: IdType;
  type?: TypeType;
}

export interface SeasonQuery {
  season: number | string;
}

export interface EpisodeQuery {
  episode: number | string;
}

declare class Trakt {
  constructor(settings: Settings, debug?: boolean);
  calendars: {
    my: {
      shows(params?: Calendars): Promise<any>;
      new_shows(params?: Calendars): Promise<any>;
      premieres_shows(params?: Calendars): Promise<any>;
      movies(params?: Calendars): Promise<any>;
      dvd(params?: Calendars): Promise<any>;
    };
    all: {
      shows(params?: Calendars): Promise<any>;
      new_shows(params?: Calendars): Promise<any>;
      premieres_shows(params?: Calendars): Promise<any>;
      movies(params?: Calendars): Promise<any>;
      dvd(params?: Calendars): Promise<any>;
    };
  };
  checkin: {
    add(params: CheckinBody): Promise<any>;
    delete(): Promise<any>;
  };
  certifications(params: { type: string }): Promise<any>;
  comments: {
    comment: {
      add(params: CommentBody): Promise<any>;
      get(params: Id): Promise<any>;
      update(params: Id & Comment): Promise<any>;
      remove(params: Id): Promise<any>;
    };
    replies: {
      add(params: Id & Comment): Promise<any>;
      get(params: Id & Pagination): Promise<any>;
      update(params: Id & Comment): Promise<any>;
      remove(params: Id): Promise<any>;
    };
    item(params: Id & ExtFull): Promise<any>;
    likes(params: Id & Pagination): Promise<any>;
    like: {
      add(params: Id): Promise<any>;
      remove(params: Id): Promise<any>;
    };
    trending(params?: CommentQuery & ExtFull & Pagination): Promise<any>;
    recent(params?: CommentQuery & ExtFull & Pagination): Promise<any>;
    updates(params?: CommentQuery & ExtFull & Pagination): Promise<any>;
  };
  countries(params: { type: "movies" | "shows" }): Promise<any>;
  genres(params: { type: "movies" | "shows" }): Promise<any>;
  languages(params: { type: "movies" | "shows" }): Promise<any>;
  lists: {
    trending(params?: Pagination): Promise<any>;
    popular(params?: Pagination): Promise<any>;
  };
  movies: {
    trending(params?: Pagination & ExtFull): Promise<any>;
    popular(params?: Pagination & ExtFull): Promise<any>;
    played(params?: Period & Pagination & ExtFull): Promise<any>;
    watched(params?: Period & Pagination & ExtFull): Promise<any>;
    collected(params?: Period & Pagination & ExtFull): Promise<any>;
    anticipated(params?: Pagination & ExtFull): Promise<any>;
    boxoffice(params?: ExtFull): Promise<any>;
    updates(
      params?: { start_date?: string } & Pagination & ExtFull
    ): Promise<any>;
    summary(params: Id & ExtFull): Promise<any>;
    aliases(params: Id): Promise<any>;
    releases(params: Id & { country?: string }): Promise<any>;
    translations(params: Id & { language?: string }): Promise<any>;
    comments(params: Id & Sort & Pagination): Promise<any>;
    lists(params: Id & Type & Sort): Promise<any>;
    people(params: Id & ExtFull): Promise<any>;
    ratings(params: Id): Promise<any>;
    related(params: Id & ExtFull & Pagination): Promise<any>;
    stats(params: Id): Promise<any>;
    watching(params: Id & ExtFull): Promise<any>;
  };
  networks(): Promise<any>;
  people: {
    summary(params: Id & ExtFull): Promise<any>;
    shows(params: Id & ExtFull): Promise<any>;
    movies(params: Id & ExtFull): Promise<any>;
    shows(params: Id & ExtFull): Promise<any>;
    lists(params: Id & Type & Sort): Promise<any>;
  };
  recommendations: {
    movies: {
      get(
        params: ExtFull & {
          limit?: number | string;
          ignore_collected?: boolean;
        }
      ): Promise<any>;
      hide(params: Id): Promise<any>;
    };
    shows: {
      get(
        params: ExtFull & {
          limit?: number | string;
          ignore_collected?: boolean;
        }
      ): Promise<any>;
      hide(params: Id): Promise<any>;
    };
  };
  scrobble: {
    start(params: ScrobbleBody): Promise<any>;
    pause(params: ScrobbleBody): Promise<any>;
    stop(params: ScrobbleBody): Promise<any>;
  };
  search: {
    text(
      params: (
        | MovieQuery
        | ShowQuery
        | EpisodeQuery
        | PersonQuery
        | ListQuery
      ) &
        Pagination &
        ExtFull
    ): Promise<any>;
    id(params: SearchId & Pagination & ExtFull): Promise<any>;
  };
  shows: {
    trending(params?: Pagination & ExtFull): Promise<any>;
    popular(params?: Pagination & ExtFull): Promise<any>;
    played(params?: Period & Pagination & ExtFull): Promise<any>;
    watched(params?: Period & Pagination & ExtFull): Promise<any>;
    collected(params?: Period & Pagination & ExtFull): Promise<any>;
    anticipated(params?: Pagination & ExtFull): Promise<any>;
    updates(
      params?: { start_date?: string } & Pagination & ExtFull
    ): Promise<any>;
    summary(params: Id & ExtFull): Promise<any>;
    aliases(params: Id): Promise<any>;
    releases(params: Id & { country?: string }): Promise<any>;
    translations(params: Id & { language?: string }): Promise<any>;
    comments(params: Id & Sort & Pagination): Promise<any>;
    lists(params: Id & Type & Sort): Promise<any>;
    progress: {
      collection: any;
      watched: any;
    };
    people(params: Id & ExtFull): Promise<any>;
    ratings(params: Id): Promise<any>;
    related(params: Id & ExtFull & Pagination): Promise<any>;
    stats(params: Id): Promise<any>;
    watching(params: Id & ExtFull): Promise<any>;
    next_episode(params: Id & ExtFull): Promise<any>;
    last_episode(params: Id & ExtFull): Promise<any>;
  };
  seasons: {
    summary(params: Id & ExtEpisodes): Promise<any>;
    season(
      params?: Id & SeasonQuery & ExtFull & { translations?: string }
    ): Promise<any>;
    comments(params: Id & SeasonQuery & Sort & Pagination): Promise<any>;
    lists(params: Id & SeasonQuery & Type & Sort & Pagination): Promise<any>;
    people(
      params: Id & SeasonQuery & { extended?: "guest_stars" }
    ): Promise<any>;
    ratings(params: Id & SeasonQuery): Promise<any>;
    watching(params: Id & SeasonQuery & ExtFull): Promise<any>;
  };
  episodes: {
    summary(params: Id & SeasonQuery & EpisodeQuery & ExtFull): Promise<any>;
    translations(
      params: Id & SeasonQuery & EpisodeQuery & { language?: string }
    ): Promise<any>;
    comments(
      params: Id & SeasonQuery & EpisodeQuery & Sort & Pagination
    ): Promise<any>;
    lists(
      params: Id & SeasonQuery & EpisodeQuery & Type & Sort & Pagination
    ): Promise<any>;
    people(
      params: Id & SeasonQuery & EpisodeQuery & { extended?: "guest_stars" }
    ): Promise<any>;
    ratings(params: Id & SeasonQuery & EpisodeQuery): Promise<any>;
    stats(params: Id & SeasonQuery & EpisodeQuery): Promise<any>;
    watching(params: Id & SeasonQuery & EpisodeQuery & ExtFull): Promise<any>;
  };
  sync: {};
}

export default Trakt;
