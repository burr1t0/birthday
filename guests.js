// ════════════════════════════════════════════════════════
//  guests.js — ГЛАВНЫЙ ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ 📝
//  Здесь вся информация: гости, вечеринка, виш-лист
// ════════════════════════════════════════════════════════


// ── Гости ─────────────────────────────────────────────
//  Ключ  = КОД (что вводит гость, пишут в любом регистре)
//  name  = имя, отображается на странице приглашения
//  emoji = украшение рядом с именем
//  message = текст приглашения (поддерживает HTML-теги)

const GUESTS = {

  "DASHA-001": {
    name: "Дарья",
    emoji: "🌸",
    message: `
      <p>Дорогая Даша!</p>
      <p>Текст личного приглашения для Даши — напиши здесь.</p>
      <p>Жду тебя с распростёртыми объятиями! 🐱</p>
    `
  },

  "GUEST-002": {
    name: "Гость 2",
    emoji: "✨",
    message: `
      <p>Привет!</p>
      <p>Текст личного приглашения для гостя 2...</p>
    `
  },

  "GUEST-003": {
    name: "Гость 3",
    emoji: "💕",
    message: `
      <p>Привет!</p>
      <p>Текст личного приглашения для гостя 3...</p>
    `
  },

  "GUEST-004": {
    name: "Гость 4",
    emoji: "🎀",
    message: `
      <p>Привет!</p>
      <p>Текст личного приглашения для гостя 4...</p>
    `
  },

  "GUEST-005": {
    name: "Гость 5",
    emoji: "🌙",
    message: `
      <p>Привет!</p>
      <p>Текст личного приглашения для гостя 5...</p>
    `
  },

  "GUEST-006": {
    name: "Гость 6",
    emoji: "⭐",
    message: `
      <p>Привет!</p>
      <p>Текст личного приглашения для гостя 6...</p>
    `
  },

};


// ── Вечеринка ──────────────────────────────────────────
const PARTY = {
  hostName:  "Именинница",           // Чьё ДР
  date:      "ДД месяц ГГГГ",        // Пример: "12 июля 2025"
  time:      "ЧЧ:ММ",                // Пример: "18:00"
  location:  "Название места",       // Пример: "Кафе «Котик»"
  address:   "Улица, дом",           // Пример: "ул. Садовая, 5"
  note:      "",                     // Доп. примечание (можно оставить пустым)
};


// ── Виш-лист ──────────────────────────────────────────
//  id    — НЕ МЕНЯТЬ (это ключи в Firebase)
//  label — название подарка
//  link  — ссылка (необязательно, можно оставить "")

