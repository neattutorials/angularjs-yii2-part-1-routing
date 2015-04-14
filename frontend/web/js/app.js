'use strict';

var app = angular.module('app', [
    'ngRoute',      //$routeProvider
    'mgcrea.ngStrap'//bs-navbar, data-match-route directives
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/index.html'
            }).
            when('/about', {
                templateUrl: 'partials/about.html'
            }).
            when('/contact', {
                templateUrl: 'partials/contact.html'
            }).
            when('/login', {
                templateUrl: 'partials/login.html'
            }).
            otherwise({
                templateUrl: 'partials/404.html'
            });
    }
]);
