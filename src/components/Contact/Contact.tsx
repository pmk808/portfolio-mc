// src/components/Contact/Contact.tsx
import { FC, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import * as S from './styles';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <S.ContactSection id="contact">
      <S.ContentContainer>
        <S.SectionTitle>Contact</S.SectionTitle>
        <S.SectionSubtitle>
          Feel free to reach out for collaborations or just a friendly hello
        </S.SectionSubtitle>

        <S.ContactContent>
          <S.ContactInfo>
            <S.ContactText>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </S.ContactText>
            
            <S.ContactLinks>
              <S.ContactLink href="mailto:your.email@example.com">
                <Mail size={20} />
                <span>your.email@example.com</span>
              </S.ContactLink>
              
              <S.ContactLink 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                <span>github.com/yourusername</span>
              </S.ContactLink>
              
              <S.ContactLink 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                <span>linkedin.com/in/yourusername</span>
              </S.ContactLink>
            </S.ContactLinks>
          </S.ContactInfo>

          <S.ContactForm onSubmit={handleSubmit}>
            <S.InputGroup>
              <S.Label htmlFor="name">Name</S.Label>
              <S.Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="email">Email</S.Label>
              <S.Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="message">Message</S.Label>
              <S.TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />
            </S.InputGroup>

            <S.SubmitButton type="submit">
              <span>Send Message</span>
              <Send size={16} />
            </S.SubmitButton>
          </S.ContactForm>
        </S.ContactContent>
      </S.ContentContainer>
    </S.ContactSection>
  );
};

export default Contact;