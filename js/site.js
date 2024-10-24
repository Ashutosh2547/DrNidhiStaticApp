$(document).ready(function () {
  // Attach event listener to the button

  $("#openIframeBtn").on("click", function () {
    // URL to be loaded in the iframe
    alert("hello");

    var iframeUrl = "https://subdomain.drnidhibhatt.in";

    // Check if iframe is already present, otherwise create and append

    if ($("#iframeContainer iframe").length === 0) {
      var iframe = $("<iframe>", {
        src: iframeUrl,

        width: "600px",

        height: "400px",

        frameborder: "0",
      });

      $("#iframeContainer").append(iframe);
    }
  });
});
