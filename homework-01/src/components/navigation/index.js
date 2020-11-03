import Logo from '../shared/logo.js';
import NavButton from './navButton.js';

const Navigation = (props) => {
    return <nav class={props.variant}>
        <Logo />
        <br/>
        <NavButton text="Home" variant={props.variant} />
        &nbsp; &nbsp;
        <NavButton text="About" variant={props.variant} />
    </nav>
}

export default Navigation;