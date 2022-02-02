import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="card mb-3 content">
            <div className="row no-gutters">
                <div className="col-md-4 content-section" id="about-me">
                    <h2 className="text-center mt-3">About me</h2>
                </div>
                <div className="col-md-8">
                    <div className="card-body rounded" id="background">
                        <p className="card-text">Hello!, </p>
                        <p>My name is Evelyn Maldonado, and I am a Full Stack Web-developer graduated from the University of Washington pursuing a Computer Science Bachelor’s Degree.
                        I am detail oriented, creative and a problem-solver; I work with different technologies such as Github, Heroku, Nodejs, MySQL, Graphql, MongoDB, Handlebars, React, Bootstrap, Jquery, HTML, CSS, JavaScript, etc. and feel comfortable developing front and back end, sharing and increasing knowledge, doing teamwork and multitasking. </p>
                        <p>As a young woman who was raised with the “If you can think it, you can reach it” mentality and later on moved to a different Country to accomplish her education, I consider myself a strong fast learner, I like challenges and achieving my goals;
                        Having a health area background that includes several psychology classes let me identify my clients and their needs as well as their audience and its needs. Great at applying my tech and my psychology knowledge to go straight to success. </p>
                        <p>Keep improving is my mindset.</p>
                        <p id="center">  "Always committed to developing what matches your needs" </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;