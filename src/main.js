// Translations
const translations = {
    ar: {
        // Navbar
        'nav.home': 'الرئيسية',
        'nav.courses': 'الدورات',
        'nav.instructors': 'المدربون',
        'nav.about': 'من نحن',
        'nav.contact': 'اتصل بنا',
        'nav.login': 'تسجيل الدخول',
        'nav.signup': 'سجل الآن',
        
        // Sidebar
        'sidebar.menu': 'القائمة',
        'sidebar.dashboard': 'لوحة التحكم',
        'sidebar.myCourses': 'دوراتي',
        'sidebar.certificates': 'الشهادات',
        'sidebar.wishlist': 'قائمة الأمنيات',
        'sidebar.profile': 'الملف الشخصي',
        'sidebar.settings': 'الإعدادات',
        'sidebar.categories': 'الفئات',
        'sidebar.programming': 'البرمجة',
        'sidebar.design': 'التصميم',
        'sidebar.business': 'الأعمال',
        'sidebar.languages': 'اللغات',
        
        // Hero
        'hero.title': 'ابدأ رحلتك التعليمية مع Farabi Academy',
        'hero.subtitle': 'اكتشف آلاف الدورات التعليمية عالية الجودة من أفضل المدربين حول العالم',
        'hero.explore': 'استكشف الدورات',
        'hero.learnMore': 'اعرف المزيد',
        
        // Content
        'content.welcome': 'مرحباً بك في Farabi Academy',
        'content.description': 'هذا هو المحتوى الرئيسي للصفحة. يمكنك إضافة المزيد من المحتوى هنا.',
        
        // Footer
        'footer.description': 'منصة تعليمية رائدة تقدم دورات عالية الجودة في مختلف المجالات. انضم إلى آلاف الطلاب الذين يطورون مهاراتهم معنا.',
        'footer.quickLinks': 'روابط سريعة',
        'footer.about': 'من نحن',
        'footer.courses': 'الدورات',
        'footer.instructors': 'المدربون',
        'footer.blog': 'المدونة',
        'footer.support': 'الدعم',
        'footer.help': 'مركز المساعدة',
        'footer.contact': 'اتصل بنا',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.terms': 'الشروط والأحكام',
        'footer.copyright': '© 2024 Farabi Academy. جميع الحقوق محفوظة.',
        
        // Dashboard
        'dashboard.title': 'لوحة التحكم',
        'dashboard.subtitle': 'تابع تقدمك وإحصائياتك التعليمية',
        'dashboard.totalCourses': 'إجمالي الكورسات',
        'dashboard.totalCoursesDesc': 'الكورسات المسجلة',
        'dashboard.completedCourses': 'الكورسات المكتملة',
        'dashboard.completedCoursesDesc': 'تم إكمالها بنجاح',
        'dashboard.certificates': 'الشهادات',
        'dashboard.certificatesDesc': 'الشهادات المكتسبة',
        'dashboard.overallProgress': 'التقدم العام',
        'dashboard.overallProgressDesc': 'متوسط التقدم',
        'dashboard.progressTitle': 'مستوى التقدم العام',
        'dashboard.progressDesc': 'أنت على الطريق الصحيح! استمر في التعلم لإكمال جميع الكورسات.',
        'dashboard.recentCourses': 'الكورسات قيد التقدم',
        'dashboard.reviews': 'تقييماتي',
        'dashboard.viewAll': 'عرض الكل',
        'dashboard.review1': 'دورة رائعة ومفيدة جداً! المحتوى منظم بشكل ممتاز والمدرب يشرح بطريقة واضحة. أنصح بها بشدة.',
        'dashboard.review2': 'محتوى جيد جداً، لكن أتمنى لو كان هناك المزيد من الأمثلة العملية. بشكل عام دورة مفيدة.',
        'dashboard.review3': 'أفضل دورة لتعلم Python! الشرح واضح والتمارين عملية. أنصح بها للمبتدئين.',
        
        // My Courses
        'myCourses.title': 'دوراتي',
        'myCourses.subtitle': 'جميع الكورسات التي سجلت فيها',
        'myCourses.all': 'الكل',
        'myCourses.inProgress': 'قيد التقدم',
        'myCourses.completed': 'مكتملة',
        'myCourses.notStarted': 'لم تبدأ',
        'myCourses.progress': 'التقدم',
        'myCourses.continue': 'متابعة',
        'myCourses.start': 'ابدأ الآن',
        'myCourses.certificateReady': 'شهادة جاهزة',
        'myCourses.viewCertificate': 'عرض الشهادة',
        'myCourses.readyToStart': 'جاهز للبدء',
        'myCourses.design': 'التصميم',
        'myCourses.business': 'الأعمال',
        
        // Courses Marketplace
        'courses.title': 'استكشف الكورسات',
        'courses.subtitle': 'اختر من بين آلاف الكورسات التعليمية عالية الجودة',
        'courses.searchPlaceholder': 'ابحث عن كورس...',
        'courses.allCategories': 'جميع الفئات',
        'courses.sortBy': 'ترتيب حسب',
        'courses.priceLow': 'السعر: من الأقل للأعلى',
        'courses.priceHigh': 'السعر: من الأعلى للأقل',
        'courses.rating': 'التقييم',
        'courses.newest': 'الأحدث',
        'courses.bestseller': 'الأكثر مبيعاً',
        'courses.new': 'جديد',
        'courses.addToCart': 'إضافة للسلة',
        
        // Cart
        'cart.title': 'سلة التسوق',
        'cart.subtitle': 'راجع الكورسات المختارة قبل الدفع',
        'cart.empty': 'السلة فارغة',
        'cart.emptyDesc': 'لم تقم بإضافة أي كورسات إلى السلة بعد',
        'cart.browseCourses': 'تصفح الكورسات',
        'cart.course': 'كورس تعليمي',
        'cart.total': 'الإجمالي',
        'cart.continueShopping': 'متابعة التسوق',
        'cart.checkout': 'الدفع',
        
        // Checkout
        'checkout.title': 'إتمام الدفع',
        'checkout.subtitle': 'أكمل بياناتك لإتمام عملية الشراء',
        'checkout.studentInfo': 'معلومات الطالب',
        'checkout.firstName': 'الاسم الأول',
        'checkout.lastName': 'اسم العائلة',
        'checkout.email': 'البريد الإلكتروني',
        'checkout.phone': 'رقم الهاتف',
        'checkout.address': 'العنوان',
        'checkout.city': 'المدينة',
        'checkout.country': 'الدولة',
        'checkout.saudi': 'السعودية',
        'checkout.uae': 'الإمارات',
        'checkout.kuwait': 'الكويت',
        'checkout.qatar': 'قطر',
        'checkout.zipCode': 'الرمز البريدي',
        'checkout.paymentMethod': 'طريقة الدفع',
        'checkout.card': 'بطاقة ائتمانية',
        'checkout.cardDesc': 'Visa, Mastercard, American Express',
        'checkout.secure': 'معاملات آمنة ومشفرة',
        'checkout.orderSummary': 'ملخص الطلب',
        'checkout.subtotal': 'المجموع الفرعي',
        'checkout.tax': 'الضريبة',
        'checkout.discount': 'الخصم',
        'checkout.total': 'الإجمالي',
        'checkout.completePayment': 'إتمام الدفع',
        'checkout.processing': 'جاري المعالجة...',
        
        // Course Player
        'player.courseProgress': 'تقدم الكورس',
        'player.courseContent': 'محتوى الكورس',
        'player.videoNotSupported': 'متصفحك لا يدعم تشغيل الفيديو.',
        'player.previous': 'السابق',
        'player.next': 'التالي',
        'player.rateThisLesson': 'قيم هذا الدرس',
        'player.clickToRate': 'اضغط لتقييم',
        'player.courseRating': 'تقييم الكورس',
        'player.courseRatingDesc': 'شاركنا رأيك في هذا الكورس لمساعدة الطلاب الآخرين',
        'player.rateCourse': 'قيم الكورس',
        'player.comments': 'التعليقات',
        'player.writeComment': 'اكتب تعليقك هنا...',
        'player.postComment': 'نشر التعليق',
        'player.reply': 'رد',
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.courses': 'Courses',
        'nav.instructors': 'Instructors',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.login': 'Login',
        'nav.signup': 'Sign Up',
        
        // Sidebar
        'sidebar.menu': 'Menu',
        'sidebar.dashboard': 'Dashboard',
        'sidebar.myCourses': 'My Courses',
        'sidebar.certificates': 'Certificates',
        'sidebar.wishlist': 'Wishlist',
        'sidebar.profile': 'Profile',
        'sidebar.settings': 'Settings',
        'sidebar.categories': 'Categories',
        'sidebar.programming': 'Programming',
        'sidebar.design': 'Design',
        'sidebar.business': 'Business',
        'sidebar.languages': 'Languages',
        
        // Hero
        'hero.title': 'Start Your Learning Journey with Farabi Academy',
        'hero.subtitle': 'Discover thousands of high-quality courses from the best instructors around the world',
        'hero.explore': 'Explore Courses',
        'hero.learnMore': 'Learn More',
        
        // Content
        'content.welcome': 'Welcome to Farabi Academy',
        'content.description': 'This is the main content area. You can add more content here.',
        
        // Footer
        'footer.description': 'A leading educational platform offering high-quality courses in various fields. Join thousands of students developing their skills with us.',
        'footer.quickLinks': 'Quick Links',
        'footer.about': 'About',
        'footer.courses': 'Courses',
        'footer.instructors': 'Instructors',
        'footer.blog': 'Blog',
        'footer.support': 'Support',
        'footer.help': 'Help Center',
        'footer.contact': 'Contact Us',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms & Conditions',
        'footer.copyright': '© 2024 Farabi Academy. All rights reserved.',
        
        // Dashboard
        'dashboard.title': 'Dashboard',
        'dashboard.subtitle': 'Track your progress and learning statistics',
        'dashboard.totalCourses': 'Total Courses',
        'dashboard.totalCoursesDesc': 'Registered courses',
        'dashboard.completedCourses': 'Completed Courses',
        'dashboard.completedCoursesDesc': 'Successfully completed',
        'dashboard.certificates': 'Certificates',
        'dashboard.certificatesDesc': 'Earned certificates',
        'dashboard.overallProgress': 'Overall Progress',
        'dashboard.overallProgressDesc': 'Average progress',
        'dashboard.progressTitle': 'Overall Progress Level',
        'dashboard.progressDesc': 'You are on the right track! Keep learning to complete all courses.',
        'dashboard.recentCourses': 'Courses in Progress',
        'dashboard.reviews': 'My Reviews',
        'dashboard.viewAll': 'View All',
        'dashboard.review1': 'Excellent and very useful course! The content is well organized and the instructor explains clearly. Highly recommended.',
        'dashboard.review2': 'Very good content, but I wish there were more practical examples. Overall a useful course.',
        'dashboard.review3': 'Best course for learning Python! Clear explanation and practical exercises. Highly recommended for beginners.',
        
        // My Courses
        'myCourses.title': 'My Courses',
        'myCourses.subtitle': 'All courses you are enrolled in',
        'myCourses.all': 'All',
        'myCourses.inProgress': 'In Progress',
        'myCourses.completed': 'Completed',
        'myCourses.notStarted': 'Not Started',
        'myCourses.progress': 'Progress',
        'myCourses.continue': 'Continue',
        'myCourses.start': 'Start Now',
        'myCourses.certificateReady': 'Certificate Ready',
        'myCourses.viewCertificate': 'View Certificate',
        'myCourses.readyToStart': 'Ready to Start',
        'myCourses.design': 'Design',
        'myCourses.business': 'Business',
        
        // Courses Marketplace
        'courses.title': 'Explore Courses',
        'courses.subtitle': 'Choose from thousands of high-quality educational courses',
        'courses.searchPlaceholder': 'Search for a course...',
        'courses.allCategories': 'All Categories',
        'courses.sortBy': 'Sort By',
        'courses.priceLow': 'Price: Low to High',
        'courses.priceHigh': 'Price: High to Low',
        'courses.rating': 'Rating',
        'courses.newest': 'Newest',
        'courses.bestseller': 'Bestseller',
        'courses.new': 'New',
        'courses.addToCart': 'Add to Cart',
        
        // Cart
        'cart.title': 'Shopping Cart',
        'cart.subtitle': 'Review selected courses before checkout',
        'cart.empty': 'Cart is Empty',
        'cart.emptyDesc': 'You haven\'t added any courses to your cart yet',
        'cart.browseCourses': 'Browse Courses',
        'cart.course': 'Educational Course',
        'cart.total': 'Total',
        'cart.continueShopping': 'Continue Shopping',
        'cart.checkout': 'Checkout',
        
        // Checkout
        'checkout.title': 'Complete Payment',
        'checkout.subtitle': 'Complete your information to finish the purchase',
        'checkout.studentInfo': 'Student Information',
        'checkout.firstName': 'First Name',
        'checkout.lastName': 'Last Name',
        'checkout.email': 'Email',
        'checkout.phone': 'Phone Number',
        'checkout.address': 'Address',
        'checkout.city': 'City',
        'checkout.country': 'Country',
        'checkout.saudi': 'Saudi Arabia',
        'checkout.uae': 'United Arab Emirates',
        'checkout.kuwait': 'Kuwait',
        'checkout.qatar': 'Qatar',
        'checkout.zipCode': 'Zip Code',
        'checkout.paymentMethod': 'Payment Method',
        'checkout.card': 'Credit Card',
        'checkout.cardDesc': 'Visa, Mastercard, American Express',
        'checkout.secure': 'Secure and encrypted transactions',
        'checkout.orderSummary': 'Order Summary',
        'checkout.subtotal': 'Subtotal',
        'checkout.tax': 'Tax',
        'checkout.discount': 'Discount',
        'checkout.total': 'Total',
        'checkout.completePayment': 'Complete Payment',
        'checkout.processing': 'Processing...',
        
        // Course Player
        'player.courseProgress': 'Course Progress',
        'player.courseContent': 'Course Content',
        'player.videoNotSupported': 'Your browser does not support video playback.',
        'player.previous': 'Previous',
        'player.next': 'Next',
        'player.rateThisLesson': 'Rate This Lesson',
        'player.clickToRate': 'Click to rate',
        'player.courseRating': 'Course Rating',
        'player.courseRatingDesc': 'Share your opinion about this course to help other students',
        'player.rateCourse': 'Rate Course',
        'player.comments': 'Comments',
        'player.writeComment': 'Write your comment here...',
        'player.postComment': 'Post Comment',
        'player.reply': 'Reply',
    }
};

