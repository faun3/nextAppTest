"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <>
      <div>woah nelly bad stuff happened</div>
      <button
        onClick={reset}
        className="px-6 py-3 bg-emerald-500 text-white font-mono text-xl inline-block rounded-lg"
      >
        clicker
      </button>
    </>
  );
}
