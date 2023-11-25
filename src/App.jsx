import { useState } from 'react'
import './App.css'

function App() {

    const [valor, setValor] = useState("")
    const handleChange = (event) => {setValor(event.target.value)}

  return (
    <>
      <main>
        <h1>Gerador de QRcode</h1>
        <div>
          <p>Insira um texto ou uma URL para criar um QRcode</p>
        </div>
        <form>
          <input type="text" placeholder='Digite aqui...' id='text-input' onChange={handleChange}/>
        </form>
        <div id='qr-code'>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valor}`} alt="" />
        </div>
      </main>
    </>
  )
}
export default App