const { Product, Feature,  Style, Sku, Photo, RelatedProduct } = require('../DB/allProducts.js');

const getAllProducts = async (req, res) => {
  var response = {};
  await Product.findAll({
    limit: 5
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
    return;
  }).then(productData => {
   var productArr = [];
   productData.forEach(product => {
    productArr.push(product.dataValues)
   });
   return productArr;
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
    return;
  }).then(productArr => {
    response.results = productArr;
    return response;
  }).then(response => {
    res.data = response;
    return res;
  })
};

const getProductById = async (req, res) => {
  var id = req.params.product_id;
  var features = Feature.findAll({ attributes: ["feature", "value"], where: {'productId': id} })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
    return;
  })
  var product = Product.findOne({ where: { id: id } })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
    return;
  })

  await Promise.all([features, product])
    .catch(err => {
    console.log(err);
    res.sendStatus(500);
    return;
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
  var response = {};
  response.product_id = id;
  var stylesArr = [];
  await Style.findAll({ attributes: ["id", "name", "original_price", "sale_price", "default_style"], where: { 'productId': id } })
    .then(async styles => {
      for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      await Photo.findAll({ attributes: ["fullsize_url", "thumbnail_url"], where: { 'styleId': style.dataValues.id } })
      .then(photosArr => {
        var anotherArr = [];
        photosArr.forEach(photo => {
          anotherArr.push(photo.dataValues);
        })
        return anotherArr;
      }).catch(err => {
        console.log(err);
        res.sendStatus(500);
        return;
      }).then(anotherArr => {
        style.dataValues.photos = anotherArr
        return style
      }).then(async style => {
        var skusObj = {};
        await Sku.findAll({ attributes: ["size", "quantity", "id"], where: { 'styleId': style.dataValues.id } })
        .then(skus => {
          skus.forEach(sku => {
            skusObj[sku.dataValues.id] = {size: sku.dataValues.size, quantity: sku.dataValues.quantity}
          });
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
        console.log(err);
        res.sendStatus(500);
        return;
      })
    }
  })
}

const getRelatedProducts = async (req, res) => {
  var id = req.params.product_id;
  var response = [];
  await RelatedProduct.findAll({ attributes: ["relatedProductId"], where: { 'currentProductId': id } })
    .then(related => {
      related.forEach(relId => {
        response.push(relId.dataValues.relatedProductId)
      });
      return response;
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
      return;
    }).then(response => {
      res.data = response;
      return response;
    })
};

module.exports = { getAllProducts, getProductById, getAllProductStyles, getRelatedProducts };