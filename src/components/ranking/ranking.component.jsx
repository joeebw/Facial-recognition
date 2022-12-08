import './ranking.styles.scss';

const Ranking = ({user}) => {
    const {name, entries} = user;

    return(
        <div className='ranking'>
            <span>{`${name.charAt(0).toUpperCase()}${name.slice(1)}, Your current rank is`}</span> <br/>
            <span className='number'>{'#'+ entries}</span>
        </div>
    )
};

export default Ranking;