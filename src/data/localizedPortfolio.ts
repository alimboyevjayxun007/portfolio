import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  Code,
  Database,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Server,
} from 'lucide-react';

export type Language = 'uz' | 'en';

export const defaultLanguage: Language = 'uz';
export const languageStorageKey = 'jayxun-portfolio-language';
export const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'] as const;

export interface NavItem {
  id: (typeof sectionIds)[number];
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface AboutHighlight {
  title: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  tone: 'primary' | 'green' | 'blue' | 'violet';
}

export interface SkillGroup {
  title: string;
  summary: string;
  skills: string[];
  icon: LucideIcon;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  eyebrow: string;
  name: string;
  role: string;
  deliveryType: string;
  summary: string;
  programScope: string[];
  responsibilities: string[];
  impact: string[];
  stack: string[];
  note?: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ContactLink {
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
  tone: 'primary' | 'green' | 'red' | 'blue';
}

export interface PortfolioContent {
  metadata: {
    title: string;
    description: string;
  };
  ui: {
    languageLabel: string;
    languageNames: Record<Language, string>;
    menuAriaLabel: string;
  };
  navigation: NavItem[];
  hero: {
    availabilityBadge: string;
    subtitle: string;
    role: string;
    summary: string;
    highlights: string[];
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    scrollHintAriaLabel: string;
  };
  about: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    panelTitle: string;
    location: string;
    highlights: AboutHighlight[];
    mission: string[];
  };
  skills: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    groups: SkillGroup[];
    focusAreas: FocusArea[];
  };
  projects: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    labels: {
      deliveryLens: string;
      role: string;
      programScope: string;
      contribution: string;
      impact: string;
      stack: string;
      scopeNote: string;
    };
    cards: Project[];
  };
  experience: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    keyPointsLabel: string;
    items: ExperienceItem[];
  };
  contact: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    workTitle: string;
    workDescription: string;
    infoItems: ContactLink[];
    followLabel: string;
    cardTitle: string;
    successMessage: string;
    validationTitle: string;
    errorTitle: string;
    errorDescription: string;
    fallbackTitle: string;
    fallbackDescription: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      nameRequired: string;
      emailRequired: string;
      messageRequired: string;
      emailInvalid: string;
      submit: string;
      submitting: string;
      genericError: string;
    };
    directLabel: string;
    directLinks: {
      email: string;
      telegram: string;
      call: string;
    };
    locationTitle: string;
    locationDescription: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/alimboyevjayxun007', icon: Github },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alimboyev-jayxun-89259b347/',
    icon: Linkedin,
  },
  { label: 'Telegram', href: 'https://t.me/AlimboyevJayxun', icon: Send },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/alimboyevvv.jayxun/',
    icon: Instagram,
  },
  { label: 'Email', href: 'mailto:alimboyevjayxun007@gmail.com', icon: Mail },
];

