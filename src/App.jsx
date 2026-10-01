import React, { useRef, useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import {
  Download, Globe, Phone, Mail, Zap, Smartphone, Palette, Rocket, Building,
  Wrench, Home, BarChart2, Users, Settings, Activity, DollarSign, PieChart,
  LayoutDashboard, Bell, Search, CheckCircle2, Navigation, Star, SearchCode,
  Briefcase, ShoppingCart, GraduationCap, Building2, Utensils, Images, PenTool, Plane,
  MapPin
} from 'lucide-react';
import './index.css';

function App() {
  const posterRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Resize the poster visually so it fits on smaller screens, but keep the DOM size 1080x1350
  useEffect(() => {
    const handleResize = () => {
      // 900px max width for visual container
      const containerWidth = Math.min(window.innerWidth - 64, 900);
      const newScale = containerWidth / 1080;
      setScale(newScale > 1 ? 1 : newScale);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownload = async () => {
    if (posterRef.current) {
      const clone = posterRef.current.cloneNode(true);
      clone.style.transform = 'none';
      clone.style.width = '1080px';
      clone.style.height = '1350px';
      clone.style.position = 'absolute';
      clone.style.top = '-9999px';
      clone.style.left = '-9999px';
      clone.style.margin = '0';
      document.body.appendChild(clone);

      try {
        const canvas = await html2canvas(clone, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#F8FAFC', // Updated to off-white
          width: 1080,
          height: 1350,
          windowWidth: 1080,
          windowHeight: 1350
        });

        const image = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement('a');
        link.download = 'luminate-web-solutions-poster.png';
        link.href = image;
        link.click();
      } catch (error) {
        console.error("Error generating download:", error);
        alert("There was an issue generating the poster. Check the console for details.");
      } finally {
        document.body.removeChild(clone);
      }
    }
  };

  return (
    <div className="app-container">
      <button onClick={handleDownload} className="download-btn">
        <Download size={24} /> Download Poster (4:5)
      </button>

      <div className="poster-wrapper" style={{ height: 1350 * scale }}>
        <div className="poster" ref={posterRef} style={{ transform: `scale(${scale})` }}>

          {/* Background Decorative Grid */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            <svg width="1080" height="1350" viewBox="0 0 1080 1350" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Massive wave on the right */}
              <path d="M1200 -100 C600 200 900 800 1200 1400" stroke="#E2E8F0" strokeWidth="200" opacity="0.3" fill="none" />
              <path d="M1100 -200 C500 100 800 700 1100 1300" stroke="#93C5FD" strokeWidth="100" opacity="0.2" fill="none" />

              {/* Top Left Arcs */}
              <circle cx="0" cy="200" r="300" stroke="#3B82F6" strokeWidth="2" opacity="0.15" fill="none" />
              <circle cx="0" cy="200" r="330" stroke="#3B82F6" strokeWidth="1" opacity="0.1" fill="none" />
              <circle cx="0" cy="200" r="360" stroke="#3B82F6" strokeWidth="0.5" opacity="0.1" fill="none" />
              <circle cx="0" cy="200" r="390" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.1" fill="none" />

              {/* Bottom Right Arcs */}
              <circle cx="1080" cy="1000" r="400" stroke="#2563EB" strokeWidth="2" opacity="0.1" fill="none" />
              <circle cx="1080" cy="1000" r="440" stroke="#2563EB" strokeWidth="1" strokeDasharray="10 10" opacity="0.1" fill="none" />
              <circle cx="1080" cy="1000" r="480" stroke="#2563EB" strokeWidth="1" opacity="0.05" fill="none" />

              {/* Sweeping Wavy Curve */}
              <path d="M-100 800 C 400 500, 600 1100, 1200 700" stroke="#3B82F6" strokeWidth="1" opacity="0.2" fill="none" />
              <path d="M-100 830 C 400 530, 600 1130, 1200 730" stroke="#3B82F6" strokeWidth="1" opacity="0.1" fill="none" />
            </svg>
          </div>

          <div className="poster-content" style={{ justifyContent: 'flex-start', paddingBottom: '0', paddingTop: '20px' }}>
            {/* Header */}
            <div className="poster-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '5px', width: '100%', paddingLeft: '0px' }}>
              <img src="/logo.png" alt="Luminate Icon" className="poster-logo" />
              <img src="/logoname.png" alt="Luminate Web Solutions" style={{ height: '60px', objectFit: 'contain' }} />
            </div>

            {/* Middle Section */}
            <div className="middle-section" style={{ marginBottom: '15px' }}>
              <div className="hero-left" style={{ maxWidth: '50%' }}>
                <div className="we-build-badge" style={{ fontSize: '16px', padding: '6px 20px', marginBottom: '10px' }}>
                  GET YOUR WEBSITE TODAY
                </div>
                <h1 style={{ fontSize: '75px', lineHeight: '0.95', fontWeight: 900, color: '#1E293B', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '-3px' }}>
                  <span style={{ whiteSpace: 'nowrap' }}>GROW YOUR</span>
                  <div style={{ height: '75px', margin: '0' }}>
                    <svg width="100%" height="100" style={{ overflow: 'visible' }}>
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                      <text x="0" y="65" fill="url(#grad)" style={{ fontSize: '75px', fontWeight: 900, fontFamily: 'Inter, sans-serif', letterSpacing: '-3px' }}>BUSINESS</text>
                    </svg>
                  </div>
                  <span>ONLINE</span>
                </h1>
                <p className="hero-paragraph" style={{ fontSize: '22px', maxWidth: '95%', marginBottom: '0' }}>
                  We create modern, responsive & SEO-friendly websites that help your business stand out and attract more customers.
                </p>
              </div>

              <div className="hero-right">
                {/* Desktop Mockup (Main front) */}
                <div className="device-desktop">
                  <div className="device-body" style={{ padding: '0', background: '#FFFFFF', overflow: 'hidden', flexDirection: 'column' }}>
                    <div style={{ padding: '12px 16px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="Luminate Logo" style={{ height: '18px' }} />
                      </div>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '10px', fontWeight: 700, color: '#475569' }}>
                        <span style={{ color: '#2563EB' }}>HOME</span>
                        <span>ABOUT</span>
                        <span>PORTFOLIO</span>
                        <span>CONTACT</span>
                      </div>
                    </div>
                    <div style={{ padding: '20px', flex: 1, display: 'flex', background: '#F8FAFC' }}>
                      <div style={{ flex: 1, paddingRight: '20px' }}>
                        <div style={{ fontSize: '10px', color: '#3B82F6', fontWeight: 800, marginBottom: '8px' }}>WEB DEVELOPMENT</div>
                        <div style={{ fontSize: '24px', fontWeight: 900, color: '#1E293B', lineHeight: 1.1, marginBottom: '12px' }}>MODERN <br />DESIGN</div>
                        <div style={{ fontSize: '9px', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>Elevate your brand with stunning, high-performance web experiences.</div>
                        <div style={{ padding: '8px 16px', background: '#2563EB', color: 'white', fontSize: '9px', fontWeight: 700, borderRadius: '4px', display: 'inline-block' }}>EXPLORE NOW</div>
                      </div>
                      <div style={{ flex: 1, background: '#E2E8F0', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, #3B82F6 0%, #0284C7 100%)', opacity: 0.1 }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                          <LayoutDashboard size={60} color="#2563EB" opacity={0.2} />
                        </div>
                      </div>
                    </div>
                    {/* Laptop Base (Real elements to fix html2canvas pseudo-element bugs) */}
                    <div style={{ position: 'absolute', bottom: '-30px', left: '-20px', right: '-20px', height: '10px', background: '#CBD5E1', borderRadius: '4px 4px 16px 16px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', zIndex: 1 }}></div>
                    <div style={{ position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '4px', background: '#94A3B8', borderRadius: '0 0 4px 4px', zIndex: 2 }}></div>
                  </div>
                </div>
                {/* Monitor Mockup (Behind) */}
                <div className="device-monitor">
                  <div className="device-body" style={{ background: '#F1F5F9', padding: '16px', flexDirection: 'column' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div style={{ background: '#FFFFFF', height: '100px', borderRadius: '8px', border: '1px solid #E2E8F0', padding: '10px' }}>
                        <div style={{ width: '40px', height: '6px', background: '#CBD5E1', borderRadius: '3px', marginBottom: '8px' }}></div>
                        <div style={{ width: '100%', height: '40px', background: '#E2E8F0', borderRadius: '4px' }}></div>
                      </div>
                      <div style={{ background: '#FFFFFF', height: '100px', borderRadius: '8px', border: '1px solid #E2E8F0', padding: '10px' }}>
                        <div style={{ width: '40px', height: '6px', background: '#CBD5E1', borderRadius: '3px', marginBottom: '8px' }}></div>
                        <div style={{ width: '100%', height: '40px', background: '#E2E8F0', borderRadius: '4px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tablet Mockup (Front Right) */}
                <div className="device-tablet">
                  <div className="device-body" style={{ padding: '0', background: '#FFFFFF', overflow: 'hidden', flexDirection: 'column' }}>
                    {/* Tablet Header */}
                    <div style={{ padding: '10px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="Luminate Logo" style={{ height: '12px' }} />
                      </div>
                      <div style={{ display: 'flex', gap: '4px', flexDirection: 'column' }}>
                        <div style={{ width: '16px', height: '2px', background: '#475569', borderRadius: '2px' }}></div>
                        <div style={{ width: '16px', height: '2px', background: '#475569', borderRadius: '2px' }}></div>
                        <div style={{ width: '16px', height: '2px', background: '#475569', borderRadius: '2px' }}></div>
                      </div>
                    </div>
                    {/* Tablet Hero Area */}
                    <div style={{ padding: '8px', flex: 1, display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
                      <div style={{ fontSize: '8px', color: '#3B82F6', fontWeight: 800, marginBottom: '4px', textAlign: 'center' }}>WEB DEVELOPMENT</div>
                      <div style={{ fontSize: '16px', fontWeight: 900, color: '#1E293B', lineHeight: 1.1, marginBottom: '4px', textAlign: 'center' }}>MODERN <br />DESIGN</div>
                      <div style={{ fontSize: '7px', color: '#475569', lineHeight: 1.5, marginBottom: '6px', textAlign: 'center' }}>Elevate your brand with stunning web experiences.</div>

                      <div style={{ alignSelf: 'center', padding: '4px 10px', background: '#2563EB', color: 'white', fontSize: '6px', fontWeight: 700, borderRadius: '4px', marginBottom: '8px' }}>EXPLORE NOW</div>

                      {/* Tablet Graphic Area */}
                      <div style={{ height: '70px', width: '100%', background: '#E2E8F0', borderRadius: '6px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, #3B82F6 0%, #0284C7 100%)', opacity: 0.1 }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                          <LayoutDashboard size={28} color="#2563EB" opacity={0.2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Services Grid (Outside Middle Section) */}
            <div className="services-section" style={{ marginTop: '0', marginBottom: '20px' }}>
              <div className="left-services-title" style={{ display: 'inline-block', fontSize: '22px', padding: '6px 20px', marginBottom: '16px' }}>CORE SERVICES</div>
              <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginTop: '0' }}>
                <div className="left-service-item" style={{ fontSize: '22px' }}><div className="icon-wrapper" style={{ padding: '6px' }}><Palette size={22} /></div> Website Design & Redesign</div>
                <div className="left-service-item" style={{ fontSize: '22px' }}><div className="icon-wrapper" style={{ padding: '6px' }}><SearchCode size={22} /></div> SEO Optimization</div>
                <div className="left-service-item" style={{ fontSize: '22px' }}><div className="icon-wrapper" style={{ padding: '6px' }}><Globe size={22} /></div> Hosting & Server Management</div>
                <div className="left-service-item" style={{ fontSize: '22px' }}><div className="icon-wrapper" style={{ padding: '6px' }}><CheckCircle2 size={22} /></div> SSL & Website Security</div>
                <div className="left-service-item" style={{ fontSize: '22px' }}><div className="icon-wrapper" style={{ padding: '6px' }}><Wrench size={22} /></div> Maintenance & Support</div>
                <div className="left-service-item" style={{ fontSize: '22px' }}><div className="icon-wrapper" style={{ padding: '6px' }}><Mail size={22} /></div> Business Email Setup</div>
              </div>
            </div>

            {/* Industries Area Redesign */}
            <div style={{ width: '100%', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#1E293B', marginBottom: '10px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                <span style={{ color: '#2563EB' }}>We Build Websites</span> For
              </div>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', width: '100%', background: 'white', padding: '15px', borderRadius: '24px',
                border: '2px solid #E2E8F0', boxShadow: '0 8px 20px rgba(0,0,0,0.04)'
              }}>
                {[
                  { name: 'Healthcare & Education', icon: <Activity size={45} /> },
                  { name: 'Real Estate & Logistics', icon: <Building2 size={45} /> },
                  { name: 'Travel & Tourism', icon: <Plane size={45} /> },
                  { name: 'Media & Entertainment', icon: <Images size={45} /> },
                  { name: 'E-Commerce Retail', icon: <ShoppingCart size={45} /> },
                  { name: 'Business Services', icon: <Briefcase size={45} /> },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '20px',
                    padding: '4px'
                  }}>
                    <div style={{
                      width: '72px', height: '72px', background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                      borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                      color: '#2563EB', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)', flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#1E293B', lineHeight: '1.15', textAlign: 'left' }}>
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Redesign */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {/* Phone Card */}
              <div style={{
                background: 'white', borderRadius: '24px', border: '2px solid #E2E8F0', padding: '15px 40px',
                display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: '30px', boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
              }}>
                <div style={{ 
                  fontSize: '32px', color: '#1E293B', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase',
                  borderRight: '3px solid #E2E8F0', paddingRight: '30px', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap'
                }}>
                  <span style={{ color: '#25D366', marginRight: '8px' }}>CONTACT</span> US ON
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '72px', height: '72px', background: '#25D366', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 10px 20px rgba(37, 211, 102, 0.3)', flexShrink: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="none">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div style={{ color: '#1E293B', fontSize: '38px', fontWeight: 900, lineHeight: 1, letterSpacing: '-1px' }}>
                    +971 56 574 4992
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Area */}
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', gap: '10px', padding: '0 50px', marginBottom: '30px', width: '100%' }}>
            {/* Address Card left */}
            <div style={{
              background: '#ffffff', borderRadius: '20px', border: '1px solid #BFDBFE', padding: '15px 20px 15px 20px',
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '-45px' }}>
                <div style={{ width: '70px', height: '70px', background: '#3B82F6', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)', flexShrink: 0, position: 'relative', zIndex: 10 }}>
                  <MapPin size={40} />
                </div>
                <div style={{ color: '#2563EB', fontSize: '22px', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase', background: '#EFF6FF', padding: '4px 15px', borderRadius: '12px', border: '1px solid #BFDBFE', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                  Office Address
                </div>
              </div>
              <div style={{ color: '#1E293B', fontSize: '25px', fontWeight: 800, lineHeight: 1.1, marginTop: '10px' }}>
                203, Golf Park Building, Al Garhud, Dubai, U.A.E
              </div>
            </div>
            {/* right side */}
            <div className="footer-strip" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '10px', padding: '12px 15px', borderRadius: '20px', flexShrink: 0, width: 'auto' }}>
              <div className="footer-strip-item" style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="footer-strip-icon" style={{ width: '35px', height: '35px', background: '#3B82F6', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)' }}><Mail size={22} /></div>
                <div style={{ fontSize: '20px' }}>info@luminatewebsol.com</div>
              </div>
              <div className="footer-strip-item" style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="footer-strip-icon" style={{ width: '35px', height: '35px', background: '#3B82F6', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)' }}><Globe size={22} /></div>
                <div style={{ fontSize: '20px' }}>www.luminatewebsol.com</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
