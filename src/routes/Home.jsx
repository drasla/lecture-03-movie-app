import {useEffect, useState} from "react";
import Movie from "../components/Movie.jsx";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const json = await fetch(
                `https://imdb.iamidiotareyoutoo.com/search?q=2025&lsn=1&v=1`
            ).then(res => res.json());
            setMovies(json.description);
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
                    {movies.map((movie) => (
                        <Movie
                            key={movie["#IMDB_ID"]}
                            id={movie["#IMDB_ID"]}
                            coverImg={movie["#IMG_POSTER"]}
                            title={movie["#TITLE"]}
                        />

                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;