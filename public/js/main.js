$(function () {
    $("#range").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        type: 'double',
        step: 1,
        prefix: "$",
        grid: false,
        grid_num: 1,
        force_edges:true,
    });
});