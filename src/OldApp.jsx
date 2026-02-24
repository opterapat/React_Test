import Contact from './assets/Contact.jsx';
import Counter from './assets/Counter.jsx';
import Hello from './assets/Hello.jsx';

function App() {
  const helloData = [
    {name: 'Tawan', message: 'Hi there'},
    {name: 'Tom', message:'Hello'}
  ];

  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) =>(
        <Hello key = {index} name={data.name} message={data.message} />
      ))}

      <Contact email ="s6706022510352@email.kmutnb.ac.th" phone="0958785107" />
    </div>
  );
}

export default App;
