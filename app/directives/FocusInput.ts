namespace moduleFirstDemo{
    'use strict';
    
    interface IFocusScope extends ng.IScope{
    }
    
    export class Focus implements ng.IDirective{
        
        static instance(): ng.IDirective{
            return new Focus;
        }
        restrict='A';
        link(scope:IFocusScope,elements: ng.IAugmentedJQuery, attrs:ng.IAttributes){
            console.log(attrs);
            setTimeout(function() {
                elements[0].focus(); 
            });
        }
    }
      angular.module('demoModule')
    .directive('focus', Focus.instance);
}