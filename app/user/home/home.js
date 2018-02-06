'use strict';

app.controller('HomeCtrl', function($scope, $route, dataService, timerService) {

    function ticker() {
        dataService.getData("/pool/chart/hashrate/pplns", function(data){
			
            data = _.forEach(data, function(element) {
                element.ts = new Date(element.ts);
		element.hs = element.hs/1000000;
            });

            $scope.poolHashrateChart = {
                datasets: { global: data },
                options: {
/*				    scales: {
						yAxes: [{
							ticks: {
								suggestedMin: 50,
								suggestedMax: 10000000
							}
						}]
					},*/
					tooltips: {
						enabled: true,
						mode: 'single',
						callbacks: {
							label: function(tooltipItems, data) { 
							return tooltipItems.yLabel + ' €';
							}
						}
					},
                    series: [
                        {"axis":"y",
						 "id":"global",
						 "dataset":"global",
						 "label":"Tổng số hashrate",
						 "key":"hs",
						 "color":"green",
						 "type":["line","area"]}
                    ],
                    allSeries: [],
                    axes: {
                        x: {
                            key: "ts",
                            type: "date"
                        }
                    }
                }
            }
        });
    }

    function ticker2() {
        dataService.getData("/pool/blocks", function(data){
	    var i = 25;
            data = _.forEach(data, function(element) {
//                element.ts = new Date(element.ts);
		element.value = element.shares/(element.diff/100)
		element.ts = i;
		i-=1;
            });

            $scope.poolEffortChart = {
                datasets: { global: data },
                options: {
                    series: [
                        {"axis":"y","id":"global","dataset":"global","label":"Effort","interpolation":{mode: "bundle", tension: 1},"key":"value","color":"green","type":["line"]},
			{"axis":"y","id":"global1","dataset":"global","label":"Effort","key":"value","color":"green","type":["dot"]}
                    ],
                    allSeries: [],
                    axes: {
                        x: {
                            key: "ts"
//                            type: "date"
                        }
                    }
                }
            }
        });
    }

    function ticker3() {
		
        dataService.getData("/pool/chart/miners", function(data){
			//alert(JSON.stringify(data));
            data = _.forEach(data, function(element) {
                element.ts = new Date(element.ts);
            });

            $scope.poolMinersChart = {
                datasets: { global: data },
                options: {
                    series: [
                        {"axis":"y","id":"global","dataset":"global","label":"Tổng số Miner","key":"cn","color":"green","type":["line","area"]}
                    ],
                    allSeries: [],
                    axes: {
                        x: {
                            key: "ts",
                            type: "date"
                        }
                    }
                }
            }
        });
    }

    timerService.register(ticker, 'poolHashrateChart');
    ticker();

    timerService.register(ticker2, 'poolMinersChart');
    ticker2();

    timerService.register(ticker3, 'poolEffortChart');
    ticker3();

    $scope.$on("$routeChangeStart", function () {
        timerService.remove("poolHashrateChart");
    });

    $scope.$on("$routeChangeStart", function () {
        timerService.remove("poolMinersChart");
    });

    $scope.$on("$routeChangeStart", function () {
        timerService.remove("poolEffortChart");
    });
});
