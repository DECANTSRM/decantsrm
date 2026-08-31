
        const WHATSAPP_NUMBER = '524381463180';
        
        //PRODUCTOS
        const PRODUCTS = [
            {
                id: 1,
                order: 50,
                name: 'Al Haramain Amber Oud Gold Edition',
                description: 'Una fragancia lujosa y unisex que combina la dulzura frutal y la frescura ozónica con un corazón atalcado y vainilla, sobre una base de ámbar y almizcle, con un toque acuático.',
                category: 'spicy amber unisex',
                badges: ['fresh', 'fruity', 'vanilla', 'sweet', 'amber'],
                notes: {
                    top: ['Notas verdes', 'Bergamota'],
                    heart: ['Melón', 'Ámbar', 'Piña'],
                    base: ['Vainilla', 'Notas amaderadas', 'Almizcle']
                },
                prices: { '5ml': 140, '10ml': 260 },
                image: 'imagenes/haramain.jpeg',
                gradient: 'linear-gradient(135deg, #A9CCE3 0%, #16A085 100%)',
                bottleColor: 'rgba(22, 160, 133, 0.3)'
            },
            {
                id: 2,
                order: 150,
                name: 'Jean Paul Gaultier Le Male Elixir',
                description: 'Un elixir seductor que intensifica la icónica fragancia Le Male con un corazón vainillado y amielado, envuelto en notas de tabaco y un fondo ambarino misterioso.',
                category: 'vanilla amber boy',
                badges: ['vanilla', 'amber', 'sweet'],
                notes: {
                    top: ['Lavanda', 'Menta'],
                    heart: ['Vainilla', 'Benjuí'],
                    base: ['Miel', 'Haba Tonka', 'Tabaco']
                },
                prices: { '5ml': 190, '10ml': 370 },
                image: 'imagenes/jpglemaleelixir.jpeg',
                gradient: 'linear-gradient(135deg, #FDEBD0 0%, #8B6914 100%)',
                bottleColor: 'rgba(139, 105, 20, 0.3)'
            },
            {
                id: 3,
                order: 140,
                name: 'Jean Paul Gaultier Le Beau Paradise Garden',
                description: 'Un jardín tropical embotellado: notas de coco cremoso y frutas exóticas sobre un fondo vainillado y amaderado. Frescura acuática con un toque sensual.',
                category: 'fresh vanilla boy',
                badges: ['fresh', 'vanilla', 'sweet'],
                notes: {
                    top: ['Notas Verdes', 'Menta', 'Gengibre', 'Notas acuáticas'],
                    heart: ['Coco', 'Higo', 'Sal'],
                    base: ['Haba Tonka', 'Sándalo']
                },
                prices: { '5ml': 165, '10ml': 310 },
                image: 'imagenes/jpglebeauparadise.jpeg',
                gradient: 'linear-gradient(135deg, #A9CCE3 0%, #FDEBD0 100%)',
                bottleColor: 'rgba(253, 235, 208, 0.3)'
            },
            {
                id: 4,
                order: 20,
                name: 'Afnan 9pm',
                description: 'Una fragancia nocturna que equilibra dulzura vainillada con especias cálidas y un fondo ambarino. Perfecta para ocasiones especiales.',
                category: 'vanilla spicy amber boy',
                badges: ['vanilla', 'spicy', 'amber'],
                notes: {
                    top: ['Canela', 'Lavanda Silvestre', 'Manzana', 'Bergamota'],
                    heart: ['Flor de Naranjo', 'Lirio del Valle'],
                    base: ['Vainilla', 'Ámbar', 'Pachulí', 'Haba Tonka']
                },
                prices: { '5ml': 65, '10ml': 120 },
                image: 'imagenes/afnan9pm.jpeg',
                gradient: 'linear-gradient(135deg, #FDEBD0 0%, #E59866 100%)',
                bottleColor: 'rgba(230, 126, 34, 0.3)'
            },
            {
                id: 5,
                order: 170,
                name: 'Kramrah Qahwa',
                description: 'Una acogedora fragancia inspirada en el café árabe, con notas cálidas de canela y vainilla sobre un fondo especiado. Ideal para días fríos.',
                category: 'spicy vanilla unisex',
                badges: ['spicy', 'vanilla', 'sweet'],
                notes: {
                    top: ['Cardamomo', 'Canela', 'Gengibre'],
                    heart: ['Frutas confitadas', 'Flores Blancas', 'Praliné'],
                    base: ['Vainilla', 'Café', 'Haba Tonka', 'Benjuí', 'Almizcle']
                },
                prices: { '5ml': 65, '10ml': 120 },
                image: 'imagenes/kramrahqahwa.jpeg',
                gradient: 'linear-gradient(135deg, #A1887F 0%, #5D4037 100%)',
                bottleColor: 'rgba(93, 64, 55, 0.3)'
            },
            {
                id: 6,
                order: 110,
                name: 'His Confession',
                description: 'Una confesión olfativa audaz: ámbar cálido se encuentra con vainilla y especias, creando un aroma sofisticado y adictivo con un toque irisado.',
                category: 'amber vanilla spicy boy',
                badges: ['amber', 'vanilla', 'spicy'],
                notes: {
                    top: ['Lavanda', 'Canela', 'Mandarina'],
                    heart: ['Iris', 'Amaderado', 'Benjuí', 'Mahonial'],
                    base: ['Ámbar', 'Vainilla', 'Haba Tonka', 'Incienso', 'Pachulí', 'Cedro']
                },
                prices: { '5ml': 75, '10ml': 140 },
                image: 'imagenes/hisconfession.jpeg',
                gradient: 'linear-gradient(135deg, #FDEBD0 0%, #A1887F 100%)',
                bottleColor: 'rgba(161, 136, 127, 0.3)'
            },
            {
                id: 7,
                order: 220,
                name: 'Le Chameau Arabia the Beauty',
                description: 'Un viaje olfativo a Oriente: dulzura tropical de coco y frutas exóticas sobre un fondo ambarino especiado. Lujoso y envolvente.',
                category: 'amber unisex',
                badges: ['sweet', 'amber', 'fresh'],
                notes: {
                    top: ['Piña', 'Gengibre', 'Iris', 'Amaderado'],
                    heart: ['Coco', 'Notas Amaderadas'],
                    base: ['Ámbar', 'Sándalo', 'Haba Tonka', 'Ámbar gris']
                },
                prices: { '5ml': 65, '10ml': 120 },
                image: 'imagenes/elarabia.jpeg',
                gradient: 'linear-gradient(135deg, #FDEBD0 0%, #E67E22 100%)',
                bottleColor: 'rgba(230, 126, 34, 0.3)'
            },
            {
                id: 8,
                order: 30,
                name: 'Afnan Turathi Blue',
                description: 'Frescura cítrica y acuática con un corazón amaderado y almizclado. Un aroma versátil que combina lo mejor de Oriente y Occidente.',
                category: 'fresh spicy boy',
                badges: ['fresh', 'spicy'],
                notes: {
                    top: ['Cítrico', 'Fresco', 'Acuático'],
                    heart: ['Amaderado', 'Notas Amaderadas', 'Ámbar'],
                    base: ['Especias', 'Almizcle', 'Pachulí']
                },
                prices: { '5ml': 65, '10ml': 120 },
                image: 'imagenes/turathiblue.jpeg',
                gradient: 'linear-gradient(135deg, #A9CCE3 0%, #2C3E50 100%)',
                bottleColor: 'rgba(44, 62, 80, 0.3)'
            },
            { 
                id: 9,
                order: 90,
                name: 'DolceyGabanna Light Blue edt',
                description: 'Un clásico fresco y vibrante: la explosión cítrica del limón siciliano y la manzana se combinan con un corazón de bambú y jazmín, sobre una base amaderada de cedro y almizcle. Perfecto para la mujer moderna y enérgica.',
                category: 'fresh girl',
                badges: ['citric', 'woody', 'fresh'],
                notes: {
                    top: ['Limón Siciliano', 'Manzana', 'Cedro', 'Campanilla'],
                    heart: ['Bambú', 'Jazmín', 'Rosa Blanca'],
                    base: ['Cedro', 'Almizcle', 'Ámbar']
                },
                prices: { '5ml': 120, '10ml': 200 },
                image: 'imagenes/lightblue.jpeg',
             gradient: 'linear-gradient(135deg, #b3e5fc 0%, #ffffff 100%)',
            bottleColor: 'rgba(179, 229, 252, 0.3)'
            },
            {
                id: 10,
                order: 190,
                name: 'Lattafa Yara',
                description: 'Una fragancia dulce y envolvente: notas de salida de orquídea y heliotropo con un toque de naranja tangerina, corazón goloso de frutas tropicales, y base de vainilla cremosa con almizcle y sándalo. Un perfume femenino y cautivador.',
                category: 'vanilla girl',
                badges: ['sweet', 'vanilla', 'tropical'],
                notes: {
                    top: ['Orquídea', 'Heliotrope', 'Naranja Tangerina'],
                    heart: ['Acorde Goloso', 'Frutas Tropicales'],
                    base: ['Vainilla', 'Almizcle', 'Sándalo']
                 },
                prices: { '5ml': 60, '10ml': 105 },
             image: 'imagenes/lattafayara.jpeg',
             gradient: 'linear-gradient(135deg, #f8bbd0 0%, #b39ddb 100%)',
            bottleColor: 'rgba(248, 187, 208, 0.3)'
            },
            {
                id: 11,
                order: 250,
                name: 'Nautica Voyage N-83',
                description: 'Una fragancia fresca y marina que evoca la brisa del océano con un toque aromático y especiado, para un día lleno de energía y frescura.',
                category: 'fresh boy',
                badges: ['marine', 'aromatic', 'musky', 'woody'],
                notes: {
                    top: ['Notas Marinas', 'Menta Piperita', 'Petit Grain'],
                    heart: ['Lavanda', 'Nuez Moscada', 'Cardamomo'],
                    base: ['Almizcle', 'Cedro', 'Sándalo']
                },
                prices: {'5ml': 50, '10ml': 100 },
                image: 'imagenes/nautican83.png',
                gradient: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
            bottleColor: 'rgba(0, 198, 251, 0.2)'
            },
            {
                id: 12,
                order: 120,
                name: 'Invictus Victory Elixir',
                description: 'Una fragancia intensa y victoriosa que combina lavanda y especias con un fondo dulce de vainilla y haba tonka, para un aroma cálido, ambarino y ahumado.',
                category: 'vanilla spicy boy',
                badges: ['vanilla', 'warm spicy', 'amber', 'lavender', 'smoky'],
                notes: {
                    top: ['Lavanda', 'Cardamomo', 'Pimienta Negra'],
                    heart: ['Incienso', 'Pachulí'],
                    base: ['Vainilla', 'Haba Tonka']
                },
                prices: {'5ml': 150, '10ml': 280},
                image: 'imagenes/invictuselixir.png',
                gradient: 'linear-gradient(135deg, #d4af37 0%, #8b4513 100%)',
                bottleColor: 'rgba(212, 175, 55, 0.2)'
            },
            {
                id: 13,
                order: 130,
                name: 'Jean Paul Gaultier Le Beau Le Parfum',
                description: 'Una fragancia dulce y sensual que evoca la calidez de un paraíso tropical con un fondo amaderado y sofisticado, perfecta para quienes buscan un aroma envolvente y memorable.',
                category: 'vanilla amber boy',
                badges: ['sweet', 'vanilla', 'tropical', 'woody'],
                notes: {
                    top: ['Piña', 'Iris', 'Jengibre', 'Ciprés'],
                    heart: ['Coco', 'Notas Amaderadas'],
                    base: ['Haba Tonka', 'Sándalo', 'Ámbar', 'Ámbar gris'],
                },
                prices: {'5ml': 190, '10ml': 350},
                image: 'imagenes/jeanpaullebeauleparfum.png',
                gradient: 'linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)',
                bottleColor: 'rgba(86, 171, 47, 0.2)'
            },
            {
                id: 14,
                order: 310,
                name: 'Spicebomb Infrared ViktorRolf',
                description: 'Una fragancia explosiva y especiada que combina la calidez de la canela y el tabaco con la frescura de las frutas rojas y un toque picante de chile, creando un aroma intenso, seductor y lleno de energía.',
                category: 'spicy boy',
                badges: ['spicy', 'warm', 'fruity', 'tobacco', 'sweet'],
                notes: {
                    top: ['Frutas rojas', 'Pimienta rosa', 'Azafrán'],
                    heart: ['Canela', 'Chile rojo'],
                    base: ['Tabaco', 'Benjuí'],
                },
                prices: { '5ml': 190, '10ml': 350 },
                image: 'imagenes/spicebomb.jpeg',
                gradient: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)',
                bottleColor: 'rgba(255, 78, 80, 0.2)',
            },
            {
                id: 15,
                order: 260,
                name: 'Rasasi Hawas Ice',
                description: 'Una explosión de frescura acuática y frutal con un toque especiado, corazón de flores blancas y base almizclada y atalcada, evocando el hielo en un día caluroso.',
                category: 'fresh boy',
                badges: ['fresh', 'citric', 'tropical', 'woody'],
                notes: {
                    top: ['Manzana', 'Cítricos', 'Anís estrellado'],
                    heart: ['Flores blancas', 'Ciruela', 'Cardamomo'],
                    base: ['Almizclada', 'Ámbar', 'Musgo']
                },
                prices: {'5ml': 100, '10ml': 200},
                image: 'imagenes/hawas ice.jpeg',
                gradient: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
                bottleColor: 'rgba(0, 198, 251, 0.2)'
            },
            {
                id: 16,
                order: 60,
                name: 'Club De Nuit Urban Elixir Armaf',
                description: 'Fragancia audaz y moderna que combina la frescura cítrica y especiada con un corazón de lavanda y un fondo amaderado y almizclado, perfecta para la noche urbana.',
                category: 'fresh boy',
                badges: ['fresh', 'citric', 'woody', 'lavender', 'amber'],
                notes: {
                    top: ['Bergamota', 'Jazmín', 'Pimienta rosa'],
                    heart: ['Lavanda', 'Geranio', 'Azafrán'],
                    base: ['Ládano', 'Ámbar', 'Cedro']
                },
                prices: {'5ml': 90, '10ml': 170},
                image: 'imagenes/clubdenuit.jpeg',
                gradient: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
                bottleColor: 'rgba(0, 198, 251, 0.2)'
            },
            {
                id: 17,
                order: 270,
                name: 'Scuderia Ferrari Black',
                description: 'Fragancia deportiva y elegante con notas frutales y especiadas, destacando la canela y la vainilla, con un toque fresco y atalcado.',
                category: 'spicy boy',
                badges: ['spicy', 'warm', 'fruity', 'cinnamon', 'vanilla'],
                notes: {
                    top: ['Manzana', 'Ciruela', 'Cítricos'],
                    heart: ['Rosa', 'Cardamomo', 'Canela'],
                    base: ['Almizcle', 'Ámbar', 'Vainilla']
                },
                prices: {'5ml': 75, '10ml': 140},
                image: 'imagenes/scuderiablack.jpeg',
                gradient: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)',
                bottleColor: 'rgba(255, 78, 80, 0.2)',
            },
            {
                id: 18,
                order: 230,
                name: 'Yeah! Maison Alhambra',
                description: 'Fragancia vibrante y juvenil que fusiona la frescura especiada con acordes afrutados y amaderados, ideal para el día a día.',
                category: 'fresh boy',
                badges: ['fresh', 'citric', 'tropical', 'woody'],
                notes: {
                    top: ['Manzana', 'Bergamota', 'Jengibre'],
                    heart: ['Salvia', 'Bayas de enebro', 'Geranio'],
                    base: ['Amberwood', 'Haba Tonka', 'Cedro']
                },
                prices: {'5ml': 70, '10ml': 130},
                image: 'imagenes/yeahman.jpeg',
                gradient: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
                bottleColor: 'rgba(0, 198, 251, 0.2)'
            },
            {
                id: 19,
                order: 80,
                name: 'Odyssey Mandarin Sky Armaf',
                description: 'Una fragancia celestial que combina la chispa cítrica de la mandarina con un corazón de caramelo y vainilla, sobre un fondo ambarado y amaderado.',
                category: 'amber boy',
                badges: ['amber', 'citric', 'sweet'],
                notes: {
                    top: ['Mandarina', 'Naranja', 'Azafrán'],
                    heart: ['Caramelo', 'Haba Tonka'],
                    base: ['Ambroxan', 'Cedro', 'Vetiver']
                },
                prices: {'5ml': 100, '10ml': 200},
                image: 'imagenes/mandarin.jpeg',
                gradient: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)',
                bottleColor: 'rgba(255, 78, 80, 0.2)'
            },
            {
               id: 20,
               order: 200,
               name: 'Lattafa Yara Candy',
               description: 'Una fragancia golosa y afrutada con un toque empolvado y floral, ideal para quienes buscan un aroma dulce, cremoso y ligeramente especiado.',
               category: 'vanilla girl',
               badges: ['sweet', 'vanilla', 'fruity', 'tropical'],
               notes: {
                   top: ['Grosellas negras', 'Mandarina verde'],
                   heart: ['Caramelo de fresa efervescente','Gardenia'],
                   base: ['Vainilla', 'Almizcle', 'Sándalo', 'Ámbar']
               },
               prices: {'5ml': 70, '10ml': 125},
               image: 'imagenes/yaracandy.jpeg',
               gradient: 'linear-gradient(135deg, #f8bbd0 0%, #b39ddb 100%)',
               bottleColor: 'rgba(248, 187, 208, 0.3)'
            },
            {
                id: 21,
                order: 240,
                name: 'Explorer Platinum Montblanc',
                description: 'Una fragancia fresca y sofisticada que evoca la naturaleza salvaje con notas amaderadas, aromáticas y ozónicas, con un toque acuático y especiado suave.',
                category: 'fresh boy',
                badges: ['fresh', 'woody', 'aromatic', 'marine'],
                notes: {
                    top: ['Hojas de violeta'],
                    heart: ['Esclarea'],
                    base: ['Cedro']
                },
                prices: {'5ml': 120, '10ml': 210},
                image: 'imagenes/montblanc.jpeg',
                gradient: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
                bottleColor: 'rgba(0, 198, 251, 0.2)'
            },
            {
                id: 22,
                order: 160,
                name: 'Le Male Le Parfum Jean Paul Gaultier',
                description: 'Una fragancia oriental y especiada con un toque cálido y amaderado. El cardamomo y la lavanda se fusionan con un fondo profundo de vainilla, maderas y notas orientales.',
                category: 'spicy vanilla boy',
                badges: ['spicy', 'warm', 'vanilla', 'lavender'],
                notes: {
                    top: ['Cardamomo'],
                    heart: ['Lavanda', 'Iris'],
                    base: ['Vainilla', 'Notas orientales', 'Notas amaderadas'],
                },
                prices: {'5ml': 190, '10ml': 360},
                image: 'imagenes/jpglemalep.jpg',
                gradient: 'linear-gradient(135deg, #1c1c1c 0%, #000000 100%)',
                bottleColor: 'rgba(0, 0, 0, 0.2)'
            },
            {
                id: 23,
                order: 280,
                name: 'Valentino Uomo Born In Roma',
                description: 'Una fragancia moderna y mineral con un toque salino y herbal. La salvia y el jengibre se combinan con notas verdes, violeta y un fondo amaderado y de vetiver.',
                category: 'fresh boy',
                badges: ['mineral', 'fresh', 'herbal', 'woody'],
                notes: {
                    top: ['Notas minerales', 'Hojas de violeta', 'Sal'],
                    heart: ['Salvia', 'jengibre'],
                    base: ['Notas amaderadas', 'Vetiver']
                },
                prices: {'5ml': 270, '10ml': 500},
                image: 'imagenes/valentinobir.jpg',
                gradient: 'linear-gradient(135deg, #2a2a2a 0%, #000000 100%)',
                bottleColor: 'rgba(0, 0, 0, 0.2)'
            },
            {
                id: 24,
                order: 300,
                name: 'Versace Eros Flame',
                description: 'Una fragancia intensa y vibrante con notas cítricas ardientes y especiadas. El romero y la pimienta de Madagascar lideran sobre un corazón floral y una base robusta de maderas exóticas y vainilla.',
                category: 'spicy boy',
                badges: ['citric', 'spicy', 'woody', 'sweet'],
                notes: {
                    top: ['Mandarina', 'Pimienta de Madagascar', 'Romero', 'Limón (Lima ácida)', 'Chinotto'],
                    heart: ['Geranio', 'Rosa', 'Pepperwood'],
                    base: ['Vainilla', 'Haba tonka', 'Sándalo', 'Cedro de Texas', 'Pachulí', 'Musgo de roble']
                },
                prices: {'5ml': 170, '10ml': 320},
                image: 'imagenes/versaceef.jpg',
                gradient: 'linear-gradient(135deg, #C21807 0%, #800000 100%)',
                bottleColor: 'rgba(194, 24, 7, 0.2)'
            },
            {
                id: 25,
                order: 290,
                name: 'Valentino Uomo Born In Roma Coral Fantasy',
                description: 'Una fragancia vibrante y aromática que fusiona la frescura cítrica de la bergamota y la manzana roja con el toque especiado y cautivador del cardamomo. En su corazón, la lavanda y el geranio bourbon aportan una elegancia floral y herbácea, mientras que en su base, las hojas de tabaco, el pachulí y el vetiver de Haití le otorgan una calidez amaderada, dulce y profundamente adictiva.',
                category: 'spicy boy',
                badges: ['aromatic', 'fruity', 'tobacco', 'spicy', 'woody'],
                notes: {
                   top: ['manzana roja', 'cardamomo', 'bergamota de Calabria'],
                 heart: ['lavanda', 'geranio bourbon', 'esclarea'],
                  base: ['hojas de tabaco', 'pachulí', 'vetiver de Haití']
                },
                prices: {'5ml': 220, '10ml': 440},
                image: 'imagenes/valentinobircoral.jpeg',
                gradient: 'linear-gradient(135deg, #F4A261 0%, #3D2B1F 100%)',
                bottleColor: 'rgba(244, 162, 97, 0.2)'
            },
            {
                id: 26,
                order: 10,
                name: 'Afnan 9am Dive',
                description: 'Una fragancia vibrante, fresca y unisex que abre con una explosión cítrica de limón y menta, endulzada por grosellas negras y un toque picante de pimienta rosa. El corazón revela una combinación de manzana y cedro que se funde con la profundidad ahumada del incienso. La base de jengibre, sándalo, pachulí y jazmín le otorga un final amaderado, especiado y sumamente adictivo.',
                category: 'fresh unisex',
                badges: ['citric', 'fresh', 'fruity', 'woody', 'aromatic'],
                notes: {
                    top: ['limón (lima ácida)', 'menta', 'grosellas negras', 'pimienta rosa'],
                    heart: ['manzana', 'cedro', 'incienso'],
                    base: ['jengibre', 'sándalo', 'pachulí', 'jazmín']
                },
                prices: {'5ml': 70, '10ml': 140},
                image: 'imagenes/afnan9amdive.jpeg',
                gradient: 'linear-gradient(135deg, #ADD8E6 0%, #1E90FF 100%)',
                bottleColor: 'rgba(30, 144, 255, 0.2)'
            },
            {
                id: 27,
                order: 40,
                name: 'Al Haramain Amber Oud Aqua Dubai',
                description: 'Una fragancia refrescante y vibrante para hombres y mujeres, que abre con una explosión de notas verdes y cítricos energizantes. En su corazón, el dulzor del melón y la piña se fusiona con la calidez del ámbar y el toque ácido de la grosella negra, creando un contraste fascinante. Su base profunda de almizcle, petit grain, gálbano y vainilla le otorga una estela limpia, aromática y sumamente adictiva.',
                category: 'fresh unisex',
                badges: ['citric', 'green', 'aromatic', 'fruity', 'musky'],
                notes: {
                    top: ['notas verdes', 'bergamota', 'mandarina'],
                    heart: ['melón', 'ámbar', 'grosellas negras', 'piña'],
                    base: ['almizcle', 'petit grain', 'gálbano', 'vainilla']
                },
                prices: {'5ml': 100, '10ml': 180},
                image: 'imagenes/aquadubai.jpeg',
                gradient: 'linear-gradient(135deg, #00BFFF 0%, #005A9C 100%)',
                bottleColor: 'rgba(0, 191, 255, 0.2)'
            },
            {
                id: 28,
                order: 320,
                name: 'Armaf Odyssey Mandarin Sky',
                description: 'Una fragancia vibrante y adictiva para hombres que comienza con una explosión cítrica de mandarina y naranja, realzada por el toque especiado y exótico del azafrán y la salvia. En su corazón, el caramelo y el haba tonka se combinan con la flor de cempasúchil para crear un dulzor profundo y floral. Su base de ambroxan, cedro y vetiver le otorga una fijación amaderada, moderna y aromática de larga duración.',
                category: 'boy amber',
                badges: ['citric', 'caramel', 'sweet', 'amber', 'aromatic', 'vanilla', 'woody'],
                notes: {
                    top: ['mandarina', 'naranja', 'azafrán', 'salvia'],
                    heart: ['caramelo', 'haba tonka', 'cempasúchil (tagete, clavelón)'],
                    base: ['ambroxan', 'cedro', 'vetiver']
                },
                prices: {'5ml': 65, '10ml': 120},
                image: 'imagenes/oddyseymandarinsky.jpeg',
                gradient: 'linear-gradient(135deg, #FF7F00 0%, #00BFFF 100%)',
                bottleColor: 'rgba(0, 191, 255, 0.2)'
            },
            {
                id: 29,
                order: 180,
                name: 'Lattafa Mayar Natural Intense',
                description: 'Una fragancia refrescante, floral y acuática diseñada para mujeres, que comienza con una explosión tropical y frutal de mandarina verde, higo, agua de coco y melón. Su corazón se sumerge en un jardín acuático con delicadas notas de flor de loto, nenúfar y jazmín, aportando una suavidad etérea. La base de almizcle, ambroxan, vainilla y sándalo asegura una estela cálida, aterciopelada y duradera, perfecta para el día a día.',
                category: 'girl fresh',
                badges: ['floral', 'aquatic', 'fruity', 'fresh', 'musky', 'sweet', 'woody'],
                notes: {
                    top: ['mandarina verde', 'higo', 'agua de coco', 'melón'],
                    heart: ['flor de loto', 'nenúfar (lirio de agua)', 'jazmín'],
                    base: ['almizcle', 'ambroxan', 'vainilla', 'sándalo']
                },
                prices: {'5ml': 65, '10ml': 120},
                image: 'imagenes/mayarnaturalintense.jpeg',
                gradient: 'linear-gradient(135deg, #40E0D0 0%, #008080 100%)',
                bottleColor: 'rgba(64, 224, 208, 0.2)'
            },
            {
                id: 30,
                order: 210,
                name: 'Lattafa Yara Elixir',
                description: 'Una fragancia dulce, floral y empolvada diseñada para mujeres, que despierta los sentidos desde la salida con el delicioso y goloso aroma de S\'mores de Fresa y el toque ácido de las grosellas negras. El corazón se engalana con la delicadeza del jazmín y la flor de azahar del naranjo. En su base, una mezcla adictiva de vainilla, caramelo, ámbar y almizcle deja una estela cálida, aterciopelada y profundamente sensual.',
                category: 'vanilla girl',
                badges: ['vanilla', 'caramel', 'floral', 'sweet', 'musky', 'fruity', 'amber'],
                notes: {
                 top: ['S\'mores de Fresa', 'grosellas negras'],
                 heart: ['jazmín', 'flor de azahar del naranjo'],
                 base: ['vainilla', 'caramelo', 'ámbar', 'almizcle']
                },
                prices: {'5ml': 75, '10ml': 150},
                image: 'imagenes/yaraelixir.jpeg',
                gradient: 'linear-gradient(135deg, #E6A8D7 0%, #C87A9E 100%)',
                bottleColor: 'rgba(230, 168, 215, 0.2)'
            },
            {
                id: 31,
                order: 70,
                name: 'Armaf Odyssey Aqua Edition',
             description: 'Una fragancia aromática, cítrica y profundamente refrescante para hombres. Su salida explota con la energía de la naranja y la toronja, matizadas por el toque herbáceo y amargo del abrótano. En el corazón, la menta y la lavanda aportan una sensación de limpieza y frescura absoluta. La base de ambroxan, ciprés y pachulí le otorga un fondo amaderado, verde y almizclado que le asegura una gran durabilidad y proyección.',
             category: 'fresh boy',
             badges: ['aromatic', 'citric', 'fresh spicy', 'green', 'woody', 'herbal'],
             notes: {
                 top: ['naranja', 'toronja (pomelo)', 'abrótano'],
                 heart: ['menta', 'lavanda'],
                 base: ['ambroxan', 'ciprés', 'pachulí']
                },
                prices: {'5ml': 65, '10ml': 120},
             image: 'imagenes/oddyseyaquaedition.jpeg',
             gradient: 'linear-gradient(135deg, #00FA9A 0%, #006400 100%)',
             bottleColor: 'rgba(0, 250, 154, 0.2)'
            },
            {
                id: 32,
                order: 100,
                name: 'Giorgio Armani Acqua di Giò Profondo',
                description: 'Una fragancia aromática y marina que evoca las profundidades del océano. La salida refrescante de notas marinas, Aquozone, bergamota y mandarina verde da paso a un corazón herbáceo y especiado de romero, lavanda, ciprés y resina almáciga del lentisco. En la base, las notas minerales se mezclan con almizcle, pachulí y ámbar para crear una estela profunda, amaderada y de gran longevidad.',
                category: 'amber fresh boy',
                badges: ['aromatic', 'marine', 'citric', 'woody', 'mineral', 'fresh spicy'],
                notes: {
                 top: ['notas marinas', 'Aquozone', 'bergamota', 'mandarina verde'],
                 heart: ['romero', 'lavanda', 'ciprés', 'resina almáciga del lentisco'],
                 base: ['notas minerales', 'almizcle', 'pachulí', 'ámbar']
                },
                prices: {'5ml': 220, '10ml': 440},
                image: 'imagenes/acdgprofondoedp.jpeg',
                gradient: 'linear-gradient(135deg, #1A2B4C 0%, #6A7D91 100%)',
                bottleColor: 'rgba(26, 43, 76, 0.2)'
            }

        ];
        // SISTEMA DE CARRITO Y FUNCIONALIDAD
        
        let cart = [];
        // CONFIGURACIÓN DE PAGINACIÓN
        const PRODUCTS_PER_PAGE = 6; 
        let currentPage = 1;
        let currentFilter = 'all';

        // Mapeo de nombres de badges a clases CSS
        const badgeClasses = {
            'vanilla': 'badge-vanilla',
            'amber': 'badge-amber',
            'spicy': 'badge-spicy',
            'sweet': 'badge-sweet',
            'fresh': 'badge-fresh',
            'marine': 'badge-marine',
            'woody': 'badge-woody',
            'citric': 'badge-citric',
            'tropical': 'badge-tropical',
            'musky': 'badge-musky',
            'aromatic': 'badge-aromatic',
            'warm spicy': 'badge-warm-spicy',
            'lavender': 'badge-lavender',
            'smoky': 'badge-smoky',
            'warm': 'badge-warm',
            'fruity': 'badge-fruity',
            'tobacco': 'badge-tobacco',
            'cinnamon': 'badge-cinnamon',
            'mineral': 'badge-mineral',
            'herbal': 'badge-herbal',
            'green': 'badge-green',
            'caramel': 'badge-caramel',
            'floral': 'badge-floral',
            'aquatic': 'badge-aquatic',
            'fresh spicy': 'badge-fresh-spicy',

            
        };

        const badgeLabels = {
            'vanilla': 'Vainillado',
            'amber': 'Ámbar',
            'spicy': 'Especiado',
            'sweet': 'Dulce',
            'fresh': 'Fresco',
            'marine': 'Marino',
            'woody': 'Amaderado',
            'citric': 'Cítrico',
            'tropical': 'Tropical',
            'musky': 'Almizclado',
            'aromatic': 'Aromático',
            'warm spicy': 'Cálido Especiado',
            'lavender': 'Lavanda',
            'smoky': 'Ahumado',
            'warm': 'Cálido',
            'fruity': 'Frutal',
            'tobacco': 'Tabaco',
            'cinnamon': 'Canela',
            'mineral': 'Mineral',
            'herbal': 'Herbal',
            'green': 'Verde',
            'caramel': 'Caramelo',
            'floral': 'Floral',
            'aquatic': 'Acuático',
            'fresh spicy': 'Fresco Especiado'

        };

        // Renderizar productos dinámicamente
        // Devuelve los productos que coinciden con el filtro activo
        function getFilteredProducts() {
            let filtered;
            if (currentFilter === 'all') {
                filtered = PRODUCTS;
            } else {
                filtered = PRODUCTS.filter(product => product.category.includes(currentFilter));
            }
            return filtered.slice().sort((a, b) => a.order - b.order); // Ordenar por el campo 'order'
        }

        function renderProducts() {
            const grid = document.getElementById('product-grid');
            grid.innerHTML = '';

            const filteredProducts = getFilteredProducts();
            const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));

            // Evita quedarse en una página vacía (p.ej. al cambiar de filtro)
            if (currentPage > totalPages) currentPage = totalPages;
            if (currentPage < 1) currentPage = 1;

            const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
            const pageProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

            pageProducts.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.setAttribute('data-category', product.category);
                card.setAttribute('data-product-id', product.id);
                
                const badgesHTML = product.badges.map(badge => 
                    `<span class="badge ${badgeClasses[badge]}">${badgeLabels[badge]}</span>`
                ).join('');
                
                const notesHTML = `
                    <div class="notes-section">
                        <div class="notes-title">🔝 Notas de Salida</div>
                        <div class="notes-list">
                            ${product.notes.top.map(note => `<span class="note-item">${note}</span>`).join('')}
                        </div>
                    </div>
                    <div class="notes-section">
                        <div class="notes-title">💛 Notas de Corazón</div>
                        <div class="notes-list">
                            ${product.notes.heart.map(note => `<span class="note-item">${note}</span>`).join('')}
                        </div>
                    </div>
                    <div class="notes-section">
                        <div class="notes-title">🌙 Notas de Fondo</div>
                        <div class="notes-list">
                            ${product.notes.base.map(note => `<span class="note-item">${note}</span>`).join('')}
                        </div>
                    </div>
                `;
                
                const imageHTML = product.image 
                    ? `<div class="product-image has-photo">
                        <img src="${product.image}" alt="${product.name}" class="product-photo">
                       </div>`
                    : `<div class="product-image" style="background: ${product.gradient};">
                        <div class="bottle-3d">
                            <div class="bottle" style="background: linear-gradient(to bottom, 
                                rgba(255, 255, 255, 0.3) 0%,
                                ${product.bottleColor} 50%,
                                ${product.bottleColor} 100%);">
                                <div class="bottle-cap">
                                    <div class="bottle-spray"></div>
                                </div>
                                <div class="bottle-liquid" style="background: linear-gradient(to bottom, 
                                    ${product.bottleColor}, ${product.bottleColor});"></div>
                            </div>
                        </div>
                       </div>`;
                
                card.innerHTML = `
                    ${imageHTML}
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-badges">${badgesHTML}</div>
                        <p class="product-description">${product.description}</p>
                        ${notesHTML}
                        <div class="product-sizes">
                            <div class="size-option selected" data-size="5ml" data-price="${product.prices['5ml']}">
                                <span class="size-label">5ml</span>
                                <span class="size-price">$${product.prices['5ml']}</span>
                            </div>
                            <div class="size-option" data-size="10ml" data-price="${product.prices['10ml']}">
                                <span class="size-label">10ml</span>
                                <span class="size-price">$${product.prices['10ml']}</span>
                            </div>
                        </div>
                        <button class="add-to-cart">Agregar al Carrito</button>
                    </div>
                `;
                
                grid.appendChild(card);
            });
            
            // Reattach event listeners
            attachProductListeners();

            // Genera los controles de paginación (números + Anterior/Siguiente)
            renderPagination(filteredProducts.length, totalPages);
        }

        // Construye los botones de paginación y su comportamiento
        function renderPagination(totalItems, totalPages) {
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';

            // No mostrar controles si todo cabe en una sola página
            if (totalPages <= 1) return;

            const goToPage = (page) => {
                currentPage = page;
                renderProducts();
                document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
            };

            // Botón "Anterior"
            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-btn nav-btn';
            prevBtn.textContent = '← Anterior';
            prevBtn.disabled = currentPage === 1;
            prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
            pagination.appendChild(prevBtn);

            // Rango de números de página a mostrar (máximo 5 alrededor de la página actual)
            const maxVisible = 5;
            let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
            let endPage = Math.min(totalPages, startPage + maxVisible - 1);
            startPage = Math.max(1, endPage - maxVisible + 1);

            if (startPage > 1) {
                pagination.appendChild(createPageButton(1, goToPage));
                if (startPage > 2) {
                    pagination.appendChild(createEllipsis());
                }
            }

            for (let page = startPage; page <= endPage; page++) {
                pagination.appendChild(createPageButton(page, goToPage));
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pagination.appendChild(createEllipsis());
                }
                pagination.appendChild(createPageButton(totalPages, goToPage));
            }

            // Botón "Siguiente"
            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-btn nav-btn';
            nextBtn.textContent = 'Siguiente →';
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
            pagination.appendChild(nextBtn);
        }

        function createPageButton(page, goToPage) {
            const btn = document.createElement('button');
            btn.className = 'page-btn' + (page === currentPage ? ' active' : '');
            btn.textContent = page;
            btn.addEventListener('click', () => goToPage(page));
            return btn;
        }

        function createEllipsis() {
            const span = document.createElement('span');
            span.className = 'page-ellipsis';
            span.textContent = '…';
            return span;
        }

        // Attach event listeners to products
        function attachProductListeners() {
            // Size selector
            document.querySelectorAll('.size-option').forEach(option => {
                option.addEventListener('click', function() {
                    const parent = this.parentElement;
                    parent.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });

            // Add to cart
            document.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.addEventListener('click', function() {
                    const card = this.closest('.product-card');
                    const productId = parseInt(card.getAttribute('data-product-id'));
                    const product = PRODUCTS.find(p => p.id === productId);
                    const selectedSize = card.querySelector('.size-option.selected');
                    
                    const cartItem = {
                        name: product.name,
                        size: selectedSize.getAttribute('data-size'),
                        price: parseInt(selectedSize.getAttribute('data-price'))
                    };

                    cart.push(cartItem);
                    updateCartCount();
                    
                    // Animation feedback
                    this.textContent = '✓ Agregado';
                    this.style.background = '#16A085';
                    setTimeout(() => {
                        this.textContent = 'Agregar al Carrito';
                        this.style.background = '';
                    }, 2000);
                });
            });
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Filters
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Al cambiar de filtro, se reinicia la paginación a la página 1
                currentFilter = btn.getAttribute('data-filter');
                currentPage = 1;
                renderProducts();
            });
        });

        // Update cart count
        function updateCartCount() {
            document.getElementById('cart-count').textContent = cart.length;
        }

        // Open cart modal
        document.getElementById('cart-icon').addEventListener('click', () => {
            renderCart();
            document.getElementById('cart-modal').classList.add('active');
        });

        // Close cart modal
        document.getElementById('close-cart').addEventListener('click', () => {
            document.getElementById('cart-modal').classList.remove('active');
        });

        // Close modal when clicking outside
        document.getElementById('cart-modal').addEventListener('click', (e) => {
            if (e.target.id === 'cart-modal') {
                document.getElementById('cart-modal').classList.remove('active');
            }
        });

        // Render cart content
        function renderCart() {
            const cartContent = document.getElementById('cart-content');
            
            if (cart.length === 0) {
                cartContent.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛒</div>
                        <h3>Tu carrito está vacío</h3>
                        <p>Agrega algunos decants para comenzar</p>
                    </div>
                `;
                return;
            }

            let total = 0;
            let itemsHTML = '<div class="cart-items">';
            
            cart.forEach((item, index) => {
                total += item.price;
                itemsHTML += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>${item.size} - $${item.price}</p>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${index})">×</button>
                    </div>
                `;
            });
            
            itemsHTML += '</div>';
            
            const summaryHTML = `
                <div class="cart-total">
                    <h3>
                        <span>Total:</span>
                        <span>$${total}</span>
                    </h3>
                </div>
                <button class="whatsapp-btn" onclick="sendToWhatsApp()">
                    📱 Finalizar pedido por WhatsApp
                </button>
            `;
            
            cartContent.innerHTML = itemsHTML + summaryHTML;
        }

        // Remove item from cart
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartCount();
            renderCart();
        }

        // Send order to WhatsApp
        function sendToWhatsApp() {
            if (cart.length === 0) {
                alert('Tu carrito está vacío');
                return;
            }

            let message = '¡Hola! Me gustaría hacer un pedido de decants R%26M:%0A%0A';
            
            let total = 0;
            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name} - ${item.size} ($${item.price})%0A`;
                total += item.price;
            });
            
            message += `%0A*Total: $${total}*%0A%0A`;
            message += '¿Cómo puedo proceder con el pago y la entrega?';
            
            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
            window.open(whatsappURL, '_blank');
        }

        // Newsletter form
        document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por suscribirte! Te mantendremos informado sobre nuestras novedades.');
            e.target.reset();
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                });
            });
        }

        // Parallax effect on scroll
        window.addEventListener('scroll', () => {
            const molecules = document.querySelectorAll('.molecule');
            const scrolled = window.pageYOffset;
            molecules.forEach((molecule, index) => {
                const speed = 0.5 + (index * 0.1);
                molecule.style.transform = `translateY(${scrolled}px)`;
            });
        });

        // Initialize
        renderProducts();
