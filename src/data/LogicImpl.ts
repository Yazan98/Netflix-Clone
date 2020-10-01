import {MovieEntity} from "./Entities";
import {AxiosInstance} from "axios";

export interface InfoManagerImplementation {
    getTrendingMovies(): Promise<Array<MovieEntity>>
}

export interface ApiManagerImplementation {
    initAxios(): AxiosInstance,
    getTrendingMovies(): Promise<Array<MovieEntity>>
}
