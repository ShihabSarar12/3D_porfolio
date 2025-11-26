import { useEffect, useState } from 'react';
import './App.css';
import WholeCanvas from './components/canvas/WholeCanvas';
import { Navbar } from './components/Navbar';
import isWebGLUsable from './utilities/isWebGLUsable';

const App = () => {
    const [supports3D, setSupports3D] = useState<boolean | null>(null);

    useEffect(() => {
        const ok = isWebGLUsable();
        setSupports3D(ok);
    }, []);

    if (supports3D === null) {
        return (
            <div className='text-white bg-black h-screen w-screen p-10 flex justify-center items-center'>
                <h1 className='font-bold'>Checking Device Capabilities</h1>
            </div>
        );
    }

    if (!supports3D) {
        return (
            <div className='w-screen h-screen bg-gray-900 flex flex-col justify-center items-center px-4 text-center'>
                <div className='bg-red-600/20 border border-red-500 rounded-xl p-8 max-w-md shadow-lg'>
                    <span className='text-6xl mb-4 block'>⚠️</span>
                    <h1 className='text-2xl font-bold text-red-500 mb-2'>
                        Browser Not Supported
                    </h1>
                    <p className='text-white mb-4'>
                        Your device or browser does not fully support the 3D
                        features of this website.
                    </p>
                    <p className='text-white mb-2'>
                        <strong>For Android users:</strong> Please try opening
                        this website in Chrome or Firefox.
                    </p>
                    <p className='text-white mb-4'>
                        <strong>For iPhone users:</strong> Please use Safari for
                        the best experience.
                    </p>
                    <a
                        href='/'
                        className='inline-block mt-2 bg-red-500 text-white font-bold py-2 px-6 rounded hover:bg-red-600 transition-colors'
                    >
                        Try Again
                    </a>
                </div>
            </div>
        );
    }

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
};

export default App;
