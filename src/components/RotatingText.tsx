import { useEffect, useState } from "react";

export function RotatingText({ words, prefix = "" }: { words: string[]; prefix?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDeleting(false); setI((v) => v + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="inline-flex items-baseline gap-2">
      {prefix && <span className="text-muted-foreground">{prefix}</span>}
      <span className="text-gradient font-semibold">{text}</span>
      <span className="inline-block h-[1em] w-[3px] animate-pulse bg-primary align-middle" />
    </span>
  );
}
