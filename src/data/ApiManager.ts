import {ApiManagerImplementation} from "./LogicImpl";
import {TrendingMovieEntity, TrendingResponse} from "./Entities";
import {InfoManager} from "./InfoManager";
import {AxiosInstance} from "axios";

export class ApiManager implements ApiManagerImplementation {

    //TODO: Replace Auth Data And Deactivate Them
    private axios = require('axios').default;
    private BASE_URL = "https://api.themoviedb.org/3/"
    private AUTH_TOKEN_V4 = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmJmNGFlYTdkOWFhYTg5ZTc1ZGVmYzJhMWEzZGZkOSIsInN1YiI6IjVmNjMxYjc3MTY4NGY3MDAzOTQ4OGI5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MgNX6lKPgu9WTIgYGq_n9y4CNABoUNukT_keY1xvIj0"
    private TRENDING_API_LINK = `${(this.BASE_URL)}trending/all/day?api_key=${InfoManager.PROJECT_API_KEY}`

    initAxios(): AxiosInstance {
     return this.axios.create({
            baseURL: this.BASE_URL,
            timeout: 5000,
            headers: {'Authorization': this.AUTH_TOKEN_V4}
        });
    }

    async getTrendingMovies(): Promise<Array<TrendingMovieEntity>> {
        return await this.initAxios().get<TrendingResponse>(this.TRENDING_API_LINK)
            .then(response => {
                let result: Array<TrendingMovieEntity> = [];
                console.log("Trending Items : ", response.data.results as Array<TrendingMovieEntity>)
                response.data.results.map(item => {
                    let resultItem = new TrendingMovieEntity();
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
                    result.push(resultItem)
                })
                return Promise.resolve(result)
            })
            .catch(function (error) {
                return Promise.reject(error)
            });
    }
}
