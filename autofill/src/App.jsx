import React from 'react'
import Form from './components/Form'



function App() {

  return (
    <div className="container mx-auto flex   flex-col md:flex-row justify-center items-center">

      <div>

        <h1 className="text-3xl font-bold text-center mt-10 mb-5 dark:text-white ">Auto Fill Form by Resume</h1>
        <p className="text-center dark:text-white ">Sample Resume <a className='text-blue-300' href='https://drive.google.com/file/d/1Ze7kGiYfJcfj7_5PMcuJa_rhN8nupUOM/view?usp=drive_link'>Download & test</a></p>
      </div>
      <Form />
    </div>
  )
}

export default App
