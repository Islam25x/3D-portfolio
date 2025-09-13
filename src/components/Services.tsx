function Services({ icon, title }: { icon: string; title: string }) {
    return (
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain " />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
    );
}

export default Services;