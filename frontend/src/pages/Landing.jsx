import { Home, DollarSign, Menu, Brain, Users, ArrowRight, PiggyBank, Building2 } from 'lucide-react';
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu.jsx";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet.jsx";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion.jsx";

function Landing() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-xl heading text-accent-gray">SarvAwas AI</div>

          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#journey">How It Works</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#ecosystem">Ecosystem</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#stories">Success Stories</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#invest">For Investors</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="outline" className="text-sm text-accent-gray border-accent-gray/20 hover:bg-gray-50">Go to app</Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="heading text-accent-gray">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 grid gap-3">
                  <a href="#journey" className="text-sm text-gray-700 hover:text-accent-gray">How It Works</a>
                  <a href="#ecosystem" className="text-sm text-gray-700 hover:text-accent-gray">Ecosystem</a>
                  <a href="#stories" className="text-sm text-gray-700 hover:text-accent-gray">Success Stories</a>
                  <a href="#invest" className="text-sm text-gray-700 hover:text-accent-gray">For Investors</a>
                </nav>
                <Separator className="my-4" />
                <Button variant="outline" className="w-full text-accent-gray border-accent-gray/20 hover:bg-gray-50">Go to app</Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl heading text-accent-gray mb-6 leading-tight">
          Making Homeownership<br />Possible
        </h1>
        <p className="text-lg body text-gray-600 mb-8 max-w-2xl mx-auto">
          No down payment? No problem. Build your dream home through smart savings,<br />AI-powered property analysis, and investor partnerships.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-accent-purple hover:opacity-90 text-white px-6 py-6 text-base">
            <Home className="w-5 h-5 mr-2" /> Start Your Journey
          </Button>
          <Button variant="outline" className="border-accent-gray/30 text-accent-gray px-6 py-6 text-base hover:bg-gray-50">
            <Users className="w-5 h-5 mr-2" /> Invest with Us
          </Button>
        </div>
      </section>

      <section id="journey" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-accent-purple">The Homebuyer's Journey</Badge>
            <h2 className="text-3xl md:text-4xl heading text-accent-gray mt-4 mb-4">
              Meet Priya
            </h2>
            <p className="text-gray-600 body max-w-2xl mx-auto">
              A 28-year-old software developer who wants to buy a home but lacks the down payment
            </p>
          </div>

          <Card className="rounded-2xl p-0 md:p-0 mb-8">
            <CardContent className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 border-2 rounded-md bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 " />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl heading text-accent-gray mb-3">Prophet AI: The Advisor</h3>
                <p className="text-gray-700 body mb-4">
                  Priya found a ₹90 Lakh 2BHK in Kharghar. Using Prophet AI, she analyzes the property's legal status, market potential, and investment viability. The AI confirms it's a legally safe and high-potential property, giving her the confidence to proceed.
                </p>
                <div className="bg-purple-50 rounded-xl p-4 inline-block">
                  <p className="text-sm heading text-accent-gray">✓ Legal verification complete</p>
                  <p className="text-sm body text-gray-600 mt-1">Property approved for investment</p>
                </div>
              </div>
            </div>
            </CardContent>
          </Card>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-accent-gray">
              <span className="text-sm font-black">CHOOSE YOUR PATH</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl border-2 border-accent-purple">
              <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-purple rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs heading text-accent-purple uppercase">Path A</span>
                  <h4 className="text-xl heading text-accent-gray">Step-Up</h4>
                </div>
              </div>
              <p className="text-sm heading text-accent-gray mb-2">The Immediate Homeowner Model</p>
              <p className="text-gray-600 body mb-4">
                "Buy this specific home today. Our Step-Up model connects you with an investor who covers your ₹18 Lakh down payment. You move in now as a part-owner, building equity from Day 1."
              </p>
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="text-sm heading text-accent-gray mb-2">Best For:</p>
                <p className="text-sm body text-gray-600">Buyers ready for a home loan who want to lock in a property at today's prices</p>
              </div>
              <Button variant="link" className="text-sm text-accent-purple p-0 h-auto">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-accent-blue">
              <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-blue rounded-xl flex items-center justify-center">
                  <PiggyBank className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs heading text-accent-blue uppercase">Path B</span>
                  <h4 className="text-xl heading text-accent-gray">Pehla Kadam</h4>
                </div>
              </div>
              <p className="text-sm heading text-accent-gray mb-2">The Savings Model</p>
              <p className="text-gray-600 body mb-4">
                "Not ready to buy today? Let's build your down payment first. Use our Down Payment Builder to automate your savings. Pay your rent plus extra through our platform—we pay your landlord and invest your savings automatically."
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-sm heading text-accent-gray mb-2">Best For:</p>
                <p className="text-sm body text-gray-600">Those who want a disciplined way to save for a future purchase without being locked into a property today</p>
              </div>
              <Button variant="link" className="text-sm text-accent-blue p-0 h-auto">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="invest" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-black text-accent-blue uppercase tracking-wide">The Investor's Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-accent-gray mt-2 mb-4">
              Meet Mr. Sharma
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A 50-year-old doctor from Vashi with ₹20 Lakhs to invest. He wants real estate returns without landlord hassles.
            </p>
          </div>

          <Card className="rounded-2xl">
            <CardContent className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-accent-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl heading text-accent-gray mb-3">Co-Vest: The Passive Investor Marketplace</h3>
                <p className="text-gray-700 body mb-6">
                  Mr. Sharma discovers our investor marketplace with two types of pre-vetted opportunities:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-xl">
                <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="heading text-accent-gray">Pure Investment Co-Ownership</h4>
                </div>
                <p className="text-sm body text-gray-600 mb-4">
                  Invest in a ₹1 Crore commercial shop in Seawoods. Join three other investors, contribute ₹20 Lakhs for a 20% stake. Receive 20% of monthly rent, hassle-free.
                </p>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-xs heading text-accent-gray">₹20L Investment = 20% Ownership + Monthly Rent</p>
                </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl">
                <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-accent-purple rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="heading text-accent-gray">Fund a Homebuyer (Step-Up)</h4>
                </div>
                <p className="text-sm body text-gray-600 mb-4">
                  Fund Priya's ₹18 Lakh down payment. Get steady monthly income from her "rent-share" plus property appreciation benefits, with a motivated homeowner maintaining your investment.
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-xs heading text-accent-gray">₹18L Investment + Monthly Returns + Appreciation</p>
                </div>
                </CardContent>
              </Card>
            </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="stories" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl heading text-accent-gray text-center mb-4">
            Real Stories, Real Dreams
          </h2>
          <p className="text-gray-600 body text-center mb-12 max-w-2xl mx-auto">
            Lives transformed through our ecosystem
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl">
              <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full"></div>
                <div>
                  <h3 className="heading text-accent-gray">Priya Patel</h3>
                  <p className="text-sm body text-gray-600">Software Developer, Mumbai</p>
                </div>
              </div>
              <p className="text-gray-700 body mb-4">
                "I always thought I'd need years to save for a down payment. With TrueHome's Step-Up model, I moved into my 2BHK in Kharghar within 3 months. Prophet AI helped me choose the right property, and now I'm building equity every month."
              </p>
              <div className="flex gap-4 mb-4">
                <div className="bg-purple-50 rounded-lg p-3 flex-1">
                  <p className="text-lg heading text-accent-gray">₹18L</p>
                  <p className="text-xs body text-gray-600">Down payment funded</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 flex-1">
                  <p className="text-lg heading text-accent-gray">3 months</p>
                  <p className="text-xs body text-gray-600">From start to keys</p>
                </div>
              </div>
              <Button variant="link" className="text-sm text-accent-purple p-0 h-auto">
                <Home className="w-4 h-4 mr-1" /> Read full story
              </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-accent-blue rounded-full"></div>
                <div>
                  <h3 className="heading text-accent-gray">Dr. Rajesh Sharma</h3>
                  <p className="text-sm body text-gray-600">Cardiologist, Vashi</p>
                </div>
              </div>
              <p className="text-gray-700 body mb-4">
                "As a busy professional, I wanted real estate returns without the management headaches. Through Co-Vest, I invested ₹20 Lakhs in a commercial property and funded two homebuyers. Completely passive income every month."
              </p>
              <div className="flex gap-4 mb-4">
                <div className="bg-orange-50 rounded-lg p-3 flex-1">
                  <p className="text-lg heading text-accent-gray">8.5%</p>
                  <p className="text-xs body text-gray-600">Annual returns</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 flex-1">
                  <p className="text-lg heading text-accent-gray">Zero</p>
                  <p className="text-xs body text-gray-600">Management effort</p>
                </div>
              </div>
              <Button variant="link" className="text-sm text-accent-blue p-0 h-auto">
                <DollarSign className="w-4 h-4 mr-1" /> See investment options
              </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl heading text-accent-gray text-center mb-4">
            The SarvAwas AI Ecosystem
          </h2>
          <p className="text-gray-600 body text-center mb-12">
            Four features creating a self-sustaining loop
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 " />
              </div>
              <h3 className="heading text-accent-gray mb-3">Prophet AI</h3>
              <p className="text-sm body text-gray-600 mb-4">
                The foundation of trust that analyzes and approves all properties for the ecosystem with AI-powered insights.
              </p>
              <Button variant="link" className="text-sm text-accent-blue p-0 h-auto">Explore AI features</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
              <div className="w-12 h-12 bg-accent-blue rounded-xl flex items-center justify-center mb-4">
                <PiggyBank className="w-6 h-6 text-white" />
              </div>
              <h3 className="heading text-accent-gray mb-3">Pehla Kadam</h3>
              <p className="text-sm body text-gray-600 mb-4">
                Prepares future homebuyers by helping them save systematically with automated rent + savings investment.
              </p>
              <Button variant="link" className="text-sm text-accent-blue p-0 h-auto">Start saving today</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
              <div className="w-12 h-12 bg-accent-purple rounded-xl flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="heading text-accent-gray mb-3">Step-Up</h3>
              <p className="text-sm body text-gray-600 mb-4">
                Connects ready homebuyers with capital from investors. Move into your home today, build equity immediately.
              </p>
              <Button variant="link" className="text-sm text-accent-blue p-0 h-auto">Get pre-qualified</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="heading text-accent-gray mb-3">Co-Vest</h3>
              <p className="text-sm body text-gray-600 mb-4">
                Platform for passive investors. Your funds power both pure investment deals and the Step-Up model.
              </p>
              <Button variant="link" className="text-sm text-accent-blue p-0 h-auto">View opportunities</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 gradient-accent rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl heading mb-3">A Self-Sustaining Loop</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Prophet AI validates properties → Pehla Kadam prepares buyers → Step-Up connects buyers with investors → Co-Vest provides the capital. Each feature strengthens the others.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl heading mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're a homebuyer or investor, SarvAwas AI has a path for you
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-accent-gray px-8 py-6 text-base hover:bg-gray-100">
              <Home className="w-5 h-5 mr-2" /> Start Your Journey
            </Button>
            <Button variant="outline" className="border-2 border-white text-white px-8 py-6 text-base hover:bg-white hover:text-accent-gray">
              <Users className="w-5 h-5 mr-2" /> Explore Investments
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-accent-gray text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="heading text-lg mb-4 flex items-center gap-2">
                <Home className="w-5 h-5" />
                SarvAwas AI
              </div>
              <p className="text-sm text-gray-400">
                Making homeownership accessible for everyone through AI and community investment
              </p>
            </div>
            <div>
              <h4 className="heading mb-4">For Buyers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Prophet AI</a></li>
                <li><a href="#" className="hover:text-white">Pehla Kadam</a></li>
                <li><a href="#" className="hover:text-white">Step-Up Program</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="heading mb-4">For Investors</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Co-Vest Platform</a></li>
                <li><a href="#" className="hover:text-white">Investment Options</a></li>
                <li><a href="#" className="hover:text-white">Returns Calculator</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="heading mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 SarvAwas AI. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
