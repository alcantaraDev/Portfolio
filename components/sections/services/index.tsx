import { ServiceCard } from "./serviceCard";

export function ServicesSection() {
    return (
        <section 
        className="
        w-screen py-[160px]
        flex  flex-col justify-center items-center 
        text-white
        "
        >
            <h2 className="text-[40px] font-light mb-[50px]">Serviços</h2>
            <div
            className="
            flex  flex-row justify-center items-center gap-[40px]
            "
            >
                <ServiceCard type="identidadeVisual"/>
                <ServiceCard type="ux"/>
                <ServiceCard type="sites"/>
                <ServiceCard type="apps"/>
            </div>
        </section>
    )
} 