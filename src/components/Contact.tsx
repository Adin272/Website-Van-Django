import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { sendEmail } from '@/components/EmailForward';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendEmail(formData);
      toast({
        title: t('contact.toast.success.title'),
        description: t('contact.toast.success.description'),
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (err) {
      const error = err as Error;
      console.error('Verzenden mislukt:', error.message);
      toast({
        title: t('contact.toast.error.title'),
        description: t('contact.toast.error.description'),
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      details: 'Djangohaemers251205@gmail.com',
      action: 'mailto:Djangohaemers251205@gmail.com',
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      details: '+31 (06) 39726977',
      action: 'tel:+31639726977',
    },
    {
      icon: MapPin,
      title: t('contact.info.location'),
      details: 'Limburg, Kerkrade',
      action: '#',
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      details: t('contact.hours.details'),
      action: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-automotive-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-automotive-silver max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-8">{t('contact.choose.us')}</h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.action}
                  className="flex items-center p-4 glass-effect rounded-lg hover:bg-automotive-gold/10 transition-all duration-300 group"
                >
                  <info.icon className="text-automotive-gold mr-4" size={24} />
                  <div>
                    <div className="text-white font-semibold">{info.title}</div>
                    <div className="text-automotive-silver">{info.details}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">{t('contact.choose.us')}</h4>
              <ul className="space-y-3 text-automotive-silver">
                {[
                  t('contact.choose.equipment'),
                  t('contact.choose.turnaround'),
                  t('contact.choose.satisfaction'),
                  t('contact.choose.pricing'),
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-automotive-gold rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.form.title')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-automotive-silver mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-automotive-charcoal border border-automotive-silver/30 rounded-lg text-white focus:border-automotive-gold focus:outline-none transition-colors"
                    placeholder={t('contact.form.placeholder.name')}
                  />
                </div>
                <div>
                  <label className="block text-automotive-silver mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-automotive-charcoal border border-automotive-silver/30 rounded-lg text-white focus:border-automotive-gold focus:outline-none transition-colors"
                    placeholder={t('contact.form.placeholder.email')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-automotive-silver mb-2">
                    Telefoonnummer (optioneel)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-automotive-charcoal border border-automotive-silver/30 rounded-lg text-white focus:border-automotive-gold focus:outline-none transition-colors"
                    placeholder="06-12345678"
                  />
                </div>
                <div>
                  <label className="block text-automotive-silver mb-2">Dienst</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-automotive-charcoal text-white border border-automotive-silver/30 rounded-lg focus:border-automotive-gold focus:outline-none transition-colors"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="locatieshoot">Fotoshoot op locatie</option>
                    <option value="autoshoot">Auto foto's</option>
                    <option value="portret">Portret</option>
                    <option value="evenement">Evenementen</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-automotive-silver mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-automotive-charcoal border border-automotive-silver/30 rounded-lg text-white focus:border-automotive-gold focus:outline-none transition-colors resize-none"
                  placeholder={t('contact.form.placeholder.message')}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-automotive-gold hover:bg-automotive-gold/90 text-automotive-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
