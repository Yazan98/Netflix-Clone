import React from 'react';
import '../scss/general/GeneralStyle.scss';
import {MovieEntity} from "../../../data/Entities";
import TrendingRowComponent from "./TrendingRowComponent";

export default class ColumnMoviesComponent extends React.Component<{ items: Array<MovieEntity>, title: string }> {

    render() {
        let { items, title } = this.props;
        return (
            <div className="ColumnMoviesComponentContainer">
                <TrendingRowComponent title={title} items={items} />
            </div>
        );
    }


}
