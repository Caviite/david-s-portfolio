import "./Footer.css";

const GithubIcon = (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.74.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
);

const LinkedinIcon = (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
);

const XIcon = (props) => (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
        <path d="M13.68 10.62 20.5 3h-1.62l-5.93 6.62L8.2 3H2.5l7.15 10.02L2.5 21h1.62l6.26-6.98L15.8 21h5.7l-7.82-10.38Zm-2.22 2.48-.73-1.01L4.98 4.2h2.49l4.65 6.44.72 1.01 6.05 8.4h-2.49l-4.94-6.85Z" />
    </svg>
);

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    { Icon: GithubIcon, href: "https://github.com/", label: "GitHub" },
    { Icon: LinkedinIcon, href: "https://linkedin.com/", label: "LinkedIn" },
    { Icon: XIcon, href: "https://x.com/", label: "X" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__top">
                    <span className="footer__logo">David Ademola</span>

                    <nav className="footer__nav">
                        {navLinks.map(({ label, href }) => (
                            <a href={href} key={label}>
                                {label}
                            </a>
                        ))}
                    </nav>

                    <div className="footer__socials">
                        {socials.map(({ Icon, href, label }) => (
                            <a href={href} target="_blank" rel="noreferrer" key={label} aria-label={label}>
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer__divider" />

                <div className="footer__bottom">
                    <span>© {year} David Ademola. All rights reserved.</span>
                    <span>Built with React</span>
                </div>
            </div>
        </footer>
    );
}