import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Image from './Image';
import Description from './Description';

function Cardd() {
  return (
    <Card style={{ width: '18rem' }}>
                <Image></Image>
      <Card.Body>
        <Card.Title><Name></Name></Card.Title>
        <Card.Text>
       <Description></Description>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardd;