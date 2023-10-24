import React, { useEffect, useState } from "react"; // Fixed the import here
import Header from "../components/Header/Header";
import ProjectGallery from "@/components/Projects/ProjectGallery";
import ProjectFilter from "@/components/Projects/ProjectFilter";

import { useSearchParams } from 'next/navigation'


import { useRouter } from 'next/router';

const Work = () => {
    const searchParams = useSearchParams();
    const project_id = searchParams.get('project');

    // const router = useRouter();
    // const project_id = router.query.project;

    // console.log(project_id)
    const [selectedProjectId, setSelectedProjectId] = useState(project_id);

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        if (project_id) {
            setSelectedProjectId(project_id);
        }
    }, [project_id]);

    useEffect(() => {
        const url = "https://storage.googleapis.com/spacemakers_site/_site_data";
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setLoading(false);
                setProjects(data["data"]);
                setTags(data['tags']);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleTagChange = (_tags) => {
        setSelectedTags(_tags);
        // setSelectedTags([...selectedTags, _tags]);
    }

    return (
        <div>
            <Header />
            {console.log(selectedProjectId)}
            {loading ? <div>Loading...</div>
                :
                <>
                    <ProjectFilter tags={tags} handleTagsChange={handleTagChange} />
                    <ProjectGallery projects={projects} tags={selectedTags} selectedProjectId={selectedProjectId} setSelectedProjectId={setSelectedProjectId} />
                </>
            }
        </div>
    );
};

export default Work;
