function Index() {
    this.btn = $("#btn_w");
    this.msg = $("#w_msg");
    this.case = $("#w_case");
    this.back = $(".b_t_top");
    this.btnClose = $(".btn_close");
    this.init();
}
$.extend(Index.prototype, {
    init() {
        this.initRipple();
        this.hide();
        this.backTop();
        this.close();
    },
    initRipple() {
        Array.prototype.forEach.call(document.querySelectorAll('[data-ripple]'),
            function(element) {
                new RippleEffect(element);
            });
    },
    hide() {
        this.btn.click(() => {
            setTimeout(() => {
                this.msg.hide();
                new Case(this.case, obj);
            }, 500)
        });
    },
    backTop() {
        $(window).scroll(() => {
            if ($(document).scrollTop() > 700) {
                $(".back_top").show();
            } else {
                $(".back_top").hide();
            }
        });
        this.back.click(() => {
            $("body,html").animate({
                "scrollTop": 0
            }, 1000);
        });
    },
    close() {
        this.btnClose.click(() => {
            this.case.hide();
            this.msg.show();
        });
    }
});