import {Products} from '/lib/collections';
import {TextField, InputNumber, Select, Checkbox} from 'meteor/zetoff:astroforms-react';

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
    brand: {
      type: String,
      input:{
        label:'Product Brand',
        type: Select,
        placeholder: "Choose the product's brand",
        options:[
          {value:'Mavic', label:'Mavic'},
          {value:'Specialized', label:'Specialized'},
          {value:'Canyon', label:'Canyon'}
        ]
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
    },
    categories:{
      type: String,
      input:{
        type: Checkbox,
        label: 'Product Categories',
        options:[
          {value:'bike', label:'Bike'},
          {value:'accessory', label:'Accessory'}
        ]
      }
    }
  }
});

export default Product;
