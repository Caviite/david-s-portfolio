import { motion } from "framer-motion";
import {
    ArrowRight,
    Code2,
    Palette,
    Braces,
    Atom,
    Leaf,
    Database,
} from "lucide-react";

const GithubIcon = (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.74.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
);

const LinkedinIcon = (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
);

const XIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
        <path d="M13.68 10.62 20.5 3h-1.62l-5.93 6.62L8.2 3H2.5l7.15 10.02L2.5 21h1.62l6.26-6.98L15.8 21h5.7l-7.82-10.38Zm-2.22 2.48-.73-1.01L4.98 4.2h2.49l4.65 6.44.72 1.01 6.05 8.4h-2.49l-4.94-6.85Z" />
    </svg>
);
import heroPhoto from "../assets/david-hero.jpg"; // move david-hero.jpg into src/assets/
import "../page/portfolio.css"; // move portfolio.css into src/page/

const techStack = [
    { label: "HTML", icon: Code2, color: "#E34F26" },
    { label: "CSS", icon: Palette, color: "#2965F1" },
    { label: "JavaScript", icon: Braces, color: "#F7DF1E" },
    { label: "React", icon: Atom, color: "#61DAFB" },
    { label: "Node.js", icon: Leaf, color: "#3C873A" },
    { label: "MongoDB", icon: Database, color: "#47A248" },
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Portifolio() {



    return (
        <section className="hero">
            <div className="hero__stars" />
            <div className="hero__glow hero__glow--one" />
            <div className="hero__glow hero__glow--two" />

            <div className="hero__inner">
                <motion.div
                    className="hero__content"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div className="hero__eyebrow" variants={item}>
                        <span className="hero__eyebrow-line" />
                        FULL STACK DEVELOPER
                    </motion.div>

                    <motion.h1 className="hero__name" variants={item}>
                        <span className="hero__name-first">David</span>
                        <span className="hero__name-last">Ademola</span>
                    </motion.h1>

                    <motion.p className="hero__tagline" variants={item}>
                        <span className="hero__eyebrow-line hero__eyebrow-line--small" />
                        Turning Ideas Into Scalable Web Solutions
                    </motion.p>

                    <motion.p className="hero__description" variants={item}>
                        I build responsive, functional, and user-focused web
                        applications that solve real problems and create great digital
                        experiences.
                    </motion.p>

                    <motion.ul className="hero__stack" variants={item}>
                        {techStack.map(({ label, icon: Icon, color }) => (
                            <li className="hero__stack-item" key={label}>
                                <Icon size={22} color={color} strokeWidth={2} />
                                <span>{label}</span>
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div variants={item}>
                        <a href="#projects" className="hero__cta">
                            Let's Build Something Great
                            <ArrowRight size={18} />
                        </a>
                    </motion.div>

                    <motion.div className="hero__socials" variants={item}>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <GithubIcon />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <LinkedinIcon />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
                            <XIcon />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero__portrait"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="hero__portrait-frame">
                        <img src={heroPhoto} alt="David Ademola" />
                    </div>

                    <motion.div
                        className="hero__badge hero__badge--top"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <span className="hero__badge-code">{"</>"}</span>
                    </motion.div>

                    <motion.div
                        className="hero__badge hero__badge--bottom"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.05 }}
                    >
                        <span className="hero__badge-title">1+ Yrs Experience</span>
                        <span className="hero__badge-sub">MERN Stack Developer</span>
                    </motion.div>
                </motion.div>

                <div className="hero__vertical-label">
                    {["CODE", "DESIGN", "BUILD", "GROW"].map((word) => (
                        <span key={word}>{word}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}