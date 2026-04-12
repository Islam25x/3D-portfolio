import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";
import EarthCanvas from "./EarthCanvas";
import StarsCanvas from "./StarsCanvas";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const { ref: sectionRef, inView } = useInView<HTMLElement>({ rootMargin: "200px 0px" });
    const formRef = useRef<HTMLFormElement | null>(null);
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // ✅ Validation
        if (!form.name || !form.email || !form.message) {
            toast.error(t("contact.toasts.validation"));
            return;
        }

        setLoading(true);

        emailjs
            .send(
                "service_beyzz3s",
                "template_opnb7dq",
                {
                    from_name: form.name,
                    from_email: form.email,
                    to_name: "Islam Salah",
                    to_email: "islam.salah.is08@gmail.com",
                    subject: t("contact.subject"),
                    message: form.message,
                },
                "4_o454FjXYKWpIcPR"
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success(t("contact.toasts.success"));

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    toast.error(t("contact.toasts.error"));
                }
            );
    };

    return (
        <section ref={sectionRef} id="contact" className="relative pt-4 pb-12">
            <StarsCanvas isActive={inView} />
            <div className="mx-auto max-w-7xl px-5 sm:px-16 mt-40 relative flex flex-col md:flex-row gap-10">
                {/* Contact Form */}
                <div
                    className="w-full md:w-1/2 bg-black-100 p-8 rounded-2xl order-2 md:order-1 relative z-10"
                    data-aos="flip-left"
                >
                    <p className={styles.sectionSubText}>{t("contact.sub")}</p>
                    <h3 className={styles.sectionHeadText}>{t("contact.title")}</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                        <label className="flex flex-col" data-aos="fade-up" data-aos-delay={100}>
                            <span className="text-white font-medium mb-4">{t("contact.form.nameLabel")}</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder={t("contact.form.namePlaceholder")}
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <label className="flex flex-col" data-aos="fade-up" data-aos-delay={200}>
                            <span className="text-white font-medium mb-4">{t("contact.form.emailLabel")}</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder={t("contact.form.emailPlaceholder")}
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <label className="flex flex-col" data-aos="fade-up" data-aos-delay={300}>
                            <span className="text-white font-medium mb-4">{t("contact.form.messageLabel")}</span>
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder={t("contact.form.messagePlaceholder")}
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-tertiary py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md shadow-primary cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-[#915EFF]"
                            data-aos-delay={400}
                        >
                            {loading ? t("contact.form.sending") : t("contact.form.send")}
                        </button>
                    </form>
                </div>

                {/* Earth Canvas */}
                <div
                    className="w-full md:w-1/2 order-1 md:order-2 relative z-10"
                    data-aos="flip-right"
                >
                    <EarthCanvas isActive={inView} />
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-center" autoClose={5000} theme="dark" pauseOnHover />
        </section>
    );
};

export default Contact;
