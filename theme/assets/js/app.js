// Main App Configuration
const App = {
  language: 'en',
  theme: 'light',
  translations: {
    en: {
      nav: {
        aboutUs: "About Us",
        ourCourses: "Our Courses",
        successStories: "Success Stories",
        registerNow: "Register Now",
        login: "Login",
        contactUs: "Contact Us",
        brand: "Farabi Academy",
      },
      hero: {
        title: "Transform Your Future with Excellence",
        subtitle: "Join thousands of students who have achieved their dreams through our world-class online academy. Expert instructors, proven methods, and a supportive community await you.",
        ctaButton: "Start Now",
      },
      courses: {
        title: "What We Offer",
        subtitle: "Explore our comprehensive range of online courses designed to help you succeed",
        viewDetails: "View Details",
      },
      stats: {
        students: "Students",
        views: "Views",
        courses: "Courses",
        instructors: "Instructors",
        satisfaction: "Satisfaction",
      },
      reviews: {
        title: "What Our Students Say",
        subtitle: "Real stories from real students who transformed their lives",
      },
      whyChoose: {
        title: "Why Choose Us",
        subtitle: "Discover what makes our academy the best choice for your learning journey",
        feature1Title: "Expert Instructors",
        feature1Desc: "Learn from industry professionals with years of real-world experience and proven teaching methods.",
        feature2Title: "Flexible Learning",
        feature2Desc: "Study at your own pace, anytime, anywhere. Our platform adapts to your schedule and learning style.",
        feature3Title: "Lifetime Access",
        feature3Desc: "Get unlimited access to all course materials, updates, and resources even after completion.",
        feature4Title: "Certification",
        feature4Desc: "Earn recognized certificates upon completion to boost your career and showcase your skills.",
        feature5Title: "Community Support",
        feature5Desc: "Join a vibrant community of learners. Get help, share ideas, and network with peers worldwide.",
        feature6Title: "Affordable Pricing",
        feature6Desc: "Quality education shouldn't break the bank. We offer competitive prices and flexible payment options.",
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sendButton: "Send Message",
        successMessage: "Thank you! We'll get back to you soon.",
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions about our academy",
        q1: "How do I enroll in a course?",
        a1: "Simply click on the 'Register Now' button, create an account, browse our course catalog, and select the course you want. You can pay securely online and get instant access.",
        q2: "Can I access courses on mobile devices?",
        a2: "Yes! Our platform is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers.",
        q3: "Do you offer refunds?",
        a3: "We offer a 30-day money-back guarantee. If you're not satisfied with your course within the first 30 days, we'll give you a full refund, no questions asked.",
        q4: "Are the certificates recognized?",
        a4: "Yes, our certificates are recognized by many employers and institutions. They demonstrate your commitment to learning and mastery of the subject.",
        q5: "How long do I have access to a course?",
        a5: "Once you enroll in a course, you have lifetime access to all course materials, including any future updates and additions.",
        q6: "Can I interact with instructors?",
        a6: "Absolutely! You can ask questions, participate in live Q&A sessions, and get personalized feedback from our instructors throughout your learning journey.",
      },
      footer: {
        description: "Empowering learners worldwide with quality online education.",
        quickLinks: "Quick Links",
        followUs: "Follow Us",
        copyright: "© 2026 Farabi Academy. All rights reserved.",
      },
      floatingCta: "Enroll Now",
    },
    ar: {
      nav: {
        aboutUs: "من نحن",
        ourCourses: "دوراتنا",
        successStories: "قصص النجاح",
        registerNow: "سجل الآن",
        login: "تسجيل الدخول",
        contactUs: "اتصل بنا",
        brand: "أكاديمية الفارابي",
      },
      hero: {
        title: "حوّل مستقبلك مع التميز",
        subtitle: "انضم إلى آلاف الطلاب الذين حققوا أحلامهم من خلال أكاديميتنا الإلكترونية عالمية المستوى. مدربون خبراء وأساليب مثبتة ومجتمع داعم في انتظارك.",
        ctaButton: "ابدأ الآن",
      },
      courses: {
        title: "ما نقدمه",
        subtitle: "استكشف مجموعتنا الشاملة من الدورات الإلكترونية المصممة لمساعدتك على النجاح",
        viewDetails: "عرض التفاصيل",
      },
      stats: {
        students: "طالب",
        views: "مشاهدة",
        courses: "دورة",
        instructors: "مدرب",
        satisfaction: "رضا",
      },
      reviews: {
        title: "ماذا يقول طلابنا",
        subtitle: "قصص حقيقية من طلاب حقيقيين غيّروا حياتهم",
      },
      whyChoose: {
        title: "لماذا تختارنا",
        subtitle: "اكتشف ما يجعل أكاديميتنا الخيار الأفضل لرحلة التعلم الخاصة بك",
        feature1Title: "مدربون خبراء",
        feature1Desc: "تعلم من محترفي الصناعة بخبرة سنوات من الخبرة العملية وأساليب التدريس المثبتة.",
        feature2Title: "تعلم مرن",
        feature2Desc: "ادرس بالسرعة التي تناسبك، في أي وقت وفي أي مكان. منصتنا تتكيف مع جدولك وأسلوب التعلم الخاص بك.",
        feature3Title: "وصول مدى الحياة",
        feature3Desc: "احصل على وصول غير محدود لجميع مواد الدورة والتحديثات والموارد حتى بعد الانتهاء.",
        feature4Title: "شهادات معترف بها",
        feature4Desc: "احصل على شهادات معترف بها عند الإكمال لتعزيز مسيرتك المهنية وإظهار مهاراتك.",
        feature5Title: "دعم المجتمع",
        feature5Desc: "انضم إلى مجتمع نابض بالحياة من المتعلمين. احصل على المساعدة وشارك الأفكار وتواصل مع الأقران في جميع أنحاء العالم.",
        feature6Title: "أسعار معقولة",
        feature6Desc: "التعليم الجيد لا يجب أن يكلف ثروة. نحن نقدم أسعار تنافسية وخيارات دفع مرنة.",
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "لديك أسئلة؟ نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.",
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك الإلكتروني",
        messagePlaceholder: "رسالتك",
        sendButton: "إرسال رسالة",
        successMessage: "شكراً لك! سنعاود الاتصال بك قريباً.",
      },
      faq: {
        title: "الأسئلة الشائعة",
        subtitle: "اعثر على إجابات للأسئلة الشائعة حول أكاديميتنا",
        q1: "كيف أسجل في دورة؟",
        a1: "ببساطة انقر على زر 'سجل الآن'، أنشئ حساباً، تصفح كتالوج الدورات، واختر الدورة التي تريدها. يمكنك الدفع بأمان عبر الإنترنت والحصول على وصول فوري.",
        q2: "هل يمكنني الوصول إلى الدورات على الأجهزة المحمولة؟",
        a2: "نعم! منصتنا متجاوبة تماماً وتعمل بسلاسة على جميع الأجهزة بما في ذلك الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر المكتبية.",
        q3: "هل تقدمون استرداد الأموال؟",
        a3: "نحن نقدم ضمان استرداد الأموال لمدة 30 يوماً. إذا لم تكن راضياً عن دورتك خلال أول 30 يوماً، سنعيد لك المبلغ بالكامل، بدون أسئلة.",
        q4: "هل الشهادات معترف بها؟",
        a4: "نعم، شهاداتنا معترف بها من قبل العديد من أصحاب العمل والمؤسسات. إنها تثبت التزامك بالتعلم وإتقان الموضوع.",
        q5: "كم من الوقت لدي للوصول إلى الدورة؟",
        a5: "بمجرد تسجيلك في دورة، يكون لديك وصول مدى الحياة لجميع مواد الدورة، بما في ذلك أي تحديثات وإضافات مستقبلية.",
        q6: "هل يمكنني التفاعل مع المدربين؟",
        a6: "بالتأكيد! يمكنك طرح الأسئلة والمشاركة في جلسات الأسئلة والأجوبة المباشرة والحصول على ملاحظات شخصية من مدربينا طوال رحلة التعلم الخاصة بك.",
      },
      footer: {
        description: "تمكين المتعلمين في جميع أنحاء العالم بالتعليم الإلكتروني عالي الجودة.",
        quickLinks: "روابط سريعة",
        followUs: "تابعنا",
        copyright: "© 2026 أكاديمية الفارابي. جميع الحقوق محفوظة.",
      },
      floatingCta: "سجل الآن",
    },
  },

  init() {
    // Load saved preferences
    this.loadPreferences();
    
    // Apply theme and language (theme defaults to light)
    this.applyTheme();
    this.applyLanguage();
    
    // Initialize components
    this.initNavigation();
    this.initThemeToggle();
    this.initLanguageToggle();
    this.initFloatingCTA();
  },

  loadPreferences() {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    
    // Default to light theme if no preference saved
    this.theme = savedTheme || 'light';
    if (savedLanguage) this.language = savedLanguage;
  },

  applyTheme() {
    // Ensure default is light if not set
    if (!this.theme) {
      this.theme = 'light';
    }
    
    if (this.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  applyLanguage() {
    document.documentElement.dir = this.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.language;
    this.updateContent();
  },

  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme();
  },

  setLanguage(language) {
    this.language = language;
    localStorage.setItem('language', language);
    this.applyLanguage();
  },

  toggleTheme() {
    this.setTheme(this.theme === 'light' ? 'dark' : 'light');
  },

  toggleLanguage() {
    this.setLanguage(this.language === 'en' ? 'ar' : 'en');
  },

  getTranslation(key) {
    const keys = key.split('.');
    let value = this.translations[this.language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  },

  updateContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      if (translation && translation !== key) {
        el.textContent = translation;
      }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.getTranslation(key);
      if (translation && translation !== key) {
        el.placeholder = translation;
      }
    });
  },

  initNavigation() {
    const checkNav = () => {
      const nav = document.querySelector('nav');
      if (!nav) {
        // Retry after a short delay if nav hasn't loaded yet
        setTimeout(checkNav, 100);
        return;
      }

      let isScrolled = false;
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 20;
        if (scrolled !== isScrolled) {
          isScrolled = scrolled;
          nav.classList.toggle('scrolled', scrolled);
        }
      });
    };
    checkNav();
  },

  initThemeToggle() {
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.toggleTheme();
      });
    });
    this.updateThemeIcons();
  },

  updateThemeIcons() {
    // Icons are handled by CSS classes (dark:hidden, dark:block)
    // No need for manual icon updates
  },

  initLanguageToggle() {
    document.querySelectorAll('[data-language-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.toggleLanguage();
        this.updateLanguageLabels();
      });
    });
    this.updateLanguageLabels();
  },

  updateLanguageLabels() {
    const label = this.language === 'en' ? 'AR' : 'EN';
    document.querySelectorAll('[data-language-label]').forEach(el => {
      el.textContent = label;
    });
  },

  initFloatingCTA() {
    const floatingBtn = document.querySelector('[data-floating-cta]');
    const scrollTopBtn = document.querySelector('[data-scroll-top]');
    
    if (!floatingBtn && !scrollTopBtn) return;

    let floatingVisible = false;
    let scrollTopVisible = false;

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      
      // Floating CTA
      if (floatingBtn) {
        const shouldShow = scrolled > 300;
        if (shouldShow !== floatingVisible) {
          floatingVisible = shouldShow;
          floatingBtn.classList.toggle('visible', shouldShow);
        }
      }
      
      // Scroll to top
      if (scrollTopBtn) {
        const shouldShow = scrolled > 500;
        if (shouldShow !== scrollTopVisible) {
          scrollTopVisible = shouldShow;
          scrollTopBtn.classList.toggle('visible', shouldShow);
        }
      }
    });
  },
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

