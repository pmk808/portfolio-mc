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

const POSTS_PER_PAGE = 3;

export const Blog: FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const navigatePost = (direction: 'prev' | 'next') => {
    if (!selectedPost) return;
    const currentIndex = posts.findIndex(post => post.id === selectedPost.id);
    const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex >= 0 && nextIndex < posts.length) {
      setSelectedPost(posts[nextIndex]);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch('https://blog-api-issf.onrender.com/posts', {
          headers: {
            'Content-Type': 'application/json',
          },
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

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <S.PageButton
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </S.PageButton>
      );
    }
    return pages;
  };

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
          <>
            <S.PostsContainer>
              {currentPosts.map(post => (
                <S.PostItem key={post.id}>
                  <S.PostTitle>{post.title}</S.PostTitle>
                  <S.PostDate>
                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </S.PostDate>
                  <S.PostContent>{post.content.slice(0, 200)}...</S.PostContent>
                  <S.ReadMoreButton onClick={() => setSelectedPost(post)}>
                    Read more
                  </S.ReadMoreButton>
                </S.PostItem>
              ))}
            </S.PostsContainer>
            <S.PaginationContainer>
              <S.PageButton
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                &lt;
              </S.PageButton>
              {renderPagination()}
              <S.PageButton
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                &gt;
              </S.PageButton>
            </S.PaginationContainer>
          </>
        ) : (
          <S.ConstructionWrapper>
            <Construction className="animate-pulse" size={64} />
            <S.ConstructionTitle>No Posts Yet</S.ConstructionTitle>
            <S.ConstructionText>Check back soon for new content!</S.ConstructionText>
          </S.ConstructionWrapper>
        )}

        {selectedPost && (
          <>
            <S.NavigationButton
              className="prev"
              onClick={() => navigatePost('prev')}
              disabled={posts.indexOf(selectedPost) === 0}
            >
              &lt;
            </S.NavigationButton>
            <S.NavigationButton
              className="next"
              onClick={() => navigatePost('next')}
              disabled={posts.indexOf(selectedPost) === posts.length - 1}
            >
              &gt;
            </S.NavigationButton>
            <S.ModalOverlay onClick={() => setSelectedPost(null)}>
              <S.ModalContent onClick={e => e.stopPropagation()}>
                <S.CloseButton onClick={() => setSelectedPost(null)}>×</S.CloseButton>
                <S.ModalTitle>{selectedPost.title}</S.ModalTitle>
                <S.ModalDate>
                  {new Date(selectedPost.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </S.ModalDate>
                <S.ModalBody>{selectedPost.content}</S.ModalBody>
              </S.ModalContent>
            </S.ModalOverlay>
          </>
        )}
      </S.ContentContainer>
    </S.BlogSection>
  );
};