// Get current language from localStorage or default to Arabic
let currentLang = localStorage.getItem('language') || 'ar';

// Initialize language
function initLanguage() {
    const html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Update font family based on language
    if (currentLang === 'ar') {
        document.body.style.fontFamily = "'Cairo', 'Tajawal', Arial, sans-serif";
    } else {
        document.body.style.fontFamily = "'Inter', 'Roboto', Arial, sans-serif";
    }
    
    updateTranslations();
    updateLanguageButton();
    updateSidebarPosition();
}

// Update all translations
function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Update language button text
function updateLanguageButton() {
    const langButton = document.getElementById('currentLang');
    if (langButton) {
        langButton.textContent = currentLang === 'ar' ? 'العربية' : 'English';
    }
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLang);
    initLanguage();
}

// Sidebar toggle for mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const drawer = document.getElementById('mobileDrawer');
    
    if (drawer) {
        // Use mobile drawer
        drawer.classList.toggle('active');
    } else if (sidebar && overlay) {
        // Use overlay method
        sidebar.classList.toggle('-translate-x-full');
        sidebar.classList.toggle('rtl:translate-x-full');
        overlay.classList.toggle('hidden');
    }
}

// Update sidebar position based on RTL/LTR
function updateSidebarPosition() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        if (currentLang === 'ar') {
            sidebar.classList.remove('left-0');
            sidebar.classList.add('right-0');
        } else {
            sidebar.classList.remove('right-0');
            sidebar.classList.add('left-0');
        }
    }
}

// Close sidebar when clicking overlay
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar && overlay) {
        sidebar.classList.add('-translate-x-full');
        sidebar.classList.add('rtl:translate-x-full');
        overlay.classList.add('hidden');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    initLanguage();
    
    // Language toggle
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    // Overlay click to close sidebar
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar on window resize (if mobile)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeSidebar();
        }
    });
});

