import React, { useEffect, useState } from 'react';
import { Wallet, Shield, Globe, Zap, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

function App() {
  const [animatedIndex, setAnimatedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setAnimatedIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Wallet className="w-6 h-6 text-purple-500" />,
      title: "Multi-Asset Support",
      description: "Manage over 200+ cryptocurrencies and tokens in one secure interface."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Enhanced Security",
      description: "Your private keys never leave your device, ensuring maximum protection."
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: "Web3 Integration",
      description: "Seamlessly connect to decentralized applications and explore the blockchain ecosystem."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: "Fast Transactions",
      description: "Experience lightning-fast crypto exchanges with built-in swap functionality."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-500/10 blur-xl"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjgsIDkwLCAyMTMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10">
        <header className="container mx-auto px-6 py-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Wallet className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Exodus</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#benefits" className="hover:text-purple-400 transition-colors">Benefits</a>
              <a href="#security" className="hover:text-purple-400 transition-colors">Security</a>
              <a href="#ecosystem" className="hover:text-purple-400 transition-colors">Ecosystem</a>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className={`flex flex-col md:flex-row items-center justify-between mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                The Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Web3 Wallets</span> Is Here
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Exodus revolutionizes how you interact with cryptocurrencies and decentralized applications, providing a seamless bridge to the blockchain universe.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center">
                  Download Now <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-purple-500 px-8 py-3 rounded-full font-medium hover:bg-purple-500/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative w-full h-[400px] rounded-xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-purple-500/30 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
                    alt="Exodus Web3 Wallet Interface showing cryptocurrency portfolio" 
                    className="object-cover w-full h-full opacity-70"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm text-green-400">Live Connection</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-300">Total Balance</p>
                      <p className="text-2xl font-bold">$24,631.05</p>
                    </div>
                    <button className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors">
                      View Assets
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Revolutionary</span> Features
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Exodus combines cutting-edge technology with intuitive design to deliver a wallet experience unlike any other.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`relative p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 transition-all duration-500 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 ${index === animatedIndex ? 'ring-2 ring-purple-500 scale-105' : ''}`}
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                  <div className="ml-8 mt-4">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                  {index === animatedIndex && (
                    <Sparkles className="absolute top-4 right-4 w-5 h-5 text-purple-400 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Content Section */}
          <section id="benefits" className="mb-24">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Revolutionizing Digital Asset Management with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Exodus Web3 Wallet</span>
              </h2>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  In the rapidly evolving landscape of blockchain technology, Exodus Web3 Wallet stands as a beacon of innovation, offering users an unparalleled gateway to the decentralized universe. Unlike conventional cryptocurrency wallets, Exodus transcends basic storage functionality to deliver a comprehensive ecosystem where users can seamlessly manage, exchange, and interact with digital assets across multiple blockchains.
                </p>
                
                <p>
                  At its core, Exodus prioritizes user experience without compromising on security—a delicate balance that has eluded many competitors in the space. The intuitive interface masks the complex technological infrastructure underneath, making blockchain interaction accessible to both novices and experienced users alike. This democratization of access represents a fundamental shift in how individuals engage with decentralized finance.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Seamless Multi-Chain Integration</h3>
                
                <div className="pl-6 border-l-2 border-purple-500 mb-6">
                  <ul className="space-y-4">
                    {[
                      "Support for over 200 cryptocurrencies across multiple blockchains",
                      "Real-time portfolio tracking with advanced analytics",
                      "Built-in exchange functionality for instant asset swaps",
                      "NFT gallery visualization and management tools"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="mr-3 mt-1 relative">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-125 transition-transform duration-300"></div>
                          <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-75 group-hover:opacity-100"></div>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  The architectural brilliance of Exodus lies in its modular design, allowing for continuous evolution without disrupting the core user experience. Each update introduces enhanced functionality while maintaining backward compatibility—a testament to the development team's commitment to sustainable innovation. This approach has fostered a loyal community that actively contributes to the wallet's growth through feedback and feature suggestions.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Security Redefined</h3>
                
                <p>
                  In the realm of digital assets, security isn't merely a feature—it's the foundation upon which trust is built. Exodus implements a multi-layered security architecture that begins with local private key encryption and extends to hardware wallet integration for those seeking maximum protection. The non-custodial nature of the wallet ensures users maintain complete control over their assets, aligning perfectly with the core ethos of blockchain technology: decentralization and self-sovereignty.
                </p>

                <div className="pl-6 border-l-2 border-purple-500 mb-6">
                  <ul className="space-y-4">
                    {[
                      "Client-side encryption ensures private keys never leave your device",
                      "Optional biometric authentication adds an additional security layer",
                      "Seamless integration with hardware wallets like Trezor",
                      "Automatic backup functionality to prevent asset loss"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="mr-3 mt-1 relative">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-125 transition-transform duration-300"></div>
                          <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-75 group-hover:opacity-100"></div>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  As Web3 technology continues to reshape our digital interactions, Exodus positions itself not just as a wallet but as an essential companion for navigating the decentralized frontier. By bridging the gap between complex blockchain mechanics and intuitive user experience, it empowers individuals to participate confidently in the digital asset revolution.
                </p>

                <p>
                  The future roadmap for Exodus includes deeper integration with decentralized applications, expanded cross-chain functionality, and enhanced governance features that will allow users to participate directly in protocol decisions. This forward-thinking approach ensures that as the Web3 ecosystem evolves, Exodus users remain at the forefront of innovation, equipped with tools that adapt to the changing landscape.
                </p>

                <p>
                  In conclusion, Exodus Web3 Wallet represents more than just a technological solution—it embodies a vision of financial empowerment where individuals have seamless, secure access to the expanding universe of digital assets. As blockchain technology continues its journey toward mainstream adoption, Exodus stands ready to welcome new users into this transformative ecosystem with open arms and intuitive design.
                </p>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section id="security" className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Uncompromising <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Security</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Your assets deserve the highest level of protection. Exodus implements industry-leading security measures to keep your digital wealth safe.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl opacity-30 rounded-3xl"></div>
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Non-Custodial",
                    description: "Your private keys never leave your device. You maintain complete control of your assets at all times.",
                    icon: <Shield className="w-10 h-10 text-purple-400" />
                  },
                  {
                    title: "Hardware Integration",
                    description: "Connect with hardware wallets like Trezor for cold storage security with hot wallet convenience.",
                    icon: <Zap className="w-10 h-10 text-purple-400" />
                  },
                  {
                    title: "Automatic Backups",
                    description: "Your wallet is automatically backed up, ensuring you never lose access to your funds.",
                    icon: <Globe className="w-10 h-10 text-purple-400" />
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300 group">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ecosystem Section */}
          <section id="ecosystem" className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Complete <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Ecosystem</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Exodus is more than just a wallet—it's a complete platform for your digital asset journey.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm z-0"></div>
              <div className="relative z-10 p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Desktop & Mobile",
                      description: "Seamlessly sync your wallet across all your devices with our desktop and mobile applications.",
                      cta: "Download Now"
                    },
                    {
                      title: "Built-in Exchange",
                      description: "Swap between assets directly within your wallet—no need to use external exchanges.",
                      cta: "Start Trading"
                    },
                    {
                      title: "dApp Browser",
                      description: "Explore and interact with decentralized applications directly from your wallet interface.",
                      cta: "Explore dApps"
                    },
                    {
                      title: "NFT Gallery",
                      description: "View, manage, and showcase your NFT collection with our beautiful gallery interface.",
                      cta: "View Gallery"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-300 mb-6">{item.description}</p>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group">
                        {item.cta} <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center mb-24">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute rounded-full bg-purple-500/20 blur-xl"
                    style={{
                      width: `${Math.random() * 300 + 100}px`,
                      height: `${Math.random() * 300 + 100}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to Step Into the <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Future</span>?
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                  Join thousands of users who have already discovered the power and simplicity of Exodus Web3 Wallet. Your journey into the decentralized world begins here.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity w-full sm:w-auto">
                    Download Exodus
                  </button>
                  <button className="border border-purple-500 px-8 py-4 rounded-full font-medium hover:bg-purple-500/10 transition-colors w-full sm:w-auto">
                    Explore Features
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="container mx-auto px-6 py-12 border-t border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Wallet className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Exodus</span>
              </div>
              <p className="text-gray-400 mb-6">
                The next generation Web3 wallet for the decentralized world.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#security" className="text-gray-400 hover:text-purple-400 transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Mobile App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Desktop App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Browser Extension</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-purple-500/20">
            <p className="text-gray-400">© 2025 Exodus. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;