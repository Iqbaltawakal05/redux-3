import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import { useEffect, useState } from 'react'
const App = () => {
  const isOpen = false
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
      </>
      )}
    </main>
  )
}
export default App
