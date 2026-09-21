import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    ShieldCheck,
    User,
    AtSign,
    Diamond,
    MessageSquare,
    ArrowRight,
} from "lucide-react";
import "./Contact.css";

/* ---- Edit these with your real details ---- */
const CONTACT_EMAIL = "davemite51@gmail.com";
const CONTACT_PHONE = "+234 704 039 6758";
const CONTACT_LOCATION = "Ibadan, Oyo State, Nigeria";
/* --------------------------------------------- */

const GithubIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.74.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
);

const LinkedinIcon = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
);

const XIcon = (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
        <path d="M13.68 10.62 20.5 3h-1.62l-5.93 6.62L8.2 3H2.5l7.15 10.02L2.5 21h1.62l6.26-6.98L15.8 21h5.7l-7.82-10.38Zm-2.22 2.48-.73-1.01L4.98 4.2h2.49l4.65 6.44.72 1.01 6.05 8.4h-2.49l-4.94-6.85Z" />
    </svg>
);

const infoCards = [
    {
        icon: Mail,
        label: "Email",
        value: CONTACT_EMAIL,
        note: "I usually reply within 24 hours.",
        href: `mailto:${CONTACT_EMAIL}`,
    },
    {
        icon: Phone,
        label: "Phone / WhatsApp",
        value: CONTACT_PHONE,
        note: "Feel free to chat anytime.",
        href: `tel:${CONTACT_PHONE.replace(/\s+/g, "")}`,
    },
    {
        icon: MapPin,
        label: "Location",
        value: CONTACT_LOCATION,
        note: "Open to remote opportunities.",
        href: null,
    },
];

const socials = [
    { Icon: GithubIcon, href: "https://github.com/", label: "GitHub" },
    { Icon: LinkedinIcon, href: "https://linkedin.com/", label: "LinkedIn" },
    { Icon: XIcon, href: "https://x.com/", label: "X" },
];

export default function Contact() {
    const [method, setMethod] = useState("email"); // "email" | "phone"
    const [form, setForm] = useState({ name: "", contact: "", subject: "", message: "" });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleMethodChange = (next) => {
        setMethod(next);
        setForm((prev) => ({ ...prev, contact: "", subject: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (method === "email") {
            const body = encodeURIComponent(
                `${form.message}\n\n— ${form.name} (${form.contact})`
            );
            const subject = encodeURIComponent(form.subject || "Portfolio contact");
            window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        } else {
            const waNumber = CONTACT_PHONE.replace(/\D/g, "");
            const text = encodeURIComponent(
                `Hi, I'm ${form.name} (${form.contact}).\n\n${form.message}`
            );
            window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <section className="contact">
            <div className="contact__beam contact__beam--one" />
            <div className="contact__beam contact__beam--two" />
            <div className="contact__beam contact__beam--three" />

            <div className="contact__pings" aria-hidden="true">
                <div className="contact__ping-origin contact__ping-origin--a">
                    <span className="contact__ping" style={{ animationDelay: "0s" }} />
                    <span className="contact__ping" style={{ animationDelay: "1.3s" }} />
                    <span className="contact__ping" style={{ animationDelay: "2.6s" }} />
                </div>
                <div className="contact__ping-origin contact__ping-origin--b">
                    <span className="contact__ping" style={{ animationDelay: "0.6s" }} />
                    <span className="contact__ping" style={{ animationDelay: "1.9s" }} />
                    <span className="contact__ping" style={{ animationDelay: "3.2s" }} />
                </div>
            </div>

            <div className="contact__inner">
                <motion.div
                    className="contact__content"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="contact__eyebrow">
                        <span className="contact__eyebrow-line" />
                        GET IN TOUCH
                    </div>

                    <h2 className="contact__heading">
                        <span className="contact__heading-light">Let's Work</span>
                        <span className="contact__heading-gradient">Together</span>
                    </h2>

                    <p className="contact__paragraph">
                        Have a project in mind, a question, or just want to say hello?
                        I'd love to hear from you. Feel free to reach out through any of
                        the channels below or send me a message using the form.
                    </p>

                    <p className="contact__signature">
                        Good Ideas
                        <br />
                        Start With
                        <br />A Message
                    </p>

                    <div className="contact__info-list">
                        {infoCards.map(({ icon: Icon, label, value, note, href }) => {
                            const Wrapper = href ? "a" : "div";
                            return (
                                <Wrapper
                                    className="contact__info-card"
                                    key={label}
                                    {...(href ? { href } : {})}
                                >
                                    <span className="contact__info-icon">
                                        <Icon size={18} />
                                    </span>
                                    <span className="contact__info-text">
                                        <span className="contact__info-label">{label}</span>
                                        <span className="contact__info-value">{value}</span>
                                        <span className="contact__info-note">{note}</span>
                                    </span>
                                </Wrapper>
                            );
                        })}
                    </div>

                    <div className="contact__socials-row">
                        <div className="contact__socials">
                            {socials.map(({ Icon, href, label }) => (
                                <a href={href} target="_blank" rel="noreferrer" key={label} aria-label={label}>
                                    <Icon />
                                </a>
                            ))}
                        </div>
                        <a href="#" className="contact__connect">
                            Let's connect <ArrowRight size={15} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="contact__form-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                    <div className="contact__form-header">
                        <Send size={20} />
                        <h3>Send Me a Message</h3>
                    </div>
                    <p className="contact__form-subtitle">
                        Fill out the form below and I'll get back to you as soon as
                        possible.
                    </p>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__method-toggle" role="tablist">
                            <button
                                type="button"
                                className={`contact__method-btn${method === "email" ? " contact__method-btn--active" : ""}`}
                                onClick={() => handleMethodChange("email")}
                            >
                                <Mail size={15} /> Email
                            </button>
                            <button
                                type="button"
                                className={`contact__method-btn${method === "phone" ? " contact__method-btn--active" : ""}`}
                                onClick={() => handleMethodChange("phone")}
                            >
                                <Phone size={15} /> Phone / WhatsApp
                            </button>
                        </div>

                        <div className="contact__form-row">
                            <div className="contact__field">
                                <User size={16} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact__field">
                                {method === "email" ? <AtSign size={16} /> : <Phone size={16} />}
                                <input
                                    type={method === "email" ? "email" : "tel"}
                                    name="contact"
                                    placeholder={
                                        method === "email" ? "Your Email" : "Your Phone Number"
                                    }
                                    value={form.contact}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {method === "email" && (
                            <div className="contact__field">
                                <Diamond size={16} />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        <div className="contact__field contact__field--textarea">
                            <MessageSquare size={16} />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="contact__submit">
                            <Send size={16} />
                            {method === "email" ? "Send Message" : "Send via WhatsApp"}
                            <ArrowRight size={16} />
                        </button>

                        <p className="contact__safe-note">
                            <ShieldCheck size={14} />
                            Your information is safe with me.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}