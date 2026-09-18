import { useState, useEffect, useRef } from 'react';

// SVG Ornament Component
const OrnamentSVG = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10h30M90 10h30" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="40" cy="10" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="60" cy="10" r="3" fill="currentColor" />
    <circle cx="80" cy="10" r="2" fill="currentColor" opacity="0.6" />
    <path d="M45 10c5-5 10-5 15 0c5 5 10 5 15 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <path d="M45 10c5 5 10 5 15 0c5-5 10-5 15 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
  </svg>
);

// Islamic geometric pattern
const GeometricPattern = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 0L200 100L100 200L0 100Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <path d="M100 20L180 100L100 180L20 100Z" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <path d="M100 40L160 100L100 160L40 100Z" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <path d="M100 60L140 100L100 140L60 100Z" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', phone: '', service: '', date: '' });
  };

  const services = [
    {
      title: 'Традиционный хаммам',
      subtitle: 'Ритуал очищения',
      description: 'Классический турецкий ритуал на горячем мраморе. Пилинг кесе, пенный массаж и полное обновление.',
      duration: '90 мин',
      price: '4 500',
      features: ['Прогрев на чилане', 'Пилинг кесе', 'Пенный массаж', 'Травяной чай'],
    },
    {
      title: 'Королевский ритуал',
      subtitle: 'Для истинных ценителей',
      description: 'Полный османский ритуал: ароматерапия, пилинг, пенный массаж, маска для тела, обёртывание.',
      duration: '150 мин',
      price: '8 500',
      features: ['Всё из традиционного', 'Ароматерапия', 'Маска для тела', 'Масло-массаж', 'Фрукты и сладости'],
    },
    {
      title: 'Парная для двоих',
      subtitle: 'Романтический вечер',
      description: 'Индивидуальный хаммам для двоих с персональным мастером, шампанским и восточными сладостями.',
      duration: '120 мин',
      price: '12 000',
      features: ['Приватный зал', 'Персональный мастер', 'Шампанское', 'Фруктовая тарелка', 'Фотосессия'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-[#e8e0d4] overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-amber-600/40 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-500" fill="currentColor">
                  <path d="M12 2C8 2 4 6 4 10c0 3 2 5 4 6v2c0 1 1 2 2 2h4c1 0 2-1 2-2v-2c2-1 4-3 4-6 0-4-4-8-8-8zm0 2c3.3 0 6 3.3 6 6 0 2.2-1.5 4-3.5 4.8L14 15v2h-4v-2l-.5-.2C7.5 14 6 12.2 6 10c0-2.7 2.7-6 6-6z"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <div className="font-serif text-lg tracking-wider text-amber-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                  HAMMAM
                </div>
                <div className="text-[10px] tracking-[0.3em] text-amber-600/70 uppercase">
                  Восточная Сказка
                </div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {['О нас', 'Ритуалы', 'Цены', 'Отзывы', 'Контакты'].map((item, i) => (
                <a
                  key={i}
                  href={`#${['about', 'services', 'prices', 'reviews', 'contact'][i]}`}
                  className="text-sm tracking-wider text-white/60 hover:text-amber-400 transition-colors duration-300 uppercase"
                >
                  {item}
                </a>
              ))}
              <a
                href="#booking"
                className="relative px-7 py-2.5 border border-amber-600/50 text-amber-400 text-sm tracking-wider uppercase hover:bg-amber-600/10 hover:border-amber-500 transition-all duration-300 group"
              >
                <span className="relative z-10">Записаться</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/10 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-amber-400 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-dark border-t border-amber-900/20 mt-3">
            <div className="px-6 py-6 space-y-4">
              {['О нас', 'Ритуалы', 'Цены', 'Отзывы', 'Контакты'].map((item, i) => (
                <a
                  key={i}
                  href={`#${['about', 'services', 'prices', 'reviews', 'contact'][i]}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white/70 hover:text-amber-400 py-2 tracking-wider uppercase text-sm"
                >
                  {item}
                </a>
              ))}
              <a href="#booking" onClick={() => setIsMenuOpen(false)} className="block border border-amber-600/50 text-amber-400 text-center py-3 mt-4 tracking-wider uppercase text-sm">
                Записаться
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/d3afdc02-9e9f-4ca0-87d4-18d0fd440e4e/_result.png"
            alt="Hammam"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d]/80 via-[#0a0f0d]/50 to-[#0a0f0d]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0d]/60 to-transparent" />
        </div>

        {/* Decorative patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 text-amber-600/10 opacity-30">
          <GeometricPattern className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-80 h-80 text-amber-600/10 opacity-20 rotate-45">
          <GeometricPattern className="w-full h-full" />
        </div>

        {/* Steam particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/20 rounded-full blur-sm steam-particle"
              style={{
                left: `${20 + i * 15}%`,
                bottom: '30%',
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <OrnamentSVG className="w-32 h-6 mx-auto text-amber-600/60" />
          </div>

          <p
            className="text-amber-500/80 tracking-[0.4em] uppercase text-xs md:text-sm mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.3s', fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}
          >
            Турецкая баня в сердце Москвы
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-[0.9] animate-fade-in-up"
            style={{ fontFamily: 'Playfair Display, serif', animationDelay: '0.5s' }}
          >
            Хаммам
            <br />
            <span className="text-gold-gradient italic font-normal">Восточная</span>
            <br />
            <span className="text-gold-gradient italic font-normal">Сказка</span>
          </h1>

          <p
            className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.7s', fontFamily: 'Cormorant Garamond, serif' }}
          >
            Погрузитесь в вековые традиции османских бань. 
            Мрамор, пар и искусство мастеров-телляков.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <a
              href="#booking"
              className="group relative px-10 py-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white tracking-wider uppercase text-sm overflow-hidden"
            >
              <span className="relative z-10">Записаться на ритуал</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#services"
              className="px-10 py-4 border border-white/20 text-white/70 tracking-wider uppercase text-sm hover:border-amber-600/50 hover:text-amber-400 transition-all duration-500"
            >
              Наши ритуалы
            </a>
          </div>

          {/* Bottom ornament */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <OrnamentSVG className="w-40 h-6 mx-auto text-amber-600/40" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-amber-600/50 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 md:py-40">
        <div className="absolute inset-0 pattern-overlay" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal">
              <p className="text-amber-500/80 tracking-[0.3em] uppercase text-xs mb-4">
                О нашем хаммаме
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Традиции, которым
                <br />
                <span className="italic text-gold-gradient">более 600 лет</span>
              </h2>
              <OrnamentSVG className="w-32 h-6 text-amber-600/50 mb-8" />
              <p className="text-white/50 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem' }}>
                Наш хаммам воссоздаёт атмосферу легендарных турецких бань Стамбула. 
                Каждый визит — это ритуал очищения, унаследованный от османских султанов.
              </p>
              <p className="text-white/40 leading-relaxed mb-10">
                Мраморные залы с подогревом, ароматный пар, мастер-телляк с золотыми руками — 
                всё это перенесёт вас в восточную сказку. Мы используем только натуральные масла, 
                мыло и косметику, привезённую из Турции.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '12+', label: 'лет традиций' },
                  { number: '5000+', label: 'гостей в год' },
                  { number: '45°', label: 'температура пара' },
                  { number: '100%', label: 'натуральные масла' },
                ].map((stat, i) => (
                  <div key={i} className="border border-amber-900/20 p-4">
                    <div className="text-2xl font-light text-amber-400 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {stat.number}
                    </div>
                    <div className="text-white/40 text-xs tracking-wider uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal relative">
              <div className="relative">
                <img
                  src="https://image.qwenlm.ai/generated-images/cb181beb-4b30-45d5-82ff-c561ff7e5480/_result.png"
                  alt="Hammam interior"
                  className="w-full h-[500px] object-cover rounded-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-transparent" />
                <div className="absolute inset-0 border border-amber-600/20 rounded-sm" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-amber-600/10 rounded-sm -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 text-amber-600/10">
                <GeometricPattern className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 md:py-40 bg-[#0d1411]">
        <div className="absolute inset-0 pattern-overlay opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <p className="text-amber-500/80 tracking-[0.3em] uppercase text-xs mb-4">
              Наши ритуалы
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Искусство <span className="italic text-gold-gradient">очищения</span>
            </h2>
            <OrnamentSVG className="w-40 h-6 mx-auto text-amber-600/50 mb-6" />
            <p className="text-white/40 max-w-xl mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem' }}>
              Каждый ритуал — это путешествие в мир восточной гармонии, 
              где тело и душа обретают покой
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="reveal card-hover group relative bg-[#0a0f0d] border border-amber-900/20 p-8 md:p-10 hover:border-amber-600/40"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Corner ornaments */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-600/30 group-hover:border-amber-500/60 transition-colors" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-600/30 group-hover:border-amber-500/60 transition-colors" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-600/30 group-hover:border-amber-500/60 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-600/30 group-hover:border-amber-500/60 transition-colors" />

                <p className="text-amber-600/60 tracking-[0.2em] uppercase text-[10px] mb-2">
                  {service.subtitle}
                </p>
                <h3
                  className="text-2xl font-light text-white mb-4 group-hover:text-amber-100 transition-colors"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-amber-500 rounded-full" />
                      <span className="text-white/50 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-amber-900/20 pt-6 flex items-end justify-between">
                  <div>
                    <span className="text-white/30 text-xs tracking-wider uppercase">Длительность</span>
                    <div className="text-white/60 text-sm mt-1">{service.duration}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-white/30 text-xs tracking-wider uppercase">Стоимость</span>
                    <div className="text-amber-400 text-xl font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.price} <span className="text-sm">₽</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/d3afdc02-9e9f-4ca0-87d4-18d0fd440e4e/_result.png"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0d] via-[#0a0f0d]/80 to-[#0a0f0d]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-amber-500/80 tracking-[0.3em] uppercase text-xs mb-4">
                Ритуал хаммама
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Пять этапов
                <br />
                <span className="italic text-gold-gradient">совершенства</span>
              </h2>
              <OrnamentSVG className="w-32 h-6 text-amber-600/50 mb-10" />

              <div className="space-y-8">
                {[
                  { num: '01', title: 'Прогрев', desc: 'Мягкий пар раскрывает поры и подготавливает тело к ритуалу' },
                  { num: '02', title: 'Пилинг кесе', desc: 'Глубокое очищение специальной рукавицей из натурального волокна' },
                  { num: '03', title: 'Пенный массаж', desc: 'Обильная пена из оливкового мыла и невесомый массаж тела' },
                  { num: '04', title: 'Маски и масла', desc: 'Питательные маски и массаж с ароматическими маслами' },
                  { num: '05', title: 'Отдых', desc: 'Чай с восточными сладостями в зоне релаксации' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-amber-600/40 text-sm font-light tracking-wider group-hover:text-amber-500 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-white font-light text-lg mb-1 group-hover:text-amber-100 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {step.title}
                      </h4>
                      <p className="text-white/40 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal hidden lg:block">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 border border-amber-600/20 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-4 border border-amber-600/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
                <div className="absolute inset-8 border border-amber-600/15 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-float">🕌</div>
                    <p className="text-amber-400/60 text-xs tracking-[0.3em] uppercase">С 2012 года</p>
                  </div>
                </div>
                {/* Decorative dots */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-amber-500/40 rounded-full"
                    style={{
                      top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                      left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="relative py-32 md:py-40 bg-[#0d1411]">
        <div className="absolute inset-0 pattern-overlay opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <p className="text-amber-500/80 tracking-[0.3em] uppercase text-xs mb-4">
              Стоимость
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Тарифы <span className="italic text-gold-gradient">посещения</span>
            </h2>
            <OrnamentSVG className="w-40 h-6 mx-auto text-amber-600/50 mb-6" />
            <p className="text-white/40 max-w-lg mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem' }}>
              Полотенца, халаты, тапочки и косметика включены в стоимость каждого ритуала
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '3 200',
                duration: '60 минут',
                popular: false,
                features: ['Парная 15 мин', 'Пилинг кесе', 'Пенный массаж', 'Отдых в зоне релакса', 'Травяной чай'],
              },
              {
                name: 'Классический',
                price: '4 500',
                duration: '90 минут',
                popular: true,
                features: ['Парная 20 мин', 'Пилинг кесе', 'Пенный массаж', 'Маска для тела', 'Ароматерапия', 'Чай со сладостями'],
              },
              {
                name: 'Королевский',
                price: '8 500',
                duration: '150 минут',
                popular: false,
                features: ['Всё из «Классического»', 'Масло-массаж', 'Обёртывание', 'Маска для лица', 'Скраб на выбор', 'Фруктовая тарелка'],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`reveal relative p-8 md:p-10 border transition-all duration-500 ${
                  plan.popular
                    ? 'border-amber-600/40 bg-gradient-to-b from-amber-900/10 to-transparent'
                    : 'border-amber-900/20 hover:border-amber-600/30'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-[#0a0f0d] text-[10px] tracking-[0.2em] uppercase px-4 py-1">
                    Популярный
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className="text-xl font-light text-white mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-light text-amber-400" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {plan.price}
                    </span>
                    <span className="text-white/30 text-sm">₽</span>
                  </div>
                  <p className="text-white/30 text-xs tracking-wider uppercase">{plan.duration}</p>
                </div>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-amber-600/60 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0L10 6H16L11 9.5L13 16L8 12L3 16L5 9.5L0 6H6L8 0Z" opacity="0.6" />
                      </svg>
                      <span className="text-white/50 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#booking"
                  className={`block text-center py-3.5 tracking-wider uppercase text-xs transition-all duration-300 ${
                    plan.popular
                      ? 'bg-amber-600 text-[#0a0f0d] hover:bg-amber-500'
                      : 'border border-amber-900/30 text-amber-400/70 hover:border-amber-600/50 hover:text-amber-400'
                  }`}
                >
                  Записаться
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative py-32 md:py-40">
        <div className="absolute inset-0 pattern-overlay opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <p className="text-amber-500/80 tracking-[0.3em] uppercase text-xs mb-4">
              Отзывы
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Слова наших <span className="italic text-gold-gradient">гостей</span>
            </h2>
            <OrnamentSVG className="w-40 h-6 mx-auto text-amber-600/50" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна К.',
                role: 'Постоянный гость',
                text: 'Невероятные ощущения! После королевского ритуала чувствуешь себя заново рождённой. Атмосфера переносит в другой мир.',
              },
              {
                name: 'Дмитрий П.',
                role: 'Гость уже 3 года',
                text: 'Хожу сюда каждый месяц. Мастера — настоящие профессионалы. Это не просто баня — это философия очищения.',
              },
              {
                name: 'Елена М.',
                role: 'Впервые была месяц назад',
                text: 'Подарила мужу сертификат на парную программу. Теперь ходим вместе. Кожа после процедур — как шёлк!',
              },
            ].map((review, i) => (
              <div
                key={i}
                className="reveal relative border border-amber-900/20 p-8 md:p-10 hover:border-amber-600/30 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="absolute top-6 right-8 text-amber-600/20 text-6xl font-serif leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                  "
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-500" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L10 6H16L11 9.5L13 16L8 12L3 16L5 9.5L0 6H6L8 0Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/50 leading-relaxed mb-8 italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem' }}>
                  {review.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-amber-600/30 flex items-center justify-center text-amber-400 text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="text-white/80 text-sm">{review.name}</div>
                    <div className="text-white/30 text-xs">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="relative py-32 md:py-40 bg-[#0d1411]">
        <div className="absolute inset-0 pattern-overlay opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal">
              <p className="text-amber-500/80 tracking-[0.3em] uppercase text-xs mb-4">
                Запись онлайн
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Забронируйте
                <br />
                <span className="italic text-gold-gradient">ваш ритуал</span>
              </h2>
              <OrnamentSVG className="w-32 h-6 text-amber-600/50 mb-8" />
              <p className="text-white/40 text-lg leading-relaxed mb-10" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Оставьте заявку, и мы перезвоним вам в течение 15 минут 
                для подтверждения записи.
              </p>

              <div className="space-y-6">
                {[
                  { icon: '📞', label: 'Телефон', value: '+7 (495) 123-45-67' },
                  { icon: '🕐', label: 'Часы работы', value: 'Ежедневно 9:00 — 23:00' },
                  { icon: '📍', label: 'Адрес', value: 'ул. Восточная, 15, Москва' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 border border-amber-900/30 flex items-center justify-center text-xl group-hover:border-amber-600/40 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white/30 text-xs tracking-wider uppercase">{item.label}</div>
                      <div className="text-white/70">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="border border-amber-900/20 p-8 md:p-10 relative">
                {/* Corner ornaments */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-600/30" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-600/30" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-600/30" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-600/30" />

                {formSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-6 border border-amber-600/40 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Заявка принята
                    </h3>
                    <p className="text-white/40">Мы перезвоним в течение 15 минут</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-amber-900/30 focus:border-amber-500 outline-none text-white placeholder-white/20 transition-colors"
                        placeholder="Как к вам обращаться?"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-amber-900/30 focus:border-amber-500 outline-none text-white placeholder-white/20 transition-colors"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">Ритуал</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-amber-900/30 focus:border-amber-500 outline-none text-white/70 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0a0f0d]">Выберите ритуал</option>
                        <option value="basic" className="bg-[#0a0f0d]">Базовый — 3 200 ₽</option>
                        <option value="classic" className="bg-[#0a0f0d]">Классический — 4 500 ₽</option>
                        <option value="royal" className="bg-[#0a0f0d]">Королевский — 8 500 ₽</option>
                        <option value="couple" className="bg-[#0a0f0d]">Парная для двоих — 12 000 ₽</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">Желаемая дата</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-amber-900/30 focus:border-amber-500 outline-none text-white/70 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-4 py-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white tracking-wider uppercase text-sm hover:from-amber-600 hover:to-amber-500 transition-all duration-500 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Записаться на ритуал</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <p className="text-white/20 text-[10px] text-center tracking-wider">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 md:py-40">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <p className="text-amber-500/80 tracking-[0.3em] uppercase text-xs mb-4">
              Контакты
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Как нас <span className="italic text-gold-gradient">найти</span>
            </h2>
            <OrnamentSVG className="w-40 h-6 mx-auto text-amber-600/50" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '📍', title: 'Адрес', lines: ['ул. Восточная, 15', 'Москва, 101000', 'м. Красные Ворота'] },
              { icon: '🕐', title: 'Часы работы', lines: ['Пн-Пт: 9:00 — 23:00', 'Сб-Вс: 8:00 — 00:00', 'Без выходных'] },
              { icon: '📞', title: 'Связаться', lines: ['+7 (495) 123-45-67', 'info@hammam-vostok.ru', 'Telegram / WhatsApp'] },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal text-center border border-amber-900/20 p-8 md:p-10 hover:border-amber-600/30 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-light text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.title}
                </h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-white/40 text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="reveal flex justify-center gap-6">
            {['Telegram', 'WhatsApp', 'Instagram', 'VK'].map((social, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 border border-amber-900/20 flex items-center justify-center text-white/40 hover:border-amber-600/40 hover:text-amber-400 transition-all duration-300 text-xs tracking-wider"
              >
                {social.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-amber-900/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-amber-600/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-500" fill="currentColor">
                  <path d="M12 2C8 2 4 6 4 10c0 3 2 5 4 6v2c0 1 1 2 2 2h4c1 0 2-1 2-2v-2c2-1 4-3 4-6 0-4-4-8-8-8zm0 2c3.3 0 6 3.3 6 6 0 2.2-1.5 4-3.5 4.8L14 15v2h-4v-2l-.5-.2C7.5 14 6 12.2 6 10c0-2.7 2.7-6 6-6z"/>
                </svg>
              </div>
              <div>
                <div className="font-serif text-lg tracking-wider text-amber-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                  HAMMAM
                </div>
                <div className="text-[10px] tracking-[0.3em] text-amber-600/50 uppercase">
                  Восточная Сказка
                </div>
              </div>
            </div>

            <OrnamentSVG className="w-32 h-6 text-amber-600/30 mb-6" />

            <p className="text-white/30 text-sm max-w-md mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
              Место, где восточные традиции встречаются с современным комфортом. 
              Подарите себе незабываемый опыт.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {['О нас', 'Ритуалы', 'Цены', 'Отзывы', 'Контакты'].map((item, i) => (
                <a
                  key={i}
                  href={`#${['about', 'services', 'prices', 'reviews', 'contact'][i]}`}
                  className="text-white/30 hover:text-amber-400 text-xs tracking-wider uppercase transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="border-t border-amber-900/10 pt-8 w-full flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/20 text-xs tracking-wider">
                © 2024 HAMMAM «Восточная Сказка». Все права защищены.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white/20 hover:text-white/40 text-xs transition-colors">Политика конфиденциальности</a>
                <a href="#" className="text-white/20 hover:text-white/40 text-xs transition-colors">Оферта</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
