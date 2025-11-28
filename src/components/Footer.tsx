import { Music2, Youtube, Instagram, Twitter } from 'lucide-react';
import { artistInfo } from '@/lib/mockData';

const Footer = () => {
  return (
    <footer className="glass-card border-t mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">DRYPNOSIS</h3>
            <p className="text-muted-foreground">
              Producer, rapper, and sonic architect.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/discography" className="block text-muted-foreground hover:text-primary transition-colors">
                Discography
              </a>
              <a href="/store" className="block text-muted-foreground hover:text-primary transition-colors">
                Beats Store
              </a>
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={artistInfo.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center hover:glow-effect transition-all"
              >
                <Music2 className="w-5 h-5" />
              </a>
              <a
                href={artistInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center hover:glow-effect transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={artistInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center hover:glow-effect transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={artistInfo.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center hover:glow-effect transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} DRYPNOSIS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
