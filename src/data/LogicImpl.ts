import {TrendingMovieEntity} from "./Entities";
import {AxiosInstance} from "axios";

export interface InfoManagerImplementation {
    getTrendingMovies(): Promise<Array<TrendingMovieEntity>>
}

export interface ApiManagerImplementation {
    initAxios(): AxiosInstance,
    getTrendingMovies(): Promise<Array<TrendingMovieEntity>>
}
