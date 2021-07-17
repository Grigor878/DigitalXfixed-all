// Cookie & Leadmagnet
let element = document.getElementById("pop-up"),
    leadmagnet = document.getElementById("leadmagnet"),
    checkCookie = document.cookie.indexOf("info=");

setTimeout(() => {
    element.classList.add("run");
}, 5000);

setTimeout(() => {
    leadmagnet.classList.add("run-two");
}, 4000);

function closeCookie() {
    element.classList.add("hide");
}

function setCookie() {
    document.cookie = "info=All Cookies; max-age=" + 60 * 60 * 24 * 30;
    alert("You set all cookies");
    element.classList.add("hide");
}

function minCookie() {
    document.cookie = "info=Minimal Cookies; max-age=" + 60 * 60 * 24 * 7;
    alert("You set minimal cookies");
    element.classList.add("hide");
}

function rejectCookie() {
    document.cookie = "info=Reject to set Cookies; max-age=" + 60 * 60 * 24 * 1;
    alert("You reject to set cookies!");
    element.classList.add("hide");
}

checkCookie != -1 ? element.classList.add("hide") : element.classList.remove("hide");

// Leadmagnet cookie
function closeLeadmagnet() {
    leadmagnet.classList.add("hide-two");
}

function submitLeadmagnet() {
    leadmagnet.classList.add("hide-two");
}







//search-bar
//1version
// $(document).ready(function () {
//     $(".click").click(function () {
//         $(".search-box").toggle();
//         // $("input[type='text']").focus();
//     });
// });

//2version
// function myFun() {
//     document.getElementById("search-box").style.display = "block";
// }

//3version
function myFun() {
    var custDiv = document.getElementById("search-box");

    if (custDiv.style.display === "none") {
        custDiv.style.display = "block";
    }

    else {
        custDiv.style.display = "none";
    }
}

function openSearch() {
    var custDiv = document.getElementById("search-box3");

    if (custDiv.style.display === "none") {
        custDiv.style.display = "block";
    }

    else {
        custDiv.style.display = "none";
    }
}

function myFunc() {
    var custDiv = document.getElementById("search-box2");

    if (custDiv.style.display === "none") {
        custDiv.style.display = "block";
    }

    else {
        custDiv.style.display = "none";
    }
}


//Search
function search() {
    var search = (document.getElementById('search').value)
    window.location.replace("search.html")
    console.log(search)
}


//burger & burger activ scroll none
$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});








//Partners slide
$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,  ///7 silde
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1133,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 652,
                settings: {
                    slidesToShow: 3
                }

            },
            {
                breakpoint: 487,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 335,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


//Services Read more
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function aFunction() {
    var x = document.getElementById("myDIVa");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function bFunction() {
    var x = document.getElementById("myDIVb");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function cFunction() {
    var x = document.getElementById("myDIVc");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


//FAQ Accordion code
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


//Workflow hide & show
var li_elements = document.querySelectorAll(".workflow-left ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function () {
        li_elements.forEach(function (li) {
            li.classList.remove("act");
        })
        this.classList.add("act");
        var li_value = this.getAttribute("data-li");
        item_elements.forEach(function (item) {
            item.style.display = "none";
        })

        if (li_value == "o") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "t") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "th") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "f") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "fi") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "s") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "se") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else {
            console.log("");
        }

    });
}


