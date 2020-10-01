export class MovieEntity {
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
    public items: Array<MovieEntity> = []
    public popularItems: Array<MovieEntity> = []
    public topRated: Array<MovieEntity> = []
    public latest: Array<MovieEntity> = []
    public error: Error | undefined;
    public status: boolean = false

    constructor(
        items: Array<MovieEntity>,
        error: Error | undefined,
       status: boolean = false
    ) {
        this.error = error
        this.items = items
        this.status = status
    }

}


export class TrendingResponse {
    constructor(
        public results: Array<MovieEntity>
    ) {
    }
}

export class SearchProps {
    constructor(
        public isShow: boolean
    ) {
    }
}