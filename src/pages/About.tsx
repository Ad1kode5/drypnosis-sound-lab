import { Music2, Youtube, Instagram, Twitter, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { artistInfo } from '@/lib/mockData';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              {artistInfo.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              aka {artistInfo.aka}
            </p>
          </div>

          {/* Image */}
          <div className="glass-card p-4 rounded-2xl mb-16 animate-fade-in">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop"
                alt={artistInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="glass-card p-8 rounded-2xl mb-12 animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">About the Artist</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {artistInfo.bio}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With a unique blend of atmospheric production and lyrical prowess, DITYA has carved out a distinct space in the modern music landscape. From introspective tracks to high-energy bangers, every release showcases versatility and artistic growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond creating music, DITYA is passionate about collaborating with other artists and helping bring their creative visions to life through custom production work and exclusive beats.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 text-center animate-fade-in hover:glow-effect transition-all">
              <div className="text-4xl font-bold text-gradient mb-2">50K+</div>
              <p className="text-muted-foreground">Monthly Listeners</p>
            </div>
            <div className="glass-card p-6 text-center animate-fade-in hover:glow-effect transition-all" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">25+</div>
              <p className="text-muted-foreground">Released Tracks</p>
            </div>
            <div className="glass-card p-6 text-center animate-fade-in hover:glow-effect transition-all" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">100+</div>
              <p className="text-muted-foreground">Collaborations</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center">Connect</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="glow-effect"
                asChild
              >
                <a
                  href={artistInfo.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Music2 className="mr-2 w-5 h-5" />
                  Spotify
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-card"
                asChild
              >
                <a
                  href={artistInfo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="mr-2 w-5 h-5" />
                  YouTube
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-card"
                asChild
              >
                <a
                  href={artistInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 w-5 h-5" />
                  Instagram
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-card"
                asChild
              >
                <a
                  href={artistInfo.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2 w-5 h-5" />
                  Twitter
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
