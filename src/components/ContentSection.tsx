import React from 'react';
import type { ContentSection as ContentSectionType } from '../types/Content';
import { Furigana, FuriganaText } from './FuriganaText';

interface ContentSectionProps {
  section: ContentSectionType;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ section }) => {
  const renderTextContent = (content: Array<string | { kanji: string; reading: string }>) => {
    return content.map((item, index) => {
      if (typeof item === 'string') {
        return item;
      }
      return <Furigana key={index} kanji={item.kanji} reading={item.reading} />;
    });
  };

  return (
    <article id={section.id}>
      <FuriganaText>
        <h2>
          <Furigana kanji={section.title.kanji} reading={section.title.reading} />
        </h2>
        
        {section.paragraphs.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex}>
            {renderTextContent(paragraph)}
          </p>
        ))}
      </FuriganaText>
    </article>
  );
};