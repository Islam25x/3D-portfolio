import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";
import EarthCanvas from "./EarthCanvas";
import StarsCanvas from "./StarsCanvas";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC = () => {
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
            toast.error("Please fill in all fields!");
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
                    subject: "New Contact Message",
                    message: form.message,
                },
                "W43MeO7T7b-SxTlLn"
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    toast.error("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <section id="contact" className="relative pt-4 pb-12">
            <StarsCanvas />
            <div className="mx-auto max-w-7xl px-5 sm:px-16 mt-40 relative flex flex-col md:flex-row gap-10 overflow-hidden">
                {/* Contact Form */}
                <div
                    className="w-full md:w-1/2 bg-black-100 p-8 rounded-2xl order-2 md:order-1"
                    data-aos="fade-right"
                >
                    <p className={styles.sectionSubText}>Get in touch</p>
                    <h3 className={styles.sectionHeadText}>Contact.</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                        <label className="flex flex-col" data-aos="fade-up" data-aos-delay={100}>
                            <span className="text-white font-medium mb-4">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <label className="flex flex-col" data-aos="fade-up" data-aos-delay={200}>
                            <span className="text-white font-medium mb-4">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your web address?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <label className="flex flex-col" data-aos="fade-up" data-aos-delay={300}>
                            <span className="text-white font-medium mb-4">Your Message</span>
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What you want to say?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-tertiary py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md shadow-primary cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-[#915EFF]"
                            data-aos="fade-up"
                            data-aos-delay={400}
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>

                {/* Earth Canvas */}
                <div
                    className="w-full md:w-1/2 order-1 md:order-2"
                    data-aos="fade-left"
                >
                    <EarthCanvas />
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-center" autoClose={5000} theme="dark" pauseOnHover />
        </section>
    );
};

export default Contact;
