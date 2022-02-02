import React from 'react';
import './Projects.css';


const Work = () => {
return (
    <div className="card mb-3 content" style={{maxWidth: "100%"}}>
        <div className="row no-gutters">
            <div className="col-md-4 content-section" id="work">
                <h2 className="text-center mt-3">Let's Play Chess!</h2>
                <p className="description">Play live chess with the people you want. Log into our website to see your chess scores and stats. 
                    Add friends that are already registered on the platform! When you have a friend connection, a notification will appear
                    and you can accept or decline the invite. If you want to start a game, click the start game button. 
                    This takes you to a lobby where you can invite them to a game of chess. When both players are in the lobby, 
                    click start game to see the game board.
                    "Our project won the best functionallity category in the UW Full Stack Cooding Bootcamp"
                </p>
            </div>
            <div className="col-md-8">
                <div className="card-body rounded" id="background">
                    <div className="row">
                        <div className="card mb-3 text-white" id="image1" style={{maxWidth: "100%"}}>
                                <img class="card-img card-img-top" src={require("../../assets/chess.png").default} style={{maxWidth: "100%"}} alt="Project1"/>
                            <a id="link1" href="https://letsplaychessproject2.herokuapp.com/" className="card-title">Let's play chess</a>
                            <a id="link1" href="https://github.com/EvelynGMaldonado/Project2" className="card-title">Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-md-4 content-section" id="work">
                <h2 className="text-center mt-3">Tech Blog MVC</h2>
                <p className="description">
                The Tech blog projetc has been built from scratch and designed to provide a nice and effective interaction between its users; 
                It also follows the MVC paradigm in its architectural structure by using handlebars.js as the templating language, sequelize as 
                the ORM and express session npm package for authentication.
                The Tech Blog application provides accesibility to the users so they can publish articles, blog posts, their thougs and opinions. 
                When someone visits site for the first time, it will be presened with the existing blog posts and navigation links. The user will be 
                requiered to sign up or sign in in order to have full access to our tech blog functionallity.
                </p>
            </div>
            <div className="col-md-8">
                <div className="card-body rounded" id="background">
                    <div className="row">
                        <div className="card mb-3 text-white" id="image1" style={{maxWidth: "100%"}}>
                                <img class="card-img card-img-top" src={require("../../assets/landingpage.png").default} style={{maxWidth: "100%"}} alt="Project1"/>
                            <a id="link1" href="https://techblog-egm.herokuapp.com/" className="card-title">Tech Blog MVC</a>
                            <a id="link1" href="https://github.com/EvelynGMaldonado/tech_blog_MVC" className="card-title">Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-md-4 content-section" id="work">
                <h2 className="text-center mt-3">Weather Dashboard</h2>
                <p className="description">
                The weather dashboard application displays weather details depending on the users requests. In this case, there is a input form on the 
                left side that is designeted for the user to type the city name of the weather they want to get information about. When the user 
                clicks the search button, then the application will display the current weather conditions for that city, as well as city name, 
                date, an icon representing the weather conditions, the temperature, the humidity, the wind speed and the UV index. The user will 
                also be able to see the date, an icon that represents the weather conditions, values for temperature, wind speed and humidity for 
                the next five days of the selected city.
                </p>
            </div>
            <div className="col-md-8">
                <div className="card-body rounded" id="background">
                    <div className="row">
                        <div className="card mb-3 text-white" id="image1" style={{maxWidth: "100%"}}>
                                <img class="card-img card-img-top" src={require("../../assets/weather-db1.jpeg").default} style={{maxWidth: "100%"}} alt="Project1"/>
                            <a id="link1" href="https://evelyngmaldonado.github.io/weather_dashboard/" className="card-title">Weather Dashboard</a>
                            <a id="link1" href="https://github.com/EvelynGMaldonado/weather_dashboard" className="card-title">Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-md-4 content-section" id="work">
                <h2 className="text-center mt-3">Employee Tracker</h2>
                <p className="description">
                A content management system, often abbreviated as CMS, is software that helps users create, manage, and modify content on a website 
                without the need for specialized technical knowledge; developers frequently have to create interfaces that allow non-developers 
                to easily view and interact with information stored in databases. 
                The user that has acces to this database will be able 
                to view and manage the departments, roles and employees in the company. After the application starts, the user will be presented with the following 
                options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.
                </p>
            </div>
            <div className="col-md-8">
                <div className="card-body rounded" id="background">
                    <div className="row">
                        <div className="card mb-3 text-white" id="image1" style={{maxWidth: "100%"}}>
                                <img class="card-img card-img-top" src={require("../../assets/employee.png").default} style={{maxWidth: "100%"}} alt="Project1"/>
                            <a id="link1" href="https://drive.google.com/file/d/11VXKTjWNcfCRymNDuuB4z0sEHm7QxxfH/view" className="card-title">Employee Tracker</a>
                            <a id="link1" href="https://github.com/EvelynGMaldonado/Employee-tracker" className="card-title">Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-md-4 content-section" id="work">
                <h2 className="text-center mt-3">Password Generator</h2>
                <p className="description">
                A password generator is a software tool that creates random or customized passwords for users. It helps users create 
                stronger passwords that provide greater security for a given type of access. This specific program produces complex and 
                strong passwords with combinations of numbers, uppercase and lowercase letters, and special characters such as braces, 
                asterisks, slashes, etc.
                The user will be presented with a password generator webpage, once the generate password button is clicked, then a series of prompts for 
                the password criteria will be presented. After all the questions are answered, then the inputs are validated, the password is generated and 
                is displayed to the page.
                </p>
            </div>
            <div className="col-md-8">
                <div className="card-body rounded" id="background">
                    <div className="row">
                        <div className="card mb-3 text-white" id="image1" style={{maxWidth: "100%"}}>
                                <img class="card-img card-img-top" src={require("../../assets/passwordgenerated.jpeg").default} style={{maxWidth: "100%"}} alt="Project1"/>
                            <a id="link1" href="https://evelyngmaldonado.github.io/password_generator/" className="card-title">Password Generator</a>
                            <a id="link1" href="https://github.com/EvelynGMaldonado/password_generator" className="card-title">Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Work;
