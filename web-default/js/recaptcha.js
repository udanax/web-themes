function initRecaptcha() {
    try {
        var document = window.document;
        var callback = 'g_ReCaptchaOnLoad';
        window[callback] = function () {
            [].forEach.call(document.querySelectorAll('.g-recaptcha'), function (recaptcha) {
                if (recaptcha.children.length) {
                    return;
                }
                grecaptcha.render(recaptcha, {sitekey: recaptcha.getAttribute('data-sitekey')});
            });
        };
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = '//www.google.com/recaptcha/api.js?onload=' + callback + '&hl=cs&render=explicit';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    } catch (err) {

    }
}