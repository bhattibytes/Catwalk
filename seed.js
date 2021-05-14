// const database = require('./server/ProductsDatabase/DB/database.js');
// const { Product, Feature,  Style, Sku, Photo, RelatedProduct } = require('./server/ProductsDatabase/DB/allProducts.js');

// var Products = [];
// var Features = [];
// var Styles = [];
// var Skus = [];
// var Photos = [];
// var RelatedProducts = [];


// const seed = async () => {
//   await database.sync({ force: true })
//     await Promise.all(Products.map(product => {
//       return Product.create(product);
//     }));
//     await Promise.all(Features.map(feature => {
//       return Feature.create(feature);
//     }));
//     await Promise.all(Styles.map(style => {
//       return Style.create(style);
//     }));
//     await Promise.all(Skus.map(sku => {
//       return Sku.create(sku);
//     }));
//     await Promise.all(Photos.map(photo => {
//       return Photo.create(photo);
//     }));
//     await Promise.all(RelatedProducts.map(relatedProduct => {
//       return RelatedProduct.create(relatedProduct);
//     }));

//   console.log('Seeding success!')
//   database.close()
// }

// seed()
//   .catch(err => {
//     console.error('There was an error connecting!')
//     console.error(err)
//     database.close()
//   })