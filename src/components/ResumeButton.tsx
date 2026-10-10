import { FileText, AlertCircle, Download } from 'lucide-react';
import { useResumeAvailable } from '../hooks/useResumeAvailable';

interface ResumeButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'nav';
}

export function ResumeButton({ className = '', variant = 'primary' }: ResumeButtonProps) {
  const isAvailable = useResumeAvailable();

  if (isAvailable === null) {
    // Loading state without layout shift
    return <div className={`inline-block w-32 h-10 animate-pulse bg-border-subtle rounded-md ${className}`} />;
  }

  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200";
  
  const variants = {
    primary: "px-6 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-md",
    secondary: "px-6 py-3 border border-border-subtle hover:border-accent-500 hover:text-accent-500 rounded-md",
    nav: "px-4 py-2 border border-border-subtle hover:border-accent-500 hover:text-accent-500 rounded-md text-sm"
  };

  if (!isAvailable) {
    if (variant === 'nav') {
      return (
        <span
          title="Add public/resume.pdf to enable this download."
          className={`inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-red-500/70 px-4 py-2 text-sm font-semibold text-text-primary opacity-80 ${className}`}
          aria-label="Download CV unavailable"
        >
          <Download className="h-4 w-4 text-red-300" />
          <span>Download CV</span>
        </span>
      );
    }
    
    return (
      <div className={`inline-flex items-center gap-2 text-sm text-text-muted ${className}`}>
        <AlertCircle className="w-4 h-4" />
        <span>Resume not added yet. Place file at <code className="bg-bg-surface px-1 py-0.5 rounded border border-border-subtle">public/resume.pdf</code></span>
      </div>
    );
  }

  return (
    <a
      href="/resume.pdf"
      download="Resume.pdf"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label="Download Resume"
    >
      {variant === 'nav' ? <Download className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
      <span>{variant === 'nav' ? 'Download CV' : 'Resume'}</span>
    </a>
  );
}
