'use strict';
angular.module('users').controller('mainCtrl',
        function (parlourService, appContextService, $mdSidenav, $mdBottomSheet, $log, $q, $location, $mdDialog) {
                var self = this;

                self.selected = null;
                self.users = [];
                self.selectUser = selectUser;
                self.toggleList = toggleUsersList;
                self.showContactOptions = showContactOptions;
                self.login = login;
                self.isLoggedIn = false;

                self.register = register;

                self.openMenu = openMenu;
                self.notificationsEnabled = true;
                self.toggleNotifications = toggleNotifications;
                self.redial = redial;
                self.checkVoicemail = checkVoicemail;

                var originatorEv;
                function openMenu($mdOpenMenu, ev) {
                        originatorEv = ev;
                        $mdOpenMenu(ev);
                };

                function toggleNotifications() {
                        this.notificationsEnabled = !this.notificationsEnabled;
                };
                function redial() {
                        $mdDialog.show(
                                $mdDialog.alert()
                                        .targetEvent(originatorEv)
                                        .clickOutsideToClose(true)
                                        .parent('body')
                                        .title('Suddenly, a redial')
                                        .content('You just called a friend; who told you the most amazing story. Have a cookie!')
                                        .ok('That was easy')
                                );
                        originatorEv = null;
                };

                function checkVoicemail() {
                        // This never happens.
                };
                // Load all registered users        
                parlourService
                        .loadAllUsers()
                        .then(function (users) {
                                self.users = [].concat(users);
                                self.selected = users[0];
                        });

                // *********************************
                // Internal methods
                // *********************************

                /**
                * First hide the bottomsheet IF visible, then
                * hide or Show the 'left' sideNav area
                */
                function login() {
                        self.isLoggedIn = true;
                }

                function register($event) {
                        $mdDialog.show({
                                controller: 'bookAppointmentCtrl',
                                templateUrl: './src/views/register.html',
                                parent: angular.element(document.body),
                                targetEvent: $event,
                                clickOutsideToClose: true
                        })
                                .then(function (answer) {

                                }, function () {

                                });
                }

                function toggleUsersList() {
                        var pending = $mdBottomSheet.hide() || $q.when(true);

                        pending.then(function () {
                                $mdSidenav('left').toggle();
                        });
                }

                /**
                * Select the current avatars
                * @param menuId
                */
                function selectUser(user) {
                        self.selected = angular.isNumber(user) ? $scope.users[user] : user;
                        self.toggleList();

                        appContextService.setselectedService(self.selected);

                        $location.path(user.url);

                }

                /**
                * Show the bottom sheet
                */
                function showContactOptions($event) {
                        appContextService.setselectedService(self.selected);

                        $mdDialog.show({
                                controller: 'bookAppointmentCtrl',
                                templateUrl: './src/views/book-appointment.html',
                                parent: angular.element(document.body),
                                targetEvent: $event,
                                clickOutsideToClose: true
                        })
                                .then(function (answer) {

                                }, function () {

                                });
                };
        });