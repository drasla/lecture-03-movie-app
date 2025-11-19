import {useEffect, useState} from "react";
import Movie from "../components/Movie.jsx";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const json = await fetch(
                `https://nomad-movies.nomadcoders.workers.dev/movies`
            ).then(res => res.json());
            console.log(json.movies);
            setMovies(json);
            setLoading(false);
        };

        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => {
                            console.log(movie);
                            return <Movie
                                key={movie.id}
                                coverImg={movie.poster_path}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        }
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;