export const site = {
  name: 'Jardinería Yáñez',
  url: 'https://jardineria-yanez.vercel.app',
  description: 'Servicios de jardinería, mantención de césped, poda y cuidado de áreas verdes en Retiro, Linares, Parral y sectores cercanos de la Región del Maule.',
  phoneLabel: '+56 9 3221 0427',
  phoneE164: '+56932210427',
  whatsappNumber: '56932210427',
  email: 'jardineriayanez@icloud.com',
  instagram: 'https://www.instagram.com/jardineria_yanez/',
  locality: 'Retiro',
  region: 'Región del Maule',
  country: 'CL',
} as const;

export const whatsappUrl = (message = 'Hola, quisiera consultar por un servicio de jardinería.') =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navigation = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Cobertura', href: '#cobertura' },
] as const;

export const mobileNavigation = [
  { label: 'Inicio', href: '' },
  ...navigation,
  { label: 'Contacto', href: '#contacto' },
] as const;
