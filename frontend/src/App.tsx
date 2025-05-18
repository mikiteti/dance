import './index.css'
import { Global } from './global'
import Title from './components/Title';
import Competition from './components/Competition';

console.log(Global);
fetch(`${Global.URL}/hello`).then(res => res.text()).then(res => console.log(res));
fetch(`${Global.URL}/users`).then(res => res.json()).then(res => console.log(res));

const compdata = {
  title: 'Budapest Dance Competition',
  subtitle: 'Orszagos Bajnoksag',
  list: [
    { title: 'Szervező', value: 'Marko Stúdió' },
    { title: 'Időpont', value: '2025. 07. 17.' },
    { title: 'Helyszín', value: 'Etele út 59.' },
    { title: 'Nevezési határidő', value: '2025. 07. 12.' },
  ]
}

function App() {
  return (
    <>
      <div className='fixed inset-0 bg-linear-to-br from-[#9cdad6] to-[#717bef] -z-10'></div>
      <Title value='Következő Versenyek' />
      <Competition data={compdata} />
    </>
  )
}

export default App
