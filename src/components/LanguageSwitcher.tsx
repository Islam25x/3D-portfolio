import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { AppLanguage } from "../i18n";
import { LANGUAGE_STORAGE_KEY } from "../i18n";

const LANGUAGES: Array<{ code: AppLanguage; label: string }> = [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
];

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLanguage: AppLanguage = i18n.resolvedLanguage === "ar" ? "ar" : "en";

    useEffect(() => {
        if (typeof document === "undefined") return;
        document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = currentLanguage;
    }, [currentLanguage]);

    const handleChange = (lang: AppLanguage) => {
        if (lang === currentLanguage) return;
        i18n.changeLanguage(lang);
        if (typeof window !== "undefined") {
            localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        }
    };

    return (
        <div className="fixed top-16 sm:top-20 right-3 sm:right-6 z-40">
            <div className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-white/15 bg-[#0d0b1a]/60 px-1.5 py-1 sm:px-2 sm:py-1.5 backdrop-blur-md shadow-[0_0_22px_rgba(120,81,255,0.28)]">
                {LANGUAGES.map((lang) => {
                    const isActive = currentLanguage === lang.code;
                    return (
                        <button
                            key={lang.code}
                            type="button"
                            onClick={() => handleChange(lang.code)}
                            className={[
                                "rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold tracking-widest transition-all duration-300",
                                isActive
                                    ? "bg-[#6f5bff]/80 text-white shadow-[0_0_14px_rgba(111,91,255,0.9)]"
                                    : "text-white/70 hover:text-white hover:bg-white/5",
                            ].join(" ")}
                            aria-pressed={isActive}
                        >
                            {lang.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default LanguageSwitcher;
