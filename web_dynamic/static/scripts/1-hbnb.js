$('document').ready(function () {
    let selected = {};
   $('div.amenities input[type="checkbox"]').change(function () {
        if ($(this).checked) {
            selected[$(this).data('id')] = $(this).data('name');
        } else {
            delete selected[$(this).data('id')];
        }
        $('div.amenity h4').text(Object.values(selected).join(', '));
   });
});