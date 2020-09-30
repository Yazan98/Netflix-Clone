import React from 'react';
import '../scss/main/MainPageStyle.scss';
import '../scss/main/MainPageStyleResponsive.scss';
import {infoManager} from "../../../data/InfoManager";
import {MainPageResponse, TrendingMovieEntity} from "../../../data/Entities";
import {MainPageHeaderComponent} from "../fragments/MainPageHeaderComponent";
import TrendingRowComponent from "../fragments/TrendingRowComponent";

export default class HomePageComponent extends React.Component<{}, MainPageResponse> {

    constructor(props: any) {
        super(props);
        this.state = {
            status: false,
            items: [],
            error: undefined
        }
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
    }

    render() {
        return (
            <div className="HomePageComponentContainer">
                { this.state.status ? this.renderTrendingCover(this.state.items[11]) : this.renderErrorCompnent() }
                { this.state.status ? this.renderTrendingItems(this.state.items) : this.renderErrorCompnent() }
            </div>
        );
    }

     renderTrendingCover(cover: TrendingMovieEntity) {
        return <MainPageHeaderComponent
            cover={cover.backdrop_path} description={cover.overview} image={cover.poster_path}
            name={cover.title} rate={cover.vote_average} votes={cover.vote_count}
            originalTitle={cover.original_title} release={cover.release_date} />
    }

    renderTrendingItems(items: Array<TrendingMovieEntity>) {
        return <TrendingRowComponent items={items} />
    }

    private renderErrorCompnent() {
        return <h1>Error</h1>
    }

}
