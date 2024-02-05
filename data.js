import './style.css'

const products = [
  {
    name: 'CHAQUETA CORTA EFECTO PELO',
    price: 89.95,
    description: 'Chaqueta corta de cuello solapa y manga larga. Forro interior a tono. Cierre frontal con botones a presión ocultos.',
    color: 'CRUDO',
    seller: 'Zara',
    image: 'https://static.zara.net/photos///2023/I/0/1/p/4360/240/712/2/w/750/4360240712_6_1_1.jpg?ts=1697702464225'
  },
  {
    name: 'CAZADORA BIKER CROP EFECTO PIEL',
    price: 39.95,
    description: 'Cazadora de cuello solapa y manga larga con trabillas en hombro. Bolsillos delanteros con cremallera metálica. Aplicación cinturón en mismo material con hebilla metálica. Cierre frontal con cremallera.',
    color: 'NEGRO',
    seller: 'Zara',
    image: 'https://static.zara.net/photos///2023/V/0/1/p/4341/736/800/2/w/750/4341736800_6_1_1.jpg?ts=1676463923930'
  },
  {
    name: 'ANORAK CORTO ACOLCHADO METALIZADO WIND PROTECTION',
    price: 45.95,
    description: 'Anorak acolchado con aislamiento térmico sintético para mantener el calor incluso a -19ºC. Cuello subido con capucha interior oculta con cremallera y manga larga acabada en elástico. Bolsillos delanteros con forro polar interior y cierre de cremallera. Bajo acabado con cordones elásticos. Cierre frontal con cremallera.',
    color: 'PLATA',
    seller: 'Zara',
    image: 'https://static.zara.net/photos///2023/I/0/1/p/3046/204/808/2/w/750/3046204808_6_1_1.jpg?ts=1695365243909'
  },
  {
    name: 'CHALECO DOBLE FAZ ZW COLLECTION',
    price: 59.95,
    description: 'Chaleco confeccionado en tejido efecto ante con el interior en borreguillo combinado a contraste. Cuello solapa ajustable con trabillas y manga sisa. Bolsillos en delantero. Detalle de trabillas ajustables en bajo. Vivos combinados a contraste. Cierre frontal con cremallera metálica.',
    color: 'MARRÓN',
    seller: 'Zara',
    image: 'https://static.zara.net/photos///2023/I/0/1/p/2969/266/737/2/w/750/2969266737_6_1_1.jpg?ts=1693551038131'
  },
  {
    name: 'CHALECO CROPPED EFECTO PELO',
    price: 49.95,
    description: 'Chaleco abierto de cuello solapa y manga sisa. Bolsillos laterales ocultos. Cierre frontal con gancho.',
    color: 'NEGRO',
    seller: 'Zara',
    image: 'https://static.zara.net/photos///2023/I/0/1/p/6318/259/800/2/w/750/6318259800_6_1_1.jpg?ts=1698158097502'
  },
  {
    name: 'CHALECO DOBLE FAZ ZW COLLECTION',
    price: 59.95,
    description: 'Chaleco confeccionada en tejido denim con el interior en borreguillo combinado a contraste. Cuello solapa y manga sisa. Bolsillos de plastrón con solapa y botón en delantero. Efecto lavado.',
    color: 'ÍNDIGO',
    seller: 'Zara',
    image: 'https://static.zara.net/photos///2023/I/0/1/p/3548/251/405/2/w/750/3548251405_6_1_1.jpg?ts=1697181994225'
  },
  {
    name: 'CAZADORA CORTA DOBLE FAZ',
    price: 59.95,
    description: 'Cazadora de cuello solapa con aplicación de trabillas con hebillas metálicas. Manga larga. Bolsillos delanteros con cierre de cremallera. Detalle de forro interior y acabados con tejido combinado en borreguillo. Bajo con cinturón. Cierre frontal con cremallera.',
    color: 'MARRÓN',
    seller: 'Zara',
    image: 'https://static.zara.net/photos///2023/I/0/1/p/8073/236/716/2/w/750/8073236716_6_1_1.jpg?ts=1694161145474'
  },
  {
    name: 'BOMBER SOFT',
    price: 29.95,
    description: 'Bomber de cuello redondo y manga larga. Bolsillos delanteros de vivo. Cierre frontal con botones a presión. Acabados en rib.',
    color: 'GRIS',
    seller: 'Zara',
    image: 'https://static.zara.net/photos///2023/I/0/1/p/3046/319/802/2/w/750/3046319802_6_1_1.jpg?ts=1698390164889'
  },
  {
    name: 'ABRIGO CON LANA Y CUELLO EFECTO PELO',
    price: 99.95,
    description: 'Abrigo confeccionado con lana. Cuello solapa con aplicación efecto pelo extraíble. Manga larga con hombreras. Bolsillos delanteros de vivo. Bajo con abertura en espalda. Cierre frontal con un botón y cinturón del mismo tejido.',
    color: 'NEGRO',
    seller: 'Zara',
    image: 'https://static.zara.net/photos///2023/I/0/1/p/8671/298/800/2/w/750/8671298800_6_1_1.jpg?ts=1699606409107'
  },
  {
    name: 'CAZADORA BIKER BORREGUILLO ZW COLLECTION',
    price: 79.95,
    description: 'Cazadora corte biker de cuello solapa y manga larga. Bolsillos en delantero. Forro interior en borreguillo combinado a contraste. Cierre frontal con cremallera metálica.',
    color: 'ÍNDIGO',
    seller: 'Zara',
    image: 'https://static.zara.net/photos///2023/I/0/1/p/3548/250/405/2/w/750/3548250405_6_1_1.jpg?ts=1699533815465'
  },
];
export default products;