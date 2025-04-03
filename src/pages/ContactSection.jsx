import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AuroraText } from '@/components/magicui/aurora-text';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LinkedinIcon, GithubIcon, MailIcon, MapPinIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactSection({ contactRef }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      const result = await emailjs.send(
        'service_vczjmfq',
        'template_ozxp4hl',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'eXjOkU8jvfFNIDkfD'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={contactRef}
      className="relative h-full md:pb-15 shadow-[0_-5px_15px_rgba(0,0,0,0.08),0_5px_15px_rgba(0,0,0,0.08)]  px-4 md:px-6  overflow-y-auto"
    >
      <h1 className="ml-2 pt-20 text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        <AuroraText>
          <p className="pb-2">Contact</p>
        </AuroraText>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mt-10 max-w-6xl mx-auto">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Send me an Email </CardTitle>
            <CardDescription>
              I'm currently open to new opportunities. Feel free to reach out!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32 bg-background"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus === 'success' && (
                <div className="text-green-600 font-medium text-center mt-2">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 font-medium text-center mt-2">
                  Sorry, there was a problem sending your message. Please try
                  again later.
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        <div className="flex-1 flex flex-col justify-center space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MailIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <a
                href="mailto:clement.zambon@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                clement.zambon@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPinIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-muted-foreground">France</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Connect with me</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
              >
                <LinkedinIcon className="h-6 w-6 text-primary" />
              </a>
              <a
                href="https://github.com/Track404"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
              >
                <GithubIcon className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-muted-foreground">
              I typically respond within 24 hours. Looking forward to
              connecting!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
