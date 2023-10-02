import BIMAS from "@assets/Gestión-Estratégica.png"
import EnerguX from "@assets/AdminFin.png"
import SuiteSegInf from "@assets/Inform.png"
import GestionI from "@assets/Gestión-Integral_0.png"
import S1 from "@assets/iconos-servicios-01.png"
import S2 from "@assets/iconos-servicios-02.png"
import S3 from "@assets/iconos-servicios-03.png"
import S4 from "@assets/iconos-servicios-04.png"
import type { Service } from "@interfaces"
import type { Product } from "@interfaces"

export const products: Product[] = [{
    title: 'BIMAS',
    icon: BIMAS,
    url: 'bimas',
    description: 'El Sistema Ejecutivo para el Seguimiento a Estrategias Organizacionales, BIMAS, gestiona el Mapa Estratégico de una organización a través de un Cuadro de Mando Integral propio.',
},{
    title: 'Energux',
    icon: EnerguX,
    url: 'energux',
    description: 'Sistema para la gestión y control de los portadores energéticos incluyendo energía eléctrica y sus equipos de respaldo, lubricantes, combustibles y sus índices de consumo en los equipos, gas y agua.'
},{
    title: 'Suite de seguridad informática',
    icon: SuiteSegInf,
    url: 'seguridad',
    description: 'La Suite de Seguridad Informática ofrece a las entidades un enfoque sistémico para la gestión de su ciberseguridad, acorde a los procedimientos y normativas nacionales.'
},{
    title: 'Gestión de recursos hídricos',
    icon: GestionI,
    url: 'recursos-hidricos',
    description: 'La Suite de aplicaciones para la gestión de los recursos hídricos es un Sistema para el control, uso y manejo sostenible de las aguas terrestres.'
},{
    title: 'Plataforma ROIC',
    icon: GestionI,
    url: 'roic',
    description: 'Gestión de objetos interconectados para implementación de proyectos de IoT o Industria 4.0 para la optimización de procesos empresariales.'
},{
    title: 'Sistema de gestión interna de gobierno',
    icon: GestionI,
    url: 'sisgestint',
    description: 'Solución integrada para la gestión interna de gobierno en los diferentes niveles de subordinación: municipal, provincial y nacional, posibilitando el análisis de desempeño en cada esfera.'
}]

export const services: Service[] = [{
    title: "Gestión empresarial y de gobierno",
    icon: S1,
    description: "Soluciones tecnológicas alineadas a las principales tendencias internacionales en este ámbito y el desarrollo de la industria 4.0."
},{
    title: "Gobierno electrónico",
    icon: S2,
    description: "Desoft provee soluciones tecnológicas que facilitan el intercambio gobierno-ciudadano, contribuyendo al acceso oportuno e inclusivo a la información."
},{
    title: "Servicios sobre plataformas digitales",
    icon: S3,
    description: "Soluciones tecnológicas para el posicionamiento del Cliente en entornos digitales y el desarrollo del marketing digital."
},{
    title: "Proyectos de Informatización",
    icon: S4,
    description: "DESOFT participa en Proyectos de Informatización aportando herramientas esenciales para el avance de la sociedad cubana y el bienestar ciudadano."
}]