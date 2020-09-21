import React, { Component } from 'react';
import { Movie } from '../movies';
class  Movies extends Component {
    state = { movies : Movie }


    deleteMovies = m => 
        { 
          const movies = this.state.movies.filter(movie => movie.movie_id !== m.movie_id );
          this.setState({movies})
        }



    render() { 
        const {length : count } =this.state.movies;

        if (count ===   0)
            return <p className="mt-3"> there is no movies in the database</p>

         return ( <div >
                    <p className='mt-3'> Showing {count} movies in the database</p>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre </th>
                            <th>year </th>
                            <th>rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(m => 
                        <tr key={m.movie_id}>
                            <td>{m.title}</td>
                            <td>{m.category_name}</td>
                            <td>{m.time_stamp}</td>
                            <td>{m.rating_name}</td>
                            <td onClick={() => this.deleteMovies(m)} className="btn btn-danger mb-1 btn-sm">Delete </td>
                        </tr>
                        )}
                    </tbody>
                </table>


                </div> );
    }
}
 
export default Movies;