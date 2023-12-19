import React, { useEffect, useState } from "react";


import ProjectFilter from "@/components/Projects/Filter/ProjectFilter";
import ProjectGallery from "@/components/Projects/Gallery/ProjectGallery";


const Work = (props) => {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagChange = (_tags) => {
        setSelectedTags(_tags);
    }

    return (
        <React.Fragment>
            <ProjectFilter tags={props.tags} handleTagsChange={handleTagChange} />
            <ProjectGallery projects={props.projects} tags={selectedTags} />
        </React.Fragment>
    )
}

export default Work;