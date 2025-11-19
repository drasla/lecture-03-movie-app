import PropTypes from "prop-types";
import {Link} from "react-router";

function Movie({coverImg, title, summary}) {
    console.log(coverImg);
    return <div>
        <img src={coverImg} alt={title} style={{height: "200px"}}/>
        <h2><Link to={"/movie"}>{title}</Link></h2>
        <p>{summary}</p>
    </div>
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;