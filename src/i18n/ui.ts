import type { Locale } from './locale-context'

interface UiCopy {
  navProjects: string
  navAbout: string
  navContact: string
  greeting: string
  role: string
  tagline: string
  ctaProjects: string
  ctaContact: string
  projectsEyebrow: string
  projectsTitle: string
  projectsLead: string
  featured: string
  project: string
  guestFeatures: string
  staffFeatures: string
  highlights: string
  features: string
  aboutEyebrow: string
  aboutTitle: string
  aboutBio: string
  skills: string
  contactEyebrow: string
  contactTitle: string
  contactLead: string
  sendEmail: string
  copyAddress: string
  copied: string
  call: string
  footerRights: string
  footerPages: string
  screenshotOf: string
  prev: string
  next: string
  photoAlt: string
  language: string
}

export const uiCopy: Record<Locale, UiCopy> = {
  en: {
    navProjects: 'Projects',
    navAbout: 'About',
    navContact: 'Contact',
    greeting: "Hi, I'm",
    role: 'Software Developer',
    tagline: 'I design modern, fluid apps that feel good to use.',
    ctaProjects: 'Projects',
    ctaContact: 'Contact Me',
    projectsEyebrow: 'Portfolio',
    projectsTitle: 'Apps I built',
    projectsLead: 'Multilingual descriptions, feature lists, and sequential screenshots for each product.',
    featured: 'Featured',
    project: 'Project',
    guestFeatures: 'Guest features',
    staffFeatures: 'Staff / admin',
    highlights: 'Product highlights',
    features: 'Features',
    aboutEyebrow: 'About',
    aboutTitle: 'Product-focused development',
    aboutBio:
      'I build product-focused mobile and web apps with TypeScript, React, and Expo. Clean UI, performance, and UX come first.',
    skills: 'Skills',
    contactEyebrow: 'Contact',
    contactTitle: "Let's build something together",
    contactLead: 'Reach me by email, WhatsApp, or Telegram.',
    sendEmail: 'Send email',
    copyAddress: 'Copy address',
    copied: 'Copied',
    call: 'Call',
    footerRights: 'All rights reserved.',
    footerPages: 'Published on GitHub Pages.',
    screenshotOf: 'screenshot',
    prev: 'Previous',
    next: 'Next',
    photoAlt: 'Profile photo',
    language: 'Language',
  },
  tr: {
    navProjects: 'Projeler',
    navAbout: 'Hakkımda',
    navContact: 'İletişim',
    greeting: 'Merhaba, ben',
    role: 'Yazılım Geliştirici',
    tagline: 'Kullanıcıya dokunan, modern ve akıcı uygulamalar tasarlıyorum.',
    ctaProjects: 'Projeleri gör',
    ctaContact: 'Konuşalım',
    projectsEyebrow: 'Portfolyo',
    projectsTitle: 'Yaptığım uygulamalar',
    projectsLead: 'Her proje için çok dilli açıklama, özellikler ve ekran görüntüleri.',
    featured: 'Öne çıkan',
    project: 'Proje',
    guestFeatures: 'Misafir özellikleri',
    staffFeatures: 'Personel / yönetici',
    highlights: 'Ürün vurguları',
    features: 'Özellikler',
    aboutEyebrow: 'Hakkımda',
    aboutTitle: 'Ürün odaklı geliştirme',
    aboutBio:
      'Mobil ve web tarafında TypeScript, React ve Expo ile ürün odaklı uygulamalar geliştiriyorum. Temiz arayüz, performans ve kullanıcı deneyimi önceliğim.',
    skills: 'Yetenekler',
    contactEyebrow: 'İletişim',
    contactTitle: 'Birlikte bir şeyler yapalım',
    contactLead: 'E-posta, WhatsApp veya Telegram üzerinden ulaşabilirsin.',
    sendEmail: 'E-posta gönder',
    copyAddress: 'Adresi kopyala',
    copied: 'Kopyalandı',
    call: 'Ara',
    footerRights: 'Tüm hakları saklıdır.',
    footerPages: 'GitHub Pages ile yayınlandı.',
    screenshotOf: 'ekran görüntüsü',
    prev: 'Önceki',
    next: 'Sonraki',
    photoAlt: 'Profil fotoğrafı',
    language: 'Dil',
  },
  ru: {
    navProjects: 'Проекты',
    navAbout: 'Обо мне',
    navContact: 'Контакты',
    greeting: 'Привет, я',
    role: 'Разработчик ПО',
    tagline: 'Делаю современные и удобные приложения, которыми приятно пользоваться.',
    ctaProjects: 'Смотреть проекты',
    ctaContact: 'Связаться',
    projectsEyebrow: 'Портфолио',
    projectsTitle: 'Мои приложения',
    projectsLead: 'Многоязычные описания, списки функций и последовательные скриншоты для каждого продукта.',
    featured: 'Избранное',
    project: 'Проект',
    guestFeatures: 'Для гостя',
    staffFeatures: 'Для персонала / админа',
    highlights: 'Акценты продукта',
    features: 'Возможности',
    aboutEyebrow: 'Обо мне',
    aboutTitle: 'Продуктовая разработка',
    aboutBio:
      'Разрабатываю мобильные и веб-приложения на TypeScript, React и Expo. В приоритете чистый UI, производительность и UX.',
    skills: 'Навыки',
    contactEyebrow: 'Контакты',
    contactTitle: 'Давайте сделаем что-то вместе',
    contactLead: 'Пишите на email, WhatsApp или Telegram.',
    sendEmail: 'Написать email',
    copyAddress: 'Скопировать адрес',
    copied: 'Скопировано',
    call: 'Позвонить',
    footerRights: 'Все права защищены.',
    footerPages: 'Опубликовано на GitHub Pages.',
    screenshotOf: 'скриншот',
    prev: 'Назад',
    next: 'Далее',
    photoAlt: 'Фото профиля',
    language: 'Язык',
  },
  az: {
    navProjects: 'Layihələr',
    navAbout: 'Haqqımda',
    navContact: 'Əlaqə',
    greeting: 'Salam, mən',
    role: 'Proqram təminatı tərtibatçısı',
    tagline: 'İstifadəçiyə toxunan, müasir və axıcı tətbiqlər hazırlayıram.',
    ctaProjects: 'Layihələrə bax',
    ctaContact: 'Əlaqə',
    projectsEyebrow: 'Portfolio',
    projectsTitle: 'Hazırladığım tətbiqlər',
    projectsLead: 'Hər layihə üçün çoxdilli izah, xüsusiyyətlər və ekran görüntüləri.',
    featured: 'Seçilmiş',
    project: 'Layihə',
    guestFeatures: 'Qonaq xüsusiyyətləri',
    staffFeatures: 'Personal / admin',
    highlights: 'Məhsul vurğuları',
    features: 'Xüsusiyyətlər',
    aboutEyebrow: 'Haqqımda',
    aboutTitle: 'Məhsul yönümlü inkişaf',
    aboutBio:
      'Mobil və veb tərəfdə TypeScript, React və Expo ilə məhsul yönümlü tətbiqlər hazırlayıram. Təmiz interfeys, performans və istifadəçi təcrübəsi prioritetimdir.',
    skills: 'Bacarıqlar',
    contactEyebrow: 'Əlaqə',
    contactTitle: 'Gəlin birlikdə nəsə edək',
    contactLead: 'E-poçt, WhatsApp və ya Telegram vasitəsilə əlaqə saxlaya bilərsən.',
    sendEmail: 'E-poçt göndər',
    copyAddress: 'Ünvanı kopyala',
    copied: 'Kopyalandı',
    call: 'Zəng et',
    footerRights: 'Bütün hüquqlar qorunur.',
    footerPages: 'GitHub Pages ilə dərc olunub.',
    screenshotOf: 'ekran görüntüsü',
    prev: 'Əvvəlki',
    next: 'Növbəti',
    photoAlt: 'Profil şəkli',
    language: 'Dil',
  },
}

/**
 * Aktif dil için UI metinlerini döndürür.
 */
export function getUi(locale: Locale): UiCopy {
  return uiCopy[locale]
}
