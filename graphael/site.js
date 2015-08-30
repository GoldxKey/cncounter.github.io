(function(r) {
	var doc = document,
		getbyid = "getElementById",
		getbyname = "getElementsByTagName",
		quotes = doc[getbyid]("quotes");
	if (quotes) {
		window.twitterQuotes = function(json) {
			function linking(text) {
				text = text.replace(/(^|\s)(?:#([\d\w_]+)|@([\d\w_]{1,15}))|(https?:\/\/[^\s"]+[\d\w_\-\/])|([^\s:@"]+@[^\s:@"]*)/gi, function(A, B, C, w, y, x) {
					var z = '<a href="mailto:' + x + '">' + x + "</a>";
					C && (z = B + '<a href="http://search.twitter.com/search?q=%23' + C + '">#' + C + "</a>");
					w && (z = B + '<a href="http://twitter.com/' + w + '">@' + w + "</a>");
					y && (z = '<a href="' + encodeURI(decodeURI(y.replace(/<[^>]*>/g, ""))) + '">' + y + "</a>");
					return z;
				});
				return text;
			}
			var qelem = quotes[getbyname]("ol")[0],
				s, t;
			quotes.style.display = "block";
			qelem.innerHTML = "";
			if (json.results) {
				for (var i = 0, len = json.results.length; i < len; i++) {
					s = doc.createElement("li");
					t = json.results[i];
					s.innerHTML = '<a href="http://twitter.com/' + t.from_user + '"><img src="' + t.profile_image_url + '" width="16" height="16" alt="avatar" title="@' + t.from_user + '" class="avatar"></a>' + linking(t.text);
					qelem.appendChild(s);
				}
			}
		};
		var script = doc.createElement("script");
		script.src = "http://search.twitter.com/search.json?callback=twitterQuotes&q=raphaeljs&lang=en&rpp=10";
		doc.body.appendChild(script);
	}
	var icons = {
		download: "M24.345,13.904c0.019-0.195,0.03-0.392,0.03-0.591c0-3.452-2.798-6.25-6.25-6.25c-2.679,0-4.958,1.689-5.847,4.059c-0.589-0.646-1.429-1.059-2.372-1.059c-1.778,0-3.219,1.441-3.219,3.219c0,0.21,0.023,0.415,0.062,0.613c-2.372,0.391-4.187,2.436-4.187,4.918c0,2.762,2.239,5,5,5h3.404l-0.707-0.707c-0.377-0.377-0.585-0.879-0.585-1.413c0-0.533,0.208-1.035,0.585-1.412l0.556-0.557c0.4-0.399,0.937-0.628,1.471-0.628c0.027,0,0.054,0,0.08,0.002v-0.472c0-1.104,0.898-2.002,2-2.002h3.266c1.103,0,2,0.898,2,2.002v0.472c0.027-0.002,0.054-0.002,0.081-0.002c0.533,0,1.07,0.229,1.47,0.63l0.557,0.552c0.78,0.781,0.78,2.05,0,2.828l-0.706,0.707h2.403c2.762,0,5-2.238,5-5C28.438,16.362,26.672,14.332,24.345,13.904z M21.033,20.986l-0.556-0.555c-0.39-0.389-0.964-0.45-1.276-0.137c-0.312,0.312-0.568,0.118-0.568-0.432v-1.238c0-0.55-0.451-1-1-1h-3.265c-0.55,0-1,0.45-1,1v1.238c0,0.55-0.256,0.744-0.569,0.432c-0.312-0.313-0.887-0.252-1.276,0.137l-0.556,0.555c-0.39,0.389-0.39,1.024-0.001,1.413l4.328,4.331c0.194,0.194,0.451,0.291,0.707,0.291s0.512-0.097,0.707-0.291l4.327-4.331C21.424,22.011,21.423,21.375,21.033,20.986z",
		documentation: "M23.024,5.673c-1.744-1.694-3.625-3.051-5.168-3.236c-0.084-0.012-0.171-0.019-0.263-0.021H7.438c-0.162,0-0.322,0.063-0.436,0.18C6.889,2.71,6.822,2.87,6.822,3.033v25.75c0,0.162,0.063,0.317,0.18,0.435c0.117,0.116,0.271,0.179,0.436,0.179h18.364c0.162,0,0.317-0.062,0.434-0.179c0.117-0.117,0.182-0.272,0.182-0.435V11.648C26.382,9.659,24.824,7.49,23.024,5.673zM25.184,28.164H8.052V3.646h9.542v0.002c0.416-0.025,0.775,0.386,1.05,1.326c0.25,0.895,0.313,2.062,0.312,2.871c0.002,0.593-0.027,0.991-0.027,0.991l-0.049,0.652l0.656,0.007c0.003,0,1.516,0.018,3,0.355c1.426,0.308,2.541,0.922,2.645,1.617c0.004,0.062,0.005,0.124,0.004,0.182V28.164z",
		opensource: "M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM20.729,7.375c0.933,0,1.688,1.483,1.688,3.312S21.661,14,20.729,14c-0.932,0-1.688-1.483-1.688-3.312S19.798,7.375,20.729,7.375zM11.104,7.375c0.932,0,1.688,1.483,1.688,3.312S12.037,14,11.104,14s-1.688-1.483-1.688-3.312S10.172,7.375,11.104,7.375zM16.021,26c-2.873,0-5.563-1.757-7.879-4.811c2.397,1.565,5.021,2.436,7.774,2.436c2.923,0,5.701-0.98,8.215-2.734C21.766,24.132,18.99,26,16.021,26z",
		donate: "M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466z M17.255,23.88v2.047h-1.958v-2.024c-3.213-0.44-4.621-3.08-4.621-3.08l2.002-1.673c0,0,1.276,2.223,3.586,2.223c1.276,0,2.244-0.683,2.244-1.849c0-2.729-7.349-2.398-7.349-7.459c0-2.2,1.738-3.785,4.137-4.159V5.859h1.958v2.046c1.672,0.22,3.652,1.1,3.652,2.993v1.452h-2.596v-0.704c0-0.726-0.925-1.21-1.959-1.21c-1.32,0-2.288,0.66-2.288,1.584c0,2.794,7.349,2.112,7.349,7.415C21.413,21.614,19.785,23.506,17.255,23.88z",
		"what-is-it": "M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM17.328,24.371h-2.707v-2.596h2.707V24.371zM17.328,19.003v0.858h-2.707v-1.057c0-3.19,3.63-3.696,3.63-5.963c0-1.034-0.924-1.826-2.134-1.826c-1.254,0-2.354,0.924-2.354,0.924l-1.541-1.915c0,0,1.519-1.584,4.137-1.584c2.487,0,4.796,1.54,4.796,4.136C21.156,16.208,17.328,16.627,17.328,19.003z",
		demo: "M23.043,4.649 22.639,2.337 21.049,4.064 18.726,3.735 19.877,5.78 18.845,7.888 21.146,7.425 22.832,9.058 23.103,6.726 25.177,5.627M26.217,18.198 26.035,16.948 25.153,17.854 23.908,17.64 24.496,18.758 23.908,19.876 25.153,19.662 26.035,20.567 26.217,19.317 27.35,18.758M4.92,7.672 5.868,7.3 6.712,7.869 6.65,6.853 7.453,6.226 6.467,5.97 6.118,5.013 5.571,5.872 4.553,5.908 5.201,6.694M10.439,10.505 11.46,9.409 12.941,9.628 12.214,8.319 12.881,6.978 11.411,7.265 10.341,6.216 10.16,7.703 8.832,8.396 10.19,9.028M17.234,12.721c-0.588-0.368-1.172-0.618-1.692-0.729c-0.492-0.089-1.039-0.149-1.425,0.374L2.562,30.788h6.68l9.669-15.416c0.303-0.576,0.012-1.041-0.283-1.447C18.303,13.508,17.822,13.09,17.234,12.721z M13.613,21.936c-0.254-0.396-0.74-0.857-1.373-1.254c-0.632-0.396-1.258-0.634-1.726-0.69l4.421-7.052c0.064-0.013,0.262-0.021,0.543,0.066c0.346,0.092,0.785,0.285,1.225,0.562c0.504,0.313,0.908,0.677,1.133,0.97c0.113,0.145,0.178,0.271,0.195,0.335c0.002,0.006,0.004,0.011,0.004,0.015L13.613,21.936z",
		"how-to-use-it": "M26.834,14.693c1.816-2.088,2.181-4.938,1.193-7.334l-3.646,4.252l-3.594-0.699L19.596,7.45l3.637-4.242c-2.502-0.63-5.258,0.13-7.066,2.21c-1.907,2.193-2.219,5.229-1.039,7.693L5.624,24.04c-1.011,1.162-0.888,2.924,0.274,3.935c1.162,1.01,2.924,0.888,3.935-0.274l9.493-10.918C21.939,17.625,24.918,16.896,26.834,14.693z",
		github: "M26.974,16.514l3.765-1.991c-0.074-0.738-0.217-1.454-0.396-2.157l-4.182-0.579c-0.362-0.872-0.84-1.681-1.402-2.423l1.594-3.921c-0.524-0.511-1.09-0.977-1.686-1.406l-3.551,2.229c-0.833-0.438-1.73-0.77-2.672-0.984l-1.283-3.976c-0.364-0.027-0.728-0.056-1.099-0.056s-0.734,0.028-1.099,0.056l-1.271,3.941c-0.967,0.207-1.884,0.543-2.738,0.986L7.458,4.037C6.863,4.466,6.297,4.932,5.773,5.443l1.55,3.812c-0.604,0.775-1.11,1.629-1.49,2.55l-4.05,0.56c-0.178,0.703-0.322,1.418-0.395,2.157l3.635,1.923c0.041,1.013,0.209,1.994,0.506,2.918l-2.742,3.032c0.319,0.661,0.674,1.303,1.085,1.905l4.037-0.867c0.662,0.72,1.416,1.351,2.248,1.873l-0.153,4.131c0.663,0.299,1.352,0.549,2.062,0.749l2.554-3.283C15.073,26.961,15.532,27,16,27c0.507,0,1.003-0.046,1.491-0.113l2.567,3.301c0.711-0.2,1.399-0.45,2.062-0.749l-0.156-4.205c0.793-0.513,1.512-1.127,2.146-1.821l4.142,0.889c0.411-0.602,0.766-1.243,1.085-1.905l-2.831-3.131C26.778,18.391,26.93,17.467,26.974,16.514z M20.717,21.297l-1.785,1.162l-1.098-1.687c-0.571,0.22-1.186,0.353-1.834,0.353c-2.831,0-5.125-2.295-5.125-5.125c0-2.831,2.294-5.125,5.125-5.125c2.83,0,5.125,2.294,5.125,5.125c0,1.414-0.573,2.693-1.499,3.621L20.717,21.297z",
		graphael: "M28.832,16.104c0-1.477-0.574-2.863-1.617-3.905l-7.002-7.001L20.211,5.2c-1.027-1.03-2.445-1.62-3.9-1.62c-1.455,0-2.871,0.59-3.9,1.621l-0.002-0.002l-7,7c-1.033,1.031-1.619,2.445-1.619,3.905c0,1.458,0.586,2.872,1.619,3.903l6.312,6.312c0.253,0.284,0.519,0.55,0.8,0.794c1.049,0.994,2.463,1.54,3.908,1.51c1.417-0.028,2.783-0.612,3.785-1.615l6.811-6.811c0.018-0.017,0.035-0.034,0.053-0.052l0.137-0.138c0.27-0.268,0.49-0.564,0.713-0.868l-0.002-0.002C28.516,18.244,28.832,17.198,28.832,16.104zM23.08,21.252l-0.051,0.006l-0.955,0.974c0.01,0-3.305,3.332-3.305,3.332c-1.121,1.119-2.906,1.337-4.261,0.511l0.002-0.002c-0.213-0.141-0.414-0.299-0.61-0.467c-0.016-0.015-0.032-0.027-0.047-0.042l-3.024-3.024h-0.001l-3.976-3.976c-1.34-1.339-1.342-3.581,0-4.921l2.689-2.689l0.052-0.005l0.956-0.973c-0.01,0,3.303-3.332,3.303-3.332c1.121-1.12,2.908-1.337,4.261-0.511v0.002c0.211,0.14,0.414,0.299,0.609,0.467c0.016,0.015,0.031,0.028,0.047,0.042l3.025,3.024l0,0l3.975,3.976c0.389,0.388,0.66,0.852,0.824,1.348l-2.617,0.008c-0.537-3.754-3.764-6.64-7.666-6.64c-4.277,0-7.744,3.467-7.745,7.746c0.001,4.277,3.468,7.743,7.745,7.744c3.919-0.001,7.156-2.911,7.671-6.688l2.635-0.009c-0.16,0.52-0.441,1.007-0.846,1.412L23.08,21.252zM16.311,17.184c0.002,0,0.002,0,0.004,0l5.476-0.018c-0.5,2.573-2.76,4.516-5.48,4.52c-3.084-0.005-5.578-2.5-5.584-5.582c0.006-3.084,2.5-5.579,5.584-5.584c2.707,0.005,4.96,1.929,5.472,4.485l-5.476,0.018c-0.596,0.002-1.078,0.488-1.076,1.084C15.233,16.702,15.715,17.184,16.311,17.184z",
		icons: "M15.999,22.77l-8.884,6.454l3.396-10.44l-8.882-6.454l10.979,0.002l2.918-8.977l0.476-1.458l3.39,10.433h10.982l-8.886,6.454l3.397,10.443L15.999,22.77L15.999,22.77z",
		twitter: "M23.295,22.567h-7.213c-2.125,0-4.103-2.215-4.103-4.736v-1.829h11.232c1.817,0,3.291-1.469,3.291-3.281c0-1.813-1.474-3.282-3.291-3.282H11.979V6.198c0-1.835-1.375-3.323-3.192-3.323c-1.816,0-3.29,1.488-3.29,3.323v11.633c0,6.23,4.685,11.274,10.476,11.274h7.211c1.818,0,3.318-1.463,3.318-3.298S25.112,22.567,23.295,22.567z",
		"t-shirts": "M20.099,4.039c-0.68,1.677-2.319,2.862-4.239,2.862c-1.921,0-3.56-1.185-4.24-2.862L1.238,8.442l2.921,6.884l3.208-1.361V28h17.099V14.015l3.093,1.312l2.921-6.884L20.099,4.039z M21.828,18.776l-4.552,4.552c-0.781,0.781-2.047,0.781-2.828,0l-4.464-4.463c-0.781-0.781-0.781-2.048,0-2.829l4.552-4.552c0.781-0.781,2.048-0.781,2.829,0l4.464,4.463C22.61,16.729,22.609,17.995,21.828,18.776z",
		quotes: "M14.505,5.873c-3.937,2.52-5.904,5.556-5.904,9.108c0,1.104,0.192,1.656,0.576,1.656l0.396-0.107c0.312-0.12,0.563-0.18,0.756-0.18c1.128,0,2.07,0.411,2.826,1.229c0.756,0.82,1.134,1.832,1.134,3.037c0,1.157-0.408,2.14-1.224,2.947c-0.816,0.807-1.801,1.211-2.952,1.211c-1.608,0-2.935-0.661-3.979-1.984c-1.044-1.321-1.565-2.98-1.565-4.977c0-2.259,0.443-4.327,1.332-6.203c0.888-1.875,2.243-3.57,4.067-5.085c1.824-1.514,2.988-2.272,3.492-2.272c0.336,0,0.612,0.162,0.828,0.486c0.216,0.324,0.324,0.606,0.324,0.846L14.505,5.873zM27.465,5.873c-3.937,2.52-5.904,5.556-5.904,9.108c0,1.104,0.192,1.656,0.576,1.656l0.396-0.107c0.312-0.12,0.563-0.18,0.756-0.18c1.104,0,2.04,0.411,2.808,1.229c0.769,0.82,1.152,1.832,1.152,3.037c0,1.157-0.408,2.14-1.224,2.947c-0.816,0.807-1.801,1.211-2.952,1.211c-1.608,0-2.935-0.661-3.979-1.984c-1.044-1.321-1.565-2.98-1.565-4.977c0-2.284,0.449-4.369,1.35-6.256c0.9-1.887,2.256-3.577,4.068-5.067c1.812-1.49,2.97-2.236,3.474-2.236c0.336,0,0.612,0.162,0.828,0.486c0.216,0.324,0.324,0.606,0.324,0.846L27.465,5.873z",
		discuss: "M15.985,5.972c-7.563,0-13.695,4.077-13.695,9.106c0,2.877,2.013,5.44,5.147,7.108c-0.446,1.479-1.336,3.117-3.056,4.566c0,0,4.015-0.266,6.851-3.143c0.163,0.04,0.332,0.07,0.497,0.107c-0.155-0.462-0.246-0.943-0.246-1.443c0-3.393,3.776-6.05,8.599-6.05c3.464,0,6.379,1.376,7.751,3.406c1.168-1.34,1.847-2.892,1.847-4.552C29.68,10.049,23.548,5.972,15.985,5.972zM27.68,22.274c0-2.79-3.401-5.053-7.599-5.053c-4.196,0-7.599,2.263-7.599,5.053c0,2.791,3.403,5.053,7.599,5.053c0.929,0,1.814-0.116,2.637-0.319c1.573,1.597,3.801,1.744,3.801,1.744c-0.954-0.804-1.447-1.713-1.695-2.534C26.562,25.293,27.68,23.871,27.68,22.274z"
	},
		logo = ["M49.973,94.128c-5.212,0-10.113-2.029-13.799-5.717l-24.75-24.75c-3.69-3.685-5.723-8.587-5.723-13.802c0-5.216,2.033-10.119,5.724-13.806l24.75-24.749c3.686-3.687,8.585-5.715,13.798-5.715c5.212,0,10.113,2.028,13.8,5.714l24.749,24.752c3.69,3.683,5.725,8.586,5.725,13.803c0,5.217-2.034,10.119-5.726,13.805L63.772,88.411C60.086,92.099,55.185,94.128,49.973,94.128L49.973,94.128z", "M33.014,23.398c0-9.366,7.593-16.959,16.959-16.959c9.367,0,16.959,7.593,16.959,16.959c0,9.367-7.592,16.959-16.959,16.959C40.606,40.358,33.014,32.765,33.014,23.398", "M93.816,61.314c2.23-3.371,3.43-7.32,3.43-11.455c0-5.571-2.172-10.806-6.112-14.738L64.707,8.691l-0.01,0.01c-3.771-3.777-8.979-6.117-14.725-6.117S39.019,4.925,35.249,8.702L35.24,8.692L8.813,35.118c-3.941,3.937-6.112,9.172-6.112,14.741c0,5.568,2.17,10.803,6.11,14.737l23.829,23.829c0.955,1.072,1.959,2.075,3.017,2.997c3.885,3.681,8.943,5.705,14.315,5.705c5.565,0,10.799-2.167,14.734-6.104l25.71-25.709c0.065-0.064,0.13-0.13,0.195-0.195l0.521-0.52c0.993-0.991,1.873-2.066,2.635-3.207c0.018-0.025,0.037-0.049,0.056-0.074L93.816,61.314z M89.535,49.859c0,2.592-0.752,5.066-2.144,7.184c-0.835,1.14-1.706,2.136-2.604,2.997l-0.064,0.064c-4.227,4.021-9.003,5.16-13.056,5.16c-2.23,0-4.243-0.346-5.825-0.745c-9.263-2.34-19.332-10.311-23.94-21.936c2.483,1.049,5.21,1.629,8.07,1.629c10.747,0,19.616-8.187,20.702-18.65l15.009,15.008C88.167,43.053,89.535,46.351,89.535,49.859z M49.973,10.294c7.227,0,13.104,5.879,13.104,13.104c0,7.226-5.878,13.105-13.104,13.105c-7.225,0-13.103-5.879-13.103-13.105C36.87,16.173,42.748,10.294,49.973,10.294z M14.262,59.146c-2.483-2.481-3.851-5.779-3.851-9.286c0-3.508,1.367-6.806,3.85-9.286l10.154-10.155c-2.65,9.022-3.788,18.516-3.178,27.617c0.219,3.271,0.671,6.409,1.321,9.404L14.262,59.146z M31.621,33.206c2.23,17.449,16.042,34.672,32.333,38.789c2.654,0.67,5.256,1,7.773,1c0.036,0,0.073-0.003,0.109-0.003l-12.58,12.581c-2.481,2.479-5.778,3.845-9.284,3.845c-2.441,0-4.773-0.676-6.805-1.914l0.004-0.007c-0.8-0.53-1.562-1.129-2.303-1.763c-0.058-0.057-0.12-0.104-0.177-0.161l-2.542-2.542c-5.227-6.001-8.514-14.93-9.221-25.51C28.393,49.515,29.354,41.167,31.621,33.206"],
		fill = {
		fill: "#333",
		stroke: "none"
    },
		span = "span",
		l;
	for (var name in icons) {
		l = doc[getbyid](name);
		l && (l = l[getbyname](span)[0]);
		l && r(l, 32, 32).path(icons[name]).attr(fill);
	}
	l = doc[getbyid]("sencha");
	if (l) {
	    var R = r(l[getbyname](span)[0], 32, 32);
	    R.set( R.path("M0,109.718c0-43.13,24.815-80.463,60.955-98.499L82.914,0C68.122,7.85,58.046,23.406,58.046,41.316c0,9.64,2.916,18.597,7.915,26.039c-7.44,18.621-11.77,37.728-13.228,56.742c-9.408,4.755-20.023,7.423-31.203,7.424c-1.074,0-2.151-0.025-3.235-0.075c-5.778-0.263-11.359-1.229-16.665-2.804L0,109.718zM157.473,285.498c0-0.015,0-0.031,0-0.047C157.473,285.467,157.473,285.482,157.473,285.498M157.473,285.55c0-0.014,0-0.027,0-0.04C157.473,285.523,157.473,285.536,157.473,285.55M157.472,285.604c0-0.015,0.001-0.031,0.001-0.046C157.473,285.574,157.472,285.588,157.472,285.604M157.472,285.653c0-0.012,0-0.024,0-0.037C157.472,285.628,157.472,285.641,157.472,285.653M157.472,285.708c0-0.015,0-0.028,0-0.045C157.472,285.68,157.472,285.694,157.472,285.708M157.472,285.756c0-0.012,0-0.023,0-0.034C157.472,285.733,157.472,285.745,157.472,285.756M157.471,285.814c0-0.014,0-0.028,0.001-0.042C157.471,285.785,157.471,285.8,157.471,285.814M157.471,285.858c0-0.008,0-0.017,0-0.026C157.471,285.841,157.471,285.85,157.471,285.858M157.47,285.907c0.001-0.008,0.001-0.018,0.001-0.026C157.471,285.889,157.471,285.898,157.47,285.907M157.47,285.964c0-0.009,0-0.017,0-0.023C157.47,285.949,157.47,285.955,157.47,285.964M157.469,286.01c0-0.008,0.001-0.016,0.001-0.022C157.47,285.995,157.469,286.002,157.469,286.01M157.469,286.069c0-0.008,0-0.016,0-0.022C157.469,286.053,157.469,286.062,157.469,286.069M157.468,286.112c0-0.005,0-0.011,0-0.017C157.468,286.101,157.468,286.107,157.468,286.112M157.467,286.214c0-0.003,0-0.006,0-0.008C157.467,286.208,157.467,286.212,157.467,286.214").attr({stroke: "none", fill: "#c5d83e"}),R.path("M66.218,210.846l-6.824-3.421c-0.016-0.009-0.033-0.018-0.048-0.025c-0.006-0.003-0.013-0.007-0.019-0.01c-0.01-0.005-0.017-0.009-0.028-0.015c-0.009-0.005-0.016-0.008-0.025-0.013c-0.008-0.005-0.012-0.007-0.021-0.011c-0.009-0.005-0.018-0.01-0.027-0.014c-0.007-0.005-0.013-0.008-0.02-0.012c-0.009-0.005-0.02-0.01-0.029-0.015c-0.006-0.003-0.007-0.004-0.014-0.007c-0.038-0.021-0.074-0.039-0.113-0.06c-0.002-0.001-0.006-0.003-0.008-0.005c-0.013-0.006-0.023-0.011-0.035-0.018c-0.005-0.002-0.007-0.003-0.011-0.006c-0.011-0.005-0.025-0.014-0.036-0.02c-0.004-0.002-0.005-0.002-0.009-0.004c-0.013-0.007-0.025-0.014-0.038-0.02l-0.003-0.002c-29.686-15.598-51.36-44.362-57.28-78.53c5.306,1.575,10.887,2.541,16.665,2.804c1.084,0.05,2.161,0.075,3.235,0.075c11.18-0.001,21.795-2.669,31.203-7.424C50.44,154.002,55.248,183.676,66.218,210.846").attr({stroke: "none", fill: "250-#aace36-#2fa042"}),R.path("M88.093,85.247l-3.657-1.834c-0.214-0.103-0.426-0.208-0.638-0.315h-0.001c-0.015-0.008-0.029-0.015-0.044-0.022l-0.001-0.001c-0.014-0.007-0.028-0.014-0.042-0.021c-0.001-0.001-0.003-0.002-0.004-0.002c-0.014-0.007-0.027-0.014-0.04-0.02c-0.003-0.002-0.003-0.002-0.006-0.004c-0.013-0.006-0.025-0.012-0.037-0.018c-0.003-0.002-0.006-0.004-0.009-0.005c-0.011-0.006-0.022-0.011-0.033-0.017c-0.004-0.002-0.008-0.004-0.013-0.006c-0.009-0.005-0.018-0.01-0.027-0.014c-0.006-0.003-0.013-0.007-0.018-0.01c-0.006-0.003-0.013-0.006-0.019-0.009c-0.01-0.005-0.018-0.009-0.027-0.014c-0.001-0.001-0.003-0.002-0.004-0.002c-7.075-3.631-13.103-9.016-17.512-15.578c-7.44,18.621-11.77,37.728-13.228,56.742c12.607-6.37,23.053-16.485,29.815-28.949L88.093,85.247zM213.364,195.358c-25.889,17.124-56.849,27.05-89.924,27.05c-2.519,0-5.05-0.057-7.591-0.174c-14.436-0.662-28.343-3.192-41.515-7.32l56.748,28.445c15.615,7.571,26.39,23.571,26.39,42.092v0.107c0,0.015-0.001,0.031-0.001,0.046v0.168c-0.001,0.014-0.001,0.028-0.001,0.042v0.066c0,0.009,0,0.019-0.001,0.026v0.081c0,0.007-0.001,0.015-0.001,0.022v0.059c0,0.009-0.001,0.019-0.001,0.026v0.017c0,0.032-0.001,0.063-0.001,0.095v0.008c-0.192,12.063-4.956,23.016-12.633,31.202c-3.517,3.753-7.647,6.924-12.23,9.355l14.101-7.202l7.859-4.011c36.137-18.041,60.955-55.376,60.955-98.509L213.364,195.358z").attr({stroke: "none", fill: "320-#79a933-#70a333:14-#559332:34-#277b2f:58-#005f27:86-#005020"}),R.path("M123.44,222.408c-2.519,0-5.05-0.057-7.591-0.174c-14.436-0.662-28.343-3.192-41.515-7.32l-8.117-4.067c-10.97-27.17-15.778-56.844-13.485-86.749c12.607-6.37,23.053-16.485,29.815-28.949l5.545-9.901l68.032,34.101c2.462,1.278,4.871,2.648,7.22,4.102c0.006,0.004,0.009,0.006,0.016,0.01c0.009,0.005,0.018,0.011,0.025,0.016c0.009,0.005,0.02,0.011,0.028,0.017c0.002,0.001,0.008,0.005,0.01,0.006c25.392,15.756,43.88,41.564,49.94,71.859C187.476,212.482,156.516,222.408,123.44,222.408").attr({stroke: "none", fill: "320-#79ab35-#7cba3d:53-#00aa4b"})).scale(.1, .1, 6, 0);
	}
	var a = r(doc[getbyname]("h1")[0][getbyname](span)[0], 100, 100);
	a.path("M50.261,98.46c-5.344,0-10.366-2.08-14.144-5.859L8.167,64.649C4.383,60.871,2.3,55.848,2.3,50.504c0-5.347,2.083-10.372,5.867-14.149L36.119,8.401c3.776-3.776,8.798-5.857,14.142-5.857c5.343,0,10.366,2.081,14.143,5.856l27.952,27.956c3.784,3.777,5.868,8.801,5.868,14.147c0,5.344-2.084,10.369-5.869,14.147L64.404,92.601C60.627,96.38,55.604,98.46,50.261,98.46L50.261,98.46z").attr({
		fill: "#f89938",
		stroke: "none"
	});
	a.circle(50, 50, 27).attr({
		fill: "#39f",
		stroke: "none"
	});
	a.path("M100.502,50.503c0-5.893-2.297-11.43-6.464-15.589L66.085,6.959L66.075,6.97C61.969,2.856,56.314,0.5,50.501,0.5S39.033,2.857,34.928,6.971l-0.01-0.01L6.966,34.911c-4.123,4.118-6.464,9.765-6.464,15.592c0,5.826,2.34,11.472,6.463,15.588l25.204,25.204c1.01,1.134,2.072,2.195,3.191,3.171c4.19,3.969,9.835,6.147,15.605,6.028c5.663-0.116,11.116-2.446,15.12-6.451l27.194-27.192c0.069-0.068,0.138-0.138,0.207-0.207l0.55-0.55c1.072-1.071,1.951-2.255,2.846-3.47l-0.007-0.006C99.233,59.054,100.502,54.877,100.502,50.503zM77.535,71.065l-0.207,0.021l-3.816,3.887c0.039,0-13.19,13.304-13.19,13.304c-4.475,4.473-11.609,5.34-17.018,2.042l0.004-0.007c-0.846-0.562-1.652-1.194-2.436-1.865c-0.061-0.059-0.127-0.109-0.187-0.17L28.607,76.202h-0.002L12.73,60.327c-5.349-5.346-5.359-14.296-0.002-19.646l10.741-10.74l0.207-0.022l3.817-3.887c-0.039,0,13.19-13.304,13.19-13.304C45.157,8.257,52.292,7.39,57.7,10.688l-0.004,0.007c0.845,0.561,1.652,1.193,2.436,1.864c0.061,0.06,0.126,0.11,0.187,0.17l12.078,12.076h0.002l15.875,15.874c1.548,1.548,2.635,3.402,3.288,5.38l-10.454,0.032C78.963,31.101,66.083,19.58,50.5,19.577C33.42,19.58,19.578,33.421,19.575,50.503C19.578,67.584,33.42,81.425,50.5,81.427c15.65-0.001,28.573-11.623,30.632-26.707l10.521-0.033c-0.64,2.074-1.759,4.021-3.378,5.639L77.535,71.065zM50.5,54.817c0.004,0,0.009,0,0.014,0l21.867-0.07C70.386,65.024,61.36,72.778,50.5,72.797c-12.312-0.021-22.273-9.983-22.295-22.294C28.228,38.191,38.188,28.23,50.5,28.208c10.811,0.02,19.806,7.702,21.855,17.91l-21.869,0.068c-2.383,0.008-4.308,1.947-4.301,4.329C46.193,52.895,48.124,54.817,50.5,54.817z").attr({
		fill: "#333",
		stroke: "none"
	});
	a = r("top");
	a.rect(0, 0, 959, 20).attr({
		fill: "#999",
		stroke: "#999"
	});
	a.rect(0, 0, 959, 50, 20).attr({
		fill: "#eee",
		stroke: "#eee"
	});
})(Raphael);