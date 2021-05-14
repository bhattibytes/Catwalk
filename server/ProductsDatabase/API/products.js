const db = require('../DB/database.js');
const { Product, Feature,  Style, Sku, Photo, RelatedProduct } = require('../DB/allProducts.js');

const getAllProducts = async (req, res) => {
  var response = {};
  await Product.findAll({
    limit: 5
  }).catch(err => {
    console.log('There was an error in getAllProducts within the find.All function--->', err);
    return err;
  }).then(async productData => {
   var productArr = [];
   await productData.forEach(product => {
    productArr.push(product.dataValues)
   });
   return productArr;
  }).catch(err => {
    console.log('There was an error in getAllProducts awaiting the loop for productData--->', err);
    return err;
  }).then(productArr => {
    response.results = productArr;
    return response;
  }).then(response => {
    res.data = response;
    return res;
  }).catch(err => {
    return err;
  })
};

const getProductById = async (req, res) => {
  var id = req.params.product_id;
  if (typeof id !== 'number') {
    id = 1;
  }
  var features = Feature.findAll({ attributes: ["feature", "value"], where: {'productId': id} }).catch(err => {
    console.log('There was an error in getProductsById features--->', err)
    return err;
  })
  var product = Product.findOne({ where: { id: id } }).catch(err => {
    console.log('There was an error in getProductsById product--->', err)
    return err;
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
    res.data = copyProduct;
    return copyProduct;
  })
};

const getAllProductStyles = async (req, res) => {
  var id = req.params.product_id;
  if (typeof id !== 'number') {
    id = 1;
  }
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
      }).then(stylesArr => {
        response.results = stylesArr
        return response
      }).then(response => {
        if (style === styles[styles.length -1]) {
          res.data = response
          return res;
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
      res.data = response;
      return response;
    })
    .catch(err => {
      if (err) {
        console.log('There was an error--->', err)
      }
    });
};

module.exports = { getAllProducts, getProductById, getAllProductStyles, getRelatedProducts };