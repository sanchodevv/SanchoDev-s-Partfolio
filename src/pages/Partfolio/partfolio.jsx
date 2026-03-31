import "./partfolio.css";
import { useState } from "react";

const Partfolio = () => {
    const categories = ["All", "Team", "LandingPage", "Shopping", "Dashboard", "Other" ];
    const [activeCategory, setActiveCategory] = useState("All");

    const projects = [
        {
            id: 1,
            title: "Ai Tech",
            link: "https://ai-technologies.vercel.app/",
            img: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D",
            category: "Dashboard",
            description: [
                {id: 1, text: "React"},
                {id: 2, text: "Typescript"},
                {id: 1, text: "Tailwind"},

            ]
        },
        {
            id: 2,
            title: "Gavhar",
            link: "https://gavhar-gamma.vercel.app/",
            img: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D",
            category: "Shopping",
           description: [
                {id: 1, text: "React"},
                {id: 2, text: "Typescript"},
                {id: 1, text: "Tailwind"},

            ]
        },
        {
            id: 3,
            title: "Cofferoasters",
            link: "https://cofferoasters-seven.vercel.app/",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNzRJAdOrhmYrFZkG1W-6YEZn5db0P9slVQ&s",
            category: "LandingPage",
            description: [
                {id: 1, text: "Html"},
                {id: 2, text: "Css"},
                {id: 1, text: "Javascript"},

            ]
        },
        {
            id: 4,
            title: "Juniper",
            link: "https://juniper-eight-xi.vercel.app",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVGfnyg3rVAcSKNN10UhI6WOIcAsNkNOykQ&s",
            category: "LandingPage",
            description: [
                {id: 1, text: "Html"},
                {id: 2, text: "Tailwind"},
                {id: 1, text: "Javascript"},

            ]
        },
        {
            id: 5,
            title: "Movies Catalog",
            link: "https://movies-catolog.vercel.app/",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnHegmZzaO3qoVwIKSwvmXZOwhkBytQR9Uw&s",
            category: "Other",
           description: [
                {id: 1, text: "Html"},
                {id: 2, text: "Bootstrap"},
                {id: 1, text: "Javascript"},

            ]
        },
        {
            id: 6,
            title: "Trafalgar",
            link: "https://trafalgar-teal-nine.vercel.app/",
            img: "https://www.aha.org/sites/default/files/2023-05/Retail-Clinics-Target-Chronic-Diseases.png",
            category: "LandingPage",
            description: [
                {id: 1, text: "Html"},
                {id: 2, text: "Css"},
                {id: 1, text: "Javascript"},

            ]
        },
        {
            id: 7,
            title: "Alpine",
            link: "https://alpine-delta-six.vercel.app/",
            img: "https://cdn.corporatefinanceinstitute.com/assets/marketing-1024x594.jpeg",
            category: "LandingPage",
            description: [
                {id: 1, text: "React"},
                {id: 2, text: "Typescript"},
                {id: 1, text: "Tailwind"},

            ]
        },
        
    ];

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <section className='partfolio'>
            <h1>Partfolio</h1>
            <span></span>

            <div className='partfolio-filters'>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={activeCategory === category ? "active" : ""}
                        type='button'
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='part__cards'>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <div key={project.id} className='part__card'>
                            <a href={project.link} target='_blank' rel='noreferrer'>
                                <img src={project.img} alt={project.title} />
                            </a>
                            <h4>{project.title}</h4>
                            <div className="fd">
                            {project.description.map((item) => (
                                <p key={item.id}>{item.text}</p>
                            ))}
                                
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No projects in this category.</p>
                )}
            </div>
        </section>
    );
};

export default Partfolio;
