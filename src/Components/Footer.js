import Emoji from 'a11y-react-emoji'

const Footer = () =>{
    return (
        <footer className='absolute bottom-[0.5rem] w-[100%] h-20]'>
            Made with React, Tailwind and 
            {' '}
            <Emoji symbol="💕" label="love" />
            {' '}
            by Akash Sharma
        </footer>
    )
}
export default Footer;