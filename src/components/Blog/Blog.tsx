// src/components/Blog/Blog.tsx
import { FC, useEffect, useState } from 'react';
import { Clock, ArrowRight, Tag, Calendar } from 'lucide-react';
import * as S from './styles';

interface BlogPost {
  id: number;
  title: string;
  body: string;
  html_url: string;
  created_at: string;
  labels: Array<{
    name: string;
    color: string;
  }>;
}

export const Blog: FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        // Only show loading indicator on first page
        if (currentPage === 1) setLoading(true);

        const response = await fetch(
          `https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/issues?` +
          `state=open&` +
          `labels=blog&` +
          `sort=created&` +
          `direction=desc&` +
          `per_page=${postsPerPage}&` +
          `page=${currentPage}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        
        // Check if we have more posts to load
        setHasMore(data.length === postsPerPage);
        
        setPosts(prevPosts => 
          currentPage === 1 ? data : [...prevPosts, ...data]
        );
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  // Memoize these functions to prevent unnecessary recreations
  const getOverview = (body: string): string => {
    try {
      const overview = body.split('### Overview')[1]?.split('###')[0] || '';
      return overview.trim().slice(0, 200) + '...';
    } catch (error) {
      return 'Overview not available';
    }
  };

  const getKeyPoints = (body: string): string[] => {
    try {
      const keyPoints = body.split('### Key Points')[1]?.split('###')[0] || '';
      return keyPoints
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(point => point.replace('-', '').trim())
        .slice(0, 3);
    } catch (error) {
      return [];
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Date not available';
    }
  };

  if (error) {
    return (
      <S.BlogSection id="blog">
        <S.ContentContainer>
          <S.ErrorMessage>
            Failed to load blog posts. Please try again later.
          </S.ErrorMessage>
        </S.ContentContainer>
      </S.BlogSection>
    );
  }

  return (
    <S.BlogSection id="blog">
      <S.ContentContainer>
        <S.SectionTitle>Technical Articles</S.SectionTitle>
        <S.SectionSubtitle>
          In-depth explorations of software development concepts and solutions
        </S.SectionSubtitle>

        {posts.length === 0 && !loading ? (
          <S.EmptyState>No articles available yet.</S.EmptyState>
        ) : (
          <>
             <S.BlogGrid>
          {posts.map((post) => (
            <S.BlogCard key={post.id}>
              <S.CardHeader>
                <S.Topic>
                  {post.labels.find(label => label.name !== 'blog')?.name.toUpperCase()}
                </S.Topic>
                <S.Meta>
                  <Calendar size={14} />
                  {formatDate(post.created_at)}
                </S.Meta>
              </S.CardHeader>

              <S.Title>{post.title}</S.Title>
              <S.Overview>{getOverview(post.body)}</S.Overview>

              <S.KeyPointsSection>
                {getKeyPoints(post.body).map((point, idx) => (
                  <S.KeyPoint key={idx}>
                    <span>•</span> {point}
                  </S.KeyPoint>
                ))}
              </S.KeyPointsSection>

              <S.CardFooter>
                <S.Tags>
                  {post.labels
                    .filter(label => label.name !== 'blog')
                    .map((label, idx) => (
                      <S.Tag key={idx} color={`#${label.color}`}>
                        {label.name}
                      </S.Tag>
                    ))}
                </S.Tags>
                <S.ReadMore 
                  href={post.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article <ArrowRight size={16} />
                </S.ReadMore>
              </S.CardFooter>
            </S.BlogCard>
          ))}
        </S.BlogGrid>

            {hasMore && !loading && (
              <S.LoadMoreButton
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                Load More Articles
              </S.LoadMoreButton>
            )}

            {loading && <S.LoadingSpinner />}
          </>
        )}
      </S.ContentContainer>
    </S.BlogSection>
  );
};