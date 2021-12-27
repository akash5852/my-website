import Emoji from 'a11y-react-emoji'

const Footer = () => {
    return (
        <footer id="footer" className="text-[0.85em] sm:text-[1.1em] font-['Mada'] absolute bottom-[0.5rem] w-[100%] h-20]">
            Made with React, Tailwind and
            {' '}
            <Emoji symbol="💕" label="love" />
            {' '}
            by Akash Sharma
        </footer>
    )
}
export default Footer;