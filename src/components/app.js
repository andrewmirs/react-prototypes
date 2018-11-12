import React from 'react';
import MovieContainer from './movie_container';

const App = () => {
    return (
        <div className="container">
            <h1 className="text-center">iTunes Top 10 Movies</h1>
            <MovieContainer />
        </div>
    );
}

export default App;

