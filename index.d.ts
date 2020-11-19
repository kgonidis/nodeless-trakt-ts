export type Status =
  | "ended"
  | "returning series"
  | "canceled"
  | "in production";
export type Type = "movie" | "show" | "episode" | "person" | "list";
export type ExtendedType =
  | "full"
  | "noseasons"
  | "episodes"
  | "full,episodes"
  | "metadata";
export type ListPrivacy = "private" | "friends" | "public";
export type IdType = "trakt" | "imdb" | "tmdb" | "tvdb" | "tvrage";
export type Hdr = "dolby_vision" | "hdr10" | "hdr10_plus" | "hlg";
export type MediaType =
  | "digital"
  | "bluray"
  | "hddvd"
  | "dvd"
  | "vcd"
  | "vhs"
  | "betamax"
  | "laserdisc";
export type ProgressLastActivity = "collected" | "watched";
export type SortHow = "asc" | "desc";
export type RatingsFilter =
  | ""
  | "/1"
  | "/2"
  | "/3"
  | "/4"
  | "/5"
  | "/6"
  | "/7"
  | "/8"
  | "/9"
  | "/10";
export type AudioChannels =
  | "1.0"
  | "2.0"
  | "2.1"
  | "3.0"
  | "3.1"
  | "4.0"
  | "4.1"
  | "5.0"
  | "5.1"
  | "5.1.2"
  | "5.1.4"
  | "6.1"
  | "7.1"
  | "7.1.2"
  | "7.1.4"
  | "9.1"
  | "10.1";
export type HistoryType = "movies" | "shows" | "seasons" | "episodes";
export type CommentSortBy =
  | "newest"
  | "oldest"
  | "likes"
  | "replies"
  | "highest"
  | "lowest"
  | "plays";
export type ListSortBy =
  | "popular"
  | "likes"
  | "comments"
  | "items"
  | "added"
  | "updated";
export type SortBy =
  | "rank"
  | "added"
  | "title"
  | "released"
  | "runtime"
  | "popularity"
  | "percentage"
  | "votes"
  | "my_rating"
  | "random";
export type Audio =
  | "lpcm"
  | "mp3"
  | "mp2"
  | "aac"
  | "ogg"
  | "ogg_opus"
  | "wma"
  | "flac"
  | "dts"
  | "dts_ma"
  | "dts_hr"
  | "dts_x"
  | "auro_3d"
  | "dolby_digital"
  | "dolby_digital_plus"
  | "dolby_digital_plus_atmos"
  | "dolby_atmos"
  | "dolby_truehd"
  | "dolby_prologic";
export type Resolution =
  | "uhd_4k"
  | "hd_1080p"
  | "hd_1080i"
  | "hd_720p"
  | "sd_480p"
  | "sd_480i"
  | "sd_576p"
  | "sd_576i";
export type Rating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type ListType =
  | "all"
  | "personal"
  | "official"
  | "watchlists"
  | "recommendations";
export type CommentType = "all" | "reviews" | "shouts";
export type PeriodType = "daily" | "weekly" | "monthly" | "yearly" | "all";
type SearchIdType = "trakt" | "imdb" | "tmdb" | "tvdb";

export interface PlaybackResponse extends GenericProgress {
  id?: number;
  paused_at?: string;
  type?: string;
  action?: string;
  sharing?: ShareSettings;
}

export interface DeviceCode {
  device_code?: string;
  user_code?: string;
  verification_url?: string;
  expires_in?: number;
  interval?: number;
}

export interface SyncShow {
  ids?: ShowIds;
  seasons?: SyncSeason[];
  collected_at?: string;
  watched_at?: string;
  rated_at?: string;
  rating?: Rating;
}

export interface BaseEntity {
  title?: string;
  overview?: string;
  rating?: number;
  votes?: number;
  updated_at?: string;
  available_translations?: string[];
}

export interface Friend {
  friends_at?: string;
  user?: User;
}

export interface Connections {
  facebook?: boolean;
  twitter?: boolean;
  tumblr?: boolean;
}

