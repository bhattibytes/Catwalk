const Sequelize = require('sequelize');
const db = require('./database.js');

const Product = db.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  slogan: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.STRING
  },
  default_price: {
    type: Sequelize.STRING
  }
}, {timestamps: false});

const RelatedProduct = db.define('relatedProduct', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  currentProductId: {
    type: Sequelize.INTEGER
  },
  relatedProductId: {
    type: Sequelize.INTEGER
  }
}, {
  indexes: [{ unique: false, using: 'BTREE', fields: ['relatedProductId'] }],
  timestamps: false
});

const Feature = db.define('feature', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  feature: {
    type: Sequelize.STRING,
    allowNull: true
  },
  value: {
    type: Sequelize.STRING,
    allowNull: true
  }
},
  {
    indexes: [{ unique: false, using: 'BTREE', fields: ['productId'] }],
    timestamps: false
  });

Feature.belongsTo(Product);

const Style = db.define('style', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  original_price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sale_price: {
    type: Sequelize.STRING,
    allowNull: true
  },
  default_style: {
    type: Sequelize.INTEGER
  }
},
  {
    indexes: [{ unique: false, using: 'BTREE', fields: ['productId'] }],
    timestamps: false
  });

Style.belongsTo(Product);

const Sku = db.define('sku', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  size: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  }
},
  {
    indexes: [{ unique: false, using: 'BTREE', fields: ['styleId'] }],
    timestamps: false
  });

Sku.belongsTo(Style);

const Photo = db.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  fullsize_url: {
    type: Sequelize.STRING
  },
  thumbnail_url: {
    type: Sequelize.STRING
  }
},
  {
    indexes: [{ unique: false, using: 'BTREE', fields: ['styleId'] }],
    timestamps: false
  });

Photo.belongsTo(Style);

// Product.sync();
// Style.sync();
// Photo.sync();
// Sku.sync();
// Feature.sync();
// RelatedProduct.sync();

module.exports = { Product, Feature,  Style, Sku, Photo, RelatedProduct };