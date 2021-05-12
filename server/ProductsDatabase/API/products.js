const db = require('../DB/database.js');
const { Product, Feature,  Style, Sku, Photo, RelatedProduct } = require('../DB/allProducts.js');

const getAllProducts = (req, res) => {
  Product.findAll({
    limit: 5
  }).catch(err => {
    if (err) {
      console.log('There was an error in getAllProducts--->', err)
    }
  }).then(data => {
   console.log(data);
   var productArr = [];
   data.forEach(product => {
    productArr.push(product.dataValues)
   }).catch(err => {
      if (err) {
        console.log('There was an error in getAllProducts--->', err)
      }
    })
   res.send(productArr);
  })
};

const getProductById = async (req, res) => {
  var id = req.params.product_id;
  if (typeof id !== 'number') {
    id = 1;
  }
  console.log('Here is the id in the getproduct--->', id)
  var features = Feature.findAll({ attributes: ["feature", "value"], where: {'productId': id} }).catch(err => {
    if (err) {
      console.log('There was an error in getProductsById features--->', err)
    }
  })
  var product = Product.findOne({ where: { id: id } }).catch(err => {
    if (err) {
      console.log('There was an error in getProductsById product--->', err)
    }
  })

  await Promise.all([features, product])
    .catch(err => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
  }).then(data => {
    var features = data[0];
    var product = data[1];
    var featuresArr = [];
    features.map(feature => {
      featuresArr.push(feature.dataValues);
    })
    var copyProduct = {};
    for (var key in product.dataValues) {
      copyProduct[key] = product.dataValues[key];
    }
    copyProduct.features = featuresArr;
    console.log('DOES THIS PRINT copyproduct---->', copyProduct)

    res.status(200).send(copyProduct);
  })
};

const getAllProductStyles = async (req, res) => {
  var id = req.params.product_id;
  var response = {};
  response.product_id = id;
  var stylesArr = [];
  await Style.findAll({ attributes: ["id", "name", "original_price", "sale_price", "default_style"], where: { 'productId': id } }).then(async styles => {
      for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      await Photo.findAll({ attributes: ["fullsize_url", "thumbnail_url"], where: { 'styleId': style.dataValues.id } }).then(async photosArr => {
        var anotherArr = [];
        await photosArr.forEach(photo => {
          anotherArr.push(photo.dataValues);
        })
        return anotherArr;
      }).catch(err => {
        if (err) {
          console.log('There was an error in getAllProductStyles--->', err)
        }
      }).then(anotherArr => {
        style.dataValues.photos = anotherArr
        return style
      }).then(async style => {
        var skusObj = {};
        await Sku.findAll({ attributes: ["size", "quantity", "id"], where: { 'styleId': style.dataValues.id } }).then(async skus => {
          await skus.forEach(sku => {
            skusObj[sku.dataValues.id] = {size: sku.dataValues.size, quantity: sku.dataValues.quantity}
          })
        })
        style.dataValues.skus = skusObj;
        stylesArr.push(style);
        return stylesArr
      }).catch(err => {
        if (err) {
          console.log('There was an error in getAllProductStyles--->', err)
        }
      }).then(stylesArr => {
        response.results = stylesArr
        return response
      }).then(response => {
        if (style === styles[styles.length -1]) {
          res.status(200).send(response);
        }
      }).catch(err => {
        if (err) {
          console.log('There was an error in the promise-->', err)
        }
      })
    }
  })
}

const getRelatedProducts = async (req, res) => {
  var id = req.params.product_id;
  var response = [];
  await RelatedProduct.findAll({ attributes: ["relatedProductId"], where: { 'currentProductId': id } })
    .then(async related => {
      await related.forEach(relId => {
        response.push(relId.dataValues.relatedProductId)
      });
      return response;
    })
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      if (err) {
        console.log('There was an error--->', err)
      }
    });
};

module.exports = { getAllProducts, getProductById, getAllProductStyles, getRelatedProducts };