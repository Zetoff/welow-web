import React from 'react';
import {Grid,Row, Col} from 'react-bootstrap';
import Product from '/lib/entities/product.js';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Astroforms.Form astroClass={Product}>
              <Astroforms.Field name='name'/>
              <Astroforms.Field name='description'/>
              <Astroforms.Field name='brand'/>
              <Astroforms.Field name='categories'/>
              <Astroforms.Field name='price'/>
            </Astroforms.Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ProductForm;
