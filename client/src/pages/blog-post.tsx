import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NewsletterForm from "@/components/forms/newsletter-form";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, TrendingUp } from "lucide-react";
import { getPostBySlug, getRecentPosts } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    if (slug) {
      const foundPost = getPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        document.title = `${foundPost.title} - Brandforce.ai Blog`;
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute("content", foundPost.excerpt);
        }

        // Get related posts (excluding current post)
        const recent = getRecentPosts(4).filter(p => p.id !== foundPost.id);
        setRelatedPosts(recent);
      }
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-manrope font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Article Header */}
      <section className="py-16 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {post.author.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                  </div>
                </div>
                
                <Separator orientation="vertical" className="h-12" />
                
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{formatDate(post.publishDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{post.readTime} min read</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:font-manrope prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-lg prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-ul:text-lg prose-ol:text-lg prose-li:text-lg prose-invert">
              <div dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/^# (.*$)/gm, '<h1>$1</h1>')
                  .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                  .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/^- (.*$)/gm, '<li>$1</li>')
                  .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
                  .replace(/^(\d+\. .*$)/gm, '<li>$1</li>')
                  .replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
                  .replace(/`([^`]+)`/g, '<code>$1</code>')
                  .replace(/^\> (.*$)/gm, '<blockquote>$1</blockquote>')
                  .replace(/^(?!<[h1-6]|<ul|<ol|<li|<pre|<blockquote)/gm, '<p>')
                  .replace(/(?<!<\/[h1-6]>|<\/ul>|<\/ol>|<\/li>|<\/pre>|<\/blockquote>)$/gm, '</p>')
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-elevated">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8">
                <BookOpen className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-manrope font-bold">Related Articles</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary">{relatedPost.tags[0]}</Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          {relatedPost.readTime} min
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-manrope font-bold mb-3 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-primary">
                              {relatedPost.author.split(' ').map((n: string) => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">{relatedPost.author}</span>
                        </div>
                        
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Button variant="ghost" size="sm">
                            Read
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-manrope font-bold mb-4">
              More SEO Insights Like This
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get expert analysis and actionable SEO strategies delivered to your inbox monthly.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}