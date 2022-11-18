import { Fragment } from 'react';
import './ranking.styles.scss';

const Ranking = () => {
    return(
        <div className='ranking'>
            <span>Joee, Your current rank is...</span> <br/>
            <span className='number'>#10</span>
        </div>
    )
};

export default Ranking;