namespace moduleFirstDemo{
    'use strict';
    
    interface IProgressbarScope extends ng.IScope{
        value:number;
        showProgress:boolean;
    }
    
    export class Progressbar implements ng.IDirective{
        
        static instance(): ng.IDirective{
            return new Progressbar;
        }
        scope={
            'showProgress':'='
        }
        restrict='E';
        //template='<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="{{ value }}" aria-valuemin="0" aria-valuemax="100" style="width: {{ value }}%;"><span class="sr-only">60% Complete</span></div></div><div><span>{{ value }}% Completed</span></div>';
        templateUrl='app/directives/progressBar.html';
        link(scope:IProgressbarScope,elements: ng.IAugmentedJQuery, attrs:ng.IAttributes){
             scope.value=0;
             console.log(scope.showProgress);
             setInterval(()=>{
                scope.$apply(()=>{
                    if(scope.value>=100){
                    scope.value=0;
                    return;
                }
                scope.value=scope.value+10;
                });
                
            },1000);
        }
    }
      angular.module('demoModule')
    .directive('progressBar',Progressbar.instance);
}