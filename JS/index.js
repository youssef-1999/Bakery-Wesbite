let aboutSection = $(".home_section").offset().top
console.log(aboutSection);

$(window).scroll(function () {
    let windowOffset = $(window).scrollTop(); // Add parentheses after scrollTop

    if (windowOffset > aboutSection-100) {
        $(".navbar").css({ backgroundColor: "rgba(0,0,0,0.5)" });
        $(".navbar").css({ paddingRight: "30px" });
        $(".custom_link").css({ color: "white" });
        $(".navbar .navbar-brand").css({ color: "white" });
        $("#iconTop").fadeIn(2000)
    } else {
        $(".navbar").css({ backgroundColor: "black" }); // Reset background color when not scrolled past
        $(".navbar").css({ padding: "0" });
        $(".custom_link").css({ color: "white" });
        $(".navbar .navbar-brand").css({ color: "white" });

        $("#iconTop").fadeOut(2000)
    }
});

$("#iconTop").click(function () {
     $("html,body").animate({scrollTop:"0"},1000); // Add parentheses after scrollTop

})


//Behavior Scroll///
$(".nav-item a").click(function (e) {
    let clickedLink=$(e.target).attr("href")
let sectionOffset = $(clickedLink).offset().top;

    console.log(sectionOffset);
})
