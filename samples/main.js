var Analytics;

(function() {
	'use strict';

	Analytics = function() {

		this.config = {
			defaults: {
				'graphType': 'Line',
				'graphScale': {
					scaleFontFamily: "Geneva",
					scaleFontSize: 10,
					scaleShowGridLines: true,
					scaleFontColor: "#666",
					bezierCurve: false
				},
				"graphWidth": 800,
				"graphHeight": 250
			}
		};

		this.Graph = function(data) {
			this.data = data;
			this.obj = $("#analytics-graph");
			this.canvas = this.obj.get(0).getContext("2d");

			this.draw = function(data) {
				var data  = data || this.data;
				this.obj.attr("width",this.config.defaults.graphWidth);
				this.obj.attr("height",this.config.defaults.graphHeight);

				var canvas= new Chart(this.canvas);
				canvas.Line(data,this.config.defaults.graphScale);
			}

			return this;
		}
	}

}).call(window);