import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import ProjectGallery from "@/components/Projects/ProjectGallery";
import ProjectFilter from "@/components/Projects/ProjectFilter";


const Work = () => {

    const [projects, setProjects] = React.useState([]);
    const [tags, setTags] = React.useState([]);
    const [selectedTags, setSelectedTags] = React.useState([]);

    useEffect(() => {

        // fetch("http://localhost:7071/api/fetch_site_data", {
        fetch("https://spacemakerstv-update.azurewebsites.net/api/fetch_site_data?code=HkkF8Q_3TORr1cyAH7vYELArnwqo8nkc4NQ7oEfAAebzAzFuUPb_eA==", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                //sort data based on date key
                // console.log(data);

                setTags(data['tags'])
                setSelectedTags([])

                data = data['data'];
                data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setProjects(data);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleTagChange = (_tags) => {
        setSelectedTags(_tags);
    }

    return (
        <div>
            {console.log(selectedTags)}
            <Header />
            <ProjectFilter tags={tags} handleTagsChange={handleTagChange} />
            <ProjectGallery projects={projects} tags={selectedTags} />
        </div>
    );
};
export default Work;