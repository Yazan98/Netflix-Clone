import React from 'react';
import Logo from '../images/netflix_logo.png';
import UserLogo from '../images/user.jpg';
import '../scss/general/GeneralStyle.scss';
import {BsSearch} from "react-icons/all";
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {SearchProps} from "../../../data/Entities";

export default class FormDialog extends React.Component<{ }, SearchProps>{

    constructor(props: any) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    render() {
        return (
            <Dialog open={this.state.isShow} onClose={() => this.setState({ isShow: !this.state.isShow })} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Search</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Search About Movie You Need To Write The Movie Name Here
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Movie Name"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.setState({ isShow: false })} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => this.setState({ isShow: false })} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}