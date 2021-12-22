import {
    Nav,
    NavLink,
    NavMenu,
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/Projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/Contact' activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;