import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./SplashScreen.css";

const TERMINAL_LINES = [
    "> initializing_portfolio...",
    '> console.log("Welcome i am glad to have you here!")',
    "> loading_creative_mindset...",
    "> connecting_ideas_to_code...",
    '> system.status = "READY"',
];

const TOTAL_CHARS = TERMINAL_LINES.reduce((sum, line) => sum + line.length, 0);

const FRAGMENTS = [
    { text: "const idea = () => build();", top: "10%", left: "5%", duration: 9, delay: 0 },
    { text: "<Portfolio ready />", top: "18%", right: "7%", duration: 11, delay: 1.2 },
    { text: "npm run create", top: "34%", left: "3%", duration: 10, delay: 2.4 },
    { text: "git commit -m 'ship it'", top: "62%", left: "6%", duration: 12, delay: 0.6 },
    { text: "{ passion: true }", top: "70%", right: "6%", duration: 9.5, delay: 1.8 },
    { text: "await dream();", top: "84%", left: "14%", duration: 10.5, delay: 3 },
    { text: "export default Future;", top: "46%", right: "3%", duration: 13, delay: 0.3 },
    { text: "</>", top: "8%", left: "42%", duration: 8, delay: 2 },
];

/* ---- tiny syntax highlighter for the terminal text ---- */
const TOKEN_RE = /("[^"]*"?|[A-Za-z_]\w*|\.{3}|[=>.]|\s+|.)/g;

function tokenClass(token) {
    if (token === ">") return "splash__tok--prompt";
    if (token.startsWith('"')) return "splash__tok--string";
    if (token === "=" || token === "(" || token === ")") return "splash__tok--op";
    if (token === "console") return "splash__tok--obj";
    if (token === "log") return "splash__tok--prop";
    if (token === "...") return "splash__tok--dim";
    if (token === "system") return "splash__tok--obj";
    if (token === "status") return "splash__tok--prop";
    if (token.includes("_")) return "splash__tok--cmd";
    return "";
}

function HighlightedLine({ text }) {
    const tokens = text.match(TOKEN_RE) || [];
    return tokens.map((token, i) => (
        <span key={i} className={tokenClass(token)}>
            {token}
        </span>
    ));
}

/*
  Props
  - onReveal:   called the moment the splash starts fading out
                (mount your portfolio here so its entrance animations play as the splash fades)
  - onComplete: called once the splash has fully faded and can be removed
*/
export default function SplashScreen({ onReveal = () => {}, onComplete = () => {} }) {
    const [pos, setPos] = useState({ line: 0, char: 0 });
    const [phase, setPhase] = useState("typing"); // "typing" | "glow" | "exit"

    const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Lock page scroll while the splash is visible
    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, []);

    // Typewriter
    useEffect(() => {
        if (phase !== "typing") return;

        if (pos.line >= TERMINAL_LINES.length) {
            setPhase("glow");
            return;
        }

        const current = TERMINAL_LINES[pos.line];
        const atLineEnd = pos.char >= current.length;
        const delay = reducedMotion ? 0 : atLineEnd ? 340 : 24 + Math.random() * 32;

        const timer = setTimeout(() => {
            setPos((p) =>
                atLineEnd ? { line: p.line + 1, char: 0 } : { line: p.line, char: p.char + 1 }
            );
        }, delay);

        return () => clearTimeout(timer);
    }, [pos, phase, reducedMotion]);

    // Glow briefly, then fade out and hand over to the portfolio
    useEffect(() => {
        if (phase === "glow") {
            const timer = setTimeout(() => {
                setPhase("exit");
                onReveal();
            }, reducedMotion ? 300 : 1000);
            return () => clearTimeout(timer);
        }

        if (phase === "exit") {
            const timer = setTimeout(() => onComplete(), reducedMotion ? 0 : 850);
            return () => clearTimeout(timer);
        }
    }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

    const typedChars =
        TERMINAL_LINES.slice(0, Math.min(pos.line, TERMINAL_LINES.length)).reduce(
            (sum, line) => sum + line.length,
            0
        ) + pos.char;

    const percent = phase === "typing" ? Math.min(99, Math.round((typedChars / TOTAL_CHARS) * 100)) : 100;

    const completedLines = TERMINAL_LINES.slice(0, pos.line);
    const activeLine =
        pos.line < TERMINAL_LINES.length ? TERMINAL_LINES[pos.line].slice(0, pos.char) : null;

    return (
        <div
            className={`splash${phase === "exit" ? " splash--exit" : ""}`}
            role="status"
            aria-live="polite"
            aria-label="Loading portfolio"
        >
            {/* Background layers */}
            <div className="splash__grid" />
            <div className="splash__floor" />
            <div className="splash__circuit" />
            <div className="splash__glow splash__glow--left" />
            <div className="splash__glow splash__glow--right" />
            <div className="splash__glow splash__glow--bottom" />

            <div className="splash__fragments" aria-hidden="true">
                {FRAGMENTS.map(({ text, duration, delay, ...position }) => (
                    <span
                        key={text}
                        className="splash__fragment"
                        style={{
                            ...position,
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                        }}
                    >
                        {text}
                    </span>
                ))}
            </div>

            {/* Foreground */}
            <div className="splash__center">
                <motion.div
                    className={`splash__terminal${phase !== "typing" ? " splash__terminal--glow" : ""}`}
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="splash__terminal-body">
                        {completedLines.map((line) => (
                            <div className="splash__line" key={line}>
                                <HighlightedLine text={line} />
                            </div>
                        ))}

                        {activeLine !== null && (
                            <div className="splash__line">
                                <HighlightedLine text={activeLine} />
                                <span className="splash__cursor" />
                            </div>
                        )}

                        {activeLine === null && (
                            <div className="splash__line">
                                <span className="splash__tok--prompt">{">"}</span>
                                <span className="splash__cursor" />
                            </div>
                        )}
                    </div>
                </motion.div>

                <motion.h1
                    className="splash__name"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                >
                    <span className="splash__name-tag">&lt;</span>
                    <span className="splash__name-text">DavidAdemola</span>
                    <span className="splash__name-tag"> /&gt;</span>
                </motion.h1>

                <motion.p
                    className="splash__quote"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: 1.6 }}
                >
                    “Every great idea starts with a single line of code.”
                </motion.p>

                <div className="splash__progress">
                    <div className="splash__bar">
                        <div className="splash__bar-fill" style={{ width: `${percent}%` }} />
                    </div>
                    <p className="splash__status">
                        PREPARING YOUR EXPERIENCE — <strong>{percent}%</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}   