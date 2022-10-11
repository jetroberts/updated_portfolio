import { Container } from "../../Container/Container"
import { Project } from "../../Project/Project"
import { TechList } from "../../TechList/TechList"
import "./Projects.css"

const Projects = () => {
    return (
        <Container className={"projects"}>
            <Project title={"Portfolio"}>
                This portfolio is written in Typescript using React as the framework, and the styling framework is custom written in CSS3.
                <br /><br />
                I decided to use Storybook to create each component, this made it easy to build each UI component in isolation and add settings to the components to improve their versatility.
                <br /><br />
                The website is currently hosted in AWS Amplify. This is the easiest option as it has CI built-in and will enable me to add more serverless features down the line.
                <br />

                <h2>Further Improvements</h2>
                <ul>
                    <li>Run test on deployment</li>
                    <li>Add a blog section</li>
                    <li>Improve the UI/UX of the site</li>
                </ul>

                <TechList listItems={["Typescript", "React", "CSS3", "Storybooks", "AWS Amplify"]}/>
            </Project>
            <Project title={"Aviva Zero"}>
                Worked on development of a serverless insurance application, focussing specifically on debt-management and BACS processing.
                <br /><br />

                Using trunk based development we were able to improve team performance by removing peer reviews and instead moved towards pair programming.
                This improved the communications within the team and reduced the quantity of bugs.

                <TechList listItems={["Go", "Typescript", "React", "AWS Cloud Formation - CDK"]}/>
            </Project>
            <Project title={"Mapping UI"}>
                Whilst working as a data engineer I worked on an application to enable non-technical people to write MYSQL transformations in an easy to use UI.

                <br /><br />

                The ETL process is broken into 3 areas: extraction, transformation, and loading.
                Extraction involves converting raw source data into a more manageable source.
                Transformation means transforming the raw data into a form that can be consumed by other streams. In this case the transformations were done using MySQL queries and required someone with technical knowledge of MySQL to create the maps.
                Loading is the process of moving the data into the target location.

                <br /><br />

                The aim of the project was to remove the need for a technical person to create the transformations. 

                <TechList listItems={["Typescript", "React", "CSS3", "PHP", "AWS Serverless"]}/>
            </Project>
            <Project title={"Data Conversion"}>
                When clients are brought onto a new project there is a requirement to move their data from the old system to the new system.
                <br />
                I was responsible for extracting source data, creating transformations, and loading the data into the clients system. 
                <br /><br />
                Using the extraction tool, written in C#, I would convert their source data (MSSQL, NoSQL) into a MySQL database.
                The transformation and loading of the data was done using MySQL and PHP, the MySQL queries ensured that duplicates were removed and 
                the data was loaded into the clients database using PHP.

                <TechList listItems={["C#", "PHP", "GitLab Pipelines", "AWS - EC2 management"]}/>
            </Project>
            <Project title={"Adhesive Strength"}>
                My dissertation focussed on how to predict the strength of adhesive joints without having to run time consuming FEA simulations.
                Written in Python, the software was able to predict the Factor of Safety of the joint under a given load. The program featured a GUI and multi-threading. 
                <br /><br />

                At some point I would like to re-write this project, the UI was written using PyQT5 which didn't give the best result and I could definitely improve the processing
                speed by moving to a language like Go. The app will be cloud based with the front-end being written in Typescript/React and a serverless backend in Go. 

                <TechList listItems={["Python"]}/>
            </Project>
        </Container>
    )
}
export { Projects }