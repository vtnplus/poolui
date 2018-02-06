'use strict';

app.controller('ConfigGeneratorCtrl', function($scope) {


//angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

//.controller('ConfigGeneratorCtrl', function($scope) {

  $scope.example_config = {
		'pool_address': '',
		'username': '',
		'password': '',
	};


	$scope.example_attr = {
		'with_mail': false,
		'with_worker_id': true,
    'with_pool_address' : 'etn.mpool.us',
    'with_custom_wallet': 'etnkKeHDFHdRHd6kjwZNdK2kMnUmjruRL7r73SBVYxgM8k71d6vJq5BiWgMpnNZ4HBAMLcqYtqZCf3TKeote1QTt8ZJWYWyjVd',
    'with_custom_worker': 'Rig1',
    'with_custom_email': 'me@email.com',
    'with_custom_port': '7777',    
	}



	$scope.updateExample = function() {
		var attr = $scope.example_attr;
		var conf = $scope.example_config;
    
		conf['username'] = attr['with_custom_wallet'];
    
    conf['pool_address'] = attr['with_pool_address'] + ':' + attr['with_custom_port']; 

        
		if (attr['with_worker_id'])
			conf['password'] = attr['with_custom_worker'];
		else
			conf['password'] = 'x:';

		if (attr['with_mail'] && attr['with_worker_id'])
			conf['password'] += ':';

		if (attr['with_mail'])
			conf['password'] += attr['with_custom_email'];

		if (!attr['with_mail'] && !attr['with_worker_id']) {
			conf['password'] = 'x';
		}
	}
		
  $scope.updateExample();
});
