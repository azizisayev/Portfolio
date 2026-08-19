import { z } from 'zod'
import type { Locale } from '../i18n/locale-context'

const base = import.meta.env.BASE_URL

const localizedCopySchema = z.object({
  tagline: z.string(),
  blurb: z.string(),
  cardBullets: z.array(z.string()),
  features: z.array(z.string()).optional(),
  guestFeatures: z.array(z.string()).optional(),
  staffFeatures: z.array(z.string()).optional(),
  highlights: z.array(z.string()).optional(),
})

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  tags: z.array(z.string()),
  screenshots: z.array(z.string()),
  logo: z.string(),
  featured: z.boolean().default(false),
  accent: z.string(),
  copy: z.object({
    tr: localizedCopySchema,
    en: localizedCopySchema,
    ru: localizedCopySchema,
    az: localizedCopySchema,
  }),
})

export type LocalizedCopy = z.infer<typeof localizedCopySchema>
export type Project = z.infer<typeof projectSchema>

/**
 * Sıralı screenshot path listesi üretir.
 */
function shotPaths(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, index) => {
    const n = String(index + 1).padStart(2, '0')
    return `${base}screenshots/${folder}/${n}.jpg`
  })
}

/**
 * Portfolyo uygulamaları — ENG / TUR / RUS / AZE.
 */