export interface EpisodeCheckinResponse extends BaseCheckinResponse {
  episode?: Episode;
  show?: Show;
}

export interface Account {
  timezone?: string;
  cover_image?: string;
}

export interface ListItemRank {
  rank?: number[];
}

export interface TrendingMovie extends BaseTrendingEntity {
  movie?: Movie;
}

export interface SyncEpisode {
  season?: number;
  number?: number;
  ids?: EpisodeIds;
  collected_at?: string;
  watched_at?: string;
  rated_at?: string;
  rating?: Rating;
  media_type?: MediaType;
  resolution?: Resolution;
  hdr?: Hdr;
  audio?: Audio;
  audio_channels?: AudioChannels;
  "3d"?: boolean;
}

export interface CastMember {
  character?: string;
  movie?: Movie;
  show?: Show;
  person?: Person;
}

export interface ShareSettings {
  facebook?: boolean;
  twitter?: boolean;
  tumblr?: boolean;
}

export interface CalendarMovieEntry {
  released?: string;
  movie?: Movie;
}

export interface TraktError {
  message?: string;
}

export interface BaseIds {
  trakt?: number;
  imdb?: string;
  tmdb?: number;
}

export interface Person {
  name?: string;
  ids?: PersonIds;
  biography?: string;
  birthday?: string;
  death?: string;
  birthplace?: string;
  homepage?: string;
}

export interface SyncResponse {
  added?: SyncStats;
  existing?: SyncStats;
  deleted?: SyncStats;
  not_found?: SyncErrors;
}

export interface RatedShow extends BaseRatedEntity {
  show?: Show;
}

export interface LastActivities {
  all?: string;
  movies?: LastActivityMore;
  episodes?: LastActivityMore;
  shows?: LastActivity;
  seasons?: LastActivity;
  lists?: ListsLastActivity;
}

export interface LastActivity {
  rated_at?: string;
  watchlisted_at?: string;
  commented_at?: string;
}

export interface MovieTranslation extends Translation {
  tagline?: string;
}

export interface CheckinError {
  expires_at?: string;
}

export interface BaseShow {
  show?: Show;
  seasons?: BaseSeason[];
  last_collected_at?: string;
  listed_at?: string;
  plays?: number;
  last_watched_at?: string;
  last_updated_at?: string;
  reset_at?: string;
  aired?: number;
  completed?: number;
  hidden_seasons?: Season[];
  next_episode?: Episode;
  last_episode?: Episode;
}

export interface Show extends BaseEntity {
  year?: number;
  ids?: ShowIds;
  first_aired?: string;
  airs?: Airs;
  runtime?: number;
  certification?: string;
  network?: string;
  country?: string;
  trailer?: string;
  homepage?: string;
  status?: Status;
  language?: string;
  genres?: string[];
}

export interface Genre {
  name?: string;
  slug?: string;
}

export interface SyncItems {
  movies?: SyncMovie[];
  shows?: SyncShow[];
  episodes?: SyncEpisode[];
  people?: SyncPerson[];
  ids?: number[];
}

export interface Followed {
  approved_at?: string;
  user?: User;
}

export interface AccessTokenRefreshRequest {
  grant_type?: string;
  refresh_token?: string;
  client_id?: string;
  client_secret?: string;
  redirect_uri?: string;
}

export interface Follower {
  followed_at?: string;
  user?: User;
}

export interface ListIds {
  trakt?: number;
  slug?: string;
}

export interface SyncErrors {
  movies?: SyncMovie[];
  shows?: SyncShow[];
  seasons?: SyncSeason[];
  episodes?: SyncEpisode[];
  people?: SyncPerson[];
  ids?: number[];
}

export interface Crew {
  writing?: CrewMember[];
  production?: CrewMember[];
  directing?: CrewMember[];
  "costume & make-up"?: CrewMember[];
  art?: CrewMember[];
  sound?: CrewMember[];
  camera?: CrewMember[];
}

export interface BaseTrendingEntity {
  watchers?: number;
}

export interface TrendingShow extends BaseTrendingEntity {
  show?: Show;
}

