import './logo.styles.scss';
import Tilt from 'react-parallax-tilt';
import logo from './logo.png'

const LogoImage = () => {
    return(
        <div className='logo-container'>
            <Tilt className='logo-card'>
                <img src={logo} />
            </Tilt>
        </div>
    )
};

export default LogoImage;