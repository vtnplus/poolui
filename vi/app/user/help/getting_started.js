'use strict';

app.controller('GettingStartedCtrl', function($scope, $mdDialog, dataService) {
	$scope.portsList = {};
	$scope.selected = [];

	$scope.promise = dataService.getData("/pool/ports", function(data){
		$scope.portsList = data;
	});

	$scope.viewPorts = function(ev){
		$mdDialog.show({
			controller: "PortsModalCtrl",
			templateUrl: 'user/help/portsmodal.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
			fullscreen: $scope.menuOpen // Only for -xs, -sm breakpoints.
		})
		.then(function(answer) {
			$scope.status = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	}

	$scope.samples=[
	{
		type: 'Username',
		sample: 'etnkKeHDFHdRHd6kjwZNdK2kMnUmjruRL7r73SBVYxgM8k71d6vJq5BiWgMpnNZ4HBAMLcqYtqZCf3TKeote1QTt8ZJWYWyjVd',
		desc: 'Thanh toán trực tiếp qua ví offline',
		valid: true
	},
	{
		type: 'Username',
		sample: 'etnkKeHDFHdRHd6kjwZNdK2kMnUmjruRL7r73SBVYxgM8k71d6vJq5BiWgMpnNZ4HBAMLcqYtqZCf3TKeote1QTt8ZJWYWyjVd+3500',
		desc: 'Set diff cho máy đào qua ví off',
		valid: true
	},
	{
		type: 'Username',
		sample: 'etnkKeHDFHdRHd6kjwZNdK2kMnUmjruRL7r73SBVYxgM8k71d6vJq5BiWgMpnNZ4HBAMLcqYtqZCf3TKeote1QTt8ZJWYWyjVd',
		desc: 'Integrated address, good for withdrawing to an exchange (eg. Poloniex, Kraken, TuxExchange), or if you want to use an integrated address',
		valid: true
	},
	{
		type: 'Username',
		sample: 'etnjzKFU6ogESSKRZZbdqraPdcKVxEC17Cm1Xvbyy76PARQMmgrgceH4krAH6xmjKwJ3HtSAKuyFm1BBWYqtchtq9tBap8Qr4M.d3a86e2918be8faddaf340f5eb507fab3a2038ddee7af94b4022ef6d0ea55c69',
		desc: 'Thanh toán lên sàn giao dịch với PaymentID',
		valid: true
	},
	/*{ // BTC withdrawal not allowed
		type: 'Username',
		sample: '1KEJ7EJvfD2bpL6vA9nJpTEgoS9P5jdyce',
		desc: 'BTC Withdrawal (Will process through xmr.to or shapeshift.io automatically)',
		valid: false // this seems to make no difference? The configuration is displayed whether this is set to true or false
	},*/
	/*{ // BTC withdrawal not allowed
		type: 'Username',
		sample: '1KEJ7EJvfD2bpL6vA9nJpTEgoS9P5jdyce+100000',
		desc: 'BTC Withdrawal w/ fixed diff (Good for NiceHash)',
		valid: true
	},*/
	{
		type: 'Password',
		sample: 'Steve',
		desc: 'Miner identifier of Steve',
		valid: true
	},
	{
		type: 'Password',
		sample: 'Steve:test@e-mail.com',
		desc: 'Miner identifier of Steve, and register an account with the e-mail address as password',
		valid: true
	},
	/*{ // removed because it may confuse people
		type: 'Password',
		sample: 'test@e-mail.com',
		desc: 'Will register the e-mail address as the worker ID',
		valid: true
	}*/
	]

});