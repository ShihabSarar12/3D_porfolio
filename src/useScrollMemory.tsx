import { useCallback, useRef } from 'react';
import { useScroll } from '@react-three/drei';

export function useScrollMemory() {
    const scroll = useScroll();
    const savedOffsetRef = useRef<number | null>(null);

    const saveScroll = useCallback(() => {
        savedOffsetRef.current = scroll.offset;
    }, [scroll]);

    const restoreScroll = useCallback(() => {
        if (savedOffsetRef.current == null) return;
        const el = scroll.el;
        if (!el) return;

        const maxScroll = el.scrollHeight - el.clientHeight;
        const target = savedOffsetRef.current * maxScroll;

        el.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    }, [scroll]);

    return { saveScroll, restoreScroll };
}
