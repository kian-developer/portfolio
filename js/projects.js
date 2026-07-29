document.addEventListener("DOMContentLoaded", () => {
  // دو پروژه برتر و اصلی
  const topProjects = [
    {
      id: 1,
      title: "سامانه آنلاین تحلیل و تصحیح آزمون",
      category: "web",
      desc: "وب‌سایت اختصاصی بررسی و تحلیل آزمون‌ها شامل سیستم ورود کاربران، ثبت نمرات، تحلیل پاسخ‌ها و بازخورد هوشمند.",
      techs: ["HTML5", "CSS3", "JavaScript"],
      demo: "https://example.com", // آدرس پیش‌نمایش در صورت وجود
      github: "https://github.com", // آدرس گیت‌هاب در صورت وجود
    },
    {
      id: 2,
      title: "اپلیکیشن حسابداری هوشمند",
      category: "app",
      desc: "نرم‌افزار مدیریت مالی و حسابداری توسعه‌یافته با معماری ViewModel، تمرکز بر کارایی بالا و رابط کاربری آسان.",
      techs: ["Kotlin", "Android", "Architecture Components"],
      demo: "", // خالی بودن باعث عدم نمایش دکمه پیش‌نمایش می‌شود
      github: "https://github.com",
    },
  ];

  const projectsGrid = document.getElementById("projects-grid");

  const renderProjects = (filter = "all") => {
    projectsGrid.innerHTML = "";

    topProjects.forEach((p) => {
      if (filter !== "all" && p.category !== filter) return;

      const categoryNames = { web: "وب و فرانت‌اند", app: "نرم‌افزار" };
      const categoryIcons = {
        web: "fa-laptop-code",
        app: "fa-mobile-screen-button",
      };

      // ایجاد هوشمند دکمه‌ها
      let linksHTML = "";
      if (p.demo) {
        linksHTML += `<a href="${p.demo}" target="_blank" class="btn-project-link"><i class="fas fa-external-link-alt"></i> مشاهده پیش‌نمایش</a>`;
      }
      if (p.github) {
        linksHTML += `<a href="${p.github}" target="_blank" class="btn-project-github"><i class="fab fa-github"></i> سورس‌کد گیت‌هاب</a>`;
      }

      const techBadges = p.techs.map((t) => `<span>${t}</span>`).join("");

      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-category", p.category);

      card.innerHTML = `
        <div class="project-image">
          <i class="fas ${categoryIcons[p.category]} project-icon"></i>
          <span class="category-tag">${categoryNames[p.category]}</span>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="tech-stack">${techBadges}</div>
          <div class="project-links">${linksHTML}</div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // فعال‌سازی افکت 3D Tilt
    if (window.VanillaTilt) {
      VanillaTilt.init(document.querySelectorAll(".project-card"), {
        max: 12,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
      });
    }
  };

  renderProjects();

  // کنترل فیلتر پروژه‌ها
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });
});
