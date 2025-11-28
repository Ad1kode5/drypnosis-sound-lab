import { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual backend integration
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-gradient mb-4">
              Let's Collaborate
            </h1>
            <p className="text-xl text-muted-foreground">
              Got a project in mind? Let's create something amazing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking for custom beats, want to collaborate on a project, or have questions about available services, feel free to reach out.
                </p>
                
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Usually within 24-48 hours
                    </p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Services</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Custom Beat Production</li>
                      <li>• Mixing & Mastering</li>
                      <li>• Artist Features</li>
                      <li>• Exclusive Licenses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="glass-card"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="glass-card"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="glass-card"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="glass-card resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full glow-effect"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
