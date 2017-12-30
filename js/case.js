function Case(container,data){
    this.container = container;
    this.data = data;
    this.init();
}
$.extend(Case.prototype,{
    init(){
        this.load();
        this.enter();
        this.leave();
    },
    load(){
        this.container.show();
        this.data.forEach(item => {
            this.item = $(this.getItem(item));
            this.list = this.container.find(".w_case_list");
            this.list.append(this.item);
        });
    },
    getItem(item){
        return `
            <div class="card_box">
                <div class="card_img">
                    <a target="_blank" href="${item.href}">
                        <img src="https://picsum.photos/g/210/158/?image=${Math.round(Math.random() * 1084)}&gravity=east" alt="">
                    </a>
                </div>
                <a target="_blank" class="card_title" href="${item.href}">${item.name}</a>
            </div>
        `;
    },
    enter(){
        this.list.on("mouseenter", ".card_box", function() {
            $(this).children().fadeTo(0, 0.8);
        });
    },
    leave(){
        this.list.on("mouseleave", ".card_box", function() {
            $(this).children().fadeTo(0, 1);
        });
    }
})