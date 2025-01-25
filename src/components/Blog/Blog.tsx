// src/components/Blog/Blog.tsx
import { FC, useEffect, useState } from 'react';
import { Construction } from 'lucide-react';
import * as S from './styles';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
}

export const Blog: FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
      
      const response = await fetch('https://blog-api-issf.onrender.com/posts', {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data: BlogPost[] = await response.json();
      setPosts(data);

    } catch (err) {
      const errorMessage = err instanceof Error ? 
        (err.name === 'AbortError' ? 'Request timed out' : err.message) :
        'Unknown error';
      setError(`Failed to load posts: ${errorMessage}`);
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  fetchPosts();
}, []);

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

        {isLoading ? (
          <S.ConstructionWrapper>
            <Construction className="animate-pulse" size={64} />
            <S.ConstructionTitle>Loading Posts...</S.ConstructionTitle>
          </S.ConstructionWrapper>
        ) : error ? (
          <S.ConstructionWrapper>
            <Construction className="animate-pulse" size={64} />
            <S.ConstructionTitle>Error Loading Content</S.ConstructionTitle>
            <S.ConstructionText>{error}</S.ConstructionText>
          </S.ConstructionWrapper>
        ) : posts.length > 0 ? (
          <S.PostsContainer>
            {posts.map(post => (
              <S.PostItem key={post.id}>
                <S.PostTitle>{post.title}</S.PostTitle>
                <S.PostDate>
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </S.PostDate>
                <S.PostContent>{post.content}</S.PostContent>
              </S.PostItem>
            ))}
          </S.PostsContainer>
        ) : (
          <S.ConstructionWrapper>
            <Construction className="animate-pulse" size={64} />
            <S.ConstructionTitle>No Posts Yet</S.ConstructionTitle>
            <S.ConstructionText>Check back soon for new content!</S.ConstructionText>
          </S.ConstructionWrapper>
        )}
      </S.ContentContainer>
    </S.BlogSection>
  );
};