export interface ListsLastActivity {
  liked_at?: string;
  updated_at?: string;
  commented_at?: string;
}

export interface SyncSeason {
  number?: number;
  episodes?: SyncEpisode[];
  collected_at?: string;
  watched_at?: string;
  rated_at?: string;
  rating?: Rating;
}

export interface SearchResult {
  type?: string;
  score?: number;
  movie?: Movie;
  show?: Show;
  episode?: Episode;
  person?: Person;
  list?: TraktList;
}

export interface TraktList {
  ids?: ListIds;
  name?: string;
  description?: string;
  privacy?: ListPrivacy;
  display_numbers?: boolean;
  allow_comments?: boolean;
  sort_by?: SortBy;
  sort_how?: SortHow;
  created_at?: string;
  updated_at?: string;
  item_count?: number;
  comment_count?: number;
  likes?: number;
  user?: User;
}

export interface TraktTrendingList {
  like_count: number;
  comment_count: number;
  list: TraktList;
}

export interface RatedSeason extends RatedShow {
  season?: Season;
}

export interface SyncPerson {
  ids?: PersonIds;
  name?: string;
}

export interface SyncStats {
  movies?: number;
  shows?: number;
  seasons?: number;
  episodes?: number;
  people?: number;
}

export interface TraktOAuthError {
  error?: string;
  error_description?: string;
}

export interface SyncMovie {
  ids?: MovieIds;
  collected_at?: string;
  watched_at?: string;
  rated_at?: string;
  rating?: Rating;
  media_type?: MediaType;
  resolution?: Resolution;
  hdr?: Hdr;
  audio?: Audio;
  audio_channels?: AudioChannels;
  "3d"?: boolean;
}

export interface Episode extends BaseEntity {
  season?: number;
  number?: number;
  ids?: EpisodeIds;
  number_abs?: number;
  first_aired?: string;
  comment_count?: number;
  runtime?: number;
}

export interface Settings {
  user?: User;
  account?: Account;
  connections?: Connections;
  sharing_text?: SharingText;
}

export interface Translation {
  language?: string;
  title?: string;
  overview?: string;
}

export interface ListReorderResponse {
  updated?: number;
  skipped_ids?: number[];
}

export interface ScrobbleProgress extends GenericProgress {
  app_version?: string;
  app_date?: string;
}

export interface DeviceCodeAccessTokenRequest {
  code?: string;
  client_id?: string;
  client_secret?: string;
}

export interface PersonIds extends BaseIds {
  slug?: string;
  tvrage?: string;
}

export interface EpisodeCheckin extends BaseCheckin {
  show?: Show;
  episode?: SyncEpisode;
}

export interface Builder {
  show?: Show;
  episode?: SyncEpisode;
  sharing?: ShareSettings;
  message?: string;
  venue_id?: string;
  venue_name?: string;
  app_version?: string;
  app_date?: string;
}

export interface Ratings {
  rating?: number;
  votes?: number;
  distribution?: {
    [key: string]: number;
  };
}

export interface CrewMember {
  job?: string;
  movie?: Movie;
  show?: Show;
  person?: Person;
}

export interface WatchlistedSeason {
  listed_at?: string;
  season?: Season;
  show?: Show;
}

export interface MovieIds extends BaseIds {
  slug?: string;
}

export interface MovieCheckin extends BaseCheckin {
  movie?: SyncMovie;
}

export interface Builder {
  movie?: SyncMovie;
  sharing?: ShareSettings;
  message?: string;
  venue_id?: string;
  venue_name?: string;
  app_version?: string;
  app_date?: string;
}

export interface Season {
  number?: number;
  ids?: SeasonIds;
  title?: string;
  overview?: string;
  network?: string;
  first_aired?: string;
  rating?: number;
  votes?: number;
  episode_count?: number;
  aired_episodes?: number;
  episodes?: Episode[];
}

export interface LastActivityMore extends LastActivity {
  watched_at?: string;
  collected_at?: string;
  paused_at?: string;
  hidden_at?: string;
}

