// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

Vue.component('chart', {
    delimiters: ['[[', ']]'],
    props: ['series', 'user'],
    template: '<div>[[ user.name ]]</div>',
    data() {
        return {
            chart: null
        };
    },
    methods: {
        renderChart() {
            console.warn("RENDERING CHART");
            if (this.chart) {
                this.destroyChart();
            }
            this.chart = Highcharts.chart(this.$el, {
                title: {
                    text: 'Rep: ' + this.user.name
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Performance'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: this.series
            });
        },
        destroyChart() {
            console.warn("CHART DESTROY")
            if (this.chart) {
                this.chart.destroy();
                this.chart = null;
            }
        }
    },
    updated() {
        this.renderChart();
    },
    mounted() {
        this.renderChart();
    },
    beforeDestroy() {
        this.destroyChart();
    }
})

var app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
        chart: null,
        series: [{
            name: 'Probing questions',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Features',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Benefits',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'Close attempts',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }],
        activeUser: null,
        users: [
            {id: 0, name: "Arnold Schwarzenegger"},
            {id: 1, name: "Jerry Brown"},
            {id: 2, name: "Gray Davis"},
            {id: 3, name: "Pete Wilson"},
            {id: 4, name: "George Deukmejian"},
            {id: 5, name: "Ronald Reagan"}
        ]
    },
    created() {
        this.activeUser = this.users[0];
    },
    methods: {
        setActive(user) {
            this.activeUser = user
        }
    }
});
