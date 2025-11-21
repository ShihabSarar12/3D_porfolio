import './App.css';
import WholeCanvas from './components/canvas/WholeCanvas';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <div className='relative w-full'>
            <div className='fixed top-0 left-0 w-full h-full z-0 pointer-events-none'>
                <WholeCanvas />
            </div>

            <div className='fixed top-0 left-0 w-full z-50'>
                <Navbar />
            </div>
        </div>
    );
}

export default App;
