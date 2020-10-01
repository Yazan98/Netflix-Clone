import React from 'react';
import '../scss/general/GeneralStyle.scss';
import ToolbarComponent from "../common/ToolbarComponent";
import {infoManager} from "../../../data/InfoManager";
import {SearchResponse} from "../../../data/Entities";
import ColumnMoviesComponent from "../fragments/ColumnMoviesComponent";

export default class SearchPageComponent extends React.Component<any, SearchResponse> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchText: "",
            movies: []
        }
    }

    render() {
        let params = this.props.location.pathname
        console.log("Search Value : ", params)
        return (
            <div className="SearchPageComponent">
                <ToolbarComponent />
                {this.state.movies ? <ColumnMoviesComponent items={this.state.movies} title={"Search Result"} /> : <div style={{ height: "100vh", backgroundColor: "black" }}></div>}

            </div>
        );
    }

    componentDidMount() {
        let params = this.props.location.pathname
        console.log("Search Value : ", params, params.split("/"))
        infoManager.searchOnMovieByName(params.split("/")[2])
            .then(items => {
                this.setState({
                    movies: items
                });
            })
            .catch(error => {
                this.setState({
                    movies: []
                });
            })
    }

}
