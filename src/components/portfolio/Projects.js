import React, { useEffect, useContext } from 'react'
import portfolioContext from '../context/portfolio/portfolioContexts'
import ProjectsItem from './ProjectsItem'
import { Container, ProjectsSection } from '../themes/styles'

const Projects = () => {
  const context = useContext(portfolioContext)

  const { getProjects, loading, projects } = context

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <ProjectsSection>
      <Container>
        <h1 className="project-heading">Some of my recent Projects</h1>
        <div className="project-wrapper">
          {projects.map((project, index) => (
            <ProjectsItem key={index} project={project} />
          ))}
        </div>
      </Container>
    </ProjectsSection>
  )
}

export default Projects
