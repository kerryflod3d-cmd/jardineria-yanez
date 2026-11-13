export type GalleryMedia = {
  id: string;
  alt: string;
  type: 'image' | 'video';
};

export interface Service {
  id: string;
  number: string;
  name: string;
  description: string;
  icon: string;
  cover: string;
  media: GalleryMedia[];
}

const photo = (id: string, alt: string): GalleryMedia => ({ id, alt, type: 'image' });
const video = (id: string, alt: string): GalleryMedia => ({ id, alt, type: 'video' });

export const services: Service[] = [
  {
    id: "cesped",
    number: "01",
    name: "Mantención de césped",
    description: "Corte, perfilado y cuidado periódico de prados para que tu jardín luzca ordenado.",
    icon: "🌱",
    cover: "mantenimiento-cesped-01",
    media: [
      photo("mantenimiento-cesped-01", "Fotografía del mantenimiento de césped, fotografía 1"),
      photo("mantenimiento-cesped-02", "Fotografía del mantenimiento de césped, fotografía 2"),
      photo("mantenimiento-cesped-03", "Fotografía del mantenimiento de césped, fotografía 3"),
      photo("mantenimiento-cesped-04", "Fotografía del mantenimiento de césped, fotografía 4"),
      photo("mantenimiento-cesped-05", "Fotografía del mantenimiento de césped, fotografía 5"),
      photo("mantenimiento-cesped-06", "Fotografía del mantenimiento de césped, fotografía 6"),
      photo("mantenimiento-cesped-07", "Fotografía del mantenimiento de césped, fotografía 7"),
      photo("mantenimiento-cesped-08", "Fotografía del mantenimiento de césped, fotografía 8"),
    ],
  },
  {
    id: "poda",
    number: "02",
    name: "Poda ornamental",
    description: "Poda y formación de arbustos, árboles y especies ornamentales según las necesidades del espacio.",
    icon: "✂️",
    cover: "poda-ornamental-02",
    media: [
      video("poda-ornamental-01", "Video de trabajo de poda ornamental"),
      photo("poda-ornamental-02", "Trabajo de poda ornamental de árboles y arbustos, fotografía 2"),
      photo("poda-ornamental-03", "Resultado de trabajo de poda ornamental, fotografía 3"),
      photo("poda-ornamental-04", "Mantenimiento de árboles y áreas verdes, fotografía 4"),
    ],
  },
  {
    id: "retiro",
    number: "03",
    name: "Retiro de Sarmientos y Escombros",
    description: "Retiro de sarmientos, ramas, escombros y residuos para mantener tus espacios despejados.",
    icon: "🚚",
    cover: "retiro-restos-01",
    media: [
      photo("retiro-restos-01", "Retiro de restos de jardinería y limpieza exterior, fotografía 1"),
      photo("retiro-restos-02", "Retiro de restos de jardinería y limpieza exterior, fotografía 2"),
      photo("retiro-restos-03", "Retiro de restos de jardinería y limpieza exterior, fotografía 3"),
    ],
  },
  {
    id: "arboles",
    number: "04",
    name: "Tala y despeje",
    description: "Evaluación y ejecución de trabajos de tala y despeje de árboles según condiciones del lugar.",
    icon: "🌳",
    cover: "tala-despeje-01",
    media: [
      photo("tala-despeje-01", "Trabajo de tala y despeje de árboles, fotografía 1"),
      photo("tala-despeje-02", "Trabajo de tala y despeje de árboles, fotografía 2"),
      photo("tala-despeje-03", "Trabajo de tala y despeje de árboles, fotografía 3"),
    ],
  },
  {
    id: "ligustrinas",
    number: "05",
    name: "Limpieza y perfilado de ligustinas",
    description: "Mantención de cercos vivos, limpieza de veredas y recuperación de senderos.",
    icon: "🍃",
    cover: "perfilado-ligustrinas-06",
    media: [
      video("perfilado-ligustrinas-01", "Video del estado anterior al perfilado de ligustrinas"),
      photo("perfilado-ligustrinas-02", "Proceso de perfilado de ligustrinas, fotografía 2"),
      photo("perfilado-ligustrinas-03", "Proceso de perfilado de ligustrinas, fotografía 3"),
      photo("perfilado-ligustrinas-04", "Proceso de perfilado de ligustrinas, fotografía 4"),
      photo("perfilado-ligustrinas-05", "Proceso de perfilado de ligustrinas, fotografía 5"),
      photo("perfilado-ligustrinas-06", "Perfilado de cerco vivo, fotografía 6"),
      photo("perfilado-ligustrinas-07", "Limpieza y terminación de ligustrinas, fotografía 7"),
      video("perfilado-ligustrinas-08", "Video del trabajo terminado de perfilado"),
      video("perfilado-ligustrinas-09", "Video de limpieza y poda de jardín"),
      photo("perfilado-ligustrinas-10", "Recuperación de áreas verdes, fotografía 10"),
      photo("perfilado-ligustrinas-11", "Recuperación de áreas verdes, fotografía 11"),
      photo("perfilado-ligustrinas-12", "Recuperación de áreas verdes, fotografía 12"),
      photo("perfilado-ligustrinas-13", "Recuperación de áreas verdes, fotografía 13"),
      photo("perfilado-ligustrinas-14", "Recuperación de áreas verdes, fotografía 14"),
      photo("perfilado-ligustrinas-15", "Limpieza final de jardines y senderos, fotografía 15"),
      photo("perfilado-ligustrinas-16", "Limpieza final de jardines y senderos, fotografía 16"),
      photo("perfilado-ligustrinas-17", "Limpieza final de jardines y senderos, fotografía 17"),
      photo("perfilado-ligustrinas-18", "Limpieza final de jardines y senderos, fotografía 18"),
      photo("perfilado-ligustrinas-19", "Limpieza final de jardines y senderos, fotografía 19"),
    ],
  },
];

export const mediaPath = (media: GalleryMedia, size: 560 | 1600 = 560): string =>
  media.type === 'video' ? `/media/${media.id}.mp4` : `/media/${media.id}-${size}.webp`;

export const posterPath = (media: GalleryMedia): string => `/media/${media.id}-poster.jpg`;
