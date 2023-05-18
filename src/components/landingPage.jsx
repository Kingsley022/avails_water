import Button from './common/button';
import '../styles/landingPage.css';

const LandingPage = () => {
    return (
        <div className="landingPage" id='Home'>
            <img src='../images/developer1.svg'/>

            <div className="textArea">
                <h1>-I'M KINGSLEY OKEREKE</h1>
                <h2>FRONTEND WEB DEVELOPER</h2>
                <p>I'm a creative and resourceful person who isn't afraid to face new changes and actively seeking for new opportunities to <br/>exhibit and develop my skills.</p>
                <div className="socials">
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-github"></i>
                    <i className="fa fa-instagram"></i>
                </div>
                <Button placeholder={"MORE ABOUT ME"}/>
            </div>
        </div>
    );
}
 
export default LandingPage;