// تنظیمات EmailJS
(function () {
  // Public Key خود را اینجا بگذارید
  emailjs.init("yBHRy-BYChQW6XeTc");
})();

document
  .getElementById("contact-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const statusText = document.getElementById("form-status");
    statusText.style.display = "block";
    statusText.style.color = "#00ffcc";
    statusText.innerText = "در حال ارسال پیام...";

    // ارسال فرم به جیمیل شما
    emailjs.sendForm("service_81xu7b7", "template_zqo520o", this).then(
      function () {
        statusText.style.color = "#00ffcc";
        statusText.innerText = "پیام شما با موفقیت ارسال شد!";
        document.getElementById("contact-form").reset();
      },
      function (error) {
        statusText.style.color = "#ff4a4a";
        statusText.innerText = "خطا در ارسال پیام. لطفاً دوباره تلاش کنید.";
        console.error("EmailJS Error:", error);
      },
    );
  });
