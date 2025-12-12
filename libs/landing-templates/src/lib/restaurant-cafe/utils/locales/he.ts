/**
 * Hebrew (IL) locale strings for Restaurant Cafe template
 * RTL (Right-to-Left) language
 */
export const he = {
  // Default Restaurant Name
  defaultRestaurantName: 'שם המסעדה',

  // Header/Navigation
  header: {
    nav: {
      about: 'אודות',
      menu: 'תפריט',
      contact: 'צור קשר',
    },
    aria: {
      mainNavigation: 'ניווט ראשי',
      returnToTop: 'חזרה למעלה',
    },
  },

  // Hero Section
  hero: {
    subtitle: 'חוויית אוכל משובחת',
    title: 'תהנו מכל רגע',
    description:
      'חוו מצוינות קולינרית באווירה של אלגנטיות נצחית. כאן המסורת פוגשת את החדשנות.',
    cta: 'הזמינו מקום',
  },

  // About Section
  about: {
    title: 'הסיפור שלנו',
    paragraph1:
      'במשך למעלה משני עשורים, אנו יוצרים חוויות אוכל בלתי נשכחות שחוגגות את אומנות הבישול. התשוקה שלנו טמונה במציאת חומרי הגלם המקומיים הטובים ביותר והפיכתם למנות יוצאות דופן המענגות את החושים.',
    paragraph2:
      'בהובלת שפים עטורי פרסים, הצוות הקולינרי שלנו משלב טכניקות מסורתיות וחדשנות מודרנית ליצירת תפריט המכבד גם את המורשת וגם את היצירתיות.',
  },

  // Menu Section
  menu: {
    title: 'המנות המובילות',
    description:
      'מבחר מאורגן של היצירות האהובות ביותר שלנו, כל מנה היא עדות למחויבות שלנו למצוינות.',
    items: [
      {
        icon: '🐟',
        name: 'דג ים צלוי',
        description:
          'דג טרי של היום, מוגש עם ירקות צלויים ורוטב לימון ועשבי תיבול',
        price: '₪180',
      },
      {
        icon: '🍗',
        name: 'חזה אווז מעושן',
        description: 'מבושל לאט עם תפוחי אדמה רוזמרין וירקות עונתיים',
        price: '₪230',
      },
      {
        icon: '🍰',
        name: 'סופלה שוקולד',
        description: 'שוקולד מריר עם גלידת וניל ופירות יער',
        price: '₪65',
      },
    ],
  },

  // Info Section
  info: {
    hoursTitle: 'שעות פתיחה',
    hours: {
      line1: 'יום ראשון - יום חמישי: 17:00 - 22:00',
      line2: 'יום שישי - שבת: 12:00 - 23:00',
      line3: 'סגור בחגים',
    },
    locationTitle: 'מיקום',
    location: {
      line1: 'שדרות הקולינריה 123',
      line2: 'מחוז המרכז',
      line3: 'ניו יורק, NY 10001',
    },
    contactTitle: 'יצירת קשר',
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'reservations@restaurant.com',
    },
  },

  // Reservation Section
  reservation: {
    title: 'הזמינו את השולחן שלכם',
    description:
      'הצטרפו אלינו לחוויית אוכל יוצאת דופן. הזמינו את השולחן שלכם היום וגלו מדוע אנחנו היעד לחיכים הבררנים.',
    button: 'הזמינו עכשיו',
  },

  // Footer
  footer: {
    tagline: 'כאן כל ארוחה היא חגיגה של טעם ומסורת',
    quickLinks: 'קישורים מהירים',
    followUs: 'עקבו אחרינו',
    copyright: 'כל הזכויות שמורות.',
    links: {
      about: 'אודות',
      menu: 'תפריט',
      contact: 'צור קשר',
      instagram: 'אינסטגרם',
      facebook: 'פייסבוק',
      twitter: 'טוויטר',
    },
  },

  // Page Under Construction
  pageUnderConstruction: {
    title: 'בקרוב',
    message: 'דף זה בבנייה. אנא בקרו שוב בקרוב.',
    backButton: 'חזרה לדף הבית',
  },

  // Theme Names
  themes: {
    warm: 'חם',
    elegant: 'אלגנטי',
    modern: 'מודרני',
    rustic: 'כפרי',
    coastal: 'חופי',
  },
} as const;
