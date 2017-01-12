angular.module("html2Canvas", [])
  .factory('html2canvas-angular', ['$q', function($q) {
    self = {

      renderBody: function(element, options){
        var deferred = $q.defer();
        options = options === undefined ? {} : options;
        options.onrendered = function(canvas) {
          deferred.resolve(canvas);
        };
        html2canvas(element, options);
        return deferred.promise;
      }
    }
    return self;
}]);
