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
	lgParam = getParameterByName("lg");
	return lgParam === null ? "cs" : lgParam;
}

function getParameterByName(name) {
	var scripts = document.getElementsByTagName("script")
	var params = getParams(scripts[scripts.length - 1].src);
	return params[name];
}

function getParams(url) {
	var regex = /[?&]([^=#]+)=([^&#]*)/g,
			params = {},
			match;
	while (match = regex.exec(url)) {
		params[match[1]] = match[2];
	}
	return params;
}

console.log(getLang());
console.log(getParameterByName("lg"));
