
app.directive('postItem', function () {
    return {
        restrict: 'E',
        templateUrl: '/publics/client/directives/post-item.html',
        scope: {
            post: '='
        }
    }
});