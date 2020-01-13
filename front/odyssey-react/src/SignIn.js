import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { TextField, Button, Snackbar } from '@material-ui/core';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            flash: '',
            open: false
        }
        this.updateDataField = this.updateDataField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    updateDataField = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        fetch("/auth/signin",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state),
            })
            .then(res => res.json())
            .then(
                res => this.setState({ "flash": res.flash }),
                err => this.setState({ "flash": err.flash })
            );

        e.preventDefault();
        this.props.history.push('/profile');
    }

    handleClickSnack = () => {
        this.setState((prevState) => ({
            ...prevState,
            open: true
        }))
    }

    handleCloseSnack = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState((prevState) => ({
            ...prevState,
            open: false
        }))
    }




    render() {
        const { email, password, open, flash } = this.state;

        return (
            <div>
                <div>
                    <Link to='/signup'>Sign Up here</Link>
                </div>
                <h1>Sign In!</h1>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField label="Your Email" type="email" name="email" onChange={this.updateDataField} value={email} />
                    <TextField label="Your Password" type="password" name="password" onChange={this.updateDataField} value={password}
                    />
                    <Button type="submit" variant="contained" color="primary" onClick={this.handleClickSnack}>
                        SUBMIT
                    </Button>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        autoHideDuration={5000}
                        open={open}
                        onClose={this.handleCloseSnack}
                        message={flash}
                    />
                </form>
            </div>
        )
    }
}

export default withRouter(SignIn);