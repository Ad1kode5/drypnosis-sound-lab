import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { tracks, Track } from '@/lib/mockData';
import MusicPlayer from '@/components/MusicPlayer';

const Discography = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlayTrack = (track: Track, index: number) => {
    setCurrentTrack(track);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
    setCurrentTrack(tracks[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gradient mb-4">Discography</h1>
          <p className="text-xl text-muted-foreground">
            Explore the complete collection of tracks and albums
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <Card
              key={track.id}
              className="glass-card hover:glow-effect transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={track.coverUrl}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      size="icon"
                      className="w-16 h-16 rounded-full glow-effect"
                      onClick={() => handlePlayTrack(track, index)}
                    >
                      <Play className="w-8 h-8" />
                    </Button>
                  </div>
                </div>
                <CardTitle>{track.title}</CardTitle>
                <CardDescription>{track.album}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{track.duration}</span>
                  <span>{track.releaseDate}</span>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 glass-card"
                  asChild
                >
                  <a
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Spotify
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 glass-card"
                  asChild
                >
                  <a
                    href={track.appleMusicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Apple Music
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 glass-card"
                  asChild
                >
                  <a
                    href={track.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    YouTube
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <MusicPlayer
        currentTrack={currentTrack}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default Discography;
