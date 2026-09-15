import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Lightbulb,
    TrendingUp,
    Users,
    Target,
    Crown,
} from "lucide-react";
import "./About.css";

const traits = [
    {
        icon: Code2,
        title: "Web Development",
        desc: "HTML, CSS, JavaScript, React, Node.js",
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        desc: "Turn ideas into real solutions",
    },
    {
        icon: TrendingUp,
        title: "Continuous Learning",
        desc: "Better skills, bigger goals",
    },
    {
        icon: Users,
        title: "Team Player",
        desc: "Great things happen together",
    },
    {
        icon: Target,
        title: "Goal Oriented",
        desc: "Build, improve, achieve",
    },
    {
        icon: Crown,
        title: "Future Vision",
        desc: "Senior Developer & Remote Work",
    },
];

const codeLines = [
    "const developer = {",
    "  name: 'David Ademola',",
    "  role: 'Full Stack Developer',",
    "  stack: ['React', 'Node.js', 'MongoDB'],",
    "  focus: 'Clean code, real solutions',",
    "  status: 'Open to new opportunities'",
    "};",
];

function useTypewriter(lines, speed = 35, pause = 1800) {
    const [displayedLines, setDisplayedLines] = useState([]);
    const [currentLine, setCurrentLine] = useState("");

    useEffect(() => {
        let lineIndex = 0;
        let charIndex = 0;
        let timeoutId;
        let cancelled = false;

        const typeNextChar = () => {
            if (cancelled) return;

            if (lineIndex >= lines.length) {
                timeoutId = setTimeout(() => {
                    if (cancelled) return;
                    setDisplayedLines([]);
                    setCurrentLine("");
                    lineIndex = 0;
                    charIndex = 0;
                    typeNextChar();
                }, pause);
                return;
            }

            const line = lines[lineIndex];

            if (charIndex <= line.length) {
                setCurrentLine(line.slice(0, charIndex));
                charIndex++;
                timeoutId = setTimeout(typeNextChar, speed);
            } else {
                setDisplayedLines((prev) => [...prev, line]);
                setCurrentLine("");
                lineIndex++;
                charIndex = 0;
                timeoutId = setTimeout(typeNextChar, speed);
            }
        };

        typeNextChar();

        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
        };
    }, [lines, speed, pause]);

    return { displayedLines, currentLine };
}

export default function About() {
    const { displayedLines, currentLine } = useTypewriter(codeLines);

    return (
        <section className="about">
            <div className="about__inner">
                <motion.div
                    className="about__content"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="about__eyebrow">
                        <span className="about__eyebrow-line" />
                        ABOUT ME
                    </div>

                    <h2 className="about__heading">
                        <span className="about__heading-light">Hey, I'm</span>
                        <span className="about__heading-gradient">David Ademola</span>
                    </h2>

                    <p className="about__role">
                        Full Stack Developer | Problem Solver | Lifelong Learner
                    </p>

                    <p className="about__paragraph">
                        I'm a passionate and dedicated web developer who enjoys turning
                        ideas into real, functional, and user-friendly web applications.
                        I specialize in building modern web solutions using the latest
                        technologies, always focusing on clean code, great performance,
                        and smooth user experiences.
                    </p>

                    <p className="about__paragraph">
                        I may be a junior developer, but I'm always open to learning,
                        growing, and taking on new challenges. I believe in consistency,
                        continuous improvement, and the power of good teamwork.
                    </p>

                    <div className="about__traits">
                        {traits.map(({ icon: Icon, title, desc }) => (
                            <div className="about__trait" key={title}>
                                <Icon size={20} className="about__trait-icon" />
                                <span className="about__trait-title">{title}</span>
                                <span className="about__trait-desc">{desc}</span>
                            </div>
                        ))}
                    </div>

                    <p className="about__signature">David Ademola</p>

                    <div className="about__quote">
                        <span className="about__quote-bar" />
                        <p>"Not just building websites, I'm building my future."</p>
                    </div>
                </motion.div>

                <motion.div
                    className="about__monitor-wrap"
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                >
                    <div className="about__monitor">
                        <div className="about__monitor-bar">
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="about__monitor-screen">
                            <div className="about__code">
                                {displayedLines.map((line, i) => (
                                    <div className="about__code-line" key={i}>
                                        {line}
                                    </div>
                                ))}
                                <div className="about__code-line">
                                    {currentLine}
                                    <span className="about__cursor" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__monitor-stand" />
                    <div className="about__monitor-base" />
                </motion.div>
            </div>
        </section>
    );
}