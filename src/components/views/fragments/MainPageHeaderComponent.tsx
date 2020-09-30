import React from 'react';
import '../scss/main/MainHeaderComponent.scss';
import {InfoManager} from "../../../data/InfoManager";

export class MainPageHeaderComponent extends React.Component<{ name: string, rate: number, description: string, cover: string, image: string, votes: number, originalTitle: string, release: string }> {
    render() {
        let {name, rate, description, cover, image, votes, originalTitle, release} = this.props;
        return (
            <div className="MainPageHeaderComponentContainer">
                <img className={"PosterClassName"} src={InfoManager.BASE_URL_IMAGES + cover } />
                <div className={"PosterContent"}>
                    <div className={"PosterImage"} id={"PosterItem2"}>
                        <img className={"PosterIcon"} src={InfoManager.BASE_POSTER_BASE_URL + image} />
                    </div>
                    <div className={"WriteContainer"} id={"PosterItem"}>
                        <div className={"ItemsContent"}>
                            <h4><strong>Title</strong> : {name}</h4>
                            <h6><strong>Original Title</strong> : {originalTitle}</h6>
                            <p><strong>Release Date</strong> : ({release})</p>
                            <p className={"Description"}><strong>Description</strong> : {description}</p>
                            <p><strong>Rate</strong> : {rate}</p>
                            <p><strong>Vote Number</strong> : {votes}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
