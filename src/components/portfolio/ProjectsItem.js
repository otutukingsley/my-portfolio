import React from 'react'
import marked from 'marked'


const ProjectsItem = ({ project }) => {
  const { name, featuredImage, description, repoLink, liveLink} = project.fields
  const projectDesc = marked(description)

  return (
    <div className="project-card project-container grid-2">
      <div className="img-name">
        <div className="portfolio-heading">
          <h3 className="portfolio-h3">{name}</h3>
        </div>
        {featuredImage && (
          <div className="project-img-container">
            <img
              alt=""
              src={featuredImage.fields.file.url}
              className="project-pic"
            />
          </div>
        )}
        <div className="repo-live">
          <a href={liveLink} rel="noopener noreferrer" target="_blank" className="live-link">Live Link</a>
          <a href={repoLink} rel="noopener noreferrer" className="repo-link">Repo Link</a>
        </div>
      </div>
      <div className="desc" dangerouslySetInnerHTML={{ __html: projectDesc }} />
    </div>
  )
}

export default ProjectsItem
