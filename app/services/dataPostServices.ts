namespace moduleFirstDemo.common {
    'use strict';

    export interface IDataPostService {
        getPostResource(): ng.resource.IResourceClass<IPostResource>;
    }
    interface IPostResource
		extends ng.resource.IResource<moduleFirstDemo.domain.IPost> {

	}
    export class DataPostService implements IDataPostService {
        static $inject: Array<string> = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {}
        getPostResource(): ng.resource.IResourceClass<IPostResource> {
			return this.$resource("http://104.131.28.224:3000/posts/:id");
		}
    }

    angular
        .module('common.services')
        .service('DataPostService', DataPostService);
}