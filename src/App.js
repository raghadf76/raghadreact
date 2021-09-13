import logo from './logo.svg';
import './App.css';
import safcsplogo from './safcsplogo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={safcsplogo} className="App-logo" alt="logo" />

        
        
        
        <p
        className="title"
        >
         التوثيق الموحد
        </p>

        <p
        className="secondtitle"
        >
لمشاريع ادارة تطوير البرمجيات 

         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer className="fixed-bottom">
    <div className="row">
     <div className="col-lg-12">
      <p>جميع الحقوق محفوظه</p>
     </div>
    </div>
   </footer>
    </div>




  );


  
}

export default App;
