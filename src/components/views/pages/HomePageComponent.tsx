import React from 'react';
import '../scss/main/MainPageStyle.scss';
import '../scss/main/MainPageStyleResponsive.scss';
import {infoManager} from "../../../data/InfoManager";
import {MainPageResponse, MovieEntity} from "../../../data/Entities";
import {MainPageHeaderComponent} from "../fragments/MainPageHeaderComponent";
import TrendingRowComponent from "../fragments/TrendingRowComponent";
import ToolbarComponent from "../common/ToolbarComponent";

export default class HomePageComponent extends React.Component<{}, MainPageResponse> {

    constructor(props: any) {
        super(props);
        this.state = {
            status: false,
            items: [],
            error: undefined,
            popularItems: [],
            topRated: [],
            latest: [],
        }
    }

    render() {
        return (
            <div className="HomePageComponentContainer">
                <ToolbarComponent />
                { this.state.status ? this.renderTrendingCover(this.state.items[0]) : this.renderErrorCompnent() }
                { this.state.status ? this.renderTrendingItems(this.state.items) : this.renderErrorCompnent() }
                { this.state.status ? this.renderPopularItems(this.state.popularItems) : this.renderErrorCompnent() }
                { this.state.status ? this.renderTopRatedItems(this.state.topRated) : this.renderErrorCompnent() }
                { this.state.status ? this.renderLatestItems(this.state.latest) : this.renderErrorCompnent() }
            </div>
        );
    }

    renderTrendingCover(cover: MovieEntity) {
        return <MainPageHeaderComponent
            cover={cover.backdrop_path} description={cover.overview} image={cover.poster_path}
            name={cover.title} rate={cover.vote_average} votes={cover.vote_count}
            originalTitle={cover.original_title} release={cover.release_date} />
    }

    renderPopularItems(items: Array<MovieEntity>) {
        return <TrendingRowComponent items={items} title={"Popular"} />
    }

    renderTopRatedItems(items: Array<MovieEntity>) {
        return <TrendingRowComponent items={items} title={"Top Rated"} />
    }

    renderTrendingItems(items: Array<MovieEntity>) {
        return <TrendingRowComponent items={items} title={"Trending"} />
    }

    renderLatestItems(items: Array<MovieEntity>) {
        return <TrendingRowComponent items={items} title={"Now Playing"} />
    }

    private renderErrorCompnent() {
        return <div style={{ height: "100vh", backgroundColor: "black", color: "white" }}>ٍSomething Error Pls Refresh</div>
    }

    componentDidMount() {
        infoManager.getTrendingMovies()
            .then(items => {
                this.setState({
                    items: items,
                    status: true,
                    error: undefined
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    status: false,
                    items: []
                });
            })

        infoManager.getPopularMovies()
            .then(items => {
                this.setState({
                    popularItems: items,
                    status: true,
                    error: undefined
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    status: false,
                    popularItems: []
                });
            })

        infoManager.getTopRated()
            .then(items => {
                this.setState({
                    topRated: items,
                    status: true,
                    error: undefined
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    status: false,
                    topRated: []
                });
            })

        infoManager.getLatest()
            .then(items => {
                this.setState({
                    latest: items,
                    status: true,
                    error: undefined
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    status: false,
                    latest: []
                });
            })
    }



}
