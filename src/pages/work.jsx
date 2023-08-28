import React from "react";
import Header from "../components/Header/Header";
import ProjectGallery from "@/components/Projects/ProjectGallery";

const projects = [
    {
        "project_title": "OBSCUUR",
        "project_description": "Open air festival",
        "project_images": ["obscuur1.jpg", "obscuur2.jpg"]
    },
    {
        "project_title": "CLUB SODA",
        "project_description": "Festival",
        "project_images": ["ClubSoda1.jpg", "ClubSoda2.jpg"]
    },
    {
        "project_title": "KASTEEL BOSUIT",
        "project_description": "Open air festival",
        "project_images": ["bosuit1.jpg"]
    },
    {
        "project_title": "ARE WE HERE?",
        "project_description": "Video mapping",
        "project_images": ["AreWeHere1.jpg", "AreWeHere2.jpg"]
    }
];

const Work = () => {
    return (
        <div>
            <Header />
            <ProjectGallery projects={projects}/>
        </div>
    );
};
export default Work;