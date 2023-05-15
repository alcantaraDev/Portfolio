export function Footer() {
    return(
        <footer 
        className="
        text-white text-center bg-gray h-[220px]
        flex flex-col justify-center items-center gap-12
        "
        >
            <div className="text-[14px] font-light">
                <h3 className="font-bold">Contato</h3>
                <a href="mailto: alcantara.isaque167@gmail.com">alcantara.isaque167@gmail.com</a>
            </div>
            <span className="text-[12px]">© 2023 - Isaque Alcantara</span>
        </footer>
    )
}