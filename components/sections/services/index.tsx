import { Service, ServiceProps } from "./service";

export type Service = {
    title: string
    description: string
    image: {
        url: string,
        alt: string,
    }
}

export function Services() {
    const services:Service[] = [
        {
            title: "Meu negocio precisa de um site?",
            description: "Seu Site é o centro do seu marketing digital! Com um site você pode levar de forma  personalizada e interativa seus produtos e serviços para seus clientes, atraves de um catalogo online, cardapio e muito mais.",
            image: {
                url: "/uiux.png",
                alt: "print de um site de repositorio de imagens"
            }
        },
        {
            title: "Sua empresa tem uma Identidade?",
            description: "A sua marca precisa ser lembrada pelos seus clientes! A melhor forma de fazer isso é criando uma identidade visual para representa-la nas suas redes sociais, site e produtos.",
            image: {
                url: "/marca.png",
                alt: "print de um site de repositorio de imagens"
            }
        }
    ]

    return (
        <section id="services">
            {services.map((service, index) => (
            <Service 
            {...service} 
            reverse={index % 2 == 0 ? true : false}
            />
            ))}
        </section>
    )
}