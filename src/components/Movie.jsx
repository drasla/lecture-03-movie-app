import PropTypes from "prop-types";
import {Link} from "react-router";

function Movie({id, coverImg, title}) {
    return <div>
        <img src={coverImg} alt={title} style={{height: "200px"}}/>
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Movie;