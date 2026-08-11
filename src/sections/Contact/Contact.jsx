import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GlassCard from "../../components/GlassCard/GlassCard";
import Button from "../../components/Button/Button";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import AuroraBackground from "../../components/AuroraBackground/AuroraBackground";

import { owner } from "../../data/portfolioData";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const WEB3FORMS_ACCESS_KEY =
  " import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  // idle | submitting | success | error

  const validate = () => {
    const next = {};

    if (!form.name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      next.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      next.message = "Please enter a message.";
    }

    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: form.name,
            email: form.email,
            message: form.message,
            subject: `New Portfolio Contact Message from ${form.name}`,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm(initialForm);
        setErrors({});
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32"
      aria-label="Contact"
    >
      <AuroraBackground
        variant="section"
        className="opacity-50"
      />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Contact"
          title="Have a project in mind? Let's build it"
          highlight="build it"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ================= LEFT CTA ================= */}

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard
              interactive={false}
              className="flex h-full flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-text-primary">
                  Let's create something meaningful together.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                  Have a project, collaboration, or opportunity in mind?
                  Feel free to reach out. I'd be happy to connect and
                  discuss it.
                </p>

                <div className="mt-8 space-y-4">

                  {/* Email */}

                  <a
                    href={`mailto:${owner.email}`}
                    className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    <span className="glass-surface flex h-10 w-10 items-center justify-center rounded-xl text-primary">
                      <FiMail
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>

                    {owner.email}
                  </a>

                  {/* Location */}

                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="glass-surface flex h-10 w-10 items-center justify-center rounded-xl text-primary">
                      <FiMapPin
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>

                    {owner.location}
                  </div>

                </div>
              </div>

              <div className="mt-10 border-t border-border-glass pt-6">
                <p className="mb-3 text-xs uppercase tracking-wide text-text-muted">
                  Find me elsewhere
                </p>

                <SocialIcons />
              </div>
            </GlassCard>
          </motion.div>

          {/* ================= FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <GlassCard interactive={false}>

              {/* ================= SUCCESS ================= */}

              {status === "success" ? (
                <div
                  role="status"
                  className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <FiCheckCircle
                    className="h-12 w-12 text-success"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-semibold text-text-primary">
                    Message sent
                  </h3>

                  <p className="mt-2 max-w-sm text-sm text-text-secondary">
                    Thanks for reaching out — I'll get back to you
                    within a day.
                  </p>

                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Send another message
                  </Button>
                </div>

              ) : (

                /* ================= FORM ================= */

                <form
                  onSubmit={handleSubmit}
                  noValidate
                >

                  {/* Name + Email */}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    {/* Name */}

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-text-secondary"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name
                            ? "name-error"
                            : undefined
                        }
                        className="w-full rounded-xl border border-border-glass bg-white/[0.03] px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary/50"
                        placeholder="Your name"
                      />

                      {errors.name && (
                        <p
                          id="name-error"
                          className="mt-1.5 text-xs text-red-400"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-text-secondary"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email
                            ? "email-error"
                            : undefined
                        }
                        className="w-full rounded-xl border border-border-glass bg-white/[0.03] px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary/50"
                        placeholder="you@example.com"
                      />

                      {errors.email && (
                        <p
                          id="email-error"
                          className="mt-1.5 text-xs text-red-400"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Message */}

                  <div className="mt-5">

                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-text-secondary"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message
                          ? "message-error"
                          : undefined
                      }
                      className="w-full resize-none rounded-xl border border-border-glass bg-white/[0.03] px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary/50"
                      placeholder="Tell me about your project..."
                    />

                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-1.5 text-xs text-red-400"
                      >
                        {errors.message}
                      </p>
                    )}

                  </div>

                  {/* Error message */}

                  {status === "error" && (
                    <p className="mt-4 text-sm text-red-400">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  {/* Submit */}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={FiSend}
                    iconPosition="right"
                    disabled={status === "submitting"}
                    className="mt-6 w-full sm:w-auto"
                  >
                    {status === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </Button>

                </form>
              )}

            </GlassCard>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default Contact;