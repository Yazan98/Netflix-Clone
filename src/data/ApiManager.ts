import {ApiManagerImplementation} from "./LogicImpl";
import {MovieEntity, TrendingResponse, TvShowEntity, TvShowsResponse} from "./Entities";
import {InfoManager} from "./InfoManager";
import {AxiosInstance} from "axios";

export class ApiManager implements ApiManagerImplementation {

    //TODO: Replace Auth Data And Deactivate Them
    private axios = require('axios').default;
    private BASE_URL = "https://api.themoviedb.org/3/"
    private AUTH_TOKEN_V4 = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmJmNGFlYTdkOWFhYTg5ZTc1ZGVmYzJhMWEzZGZkOSIsInN1YiI6IjVmNjMxYjc3MTY4NGY3MDAzOTQ4OGI5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MgNX6lKPgu9WTIgYGq_n9y4CNABoUNukT_keY1xvIj0"
    private TRENDING_API_LINK = `${(this.BASE_URL)}trending/all/day?api_key=${InfoManager.PROJECT_API_KEY}`
    private POPULAR_MOVIES_API_LINK = `${(this.BASE_URL)}discover/movie?api_key=${InfoManager.PROJECT_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    private TOP_RATED_API_LINK = `${(this.BASE_URL)}movie/top_rated?api_key=${InfoManager.PROJECT_API_KEY}&language=en-US&page=1`
    private LATEST_API_LINK = `${(this.BASE_URL)}movie/now_playing?api_key=${InfoManager.PROJECT_API_KEY}&language=en-US`
    private SEARCH_MOVIE_API_LINK = `${(this.BASE_URL)}search/movie?api_key=${InfoManager.PROJECT_API_KEY}&language=en-US&page=1&include_adult=false`
    private TV_SHOWS_API_LINK = `${(this.BASE_URL)}tv/popular?api_key=${InfoManager.PROJECT_API_KEY}&language=en-US`

    initAxios(): AxiosInstance {
     return this.axios.create({
            baseURL: this.BASE_URL,
            timeout: 5000,
            headers: {'Authorization': this.AUTH_TOKEN_V4}
        });
    }

    async getTrendingMovies(): Promise<Array<MovieEntity>> {
        return await this.initAxios().get<TrendingResponse>(this.TRENDING_API_LINK)
            .then(response => {
                let result: Array<MovieEntity> = [];
                console.log("Trending Items : ", response.data.results as Array<MovieEntity>)
                console.log("Trending Items : ", response.data.results as Array<MovieEntity>)
                response.data.results.map(item => {
                    result.push(this.getResultFromResponse(item))
                })
                return Promise.resolve(result)
            })
            .catch(function (error) {
                return Promise.reject(error)
            });
    }

    async getPopularMovies(): Promise<Array<MovieEntity>> {
        return await this.initAxios().get<TrendingResponse>(this.POPULAR_MOVIES_API_LINK)
            .then(response => {
                let result: Array<MovieEntity> = [];
                console.log("Popular Items : ", response.data.results as Array<MovieEntity>)
                response.data.results.map(item => {
                    result.push(this.getResultFromResponse(item))
                })
                return Promise.resolve(result)
            })
            .catch(function (error) {
                return Promise.reject(error)
            });
    }

    async getTopRated(): Promise<Array<MovieEntity>> {
        return await this.initAxios().get<TrendingResponse>(this.TOP_RATED_API_LINK)
            .then(response => {
                let result: Array<MovieEntity> = [];
                console.log("Top Rated Items : ", response.data.results as Array<MovieEntity>)
                response.data.results.map(item => {
                    result.push(this.getResultFromResponse(item))
                })
                return Promise.resolve(result)
            })
            .catch(function (error) {
                return Promise.reject(error)
            });
    }

    async getLatest(): Promise<Array<MovieEntity>> {
        console.log("Link",this.LATEST_API_LINK)
        return await this.initAxios().get<TrendingResponse>(this.LATEST_API_LINK)
            .then(response => {
                let result: Array<MovieEntity> = [];
                console.log("Latest Items : ", response.data.results as Array<MovieEntity>)
                console.log("Latest Items : ", response.status)
                console.log("Latest Items : ", response.statusText)
                console.log("Latest Items : ", response.request)
                response.data.results.map(item => {
                    result.push(this.getResultFromResponse(item))
                })
                return Promise.resolve(result)
            })
            .catch(function (error) {
                return Promise.reject(error)
            });
    }

    async searchOnMovieByName(name: string): Promise<Array<MovieEntity>> {
        return await this.initAxios().get<TrendingResponse>(this.SEARCH_MOVIE_API_LINK + `&query=${name}`)
            .then(response => {
                let result: Array<MovieEntity> = [];
                console.log("Latest Items : ", response.data.results as Array<MovieEntity>)
                console.log("Latest Items : ", response.status)
                console.log("Latest Items : ", response.statusText)
                console.log("Search Request : ", response.request)
                response.data.results.map(item => {
                    result.push(this.getResultFromResponse(item))
                })
                return Promise.resolve(result)
            })
            .catch(function (error) {
                return Promise.reject(error)
            });
    }

    async getTvShows(): Promise<Array<TvShowEntity>> {
        return await this.initAxios().get<TvShowsResponse>(this.TV_SHOWS_API_LINK)
            .then(response => {
                console.log("TvShows :: ", response)
                console.log("TvShows :: ", response.data.results)
                let results: Array<TvShowEntity> = [];
                response.data.results.map(item => {
                    let resultItem = new TvShowEntity();
                    resultItem.id = item.id;
                    resultItem.video = item.video;
                    resultItem.vote_count = item.vote_count;
                    resultItem.vote_average = item.vote_average;
                    resultItem.name = item.name;
                    resultItem.release_date = item.release_date;
                    resultItem.original_language = item.original_language;
                    resultItem.original_name = item.original_name;
                    resultItem.backdrop_path = item.backdrop_path;
                    resultItem.overview = item.overview;
                    resultItem.poster_path = item.poster_path;
                    resultItem.media_type = item.media_type;
                    results.push(resultItem)
                })
                return Promise.resolve(results)
            })
            .catch(function (error) {
                return Promise.reject(error)
            });
    }

    getResultFromResponse(item: MovieEntity): MovieEntity {
        let resultItem = new MovieEntity();
        resultItem.id = item.id;
        resultItem.video = item.video;
        resultItem.vote_count = item.vote_count;
        resultItem.vote_average = item.vote_average;
        resultItem.title = item.title;
        resultItem.release_date = item.release_date;
        resultItem.original_language = item.original_language;
        resultItem.original_title = item.original_title;
        resultItem.backdrop_path = item.backdrop_path;
        resultItem.overview = item.overview;
        resultItem.poster_path = item.poster_path;
        resultItem.media_type = item.media_type;
        return resultItem;
    }
}
