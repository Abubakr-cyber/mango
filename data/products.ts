
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
        subName: "Офтоби холис.",
        price: "12 сомонӣ",
        description: "Бо витамини C бой - Бе маводи консервантӣ - 100% мева",
        folderPath: "/images/mango_1_000",
        themeColor: "#FFB74D",
        gradient: "linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)",

        // Adapted for provided assets
        frameCount: 49,
        fileNamePrefix: "mango_1_",
        fileExtension: "jpg",

        features: ["Бо витамини C бой", "Бе маводи консервантӣ", "100% мева"],
        stats: [{ label: "Шакар", val: "0г" }, { label: "Об", val: "0%" }, { label: "Мағз", val: "100%" }],
        section1: { title: "Крем Манго.", subtitle: "Офтоби холис." },
        section2: { title: "Пур аз мангои тоза.", subtitle: "Мангоҳои Алфонсои дастчин, ки дар зери офтоби тобистон пухта расидаанд." },
        section3: { title: "Таровати пур аз витамин.", subtitle: "Манбаи табиии энергия, ки бадан ва зеҳни шуморо фавран эҳё мекунад." },
        section4: { title: "Аз мева тайёр шудааст, на аз консентрат.", subtitle: "" },
        detailsSection: {
            title: "Шоҳи меваҳо",
            description: "Шарбати Крем Мангои мо танҳо аз мангоҳои беҳтарини Ратнагири Алфонсо омода мешавад. Ин мангоҳо бо ширинӣ ва ранги дурахшони худ маълуманд ва чанд соат пас аз ҷамъоварӣ бо усули фишори сард коркард мешаванд, то ҳар як қатраи фоиданоки он ҳифз шавад. Ин танҳо шарбат нест; ин як таҷрибаи тиллоӣ аст.",
            imageAlt: "Тафсилоти Манго"
        },
        freshnessSection: {
            title: "Аз боғ то шиша",
            description: "Мо ба шаффофияти комил боварӣ дорем. Аз боғ то шиша, раванди мо барои кам кардани оксидшавӣ ва ҳадди аксар расонидани таъм тарҳрезӣ шудааст. HPP (Коркарди Фишори Баланд) кафолат медиҳад, ки шарбати мо бе ягон коркарди гармӣ бехатар ва тоза мемонад ва ферментҳо ва витаминҳои ҳаётан муҳимро нигоҳ медорад."
        },
        buyNowSection: {
            price: "12 сомонӣ",
            unit: "барои шишаи 300мл",
            processingParams: ["Фишори сард", "Гарм карда нашудааст", "HPP коркардшуда"],
            deliveryPromise: "Дастраскунии рӯзи дигар дар шаҳрҳои калон. Бастабандии хунук таровати олиро таъмин мекунад.",
            returnPolicy: "100% Кафолати қаноатмандӣ. Маҳқул нашуд? Мо онро иваз мекунем, бе ягон савол."
        }
    },
    {
        id: "chocolate",
        name: "Шоколади Голландӣ",
        subName: "Нарм ва латиф.",
        price: "14 сомонӣ",
        description: "Какаои олӣ - Шири бодом - Протеини растанӣ",
        folderPath: "/images/chocolate",
        themeColor: "#8D6E63",
        gradient: "linear-gradient(135deg, #8D6E63 0%, #5D4037 100%)",

        // Defaults per prompt spec
        frameCount: 120,
        fileNamePrefix: "",
        fileExtension: "webp",

        features: ["Какаои олӣ", "Шири бодом", "Протеини растанӣ"],
        stats: [{ label: "Шир", val: "0%" }, { label: "Протеин", val: "12г" }, { label: "Какао", val: "100%" }],
        section1: { title: "Шоколади Голландӣ.", subtitle: "Нарм ва латиф." },
        section2: { title: "Лаззати беҳамто.", subtitle: "Какаои торики бой бо шири бодоми қаймоқӣ барои лаззати безарар омехта шудааст." },
        section3: { title: "Энергияи растанӣ.", subtitle: "Бо протеини растании табиӣ барои дастгирии тарзи ҳаёти фаъоли шумо." },
        section4: { title: "Лаззат бе созиш.", subtitle: "" },
        detailsSection: {
            title: "Какаои аз ҷиҳати ахлоқӣ дастрасшуда",
            description: "Мо какаои худро аз фермаҳои устувори Гана дастрас мекунем, ки музди меҳнати одилона ва сифати олиро таъмин мекунанд. Бо шири бодоми хонагии мо омехта шуда, ин нӯшокӣ матни абрешимиро пешниҳод мекунад, ки бо ширҳои анъанавӣ рақобат мекунад, аммо бо сифр холестерин ва 100% фоидаи растанӣ.",
            imageAlt: "Тафсилоти Шоколад"
        },
        freshnessSection: {
            title: "Комилияти сард",
            description: "Гармӣ флавоноидҳои нозуки какаоро нобуд мекунад. Барои ҳамин мо Шоколади Голландии худро сард омехта мекунем. Шири бодоми мо ҳар рӯз тоза фишурда мешавад ва ҳеҷ гоҳ нигоҳ дошта намешавад.  Натиҷа таъми тоза ва қавии шоколад аст, ки дар забон вазнин аммо дар меъда сабук аст."
        },
        buyNowSection: {
            price: "14 сомонӣ",
            unit: "барои шишаи 300мл",
            processingParams: ["Растанӣ", "Сард омехташуда", "Бе шир"],
            deliveryPromise: "Дар яхдонҳои эко-дӯстона интиқол дода мешавад. 48 соат комилан хунук мемонад.",
            returnPolicy: "Тафовутро эҳсос кунед ё пулатонро бозпас гиред."
        }
    },
    {
        id: "pomegranate",
        name: "Анори Ёқутӣ",
        subName: "Манбаи антиоксидант.",
        price: "15 сомонӣ",
        description: "Фоиданок барои дил - Фишори сард - Тақвиятдиҳандаи иммунитет",
        folderPath: "/images/pomegranate",
        themeColor: "#E57373",
        gradient: "linear-gradient(135deg, #E57373 0%, #C62828 100%)",

        // Defaults per prompt spec
        frameCount: 120,
        fileNamePrefix: "",
        fileExtension: "webp",

        features: ["Фоиданок барои дил", "Фишори сард", "Тақвиятдиҳандаи иммунитет"],
        stats: [{ label: "Аловагиҳо", val: "0%" }, { label: "Витаминҳо", val: "A,C,K" }, { label: "Тозагӣ", val: "100%" }],
        section1: { title: "Анори Ёқутӣ.", subtitle: "Ҷавоҳироти табиат." },
        section2: { title: "Таркиши таъм.", subtitle: "Донаҳои анори тоза фишурдашуда, ки эҳсоси турш ва ширинро мерасонанд." },
        section3: { title: "Фоида барои дил.", subtitle: "Бо антиоксидантҳои қавӣ барои муҳофизат ва ҷавонсозӣ пур аст." },
        section4: { title: "Шарбати тоза, ҳаёти тоза.", subtitle: "" },
        detailsSection: {
            title: "Эликсири Ёқутӣ",
            description: "Ҳар як шиша шарбати зиёда аз 1 кг анорҳои олиро дар бар мегирад. Мо усули фишори нармро истифода мебарем, то шарбатро аз донаҳо бидуни майда кардани пӯсти талх ҷудо кунем. Ин боиси таъми ширин ва мураккаб мегардад, ки бо консентратҳои тиҷоратӣ қобили муқоиса нест.",
            imageAlt: "Тафсилоти Анор"
        },
        freshnessSection: {
            title: "Нигоҳдории Қавӣ",
            description: "Шарбати анор ба рӯшноӣ ва ҳаво хеле ҳассос аст. Хатти шишабандии мо тарҳрезӣ шудааст, ки шарбатро дар ҳар марҳила аз оксидшавӣ муҳофизат кунад. Мо фавран пас аз фишурдан шишабандӣ мекунем, то ранги дурахшон ва пуникалагинҳои қавӣ—антиоксидантҳои нодиреро, ки танҳо дар анор мавҷуданд, нигоҳ дорем."
        },
        buyNowSection: {
            price: "15 сомонӣ",
            unit: "барои шишаи 300мл",
            processingParams: ["Фишори сард", "Муҳофизати оксидшавӣ", "Бе иловагиҳо"],
            deliveryPromise: "Мустақиман аз сех ба дари хонаи шумо.  Баробари расидан таровати кафолатнок.",
            returnPolicy: "Дар роҳ осеб дид? Иввазкунии фаврӣ дастрас аст."
        }
    }
];
