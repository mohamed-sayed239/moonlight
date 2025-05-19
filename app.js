  function changeLanguage(lang) {
    alert("Language switched to: " + lang);
  }
  


// كائن يحتوي على جميع النصوص المترجمة
const translations = {
  en: {
    home: "Home",
    about: "About us",
    manufacturing: "Manufacturing",
    services: "Services",
    location: "Location",
    contact: "Contact Us",
    language: "Language ▾",
    homeTitle: "Moon Light Women's Home Wear",
    homeSubtitle: "Crafting comfort and elegance for the modern woman",
    learnMore: "Learn more",
    aboutTitle: "About Moon Light",
    aboutText1: "Moon Light is a luxury women's homewear manufacturing factory committed to producing elegant, feminine, and comfortable loungewear for refined living.",
    aboutText2: "Founded with a passion for graceful living, Moon Light began as a vision to elevate homewear into an art form. Today, our factory blends traditional craftsmanship with advanced manufacturing techniques to deliver high-quality loungewear made for women who value beauty and comfort at home.",
    aboutListItem1: "Elegance in every detail",
    aboutListItem2: "High-precision production",
    aboutListItem3: "Soft, skin-friendly fabrics",
    aboutListItem4: "Ethical and sustainable practices",
    aboutText3: "At Moon Light, we don't just manufacture homewear — we craft the feeling of home itself.",
    manufacturingTitle: "Manufacturing Process",
    manufacturingSubtitle: "From request to delivery in simple steps",
    finishing: "Finishing",
    finishingDesc: "Apply final touches and quality checks to ensure perfect products.",
    cutting: "Cutting",
    cuttingDesc: "Precisely cut fabric pieces according to design patterns.",
    packing: "Packing",
    packingDesc: "Carefully pack the products for safe delivery.",
    sewing: "Sewing",
    sewingDesc: "Assemble and stitch fabric pieces to create the final product.",
    servicesTitle: "Services",
    servicesSubtitle: "Everything you need to kickstart your project in one place",
    customerService: "Customer Service",
    customerServiceDesc: "Technical Support and Quick Customer Response",
    wholesale: "Wholesale Selling",
    wholesaleDesc: "Providing Wholesale with Competitive Prices",
    marketing: "Marketing",
    marketingDesc: "Marketing Support for Brands",
    shipping: "Shipping",
    shippingDesc: "Fast and Secure Shipping within Egypt",
    webDesign: "Website Design",
    webDesignDesc: "Website Design Services for Factories and Stores",
    intShipping: "International Shipping",
    intShippingDesc: "Competitive International Shipping Rates",
    training: "Training",
    trainingDesc: "Cutting, Pattern Making, and Sewing",
    customTailoring: "Custom Tailoring",
    customTailoringDesc: "Designing Custom Models on Demand",
    locationTitle: "Location",
    locationSubtitle: "Visit Our Manufacturing Facility",
    locationDesc: "Explore the heart of Mamoon Light at our state-of-the-art manufacturing facility, where innovation meets quality craftsmanship.moon Light Headquarters",
    contactTitle: "Contact Us",
    contactDesc: "If you have any questions, feel free to reach out to us through the following methods:",
    followUs: "Follow Us",
    emailUs: "Email Us",
    callUs: "Call Us",
    email: "info@yourcompany.com",
    phone: "+02 01128131448",
    footerAbout: "We design stylish and comfortable loungewear for the modern woman with high quality and local craftsmanship.",
    quickLinks: "Quick Links",
    copyright: "© 2025 Moonlight. All rights reserved."
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    manufacturing: "التصنيع",
    services: "الخدمات",
    location: "الموقع",
    contact: "اتصل بنا",
    language: "اللغة ▾",
    homeTitle: "ملابس منزلية نسائية مون لايت",
    homeSubtitle: "صنع الراحة والأناقة للمرأة العصرية",
    learnMore: "اعرف المزيد",
    aboutTitle: "عن مون لايت",
    aboutText1: "مون لايت هي مصنع لتصنيع الملابس المنزلية النسائية الفاخرة الملتزمة بإنتاج ملابس أنيقة وأنثوية ومريحة للعيش الراقي.",
    aboutText2: "تأسست بشغف للعيش الرشيق، بدأت مون لايت كرؤية لرفع مستوى الملابس المنزلية إلى شكل فني. اليوم، يدمج مصنعنا الحرفية التقليدية مع تقنيات التصنيع المتقدمة لتقديم ملابس منزلية عالية الجودة مصنوعة للنساء اللاتي يقدرن الجمال والراحة في المنزل.",
    aboutListItem1: "الأناقة في كل التفاصيل",
    aboutListItem2: "إنتاج عالي الدقة",
    aboutListItem3: "أقمشة ناعمة وصديقة للبشرة",
    aboutListItem4: "ممارسات أخلاقية ومستدامة",
    aboutText3: "في مون لايت، نحن لا نصنع فقط الملابس المنزلية - نحن نصنع شعور المنزل نفسه.",
    manufacturingTitle: "عملية التصنيع",
    manufacturingSubtitle: "من الطلب إلى التسليم في خطوات بسيطة",
    finishing: "الإنهاء",
    finishingDesc: "تطبيق اللمسات النهائية وفحص الجودة لضمان منتجات مثالية.",
    cutting: "القص",
    cuttingDesc: "قص قطع القماش بدقة وفقًا لأنماط التصميم.",
    packing: "التغليف",
    packingDesc: "تعبئة المنتجات بعناية لتسليم آمن.",
    sewing: "الخياطة",
    sewingDesc: "تجميع وربط قطع القماش لإنشاء المنتج النهائي.",
    servicesTitle: "الخدمات",
    servicesSubtitle: "كل ما تحتاجه لبدء مشروعك في مكان واحد",
    customerService: "خدمة العملاء",
    customerServiceDesc: "الدعم الفني والاستجابة السريعة للعملاء",
    wholesale: "البيع بالجملة",
    wholesaleDesc: "توفير الجملة بأسعار تنافسية",
    marketing: "التسويق",
    marketingDesc: "دعم التسويق للعلامات التجارية",
    shipping: "الشحن",
    shippingDesc: "شحن سريع وآمن داخل مصر",
    webDesign: "تصميم المواقع",
    webDesignDesc: "خدمات تصميم المواقع للمصانع والمتاجر",
    intShipping: "الشحن الدولي",
    intShippingDesc: "أسعار شحن دولي تنافسية",
    training: "التدريب",
    trainingDesc: "قص، صنع الأنماط، والخياطة",
    customTailoring: "تفصيل حسب الطلب",
    customTailoringDesc: "تصميم نماذج مخصصة حسب الطلب",
    locationTitle: "الموقع",
    locationSubtitle: "زيارة منشأة التصنيع الخاصة بنا",
    locationDesc: "استكشف قلب مون لايت في منشأة التصنيع الحديثة لدينا، حيث يلتقي الابتكار بالحرفية عالية الجودة. مقر مون لايت",
    contactTitle: "اتصل بنا",
    contactDesc: "إذا كان لديك أي أسئلة، فلا تتردد في التواصل معنا من خلال الطرق التالية:",
    followUs: "تابعنا",
    emailUs: "راسلنا عبر البريد",
    callUs: "اتصل بنا",
    email: "info@yourcompany.com",
    phone: "+02 01128131448",
    footerAbout: "نصمم ملابس منزلية عصرية ومريحة للمرأة الحديثة بجودة عالية وحرفية محلية.",
    quickLinks: "روابط سريعة",
    copyright: "© 2025 مون لايت. جميع الحقوق محفوظة."
  }
};

