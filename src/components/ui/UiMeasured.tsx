import { memo, useLayoutEffect, useRef, type ReactNode } from 'react';

const UiMeasured = memo(
    ({
        onHeightChange,
        children,
    }: {
        onHeightChange: (height: number) => void;
        children: ReactNode;
    }) => {
        const ref = useRef<HTMLDivElement>(null);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            const update = () => {
                const height = el.clientHeight;
                onHeightChange(height);
            };

            onHeightChange(el.clientHeight);

            if (typeof ResizeObserver !== 'undefined') {
                const ro = new ResizeObserver(update);
                ro.observe(el);
                return () => ro.disconnect();
            }

            window.addEventListener('resize', update);
            return () => window.removeEventListener('resize', update);
        }, [onHeightChange]);

        return <div ref={ref}>{children}</div>;
    }
);

export default UiMeasured;