export const projects: Project[] = [
  {
    id: 'galata',
    title: 'Galata',
    tags: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'RU · EN · TR'],
    screenshots: shotPaths('galata', 37),
    logo: `${base}logos/galata.png`,
    featured: true,
    accent: '#c45c26',
    copy: {
      en: {
        tagline:
          'A bilingual (RU / EN / TR) Expo app that connects diners and restaurant staff: menu, reservations, QR table ordering, in-app chat, and an admin operations suite.',
        blurb:
          'Galata is a production mobile app for a Turkish restaurant brand in Saint Petersburg. Guests browse the menu, book a table, order from their seat via QR, and chat with the restaurant — while staff run the floor from the same app.',
        cardBullets: [
          'Menu & cart',
          'Table reservations',
          'QR dine-in ordering',
          'Waiter / bill requests',
          'Guest ↔ restaurant chat',
          'Staff floor & sales console',
          'RU · EN · TR',
        ],
        guestFeatures: [
          'Multilingual experience — Russian, English, and Turkish UI throughout the app',
          'Digital menu — categories, dishes, photos, and a cart tailored for delivery or table flow',
          'Table reservations — branch, seating area, date/time, party size, notes; status tracking on-device',
          'QR table ordering — scan the sticker, order from your phone, pay at the table',
          'Service requests — call a waiter or request the bill from the table session',
          'In-app chat — message the restaurant without leaving the app; optional push when staff reply',
          'Delivery & takeaway paths — phone, Telegram, and Yandex Eda-style CTAs aligned with the website',
          'Banquets & Turkish shop — event booking entry points and gift-set browsing',
          'Branches & contact — addresses, phones, maps, hours, and social links',
        ],
        staffFeatures: [
          'Secure staff login — PIN gate + email/password with lockout protection',
          'Live floor board — tables, pending orders, waiter calls, and bill requests',
          'Order lifecycle — accept, serve, mark paid (with discounts), close table, manage QR',
          'Reservation inbox — confirm, decline, or cancel; guest push on status changes',
          'Guest chat inbox — reply per device thread, mute/close, unread attention badges',
          'Sales overview — cash, orders, bookings, discounts, and day-level detail',
          'Content CMS in-app — menu, promotions, branches, site heroes, shop products & media',
          'Push notifications — Expo / FCM / APNs for reservations, chat, and floor events',
        ],
        highlights: [
          'Phone-first, responsive layout for phones, tablets, and larger screens',
          'Realtime updates for floor and chat attention',
          'Remote brand media via Supabase Storage (lazy-loaded)',
          'Custom API domain and store-ready privacy policy for App Store / Google Play',
          'Built with Expo (React Native), TypeScript, and Supabase',
        ],
      },
      tr: {
        tagline:
          'Misafir ile restoranı birleştiren, üç dilli (RU / EN / TR) Expo uygulaması: menü, rezervasyon, QR masa siparişi, uygulama içi sohbet ve yönetici operasyon paneli.',
        blurb:
          'Galata, St. Petersburg’daki Türk mutfağı restoranları için üretim ortamında çalışan bir mobil uygulama. Misafirler menüyü gezer, masa rezervasyonu yapar, QR ile masadan sipariş verir ve restoranla sohbet eder; personel aynı uygulamadan salonu yönetir.',
        cardBullets: [
          'Menü & sepet',
          'Masa rezervasyonu',
          'QR sipariş',
          'Garson / hesap',
          'Misafir ↔ restoran sohbeti',
          'Personel salon & satış paneli',
          'RU · EN · TR',
        ],
        guestFeatures: [
          'Çok dilli deneyim — Rusça, İngilizce, Türkçe arayüz',
          'Dijital menü — kategoriler, yemekler, fotoğraflar; teslimat veya masa akışına uygun sepet',
          'Masa rezervasyonu — şube, alan, tarih/saat, kişi sayısı, not; cihazda durum takibi',
          'QR masa siparişi — masadaki QR’ı tara, telefondan sipariş ver, masada öde',
          'Servis talepleri — masadan garson çağır veya hesap iste',
          'Uygulama içi sohbet — uygulamadan çıkmadan restoranla yazış; yanıt gelince isteğe bağlı bildirim',
          'Teslimat & paket — telefon, Telegram ve Yandex Eda tarzı CTA’lar',
          'Banquet & Türk lavkası — etkinlik rezervasyonu ve hediye setleri',
          'Şubeler & iletişim — adres, telefon, harita, saatler, sosyal medya',
        ],
        staffFeatures: [
          'Güvenli personel girişi — PIN + e-posta/şifre, kilit koruması',
          'Canlı salon panosu — masalar, bekleyen siparişler, garson çağrıları, hesap talepleri',
          'Sipariş yaşam döngüsü — kabul, servis, ödeme (indirimli), masa kapatma, QR yönetimi',
          'Rezervasyon kutusu — onayla / reddet / iptal; misafire durum bildirimi',
          'Misafir sohbet kutusu — cihaz başına yanıt, sessize al / kapat, okunmamış rozetleri',
          'Satış özeti — kasa, siparişler, rezervasyonlar, indirimler, günlük detay',
          'Uygulama içi CMS — menü, kampanya, şube, hero görselleri, lavka ürünleri',
          'Push bildirimleri — rezervasyon, sohbet ve salon olayları (Expo / FCM / APNs)',
        ],
        highlights: [
          'Telefon öncelikli, telefon / tablet / geniş ekrana uyumlu arayüz',
          'Salon ve sohbet için gerçek zamanlı güncellemeler',
          'Marka görselleri Supabase Storage üzerinden (tembel yükleme)',
          'Özel API domain + App Store / Play için gizlilik politikası',
          'Expo (React Native), TypeScript, Supabase',
        ],
      },
      ru: {
        tagline:
          'Двусторонняя связь гостя и ресторана: трёхъязычное (RU / EN / TR) Expo-приложение с меню, бронированием, заказом по QR со стола, чатом и админ-панелью операций.',
        blurb:
          'Galata — продакшен-приложение для ресторанов турецкой кухни в Санкт-Петербурге. Гости смотрят меню, бронируют стол, заказывают по QR со своего места и пишут ресторану; персонал ведёт зал в том же приложении.',
        cardBullets: [
          'Меню и корзина',
          'Бронь стола',
          'Заказ по QR',
          'Официант / счёт',
          'Чат гость ↔ ресторан',
          'Панель зала и продаж',
          'RU · EN · TR',
        ],
        guestFeatures: [
          'Мультиязычность — интерфейс на русском, английском и турецком',
          'Цифровое меню — категории, блюда, фото; корзина под доставку или заказ со стола',
          'Бронирование стола — филиал, зона, дата/время, число гостей, комментарий; статус на устройстве',
          'Заказ по QR — сканируйте QR на столе, заказывайте с телефона, оплачивайте у стола',
          'Сервисные запросы — вызвать официанта или попросить счёт',
          'Чат в приложении — переписка с рестораном без выхода; опциональный push при ответе',
          'Доставка и самовывоз — телефон, Telegram и CTA в стиле Яндекс Еды',
          'Банкеты и турецкая лавка — заявки на мероприятия и подарочные наборы',
          'Филиалы и контакты — адреса, телефоны, карты, часы работы, соцсети',
        ],
        staffFeatures: [
          'Безопасный вход — PIN + email/пароль, защита от блокировки',
          'Живая доска зала — столы, ожидающие заказы, вызовы официанта, запросы счёта',
          'Жизненный цикл заказа — принять, подать, отметить оплату (со скидкой), закрыть стол, QR',
          'Входящие брони — подтвердить / отклонить / отменить; push гостю',
          'Входящий чат — ответы по устройству, mute/закрытие, бейджи непрочитанного',
          'Сводка продаж — касса, заказы, брони, скидки, дневная детализация',
          'CMS в приложении — меню, акции, филиалы, hero-фото, товары лавки',
          'Push-уведомления — брони, чат и события зала (Expo / FCM / APNs)',
        ],
        highlights: [
          'Mobile-first, адаптив под телефон / планшет / широкий экран',
          'Realtime для зала и чата',
          'Медиа бренда из Supabase Storage (ленивая загрузка)',
          'Свой API-домен + политика конфиденциальности для App Store / Google Play',
          'Expo (React Native), TypeScript, Supabase',
        ],
      },
      az: {
        tagline:
          'Qonaq ilə restoranı birləşdirən üçdilli (RU / EN / TR) Expo tətbiqi: menyu, rezervasiya, QR masa sifarişi, tətbiqdaxili çat və admin əməliyyat paneli.',
        blurb:
          'Galata, Sankt-Peterburqdakı türk mətbəxi restoranları üçün production mobil tətbiqdir. Qonaqlar menyuya baxır, masa rezervasiyası edir, QR ilə masadan sifariş verir və restoranla yazışır; personal eyni tətbiqdən zalı idarə edir.',
        cardBullets: [
          'Menyu və səbət',
          'Masa rezervasiyası',
          'QR sifariş',
          'Ofisiant / hesab',
          'Qonaq ↔ restoran çatı',
          'Personal zal və satış paneli',
          'RU · EN · TR',
        ],
        guestFeatures: [
          'Çoxdilli təcrübə — rus, ingilis və türk interfeysi',
          'Rəqəmsal menyu — kateqoriyalar, yeməklər, fotolar; çatdırılma və ya masa axınına uyğun səbət',
          'Masa rezervasiyası — filial, zona, tarix/saat, qonaq sayı, qeyd; cihazda status izləmə',
          'QR masa sifarişi — masadakı QR-ı skan et, telefondan sifariş ver, masada ödə',
          'Servis sorğuları — masadan ofisiant çağır və ya hesab istə',
          'Tətbiqdaxili çat — tətbiqdən çıxmadan restoranla yazış; cavab gələndə istəyə bağlı bildiriş',
          'Çatdırılma və paket — telefon, Telegram və Yandex Eda tipli CTA-lar',
          'Banket və türk lavkası — tədbir rezervasiyası və hədiyyə setləri',
          'Filiallar və əlaqə — ünvan, telefon, xəritə, saatlar, sosial media',
        ],
        staffFeatures: [
          'Təhlükəsiz personal girişi — PIN + e-poçt/şifrə, kilid mühafizəsi',
          'Canlı zal paneli — masalar, gözləyən sifarişlər, ofisiant çağırışları, hesab sorğuları',
          'Sifariş həyat dövrü — qəbul, servis, ödəniş (endirimli), masa bağlama, QR idarəetmə',
          'Rezervasiya qutusu — təsdiq / rədd / ləğv; qonağa status bildirişi',
          'Qonaq çat qutusu — cihaz üzrə cavab, səssiz / bağlama, oxunmamış nişanlar',
          'Satış xülasəsi — kassa, sifarişlər, rezervasiyalar, endirimlər, günlük detal',
          'Tətbiqdaxili CMS — menyu, kampaniya, filial, hero şəkilləri, lavka məhsulları',
          'Push bildirişləri — rezervasiya, çat və zal hadisələri (Expo / FCM / APNs)',
        ],
        highlights: [
          'Telefon prioritetli, telefon / planşet / geniş ekrana uyğun interfeys',
          'Zal və çat üçün real-time yeniləmələr',
          'Brend media Supabase Storage üzərindən (lazy load)',
          'Xüsusi API domain + App Store / Play üçün məxfilik siyasəti',
          'Expo (React Native), TypeScript, Supabase',
        ],
      },
    },
  },
  {
    id: 'simplydo',
    title: 'SimplyDo',
    tags: ['Expo', 'React Native', 'TypeScript', 'Supabase', '13+ languages'],
    screenshots: shotPaths('simplydo', 10),
    logo: `${base}logos/simplydo.png`,
    featured: true,
    accent: '#0d9f8c',
    copy: {
      en: {
        tagline: 'Task management with voice notes, themes, calendar, stats, and cloud sync.',
        blurb:
          'SimplyDo helps you create, organize, and complete tasks with reminders, voice notes, rich themes, offline mode, and multilingual UI — synced securely with Supabase.',
        cardBullets: [
          'Tasks & reminders',
          'Voice notes',
          'Themes & calendar',
          'Stats & streaks',
          'Offline + cloud sync',
          'Multi-language + RTL',
        ],
        features: [
          'Task management: create, edit, complete, and organize to-dos',
          'Due dates & reminders with push notifications',
          'Voice notes: record and play audio notes on tasks',
          'App themes: light, dark, ultra dark, and custom color palettes',
          'Home views: today, tomorrow, past / overdue, completed',
          'Calendar view for your daily schedule',
          'Stats: completion rate, streak, distribution, monthly overview',
          'Offline mode with automatic sync when back online',
          'Secure auth: sign up / sign in, username or email, password reset',
          'Cloud sync via Supabase',
          'Multi-language UI (EN, TR, RU, AZ, AR, ZH, ES, FR, HI, DE, KO, IT, JA) + RTL',
          'Profile settings: notifications, theme, language, display name',
          'Premium / promo code support',
          'Onboarding for first-time users',
        ],
      },
      tr: {
        tagline: 'Ses notları, temalar, takvim, istatistikler ve bulut senkronu ile görev yönetimi.',
        blurb:
          'SimplyDo; hatırlatıcılar, ses notları, zengin temalar, çevrimdışı kullanım ve çok dilli arayüzle görevlerini oluşturup tamamlamana yardım eder — Supabase ile güvenli senkron.',
        cardBullets: [
          'Görev & hatırlatıcı',
          'Ses notları',
          'Tema & takvim',
          'İstatistik & seri',
          'Çevrimdışı + bulut',
          'Çok dil + RTL',
        ],
        features: [
          'Görev yönetimi: oluşturma, düzenleme, tamamlama, organize etme',
          'Bitiş tarihi ve hatırlatıcılar (push bildirimleri)',
          'Ses notu: görevlere ses kaydı ekleme ve dinleme',
          'Uygulama teması: açık, koyu, ultra koyu ve özel renk paletleri',
          'Ana ekran: bugün, yarın, geçmiş / gecikmiş, tamamlananlar',
          'Takvim görünümü',
          'İstatistikler: tamamlanma oranı, seri, dağılım, aylık özet',
          'Çevrimdışı kullanım ve internet gelince otomatik senkron',
          'Güvenli giriş: kayıt / giriş, kullanıcı adı veya e-posta, şifre sıfırlama',
          'Supabase ile bulut senkronizasyonu',
          'Çoklu dil desteği + RTL',
          'Profil: bildirim, tema, dil, görünen ad',
          'Premium / promosyon kodu desteği',
          'İlk kullanım için onboarding',
        ],
      },
      ru: {
        tagline: 'Задачи с голосовыми заметками, темами, календарём, статистикой и облачной синхронизацией.',
        blurb:
          'SimplyDo помогает создавать и завершать задачи с напоминаниями, голосовыми заметками, темами, офлайн-режимом и многоязычным UI — с безопасной синхронизацией через Supabase.',
        cardBullets: [
          'Задачи и напоминания',
          'Голосовые заметки',
          'Темы и календарь',
          'Статистика и серии',
          'Офлайн + облако',
          'Много языков + RTL',
        ],
        features: [
          'Управление задачами: создание, редактирование, выполнение, организация',
          'Сроки и напоминания с push-уведомлениями',
          'Голосовые заметки: запись и прослушивание аудио к задачам',
          'Темы приложения: светлая, тёмная, ультра-тёмная и цветовые палитры',
          'Главный экран: сегодня, завтра, просроченные / прошлые, выполненные',
          'Календарь',
          'Статистика: процент выполнения, серия дней, распределение, месячный обзор',
          'Офлайн-режим с автосинхронизацией',
          'Безопасный вход: регистрация / вход, имя пользователя или email, сброс пароля',
          'Облачная синхронизация через Supabase',
          'Многоязычный интерфейс + RTL',
          'Профиль: уведомления, тема, язык, отображаемое имя',
          'Поддержка Premium / промокодов',
          'Онбординг для новых пользователей',
        ],
      },
      az: {
        tagline: 'Səs qeydləri, temalar, təqvim, statistika və bulud sinxronu ilə tapşırıq idarəetməsi.',
        blurb:
          'SimplyDo; xatırlatmalar, səs qeydləri, zəngin temalar, oflayn rejim və çoxdilli interfeys ilə tapşırıqlarını yaratmağa və tamamlamağa kömək edir — Supabase ilə təhlükəsiz sinxron.',
        cardBullets: [
          'Tapşırıq və xatırlatma',
          'Səs qeydləri',
          'Tema və təqvim',
          'Statistika və seriya',
          'Oflayn + bulud',
          'Çox dil + RTL',
        ],
        features: [
          'Tapşırıq idarəetməsi: yaratma, redaktə, tamamlama, təşkil etmə',
          'Bitmə tarixi və xatırlatmalar (push bildirişləri)',
          'Səs qeydi: tapşırıqlara audio əlavə etmə və dinləmə',
          'Tətbiq teması: açıq, tünd, ultra tünd və xüsusi rəng palitraları',
          'Əsas ekran: bu gün, sabah, keçmiş / gecikmiş, tamamlananlar',
          'Təqvim görünüşü',
          'Statistika: tamamlanma faizi, seriya, paylanma, aylıq icmal',
          'Oflayn istifadə və internet gələndə avtomatik sinxron',
          'Təhlükəsiz giriş: qeydiyyat / giriş, istifadəçi adı və ya e-poçt, şifrə sıfırlama',
          'Supabase ilə bulud sinxronizasiyası',
          'Çoxdilli dəstək + RTL',
          'Profil: bildiriş, tema, dil, görünən ad',
          'Premium / promo kod dəstəyi',
          'İlk istifadə üçün onboarding',
        ],
      },
    },
  },
  {
    id: 'converter',
    title: 'Converto',
    tags: ['Expo', 'React Native', 'TypeScript', 'iOS · Android', '13 languages'],
    screenshots: shotPaths('converter', 18),
    logo: `${base}logos/converter.png`,
    featured: true,
    accent: '#F26B1D',
    copy: {
      en: {
        tagline: 'A currency, crypto, and unit converter for iOS and Android.',
        blurb:
          'Converto is a currency, crypto, and unit converter for iOS and Android.',
        cardBullets: [
          'Live FX & crypto',
          'Kitchen measures',
          'Calculator keypad',
          'Light / dark',
          '13 languages + RTL',
        ],
        features: [
          'Live FX rates; offline, last saved rates',
          'Crypto conversion',
          'Daily / kitchen measures (cup, spoon, grams)',
          'Length, weight, temperature, volume, area, speed, time, fuel, data, power',
          'Built-in calculator keypad',
          'Light / dark theme',
          'No account. No conversion history',
          '13 languages: English, Turkish, Azerbaijani, Russian, Arabic (RTL), Chinese, Spanish, French, Hindi, German, Korean, Italian, Japanese',
          'Responsive layout for phones and tablets',
        ],
      },
      tr: {
        tagline: 'iOS ve Android için döviz, kripto ve birim çevirici.',
        blurb: 'Converto, iOS ve Android için döviz, kripto ve birim çeviricidir.',
        cardBullets: [
          'Canlı döviz & kripto',
          'Mutfak ölçüleri',
          'Hesap makinesi',
          'Açık / koyu tema',
          '13 dil + RTL',
        ],
        features: [
          'Canlı döviz kurları; çevrimdışında son kayıtlı kurlar',
          'Kripto çevirisi',
          'Günlük / mutfak ölçüleri (bardak, kaşık, gram)',
          'Uzunluk, ağırlık, sıcaklık, hacim, alan, hız, zaman, yakıt, veri, güç',
          'Hesap makinesi tuş takımı',
          'Açık / koyu tema',
          'Hesap yok. Çeviri geçmişi kaydedilmez',
          '13 dil: İngilizce, Türkçe, Azerbaycanca, Rusça, Arapça (RTL), Çince, İspanyolca, Fransızca, Hintçe, Almanca, Korece, İtalyanca, Japonca',
          'Telefon ve tablet için responsive arayüz',
        ],
      },
      ru: {
        tagline: 'Конвертер валют, криптовалют и единиц для iOS и Android.',
        blurb: 'Converto — конвертер валют, криптовалют и единиц для iOS и Android.',
        cardBullets: [
          'Валюты и крипто',
          'Кухонные меры',
          'Калькулятор',
          'Светлая / тёмная',
          '13 языков + RTL',
        ],
        features: [
          'Живые курсы; офлайн — последние сохранённые',
          'Конвертация криптовалют',
          'Кухонные меры (стакан, ложка, граммы)',
          'Длина, вес, температура, объём, площадь, скорость, время, топливо, данные, мощность',
          'Встроенная клавиатура калькулятора',
          'Светлая / тёмная тема',
          'Без аккаунта. История конвертаций не сохраняется',
          '13 языков: английский, турецкий, азербайджанский, русский, арабский (RTL), китайский, испанский, французский, хинди, немецкий, корейский, итальянский, японский',
          'Адаптивный (responsive) интерфейс для телефонов и планшетов',
        ],
      },
      az: {
        tagline: 'iOS və Android üçün valyuta, krypto və vahid çeviricisi.',
        blurb: 'Converto iOS və Android üçün valyuta, krypto və vahid çeviricisidir.',
        cardBullets: [
          'Canlı valyuta və krypto',
          'Mətbəx ölçüləri',
          'Kalkulyator',
          'İşıqlı / tünd',
          '13 dil + RTL',
        ],
        features: [
          'Canlı məzənnələr; oflaynda son saxlanmış kurslar',
          'Krypto çevrilməsi',
          'Mətbəx ölçüləri (stəkan, qaşıq, qram)',
          'Uzunluq, çəki, temperatur, həcm, sahə, sürət, vaxt, yanacaq, data, güc',
          'Kalkulyator klaviaturası',
          'İşıqlı / tünd tema',
          'Hesab yoxdur. Çevrilmə tarixçəsi saxlanılmır',
          '13 dil: ingilis, türk, azərbaycan, rus, ərəb (RTL), çin, ispan, fransız, hindi, alman, koreya, italyan, yapon',
          'Telefon və planşet üçün responsive interfeys',
        ],
      },
    },
  },
]

/**
 * Proje metnini aktif dile göre döndürür.
 */
export function getProjectCopy(project: Project, locale: Locale): LocalizedCopy {
  return project.copy[locale]
}
