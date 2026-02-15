
export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    // Dynamic Image Config
    frameCount: number;
    fileNamePrefix: string;
    fileExtension: string;
    staticHeroImage?: string;

    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "mango",
        name: "Крем Манго",
        subName: "Нӯшокии офтобӣ.",
        price: "12 сомонӣ",
        description: "Бо витамини C бой — Бидуни консервантҳо — 100% табиӣ",
        folderPath: "/images/mango_1_000",
        themeColor: "#FFB74D",
        gradient: "linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)",

        // Adapted for provided assets
        frameCount: 49,
        fileNamePrefix: "mango_1_",
        fileExtension: "jpg",

        features: ["Бо витамини C бой", "Бе маводи консервантӣ", "100% меваи табиӣ"],
        stats: [{ label: "Қанд", val: "0г" }, { label: "Об", val: "0%" }, { label: "Мағзи мева", val: "100%" }],
        section1: { title: "Крем Манго.", subtitle: "Лаззати офтоб." },
        section2: { title: "Мангои тару тоза.", subtitle: "Мангоҳои Алфонсои нодир, ки бо меҳр дар зери офтоби тобистон парвариш ёфтаанд." },
        section3: { title: "Қувваи витаминҳо.", subtitle: "Манбаи табиии неру, ки бадан ва зеҳни шуморо дар лаҳзае эҳё мегардонад." },
        section4: { title: "Танҳо мева, на консентрат.", subtitle: "" },
        detailsSection: {
            title: "Шоҳи Меваҳо",
            description: "Шарбати Крем Мангои мо танҳо аз мангоҳои беҳтарини навъи Ратнагири Алфонсо омода мешавад. Ин меваҳо бо ширинӣ ва ранги дурахшони худ дар ҷаҳон машҳуранд. Мо онҳоро фавран пас аз ҷамъоварӣ бо усули фишори сард коркард мекунем, то ҳар як қатраи ҳаётиро ҳифз намоем. Ин танҳо шарбат нест, ин як санъати тиллоист.",
            imageAlt: "Тафсилоти Манго"
        },
        freshnessSection: {
            title: "Аз Боғ то Шиша",
            description: "Мо ба шаффофияти комил эътимод дорем. Раванди мо барои кам кардани оксидшавӣ ва нигоҳ доштани таъми аслӣ тарҳрезӣ шудааст. Технологияи HPP (Коркарди Фишори Баланд) имкон медиҳад, ки шарбат бе коркарди гармӣ тоза ва бехатар бимонад."
        },
        buyNowSection: {
            price: "12 сомонӣ",
            unit: "барои як шишаи 300мл",
            processingParams: ["Фишори сард", "Бе гармӣ", "Технологияи HPP"],
            deliveryPromise: "Дастраскунии фаврӣ дар шаҳри Душанбе. Бастабандии махсус таровати маҳсулотро ҳифз мекунад.",
            returnPolicy: "Кафолати сифат 100%. Агар ба Шумо маҳқул нашуд, мо онро бидуни савол иваз мекунем."
        }
    },
    {
        id: "chocolate",
        name: "Шоколади Голландӣ",
        subName: "Лаззати махмалӣ.",
        price: "14 сомонӣ",
        description: "Какаои олӣ — Шири бодом — Протеини растанӣ",
        folderPath: "/images/chocolate",
        themeColor: "#8D6E63",
        gradient: "linear-gradient(135deg, #8D6E63 0%, #5D4037 100%)",

        // Defaults per prompt spec
        frameCount: 120,
        fileNamePrefix: "",
        fileExtension: "webp",

        features: ["Какаои олӣ", "Шири бодом", "Протеини растанӣ"],
        stats: [{ label: "Маҳсулоти ширӣ", val: "0%" }, { label: "Протеин", val: "12г" }, { label: "Какаои холис", val: "100%" }],
        section1: { title: "Шоколади Голландӣ.", subtitle: "Нарм ва гуворо." },
        section2: { title: "Камолоти лаззат.", subtitle: "Какаои торики асил ва шири бодоми қаймоқӣ барои як таҷрибаи беҳамто омехта шудаанд." },
        section3: { title: "Неруи растанӣ.", subtitle: "Бо протеини табиии растанӣ барои дастгирии тарзи ҳаёти фаъоли Шумо." },
        section4: { title: "Лаззат бидуни созиш.", subtitle: "" },
        detailsSection: {
            title: "Какаои Устувор",
            description: "Мо какаои худро аз фермаҳои Гана дастрас мекунем, ки сифати олӣ ва муносибати одилонаро кафолат медиҳанд. Дар омехта бо шири бодоми хонагии мо, ин нӯшокӣ лаззатеро пешниҳод мекунад, ки бо ширҳои анъанавӣ рақобат менамояд — аммо бидуни холестерин ва 100% растанӣ.",
            imageAlt: "Тафсилоти Шоколад"
        },
        freshnessSection: {
            title: "Омезиши Сард",
            description: "Гармии зиёд фоидаи какаоро нобуд месозад. Аз ин рӯ, мо Шоколади Голландии худро танҳо дар ҳолати сард омода мекунем. Шири бодоми мо ҳар рӯз тоза фишурда мешавад. Натиҷа? Таъми қавӣ ва тозаи шоколад."
        },
        buyNowSection: {
            price: "14 сомонӣ",
            unit: "барои як шишаи 300мл",
            processingParams: ["100% Растанӣ", "Омезиши сард", "Бидуни лактоза"],
            deliveryPromise: "Интиқол дар қуттиҳои махсуси термометрӣ. 48 соат хунук мемонад.",
            returnPolicy: "Тафовутро эҳсос кунед ё маблағи худро бозпас гиред."
        }
    },
    {
        id: "pomegranate",
        name: "Анори Ёқутӣ",
        subName: "Хазинаи антиоксидантҳо.",
        price: "15 сомонӣ",
        description: "Фоида барои дил — Фишори сард — Масуният",
        folderPath: "/images/pomegranate",
        themeColor: "#E57373",
        gradient: "linear-gradient(135deg, #E57373 0%, #C62828 100%)",

        // Defaults per prompt spec
        frameCount: 120,
        fileNamePrefix: "",
        fileExtension: "webp",

        features: ["Фоида барои дил", "Фишори сард", "Тақвияти масуният"],
        stats: [{ label: "Иловаҳо", val: "0%" }, { label: "Витаминҳо", val: "A, C, K" }, { label: "Тозагӣ", val: "100%" }],
        section1: { title: "Анори Ёқутӣ.", subtitle: "Ҷавоҳироти табиат." },
        section2: { title: "Таркиши лаззат.", subtitle: "Донаҳои анори тоза фишурдашуда, ки мувозинати комили ширинӣ ва турширо эҷод мекунанд." },
        section3: { title: "Саломатии қалб.", subtitle: "Бо антиоксидантҳои қавӣ барои муҳофизат ва ҷавонсозии ҳуҷайраҳои Шумо." },
        section4: { title: "Шарбати пок, ҳаёти пок.", subtitle: "" },
        detailsSection: {
            title: "Эликсири Сурх",
            description: "Ҳар як шиша шарбати зиёда аз 1 кг анори олиро дар бар мегирад. Мо усули фишори нармро истифода мебарем, то шарбатро бидуни майда кардани пӯсти талх ҷудо намоем. Ин боиси таъми ширин ва мураккабе мегардад, ки бо дигар шарбатҳо қобили қиёс нест.",
            imageAlt: "Тафсилоти Анор"
        },
        freshnessSection: {
            title: "Муҳофизати Қавӣ",
            description: "Шарбати анор ба рӯшноӣ ва ҳаво хеле ҳассос аст. Масири истеҳсолии мо шарбатро дар ҳар марҳила аз оксидшавӣ муҳофизат мекунад. Мо фавран пас аз фишурдан шишабандӣ мекунем, то ранги дурахшон ва хосиятҳои антиоксидантиро ҳифз намоем."
        },
        buyNowSection: {
            price: "15 сомонӣ",
            unit: "барои як шишаи 300мл",
            processingParams: ["Фишори сард", "Зери вакуум", "Бидуни қанд"],
            deliveryPromise: "Мустақиман аз истеҳсолот ба хонаи Шумо. Таровати кафолатнок.",
            returnPolicy: "Осеб дид? Мо онро фавран иваз мекунем."
        }
    }
];
