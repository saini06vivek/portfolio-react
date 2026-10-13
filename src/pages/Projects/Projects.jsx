import {
    CodeXml,
    ExternalLink
} from 'lucide-react';
import './Projects.css';
import MovieImage from '../../assets/Movie-app.png';
import VexaImage from '../../assets/Chat-app.png';

const Projects = () => {

    const projectsData = [
        {
            title: 'VEXA AI Chat App',
            description: 'An AI-powered chat application with a clean interface, chat history, authentication, and a responsive chat experience.',
            image: VexaImage,
            technologies: ['React.js', 'JavaScript', 'Firebase', 'API'],
            liveLink: 'https://vexa-xi.vercel.app/',
            githubLink: 'https://github.com/saini06vivek/vexa',
            category: 'AI Application'
        },
        {
            title: 'Movie Search App',

            description:
                'A Responsive movie discovery application to explore popular movies, search titles, and save favorite movies for later.',
            image: MovieImage,
            technologies: ['React.js', 'JavaScript', 'TMDB API', 'CSS'],
            liveLink: 'https://saini06vivek.github.io/Movie_Search_App_React/',
            githubLink: 'https://github.com/saini06vivek/Movie_Search_App_React',
            category: 'Web Application'
        }
    ];

    return (
        <div className="projects">
            <div className="projects-heading">
                <span className="projects-subtitle">MY WORK</span>
                <h1>Featured Projects</h1>
                <p> Some projects I've built while learning and exploring
                    modern web development.</p>
            </div>

            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div className="project-card" key={project.title}>
                        <div className="project-preview">
                            <img src={project.image} alt={project.title} />
                            <span className="project-category">{project.category}</span>
                        </div>

                        <div className="project-info"><h2>{project.title}</h2>
                            <p className="project-description">{project.description}</p>

                            <div className="project-technologies">
                                {project.technologies.map((technology) => (
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.liveLink}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='project-live'>
                                    <ExternalLink size={17} />
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-github"
                                >
                                    <CodeXml size={17} />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                )
                )}
            </div>

            <div className="projects-footer">
                <CodeXml size={20} />
                <span>More projects coming soon!</span>
            </div>
        </div>
    )
}


export default Projects;