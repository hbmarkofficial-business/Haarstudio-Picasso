import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Search, 
  Calendar 
} from 'lucide-react';
import { Footer } from '@/components/Footer';

const Contact = () => {
  return (
    <>
      <main>
        {/* Contact Section */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <AnimateOnScroll animation="slide-left" className="order-1 lg:order-1">
                <div className="bg-card border border-border rounded-sm p-8 md:p-10 h-fit">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Termin buchen & Fragen stellen
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Unser Chatbot steht Ihnen rund um die Uhr zur Verfügung. 
                    Buchen Sie bequem Ihren Termin, stellen Sie Fragen zu unseren 
                    Services oder erhalten Sie individuelle Empfehlungen – alles 
                    in Echtzeit.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">24/7 verfügbar</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Sofortige Terminbestätigung</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Individuelle Beratung</span>
                    </div>
                  </div>

                  <Button variant="gold" size="xl" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Rechts unten Chat starten
                  </Button>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-muted-foreground text-sm text-center">
                      Oder rufen Sie uns direkt an:
                    </p>
                    <a 
                      href="tel:01773343569" 
                      className="block text-center text-primary font-semibold mt-2 hover:underline"
                    >
                      01773343569
                    </a>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                      Alternativ können Sie direkt hier die Verfügbarkeit Ihres Wunschtermins prüfen oder einen Termin buchen:
                    </p>
                    <div className="flex flex-col gap-3">
                      <Button 
                        asChild 
                        variant="outline" 
                        size="lg" 
                        className="w-full"
                      >
                        <Link to="/termine/verfügbarkeit">
                          <Search className="w-5 h-5 mr-2" />
                          Verfügbarkeit prüfen
                        </Link>
                      </Button>
                      <Button 
                        asChild 
                        variant="gold" 
                        size="lg" 
                        className="w-full"
                      >
                        <Link to="/termine/buchen">
                          <Calendar className="w-5 h-5 mr-2" />
                          Termin buchen
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" className="order-2 lg:order-2">
                <div className="space-y-8">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                    So erreichen Sie uns
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                        <p className="text-muted-foreground">
                          Hauptstraße 300<br />
                          51465 Bergisch Gladbach
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                        <a 
                          href="tel:01773343569" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          01773343569
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                        <a 
                          href="mailto:info@gentlemanscut.de" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@gentlemanscut.de
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Öffnungszeiten</h3>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>Mo - Fr: 9:00 - 19:00</li>
                          <li>Samstag: 9:00 - 18:00</li>
                          <li>Sonntag: Geschlossen</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-video rounded-sm overflow-hidden border border-border mt-8">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20090.525401735933!2d7.094517568410759!3d50.99183850254761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bed7bf9a7a9cc3%3A0x1a63d49dd895a94a!2sHaarstudio%20Picasso!5e0!3m2!1sde!2sde!4v1770759212486!5m2!1sde!2sde" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade" 
                      title="Standort The Gentleman's Cut"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;




