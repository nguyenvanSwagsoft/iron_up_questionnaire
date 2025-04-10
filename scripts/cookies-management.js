function setCookie(name, value, days = 60) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function acceptAllCookies() {
  setCookie("cookies-management", "accept-all");
  toggleConsentModal();
}

function rejectAllCookies() {
  setCookie("cookies-analytics", "false");
  setCookie("cookies-management", "reject-all");
  toggleConsentModal();
}

function toggleConsentModal() {
  const $popup = $(".consent-preferences-modal");

  if ($popup.hasClass("show")) {
    $popup.removeClass("show").hide();
  } else {
    $popup.addClass("show").show();
  }
}

$(document).ready(function () {
  // Open modal
  $("#cookies-management").on("click", function (e) {
    e.preventDefault();

    // Update Analytics
    const analytics = getCookie("cookies-analytics") === "true";
    const isChecked =
      getCookie("cookies-analytics") === null ? true : analytics;
    if (getCookie("cookies-analytics") === null)
      setCookie("cookies-analytics", "true");
    $("#toggle-analytics").prop("checked", isChecked);

    toggleConsentModal();
  });

  // Close modal
  $(".consent-preferences-modal .btn-close").on("click", function () {
    toggleConsentModal();
  });

  // Analytics
  $("#toggle-analytics").on("change", function () {
    console.log("first");
    const isChecked = $(this).is(":checked");
    setCookie("cookies-analytics", isChecked ? "true" : "false");
  });

  // Action modal
  $(".btn-accept-all").on("click", function () {
    acceptAllCookies();
  });
  $(".btn-reject-all").on("click", function () {
    rejectAllCookies();
  });
});
