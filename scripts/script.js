$(document).ready(function () {
  // Toggle dropdown
  $("#logo").on("click", function (e) {
    e.stopPropagation();
    $(this).toggleClass("show");
  });
  $("#main-menu").on("click", function (e) {
    e.stopPropagation();
    $(this).toggleClass("show");
  });

  // Close dropdown if clicked outside
  $(document).on("click", function (e) {
    const $target = $(e.target);
    if (
      !$target.closest("#logo").length &&
      !$target.closest("#main-menu").length &&
      !$target.closest(".dropdown-menu").length
    ) {
      $("#logo").removeClass("show");
      $("#main-menu").removeClass("show");
    }
  });

  $("#logo .dropdown-menu li").on("click", function () {
    const selectedLang = $(this).data("lang"); // 'en' or 'fr'
    const currentUrl = window.location.pathname; // ex: /en/iron-tracker.html

    // Split URL into array
    const parts = currentUrl.split("/").filter(Boolean); // ['en', 'iron-tracker.html']

    if (parts.length > 0) {
      parts[0] = selectedLang; // Change language
      const newPath = "/" + parts.join("/");
      window.location.href = newPath;
    }
  });
});
