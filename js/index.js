Array.prototype.forEach.call(document.querySelectorAll('[data-ripple]'),
    function(element) {
        new RippleEffect(element);
    });
$("#btn_w").click(function() {
    setTimeout(() => {
        $("#w_msg").hide();
        $("#w_case").show();
        obj.forEach(function(item) {
            $(".w_case_list").append(`<div class="card_box">
                                    <div class="card_img">
                                        <a target="_blank" href="${item.href}"><img src="https://picsum.photos/g/210/158/?image=${Math.round(Math.random() * 1084)}&gravity=east" alt=""></a>
                                    </div>
                                    <a target="_blank" class="card_title" href="${item.href}">${item.name}</a>
                                </div>`);
        });
    }, 500)
});
$(".w_case_list").on("mouseenter", ".card_box", function() {
    $(this).children().fadeTo(0, 0.8);
});
$(".w_case_list").on("mouseleave", ".card_box", function() {
    $(this).children().fadeTo(0, 1);
});
$(".btn_close").click(function() {
    $("#w_case").hide();
    $("#w_msg").show();
});