import React, { Component } from 'react';
import Movie from './movies';

class MovieContainer extends Component {
    render(){
        return(
            <div>
                <h2>Movie Container</h2>
                <Movie />
            </div>
        );
    }
}

export default MovieContainer;