'use strict';
angular.module('users').controller('mainCtrl',
        function (parlourService, $mdSidenav, $mdBottomSheet, $log, $q, $location) {
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
                        var user = self.selected;

                        return $mdBottomSheet.show({
                                parent: angular.element(document.getElementById('content')),
                                templateUrl: './src/views/book-appointment.html',
                                controller: ['$mdBottomSheet', ContactPanelController],
                                controllerAs: "cp",
                                bindToController: true,
                                targetEvent: $event
                        }).then(function (clickedItem) {
                                clickedItem && $log.debug(clickedItem.name + ' clicked!');
                        });
            
                        /**
                   * Bottom Sheet controller for the Avatar Actions
                   */
                        function ContactPanelController($mdBottomSheet) {
                                this.user = user;
                                this.actions = [
                                        { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
                                        { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
                                        { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
                                        { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
                                ];
                                this.submitContact = function (action) {
                                        $mdBottomSheet.hide(action);
                                };
                        }
                };
        });