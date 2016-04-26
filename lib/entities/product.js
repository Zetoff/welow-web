import {Products} from '/lib/collections';
import {TextField, InputNumber} from 'meteor/zetoff:astroforms-react';

const Product = Astro.Class.create({
  name:'Product',
  collection: Products,
  fields:{
    name:{
      type: String,
      input:{
        label:'Product Name',
        type: TextField,
        placeholder:'Add the name of your product'
      },
    },
    description: {
      type: String,
      input:{
        label:'Product Description',
        type: TextField,
        placeholder: 'Add the product description'
      }
    },
    price:{
      type: Number,
      input:{
        type: InputNumber,
        label: 'Product Price',
        placeholder: 50,
        min:0,
        max:999,
        step:0.01,
        suffix: '€',
        prefix: '$'
      }
    }
  }
});

export default Product;
