import React, { Component } from 'react';
import axios from 'axios';
import Movies from './movies';

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
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movies info={movieInfo} key={index} />
        });
        return(
            <div>
                { movieList }
            </div>
        );
    }
}

export default MovieContainer;