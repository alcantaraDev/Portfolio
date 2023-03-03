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
            <h2 className="text-[40px] font-light mb-[60px]">Serviços</h2>
            <div
            className="
            flex  flex-col justify-center items-center gap-[60px]
            md:grid md:grid-cols-2
            xl:flex xl:flex-row
            "
            >
                <ServiceCard type="sites"/>
                {/* <ServiceCard type="apps"/>
                <ServiceCard type="identidadeVisual"/> */}
                <ServiceCard type="ux"/>
            </div>
        </section>
    )
} 