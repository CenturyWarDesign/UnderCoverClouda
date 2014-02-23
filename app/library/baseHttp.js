Library.base = sumeru.Library.create(
	function(exports) {
		exports.formatDate = function() {
			console.log("libbery");
		};
		exports.formatDate2 = function(getCallback) {
			console.log(Library.config.site_url());
		};
		exports.getsign = function() {
			var clientUId = sumeru.clientId;
			var jsondata = {
				"uid": clientUId,
				"platform": "baiduCloud"
			}
			return JSON.stringify(jsondata);
		}
		exports.getUrl = function(command) {
			var url = Library.config.site_url() + "?cmd=" + command + "&sign=" + Library.base.getsign();
			return url;
		}
		//在这里进行初始化handlebars
		exports.initHandlebars = function() {
			Handlebars.registerHelper('link', function(text, url) {
				return new Handlebars.SafeString(
					"<a href='" + url + "'>" + text + "</a>"
				);
			});
		}
	});