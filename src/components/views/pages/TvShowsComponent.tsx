import React from 'react';
import '../scss/main/MainPageStyle.scss';
import '../scss/main/MainPageStyleResponsive.scss';
import {infoManager} from "../../../data/InfoManager";
import {TvShowEntity, TvShowsState} from "../../../data/Entities";
import {MainPageHeaderComponent} from "../fragments/MainPageHeaderComponent";
import ToolbarComponent from "../common/ToolbarComponent";
import TvShowRowComponent from "../fragments/TvShowRowComponent";

export default class TvShowsComponent extends React.Component<{}, TvShowsState> {

    constructor(props: any) {
        super(props);
        this.state = {
           items : [],
            status: false
        }
    }

    render() {
        return (
            <div className="HomePageComponentContainer">
                <ToolbarComponent />
                { this.state.status ? this.renderTrendingCover(this.state.items[0]) : <div style={{ height: "100vh", backgroundColor: "black" }}></div>}
                { this.state.status ? this.renderTrendingItems(this.state.items) : <div style={{ height: "100vh", backgroundColor: "black" }}></div> }
            </div>
        );
    }

    renderTrendingCover(cover: TvShowEntity) {
        console.log("View item :: ", cover)
        return <MainPageHeaderComponent
            cover={cover.backdrop_path} description={cover.overview} image={cover.poster_path}
            name={cover.name} rate={cover.vote_average} votes={cover.vote_count}
            originalTitle={cover.original_name} release={cover.release_date} />
    }

    renderTrendingItems(items: Array<TvShowEntity>) {
        console.log("View :: ", items)
        return <TvShowRowComponent items={items} title={"Tv Shows"} />
    }

    componentDidMount() {
        infoManager.getTvShows()
            .then(items => {
                console.log("Itemsmmmm : ", items)
                this.setState({
                    items: items,
                    status: true
                });
            })
            .catch(error => {
                this.setState({
                    items: []
                });
            })
    }

}
