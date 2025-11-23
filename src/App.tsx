import { useEffect, useState } from 'react';
import './App.css';
import WholeCanvas from './components/canvas/WholeCanvas';
import { Navbar } from './components/Navbar';

function App() {
    const [supports3D, setSupports3D] = useState<boolean>(false);
    const isWebGLUsable = () => {
        try {
            const canvas = document.createElement('canvas');

            if (!window.WebGLRenderingContext) return false;

            const gl =
                canvas.getContext('webgl') ||
                canvas.getContext('experimental-webgl');

            if (!gl) return false;
            return true;
        } catch {
            return false;
        }
    };
    useEffect(() => {
        const ok = isWebGLUsable();
        setSupports3D(ok);
    }, []);
    if (supports3D === null) {
        return <div>Checking device capabilities…</div>;
    }

    if (!supports3D) {
        return (
            <div>
                <h1>Simple version</h1>
                <p>
                    Your device/browser does not fully support our 3D
                    experience, so you are seeing a lightweight version instead.
                </p>
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
}

export default App;
