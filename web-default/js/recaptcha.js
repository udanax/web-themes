function RCgetParameterByName(name) {
	var scripts = document.getElementsByTagName("script")
	var params = RCgetParams(scripts[scripts.length - 1].src);
	return params[name];
}

function RCgetParams(url) {
	var regex = /[?&]([^=#]+)=([^&#]*)/g,
			params = {},
			match;
	while (match = regex.exec(url)) {
		params[match[1]] = match[2];
	}
	return params;
}

var RCLang = (function () {
	lgParam = RCgetParameterByName("lg");
	return lgParam === null ? "cs" : lgParam;
});

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
		script.src = '//www.google.com/recaptcha/api.js?onload=' + callback + '&hl=' + RCLang + '&render=explicit';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(script, s);
	} catch (err) {

	}
}
