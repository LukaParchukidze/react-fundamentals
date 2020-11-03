import Creator from './creator.js';
import Logo from '../shared/logo.js'

const Footer = (props) => {
    return <footer className={props.variant}>
        <Creator />
        <Logo />
    </footer>
}

export default Footer;