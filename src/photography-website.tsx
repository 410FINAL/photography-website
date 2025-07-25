import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const PhotographyWebsite = () => {
  const [activePage, setActivePage] = useState('welcome');
  const [expandedVolumes, setExpandedVolumes] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    colorPref: '',
    description: ''
  });

  const toggleVolume = (volumeId) => {
    setExpandedVolumes(prev => ({
      ...prev,
      [volumeId]: !prev[volumeId]
    }));
  };

  const showPage = (pageId) => {
    setActivePage(pageId);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      colorPref: value
    }));
  };

  const submitCustom = (e) => {
    e.preventDefault();
    alert('Commission request submitted. You will receive a response within 24 hours.');
    setFormData({
      name: '',
      email: '',
      colorPref: '',
      description: ''
    });
  };

  const volumes = [
    {
      id: 'vol001',
      code: 'V1',
      name: 'Volume 1',
      date: '03/15/2024',
      location: 'Brooklyn, NY',
      camera: 'Canon EOS R5',
      lens: '50mm',
      description: 'Urban decay series',
      price: '$150',
      status: 'AVAILABLE',
      statusClass: 'available',
      details: [
        { num: '001', lens: '50mm', desc: 'Abandoned subway platform', status: 'AVAILABLE' },
        { num: '002', lens: '85mm', desc: 'Rust patterns on steel', status: 'SOLD' },
        { num: '003', lens: '24mm', desc: 'Graffiti layers depth', status: 'AVAILABLE' },
        { num: '004', lens: '35mm', desc: 'Broken window geometries', status: 'AVAILABLE' },
        { num: '005', lens: '70mm', desc: 'Concrete texture study', status: 'SOLD' },
        { num: '...', lens: 'Various', desc: '+ 45 more entries', status: 'VARIOUS' }
      ]
    },
    {
      id: 'vol002',
      code: 'V2',
      name: 'Volume 2',
      date: '02/28/2024',
      location: 'Manhattan, NY',
      camera: 'Leica M11',
      lens: '35mm',
      description: 'Shadow portraits',
      price: '$200',
      status: 'SOLD OUT',
      statusClass: 'sold',
      details: [
        { num: '001', lens: '35mm', desc: 'Silhouette against neon', status: 'SOLD' },
        { num: '002', lens: '50mm', desc: 'Anonymous figure study', status: 'SOLD' },
        { num: '003', lens: '85mm', desc: 'Negative space portrait', status: 'SOLD' },
        { num: '...', lens: 'Various', desc: '+ 47 more entries', status: 'ALL SOLD' }
      ]
    },
    {
      id: 'vol003',
      code: 'V3',
      name: 'Volume 3',
      date: '01/10/2024',
      location: 'Tokyo, Japan',
      camera: 'Sony A7R V',
      lens: '24mm',
      description: 'Neon nights',
      price: '$175',
      status: 'AVAILABLE',
      statusClass: 'available',
      details: [
        { num: '001', lens: '24mm', desc: 'Electric blue reflections', status: 'AVAILABLE' },
        { num: '002', lens: '35mm', desc: 'Pink glow street scene', status: 'SOLD' },
        { num: '003', lens: '50mm', desc: 'Neon sign abstractions', status: 'AVAILABLE' },
        { num: '...', lens: 'Various', desc: '+ 47 more entries', status: 'VARIOUS' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
      <style jsx>{`
        @keyframes glow-pulse {
          0% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.5); }
          100% { text-shadow: 0 0 50px rgba(255, 255, 255, 0.8); }
        }
        
        @keyframes counter-glow {
          0% { text-shadow: 0 0 15px rgba(255, 255, 255, 0.4); }
          100% { text-shadow: 0 0 25px rgba(255, 255, 255, 0.6); }
        }
        
        .glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite alternate;
        }
        
        .counter-glow {
          animation: counter-glow 4s ease-in-out infinite alternate;
        }
        
        .welcome-bg {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
        }
        
        .welcome-pattern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.02) 2px,
            rgba(255, 255, 255, 0.02) 4px
          );
        }
        
        .detail-row:nth-child(even) .detail-cell {
          background: #111111;
        }
        
        .detail-cell:hover {
          background: #1a1a1a;
        }
        
        .expand-icon {
          transition: transform 0.3s ease;
        }
        
        .expand-icon.expanded {
          transform: rotate(90deg);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 border-b border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 gap-4">
          <div className="text-xl md:text-2xl font-bold text-white" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
            410 FINAL
          </div>
          <ul className="flex gap-4 md:gap-8 flex-wrap">
            {['welcome', 'shop', 'custom', 'statement', 'contact'].map((page) => (
              <li key={page}>
                <Button
                  variant="ghost"
                  onClick={() => showPage(page)}
                  className={`px-2 md:px-4 py-2 border transition-all duration-300 uppercase tracking-wider font-mono text-xs md:text-sm ${
                    activePage === page 
                      ? 'text-white border-white bg-transparent hover:bg-white/10' 
                      : 'text-gray-400 border-transparent hover:text-white hover:border-white hover:bg-transparent'
                  }`}
                  style={activePage === page ? { textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' } : {}}
                >
                  {page}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Welcome Page */}
      {activePage === 'welcome' && (
        <div className="welcome-bg welcome-pattern relative min-h-screen flex items-center justify-center">
          <div className="text-center z-10 relative">
            <h1 className="text-4xl md:text-6xl lg:text-8xl mb-4 glow-pulse font-bold">410 FINAL</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed tracking-widest">
              1 PRINT ONLY<br />NO DIGITAL FILES<br />NO NEGATIVES<br />NO BACK-UPs
            </p>
            <Button
              onClick={() => showPage('shop')}
              variant="outline"
              size="lg"
              className="px-8 py-4 border-2 border-white text-white bg-transparent transition-all duration-300 tracking-widest hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20 font-mono"
            >
              ENTER ARCHIVE
            </Button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 border border-gray-600 bg-gray-900 bg-opacity-80 text-center">
            <span className="block text-gray-400 text-xs tracking-widest mb-1">PHOTOGRAPHS SOLD</span>
            <span className="block text-white text-3xl font-bold counter-glow">247</span>
          </div>
        </div>
      )}

      {/* Shop Page */}
      {activePage === 'shop' && (
        <div className="pt-24 pb-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl text-center mb-12 font-bold" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
              ARCHIVE // VOLUMES
            </h2>
            
            {volumes.map((volume) => (
              <div key={volume.id} className="mb-8 border border-gray-600 rounded bg-gray-900 overflow-hidden">
                {/* Desktop Table View - Medium screens and up (768px+) */}
                <div className="hidden md:block">
                  <div
                    className="grid grid-cols-9 bg-gray-800 border-b border-gray-600 font-bold text-sm cursor-pointer transition-colors hover:bg-gray-700"
                    onClick={() => toggleVolume(volume.id)}
                  >
                    <div className="p-4 border-r border-gray-600 text-center">{volume.code}</div>
                    <div className="p-4 border-r border-gray-600 text-center">{volume.name}</div>
                    <div className="p-4 border-r border-gray-600 text-center">{volume.date}</div>
                    <div className="p-4 border-r border-gray-600 text-center">{volume.location}</div>
                    <div className="p-4 border-r border-gray-600 text-center">{volume.camera}</div>
                    <div className="p-4 border-r border-gray-600 text-center">{volume.lens}</div>
                    <div className="p-4 border-r border-gray-600 text-center">{volume.description}</div>
                    <div className="p-4 border-r border-gray-600 text-center">{volume.price}</div>
                    <div className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span className={`inline-block px-3 py-1 rounded text-xs font-bold border ${
                          volume.statusClass === 'available' 
                            ? 'bg-gray-800 text-white border-white' 
                            : 'bg-gray-900 text-gray-500 border-gray-600'
                        }`}>
                          {volume.status}
                        </span>
                        <span className={`expand-icon text-xl ${expandedVolumes[volume.id] ? 'expanded' : ''}`}>
                          ▶
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {expandedVolumes[volume.id] && (
                    <div className="bg-black border-t border-gray-600">
                      <div className="grid grid-cols-9 text-sm">
                        {volume.details.map((detail, idx) => (
                          <div key={idx} className="contents">
                            <div className="detail-cell p-3 border-r border-b border-gray-600">{detail.num}</div>
                            <div className="detail-cell p-3 border-r border-b border-gray-600">{volume.name}</div>
                            <div className="detail-cell p-3 border-r border-b border-gray-600">{volume.date}</div>
                            <div className="detail-cell p-3 border-r border-b border-gray-600">{detail.num === '...' ? 'Various' : volume.location}</div>
                            <div className="detail-cell p-3 border-r border-b border-gray-600">{detail.num === '...' ? 'Various' : volume.camera}</div>
                            <div className="detail-cell p-3 border-r border-b border-gray-600">{detail.lens}</div>
                            <div className="detail-cell p-3 border-r border-b border-gray-600">{detail.desc}</div>
                            <div className="detail-cell p-3 border-r border-b border-gray-600">{volume.price}</div>
                            <div className="detail-cell p-3 border-b border-gray-600">{detail.status}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Card View - Small screens only */}
                <div className="md:hidden">
                  <div
                    className="bg-gray-800 p-4 cursor-pointer transition-colors hover:bg-gray-700"
                    onClick={() => toggleVolume(volume.id)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold">{volume.code}</span>
                        <div>
                          <div className="font-bold text-lg">{volume.name}</div>
                          <div className="text-gray-400 text-sm">{volume.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`inline-block px-3 py-1 rounded text-xs font-bold border ${
                          volume.statusClass === 'available' 
                            ? 'bg-gray-800 text-white border-white' 
                            : 'bg-gray-900 text-gray-500 border-gray-600'
                        }`}>
                          {volume.status}
                        </span>
                        <span className={`expand-icon text-xl ${expandedVolumes[volume.id] ? 'expanded' : ''}`}>
                          ▶
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">LOCATION:</span>
                        <div className="text-white">{volume.location}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">CAMERA:</span>
                        <div className="text-white">{volume.camera}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">LENS:</span>
                        <div className="text-white">{volume.lens}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">PRICE:</span>
                        <div className="text-white font-bold">{volume.price}</div>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <span className="text-gray-400">DESCRIPTION:</span>
                      <div className="text-white">{volume.description}</div>
                    </div>
                  </div>
                  
                  {expandedVolumes[volume.id] && (
                    <div className="bg-black border-t border-gray-600">
                      {volume.details.map((detail, idx) => (
                        <div key={idx} className="p-4 border-b border-gray-600 last:border-b-0">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-lg">{detail.num}</span>
                            <span className={`text-sm px-2 py-1 rounded ${
                              detail.status === 'SOLD' || detail.status === 'ALL SOLD'
                                ? 'bg-gray-800 text-gray-400'
                                : detail.status === 'AVAILABLE'
                                ? 'bg-green-900 text-green-300'
                                : 'bg-gray-700 text-gray-300'
                            }`}>
                              {detail.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="text-gray-400">LENS:</span>
                              <div className="text-white">{detail.lens}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">PRICE:</span>
                              <div className="text-white">{volume.price}</div>
                            </div>
                          </div>
                          <div className="mt-2">
                            <span className="text-gray-400">SUBJECT:</span>
                            <div className="text-white">{detail.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Page */}
      {activePage === 'custom' && (
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-4 font-bold" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
              CUSTOM // COMMISSION
            </h2>
            <p className="text-gray-400 mb-12 text-lg">REQUEST A PERSONALIZED CAPTURE SESSION</p>
            
            <div className="bg-gray-900 p-8 border border-gray-600 rounded">
              <div className="bg-black p-6 border border-gray-600 rounded mb-6 text-center">
                <h3 className="text-white mb-2">COMMISSION RATE: $100 + SHIPPING</h3>
                <p className="text-gray-400 text-sm">All custom work includes consultation, capture session, and one final print</p>
                <p className="mt-4 font-bold text-white">ALL SALES ARE FINAL</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300 font-mono tracking-wider">NAME:</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="bg-black border-gray-600 text-white focus:border-white focus:ring-white font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 font-mono tracking-wider">EMAIL:</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="bg-black border-gray-600 text-white focus:border-white focus:ring-white font-mono"
                  />
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <Label className="text-gray-300 font-mono tracking-wider">COLOR PREFERENCE:</Label>
                <RadioGroup value={formData.colorPref} onValueChange={handleRadioChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="color" id="color" className="border-white text-white" />
                    <Label htmlFor="color" className="text-white font-mono cursor-pointer">COLOR</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="black-white" id="bw" className="border-white text-white" />
                    <Label htmlFor="bw" className="text-white font-mono cursor-pointer">BLACK & WHITE</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="mb-6 space-y-2">
                <Label htmlFor="description" className="text-gray-300 font-mono tracking-wider">DESCRIPTION / VIBE / MOOD:</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={6}
                  value={formData.description}
                  onChange={handleFormChange}
                  placeholder="Describe what you're looking for, the mood you want to capture, or any specific concepts you have in mind..."
                  required
                  className="bg-black border-gray-600 text-white focus:border-white focus:ring-white font-mono resize-none"
                />
              </div>
              
              <Button
                onClick={submitCustom}
                variant="outline"
                size="lg"
                className="w-full px-6 py-3 border-2 border-white text-white bg-transparent transition-all duration-300 tracking-widest hover:bg-white hover:text-black font-mono"
              >
                SUBMIT_COMMISSION_REQUEST
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Statement Page */}
      {activePage === 'statement' && (
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-8 font-bold" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
              ARTIST STATEMENT
            </h2>
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
              <p>After nearly a decade and a half of shooting photography for high fashion & commercial work the artist fell out of love with the medium. It wasn't until recently that they discovered their love for frozen moments by going through old hard drives of seemingly random images they happened to capture over the last decade.</p>
              
              <p>That day of finding those hard drives haunted the artist. It dawned on them, that thousands of beautiful moments have become locked away on a pieces of hardware, hidden from the world. Some of the greatest photos ever taken would now be confined to prisons of digital space, hidden away from public view and most likely forgotten. The complete antithesis of photography as a medium.</p>
              
              <p>On the other side of the coin, we now live in an age where photographs are taken, gleamed for a second, and then discarded. People walk the streets aimlessly with thousands of pictures in their pockets, most that will never be revisited or appreciated after the initial shot. We consume and consume and consume but not appreciate the little moments in these technically advanced times.</p>

              <p>The artist founded 410 FINAL to correct both of these narratives: print out wonderful snapshots of life and destroy all digital and physical evidence. Only a singular print remains as proof of existence. The artists' peers do not approve of this because they want to hoard and collect, they are scared of letting go, but the artist is not. They know more wonderful moments will pass through the lens, will you be one of the owners?</p>

              <div className="mt-12">
                <Button
                  onClick={() => showPage('shop')}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 border-2 border-white text-white bg-transparent transition-all duration-300 tracking-widest hover:bg-white hover:text-black font-mono"
                >
                  ENTER THE ARCHIVE
                </Button>
              </div>

              <div className="mt-8 text-sm text-gray-500 italic">
                Because there will be no record of the photograph, the buyer will own all the rights and the IP to do with it, as they please.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Page */}
      {activePage === 'contact' && (
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl mb-8 font-bold" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
              CONTACT // DIRECT
            </h2>
            <div className="bg-gray-900 p-12 border border-gray-600 rounded">
              <div className="text-4xl text-white mb-8 tracking-wider" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
                (555) 410-FOTO
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto">
                Call the artist, please leave a message if they do not answer and they will return the call when they have a moment.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyWebsite;