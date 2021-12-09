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
                        <p className="card-text">My name is Evelyn, I am a Bilingual Full Stack Web-developer certified by University of Washington. 
                        I've had the opportunity to enrich my knowledge and work with different technologies such as Visual Studio, Git/Github, 
                        Heroku, Nodejs, Express, MySQL, Sequelize, Graphql, MongoDB, Handlebars, React, Bootstrap, Jquery, HTML, CSS and JavaScript . 
                        I feel comfortable working both front and back and I really enjoy sharing and increasing my knowledge, as well as teamwork. 
                        I consider myself a fast learner, I like challenges and achieving my goals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;