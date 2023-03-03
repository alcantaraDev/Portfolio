import { SocialMediaCard } from "./socialMediaCard";

export function SocialMediaSection() {
    return (
        <section 
        className="
        text-white
        flex flex-col items-center gap-[60px]
        py-[80px] lg:py-[160px]
        "
        >
            <h2 className="text-[30px] font-bold">Social Media</h2>
            <div 
            className="
            flex flex-col items-center gap-[82px]
            md:flex-row md:gap-[60px]
            "
            >
                <SocialMediaCard type="instagram"/>
                <SocialMediaCard type="github"/>
            </div>
        </section>
    )
}