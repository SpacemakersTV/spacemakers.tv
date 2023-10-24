import React, {useEffect} from "react";

import styles from "./ProjectFilter.module.css";

const ProjectFilter = (props) => {
    const tags = props.tags;
    const [selectedTags, setSelectedTags] = React.useState([]);

    // useEffect(() => {
    //     setSelectedTags(tags);
    // }, [tags]);

    useEffect(() => {
        if (selectedTags.length === tags.length) {
            props.handleTagsChange([]);
            return;
        }else if (selectedTags.length == 0) {
            props.handleTagsChange([]);
            return;
        } else {
            props.handleTagsChange(selectedTags);
        }

        console.log(selectedTags);
    }, [selectedTags]);

    const handleClicked = (e) => {
        const tag = e.target.textContent;

        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(item => item !== tag))
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }

    return (
        <div className={styles.project_filter_container}>
            {tags.map((tag, index) => (
                <button key={index} 
                        onClick={handleClicked} 
                        className={`${styles.o_button_reset} ${styles.project_filter_item}  ${(selectedTags.includes(tag) && selectedTags.length > 0 && selectedTags.length != tags.length) && styles.selected}`}>{tag}
                </button>
            ))}
        </div>
    )
}
export default ProjectFilter;