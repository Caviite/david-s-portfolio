import { motion } from "framer-motion";
import {
    Code2,
    Palette,
    Braces,
    Atom,
    Leaf,
    Database,
    Server,
    Flame,
    GitBranch,
} from "lucide-react";
import "./Skills.css";

const skills = [
    {
        label: "HTML",
        desc: "Structure clean and semantic web pages.",
        icon: Code2,
        color: "#E34F26",
        percent: 80,
    },
    {
        label: "CSS",
        desc: "Style beautiful and responsive interfaces.",
        icon: Palette,
        color: "#2965F1",
        percent: 75,
    },
    {
        label: "JavaScript",
        desc: "Add interactivity and bring ideas to life.",
        icon: Braces,
        color: "#F7DF1E",
        percent: 92,
    },
    {
        label: "React",
        desc: "Build dynamic and modern user interfaces.",
        icon: Atom,
        color: "#61DAFB",
        percent: 90,
    },
    {
        label: "Node.js",
        desc: "Create fast and scalable backend services.",
        icon: Leaf,
        color: "#3C873A",
        percent: 88,
    },
    {
        label: "Express.js",
        desc: "Build REST APIs and handle server-side logic.",
        icon: Server,
        color: "#e2e8f0",
        percent: 85,
    },
    {
        label: "MongoDB",
        desc: "Store and manage data flexibly and efficiently.",
        icon: Database,
        color: "#47A248",
        percent: 85,
    },
    {
        label: "Firebase",
        desc: "Handle authentication, database and hosting.",
        icon: Flame,
        color: "#FFCA28",
        percent: 65,
    },
    {
        label: "Git & GitHub",
        desc: "Version control and collaborate on projects.",
        icon: GitBranch,
        color: "#F05033",
        percent: 88,
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function SkillCard({ label, desc, icon: Icon, color, percent }) {
    return (
        <motion.div
            className="skills__card"
            variants={cardVariant}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
            <div className="skills__icon" style={{ color }}>
                <Icon size={26} strokeWidth={1.8} />
            </div>
            <h3 className="skills__card-title">{label}</h3>
            <p className="skills__card-desc">{desc}</p>

            <div className="skills__bar-row">
                <div className="skills__bar-track">
                    <motion.div
                        className="skills__bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                    />
                </div>
                <span className="skills__bar-percent">{percent}%</span>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section className="skills">
            <div className="skills__inner">
                <motion.div
                    className="skills__content"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="skills__eyebrow">
                        <span className="skills__eyebrow-line" />
                        MY SKILLS
                    </div>

                    <h2 className="skills__heading">
                        <span className="skills__heading-light">Tools I Use</span>
                        <span className="skills__heading-gradient">
                            to Build Great Things
                        </span>
                    </h2>

                    <p className="skills__paragraph">
                        I work with modern technologies to build responsive, fast, and
                        user-friendly web applications. These are the tools and
                        technologies I'm skilled in and constantly improving on.
                    </p>

                    <p className="skills__signature">
                        Better Tools
                        <br />
                        Bigger Dreams
                    </p>
                </motion.div>

                <motion.div
                    className="skills__grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {skills.map((skill) => (
                        <SkillCard key={skill.label} {...skill} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}