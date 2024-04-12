import {
    Nav,
    NavLink,
    NavMenu,
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav className="font-['Mada']">
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/Experience' activeStyle>
                        Experience
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