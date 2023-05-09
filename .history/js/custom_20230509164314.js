$(document).ready(function () {
    $(".nav-item a").click(function () {
        $(".nav-item a").removeClass("active");
        $(this).addClass("active");
    })
    $("a.iframe").fancybox();
})
