export class TrendingMovieEntity {
    public id: number = 0;
    public video: boolean = false
    public vote_count: number = 0
    public vote_average: number = 0
    public title: string = ""
    public release_date: string = ""
    public original_language: string = ""
    public original_title: string = ""
    public backdrop_path: string = ""
    public overview: string = ""
    public poster_path: string = ""
    public media_type: string = ""

}

export class MainPageResponse {
    constructor(
        public items: Array<TrendingMovieEntity>,
        public error: Error | undefined,
        public status: boolean = false
    ) {
    }
}


export class TrendingResponse {
    constructor(
        public results: Array<TrendingMovieEntity>
    ) {
    }
}