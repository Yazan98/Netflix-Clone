import {InfoManagerImplementation} from "./LogicImpl";
import {ApiManager} from "./ApiManager";
import {TrendingMovieEntity} from "./Entities";

export class InfoManager implements InfoManagerImplementation {

    private API_MANAGER: ApiManager = new ApiManager();
    static PROJECT_API_KEY = "96bf4aea7d9aaa89e75defc2a1a3dfd9"
    static BASE_URL_IMAGES = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces"
    static BASE_POSTER_BASE_URL = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"

    public async getTrendingMovies(): Promise<Array<TrendingMovieEntity>> {
       return await this.API_MANAGER.getTrendingMovies();
    }

}

export const infoManager = new InfoManager();
