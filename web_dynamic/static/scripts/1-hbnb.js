$('document').ready(function () {
    let selected = {};
   $('div.amenities input[type="checkbox"]').change(function () {
        if ($(this).checked) {
            selected[$(this).data('id')] = $(this).data('name');
        } else {
            delete selected[$(this).data('id')];
        }
        $('div.amenities h4').html(function () {
            let amenities = [];
            Object.keys(selected).forEach(function (key) {
            amenities.push(selected[key]);
            });
            if (amenities.length === 0) {
            return ('&nbsp');
            }
            return (amenities.join(', '));
        });
   });
});