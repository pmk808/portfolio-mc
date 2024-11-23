// src/components/Blog/Blog.tsx
import { FC } from 'react';
import { Construction } from 'lucide-react';
import * as S from './styles';

export const Blog: FC = () => {
  return (
    <S.BlogSection id="blog">
      <S.ContentContainer>
        <S.SectionTitle>Learning New SHIT</S.SectionTitle>
        <S.SectionSubtitle>
          Solutions, Hacks & Interesting Things - My technical discoveries and learnings
        </S.SectionSubtitle>
        
        <S.ConstructionWrapper>
          <Construction className="animate-pulse" size={64} />
          <S.ConstructionTitle>Under Construction</S.ConstructionTitle>
          <S.ConstructionText>
            This section is currently being built. Check back soon for updates!
          </S.ConstructionText>
        </S.ConstructionWrapper>
      </S.ContentContainer>
    </S.BlogSection>
  );
};