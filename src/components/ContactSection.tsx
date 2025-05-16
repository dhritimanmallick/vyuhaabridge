
import AnimatedText from './AnimatedText';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-vyuhaa-500" size={24} />,
      title: 'Email',
      content: 'admin@vyuhaadata.com',
      link: 'mailto:admin@vyuhaadata.com'
    },
    {
      icon: <Phone className="text-vyuhaa-500" size={24} />,
      title: 'Phone',
      content: '+91-9840582365',
      link: 'tel:+919840582365'
    },
    {
      icon: <MapPin className="text-vyuhaa-500" size={24} />,
      title: 'Location',
      content: 'Bangalore, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText
            as="span"
            text="Contact Us"
            className="text-vyuhaa-600 font-semibold mb-3 inline-block"
          />
          <AnimatedText
            as="h2"
            text="Ready to Transform Your Data Journey?"
            className="text-3xl md:text-4xl font-bold mb-6"
            delay={100}
          />
          <AnimatedText
            text="Reach out to our team of data experts for a personalized consultation."
            className="text-gray-600 max-w-2xl mx-auto"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-1 space-y-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                <div className="flex items-start">
                  <div className="mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <a 
                      href={item.link} 
                      className="text-vyuhaa-600 hover:text-vyuhaa-700 transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <div className="glass-card p-8 animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
              <h3 className="text-xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
