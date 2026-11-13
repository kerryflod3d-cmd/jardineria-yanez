// Las reseñas se incorporan a mano después de conversar con el cliente.
// No hay publicación automática desde el formulario público.
export const testimonials = [
  {
    name: 'María Ortega',
    service: 'Jardín residencial',
    quote: 'Estoy muy contenta por su trabajo, transformó mi patio trasero en un lugar increíble. Su atención al detalle es excepcional.',
    rating: 5,
  },
  {
    name: 'Juan Pérez',
    service: 'Mantención de áreas comunes',
    quote: 'Llevamos un año trabajando con ellos para el mantenimiento de las áreas comunes y siempre cumplen con lo prometido.',
    rating: 5,
  },
  {
    name: 'Sofía Ramírez',
    service: 'Poda ornamental',
    quote: 'Muy profesionales y puntuales. Recomiendo totalmente sus servicios de poda ornamental y los diseños que hace son muy peculiares.',
    rating: 4,
  },
] as const;
