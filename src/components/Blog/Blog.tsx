// src/components/Blog/Blog.tsx
import { FC } from 'react';
import { Construction } from 'lucide-react';
import * as S from './styles';

export const Blog: FC = () => {
  return (
    <S.BlogSection id="blog">
      <S.ContentContainer>
  <S.SectionTitle>Learning New <S.Emphasis>SHIT</S.Emphasis></S.SectionTitle>
  <S.SectionSubtitle>
    <S.Emphasis>S</S.Emphasis>olutions, 
    <S.Emphasis> H</S.Emphasis>acks & 
    <S.Emphasis> I</S.Emphasis>nteresting 
    <S.Emphasis> T</S.Emphasis>hings - I'll be posting here some personal discoveries, whether they're about tech or just fun, surprising stuff I find online
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