import React from "react";
import Header from "../components/Header/Header";
import ProjectGallery from "@/components/Projects/ProjectGallery";

// const projects = [
//     {
//         "project_title": "OBSCUUR",
//         "project_description": "What initially started as \"Festival Friday\" organized by JH Het Molentje in Kuurne has evolved into \"OBSCUUR,\" a rapidly growing festival concept fueled by a highly motivated crew. We've been part of this journey since the beginning, helping to design and operate their stages. In the summer of 2022, they hosted their first festival under the name \"Obscuur.\" During a visit to the venue, our attention was captivated by a massive art structure comprised of numerous hexagonal prisms. We eagerly embraced the challenge of video mapping this intricate structure, crafting bespoke content that allowed us to project mesmerizing lights and shadows onto this unique art piece. This endeavor involved a meticulous process of 3D modeling, printing, and extensive fine-tuning. Our primary hurdle was achieving the perfect perspective and aligning it with the placement of the projectors in the venue",
//         "project_images": ["obscuur1.jpg", "obscuur2.jpg"]
//     },
//     {
//         "project_title": "CLUB SODA",
//         "project_description": "Festival",
//         "project_images": ["ClubSoda1.jpg", "ClubSoda2.jpg"]
//     },
//     {
//         "project_title": "KASTEEL BOSUIT",
//         "project_description": "Open air festival",
//         "project_images": ["bosuit1.jpg"]
//     },
//     {
//         "project_title": "ARE WE HERE?",
//         "project_description": "Video mapping",
//         "project_images": ["AreWeHere1.jpg", "AreWeHere2.jpg"]
//     }
// ];

