import './index.css'
import { Global } from './global'
import Title from './components/Title';
import Competition from './components/Competition';
import Navbar from './components/Navbar';
import TopButton from './components/TopButton';

console.log(Global);
fetch(`${Global.URL}/hello`).then(res => res.text()).then(res => console.log(res));
fetch(`${Global.URL}/users`).then(res => res.json()).then(res => console.log(res));

const compdata = {
  title: 'Budapest Dance Competition',
  subtitle: 'Orszagos Bajnoksag',
  list: [
    { key: '0', title: 'Szervező', value: 'Marko Stúdió' },
    { key: '1', title: 'Időpont', value: '2025. 07. 17.' },
    { key: '2', title: 'Helyszín', value: 'Etele út 59.' },
    { key: '3', title: 'Nevezési határidő', value: '2025. 07. 12.' },
  ]
}

function App() {
  return (
    <>
      <div className='fixed inset-0 bg-linear-to-br from-[#9cdad6] to-[#717bef] -z-10'></div>
      <div className='h-12 mb-4'></div>
      <TopButton side="left">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /> </svg>
        <p className='pr-1'>Versenyek</p>
      </TopButton>
      <TopButton>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /> </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /> </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
      </TopButton>
      <div className='max-w-[1400px] mx-auto'>
        <Title>Következő Versenyek</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-11/12 mx-auto">
          <Competition {...compdata} />
          <Competition {...compdata} />
          <Competition {...compdata} />
          <Competition {...compdata} />
          <Competition {...compdata} />
        </div>
      </div>
      <Navbar />
      <div className='h-18 mt-4'></div>
    </>
  )
}

export default App
