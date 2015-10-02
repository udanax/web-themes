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
		script.src = '//www.google.com/recaptcha/api.js?onload=' + callback + '&hl=' + getLang() + '&render=explicit';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(script, s);
	} catch (err) {

	}
}

function getLang() {
	lgParam = getParameterByName('lg');
	return getParameterByName('lg') === null ? "en" : lgParam;
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}