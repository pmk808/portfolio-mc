// src/components/Contact/styles.ts
import styled from 'styled-components';

export const ContactSection = styled.section`
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
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
  max-width: 600px;
  margin-bottom: 3rem;
`;

export const ContactContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContactText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.text.secondary};
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  span {
    font-size: 0.875rem;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => `${theme.bg.secondary}`};
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: ${({ theme }) => theme.accent};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background-color: ${({ theme }) => `${theme.accent}dd`};
  }

  &:active {
    transform: translateY(0);
  }
`;