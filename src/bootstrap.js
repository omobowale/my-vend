// window._ = require("lodash");



try {
    window.Popper = require("popper.js").default;
    window.$ = window.jQuery = require("jquery");
    // window.Chart = require("chart.js");

    require("bootstrap");
} catch (e) {}

