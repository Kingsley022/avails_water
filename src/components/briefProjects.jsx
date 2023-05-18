import { useState } from "react";
import Header from "./common/header";
import Button from "./common/button";
import { projects as myProjects} from "./data";
import '../styles/briefProjects.css';

const BriefProjects = () => {

    const[projects, setProjects] = useState(myProjects);

    const toggleDetails = project =>{
        const newProjects = projects.map(newProject => {
            if(newProject.id === project.id){
                return {...newProject, isToggled: !newProject.isToggled};
            }else{
                return newProject
            }
        })
        setProjects(newProjects);
    }

    return (
        <div className="projectsContainer" id="Projects">
            <Header placeholder={'Projects'}/>

            <div className="projects">
                {projects.map( (project, index) => (
                     <div className="project" key={project.id}>
                        <div className="projectImg">
                            <img src={project.img}/>
                        </div>
    
                        <div className="textArea">
                            <div className="header">
                                <h3>{project.name}</h3>
                                <button onClick={() => toggleDetails(project)}>Details</button>
                            </div>
                            {project.isToggled && <>
                                <p>{project.description}</p>
        
                                <div className="btns">
                                    <Button placeholder={'LIVE DEMO'} btnstyle={'btnStyle'}/>
                                    <Button placeholder={'GitHub'} btnstyle={'btnStyle'}/>
                                </div>
                            </> 
                            }
                        </div>
                 </div>
                ))}
               
            </div>
        </div>
    );
}
 
export default BriefProjects;