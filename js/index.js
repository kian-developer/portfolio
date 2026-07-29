document.addEventListener("DOMContentLoaded", () => {
  // ۱. منوی همبرگری موبایل
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // ۲. فیلتر داینامیک پروژه‌ها
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });

  // ۳. انیمیشن ظهور و پر شدن درصد مهارت‌ها
  const reveals = document.querySelectorAll(".reveal");
  const progressFills = document.querySelectorAll(".progress-bar-fill");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        element.classList.add("active");
      }
    });

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      const skillsTop = skillsSection.getBoundingClientRect().top;
      if (skillsTop < windowHeight - 100) {
        progressFills.forEach((fill) => {
          fill.style.width = fill.getAttribute("data-progress");
        });
      }
    }
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(
    ".nav-link, .btn-primary, .btn-secondary",
  );

  // ۱. مدیریت منوی موبایل (Hamburger Menu)
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // ۲. پیمایش نرم + بستن منوی موبایل پس از کلیک روی هر لینک
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      // فقط برای لینک‌های داخلی که با # شروع می‌شوند
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // بستن منوی همبرگری در صورت باز بودن
          if (navMenu && navMenu.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
          }

          // پیمایش نرم با محاسبه ارتفاع هدر
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // ۳. انیمیشن نمایش عناصر هنگام اسکرول (Scroll Reveal)
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // اجرای اولیه برای بخش‌های بالای صفحه

  // ۴. سیستم فیلتر پروژه‌ها
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.8)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });
});
