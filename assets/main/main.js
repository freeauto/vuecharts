// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

var app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
        activeId: 0,
        users: [
            {id: 0, name: "Arnold Schwarzenegger"},
            {id: 1, name: "Jerry Brown"},
            {id: 2, name: "Gray Davis"},
            {id: 3, name: "Pete Wilson"},
            {id: 4, name: "George Deukmejian"},
            {id: 5, name: "Ronald Reagan"}
        ]
    },
    methods: {
        setActive(id) {
            this.activeId = id
        }
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
})
