import React from 'react';
import '../scss/main/MainPageStyle.scss'
import {InfoManager} from "../../../data/InfoManager";
import {TrendingMovieEntity} from "../../../data/Entities";

export default class TrendingRowComponent extends React.Component<{ items: Array<TrendingMovieEntity> }> {
   render() {
       let { items } = this.props;
       return (
           <div className="TrendingRowComponentContainer">
               <h2 className={"Title"}>Trending Movies</h2>
               <div className={"TrendingRow"}>
                   {items.map(item => {
                       return <div className={"TrendingItem"}>
                           <img className={"TrendingItemImage"} src={InfoManager.BASE_POSTER_BASE_URL + item.poster_path} />
                           <div className={"ItemContent"}>
                               <div className={"FloatingContainer"}>
                                   <p><strong>Title</strong> : {item.title}</p>
                                   <p className={"Description"}><strong>Description</strong> : {item.overview}</p>
                                   <p><strong>Rate</strong> : {item.vote_average}</p>
                                   <p><strong>Date</strong> : {item.release_date}</p>
                                   <p><strong>Language</strong> : {item.original_language}</p>
                               </div>
                           </div>
                       </div>
                   })}
               </div>
           </div>
       );
   }
}