export interface Credits {
  cast?: CastMember[];
  crew?: Crew;
}

export interface BaseCheckin {
  sharing?: ShareSettings;
  message?: string;
  venue_id?: string;
  venue_name?: string;
  app_version?: string;
  app_date?: string;
}

export interface ClientId {
  client_id?: string;
}

export interface BaseMovie {
  movie?: Movie;
  collected_at?: string;
  last_watched_at?: string;
  last_updated_at?: string;
  listed_at?: string;
  plays?: number;
  metadata?: Metadata;
}

export interface Comment {
  id?: number;
  parent_id?: number;
  created_at?: string;
  updated_at?: string;
  comment?: string;
  spoiler?: boolean;
  review?: boolean;
  replies?: number;
  likes?: number;
  user_rating?: number;
  user?: User;
  movie?: Movie;
  show?: Show;
  episode?: Episode;
}

export interface CommentListItem {
  type?: Type;
  movie?: Movie;
  show?: Show;
  season?: Season;
  episode?: Episode;
  list?: any;
  comment?: Comment;
}

export interface RatedMovie extends BaseRatedEntity {
  movie?: Movie;
}

export interface ListEntry {
  id?: number;
  rank?: number;
  listed_at?: string;
  type?: string;
  movie?: Movie;
  show?: Show;
  episode?: Episode;
  person?: Person;
}

export interface Movie extends BaseEntity {
  year?: number;
  ids?: MovieIds;
  certification?: string;
  tagline?: string;
  released?: string;
  runtime?: number;
  trailer?: string;
  homepage?: string;
  language?: string;
  genres?: string[];
}

export interface Images {
  avatar?: ImageSizes;
}

export interface ImageSizes {
  full?: string;
}

export interface EpisodeIds extends BaseIds {
  tvdb?: number;
  tvrage?: number;
}

export interface Stats {
  watchers?: number;
  plays?: number;
  collectors?: number;
  comments?: number;
  lists?: number;
  votes?: number;
  collected_episodes?: number;
}

export interface MovieCheckinResponse extends BaseCheckinResponse {
  movie?: Movie;
}

export interface BaseEpisode {
  number?: number;
  collected_at?: string;
  plays?: number;
  last_watched_at?: string;
  completed?: boolean;
  metadata?: Metadata;
}

export interface UserSlug {
  ME?: UserSlug;
  userSlug?: string;
}

export interface BaseCheckinResponse {
  watched_at?: string;
  sharing?: ShareSettings;
}

export interface Metadata {
  media_type?: MediaType;
  resolution?: Resolution;
  hdr?: Hdr;
  audio?: Audio;
  audio_channels?: AudioChannels;
  "3d"?: boolean;
}

export interface BaseSeason {
  number?: number;
  episodes?: BaseEpisode[];
  aired?: number;
  completed?: number;
}

export interface Airs {
  day?: string;
  time?: string;
  timezone?: string;
}

export interface RatedEpisode extends RatedShow {
  episode?: Episode;
}

export interface HistoryEntry {
  id?: number;
  watched_at?: string;
  action?: string;
  type?: string;
  episode?: Episode;
  show?: Show;
  movie?: Movie;
}

export interface AccessToken {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  created_at?: number;
}

export interface User {
  username?: string;
  private?: boolean;
  name?: string;
  vip?: boolean;
  vip_ep?: boolean;
  ids?: UserIds;
  joined_at?: string;
  location?: string;
  about?: string;
  gender?: string;
  age?: number;
  images?: Images;
}

export interface UserIds {
  slug?: string;
}

export interface WatchlistedEpisode {
  listed_at?: string;
  episode?: Episode;
  show?: Show;
}

export interface AccessTokenRequest {
  grant_type?: string;
  code?: string;
  client_id?: string;
  client_secret?: string;
  redirect_uri?: string;
}

export interface SharingText {
  watching?: string;
  watched?: string;
}

export interface SeasonIds {
  tvdb?: number;
  tmdb?: number;
  trakt?: number;
  tvrage?: number;
}

