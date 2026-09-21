import { motion } from "framer-motion";
import { ExternalLink, Wallet, IdCard, GraduationCap } from "lucide-react";
import "./Projects.css";

const GithubIcon = (props) => (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.74.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
);

const projects = [
    {
        title: "KoloPocket",
        description:
            "A fintech web app digitizing Nigeria's informal Ajo rotating savings groups — built for Alajo collectors to manage contributions digitally.",
        tags: ["React", "MongoDB", "Express", "Node.js"],
        icon: Wallet,
        accent: "#4f8dff",
        liveUrl: "#",
        codeUrl: "#",
        flagship: true,
    },
    {
        title: "Business Card Generator",
        description:
            "An AI-powered tool that generates polished digital business cards from a few user inputs, built with a React front end and Node backend.",
        tags: ["React", "Node.js", "AI API"],
        icon: IdCard,
        accent: "#7c7bff",
        liveUrl: "#",
        codeUrl: "#",
    },
    {
        title: "Quest Code Institute",
        description:
            "A tech school management portal for handling student records, courses, and admin workflows for a coding institute.",
        tags: ["JavaScript", "Firebase"],
        icon: GraduationCap,
        accent: "#60a5fa",
        liveUrl: "#",
        codeUrl: "#",
    },
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
};

const card = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects__inner">
                <motion.div
                    className="projects__header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="projects__eyebrow">
                        <span className="projects__eyebrow-line" />
                        PROJECTS
                    </div>
                    <h2 className="projects__heading">Selected Work</h2>
                    <p className="projects__subheading">
                        A few real projects that show how I turn ideas into working
                        products.
                    </p>
                </motion.div>

                <motion.div
                    className="projects__grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projects.map(
                        ({
                            title,
                            description,
                            tags,
                            icon: Icon,
                            accent,
                            liveUrl,
                            codeUrl,
                            flagship,
                        }) => (
                            <motion.div
                                className={`projects__card${flagship ? " projects__card--flagship" : ""}`}
                                key={title}
                                variants={card}
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                            >
                                {flagship && (
                                    <span className="projects__flagship-tag">Flagship</span>
                                )}

                                <div
                                    className="projects__mock"
                                    style={{ "--accent": accent }}
                                >
                                    <div className="projects__mock-bar">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <div className="projects__mock-body">
                                        <Icon size={40} color={accent} strokeWidth={1.6} />
                                    </div>
                                </div>

                                <h3 className="projects__card-title">{title}</h3>
                                <p className="projects__card-desc">{description}</p>

                                <ul className="projects__tags">
                                    {tags.map((tag) => (
                                        <li key={tag}>{tag}</li>
                                    ))}
                                </ul>

                                <div className="projects__links">
                                    <a href={liveUrl} target="_blank" rel="noreferrer">
                                        Live Demo <ExternalLink size={15} />
                                    </a>
                                    <a href={codeUrl} target="_blank" rel="noreferrer">
                                        <GithubIcon /> Code
                                    </a>
                                </div>
                            </motion.div>
                        )
                    )}
                </motion.div>
            </div>
        </section>
    );
}