import React from 'react';
import Logo from '../images/netflix_logo.png';
import UserLogo from '../images/user.jpg';
import '../scss/general/GeneralStyle.scss';
import {BsSearch} from "react-icons/all";
import {NavLink} from "react-router-dom";
import FormDialog from "../fragments/DialogComponent";
import {SearchProps} from "../../../data/Entities";

export default class ToolbarComponent extends React.Component<{}, SearchProps> {

    constructor(props: any) {
        super(props);
        this.state = {
            isShow: false,
            searchText: "",
            searchClicked: false
        }
    }

    render() {
        return (
            <div className="ToolbarComponentContainer">
                {this.state.isShow ? <FormDialog/> : <></>}
                <div className={"ToolbarContainer"}>
                    <div className={"LogoContainer"}>
                        <img className={"Image"} src={Logo}/>
                    </div>
                    <div className={"LinksContainer"}>
                        <NavLink className={"Link"} to={"/"}>Home</NavLink>
                        <NavLink className={"Link"} to={"/tv/shows"}>TV Shows</NavLink>
                        <NavLink className={"Link"} to={"/"}>Movies</NavLink>
                    </div>
                    <div className={"ProfileContainer"}>
                        <div className={"SearchIconContainer"} onClick={() => this.setState({ isShow: !this.state.isShow })}>
                            <BsSearch className={"SearchIcon"}/>
                        </div>
                        <img className={"UserIcon"} src={UserLogo}/>
                    </div>
                </div>
            </div>
        );
    }

}
