import '../Header/Header.css';

// We use JSX curly braces to evaluate the style object

const Header = () => {
return (
    <header>
    <h1>Evelyn Maldonado</h1>
    
    <nav>
        <ul className="responsive">
            <li>
                <a href="#about-me">About me</a>
            </li>
            <li>
                <a href="#work">Work</a>
            </li>
            <li>
                <a href="#contact-me">Contact me</a>
            </li>
            <li>
                <a href="#">Resume</a>   
            </li>
        </ul>
    </nav>
</header>
);
}

export default Header;
