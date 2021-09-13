import logo from './logo.svg';
import './App.css';
import safcsplogo from './safcsplogo.svg';
import whiteBook from './whiteBook.png';
import book from './book.png';
import Footer from "./Footer";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Row,Grid
} from 'reactstrap';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <header className="App-header">
        <img src={safcsplogo} className="App-logo" alt="logo" />

        <p
        className="title"
        >
         التوثيق الموحد
        </p>

        <p
        className="secondtitle">
          لمشاريع ادارة تطوير البرمجيات   
        </p>

      </header>
      {/* Header */}



    {/* Body */}
    {/* First row */}
  <div className="content">
      <div className="listCard1">
        <div className="cardTitle" >  التوثيق </div>
      <div className="row">
      <div className="col-md-4">
      <Card className="card1">
        <CardImg top width="100%" src={whiteBook}  alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle tag="h5">التوثيق ١</CardTitle>
          
         
        </CardBody>
      </Card>
      </div>

      <div className="col-md-4">
        <Card className="card1">
        <CardImg top width="100%" src={book}  alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle tag="h5">التوثيق ٢</CardTitle>
          
         
        </CardBody>
      </Card>
      </div>

      <div className="col-md-4">
        <Card className="card1">
        <CardImg top width="100%" src={book}  alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle tag="h5">التوثيق ٣</CardTitle>
          
         
        </CardBody>
      </Card>
      </div>
</div>

</div>



{/* Second row */}

<div className="listCard2">
        <div className="cardTitle" >  مشاريعنا </div>
      <div className="row">
      <div className="col-md-4">
        <Card className="card1">
        <CardImg top width="100%" src={whiteBook}  alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle tag="h5">مشروع ١ </CardTitle>
          
         
        </CardBody>
      </Card>
      </div>

      <div className="col-md-4">
<Card className="card1">
        <CardImg top width="100%" src={book}  alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle tag="h5">مشروع ٢</CardTitle>
          
         
        </CardBody>
      </Card>
      </div>

      <div className="col-md-4">
<Card className="card1">
        <CardImg top width="100%" src={book}  alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle tag="h5">مشروع ٣</CardTitle>
          
         
        </CardBody>
      </Card>
      </div>


      <div className="col-md-4">
<Card className="transparentCard">
        <CardImg top width="100%" src={whiteBook}  alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle tag="h5">مشروع ٤</CardTitle>
          <div class='text-on-image'>
قريبا
          </div>
         
        </CardBody>
      </Card>
      </div>


      <div className="col-md-4">
<Card className="transparentCard">
        <CardImg top width="100%" src={whiteBook}  alt="Card image cap" />
        <div class='text-on-image'>
قريبا
          </div>
        <CardBody className="cardBody">
          <CardTitle tag="h5">مشروع ٥</CardTitle>
          
         
        </CardBody>
      </Card>
      </div>
</div>

</div>

</div>
<Footer />
    </div>


  );

  
}

export default App;
