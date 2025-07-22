import React from 'react';
import type { SiteContent } from '../types/Content';
import { Furigana } from './FuriganaText';

interface TableOfContentsProps {
  content: SiteContent;
  onSectionClick: (sectionId: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ content, onSectionClick }) => {
  return (
    <nav className="table-of-contents">
      <h2>目次</h2>
      <ul>
        {content.sections.map(section => (
          <li key={section.id}>
            <button
              onClick={() => onSectionClick(section.id)}
              className="toc-link"
            >
              <Furigana kanji={section.title.kanji} reading={section.title.reading} />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};