// دالة تغيير اللغة
function changeLanguage(lang) {
  // تغيير اتجاه الصفحة حسب اللغة
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  
  // تغيير النصوص
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // تغيير النصوص في العناصر الأخرى التي لا تحتوي على data-translate
  document.querySelector('.dropdown-btn').textContent = translations[lang]['language'] + '';
  
  // حفظ اللغة المفضلة
  localStorage.setItem('preferredLanguage', lang);
}

// عند تحميل الصفحة، تحقق من اللغة المحفوظة
document.addEventListener('DOMContentLoaded', function() {
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
  changeLanguage(preferredLanguage);
});


//keyfram
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // نضيف كلاس show للعنصر الأساسي
          entry.target.classList.add('show');

          // نجيب كل العناصر الداخلية اللي عليها animate-item
          const children = entry.target.querySelectorAll('.animate-item');

          // نضيف كلاس show لكل عنصر بتأخير متتابع (stagger)
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('show');
            }, index * 150); // 150 مللي ثانية بين كل عنصر والتالي
          });
        } else {
          // نشيل الكلاسات لو عايز الأنيميشن يتكرر عند الخروج والدخول
          entry.target.classList.remove('show');

          const children = entry.target.querySelectorAll('.animate-item');
          children.forEach(child => {
            child.classList.remove('show');
          });
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});



// ده خاص بصناديق الخدمات، سيبه لو لسه محتاجه
const boxes = document.querySelectorAll('.box-service');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');
  });
});



  const videos = document.querySelectorAll('video');

  videos.forEach(video => {
    video.addEventListener('play', () => {
      // عند تشغيل فيديو، نوقف كل الفيديوهات الأخرى
      videos.forEach(v => {
        if (v !== video) {
          v.pause();
        }
      });
    });
  });


  let bar = document.querySelector('.fa-bars');
  let mainhead = document.querySelector('.mainhead');

  bar.onclick = ()=>{
    mainhead.classList.toggle('open')
}