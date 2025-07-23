// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Heart, Stethoscope, Calendar, Users, Star, User, Clock, Shield, Award, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getServiceCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['service-card-0', 'service-card-1', 'service-card-2', 'service-card-3'];
  return ids[index] || 'noID';
};

const getSpecialtyBadgeId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['specialty-badge-0', 'specialty-badge-1', 'specialty-badge-2', 'specialty-badge-3', 'specialty-badge-4', 'specialty-badge-5'];
  return ids[index] || 'noID';
};

const getSpecialtyIconId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['specialty-icon-0', 'specialty-icon-1', 'specialty-icon-2', 'specialty-icon-3', 'specialty-icon-4', 'specialty-icon-5'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
    message: ''
  });
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appointment request submission
    console.log('Appointment request:', appointmentForm);
    // Reset form
    setAppointmentForm({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      reason: '',
      message: ''
    });
    alert('Appointment request submitted! We will contact you soon.');
  };

  const services = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Cardiology",
      description: "Comprehensive heart health assessments and treatments for optimal cardiovascular wellness"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
      title: "General Medicine",
      description: "Primary care services including routine checkups, preventive care, and health screenings"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Preventive Care",
      description: "Proactive healthcare approach focusing on disease prevention and health maintenance"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Specialized Treatment",
      description: "Advanced medical treatments tailored to individual patient needs and conditions"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Patients Treated", value: "10K+" },
    { label: "Success Rate", value: "98%" },
    { label: "Awards Won", value: "25+" }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with medical gradient background"
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary site header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Doctor logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="Dr. Mike brand name"
              className="text-2xl font-bold text-gray-800"
            >
              Dr. Mike
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="services-button" 
              devName="Services Button" 
              devDescription="Link to services section"
              variant="ghost" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Services
            </Button>
            <Button 
              devId="about-button" 
              devName="About Button" 
              devDescription="Link to about section"
              variant="ghost" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated user"
                  className="text-gray-600"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button in navigation header for authenticated users"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for unauthenticated users"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button in navigation header"
                    variant="ghost" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Get started button in navigation header"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero section with doctor introduction and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title introducing Dr. Mike"
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            >
              Your Health, 
              <Span 
                devId="care-highlight" 
                devName="Care Highlight" 
                devDescription="Highlighted care text in gradient"
                className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
              >
                {' '}Our Priority
              </Span>
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero section description explaining medical services"
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Providing comprehensive healthcare services with over 15 years of experience. 
              From routine checkups to specialized treatments, your wellness is our mission.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons in hero section"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                devId="hero-book-appointment"
                devName="Book Appointment Button"
                devDescription="Primary call-to-action button for booking appointments"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                onClick={() => document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button 
                devId="hero-learn-more"
                devName="Learn More Button"
                devDescription="Secondary button to learn more about services"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics section showing medical achievements"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-600 font-medium">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Services Section */}
      <Container componentId="services-section">
        <Section devId="noID" className="container mx-auto px-4 py-20" id="services">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Medical Services</H2>
            <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services tailored to meet your individual needs with the highest standards of medical care
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                devId={getServiceCardId(index)}
                devName={`${service.title} Service Card`}
                devDescription={`Service card highlighting ${service.title}: ${service.description}`}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:border-blue-200"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{service.icon}</Div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <P devId="noID" className="text-gray-600">{service.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* About Section */}
      <Container componentId="about-section">
        <Section devId="noID" className="container mx-auto px-4 py-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl" id="about">
          <Div devId="noID" className="grid md:grid-cols-2 gap-12 items-center">
            <Div devId="noID">
              <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-6">About Dr. Mike</H2>
              <P devId="noID" className="text-gray-600 mb-6 text-lg leading-relaxed">
                With over 15 years of experience in medicine, Dr. Mike has dedicated his career to providing 
                exceptional healthcare services. Board-certified and committed to staying at the forefront of 
                medical advances, he combines clinical expertise with genuine compassion for patient care.
              </P>
              <Div devId="noID" className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { name: "Cardiology", color: "from-red-400 to-red-500" },
                  { name: "Internal Medicine", color: "from-blue-400 to-blue-500" },
                  { name: "Preventive Care", color: "from-green-400 to-green-500" },
                  { name: "Emergency Medicine", color: "from-purple-400 to-purple-500" },
                  { name: "Geriatrics", color: "from-orange-400 to-orange-500" },
                  { name: "Family Medicine", color: "from-teal-400 to-teal-500" }
                ].map((specialty, index) => (
                  <Div key={index} devId="noID" className="text-center">
                    <Div devId={getSpecialtyIconId(index)} className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br ${specialty.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{specialty.name[0]}</span>
                    </Div>
                    <Badge 
                      devId={getSpecialtyBadgeId(index)}
                      devName={`${specialty.name} Specialty Badge`}
                      devDescription={`Specialty badge for ${specialty.name}`}
                      className="text-xs text-gray-600 font-medium bg-white/50 border-none"
                    >
                      {specialty.name}
                    </Badge>
                  </Div>
                ))}
              </Div>
            </Div>
            <Div devId="noID" className="bg-white rounded-2xl p-8 shadow-xl">
              <H2 devId="noID" className="text-2xl font-bold text-gray-800 mb-6">Contact Information</H2>
              <Div devId="noID" className="space-y-4">
                <Div devId="noID" className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">(555) 123-4567</span>
                </Div>
                <Div devId="noID" className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">contact@drmike.com</span>
                </Div>
                <Div devId="noID" className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">123 Medical Center Dr, Health City, HC 12345</span>
                </Div>
                <Div devId="noID" className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Appointment Request Form */}
      <Container componentId="appointment-form-section">
        <Section devId="noID" className="container mx-auto px-4 py-20" id="appointment-form">
          <Div devId="noID" className="max-w-2xl mx-auto">
            <Div devId="noID" className="text-center mb-12">
              <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Request an Appointment</H2>
              <P devId="noID" className="text-gray-600">
                Fill out the form below and we'll contact you to schedule your appointment
              </P>
            </Div>
            <Card devId="appointment-form-card" className="bg-white rounded-2xl shadow-xl border border-gray-100">
              <CardContent devId="noID" className="p-8">
                <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                  <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={appointmentForm.name}
                        onChange={(e) => setAppointmentForm({...appointmentForm, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </Div>
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={appointmentForm.email}
                        onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </Div>
                  </Div>
                  <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={appointmentForm.phone}
                        onChange={(e) => setAppointmentForm({...appointmentForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </Div>
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        value={appointmentForm.preferredDate}
                        onChange={(e) => setAppointmentForm({...appointmentForm, preferredDate: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </Div>
                  </Div>
                  <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <select
                        value={appointmentForm.preferredTime}
                        onChange={(e) => setAppointmentForm({...appointmentForm, preferredTime: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (8AM-12PM)</option>
                        <option value="afternoon">Afternoon (12PM-5PM)</option>
                        <option value="evening">Evening (5PM-7PM)</option>
                      </select>
                    </Div>
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit</label>
                      <select
                        value={appointmentForm.reason}
                        onChange={(e) => setAppointmentForm({...appointmentForm, reason: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select reason</option>
                        <option value="checkup">Routine Checkup</option>
                        <option value="consultation">Consultation</option>
                        <option value="follow-up">Follow-up</option>
                        <option value="emergency">Urgent Care</option>
                        <option value="other">Other</option>
                      </select>
                    </Div>
                  </Div>
                  <Div devId="noID">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                    <textarea
                      rows={4}
                      value={appointmentForm.message}
                      onChange={(e) => setAppointmentForm({...appointmentForm, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your symptoms or any additional information..."
                    />
                  </Div>
                  <Button 
                    devId="submit-appointment-request"
                    devName="Submit Appointment Request"
                    devDescription="Button to submit appointment request form"
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Request Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Site footer with medical practice information"
        className="container mx-auto px-4 py-12 border-t border-gray-200"
      >
        <Div devId="noID" className="grid md:grid-cols-3 gap-8">
          <Div devId="noID">
            <Div devId="noID" className="flex items-center space-x-2 mb-4">
              <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </Div>
              <Span devId="noID" className="text-xl font-bold text-gray-800">Dr. Mike</Span>
            </Div>
            <P devId="noID" className="text-gray-600 mb-4">
              Providing exceptional healthcare services with compassion and expertise for over 15 years.
            </P>
          </Div>
          <Div devId="noID">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <Div devId="noID" className="space-y-2">
              <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#appointment-form" className="block text-gray-600 hover:text-blue-600 transition-colors">Book Appointment</a>
              <Link to="/login" className="block text-gray-600 hover:text-blue-600 transition-colors">Patient Portal</Link>
            </Div>
          </Div>
          <Div devId="noID">
            <h3 className="font-semibold text-gray-800 mb-4">Contact Info</h3>
            <Div devId="noID" className="space-y-2 text-gray-600">
              <P devId="noID">(555) 123-4567</P>
              <P devId="noID">contact@drmike.com</P>
              <P devId="noID">123 Medical Center Dr<br />Health City, HC 12345</P>
            </Div>
          </Div>
        </Div>
        <Div devId="noID" className="border-t border-gray-200 mt-8 pt-8 text-center">
          <P devId="noID" className="text-gray-600">
            © 2024 Dr. Mike Medical Practice. All rights reserved. | Licensed Healthcare Provider
          </P>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};