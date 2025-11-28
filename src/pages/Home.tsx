import { Link } from 'react-router-dom';
import { Play, Music, ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { artistInfo } from '@/lib/mockData';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6">
              DRYPNOSIS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {artistInfo.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-effect group" asChild>
                <Link to="/discography">
                  <Play className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                  Listen Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="glass-card" asChild>
                <Link to="/store">
                  <ShoppingBag className="mr-2 w-5 h-5" />
                  Browse Beats
                </Link>
              </Button>
            </div>
          </div>

          {/* Spotify Embed */}
          <div className="mt-16 max-w-2xl mx-auto animate-fade-in">
            <div className="glass-card p-4 rounded-2xl">
              <iframe
                src="https://open.spotify.com/embed/artist/0YKdFRvszqDXk5Gu1OPhYF?utm_source=generator"
                width="100%"
                height="380"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 hover:glow-effect transition-all duration-300 animate-fade-in">
            <Music className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Latest Releases</h3>
            <p className="text-muted-foreground">
              Stream exclusive tracks and albums across all platforms
            </p>
          </div>
          
          <div className="glass-card p-6 hover:glow-effect transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ShoppingBag className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Beats</h3>
            <p className="text-muted-foreground">
              High-quality beats and sample packs for your next project
            </p>
          </div>
          
          <div className="glass-card p-6 hover:glow-effect transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Sparkles className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Exclusive Rights</h3>
            <p className="text-muted-foreground">
              Get full ownership with exclusive beat licenses
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gradient mb-12">
            Watch on YouTube
          </h2>
          <div className="max-w-4xl mx-auto glass-card p-4 rounded-2xl">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?list=UU0YKdFRvszqDXk5Gu1OPhYF"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
