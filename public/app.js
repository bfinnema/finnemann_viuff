var familielejr = angular.module('familielejr', ['ngRoute', 'uiGmapgoogle-maps', 'ngFileUpload']);

familielejr.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCaMYDW9iGzjm-30DhtenRYrJ_lTipnRzE',
        v: '3', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
}]);

familielejr.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'views/root.view.html',
            controller: 'rootCtrl',
            access: {restricted: false}
        }).
        when('/home', {
            templateUrl: 'views/home.view.html',
            controller: 'homeCtrl',
            access: {restricted: true}
        }).
        when('/organizerinstruction', {
            templateUrl: 'views/organizerinstruction.view.html',
            controller: 'organizerinstructionCtrl',
            access: {restricted: true}
        }).
        when('/login', {
            templateUrl: 'views/login.view.html',
            controller: 'loginCtrl',
            access: {restricted: false}
        }).
        when('/register', {
            templateUrl: 'views/register.view.html',
            controller: 'registerCtrl',
            access: {restricted: false}
        }).
        when('/changepassword', {
            templateUrl: 'views/changepassword.view.html',
            controller: 'changepwdCtrl',
            access: {restricted: true}
        }).
        when('/profile_edit', {
            templateUrl: 'views/profile_edit.view.html',
            controller: 'profileeditCtrl',
            access: {restricted: true}
        }).
        when('/logout', {
            templateUrl: 'views/logout.view.html',
            controller: 'logoutCtrl',
            access: {restricted: true}
        }).
        when('/profile', {
            templateUrl: 'views/profile.view.html',
            controller: 'profileCtrl',
            access: {restricted: true}
        }).
        when('/usersadmin', {
            templateUrl: 'views/users.view.html',
            controller: 'usersCtrl',
            access: {restricted: true}
        }).
        when('/users/edit/:id', {
            templateUrl: 'views/useredit.view.html',
            controller: 'usereditCtrl',
            access: {restricted: true}
        }).
        when('/users/forgottenpassword/:id', {
            templateUrl: 'views/adminchangepwd.view.html',
            controller: 'userpwdCtrl',
            access: {restricted: true}
        }).
        when('/eventregistration', {
            templateUrl: 'views/eventreg.view.html',
            controller: 'eventregCtrl',
            access: {restricted: true}
        }).
        when('/eventregistrationall/:year', {
            templateUrl: 'views/eventregall.view.html',
            controller: 'eventregallCtrl',
            access: {restricted: true}
        }).
        when('/eventinfo', {
            templateUrl: 'views/eventinfo.view.html',
            controller: 'eventinfoCtrl',
            access: {restricted: true}
        }).
        when('/familytree', {
            templateUrl: 'views/familytree.view.html',
            controller: 'familytreeCtrl',
            access: {restricted: true}
        }).
        when('/familytree/:_family_id', {
            templateUrl: 'views/familytreesl.view.html',
            controller: 'familytreeslCtrl',
            access: {restricted: true}
        }).
        when('/familytreeedit', {
            templateUrl: 'views/familytreeedit.view.html',
            controller: 'familytreeCtrl',
            access: {restricted: true}
        }).
        when('/familytreeedit/:_family_id', {
            templateUrl: 'views/familytreesledit.view.html',
            controller: 'familytreeslCtrl',
            access: {restricted: true}
        }).
        when('/about', {
            templateUrl: 'views/about.view.html',
            controller: 'aboutCtrl',
            access: {restricted: true}
        }).
        when('/campmap', {
            templateUrl: 'views/campmap.view.html',
            controller: 'campmapCtrl',
            access: {restricted: true}
        }).
        when('/camplist', {
            templateUrl: 'views/camplist.view.html',
            controller: 'camplistCtrl',
            access: {restricted: true}
        }).
        when('/photos/:id', {
            templateUrl: 'views/photoalbum.view.html',
            controller: 'photoalbumCtrl',
            access: {restricted: true}
        }).
        when('/deletephoto/:id', {
            controller: 'myphotoalbumCtrl',
            access: {restricted: true}
        }).
        when('/photooverview/:imagescope', {
            templateUrl: 'views/photooverview.view.html',
            controller: 'photooverviewCtrl',
            access: {restricted: true}
        }).
        when('/photoalbum/:year', {
            templateUrl: 'views/photoalbum.view.html',
            controller: 'photoalbumCtrl',
            access: {restricted: true}
        }).
        when('/myphotoalbum', {
            templateUrl: 'views/myphotoalbum.view.html',
            controller: 'myphotoalbumCtrl',
            access: {restricted: true}
        }).
        when('/myphotoalbum/:year', {
            templateUrl: 'views/myphotoalbum.view.html',
            controller: 'myphotoalbumCtrl',
            access: {restricted: true}
        }).
        when('/photoupload', {
            templateUrl: 'views/photoupload.view.html',
            controller: 'photouploadCtrl',
            access: {restricted: true}
        }).
        when('/imagetest', {
            templateUrl: 'views/imagetest.view.html',
            controller: 'imagetestCtrl',
            access: {restricted: true}
        }).
        when('/content', {
            templateUrl: 'views/content.view.html',
            controller: 'contentCtrl',
            access: {restricted: true}
        }).
        when('/invitationadmin', {
            templateUrl: 'views/invitationadmin.view.html',
            controller: 'invitationadminCtrl',
            access: {restricted: true}
        }).
        when('/futurecamps/edit/:id', {
            templateUrl: 'views/futurecampedit.view.html',
            controller: 'futurecampeditCtrl',
            access: {restricted: true}
        }).
        when('/futurecamps/details/:id', {
            templateUrl: 'views/futurecampdetails.view.html',
            controller: 'futurecampdetailsCtrl',
            access: {restricted: true}
        }).
        when('/futurecamps', {
            templateUrl: 'views/futurecamps.view.html',
            controller: 'futurecampsCtrl',
            access: {restricted: true}
        }).
        when('/todolist', {
            templateUrl: 'views/todolist.view.html',
            controller: 'todolistCtrl',
            access: {restricted: true}
        }).
        when('/games', {
            templateUrl: 'views/games.view.html',
            controller: 'gameCtrl',
            access: {restricted: true}
        }).
        when('/accounting/:year', {
            templateUrl: 'views/accounting.view.html',
            controller: 'accountingCtrl',
            access: {restricted: true}
        }).
        when('/expenses', {
            templateUrl: 'views/expenses.view.html',
            controller: 'expensesCtrl',
            access: {restricted: true}
        }).
        when('/archive', {
            templateUrl: 'views/archive.view.html',
            controller: 'archiveCtrl',
            access: {restricted: true}
        }).
        when('/docupload', {
            templateUrl: 'views/docupload.view.html',
            controller: 'docuploadCtrl',
            access: {restricted: true}
        }).
		otherwise({redirectTo: '/'})
}]);

familielejr.run(function($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        AuthService.getUserStatus()
            .then(function() {
                // var n = JSON.stringify(next);
                // console.log(`Next: ${n}`);
                if (next.access.restricted && !AuthService.isLoggedIn()) {
                    $location.path('/login');
                    $route.reload();
                };
            });
    });
});