const localizedContent: Record<Language, PortfolioContent> = {
  uz: {
    metadata: {
      title: 'Jayxun Alimboyev - Integration va DevOps Engineer',
      description:
        'Jayxun Alimboyev portfoliosi: backend integration, DevOps delivery, payment tizimlari, server sozlash, MikroTik networking va shahar ko‘lamidagi operatsion platformalar.',
    },
    ui: {
      languageLabel: 'Til',
      languageNames: { uz: 'UZ', en: 'EN' },
      menuAriaLabel: "Navigatsiyani ochish yoki yopish",
    },
    navigation: [
      { id: 'home', label: 'Bosh sahifa' },
      { id: 'about', label: 'Men haqimda' },
      { id: 'skills', label: 'Yo‘nalishlar' },
      { id: 'projects', label: 'Loyihalar' },
      { id: 'experience', label: 'Tajriba' },
      { id: 'contact', label: 'Aloqa' },
    ],
    hero: {
      availabilityBadge: 'Integration va infratuzilma loyihalari uchun ochiqman',
      subtitle: "Jayxun Alimboyev Jasurbek o'g'li",
      role: 'Backend Integration & DevOps Engineer',
      summary:
        'Men to‘lov tizimlari, server infratuzilmasi, deployment muhiti va servis integratsiyasi kesishgan joylarda ishlayman. Portfoliomda hozir Smart Market bo‘yicha integration ishlari va Urganchdagi Aqlli Shahar dasturidagi DevOps tajribam markazda turadi.',
      highlights: [
        'To‘lov integratsiyalari',
        'MikroTik networking',
        'Server setup',
        'Shahar ko‘lamidagi operatsiyalar',
      ],
      primaryCta: 'Case studylarni ko‘rish',
      secondaryCta: 'Bog‘lanish',
      imageAlt: 'Jayxun Alimboyev portret rasmi',
      scrollHintAriaLabel: "Men haqimda bo'limiga o'tish",
    },
    about: {
      eyebrow: 'Ishlash uslubim',
      titleLead: 'Men',
      titleAccent: 'haqimda',
      description:
        'Bu portfolio real delivery scope, muhit egaligi va production readiness atrofida qurilgan integration-yo‘naltirilgan profil.',
      panelTitle: 'Portfolio yo‘nalishi',
      location: 'Urganch, O‘zbekiston',
      highlights: [
        {
          title: 'Software Engineering',
          eyebrow: 'TUIT Urganch filiali',
          description:
            'Software engineering bazasi amaliy ishlab turgan tizimlar va delivery muhitlari bilan mustahkamlangan.',
          icon: GraduationCap,
          tone: 'primary',
        },
        {
          title: 'Integration-first yondashuv',
          eyebrow: 'Asosiy kuchli tomon',
          description:
            'Servislar, operatsion jarayonlar, to‘lovlar va infratuzilmani bitta ishlaydigan production tizimga aylantirishga kuchliroqman.',
          icon: Server,
          tone: 'green',
        },
        {
          title: 'Tijoriy va city-scale ishlar',
          eyebrow: 'So‘nggi rollar',
          description:
            'Portfolio endi Smart Market delivery va Urganch Smart City dasturidagi aniq ownership chegaralariga tayangan.',
          icon: Briefcase,
          tone: 'blue',
        },
        {
          title: 'Urganch, O‘zbekiston',
          eyebrow: 'Faoliyat nuqtasi',
          description:
            'Mahalliy va remote jamoalarda infratuzilma, integration, rollout va production support bo‘yicha ishlashga tayyorman.',
          icon: MapPin,
          tone: 'violet',
        },
      ],
      mission: [
        'Men servislar, infratuzilma va operatsiyalar kesishgan joyda ishlayman. Eng katta qiymatim turli texnik qismlarni barqaror production-ready muhitga birlashtirishdir.',
        'Bu odatda integration boundary larni ushlash, serverlarni tayyorlash, delivery jarayonini tartibga solish va rolloutdan keyin ham tizim ishlashini ta’minlashni anglatadi.',
        'Portfolio ham shu yo‘nalishni aks ettiradi: Smart Market to‘lov va tarmoq integratsiyasini, Urganch Smart City esa backendni ortiqcha da’vo qilmasdan DevOps va integration engineering scope ini ko‘rsatadi.',
      ],
    },
    skills: {
      eyebrow: 'Capability map',
      titleLead: 'Texnik',
      titleAccent: 'yo‘nalishlar',
      description:
        'Backend, data, applied AI va infrastructure delivery bir-biridan ajralmagan holatda ishlaydigan stack va workflowlarim shu yerda jamlangan.',
      groups: [
        {
          title: 'Backend va API Engineering',
          summary:
            'Production darajadagi servislar, CRM va CMS workflowlari, queue lar va payment-connected API qatlamlari bilan ishlash uchun ishlatadigan asosiy backend stackim.',
          skills: [
            'Node.js',
            'NestJS',
            'Express.js',
            'FastAPI',
            'Django',
            'REST API',
            'RabbitMQ',
            'CRM systems',
            'CMS systems',
            'Payme integration',
          ],
          icon: Code,
        },
        {
          title: 'Data va Storage Systems',
          summary:
            'Operatsion tizimlar va AI workflowlar uchun strukturalangan va yarim strukturalangan ma’lumotlar bilan ishlash tajribasi.',
          skills: [
            'PostgreSQL',
            'MongoDB',
            'MySQL',
            'Pandas',
            'Polars',
            'NumPy',
            'SciPy',
          ],
          icon: Database,
        },
        {
          title: 'AI, Vision, Camera Streams',
          summary:
            'Maqsadga yo‘naltirilgan modellar yaratish, dataset yig‘ish, kameradan oqim olish va mavjud modellarni aniq vazifaga moslab fine-tune qilish bo‘yicha amaliy ishlar.',
          skills: [
            'Python',
            'PyTorch',
            'OpenCV',
            'FastAPI services',
            'RTSP streams',
            'Real-time video',
            'LoRA',
            'QLoRA',
            'Dataset curation',
            'Model fine-tuning',
          ],
          icon: MessageSquare,
        },
        {
          title: 'Infrastructure, Networking va Delivery',
          summary:
            'Deployment, server, container, networking, VPN va kamera-connected muhitlarni production darajada barqaror ishlatish uchun kerak bo‘ladigan qatlamlar.',
          skills: [
            'Docker',
            'Linux',
            'Nginx',
            'MikroTik',
            'VPN networks',
            'TCP/IP',
            'DHCP',
            'Paynet integration',
            'Monitoring support',
          ],
          icon: Server,
        },
      ],
      focusAreas: [
        {
          title: 'Backend Systems',
          description:
            'Node.js, NestJS, Express.js va queue asosidagi servislarni CRM, CMS va payment integration workflowlari bilan real ish jarayoniga moslab qurish va ulash.',
          icon: Code,
        },
        {
          title: 'Applied AI, Cameras va Data',
          description:
            'Dataset yig‘ish, kamera streamlaridan foydalanish, FastAPI va OpenCV bilan real-time data pipeline qurish hamda PyTorch asosida aniq vazifa uchun model tayyorlash.',
          icon: Database,
        },
        {
          title: 'Infrastructure va Operational Delivery',
          description:
            'Docker, Linux, routing, reverse proxy, MikroTik, VPN, TCP va DHCP kabi tarmoq qatlamlari bilan production muhitni barqaror ushlash.',
          icon: Server,
        },
      ],
    },
    projects: {
      eyebrow: 'Real case studylar',
      titleLead: 'Asosiy',
      titleAccent: 'loyihalar',
      description:
        'Har bir case study delivery turi, rol, scope va real system responsibility atrofida tuzilgan.',
      labels: {
        deliveryLens: 'Delivery turi',
        role: 'Rol',
        programScope: 'Dastur ko‘lami',
        contribution: 'Mening hissam',
        impact: 'Natija',
        stack: 'Stack va vositalar',
        scopeNote: 'Scope izohi',
      },
      cards: [
        {
          eyebrow: 'Xususiy production tizim',
          name: 'Smart Market / Aqlli Bozor',
          role: 'Backend Integration & DevOps Engineer',
          deliveryType: 'Commercial rollout',
          summary:
            'To‘lovlar, tarmoq konfiguratsiyasi va production muhitni tayyorlashga asoslangan real operations-focused portfolio case.',
          programScope: [
            'Payme va Paynet kabi to‘lov tizimlari bilan bog‘liq operatsion flow larni integratsiya qilish.',
            'Servislarni ishga tushirish, release setup va kundalik support uchun production muhitlarni tayyorlash.',
            'Ishlaydigan tizim ichida routing, access policy va barqaror connectivity uchun MikroTik sozlash.',
          ],
          responsibilities: [
            'Biznes flow lar va payment provider jarayonlari orasidagi backend-facing integration point lar ustida ishlash.',
            'Deployment, reverse proxy, access setup va environment stability uchun serverlarni qurish va sozlash.',
            'Tizimni alohida qismlardan amalda ishlaydigan production setup ga olib chiqish uchun infratuzilma va operatsion vazifalarni yopish.',
          ],
          impact: [
            'Integration, payment va network masalalarini bo‘lingan task emas, bitta delivery stream sifatida boshqarishga yordam berdi.',
            'Server setup va service access yo‘llarini standartlashtirib operational readiness ni oshirdi.',
            'To‘lov bilan ulangan market muhiti uchun production-ready operatsion oqimlarni qo‘llab-quvvatladi.',
          ],
          stack: [
            'MikroTik',
            'Linux servers',
            'Nginx',
            'Payment integrations',
            'Payme',
            'Paynet',
            'Deployment setup',
            'Operations support',
          ],
        },
        {
          eyebrow: 'Sotuv va boshqaruv mahsuloti',
          name: 'A1Sale / CMS + Payme',
          role: 'Node.js & NestJS Backend Engineer',
          deliveryType: 'Product delivery',
          summary:
            'A1Sale tizimi uchun CMS, CRM va Payme integratsiyasini ishlab chiqishga qaratilgan backend portfolio case.',
          programScope: [
            'Node.js va NestJS asosida boshqaruv, kontent va savdo jarayonlari uchun CMS qatlamini ishlab chiqish.',
            'Savdo va mijozlar bilan ishlash oqimlari uchun CRM workflowlarini backend darajasida qo‘llab-quvvatlash.',
            'Payme orqali to‘lov oqimlarini tizim ichidagi buyurtma va boshqaruv logikasi bilan bog‘lash.',
          ],
          responsibilities: [
            'NestJS va Node.js asosida modulli backend structure, servislar va API qatlamlarini yozish.',
            'CMS uchun boshqaruv paneli ehtiyojlariga mos business logic va data flowlarni ishlab chiqish.',
            'Payme integratsiyasi hamda CRM va CMS modullari orasidagi ma’lumot almashinuvini barqaror qilish.',
          ],
          impact: [
            'A1Sale ichida boshqaruv, savdo va to‘lov bilan bog‘liq oqimlarni bitta backend architecture ostida ishlashiga yordam berdi.',
            'CMS va CRM uchun takrorlanadigan operatsiyalarni aniq servis qatlamlariga ajratib mahsulotni boshqarishni soddalashtirdi.',
            'Payme bilan ishlovchi tijoriy oqimni production foydalanishga yaqinlashtirdi.',
          ],
          stack: [
            'Node.js',
            'NestJS',
            'CMS',
            'CRM',
            'Payme',
            'REST API',
            'Backend architecture',
          ],
        },
        {
          eyebrow: 'Applied AI va vision pipeline',
          name: 'AIKengash.uz / Real-time Camera AI',
          role: 'Python & FastAPI AI Engineer',
          deliveryType: 'Applied AI delivery',
          summary:
            'Python va FastAPI asosida kamera oqimlari, real-time data va fine-tuned AI modellari bilan ishlangan applied AI case.',
          programScope: [
            'VPN orqali ulanadigan kamera va edge qurilmalar bilan ishlash, streamlarni olish va nazorat qilish.',
            'RTSP, TCP va DHCP bilan bog‘liq tarmoq sharoitlarida kameradan tasvir olib, real-time data oqimini AI pipelinega uzatish.',
            'Dataset yig‘ish, tayyorlash va aniq vazifa uchun modelni fine-tune qilish orqali task-specific AI workflow yaratish.',
          ],
          responsibilities: [
            'Python va FastAPI asosida camera stream ingestion, servis qatlamlari va real-time frame processing pipeline larini qurish.',
            'OpenCV yordamida kameradan tasvir olish, RTSP streamlar bilan ishlash va oqimdan foydali data ajratish.',
            'VPN tarmoqlarda kamera connectivity, DHCP va TCP bilan bog‘liq tarmoq holatlari hamda servis integratsiyasini qo‘llab-quvvatlash.',
          ],
          impact: [
            'Kamera, tarmoq va AI qatlamlarini birlashtirib real-time analiz uchun ishlaydigan workflow yaratishga yordam berdi.',
            'Dataset yig‘ish va fine-tuning orqali aynan vazifaga moslashtirilgan AI model tayyorlashni tezlashtirdi.',
            'Real-time video data ni amaliy kuzatuv va tahlil pipeline lariga ulash imkonini berdi.',
          ],
          stack: [
            'Python',
            'FastAPI',
            'OpenCV',
            'RTSP',
            'TCP/IP',
            'DHCP',
            'VPN',
            'Real-time video',
            'PyTorch',
            'Fine-tuning',
          ],
        },
        {
          eyebrow: 'Shahar ko‘lamidagi public dastur',
          name: 'Urganch Smart City / Aqlli Shahar',
          role: 'Full DevOps & Integration Engineer',
          deliveryType: 'Public infrastructure delivery',
          summary:
            'Urganchdagi city-scale digital operations dasturi bo‘lib, mening hissam DevOps, integration engineering va applied AI workflowlariga qaratilgan; core backend feature ownership da’vo qilinmaydi.',
          programScope: [
            'Ochiq manbalarda platforma kommunal xizmatlar, transport, sanitariya va murojaatlar monitoringi bilan bog‘liq tizim sifatida tasvirlanadi.',
            'Public scope tavsiflarida Urganch muhitida 50+ mahalla va 1000+ sensor bilan ishlash tilga olinadi.',
            'Shuningdek maktab, bog‘cha va shifoxonalardagi harorat monitoringi hamda kommunal va sug‘orish oqimlari haqida ham qaydlar bor.',
          ],
          responsibilities: [
            'Dastur muhitida infratuzilma tayyorgarligi, deployment, service integration va operatsion uzluksizlik ustida ishlash.',
            'Field system lar, dashboard lar va platformani yuritishda ishlatiladigan muhitlar orasidagi connectivity ni qo‘llab-quvvatlash.',
            'Aqlli Shahar tizimida ishlatiladigan AI model uchun dataset yig‘ish, tayyorlash va fine-tuning jarayonlarida ishlash.',
            'GPS texnologiyalaridan keladigan ma’lumotlar asosida marshrutlarni tahlil qiluvchi AI workflow va analiz qatlamlarini qo‘llab-quvvatlash.',
          ],
          impact: [
            'Bir nechta operatsion domenlarni qamrab oladigan city-scale delivery muhitini qo‘llab-quvvatlashga hissa qo‘shildi.',
            'Ko‘p servisli urban platforma bo‘ylab environment stability, integration readiness va AI workflow tayyorgarligini mustahkamlashga yordam berdi.',
            'GPS va sensor ma’lumotlarini route analysis uchun foydali inputga aylantirishda applied AI yondashuvlarini ishlatishga hissa qo‘shildi.',
            'Project scope ni DevOps, integration va applied AI operations bilan aniq ushlab, uni core backend ownership bilan aralashtirmadi.',
          ],
          stack: [
            'DevOps',
            'Integration engineering',
            'Infrastructure operations',
            'Deployment workflows',
            'Monitoring support',
            'Networking',
            'Python',
            'PyTorch',
            'Dataset preparation',
            'GPS data analysis',
          ],
          note: 'Bu case study DevOps, integration va applied AI operations scope ida yozilgan; core backend development bu yerda da’vo qilinmaydi.',
        },
      ],
    },
    experience: {
      eyebrow: 'Role history',
      titleLead: 'Professional',
      titleAccent: 'tajriba',
      description:
        'Tajriba bo‘limi umumiy timeline emas, balki real delivery rollar va responsibility boundary lar asosida yozildi.',
      keyPointsLabel: 'Asosiy nuqtalar',
      items: [
        {
          title: 'Full DevOps & Integration Engineer',
          organization: 'Urganch Smart City Program',
          period: 'City-scale delivery',
          description:
            'Shahar ko‘lamidagi operatsion platformada infratuzilma setup, service integration, deployment readiness, AI workflow tayyorlash va barqaror operating environment asosiy qiymat bo‘lgan rol.',
          achievements: [
            'Ko‘p servisli public-sector digital platformani qo‘llab-quvvatlash.',
            'Aqlli Shahar tizimida ishlatiladigan AI model uchun dataset yig‘ish va fine-tuning jarayonlarida ishlash.',
            'GPS ma’lumotlari orqali marshrutlarni analiz qiluvchi AI model va tahlil oqimlarini qo‘llab-quvvatlash.',
            'Backend ownership ni ortiqcha da’vo qilmasdan DevOps, integration va applied AI vazifalarini bajarish.',
          ],
        },
        {
          title: 'Backend Integration & DevOps Engineer',
          organization: 'Smart Market / Aqlli Bozor',
          period: 'Commercial rollout',
          description:
            'Payment-connected va network-aware smart market delivery da server provisioning, MikroTik sozlash va production integration task larini olib borgan rol.',
          achievements: [
            'Payme va Paynet bilan bog‘liq operatsion oqimlarni integratsiya qilish.',
            'Barqaror production ishlashi uchun server va network access ni sozlash.',
            'Kundalik ishlaydigan infratuzilma va integration support ni yetkazib berish.',
          ],
        },
        {
          title: 'Node.js & NestJS Backend Engineer',
          organization: 'A1Sale',
          period: 'CMS + payment delivery',
          description:
            'A1Sale mahsuloti uchun CMS, CRM va Payme integratsiyasini ishlab chiqishga qaratilgan backend rol bo‘lib, mahsulotning ichki boshqaruv va tijoriy oqimlarini ulashga fokus qilingan.',
          achievements: [
            'Node.js va NestJS bilan CMS uchun modulli backend servislar va API qatlamlarini yozish.',
            'CRM workflowlari va ichki boshqaruv jarayonlari uchun business logic qatlamlarini ishlab chiqish.',
            'Payme integratsiyasini mahsulot ichidagi buyurtma va to‘lov oqimlari bilan bog‘lash.',
          ],
        },
        {
          title: 'Backend, Data & Applied AI Engineering',
          organization: 'AIKengash.uz va applied AI delivery',
          period: 'Backend + AI systems',
          description:
            'Bu rol backend fundamentaldan ancha kengroq bo‘lib, Node.js ekotizimi, Python va FastAPI asosidagi AI workflowlar, kamera streamlari, dataset tayyorlash va katta data bilan ishlashni birlashtirgan amaliy tajribani ifodalaydi.',
          achievements: [
            'Node.js, NestJS, Express.js, FastAPI, Django, REST API, PostgreSQL, MongoDB, MySQL, RabbitMQ, Docker va Linux bilan ishlash.',
            'Kameralar bilan ishlash, RTSP stream olish, TCP va DHCP tarmoqlari bilan ishlash hamda VPN orqali ulanadigan muhitlarda real-time data oqimini qo‘llash.',
            'Python, FastAPI va OpenCV yordamida kameradan tasvir olib, real-time frame va data bilan ishlaydigan servis qatlamlarini qurish.',
            'Python, PyTorch, OpenCV, LoRA va QLoRA yordamida aniq vazifa uchun AI modellarni fine-tune qilish va moslashtirish.',
            'AIKengash.uz doirasida dataset yig‘ish, katta data bilan ishlash va undan optimal foydalanish bo‘yicha amaliy tajriba orttirish.',
            'NumPy, SciPy, Pandas va Polars orqali ma’lumotlarni tozalash, transform qilish va model tayyorlash pipeline larini qo‘llash.',
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'Aloqa',
      titleLead: 'Bog‘lanish',
      titleAccent: 'uchun',
      description:
        'Agar sizga integration, rollout yoki production environment setup bo‘yicha yordam kerak bo‘lsa, eng tez yo‘l shu.',
      workTitle: 'Yordam bera oladigan ishlarim',
      workDescription:
        'Meni tizimlar, infratuzilma va operatsiyalar kesishadigan loyihalar qiziqtiradi. Bunga payment-connected platformalar, rollout-heavy mahsulotlar va reliability muhim bo‘lgan integration ishlari kiradi.',
      infoItems: [
        {
          title: 'Joylashuv',
          value: 'Urganch, O‘zbekiston',
          href: '',
          icon: MapPin,
          tone: 'primary',
        },
        {
          title: 'Telefon',
          value: '+998 94 199 26 04',
          href: 'tel:+998941992604',
          icon: Phone,
          tone: 'green',
        },
        {
          title: 'Email',
          value: 'alimboyevjayxun007@gmail.com',
          href: 'mailto:alimboyevjayxun007@gmail.com',
          icon: Mail,
          tone: 'red',
        },
        {
          title: 'Telegram',
          value: '@AlimboyevJayxun',
          href: 'https://t.me/AlimboyevJayxun',
          icon: Send,
          tone: 'blue',
        },
      ],
      followLabel: 'Meni kuzatish',
      cardTitle: 'Tezkor xabar',
      successMessage: 'Xabaringiz muvaffaqiyatli yuborildi. Tez orada javob beraman.',
      validationTitle: 'Formani to‘g‘ri to‘ldiring.',
      errorTitle: 'Xabar yuborilmadi.',
      errorDescription: 'Iltimos, email yoki Telegram orqali to‘g‘ridan-to‘g‘ri bog‘laning.',
      fallbackTitle: 'Email ilovasi orqali davom eting.',
      fallbackDescription:
        'Saytdan to‘g‘ridan-to‘g‘ri yuborish ishlamadi. Xabaringiz tayyor holda email ilovasiga uzatildi.',
      form: {
        nameLabel: 'Ism',
        emailLabel: 'Email',
        messageLabel: 'Xabar',
        namePlaceholder: 'Ismingiz',
        emailPlaceholder: 'Email manzilingiz',
        messagePlaceholder: 'Loyiha yoki integration ehtiyoji haqida yozing',
        nameRequired: 'Iltimos, ismingizni kiriting.',
        emailRequired: 'Iltimos, email manzilingizni kiriting.',
        messageRequired: 'Iltimos, xabar kiriting.',
        emailInvalid: 'Iltimos, email manzilini to‘g‘ri kiriting.',
        submit: 'Xabar yuborish',
        submitting: 'Yuborilmoqda...',
        genericError: 'Xabar yuborishda xatolik yuz berdi. Keyinroq qayta urinib ko‘ring.',
      },
      directLabel: 'Yoki to‘g‘ridan-to‘g‘ri bog‘laning:',
      directLinks: {
        email: 'Email',
        telegram: 'Telegram',
        call: 'Qo‘ng‘iroq',
      },
      locationTitle: 'Urganchda faoliyat yuritaman',
      locationDescription:
        'Mahalliy deployment ishlari, remote integration support va production environment coordination uchun ochiqman.',
    },
    footer: {
      tagline: 'Integration & DevOps Engineer | To‘lovlar, infratuzilma va city-scale delivery',
      rights: 'Barcha huquqlar himoyalangan.',
    },
  },
  en: {
    metadata: {
      title: 'Jayxun Alimboyev - Integration & DevOps Engineer',
      description:
        'Professional portfolio of Jayxun Alimboyev, focused on backend integration, DevOps delivery, payment systems, server setup, MikroTik networking, and city-scale operational platforms.',
    },
    ui: {
      languageLabel: 'Language',
      languageNames: { uz: 'UZ', en: 'EN' },
      menuAriaLabel: 'Open or close navigation',
    },
    navigation: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Focus' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      availabilityBadge: 'Available for integration and infrastructure projects',
      subtitle: "Jayxun Alimboyev Jasurbek o'g'li",
      role: 'Backend Integration & DevOps Engineer',
      summary:
        'I work at the intersection of payment systems, server infrastructure, deployment environments, and service integration. This portfolio now centers on Smart Market integration delivery and my DevOps role in the Urgench Smart City program.',
      highlights: [
        'Payment integrations',
        'MikroTik networking',
        'Server setup',
        'City-scale operations',
      ],
      primaryCta: 'View Case Studies',
      secondaryCta: 'Get In Touch',
      imageAlt: 'Portrait of Jayxun Alimboyev',
      scrollHintAriaLabel: 'Scroll to about section',
    },
    about: {
      eyebrow: 'How I Work',
      titleLead: 'About',
      titleAccent: 'Me',
      description:
        'An integration-focused portfolio built around real delivery scope, environment ownership, and production readiness.',
      panelTitle: 'Portfolio Direction',
      location: 'Urgench, Uzbekistan',
      highlights: [
        {
          title: 'Software Engineering',
          eyebrow: 'TUIT Urgench Branch',
          description:
            'Academic foundation in software engineering with a practical focus on production systems and delivery environments.',
          icon: GraduationCap,
          tone: 'primary',
        },
        {
          title: 'Integration-First Delivery',
          eyebrow: 'Current focus',
          description:
            'Strongest on connecting services, operational workflows, payments, and infrastructure into one working production setup.',
          icon: Server,
          tone: 'green',
        },
        {
          title: 'Commercial and City-Scale Work',
          eyebrow: 'Recent roles',
          description:
            'Portfolio now centers on Smart Market delivery and the Urgench Smart City program with clear ownership boundaries.',
          icon: Briefcase,
          tone: 'blue',
        },
        {
          title: 'Urgench, Uzbekistan',
          eyebrow: 'Base of operation',
          description:
            'Available for infrastructure, integration, rollout, and production support engagements across local and remote teams.',
          icon: MapPin,
          tone: 'violet',
        },
      ],
      mission: [
        'I work where services, infrastructure, and operations meet. My strongest value is turning disconnected technical pieces into a stable production-ready environment.',
        'That usually means owning integration boundaries, preparing servers, tightening delivery workflows, and making sure real systems keep working after rollout.',
        'The portfolio now reflects that direction directly: Smart Market highlights payment and network integration, while Urgench Smart City is framed as DevOps and integration engineering without overstating backend ownership.',
      ],
    },
    skills: {
      eyebrow: 'Capability Map',
      titleLead: 'Technical',
      titleAccent: 'Focus',
      description:
        'This stack combines backend delivery, data work, applied AI model adaptation, and production infrastructure instead of treating them as separate tracks.',
      groups: [
        {
          title: 'Backend and API Engineering',
          summary:
            'Core backend technologies I use to build service layers, CRM and CMS workflows, queues, and payment-connected production APIs.',
          skills: [
            'Node.js',
            'NestJS',
            'Express.js',
            'FastAPI',
            'Django',
            'REST API',
            'RabbitMQ',
            'CRM systems',
            'CMS systems',
            'Payme integration',
          ],
          icon: Code,
        },
        {
          title: 'Data and Storage Systems',
          summary:
            'Practical work with structured and semi-structured data across backend systems and AI-oriented workflows.',
          skills: [
            'PostgreSQL',
            'MongoDB',
            'MySQL',
            'Pandas',
            'Polars',
            'NumPy',
            'SciPy',
          ],
          icon: Database,
        },
        {
          title: 'AI, Vision and Camera Streams',
          summary:
            'Building task-specific models through dataset curation, camera-stream ingestion, and applied AI workflows.',
          skills: [
            'Python',
            'PyTorch',
            'OpenCV',
            'FastAPI services',
            'RTSP streams',
            'Real-time video',
            'LoRA',
            'QLoRA',
            'Dataset curation',
            'Model fine-tuning',
          ],
          icon: MessageSquare,
        },
        {
          title: 'Infrastructure, Networking and Delivery',
          summary:
            'The infrastructure and production layers I use to keep delivery stable across VPN-connected, camera-connected, and payment-connected environments.',
          skills: [
            'Docker',
            'Linux',
            'Nginx',
            'MikroTik',
            'VPN networks',
            'TCP/IP',
            'DHCP',
            'Paynet integration',
            'Monitoring support',
          ],
          icon: Server,
        },
      ],
      focusAreas: [
        {
          title: 'Backend Systems',
          description:
            'Building and connecting Node.js, NestJS, Express.js, and queue-based services for CRM, CMS, and payment integration workflows.',
          icon: Code,
        },
        {
          title: 'Applied AI, Cameras and Data',
          description:
            'Collecting datasets, using camera streams, building FastAPI and OpenCV real-time pipelines, and fine-tuning models with PyTorch for concrete tasks.',
          icon: Database,
        },
        {
          title: 'Infrastructure and Operational Delivery',
          description:
            'Running Docker, Linux, routing, reverse proxy, MikroTik, VPN, TCP, and DHCP layers around production systems.',
          icon: Server,
        },
      ],
    },
    projects: {
      eyebrow: 'Real Case Studies',
      titleLead: 'Featured',
      titleAccent: 'Projects',
      description:
        'Each case study is structured around delivery type, role, scope, and real system responsibilities instead of generic claims.',
      labels: {
        deliveryLens: 'Delivery lens',
        role: 'Role',
        programScope: 'Program Scope',
        contribution: 'My Contribution',
        impact: 'Delivery Impact',
        stack: 'Stack and Tools',
        scopeNote: 'Scope note',
      },
      cards: [
        {
          eyebrow: 'Private production system',
          name: 'Smart Market / Aqlli Bozor',
          role: 'Backend Integration & DevOps Engineer',
          deliveryType: 'Commercial rollout',
          summary:
            'A real operations-focused portfolio case built around payments, network configuration, and production environment readiness for a smart market setup.',
          programScope: [
            'Integrated operational flows around payment systems such as Payme and Paynet.',
            'Prepared production environments for service delivery, release setup, and day-to-day maintenance.',
            'Configured MikroTik networking for routing, access policies, and stable connectivity inside the working environment.',
          ],
          responsibilities: [
            'Worked on backend-facing integration points between business flows and payment provider processes.',
            'Built and configured servers for deployment, reverse proxy, access setup, and environment stability.',
            'Handled infrastructure and operational tasks needed to move the system from separate parts into a usable production setup.',
          ],
          impact: [
            'Turned integration, payments, and network concerns into one delivery stream instead of scattered tasks.',
            'Improved operational readiness by standardizing server setup and service access paths.',
            'Supported a production-ready market environment with payment-connected operational flows.',
          ],
          stack: [
            'MikroTik',
            'Linux servers',
            'Nginx',
            'Payment integrations',
            'Payme',
            'Paynet',
            'Deployment setup',
            'Operations support',
          ],
        },
        {
          eyebrow: 'Sales and operations product',
          name: 'A1Sale / CMS + Payme',
          role: 'Node.js & NestJS Backend Engineer',
          deliveryType: 'Product delivery',
          summary:
            'A backend product case focused on building CMS, CRM, and Payme integration flows for the A1Sale system.',
          programScope: [
            'Built a CMS layer for internal management, content operations, and sales-related flows with Node.js and NestJS.',
            'Supported CRM workflows on the backend side for customer and sales operations.',
            'Connected Payme payment flows to the system order and management logic.',
          ],
          responsibilities: [
            'Implemented modular backend services, APIs, and business logic with NestJS and Node.js.',
            'Developed data flow and service logic for CMS operations and internal management workflows.',
            'Integrated Payme and stabilized data exchange between CRM and CMS modules.',
          ],
          impact: [
            'Helped unify management, sales, and payment-related flows under one backend architecture in A1Sale.',
            'Improved product maintainability by separating CMS and CRM responsibilities into clearer backend services.',
            'Moved a Payme-connected commercial workflow closer to production readiness.',
          ],
          stack: [
            'Node.js',
            'NestJS',
            'CMS',
            'CRM',
            'Payme',
            'REST API',
            'Backend architecture',
          ],
        },
        {
          eyebrow: 'Applied AI and vision pipeline',
          name: 'AIKengash.uz / Real-time Camera AI',
          role: 'Python & FastAPI AI Engineer',
          deliveryType: 'Applied AI delivery',
          summary:
            'An applied AI case built around Python, FastAPI, camera streams, real-time data, and fine-tuned models for task-specific workflows.',
          programScope: [
            'Worked with VPN-connected cameras and edge environments to receive and manage live streams.',
            'Used RTSP, TCP, and DHCP-related network conditions to ingest camera frames and feed real-time data into AI pipelines.',
            'Collected and prepared datasets, then fine-tuned models for clearly defined operational tasks.',
          ],
          responsibilities: [
            'Built camera-stream ingestion, service layers, and real-time frame processing pipelines with Python and FastAPI.',
            'Used OpenCV to receive video from cameras, work with RTSP streams, and extract usable data from live feeds.',
            'Supported VPN-based camera connectivity, DHCP and TCP network conditions, and service integration around the stream pipeline.',
          ],
          impact: [
            'Helped combine cameras, networking, and AI layers into a working real-time analysis workflow.',
            'Accelerated task-specific model delivery through dataset collection and targeted fine-tuning.',
            'Enabled live video data to be used inside practical monitoring and analysis pipelines.',
          ],
          stack: [
            'Python',
            'FastAPI',
            'OpenCV',
            'RTSP',
            'TCP/IP',
            'DHCP',
            'VPN',
            'Real-time video',
            'PyTorch',
            'Fine-tuning',
          ],
        },
        {
          eyebrow: 'City-scale public program',
          name: 'Urganch Smart City / Aqlli Shahar',
          role: 'Full DevOps & Integration Engineer',
          deliveryType: 'Public infrastructure delivery',
          summary:
            'A city-scale digital operations program in Urgench where my contribution focused on DevOps, integration engineering, and applied AI workflows, with no core backend feature ownership claimed.',
          programScope: [
            'Public program materials describe the platform as covering utilities, transport, sanitation, and citizen service monitoring.',
            'Publicly available scope information cites 50+ mahallas and 1000+ connected sensors in the Urgench operating environment.',
            'Public descriptions also mention temperature monitoring for schools, kindergartens, and hospitals alongside communal and irrigation data flows.',
          ],
          responsibilities: [
            'Worked on infrastructure readiness, deployments, service integration, and operational continuity for the program environment.',
            'Supported connectivity between field systems, dashboards, and the environments used to operate the platform.',
            'Collected and prepared datasets used to fine-tune AI models inside Smart City workflows.',
            'Worked with GPS-derived data to support route analysis models and operational AI-driven analysis.',
          ],
          impact: [
            'Supported a city-scale delivery environment across multiple operational domains.',
            'Contributed to environment stability, integration readiness, and AI workflow preparation across a multi-service urban platform.',
            'Helped turn sensor and GPS data into useful inputs for route-oriented analysis models.',
            'Kept project scope aligned to DevOps, integration, and applied AI operations without mixing it with core backend ownership.',
          ],
          stack: [
            'DevOps',
            'Integration engineering',
            'Infrastructure operations',
            'Deployment workflows',
            'Monitoring support',
            'Networking',
            'Python',
            'PyTorch',
            'Dataset preparation',
            'GPS data analysis',
          ],
          note: 'This case study is intentionally framed around DevOps, integration, and applied AI operations; core backend development is not claimed here.',
        },
      ],
    },
    experience: {
      eyebrow: 'Role History',
      titleLead: 'Professional',
      titleAccent: 'Experience',
      description:
        'The experience section now reflects delivery roles and responsibility boundaries instead of generic timeline claims.',
      keyPointsLabel: 'Key points',
      items: [
        {
          title: 'Full DevOps & Integration Engineer',
          organization: 'Urganch Smart City Program',
          period: 'City-scale delivery',
          description:
            'Worked on a city-scale operational platform where the main value came from infrastructure setup, service integration, deployment readiness, AI workflow preparation, and stable operating environments.',
          achievements: [
            'Supported a public-sector digital platform with multi-service operational scope.',
            'Collected datasets and contributed to fine-tuning AI models used in the Smart City environment.',
            'Worked with GPS-based data for route analysis workflows and operational AI-oriented analysis.',
            'Handled DevOps, integration, and applied AI responsibilities without overstating backend ownership.',
          ],
        },
        {
          title: 'Backend Integration & DevOps Engineer',
          organization: 'Smart Market / Aqlli Bozor',
          period: 'Commercial rollout',
          description:
            'Worked on payment-connected and network-aware delivery for a smart market setup, including server provisioning, MikroTik configuration, and production integration tasks.',
          achievements: [
            'Integrated operational flows related to Payme and Paynet.',
            'Configured servers and network access for stable production usage.',
            'Delivered stable infrastructure and integration support for day-to-day operations.',
          ],
        },
        {
          title: 'Node.js & NestJS Backend Engineer',
          organization: 'A1Sale',
          period: 'CMS + payment delivery',
          description:
            'A backend role focused on building CMS, CRM, and Payme integration workflows for the A1Sale product, connecting internal management and commercial operations.',
          achievements: [
            'Built modular backend services and APIs for CMS workflows with Node.js and NestJS.',
            'Implemented backend business logic for CRM-oriented sales and management processes.',
            'Integrated Payme into the order and payment workflow inside the product.',
          ],
        },
        {
          title: 'Backend, Data and Applied AI Engineering',
          organization: 'AIKengash.uz and applied AI delivery',
          period: 'Backend + AI systems',
          description:
            'This work went far beyond simple backend foundations and grew into a practical stack covering Node.js services, Python and FastAPI AI workflows, camera streams, dataset preparation, and large-scale data handling.',
          achievements: [
            'Worked with Node.js, NestJS, Express.js, FastAPI, Django, REST APIs, PostgreSQL, MongoDB, MySQL, RabbitMQ, Docker, and Linux.',
            'Worked with cameras, RTSP stream ingestion, TCP and DHCP networking, and VPN-connected environments for real-time data usage.',
            'Built Python, FastAPI, and OpenCV service layers that received images from cameras and processed live frames in real time.',
            'Used Python, PyTorch, OpenCV, LoRA, and QLoRA to fine-tune and adapt task-specific AI models.',
            'Built hands-on experience in AIKengash.uz with dataset collection, large-data handling, and efficient data use for model training.',
            'Used NumPy, SciPy, Pandas, and Polars for cleaning, transforming, and preparing data pipelines for targeted AI tasks.',
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      titleLead: "Let's",
      titleAccent: 'Connect',
      description:
        'If you need help with integration, infrastructure rollout, or production environment setup, this is the fastest way to reach me.',
      workTitle: 'Work I can help with',
      workDescription:
        "I'm interested in projects that need strong delivery discipline across systems, infrastructure, and operations. That includes payment-connected platforms, rollout-heavy products, and integration work where reliability matters.",
      infoItems: [
        {
          title: 'Location',
          value: 'Urgench, Uzbekistan',
          href: '',
          icon: MapPin,
          tone: 'primary',
        },
        {
          title: 'Phone',
          value: '+998 94 199 26 04',
          href: 'tel:+998941992604',
          icon: Phone,
          tone: 'green',
        },
        {
          title: 'Email',
          value: 'alimboyevjayxun007@gmail.com',
          href: 'mailto:alimboyevjayxun007@gmail.com',
          icon: Mail,
          tone: 'red',
        },
        {
          title: 'Telegram',
          value: '@AlimboyevJayxun',
          href: 'https://t.me/AlimboyevJayxun',
          icon: Send,
          tone: 'blue',
        },
      ],
      followLabel: 'Follow me',
      cardTitle: 'Quick message',
      successMessage: "Your message was sent successfully. I'll get back to you soon.",
      validationTitle: 'Please complete the form correctly.',
      errorTitle: 'Message delivery failed.',
      errorDescription: 'Please reach out directly by email or Telegram.',
      fallbackTitle: 'Continue in your email app.',
      fallbackDescription:
        "Direct sending from the site failed, so your message was passed to your mail app as a fallback.",
      form: {
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'Your email address',
        messagePlaceholder: 'Tell me about your project or integration needs',
        nameRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email address.',
        messageRequired: 'Please enter a message.',
        emailInvalid: 'Please enter a valid email address.',
        submit: 'Send Message',
        submitting: 'Sending...',
        genericError: 'Something went wrong while sending your message. Please try again.',
      },
      directLabel: 'Or contact me directly:',
      directLinks: {
        email: 'Email',
        telegram: 'Telegram',
        call: 'Call',
      },
      locationTitle: 'Based in Urgench',
      locationDescription:
        'Available for local deployment work, remote integration support, and production environment coordination.',
    },
    footer: {
      tagline: 'Integration & DevOps Engineer | Payments, infrastructure, and city-scale delivery',
      rights: 'All rights reserved.',
    },
  },
};

export function getPortfolioData(language: Language): PortfolioContent {
  return localizedContent[language];
}
