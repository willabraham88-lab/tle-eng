import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, ChevronDown, Upload, X, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    subject: '',
    message: ''
  });
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Generate a new math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
    setCaptchaAnswer('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    if (!captchaAnswer) {
      newErrors.captcha = 'Please solve the math problem';
    } else if (parseInt(captchaAnswer) !== captchaQuestion.answer) {
      newErrors.captcha = 'Incorrect answer, please try again';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using FormSubmit.co service
      const formSubmitData = new FormData();
      formSubmitData.append('name', formData.name);
      formSubmitData.append('email', formData.email);
      formSubmitData.append('phone', formData.phone || 'Not provided');
      formSubmitData.append('industry', formData.industry || 'Not specified');
      formSubmitData.append('subject', formData.subject);
      formSubmitData.append('message', formData.message);
      formSubmitData.append('_replyto', formData.email);
      formSubmitData.append('_subject', `TLE Contact Form: ${formData.subject}`);
      formSubmitData.append('_captcha', 'false'); // We have our own captcha
      
      if (pdfFile) {
        formSubmitData.append('pdfFile', pdfFile);
      }
      
      const response = await fetch('https://formsubmit.co/contact@tle-eng.co.uk', {
        method: 'POST',
        body: formSubmitData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', industry: '', subject: '', message: '' });
        setPdfFile(null);
        setCaptchaAnswer('');
        generateCaptcha();
        
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      generateCaptcha(); // Generate new captcha on error
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const newErrors = { ...errors };
    
    if (!file) {
      delete newErrors.file;
      setErrors(newErrors);
      setPdfFile(null);
      return;
    }
    
    // Validate file type
    if (file.type !== 'application/pdf') {
      newErrors.file = 'Only PDF files are allowed';
      setErrors(newErrors);
      setPdfFile(null);
      e.target.value = ''; // Clear the input
      return;
    }
    
    // Validate file size (2MB = 2 * 1024 * 1024 bytes)
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes
    if (file.size > maxSize) {
      newErrors.file = 'File size must be less than 2MB';
      setErrors(newErrors);
      setPdfFile(null);
      e.target.value = ''; // Clear the input
      return;
    }
    
    // File is valid
    delete newErrors.file;
    setErrors(newErrors);
    setPdfFile(file);
  };

  const handleRemoveFile = () => {
    setPdfFile(null);
    const newErrors = { ...errors };
    delete newErrors.file;
    setErrors(newErrors);
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  return (
    <section className="py-12" style={{
      background: 'var(--bs-section-bg-light)',
    }}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[100px]">
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--bs-body-color)' }}>Get in Touch</h2>
                <p className="text-base" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                  Have a question or need assistance? Fill out the form and our team will respond within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="flex flex-col gap-4">
                {/* Email Card */}
                <div className="p-6" style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  borderRadius: '16px',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'rgba(26, 115, 232, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                }}>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center rounded-full mr-4 flex-shrink-0" style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                    }}>
                      <Mail size={22} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm mb-1" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>Email</div>
                      <a href="mailto:contact@tle-eng.co.uk" 
                         className="no-underline font-semibold text-sm hover:text-blue-600"
                         style={{ color: 'var(--bs-body-color)' }}>
                        contact@tle-eng.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-6" style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  borderRadius: '16px',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'rgba(26, 115, 232, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                }}>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center rounded-full mr-4 flex-shrink-0" style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                    }}>
                      <Phone size={22} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm mb-1" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>Phone</div>
                      <a href="tel:+447405716707" 
                         className="no-underline font-semibold text-sm hover:text-blue-600"
                         style={{ color: 'var(--bs-body-color)' }}>
                        +44 7405 716707
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-6" style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  borderRadius: '16px',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'rgba(26, 115, 232, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                }}>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center rounded-full mr-4 flex-shrink-0" style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                    }}>
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm mb-1" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>Location</div>
                      <div className="font-semibold text-sm" style={{ color: 'var(--bs-body-color)' }}>
                        Arnhall Business Park<br />Discovery Drive, Westhill<br />AB32 6FG, United Kingdom
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="p-6" style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                  background: 'var(--glass-bg)',
                  borderRadius: '16px',
                  border: '0.5px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'rgba(26, 115, 232, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                }}>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center rounded-full mr-4 flex-shrink-0" style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
                    }}>
                      <Clock size={22} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm mb-1" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>Business Hours</div>
                      <div className="font-semibold text-sm" style={{ color: 'var(--bs-body-color)' }}>
                        Mon-Fri: 8AM-6PM<br />Sat: 9AM-2PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-10" style={{
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              background: 'var(--glass-bg)',
              borderRadius: '20px',
              border: '0.5px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)'
            }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--bs-body-color)' }}>Send us a Message</h3>
              <p className="mb-6 text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center mb-6 p-4 rounded-xl border" style={{
                  border: '1px solid rgba(25, 135, 84, 0.3)',
                  background: 'rgba(25, 135, 84, 0.1)',
                  color: 'rgb(25, 135, 84)'
                }}>
                  <CheckCircle size={20} className="mr-3 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center mb-6 p-4 rounded-xl border" style={{
                  border: '1px solid rgba(220, 53, 69, 0.3)',
                  background: 'rgba(220, 53, 69, 0.1)',
                  color: 'rgb(220, 53, 69)'
                }}>
                  <AlertCircle size={20} className="mr-3 flex-shrink-0" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedInput('name')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="John Doe"
                      style={{
                        height: '48px',
                        border: `2px solid ${errors.name ? '#dc3545' : focusedInput === 'name' ? 'var(--bs-primary)' : 'var(--bs-border-color)'}`,
                        borderRadius: '10px',
                        fontSize: '14px',
                        background: 'var(--bs-body-bg)',
                        color: 'var(--bs-body-color)',
                        transition: 'all 0.2s ease'
                      }}
                    />
                    {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="john@example.com"
                      style={{
                        height: '48px',
                        border: `2px solid ${errors.email ? '#dc3545' : focusedInput === 'email' ? 'var(--bs-primary)' : 'var(--bs-border-color)'}`,
                        borderRadius: '10px',
                        fontSize: '14px',
                        background: 'var(--bs-body-bg)',
                        color: 'var(--bs-body-color)',
                        transition: 'all 0.2s ease'
                      }}
                    />
                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedInput('phone')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="+44 7XXX XXXXXX"
                      style={{
                        height: '48px',
                        border: `2px solid ${focusedInput === 'phone' ? 'var(--bs-primary)' : 'var(--bs-border-color)'}`,
                        borderRadius: '10px',
                        fontSize: '14px',
                        background: 'var(--bs-body-bg)',
                        color: 'var(--bs-body-color)',
                        transition: 'all 0.2s ease'
                      }}
                    />
                  </div>

                  {/* Industry Select */}
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>Industry</label>
                    <div className="relative">
                      <select
                        name="industry"
                        className="w-full px-4"
                        value={formData.industry}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedInput('industry')}
                        onBlur={() => setFocusedInput(null)}
                        style={{
                          height: '48px',
                          border: `2px solid ${focusedInput === 'industry' ? 'var(--bs-primary)' : 'var(--bs-border-color)'}`,
                          borderRadius: '10px',
                          fontSize: '14px',
                          background: 'var(--bs-body-bg)',
                          color: 'var(--bs-body-color)',
                          transition: 'all 0.2s ease',
                          cursor: 'pointer',
                          paddingRight: '40px',
                          appearance: 'none',
                          WebkitAppearance: 'none',
                          MozAppearance: 'none'
                        }}
                      >
                        <option value="">Select an industry</option>
                        <option value="oil-gas">Oil & Gas</option>
                        <option value="utilities">Utilities</option>
                        <option value="water-wastewater">Water & Wastewater</option>
                        <option value="mining">Mining</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="transportation">Transportation</option>
                        <option value="telecommunications">Telecommunications</option>
                        <option value="energy">Energy & Renewables</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute pointer-events-none" style={{
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: focusedInput === 'industry' ? 'var(--bs-primary)' : 'var(--bs-body-color)',
                        opacity: 0.6,
                        transition: 'all 0.2s ease'
                      }}>
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput('subject')}
                    onBlur={() => setFocusedInput(null)}
                    placeholder="What's this about?"
                    style={{
                      height: '48px',
                      border: `2px solid ${errors.subject ? '#dc3545' : focusedInput === 'subject' ? 'var(--bs-primary)' : 'var(--bs-border-color)'}`,
                      borderRadius: '10px',
                      fontSize: '14px',
                      background: 'var(--bs-body-bg)',
                      color: 'var(--bs-body-color)',
                      transition: 'all 0.2s ease'
                    }}
                  />
                  {errors.subject && <div className="text-red-500 text-sm mt-1">{errors.subject}</div>}
                </div>

                {/* Message Input */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>Message *</label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 resize-y"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput('message')}
                    onBlur={() => setFocusedInput(null)}
                    placeholder="Tell us more about your project..."
                    rows={5}
                    style={{
                      border: `2px solid ${errors.message ? '#dc3545' : focusedInput === 'message' ? 'var(--bs-primary)' : 'var(--bs-border-color)'}`,
                      borderRadius: '10px',
                      fontSize: '14px',
                      background: 'var(--bs-body-bg)',
                      color: 'var(--bs-body-color)',
                      transition: 'all 0.2s ease'
                    }}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
                    <div className="text-sm ml-auto" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>{formData.message.length}/1000</div>
                  </div>
                </div>

                {/* File Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                    Attach a PDF (Optional) <span style={{ fontWeight: 'normal', opacity: 0.7 }}>- Max 2MB</span>
                  </label>
                  
                  {!pdfFile ? (
                    <label 
                      htmlFor="pdf-upload" 
                      className="flex items-center justify-center p-6 w-full cursor-pointer" 
                      style={{
                        background: 'var(--bs-body-bg)',
                        border: `2px dashed ${errors.file ? '#dc3545' : 'var(--bs-border-color)'}`,
                        borderRadius: '10px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!errors.file) {
                          e.currentTarget.style.borderColor = 'var(--bs-primary)';
                          e.currentTarget.style.background = 'rgba(26, 115, 232, 0.02)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = errors.file ? '#dc3545' : 'var(--bs-border-color)';
                        e.currentTarget.style.background = 'var(--bs-body-bg)';
                      }}
                    >
                      <Upload size={20} className="mr-2 text-blue-600" />
                      <span className="text-sm" style={{ color: 'var(--bs-body-color)' }}>
                        Click to upload PDF file
                      </span>
                      <input
                        id="pdf-upload"
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-4" style={{
                      background: 'rgba(26, 115, 232, 0.05)',
                      border: '2px solid rgba(26, 115, 232, 0.2)',
                      borderRadius: '10px'
                    }}>
                      <div className="flex items-center">
                        <div className="flex items-center justify-center rounded mr-3" style={{
                          width: '40px',
                          height: '40px',
                          background: 'rgba(26, 115, 232, 0.1)'
                        }}>
                          <FileText size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold" style={{ color: 'var(--bs-body-color)' }}>{pdfFile.name}</div>
                          <div className="text-xs" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>
                            {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="p-1 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  )}
                  
                  {errors.file && <div className="text-red-500 text-sm mt-2">{errors.file}</div>}
                </div>

                {/* Captcha */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>Security Check *</label>
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-3 font-semibold" style={{
                      background: 'var(--bs-body-bg)',
                      border: '2px solid var(--bs-border-color)',
                      borderRadius: '10px',
                      fontSize: '14px',
                      color: 'var(--bs-body-color)'
                    }}>
                      {captchaQuestion.num1} + {captchaQuestion.num2} = ?
                    </div>
                    <input
                      type="text"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      placeholder="Answer"
                      className="px-4"
                      style={{
                        width: '100px',
                        height: '48px',
                        border: `2px solid ${errors.captcha ? '#dc3545' : 'var(--bs-border-color)'}`,
                        borderRadius: '10px',
                        fontSize: '14px',
                        background: 'var(--bs-body-bg)',
                        color: 'var(--bs-body-color)',
                        transition: 'all 0.2s ease'
                      }}
                    />
                  </div>
                  {errors.captcha && <div className="text-red-500 text-sm mt-1">{errors.captcha}</div>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    height: '52px',
                    fontSize: '15px'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}