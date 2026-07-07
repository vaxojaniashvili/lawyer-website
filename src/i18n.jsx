import { createContext, useContext, useEffect, useState } from 'react'

// Georgian is the default language; English is the translation.
export const CONTACT = {
  phoneDisplay: '555 41 96 88',
  phoneRaw: '+995555419688',
  email: 'tamta.janiashvili.law@gmail.com',
}

export const CONTENT = {
  ka: {
    dir: 'ka',
    langLabel: 'EN',
    meta: {
      title: 'თამთა ჯანიაშვილი — სისხლის სამართლის ადვოკატი თბილისში',
      description:
        'თამთა ჯანიაშვილი — გამოცდილი სისხლის სამართლის ადვოკატი თბილისში. ბევრი მოგებული საქმე. კარგი ადვოკატი, რომელსაც ენდობა.',
    },
    name: 'თამთა ჯანიაშვილი',
    role: 'სისხლის სამართლის ადვოკატი',
    city: 'თბილისი',
    nav: [
      { href: '#about', label: 'ჩემ შესახებ' },
      { href: '#practice', label: 'მომსახურება' },
      { href: '#process', label: 'როგორ ვმუშაობ' },
      { href: '#testimonials', label: 'შეფასებები' },
      { href: '#contact', label: 'კონტაქტი' },
    ],
    cta: { call: 'დარეკვა', consult: 'უფასო კონსულტაცია', book: 'დანიშნეთ შეხვედრა' },
    hero: {
      badge: 'თბილისში დაფუძნებული ადვოკატი',
      titleTop: 'თქვენი უფლებების',
      titleAccent: 'მტკიცე დაცვა',
      titleBottom: 'სისხლის სამართალში',
      subtitle:
        'გამოცდილი სისხლის სამართლის ადვოკატი თბილისში. ვიცავ თქვენს ინტერესებს გამოძიების პირველივე წუთიდან სასამართლოს საბოლოო გადაწყვეტილებამდე.',
      trust: 'ნდობა, კონფიდენციალურობა და შედეგზე ორიენტირებული მუშაობა',
    },
    about: {
      eyebrow: 'ჩემ შესახებ',
      title: 'ადვოკატი, რომელიც ბოლომდე იბრძვის',
      p1: 'მე ვარ თამთა ჯანიაშვილი — სისხლის სამართლის ადვოკატი თბილისში. წლების განმავლობაში ვიცავ ადამიანების უფლებებსა და თავისუფლებას საქმის ყველაზე რთულ ეტაპებზეც კი.',
      p2: 'თითოეულ საქმეს ვუდგები ინდივიდუალურად, სიღრმისეული ანალიზითა და მკაფიო სტრატეგიით. ჩემთვის მთავარია არა უბრალოდ წარმომადგენლობა, არამედ თქვენი ინტერესების მაქსიმალური დაცვა.',
      points: [
        'პირადი, კონფიდენციალური მიდგომა',
        'ხელმისაწვდომობა 24/7 გადაუდებელ შემთხვევებში',
        'გამჭვირვალე კომუნიკაცია ყოველ ეტაპზე',
      ],
    },
    stats: [
      { value: 12, suffix: '+', label: 'წლიანი გამოცდილება' },
      { value: 350, suffix: '+', label: 'წარმოებული საქმე' },
      { value: 90, suffix: '%', label: 'დადებითი შედეგი' },
      { value: 24, suffix: '/7', label: 'ხელმისაწვდომობა' },
    ],
    practice: {
      eyebrow: 'მომსახურება',
      title: 'სფეროები, სადაც გიცავთ',
      subtitle: 'სისხლის სამართლის ფართო პრაქტიკა — გამოცდილება, რომელიც შედეგს იძლევა.',
      items: [
        { icon: 'shield', title: 'დაცვა გამოძიების ეტაპზე', text: 'პროფესიული დაცვა დაკავების, დაკითხვისა და გამოძიების ყველა სტადიაზე — თქვენი უფლებების სრული დაცვა.' },
        { icon: 'gavel', title: 'სასამართლო წარმოება', text: 'ინტერესების წარმომადგენლობა პირველი, სააპელაციო და საკასაციო ინსტანციის სასამართლოებში.' },
        { icon: 'pills', title: 'ნარკოტიკული დანაშაული', text: 'ნარკოტიკებთან დაკავშირებული საქმეების დაცვა — რთული კატეგორია, სადაც გამოცდილება გადამწყვეტია.' },
        { icon: 'briefcase', title: 'ეკონომიკური დანაშაული', text: 'თეთრსაყელოიანი და ეკონომიკური დანაშაულის საქმეები, სამეწარმეო და საგადასახადო დავები.' },
        { icon: 'fist', title: 'ძალადობრივი დანაშაული', text: 'ჯანმრთელობის დაზიანება, ოჯახში ძალადობა და პირის წინააღმდეგ მიმართული სხვა დანაშაულები.' },
        { icon: 'scale', title: 'ქონებრივი დანაშაული', text: 'ქურდობა, თაღლითობა, ძარცვა და ყაჩაღობა — მტკიცებულებების ანალიზი და ეფექტური სტრატეგია.' },
      ],
    },
    process: {
      eyebrow: 'როგორ ვმუშაობ',
      title: 'გზა პირველი ზარიდან შედეგამდე',
      items: [
        { step: '01', title: 'უფასო კონსულტაცია', text: 'პირველი შეხვედრა, სადაც დეტალურად განვიხილავთ თქვენს საქმეს და შესაძლო გზებს.' },
        { step: '02', title: 'საქმის ანალიზი', text: 'მტკიცებულებების, დოკუმენტაციისა და გარემოებების სიღრმისეული შესწავლა.' },
        { step: '03', title: 'დაცვის სტრატეგია', text: 'ინდივიდუალური სტრატეგიის შემუშავება, რომელიც მაქსიმალურად იცავს თქვენს ინტერესებს.' },
        { step: '04', title: 'წარმომადგენლობა', text: 'თანმიმდევრული და მტკიცე დაცვა გამოძიებასა და სასამართლოში საბოლოო შედეგამდე.' },
      ],
    },
    testimonials: {
      eyebrow: 'შეფასებები',
      title: 'რას ამბობენ კლიენტები',
      items: [
        { name: 'გიორგი მ.', text: 'ურთულეს სიტუაციაში აღმოვჩნდი და მხოლოდ თამთას პროფესიონალიზმის წყალობით დამთავრდა საქმე ჩემს სასარგებლოდ.' },
        { name: 'ნინო კ.', text: 'მაქსიმალურად ჩართული, ყოველთვის ხელმისაწვდომი და გულწრფელი ადვოკატი. ვგრძნობდი, რომ ჩემი ინტერესები დაცული იყო.' },
        { name: 'დავით შ.', text: 'საუკეთესო არჩევანი სისხლის სამართლის საქმეში. ცოდნა, გამოცდილება და ადამიანური დამოკიდებულება ერთ ადამიანში.' },
      ],
    },
    contact: {
      eyebrow: 'კონტაქტი',
      title: 'დაგვიკავშირდით დღესვე',
      subtitle: 'პირველი კონსულტაცია უფასოა. დაუყოვნებლივ დამიკავშირდით — დრო სისხლის სამართლის საქმეში გადამწყვეტია.',
      phoneLabel: 'ტელეფონი',
      emailLabel: 'ელ. ფოსტა',
      cityLabel: 'ლოკაცია',
      form: {
        name: 'სახელი და გვარი',
        phone: 'ტელეფონის ნომერი',
        message: 'მოკლედ აღწერეთ საქმე',
        submit: 'შეტყობინების გაგზავნა',
        note: 'თქვენი ინფორმაცია მკაცრად კონფიდენციალურია.',
      },
    },
    footer: {
      tagline: 'სისხლის სამართლის ადვოკატი თბილისში',
      rights: 'ყველა უფლება დაცულია.',
    },
  },

  en: {
    dir: 'en',
    langLabel: 'ქარ',
    meta: {
      title: 'Tamta Janiashvili — Criminal Defense Lawyer in Tbilisi',
      description:
        'Tamta Janiashvili — experienced criminal defense lawyer in Tbilisi. Many won cases. A trusted, dedicated attorney.',
    },
    name: 'Tamta Janiashvili',
    role: 'Criminal Defense Lawyer',
    city: 'Tbilisi',
    nav: [
      { href: '#about', label: 'About' },
      { href: '#practice', label: 'Services' },
      { href: '#process', label: 'How I Work' },
      { href: '#testimonials', label: 'Reviews' },
      { href: '#contact', label: 'Contact' },
    ],
    cta: { call: 'Call now', consult: 'Free consultation', book: 'Book a meeting' },
    hero: {
      badge: 'Tbilisi-based attorney',
      titleTop: 'Strong defense',
      titleAccent: 'of your rights',
      titleBottom: 'in criminal law',
      subtitle:
        'An experienced criminal defense lawyer in Tbilisi. I protect your interests from the very first minute of the investigation to the final court decision.',
      trust: 'Trust, confidentiality and a results-driven approach',
    },
    about: {
      eyebrow: 'About me',
      title: 'A lawyer who fights to the end',
      p1: 'I am Tamta Janiashvili — a criminal defense lawyer in Tbilisi. For years I have protected people’s rights and freedom, even at the most difficult stages of a case.',
      p2: 'I approach every case individually, with in-depth analysis and a clear strategy. For me it is not just representation, but the maximum protection of your interests.',
      points: [
        'Personal, confidential approach',
        'Available 24/7 for emergencies',
        'Transparent communication at every stage',
      ],
    },
    stats: [
      { value: 12, suffix: '+', label: 'Years of experience' },
      { value: 350, suffix: '+', label: 'Cases handled' },
      { value: 90, suffix: '%', label: 'Positive outcomes' },
      { value: 24, suffix: '/7', label: 'Availability' },
    ],
    practice: {
      eyebrow: 'Services',
      title: 'Areas where I defend you',
      subtitle: 'A broad criminal law practice — experience that delivers results.',
      items: [
        { icon: 'shield', title: 'Defense during investigation', text: 'Professional defense at every stage of arrest, interrogation and investigation — full protection of your rights.' },
        { icon: 'gavel', title: 'Court representation', text: 'Representing your interests in courts of first instance, appeals and cassation.' },
        { icon: 'pills', title: 'Drug-related crimes', text: 'Defense in drug-related cases — a complex category where experience is decisive.' },
        { icon: 'briefcase', title: 'Economic crimes', text: 'White-collar and economic crime cases, business and tax disputes.' },
        { icon: 'fist', title: 'Violent crimes', text: 'Bodily harm, domestic violence and other offenses against the person.' },
        { icon: 'scale', title: 'Property crimes', text: 'Theft, fraud, robbery — evidence analysis and an effective strategy.' },
      ],
    },
    process: {
      eyebrow: 'How I work',
      title: 'From the first call to the result',
      items: [
        { step: '01', title: 'Free consultation', text: 'A first meeting where we discuss your case and possible paths in detail.' },
        { step: '02', title: 'Case analysis', text: 'In-depth study of evidence, documentation and circumstances.' },
        { step: '03', title: 'Defense strategy', text: 'Building an individual strategy that protects your interests to the maximum.' },
        { step: '04', title: 'Representation', text: 'Consistent, firm defense in the investigation and in court, to the final result.' },
      ],
    },
    testimonials: {
      eyebrow: 'Reviews',
      title: 'What clients say',
      items: [
        { name: 'Giorgi M.', text: 'I found myself in a very difficult situation, and only thanks to Tamta’s professionalism did the case end in my favor.' },
        { name: 'Nino K.', text: 'A fully engaged, always available and honest lawyer. I felt my interests were protected at every step.' },
        { name: 'David Sh.', text: 'The best choice for a criminal case. Knowledge, experience and a human attitude in one person.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Get in touch today',
      subtitle: 'The first consultation is free. Contact me immediately — time is critical in a criminal case.',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      cityLabel: 'Location',
      form: {
        name: 'Full name',
        phone: 'Phone number',
        message: 'Briefly describe your case',
        submit: 'Send message',
        note: 'Your information is strictly confidential.',
      },
    },
    footer: {
      tagline: 'Criminal defense lawyer in Tbilisi',
      rights: 'All rights reserved.',
    },
  },
}

const LangContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ka')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'ka' || saved === 'en') setLang(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((l) => (l === 'ka' ? 'en' : 'ka'))

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t: CONTENT[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
