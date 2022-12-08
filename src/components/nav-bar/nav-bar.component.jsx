import './nav-bar.style.scss';


const NavBar = ({changeRoute,thereIsUser,signOutReset }) => {
    return(
        thereIsUser === true ? (
        <nav className='container-nav'>
            <p onClick={() => {
                changeRoute('signin')
                signOutReset();            
            } }>Sign-Out</p>
        </nav>
        )
        :
        null
    )
};

export default NavBar ;