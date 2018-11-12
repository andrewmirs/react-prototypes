import React, { Component } from 'react';
import axios from 'axios';
import Movie from './movies';

class MovieContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }
    componentWillMount = () => {
        const itunesAPI = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(itunesAPI).then((resp) => {
            this.setState({
                movies: resp.data.feed.entry
            })
        });
    }
    render(){
        console.log(this.state);
        return(
            <div>
                <h2>Movie Container</h2>
                <Movie />
            </div>
        );
    }
}

export default MovieContainer;