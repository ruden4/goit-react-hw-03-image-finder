import { Component } from "react";
import { toast } from 'react-toastify';

import css from './Searchbar.module.css'

export class Searchbar extends Component {
    state = {
        value: ''
    }

    handleInput = e => {
        const { value } = e.currentTarget;
        this.setState({ value });
    }
    handleSubmit = e => {
        if (this.state.value.trim() === '') {
            toast.warn("Please write something! Don't be lazy...", {
                autoClose: 3000,
                hideProgressBar: true,
                theme: 'colored',
              });
            }
        e.preventDefault();
        const { value } = this.state;
        const {onSubmit, reset} = this.props;
        onSubmit(value.trim().toLowerCase()); 
        this.setState({ value:'' });
      };
    
    render() {
        return(
            <form className={css.form} onSubmit={this.handleSubmit}> 
                <input
                    onChange={this.handleInput}
                    value={this.state.value}
                    className={css.input}
                    type="text"
                />
                <button className={css.searchBtn}>Search</button>
             </form>
        )
    }
}