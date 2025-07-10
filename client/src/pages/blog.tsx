import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NewsletterForm from "@/components/forms/newsletter-form";
import { Calendar, Clock, ArrowRight, Search, TrendingUp, Target, Brain, Filter } from "lucide-react";
import { getAllPosts, getFeaturedPosts } from "@/data/blogPosts";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    document.title = "Blog - Brandforce.ai | AI SEO Insights and Trends";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Stay ahead with the latest AI SEO insights, trends, and best practices. Expert analysis and actionable tips for modern SEO success.");
    }
  }, []);

  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const featuredPost = featuredPosts[0];

  // Filter posts based on search and tag
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = selectedTag === "" || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  // Get unique tags with counts
  const allTags = allPosts.flatMap(post => post.tags);
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const popularTags = Object.entries(tagCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 8);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-manrope font-bold mb-6">
              AI Meets SEO — Stay Ahead
            </h1>
            <p className="text-xl text-secondary mb-8">
              Expert insights, actionable strategies, and the latest trends in AI-powered SEO
            </p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-4">
                <Brain className="h-8 w-8 text-neon-green" />
                <span className="text-lg font-medium">Expert Analysis</span>
                <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                <span className="text-lg font-medium">Actionable Tips</span>
                <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                <span className="text-lg font-medium">Industry Trends</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-elevated border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Tag Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="bg-background border border-border rounded-md px-3 py-2 text-sm"
                >
                  <option value="">All Topics</option>
                  {popularTags.map(([tag, count]) => (
                    <option key={tag} value={tag}>
                      {tag} ({count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground mr-2">Popular:</span>
                {popularTags.slice(0, 6).map(([tag]) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                    className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                      selectedTag === tag
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-primary text-primary-foreground mb-4">Featured Article</Badge>
              <Card className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{featuredPost.tags[0]}</Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredPost.publishDate)}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime} min read
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-manrope font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-xl text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{featuredPost.author}</p>
                        <p className="text-sm text-muted-foreground">{featuredPost.authorRole}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button>
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-manrope font-bold mb-2">Latest Articles</h2>
                <p className="text-muted-foreground">
                  {filteredPosts.length} articles found
                  {searchTerm && ` for "${searchTerm}"`}
                  {selectedTag && ` in ${selectedTag}`}
                </p>
              </div>
              {(searchTerm || selectedTag) && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTag("");
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{post.tags[0]}</Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime} min
                      </div>
                    </div>
                    <CardTitle className="text-xl font-manrope group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{formatDate(post.publishDate)}</p>
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm">
                          Read
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-manrope font-bold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or clearing the filters.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTag("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-manrope font-bold mb-4">
              Stay Ahead of SEO Trends
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest AI SEO insights, case studies, and actionable tips delivered to your inbox monthly.
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