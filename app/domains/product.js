var moduleFirstDemo;
(function (moduleFirstDemo) {
    var domain;
    (function (domain) {
        var Product = (function () {
            function Product(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            Product.prototype.calculateDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return Product;
        }());
        domain.Product = Product;
    })(domain = moduleFirstDemo.domain || (moduleFirstDemo.domain = {}));
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=product.js.map