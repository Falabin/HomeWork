$(document).ready(() => {
    (function () {
        'use strict'


        $('#submit').click(function () {
            $('.error-input').hide();
            let name = $('#name')
            let address = $('#address')
            let phone = $('#phone')
            let hasError = false;
            let loader = $('#loader');
            let popupText = $('#popup-text');
            name.css('border-color', 'rgb(185, 145, 80)');
            address.css('border-color', 'rgb(185, 145, 80)');
            phone.css('border-color', 'rgb(185, 145, 80)');

            if (!name.val()) {
                name.css('border-color', 'red');
                name.siblings('.error-input').show()
                hasError = true;
            }
            if (!address.val()) {
                address.css('border-color', 'red');
                address.siblings('.error-input').show();
                hasError = true;
            }
            if (!phone.val()) {
                phone.css('border-color', 'red');
                phone.siblings('.error-input').show();
                hasError = true;
            }
            if (!hasError) {
                loader.css('display', 'flex');

                $.ajax({
                    method: "POST",
                    url: 'https://itlogia.ru/test/checkout',
                    data: {name: name.val(), address: address.val(), phone: phone.val()}
                })
                    .done(function (message) {
                        loader.hide();
                        popupText.css('display', 'flex');
                        console.log(message);
                        if (!message.success) {
                            alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                            popupText.hide();
                        }
                    });
            }
        });

    }())
});