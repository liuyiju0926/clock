var labApp = new Vue({
    el: "#app",
    data: {
        degree: {
            hour,
            min,
            sec
        }
    },
    mounted: function() {
        var labApp = this;
        setInterval(function() {
            labApp.clock()
        },1000);
    },
    methods: {
        clock: function() {
            var d = new Date();
            var hour = d.getHours();
            var min = d.getMinutes();
            var sec = d.getSeconds();

            this.degree.sec = sec * 360 / 60 + 180;
            this.degree.min = min * 360 / 60 + (6 * sec / 60);
            this.degree.hour = hour * 360 / 12 + (30 * min / 60) - 90;
        }
    }
})