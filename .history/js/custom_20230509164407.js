$(document).ready(function () {
    $(".nav-item a").click(function () {
        $(".nav-item a").removeClass("active");
        $(this).addClass("active");
        var a = $(this).text();
        console.log(a)
    })
    $("a.iframe").fancybox();
})