const projects = [
    {
        "project_title": "APE in Space",
        "project_description": "For APE, the Avelgems Percussie Ensemble, we embarked on a unique project known as \"APE in SPACE.\" The concept behind this entire concert was to narrate the evolution of APE, projecting it onto the timeline of the species of apes as they evolved over the years, transitioning from crawling to walking, and eventually reaching the vast expanse of SPACE.\n\nOur primary objective was to craft a lighting setup that felt both futuristic and subtle, one that seamlessly complemented the theatrical lighting fixtures already in place. To accomplish this, we employed LED strips arranged in triangular formations, elegantly elevated above the stage.\n\nThis approach yielded a mesmerizing effect, transporting the audience into a world where technology and artistry converged effortlessly. The synchronized play of lights perfectly accentuated the narrative, making each phase of APE's evolutionary journey come alive. It was a delicate balance, ensuring that the lighting remained unobtrusive yet impactful, allowing the music and storytelling to take center stage.",
        "date": "19/10/2019",
        "tags": ["#LED"],
        "project_images": ["ape/thumbnail.jpg", "ape/IMG_20191018_234914.jpg"]
    },
    {
        "project_title": "Technology",
        "project_description": "For Youth House Krak., the birthplace of Spacemakers, we took on the challenge of designing a stage that would breathe life into their small underground venue. The aim was clear: create a starlit ceiling using 64 meters of LED strips, offering maximum light output. We needed to bring video seamlessly into the stage setup, all while maintaining a minimalistic aesthetic - a crucial consideration for the Techno genre.\n\nOur inspiration came from the stars that light up the night sky. We wanted to replicate this celestial experience, allowing the audience to feel like they were dancing under the stars. To achieve this, we strategically placed 64 meters of LED strips to mimic the night sky, and these LEDs were programmed to twinkle in harmony with the music.\n\nThe LED strip ceiling, coupled with the synchronized twinkling effect, elevates the Techno experience. It's a perfect example of cost-effective yet high-impact design.",
        "date": "17/09/2022",
        "tags": ["#LED"],
        "project_images": ["technology/310327904_3387298194880455_5559161714487046528_n.jpg","technology/10403852_3387301031546838_2811532289523958075_n.jpg","technology/310644190_3387299954880279_8002411201875374940_n.jpg","technology/thumbnail.jpg"]
    },
    {
        "project_title": "Candella",
        "project_description": "We teamed up with Letterlik for a project at Candella, an interior design lamp shop. Our focus was on creating a promotional video. Using our expertise in live video and lighting, we designed a custom stage within Candella's showroom. With PoE-powered custom modules, we efficiently controlled 72 channels of lights, making Candella's design lamps a captivating video canvas",
        "date": "28/03/2021",
        "tags": [],
        "project_images": ["candella/thumbnail.png"]
    },
    {
        "project_title": "Sylvie Kreusch",
        "project_description": "In collaboration with Sylvie Kreusch and Randall Diagre, Spacemakers undertook a project to enhance the live music experience. Our aim was straightforward: to give the audience an authentic insight into the energy and artistry of Sylvie and her band on and off the stage . This project took place at two well-known venues, Ancienne Belgique in Brussels and De Roma in Antwerp.\n\nOur approach was grounded in simplicity and authenticity. We wanted concertgoers to have the opportunity to explore the backstage after the show and feel the atmosphere and discharge off energy from Sylvie and her band after an incredible concert.\n\nTo bring this vision to life, we employed modern technology. During the opening and closing songs of Sylvie's show, we lowered a gauze screen in front of the stage. we harnessed the power of our dedicated NDI setup to enable wireless video transmission with minimal delay. This technology allowed us to seamlessly stream video content to projectors during Sylvie's performance\n\nThe result was subtle yet impactful. As the gauze screen descended, the audience found themselves closer to the heart of the performance, connecting with the energy, passion, and artistry of the musicians. It was a genuine connection between music and technology, enhancing the live music experience in a down-to-earth and meaningful way.",
        "date": "30/03/23, 10/12/22",
        "tags": ["#NDI"],
        "project_images": ["sylvie_kreusch/Snapinsta.app_319533169_133711755950424_2703810357397402559_n_1080.jpg","sylvie_kreusch/Snapinsta.app_320011183_891685358623990_6382480113495475107_n_1080.jpg","sylvie_kreusch/thumbnail.jpg"]
    },
    {
        "project_title": "Knalpot",
        "project_description": "Mobile mini-stage designed by Felix De Kapitein and visualized by Spacemakers.\n8 meters of LED strip divided over a hexagon.",
        "date": "23/04/22",
        "tags": ["#LED"],
        "project_images": ["knalpot/279006508_1119020735351489_3177811483810035543_n.jpg","knalpot/279179074_717495509598299_1460470508252134857_n.jpg","knalpot/thumbnail.jpg"]
    },
    {
        "project_title": "Willy Organ",
        "project_description": "During the summer of 2022, Willy Organ had several shows where Spacemakers utilized multiple smartphone camera feeds to capture every angle of the amusing and eccentric stunts performed on stage in first-person view (FPV). For Pukkelpop 2022, Willy Organ sought look-alikes to deceive the audience into thinking he was on stage. Each look-alike was equipped with a smartphone, streaming their video for us to use. This innovative approach allowed us to rapidly switch between different angles from the stage, capturing and playing back captivating scenes with agility and creativity.",
        "tags": ["#INTERACTIVITY"],
        "project_images": ["willy_organ/298226676_176744468215204_4636957819141426151_n.jpg","willy_organ/298363929_180480801054725_8533069121701263136_n.jpg","willy_organ/298578453_903237837322366_4635577525405037437_n.jpg","willy_organ/301158409_1298736167329780_947245016950576376_n.jpg","willy_organ/301297739_1118945598719712_6296663654021929095_n.jpg","willy_organ/301619302_1297989287637547_2846061304708242570_n.jpg","willy_organ/thumbnail.jpg","willy_organ/thumbnail_pkp.jpg"]
    },
    {
        "project_title": "Obscuur",
        "project_description": "What initially started as \"Festival Friday\" organized by JH Het Molentje in Kuurne has evolved into \"OBSCUUR,\" a rapidly growing festival concept fueled by a highly motivated crew. We've been part of this journey since the beginning, helping to design and operate their stages.\nIn the summer of 2022, they hosted their first festival under the name \"Obscuur.\" During a visit to the venue, our attention was captivated by a massive art structure comprised of numerous hexagonal prisms. We eagerly embraced the challenge of video mapping this intricate structure, crafting bespoke content that allowed us to project mesmerizing lights and shadows onto this unique art piece. This endeavor involved a meticulous process of 3D modeling, printing, and extensive fine-tuning. Our primary hurdle was achieving the perfect perspective and aligning it with the placement of the projectors in the venue",
        "tags": ["#VIDEOMAPPING", "#LED"],
        "project_images": ["obscuur/thumbnail.jpg", "obscuur/obscuur_23/0_Hoge res-273.jpg","obscuur/obscuur_23/0_Hoge res-272.jpg","obscuur/obscuur_23/.DS_Store","obscuur/obscuur_23/0_Hoge res-261.jpg","obscuur/obscuur_23/Last_ones_obscuur_0003_0_Hoge res-252.jpg","obscuur/obscuur_23/0_Hoge res-358.jpg","obscuur/obscuur_23/0_Hoge res-387.jpg","obscuur/obscuur_23/thumbnail.jpg","obscuur/obscuur_23/0_Hoge res-381.jpg","obscuur/obscuur_23/0_Hoge res-356.jpg","obscuur/obscuur_23/0_Hoge res-325.jpg","obscuur/obscuur_23/0_Hoge res-251.jpg","obscuur/obscuur_23/0_Hoge res-324.jpg","obscuur/obscuur_23/0_Hoge res-326.jpg","obscuur/obscuur_23/0_Hoge res-252.jpg","obscuur/obscuur_23/Last_ones_obscuur_0002_0_Hoge res-209.jpg","obscuur/obscuur_23/0_Hoge res-327.jpg","obscuur/obscuur_23/0_Hoge res-243.jpg","obscuur/obscuur_23/0_Hoge res-256.jpg","obscuur/obscuur_22/339948989_775387363760718_6420693456139377916_n.jpg","obscuur/obscuur_22/339807825_1394379904630225_3813277329072680107_n.jpg","obscuur/obscuur_22/340017219_893148851745940_6873104138794709470_n.jpg","obscuur/obscuur_22/339837989_1422682848472361_2960201917645225206_n.jpg","obscuur/obscuur_22/339810255_988411949231417_6428269856712396193_n.jpg","obscuur/obscuur_22/340149778_184917131067123_2701457469559168906_n.jpg","obscuur/obscuur_22/339965586_982906542704470_8792819364670895162_n.jpg","obscuur/obscuur_22/340004816_260538563204112_3979750472962973326_n.jpg"]
    },
    {
        "project_title": "NYE",
        "project_description": "At Youth House Krak, where Spacemakers originated, we took on the task of designing, constructing, and operating a stage for their New Year's Eve event, aptly named \"NYE.\" Our objective was straightforward: to craft an affordable yet remarkable stage for the local young audience of 1000. Our aim was to facilitate a lively celebration with an abundance of visual effects, an exciting countdown, and triggers that would keep the party going all night long.",
        "date": "31/12/2019, 31/12/2021, 21/12/2022",
        "tags": ["#LED"],
        "project_images": ["nye/323891740_909936363691075_6148169260385249699_n.jpg","nye/323430006_5684957321623954_3452188832750325674_n.jpg","nye/thumbnail.jpg","nye/324016061_692288502301441_1762583607556593625_n.jpg"]
    },
    // {
    //     "project_title": "Spacekerk",
    //     "project_description": "In our hometown of Avelgem, a unique event called \"Feesteworp\" occurs every two years. Historically, the weekend culminated with a fireworks display, but due to environmental concerns, fireworks were no longer an option.\nThe event organizers turned to us for innovative alternatives, and we had just the idea: a mesmerizing video mapping projection on the Avelgem church. We embarked on this project by meticulously 3D modeling the entire church, allowing us to craft customized 3D visuals and animations. To make it even more special, we introduced a contest, inviting visual artists from around the world to submit their artwork for projection onto our local church, adding a supra-local touch to our beloved tradition.",
    //     "tags": ["#VIDEOMAPPING"],
    //     "project_images": ["thumbnail.jpg"]
    // },
    {
        "project_title": "Whorses",
        "project_description": "Projection mapping on Whorses’ backdrop with custom mapped content during the release show of ‘Whorses’ Vinyl at De Kreun - Kortrijk",
        "tags": ["#VIDEOMAPPING"],
        "project_images": ["whorses/278550079_117872414208916_1054293604866593195_n.jpg","whorses/278697792_356601999764835_6909703599465251832_n.jpg","whorses/278800235_514323293627516_6127666700348951296_n.jpg","whorses/278830228_402294101420739_1182807331840580514_n.jpg","whorses/278666958_5101912913229028_1784068365763514442_n.jpg","whorses/278743831_734560704377497_5781526261099472195_n.jpg","whorses/278699259_1176384779777932_4641873368065400836_n.jpg","whorses/278690432_539372764258609_1415860613158060895_n.jpg","whorses/278705688_1448522208976303_548941844037887284_n.jpg","whorses/278688814_559366982279587_7047679169141757875_n.jpg","whorses/thumbnail.jpg","whorses/278691118_518706409850582_8709574679924470716_n.jpg","whorses/278688814_559366982279587_7047679169141757875_n (1).jpg","whorses/278810306_940964203236478_5972984393276949944_n.jpg","whorses/278682157_1833278403669731_3893592891885491338_n.jpg"]
    },
    // {
    //     "project_title": "Compact Disk Dummies",
    //     "project_description": "In the summer of 2023, Compact Disk Dummies channeled all their energy into two major events: Pukkelpop and Rock Werchter. These daytime shows demanded an extra boost to amplify their already energetic performances through light and video.\nTo achieve this, we, in collaboration with Randall Diagre, designed a long bar consisting of 30 blinder matrices, delivering a powerful and impactful light output that truly made a difference. We viewed this bar as an extension of the LED wall, allowing us to send video content across the matrix. To ensure perfect synchronization, we employed timecode, harmonizing the entire spectacle for an unforgettable experience.",
    //     "tags": ["#LED", "#VIDEOMAPPING"],
    //     "project_images": ["thumbnail.jpg"]
    // },
    {
        "project_title": "Campo Solar - Gertie & Decraene",
        "project_description": "Deejay Mr.T and Gert-Jan Loobuck teamed up for a live performance at Campo Solar Festival, going by the name \"Gertie&Decraene.\" Tor Decraene, also known as Mr.T, wowed the audience with his turntablism skills, while Gert-Jan added a vibrant live drumming element to the show.\nIn addition to their music collaboration, Mr.T had the idea to synchronize videos with his music, adding a touch of humor with memes. Thanks to NDI, we flawlessly displayed these clips in perfect sync on the LED wall. To heighten the live experience, we introduced additional live content and effects",
        "tags": ["#NDI"],
        "project_images": ["gertie_decraene/_HL99778_Gertie&Decraene_HL.jpg","gertie_decraene/_HL99498_Gertie&Decraene_HL.jpg","gertie_decraene/_HL99772_Gertie&Decraene_HL.jpg","gertie_decraene/_HL99495_Gertie&Decraene_HL.jpg","gertie_decraene/_HL99496_Gertie&Decraene_HL.jpg","gertie_decraene/_HL99771_Gertie&Decraene_HL-Kopie1.jpg","gertie_decraene/_HL99759-2_Gertie&Decraene_HL.jpg","gertie_decraene/thumbnail.jpg","gertie_decraene/_HL99759_Gertie&Decraene_HL-Kopie1.jpg"]
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