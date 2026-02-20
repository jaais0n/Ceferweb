import { useState, useEffect, useRef } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

function easeOut(t: number) {
    return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(target: number, duration: number, trigger: number): number {
    const [value, setValue] = useState(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        setValue(0);
        const start = performance.now();
        const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setValue(Math.round(easeOut(progress) * target));
            if (progress < 1) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [trigger]); // eslint-disable-line react-hooks/exhaustive-deps

    return value;
}

export function useScrambleText(text: string, duration: number, trigger: number): string {
    const [display, setDisplay] = useState(text);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const start = performance.now();
        const len = text.length;
        const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const revealed = Math.floor(easeOut(progress) * len);
            let result = "";
            for (let i = 0; i < len; i++) {
                result += i < revealed
                    ? text[i]
                    : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            }
            setDisplay(result);
            if (progress < 1) rafRef.current = requestAnimationFrame(tick);
            else setDisplay(text);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [trigger]); // eslint-disable-line react-hooks/exhaustive-deps

    return display;
}

export function useHeroTrigger(): number {
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        const t = setTimeout(() => setTrigger((k) => k + 1), 200);
        const handler = () => setTrigger((k) => k + 1);
        window.addEventListener("cefer:retrigger-hero", handler);
        return () => { clearTimeout(t); window.removeEventListener("cefer:retrigger-hero", handler); };
    }, []);

    return trigger;
}

export function retriggerHeroAnimation() {
    window.dispatchEvent(new Event("cefer:retrigger-hero"));
}