export interface ShowIds extends BaseIds {
  slug?: string;
  tvdb?: number;
  tvrage?: number;
}

export interface GenericProgress {
  episode?: SyncEpisode;
  show?: SyncShow;
  movie?: SyncMovie;
  progress?: number;
}

export interface BaseRatedEntity {
  rated_at?: string;
  rating?: Rating;
}

export interface CalendarShowEntry {
  first_aired?: string;
  episode?: Episode;
  show?: Show;
}
export interface Settings {
  client_id: string;
  client_secret: string;
  redirect_uri?: string;
  debug?: boolean;
  endpoint?: string;
  pagination?: boolean;
  useragent?: string;
}

export interface Sharing {
  twitter?: boolean;
  tumblr?: boolean;
}

export interface Extended {
  extended?: ExtendedType;
}

export interface Calendars extends Extended {
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

export interface CommentBody extends Comment {
  movie?: Movie;
  show?: Show;
  season?: Season;
  episode?: Episode;
  list?: any;
}
export interface CommentQuery {
  comment_type?: CommentType;
  type?: "all" | "movies" | "shows" | "seasons" | "episodes" | "lists";
  include_replies?: boolean;
}

export interface TypeQuery {
  type?: ListType;
}

export interface Id {
  id: string | number;
}

export interface PaginationQuery {
  page?: number | string;
  limit?: number | string;
  pagination?: boolean;
}

export interface PeriodQuery {
  period?: PeriodType;
}

export interface CommentSortQuery {
  sort?: CommentSortBy;
}

export interface ListSortQuery {
  sort?: ListSortBy;
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

export interface SearchIdQuery {
  id_type: SearchIdType;
  type?: ListType;
}

export interface SeasonQuery {
  season: number | string;
}

export interface EpisodeQuery {
  episode: number | string;
}

export interface Country {
  name: string;
  code: string;
}

export interface Language {
  name: string;
  code: string;
}

export interface PlayedMovie {
  watcher_count: number;
  play_count: number;
  collected_count: number;
  movie: Movie;
}

export interface AnticipatedMovie {
  list_count: number;
  movie: Movie;
}

export interface BoxOfficeMovie {
  revenue: number;
  movie: Movie;
}

export interface UpdatedMovie {
  updated_at: number;
  movie: Movie;
}

export interface Alias {
  title: string;
  country: string;
}

export interface PlayedShow {
  watcher_count: number;
  play_count: number;
  collector_count: number;
  collected_count: number;
  show: Show;
}

export interface AnticipatedShow {
  list_count: number;
  show: Show;
}

export interface BoxOfficeShow {
  revenue: number;
  show: Show;
}

export interface UpdatedShow {
  updated_at: number;
  show: Show;
}

export declare class Trakt {
  constructor(settings: Settings, debug?: boolean);
  calendars: {
    my: {
      shows(params?: Calendars): Promise<CalendarShowEntry[]>;
      new_shows(params?: Calendars): Promise<CalendarShowEntry[]>;
      premieres_shows(params?: Calendars): Promise<CalendarShowEntry[]>;
      movies(params?: Calendars): Promise<CalendarMovieEntry[]>;
      dvd(params?: Calendars): Promise<CalendarMovieEntry[]>;
    };
    all: {
      shows(params?: Calendars): Promise<CalendarShowEntry[]>;
      new_shows(params?: Calendars): Promise<CalendarShowEntry[]>;
      premieres_shows(params?: Calendars): Promise<CalendarShowEntry[]>;
      movies(params?: Calendars): Promise<CalendarMovieEntry[]>;
      dvd(params?: Calendars): Promise<CalendarMovieEntry[]>;
    };
  };
  checkin: {
    add(
      params: CheckinBody
    ): Promise<MovieCheckinResponse | EpisodeCheckinResponse>;
    delete(): Promise<void>;
  };
  certifications(params: { type: string }): Promise<any>;
  comments: {
    comment: {
      add(params: CommentBody): Promise<Comment>;
      get(params: Id): Promise<Comment>;
      update(params: Id & Comment): Promise<Comment>;
      remove(params: Id): Promise<void>;
    };
    replies: {
      add(params: Id & Comment): Promise<Comment>;
      get(params: Id & PaginationQuery): Promise<Comment[]>;
      update(params: Id & Comment): Promise<Comment>;
      remove(params: Id): Promise<void>;
    };
    item(
      params: Id & Extended
    ): Promise<Movie | Season | Show | TraktList | Person>;
    likes(
      params: Id & PaginationQuery
    ): Promise<{ liked_at: string; user: User }[]>;
    like: {
      add(params: Id): Promise<void>;
      remove(params: Id): Promise<void>;
    };
    trending(
      params?: CommentQuery & Extended & PaginationQuery
    ): Promise<CommentListItem[]>;
    recent(
      params?: CommentQuery & Extended & PaginationQuery
    ): Promise<CommentListItem[]>;
    updates(
      params?: CommentQuery & Extended & PaginationQuery
    ): Promise<CommentListItem[]>;
  };
  countries(params: { type: "movies" | "shows" }): Promise<Country[]>;
  genres(params: { type: "movies" | "shows" }): Promise<Genre[]>;
  languages(params: { type: "movies" | "shows" }): Promise<Language[]>;
  lists: {
    trending(params?: PaginationQuery): Promise<TraktTrendingList[]>;
    popular(params?: PaginationQuery): Promise<TraktTrendingList[]>;
  };
  movies: {
    trending(params?: PaginationQuery & Extended): Promise<TrendingMovie[]>;
    popular(params?: PaginationQuery & Extended): Promise<Movie[]>;
    played(
      params?: PeriodQuery & PaginationQuery & Extended
    ): Promise<PlayedMovie[]>;
    watched(
      params?: PeriodQuery & PaginationQuery & Extended
    ): Promise<PlayedMovie[]>;
    collected(
      params?: PeriodQuery & PaginationQuery & Extended
    ): Promise<PlayedMovie[]>;
    anticipated(
      params?: PaginationQuery & Extended
    ): Promise<AnticipatedMovie[]>;
    boxoffice(params?: Extended): Promise<BoxOfficeMovie[]>;
    updates(
      params?: { start_date?: string } & PaginationQuery & Extended
    ): Promise<UpdatedMovie[]>;
    summary(params: Id & Extended): Promise<Movie>;
    aliases(params: Id): Promise<Alias[]>;
    releases(params: Id & { country?: string }): Promise<any>;
    translations(
      params: Id & { language?: string }
    ): Promise<MovieTranslation[]>;
    comments(
      params: Id & CommentSortQuery & PaginationQuery
    ): Promise<Comment[]>;
    lists(params: Id & TypeQuery & ListSortQuery): Promise<TraktList[]>;
    people(params: Id & Extended): Promise<Credits>;
    ratings(params: Id): Promise<Ratings>;
    related(params: Id & Extended & PaginationQuery): Promise<Movie[]>;
    stats(params: Id): Promise<Stats>;
    watching(params: Id & Extended): Promise<User[]>;
  };
  networks(): Promise<{ name: string }[]>;
  people: {
    summary(params: Id & Extended): Promise<Person>;
    shows(params: Id & Extended): Promise<Credits>;
    movies(params: Id & Extended): Promise<Credits>;
    lists(params: Id & TypeQuery & ListSortQuery): Promise<TraktList[]>;
  };
  recommendations: {
    movies: {
      get(
        params: Extended & {
          limit?: number | string;
          ignore_collected?: boolean;
        }
      ): Promise<Movie[]>;
      hide(params: Id): Promise<void>;
    };
    shows: {
      get(
        params: Extended & {
          limit?: number | string;
          ignore_collected?: boolean;
        }
      ): Promise<Show[]>;
      hide(params: Id): Promise<void>;
    };
  };
  scrobble: {
    start(params: ScrobbleBody): Promise<PlaybackResponse>;
    pause(params: ScrobbleBody): Promise<PlaybackResponse>;
    stop(params: ScrobbleBody): Promise<PlaybackResponse>;
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
        PaginationQuery &
        Extended
    ): Promise<SearchResult[]>;
    id(
      params: SearchIdQuery & PaginationQuery & Extended
    ): Promise<SearchResult[]>;
  };
  shows: {
    trending(params?: PaginationQuery & Extended): Promise<TrendingShow[]>;
    popular(params?: PaginationQuery & Extended): Promise<Show[]>;
    played(
      params?: PeriodQuery & PaginationQuery & Extended
    ): Promise<PlayedShow[]>;
    watched(
      params?: PeriodQuery & PaginationQuery & Extended
    ): Promise<PlayedShow[]>;
    collected(
      params?: PeriodQuery & PaginationQuery & Extended
    ): Promise<PlayedShow[]>;
    anticipated(
      params?: PaginationQuery & Extended
    ): Promise<AnticipatedShow[]>;
    updates(
      params?: { start_date?: string } & PaginationQuery & Extended
    ): Promise<UpdatedShow[]>;
    summary(params: Id & Extended): Promise<Show>;
    aliases(params: Id): Promise<Alias>;
    translations(params: Id & { language?: string }): Promise<Translation[]>;
    comments(
      params: Id & CommentSortQuery & PaginationQuery
    ): Promise<Comment[]>;
    lists(params: Id & TypeQuery & ListSortQuery): Promise<TraktList[]>;
    progress: {
      collection: any;
      watched: any;
    };
    people(params: Id & Extended): Promise<Credits>;
    ratings(params: Id): Promise<Ratings>;
    related(params: Id & Extended & PaginationQuery): Promise<Show[]>;
    stats(params: Id): Promise<Stats>;
    watching(params: Id & Extended): Promise<User[]>;
    next_episode(params: Id & Extended): Promise<Show>;
    last_episode(params: Id & Extended): Promise<Show>;
  };
  seasons: {
    summary(params: Id & Extended): Promise<Season[]>;
    season(
      params?: Id & SeasonQuery & Extended & { translations?: string }
    ): Promise<Episode[]>;
    comments(
      params: Id & SeasonQuery & CommentSortQuery & PaginationQuery
    ): Promise<Comment[]>;
    lists(
      params: Id & SeasonQuery & TypeQuery & ListSortQuery & PaginationQuery
    ): Promise<TraktList[]>;
    people(params: Id & SeasonQuery & Extended): Promise<Credits>;
    ratings(params: Id & SeasonQuery): Promise<Ratings>;
    watching(params: Id & SeasonQuery & Extended): Promise<User[]>;
  };
  episodes: {
    summary(
      params: Id & SeasonQuery & EpisodeQuery & Extended
    ): Promise<Episode>;
    translations(
      params: Id & SeasonQuery & EpisodeQuery & { language?: string }
    ): Promise<Translation[]>;
    comments(
      params: Id &
        SeasonQuery &
        EpisodeQuery &
        CommentSortQuery &
        PaginationQuery
    ): Promise<Comment[]>;
    lists(
      params: Id &
        SeasonQuery &
        EpisodeQuery &
        TypeQuery &
        ListSortQuery &
        PaginationQuery
    ): Promise<TraktList[]>;
    people(
      params: Id & SeasonQuery & EpisodeQuery & { extended?: "guest_stars" }
    ): Promise<Credits>;
    ratings(params: Id & SeasonQuery & EpisodeQuery): Promise<Ratings>;
    stats(params: Id & SeasonQuery & EpisodeQuery): Promise<Stats>;
    watching(
      params: Id & SeasonQuery & EpisodeQuery & Extended
    ): Promise<User[]>;
  };
  sync: any;
  users: any;
  get_url(): string;
  exchange_code(code: string, state?: string): Promise<AccessToken>;
  get_codes(): Promise<DeviceCode>;
  poll_access(poll: DeviceCode): Promise<any>;
  refresh_token(): Promise<AccessToken>;
  import_token(token: AccessToken): Promise<AccessToken>;
  export_token(): {
    access_token: string;
    expires: number;
    refresh_token: string;
  };
}
