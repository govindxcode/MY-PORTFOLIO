import { useEffect, useRef, useState } from 'react';

const SNIPPETS = [
  {
    file: 'App.tsx',
    code: `const App = () => {
  return <main className="portfolio">
    <h1>Govind Rana</h1>
  </main>;
};`,
  },
  {
    file: 'skills.cpp',
    code: `#include <iostream>
int main() {
  std::cout << "Keep building";
  return 0;
}`,
  },
  {
    file: 'server.js',
    code: `const app = express();
app.get("/api/projects", async (_req, res) => {
  res.json(await Project.find());
});`,
  },
  {
    file: 'styles.css',
    code: `.portfolio {
  color: #c5cedb;
  border: 1px solid #ff3045;
  background: #020204;
}`,
  },
];

const KEYWORDS = new Set([
  'const', 'return', 'main', 'int', 'include', 'async', 'await', 'std', 'cout',
]);

function tokenClass(token: string) {
  if (KEYWORDS.has(token)) return 'code-token-keyword';
  if (/^["'#].*["']?$/.test(token)) return 'code-token-string';
  if (/^(className|portfolio|App|Project|find|json|express)$/.test(token)) return 'code-token-name';
  if (/^(<\/?|\/?>|[{}()[\];,.=<>])$/.test(token)) return 'code-token-punctuation';
  return '';
}

function SyntaxLine({ text }: { text: string }) {
  const parts = text.split(/(\b(?:const|return|main|int|include|async|await|std|cout|className|portfolio|App|Project|find|json|express)\b|["'][^"']*["']|#[\w-]+|[{}()[\];,.=<>])/g);

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${index}-${part}`} className={tokenClass(part)}>{part}</span>
      ))}
    </>
  );
}

export function AnimatedCodeScreen() {
  const screenRef = useRef<HTMLDivElement>(null);
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const snippet = SNIPPETS[snippetIndex];
  const visibleLines = snippet.code.slice(0, visibleCharacters).split('\n');

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);
    let isIntersecting = false;
    const updateVisibility = () => setIsActive(isIntersecting && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      updateVisibility();
    }, { threshold: 0.1 });

    if (screenRef.current) observer.observe(screenRef.current);
    document.addEventListener('visibilitychange', updateVisibility);
    motionPreference.addEventListener('change', updateMotionPreference);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', updateVisibility);
      motionPreference.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleCharacters(snippet.code.length);
      return;
    }
    if (!isActive) return;

    const timeout = window.setTimeout(() => {
      if (visibleCharacters < snippet.code.length) {
        setVisibleCharacters((count) => count + 1);
      } else {
        setSnippetIndex((index) => (index + 1) % SNIPPETS.length);
        setVisibleCharacters(0);
      }
    }, visibleCharacters < snippet.code.length ? 32 : 1500);

    return () => window.clearTimeout(timeout);
  }, [isActive, prefersReducedMotion, snippet.code, visibleCharacters]);

  return (
    <div ref={screenRef} className="animated-code-screen code-panel-glow absolute bottom-7 right-[7%] z-10 hidden w-[min(248px,45vw)] overflow-hidden rounded-xl border border-red-500/30 bg-[#090607]/95 p-3 shadow-[0_0_28px_rgba(255,35,55,0.2)] backdrop-blur-md sm:block" role="img" aria-label={`Live code typing in ${snippet.file}`}>
      <div className="mb-2 flex items-center gap-1.5 border-b border-red-400/15 pb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="ml-auto font-mono text-[9px] text-red-300">{snippet.file}</span>
        <span className="code-live-indicator ml-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </div>
      <pre className="min-h-[72px] overflow-hidden font-mono text-[8px] leading-[1.55] text-slate-200 sm:text-[9px]">
        {visibleLines.map((line, index) => (
          <div key={index} className="flex min-h-[1.55em]">
            <span className="mr-2 w-3 shrink-0 select-none text-right text-slate-600">{index + 1}</span>
            <code className="whitespace-pre">
              <SyntaxLine text={line} />
              {index === visibleLines.length - 1 && !prefersReducedMotion && (
                <span className="code-caret" aria-hidden="true" />
              )}
            </code>
          </div>
        ))}
      </pre>
    </div>
  );
}
