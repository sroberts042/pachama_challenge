import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ForestCard from './ForestCard';
import AppWrapper from './AppWrapper';

import './ForestCardGrid.css'

function ForestCardGrid(props) {

  return(
    <AppWrapper title="Forests">
      <Row md={3} className="g-4">
        {Object.keys(props.forests).map((forestKey, index) => (
          <Col>
            <ForestCard name={props.forests[forestKey].name} 
                        type={props.forests[forestKey].forest_type}
                        descShort={props.forests[forestKey].short_description} 
                        image={props.forests[forestKey].thumbnail_filename}/>
          </Col>
        ))}
      </Row>
    </AppWrapper>
  )
}

export default ForestCardGrid;