const WISHLIST_ITEMS = [
  { id: "w1", label: "Бомбастер", link: "https://www.wildberries.ru/catalog/172463366/detail.aspx?size=286142916" },
  { id: "w2", label: "Свинтус", link: "https://www.ozon.ru/product/kartochnaya-igra-svintus-pravila-etiketa-19874894/" },
  { id: "w3", label: "Холст на подрамнике", link: "https://www.ozon.ru/product/holst-na-podramnike-gruntovannyy-malevich-20h30-30h40-40h50-sm-nabor-holstov-100-hlopok-280-g-264283390/" },
  { id: "w4", label: "Отель \"У погибшего альпиниста\"", link: "https://www.ozon.ru/product/otel-u-pogibshego-alpinista-strugatskiy-arkadiy-natanovich-313575137/" },
  { id: "w5", label: "За миллиард лет до конца света", link: "https://www.ozon.ru/product/za-milliard-let-do-kontsa-sveta-strugatskiy-arkadiy-natanovich-strugatskiy-boris-natanovich-313584178/" },
  { id: "w6", label: "Ободок для волос", link: "https://www.ozon.ru/product/obodok-dlya-volos-zhenskiy-1410939389/" },
  { id: "w7", label: "Букет сухоцветов", link: "https://www.ozon.ru/product/buket-suhotsvetov-dlya-dekora-v-vazu-trava-decor-pampasnaya-trava-pshenitsa-lavanda-1421668526/" },
  { id: "w8", label: "Мармелад", link: "https://www.ozon.ru/product/zhevatelnyy-marmelad-1-kg-bolshaya-korobka-sladostey-1439565404/" },
  { id: "w9", label: "Баскетбольный мяч", link: "https://www.ozon.ru/product/myach-basketbolnyy-7-razmera-street-1582000090/" },
  { id: "w10", label: "Носочки", link: "https://www.ozon.ru/product/noski-nicenonice-zhenskie-classic-1-para-1755629309/" },
  { id: "w11", label: "Носочки", link: "https://www.ozon.ru/product/noski-nicenonice-zhenskie-classic-1-para-1755629352/" },
  { id: "w12", label: "Носочки", link: "https://www.ozon.ru/product/noski-nicenonice-zhenskie-classic-1-para-1755632378/" },
  { id: "w13", label: "Носочки", link: "https://www.ozon.ru/product/noski-nicenonice-zhenskie-classic-1-para-2731839066/" },
  { id: "w14", label: "Шоколад", link: "https://www.ozon.ru/product/shokolad-molochnyy-tuk-s-solenym-krekerom-87-g-milka-1872773729/" },
  { id: "w15", label: "Акриловый маркер", link: "https://www.ozon.ru/product/akrilovyy-marker-s-odnim-nakonechnikom-80-tsvetov-myagkiy-nakonechnik-markera-plastikovaya-1903968941/" },
  { id: "w16", label: "Кислинка", link: "https://www.ozon.ru/product/konfety-karamel-kislinka-250gr-1924908981/" },
  { id: "w17", label: "Хромая судьба", link: "https://www.ozon.ru/product/hromaya-sudba-2153160821/" },
  { id: "w18", label: "Ваза металлическая", link: "https://www.ozon.ru/product/vaza-metallicheskaya-dlya-tsvetov-i-suhotsvetov-v-stile-loft-2371981665/" },
  { id: "w19", label: "Губная гармошка", link: "https://www.ozon.ru/product/gubnaya-garmoshka-diatonicheskaya-c-major-s-futlyarom-serebristaya-2424005799/" },
  { id: "w20", label: "Сыворотка для лица", link: "https://www.ozon.ru/product/mixit-syvorotka-dlya-litsa-ot-pryshchey-30-ml-miksit-2438035334/" },
  { id: "w21", label: "Мини-вафельница", link: "https://www.ozon.ru/product/mini-vafelnitsa-elektricheskaya-350-vt-2634133343/" },
  { id: "w22", label: "Коврик прикроватный", link: "https://www.ozon.ru/product/kovrik-prikrovatnyy-v-spalnyu-i-gostinuyu-rozovaya-pantera-birdhouse-60h120-sm-2683739572/" },
  { id: "w23", label: "Мармелад", link: "https://www.ozon.ru/product/zhevatelnyy-marmelad-fruity-time-remeshki-kislye-golubaya-malina-konteyner-250-gr-frutti-taym-3287777091/" },
  { id: "w24", label: "Кремовый зефир", link: "https://www.ozon.ru/product/kremovyy-zefir-marshmallow-fluff-s-vanilnym-vkusom-213-gr-3386233581/" },
  { id: "w25", label: "Патчи для глаз", link: "https://www.ozon.ru/product/gidrogelevye-antivozrastnye-patchi-dlya-glaz-ot-otekov-meshkov-i-morshchin-sadoer-zhidkie-vitaminnye-3502736853/" },
  { id: "w26", label: "Блендер погружной", link: "https://www.ozon.ru/product/marta-blender-pogruzhnoy-1500-vt-s-izmelchitelem-i-venchikom-dlya-vzbivaniya-supov-smuzi-3559724178/" },
  { id: "w27", label: "Пояс", link: "https://www.ozon.ru/product/life-style-travel-poyas-1082-3612910063/" },
  { id: "w28", label: "Набор для выращивания трав", link: "https://www.ozon.ru/product/nabor-dlya-vyrashchivaniya-trav-dlya-chaya-na-podokonnike-chaynyy-sad-domashniy-ogorod-semena-3836798025/" },
  { id: "w29", label: "Мармелад желейный", link: "https://www.ozon.ru/product/marmelad-zheleynyy-s-chia-fruktovyy-500-gr-4180181495/" },
  { id: "w30", label: "Рельефный чехол", link: "https://www.ozon.ru/product/relefnyy-chehol-s-printom-serdtsa-na-samsung-a35-5g-dlya-samsung-a35-5g-4269671178/" },
];
