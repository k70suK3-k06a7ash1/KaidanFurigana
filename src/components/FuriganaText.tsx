import React from 'react';

interface FuriganaProps {
  kanji: string;
  reading: string;
}

interface FuriganaTextProps {
  children: React.ReactNode;
}

export const Furigana: React.FC<FuriganaProps> = ({ kanji, reading }) => (
  <ruby>
    {kanji}
    <rt>{reading}</rt>
  </ruby>
);

export const FuriganaText: React.FC<FuriganaTextProps> = ({ children }) => (
  <div className="furigana-text">
    {children}
  </div>
);