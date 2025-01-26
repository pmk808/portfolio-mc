// src/components/Blog/styles.ts
import styled from 'styled-components';

export const BlogSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 1rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.text.primary};
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 3rem;
  text-align: left;
`;

export const ConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  
  svg {
    margin-bottom: 1rem;
  }
`;

export const ConstructionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const ConstructionText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.secondary};
`;

export const Emphasis = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

export const PostsContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
`;

export const PostItem = styled.article`
  background: ${({ theme }) => theme.bg.secondary};
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.border};
`;

export const PostTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 0.5rem;
`;

export const PostDate = styled.time`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  display: block;
  margin-bottom: 1rem;
`;

export const PostContent = styled.p`
  color: ${({ theme }) => theme.text.primary};
  line-height: 1.6;
`;

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.accent};
  font-size: 0.95rem;
  padding: 0.5rem 0;
  cursor: pointer;
  text-decoration: underline;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.bg.primary};
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  margin: 2rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const ModalDate = styled.time`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text.secondary};
  display: block;
  margin-bottom: 1.5rem;
`;

export const ModalBody = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.primary};
`;

export const NavigationButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1001;

  &:hover {
    background: ${({ theme }) => theme.bg.secondary};
    color: ${({ theme }) => theme.accent};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.prev {
    left: 20%;
  }

  &.next {
    right: 20%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.accent};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    background: ${({ theme }) => theme.accent};
    color: white;
    border-color: ${({ theme }) => theme.accent};
  }
`;