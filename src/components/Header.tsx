import { Link } from "react-scroll";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();
    const displayName = i18n.resolvedLanguage === "ar" ? "اسلام" : "Islam";

    return (
        <header
            className={`${styles.paddingX} py-4 w-full flex items-center fixed top-0 z-20 bg-primary`}
            data-aos="fade-down"
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo + Title */}
                <div
                    className="flex items-center gap-x-3"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    <img
                        className="w-10 h-10 rounded-full object-contain"
                        src="/logo.png"
                        alt={t("header.logoAlt")}
                    />
                    <h4 className="text-white text-[18px] font-bold cursor-pointer flex">
                        {displayName}{" "}
                        <span className="sm:block hidden ml-1">| {t("header.role")}</span>
                    </h4>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="flex gap-x-6">
                        {navLinks.map((navLink, i) => (
                            <li
                                key={navLink.id}
                                data-aos="zoom-in"
                                data-aos-delay={300 + i * 100}
                            >
                                <Link
                                    to={navLink.id}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    className="py-1 cursor-pointer text-secondary hover:text-white font-medium transition-colors"
                                >
                                    {t(navLink.titleKey)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
