import type { ContentSection as ContentSectionType } from '../types/Content';
import { Furigana, FuriganaText } from './FuriganaText';

interface ContentSectionProps {
  section: ContentSectionType;
  ref?: React.Ref<HTMLElement>;
}

export const ContentSection = ({ section, ref }: ContentSectionProps) => {
  const renderTextContent = (content: Array<string | { kanji: string; reading: string }>) => {
    return content.map((item, index) => {
      if (typeof item === 'string') {
        return item;
      }
      return <Furigana key={index} kanji={item.kanji} reading={item.reading} />;
    });
  };

  return (
    <article ref={ref} id={section.id}>
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