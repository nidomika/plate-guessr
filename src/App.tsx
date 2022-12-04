import './App.css'

function Voivodeship() {
  const plates = [
    {
      abbreviation: 'B',
      name: 'podlaskie'
    },
    {
      abbreviation: 'C',
      name: 'kujawsko-pomorskie'
    },
    {
      abbreviation: 'D',
      name: 'dolnośląskie'
    },
    {
      abbreviation: 'E',
      name: 'łódzkie'
    },
    {
      abbreviation: 'F',
      name: 'lubuskie'
    },
    {
      abbreviation: 'G',
      name: 'pomorskie'
    },
    {
      abbreviation: 'K',
      name: 'małopolskie'
    },
    {
      abbreviation: 'L',
      name: 'lubelskie'
    },
    {
      abbreviation: 'N',
      name: 'warmińsko-mazurskie'
    },
    {
      abbreviation: 'O',
      name: 'opolskie'
    },
    {
      abbreviation: 'P',
      name: 'wielkopolskie'
    },
    {
      abbreviation: 'S',
      name: 'śląskie'
    },
    {
      abbreviation: 'T',
      name: 'świętokrzyskie'
    },
    {
      abbreviation: 'W',
      name: 'mazowieckie'
    },
    {
      abbreviation: 'Z',
      name: 'zachodniopomorskie'
    }
  ]

  return <p>{plates[Math.floor(Math.random() * plates.length)].name}</p>
}

function App() {
  return (
    <div className='App'>
      <Voivodeship></Voivodeship>
    </div>
  )
}

export default App
