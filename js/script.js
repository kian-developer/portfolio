document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     ۱. مدیریت منوی همبرگری (موبایل)
     ========================================================= */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // بستن منو با کلیک روی هرکدام از لینک‌های منو
    document.querySelectorAll("#navMenu .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  /* =========================================================
     ۲. تغییر استایل هدر هنگام اسکرول (Sticky Header)
     ========================================================= */
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  /* =========================================================
     ۳. علامت‌گذاری خودکار لینک فعال بر اساس آدرس صفحه
     ========================================================= */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    } else if (currentPath === "" && href === "index.html") {
      link.classList.add("active");
    }
  });

  /* =========================================================
     ۴. انیمیشن ظهور عناصر با اسکرول (Scroll Reveal)
     ========================================================= */
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 120; // فاصله بر حسب پیکسل برای شروع انیمیشن

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // اجرا در زمان بارگذاری اولیه

  /* =========================================================
     ۵. اسکرول نرم (Smooth Scroll) برای لینک‌های داخلی
     ========================================================= */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
});
