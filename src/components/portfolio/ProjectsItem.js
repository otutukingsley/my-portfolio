import React from 'react'
import marked from 'marked'

const ProjectsItem = ({ project }) => {
  const { name, featuredImage, description } = project.fields
  const projectDesc = marked(description)

  console.log(project)

  return (
    <div className="project-card project-container">
      {/* <div className="card-header">
        <h1 className="project-heading">{name}</h1>
      </div>
      <div className="card-img-desc">
        {featuredImage && (
          <div className="project-img-container">
            <img
              alt=""
              src={featuredImage.fields.file.url}
              className="project-pic"
            />
          </div>
        )}

        <div
          className="desc"
          dangerouslySetInnerHTML={{ __html: projectDesc }}
        />
      </div> */}
      
    </div>
  )
}

export default ProjectsItem
