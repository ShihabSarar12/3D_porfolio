import { useScroll } from '@react-three/drei';
import { useEffect } from 'react';

export function ScrollBridge() {
    const scroll = useScroll();

    useEffect(() => {
        (window as any).__scrollControls = scroll;
    }, [scroll]);

    return null;
}
