'use strict';
angular.module('users').controller('mainCtrl',
        function (parlourService, $mdSidenav, $mdBottomSheet, $log, $q, $location, $mdDialog) {
                var self = this;

                self.selected = null;
                self.users = [];
                self.selectUser = selectUser;
                self.toggleList = toggleUsersList;
                self.showContactOptions = showContactOptions;
        
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

                        $location.path(user.url);

                }
        
                /**
             * Show the bottom sheet
             */
                function showContactOptions($event) {


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

                        var user = self.selected;



                };
        });