(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    $("#bt-msg").click(function () {
        var data = $("#form-msg").serializeFormJSON();
        alert(data)
        $.ajax({
            url: '/message',
            type: 'post',
            data: data,
            dataType: 'json',
            success: function (data) {
                console.log(data)
            }
        });
    });
    $('[data-toggle="tooltip"]').tooltip();
})(jQuery);
