// Mock data for the website - replace with real backend API calls

export interface Track {
  id: string;
  title: string;
  album: string;
  duration: string;
  releaseDate: string;
  coverUrl: string;
  audioUrl: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
}

export interface Product {
  id: string;
  title: string;
  type: 'beat' | 'sample-pack' | 'exclusive-rights';
  price: number;
  description: string;
  imageUrl: string;
  previewUrl?: string;
  bpm?: number;
  key?: string;
  tags: string[];
}

export const tracks: Track[] = [
  {
    id: '1',
    title: 'Pehli Baar',
    album: 'Singles',
    duration: '3:45',
    releaseDate: '2024',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    audioUrl: '/audio/sample.mp3',
    spotifyUrl: 'https://open.spotify.com/artist/0YKdFRvszqDXk5Gu1OPhYF',
    appleMusicUrl: 'https://music.apple.com',
    youtubeUrl: 'https://www.youtube.com/@you_know_what_im_sayin',
  },
  {
    id: '2',
    title: 'Late Night Vibes',
    album: 'Midnight Sessions',
    duration: '4:20',
    releaseDate: '2024',
    coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    audioUrl: '/audio/sample.mp3',
    spotifyUrl: 'https://open.spotify.com/artist/0YKdFRvszqDXk5Gu1OPhYF',
    appleMusicUrl: 'https://music.apple.com',
    youtubeUrl: 'https://www.youtube.com/@you_know_what_im_sayin',
  },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Trap Soul Beat',
    type: 'beat',
    price: 49.99,
    description: 'Dark trap beat with melodic elements',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop',
    previewUrl: '/audio/sample.mp3',
    bpm: 140,
    key: 'Am',
    tags: ['trap', 'soul', 'dark'],
  },
  {
    id: '2',
    title: 'Lo-Fi Sample Pack',
    type: 'sample-pack',
    price: 79.99,
    description: 'Collection of 50+ lo-fi samples and loops',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    tags: ['lo-fi', 'chill', 'ambient'],
  },
  {
    id: '3',
    title: 'Exclusive Rights - Premium Beat',
    type: 'exclusive-rights',
    price: 499.99,
    description: 'Full exclusive rights to unreleased beat',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    previewUrl: '/audio/sample.mp3',
    bpm: 128,
    key: 'Dm',
    tags: ['exclusive', 'premium', 'unique'],
  },
];

export const artistInfo = {
  name: 'DITYA',
  aka: 'DRYPNOSIS',
  bio: 'Producer, rapper, and sonic architect pushing the boundaries of modern hip-hop and trap music. Known for atmospheric soundscapes and hard-hitting beats.',
  spotifyUrl: 'https://open.spotify.com/artist/0YKdFRvszqDXk5Gu1OPhYF',
  youtubeUrl: 'https://www.youtube.com/@you_know_what_im_sayin',
  instagramUrl: 'https://instagram.com',
  twitterUrl: 'https://twitter.com',
};
