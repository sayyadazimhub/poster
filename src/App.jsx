import React, { useRef, useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { 
  Download, Globe, Phone, Mail, Zap, Smartphone, Palette, Rocket, Building, 
  Wrench, Home, BarChart2, Users, Settings, Activity, DollarSign, PieChart, 
  LayoutDashboard, Bell, Search, CheckCircle2, Navigation, Star, SearchCode,
  Briefcase, ShoppingCart, GraduationCap, Building2, Utensils, Images, PenTool, Plane
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

          <div className="poster-content">
            {/* Header */}
            <div className="poster-header">
              <img src="/logo.png" alt="Luminate Web Solutions" className="poster-logo" />
            </div>

            {/* Middle Section */}
            <div className="middle-section">
              <div className="hero-left">
                <div className="we-build-badge">
                  WE BUILD
                  {/* Arrow pointing down right */}
                  <svg width="40" height="40" viewBox="0 0 24 24" style={{ position: 'absolute', right: '-45px', top: '10px' }}>
                    <path d="M5 5 C15 5 18 10 18 18 M12 15 L18 18 L21 12" stroke="#2563EB" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h1>
                  PROFESSIONAL<br/>
                  <svg width="420" height="90" viewBox="0 0 420 90" style={{ display: 'block', overflow: 'visible', marginTop: '-5px' }}>
                    <defs>
                      <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>
                    <text x="0" y="75" fill="url(#textGrad)" fontSize="85px" fontWeight="900" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-2px">WEBSITE</text>
                  </svg>
                </h1>
                <div className="hero-subhead">and grow your business online</div>
                <p className="hero-paragraph">
                  We create modern, responsive & SEO-friendly websites that help your business grow faster and stand out from the competition.
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
                        <div style={{ fontSize: '24px', fontWeight: 900, color: '#1E293B', lineHeight: 1.1, marginBottom: '12px' }}>MODERN <br/>DESIGN</div>
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
                      <div style={{ fontSize: '16px', fontWeight: 900, color: '#1E293B', lineHeight: 1.1, marginBottom: '4px', textAlign: 'center' }}>MODERN <br/>DESIGN</div>
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
            <div className="services-section">
              <div className="left-services-title" style={{ display: 'inline-block' }}>OUR SERVICES</div>
              <div className="services-grid">
                <div className="left-service-item"><div className="icon-wrapper"><Globe size={16} /></div> Website Design & Development</div>
                <div className="left-service-item"><div className="icon-wrapper"><ShoppingCart size={16} /></div> E-Commerce Development</div>
                <div className="left-service-item"><div className="icon-wrapper"><LayoutDashboard size={16} /></div> Landing Page Design</div>
                <div className="left-service-item"><div className="icon-wrapper"><SearchCode size={16} /></div> SEO Optimization</div>
                <div className="left-service-item"><div className="icon-wrapper"><Wrench size={16} /></div> Website Maintenance</div>
                <div className="left-service-item"><div className="icon-wrapper"><Zap size={16} /></div> Speed Optimization</div>
                <div className="left-service-item"><div className="icon-wrapper"><Globe size={16} /></div> Domain & Hosting Support</div>
              </div>
            </div>

            {/* Bottom Grid Areas */}
            <div className="bottom-grid">
              
              {/* Left Column (Why Choose Us) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="info-box" style={{ flex: 1 }}>
                  <div className="box-badge">WHY CHOOSE US?</div>
                  <div className="why-list">
                    <div className="why-item"><CheckCircle2 size={18} color="#3B82F6" /> Modern & Responsive Design</div>
                    <div className="why-item"><CheckCircle2 size={18} color="#3B82F6" /> SEO Friendly & Fast Loading</div>
                    <div className="why-item"><CheckCircle2 size={18} color="#3B82F6" /> 100% Mobile & Tablet Friendly</div>
                    <div className="why-item"><CheckCircle2 size={18} color="#3B82F6" /> Secure & User Friendly</div>
                    <div className="why-item"><CheckCircle2 size={18} color="#3B82F6" /> Unlimited Support</div>
                    <div className="why-item"><CheckCircle2 size={18} color="#3B82F6" /> Affordable Pricing</div>
                  </div>
                </div>

              </div>

              {/* Box 2 & Promo */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="info-box" style={{ flex: 1 }}>
                  <div className="box-badge">WE CREATE WEBSITES FOR</div>
                  <div className="icons-grid">
                    <div className="icon-cell"><div className="icon-box"><Briefcase size={24} /></div>Business</div>
                    <div className="icon-cell"><div className="icon-box"><ShoppingCart size={24} /></div>E-Commerce</div>
                    <div className="icon-cell"><div className="icon-box"><GraduationCap size={24} /></div>Education</div>
                    <div className="icon-cell"><div className="icon-box"><Building2 size={24} /></div>Real Estate</div>
                    <div className="icon-cell"><div className="icon-box"><Utensils size={24} /></div>Restaurant</div>
                    <div className="icon-cell"><div className="icon-box"><Images size={24} /></div>Portfolio</div>
                    <div className="icon-cell"><div className="icon-box"><PenTool size={24} /></div>Blog</div>
                    <div className="icon-cell"><div className="icon-box"><Plane size={24} /></div>Travel</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Width Contact Numbers */}
            <div className="info-box" style={{ marginTop: '20px', marginBottom: '25px', width: '100%', padding: '24px' }}>
              <div className="box-badge" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}><Phone size={16} /> CALL US TODAY</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', background: '#F8FAFC', padding: '10px 16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <span style={{fontSize: '14px', fontWeight: 900, color: '#3B82F6', width: '25px'}}>IN</span>
                  <span style={{fontSize: '15px', fontWeight: 800, color: '#1E293B'}}>+91 720 736 7455</span>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', background: '#F8FAFC', padding: '10px 16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <span style={{fontSize: '14px', fontWeight: 900, color: '#3B82F6', width: '25px'}}>AU</span>
                  <span style={{fontSize: '15px', fontWeight: 800, color: '#1E293B'}}>+61 498 568 322</span>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', background: '#F8FAFC', padding: '10px 16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <span style={{fontSize: '14px', fontWeight: 900, color: '#3B82F6', width: '25px'}}>UAE</span>
                  <span style={{fontSize: '15px', fontWeight: 800, color: '#1E293B'}}>+971 56 574 4992</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Area */}
          <div>
            <div className="footer-strip" style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', padding: '24px 20px' }}>
              <div className="footer-strip-item" style={{ fontSize: '17px' }}>
                <div className="footer-strip-icon"><Mail size={22} /></div>
                <div><div style={{fontSize: '12px', fontWeight: 700, opacity: 0.8}}>Email Us</div>info@luminatewebsol.com</div>
              </div>
              <div className="footer-strip-item" style={{ fontSize: '17px' }}>
                <div className="footer-strip-icon"><Globe size={22} /></div>
                <div><div style={{fontSize: '12px', fontWeight: 700, opacity: 0.8}}>Visit Our Website</div>www.luminatewebsol.com</div>
              </div>
              <div className="footer-strip-item" style={{ fontSize: '17px' }}>
                <div className="footer-strip-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div><div style={{fontSize: '12px', fontWeight: 700, opacity: 0.8}}>Follow Us On LinkedIn</div>linkedin.com/company/luminatewebsol</div>
              </div>
            </div>
            <div className="footer-sub">
              Let's Grow Your Business With a Powerful Website
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
