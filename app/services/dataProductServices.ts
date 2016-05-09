namespace moduleFirstDemo.common {
    'use strict';

    export interface IDataProductService {
        getProductResource(): ng.resource.IResourceClass<IProductResource>;
    }
    interface IProductResource
		extends ng.resource.IResource<moduleFirstDemo.domain.IProduct> {

	}
    export class DataProductService implements IDataProductService {
        static $inject: Array<string> = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {}
        getProductResource(): ng.resource.IResourceClass<IProductResource> {
			return this.$resource("http://192.168.0.149:3000/products/:id");
		}
    }

    angular
        .module('common.services')
        .service('DataProductService', DataProductService);
}