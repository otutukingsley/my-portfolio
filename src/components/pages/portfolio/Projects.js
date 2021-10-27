import React, { useEffect, useContext } from 'react'
import portfolioContext from '../../context/portfolio/portfolioContexts'
import ProjectsItem from './ProjectsItem'
import { ProjectsSection } from './PortfolioStyle'

const Projects = () => {
  const context = useContext(portfolioContext)

  const { getProjects, loading, projects } = context

  useEffect(() => {
    getProjects()
    //eslint-disable-next-line
  },[])
  return (
    <ProjectsSection>
      <div className="border-line"></div>
      <div className="box content-box">
        <div className="header-content">
          <h1>Portfolio</h1>
          <p>Some of my projects</p>
        </div>
        {loading ? (
          'loading...'
        ) : (
          <div className="section-content">
            {projects.map((project, index) => (
              <ProjectsItem key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </ProjectsSection>
  )
}

export default Projects
