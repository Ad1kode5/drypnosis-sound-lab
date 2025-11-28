import { useState } from 'react';
import { ShoppingCart, Play, Package, Crown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, Product } from '@/lib/mockData';
import { useToast } from '@/hooks/use-toast';

const Store = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    toast({
      title: 'Added to cart',
      description: `${product.title} has been added to your cart.`,
    });
  };

  const getTypeIcon = (type: Product['type']) => {
    switch (type) {
      case 'beat':
        return <Play className="w-5 h-5" />;
      case 'sample-pack':
        return <Package className="w-5 h-5" />;
      case 'exclusive-rights':
        return <Crown className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: Product['type']) => {
    switch (type) {
      case 'beat':
        return 'bg-primary';
      case 'sample-pack':
        return 'bg-secondary';
      case 'exclusive-rights':
        return 'bg-accent';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 animate-fade-in">
          <div>
            <h1 className="text-5xl font-bold text-gradient mb-4">Beats Store</h1>
            <p className="text-xl text-muted-foreground">
              Premium beats, sample packs, and exclusive rights
            </p>
          </div>
          
          <Button size="lg" className="glow-effect relative">
            <ShoppingCart className="mr-2 w-5 h-5" />
            Cart
            {cart.length > 0 && (
              <Badge className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center p-0">
                {cart.length}
              </Badge>
            )}
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="glass-card hover:glow-effect transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 relative">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 w-10 h-10 ${getTypeColor(product.type)} rounded-full flex items-center justify-center`}>
                    {getTypeIcon(product.type)}
                  </div>
                  
                  {product.previewUrl && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        size="icon"
                        className="w-16 h-16 rounded-full glow-effect"
                      >
                        <Play className="w-8 h-8" />
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="mb-2">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="glass-card">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Details */}
                {(product.bpm || product.key) && (
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    {product.bpm && <span>BPM: {product.bpm}</span>}
                    {product.key && <span>Key: {product.key}</span>}
                  </div>
                )}

                {/* Price */}
                <div className="text-3xl font-bold text-gradient">
                  ${product.price.toFixed(2)}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full glow-effect"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 w-4 h-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-24 right-6 glass-card p-6 w-80 z-40 animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
            <div className="space-y-2 mb-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="truncate mr-2">{item.title}</span>
                  <span className="text-muted-foreground">${item.price}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border/50 pt-4">
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total</span>
                <span className="text-gradient">
                  ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                </span>
              </div>
              <Button className="w-full glow-effect">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
