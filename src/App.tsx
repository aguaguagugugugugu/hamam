import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: '', phone: '', service: '', date: '' });
  };

  const services = [
    {
      title: 'Классический хаммам',
      description: 'Традиционная турецкая баня с прогревом на мраморном камне, пилинг кесе и пенный массаж',
      duration: '90 мин',
      price: '3 500 ₽',
      icon: '🕌',
    },
    {
      title: 'Королевский хаммам',
      description: 'Полный ритуал: ароматерапия, пилинг, пенный массаж, маска для тела, чай с восточными сладостями',
      duration: '120 мин',
      price: '5 500 ₽',
      icon: '👑',
    },
    {
      title: 'Мыльный массаж',
      description: 'Нежный массаж с оливковым мылом, обильная пена и расслабление всех мышц тела',
      duration: '60 мин',
      price: '2 800 ₽',
      icon: '🫧',
    },
    {
      title: 'Скраб с кофе',
      description: 'Тонизирующий кофейный скраб с мёдом, обновление кожи и заряд бодрости',
      duration: '45 мин',
      price: '2 200 ₽',
      icon: '☕',
    },
    {
      title: 'Ароматерапия',
      description: 'Паровая баня с эфирными маслами эвкалипта, лаванды или розмарина',
      duration: '40 мин',
      price: '1 800 ₽',
      icon: '🌿',
    },
    {
      title: 'Парная программа',
      description: 'Хаммам для двоих с индивидуальным мастером, фруктами и травяным чаем',
      duration: '150 мин',
      price: '9 000 ₽',
      icon: '💑',
    },
  ];

  const testimonials = [
    {
      name: 'Анна К.',
      text: 'Невероятные ощущения! После королевского хаммама чувствуешь себя заново рождённой. Атмосфера потрясающая.',
      rating: 5,
    },
    {
      name: 'Дмитрий П.',
      text: 'Хожу сюда каждый месяц. Мастера — профессионалы своего дела. Настоящий восточный ритуал!',
      rating: 5,
    },
    {
      name: 'Елена М.',
      text: 'Подарила мужу сертификат на парную программу. Теперь ходим вместе. Кожа после процедур — как шёлк!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl">🕌</span>
              <span className="text-white font-bold text-lg md:text-xl tracking-wide">
                Восточная Сказка
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-white/80 hover:text-amber-400 transition-colors text-sm">О нас</a>
              <a href="#services" className="text-white/80 hover:text-amber-400 transition-colors text-sm">Услуги</a>
              <a href="#prices" className="text-white/80 hover:text-amber-400 transition-colors text-sm">Цены</a>
              <a href="#reviews" className="text-white/80 hover:text-amber-400 transition-colors text-sm">Отзывы</a>
              <a href="#contact" className="text-white/80 hover:text-amber-400 transition-colors text-sm">Контакты</a>
              <a
                href="#booking"
                className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-5 py-2 rounded-full text-sm transition-all hover:scale-105"
              >
                Записаться
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-white/80 hover:text-amber-400 py-2">О нас</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-white/80 hover:text-amber-400 py-2">Услуги</a>
              <a href="#prices" onClick={() => setIsMenuOpen(false)} className="block text-white/80 hover:text-amber-400 py-2">Цены</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block text-white/80 hover:text-amber-400 py-2">Отзывы</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-white/80 hover:text-amber-400 py-2">Контакты</a>
              <a href="#booking" onClick={() => setIsMenuOpen(false)} className="block bg-amber-500 text-stone-900 font-semibold px-5 py-2 rounded-full text-center mt-3">Записаться</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-900/40 to-stone-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-teal-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 text-5xl md:text-7xl animate-bounce" style={{ animationDuration: '3s' }}>
            🕌
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Хаммам<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              «Восточная Сказка»
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Погрузитесь в атмосферу древних турецких бань. Вековые традиции, мраморные залы, 
            ароматный пар и забота мастеров подарят вам полное обновление тела и души.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-900 font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
            >
              Записаться на сеанс
            </a>
            <a
              href="#services"
              className="border-2 border-white/30 hover:border-amber-400 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
            >
              Наши услуги
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400">12+</div>
              <div className="text-white/50 text-sm mt-1">лет опыта</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400">5000+</div>
              <div className="text-white/50 text-sm mt-1">довольных гостей</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400">4.9</div>
              <div className="text-white/50 text-sm mt-1">рейтинг</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                О нашем хаммаме
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
                Традиции, которым<br />
                <span className="text-amber-600">более 600 лет</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Наш хаммам воссоздаёт атмосферу легендарных турецких бань Стамбула. 
                Каждый визит — это ритуал очищения, унаследованный от османских султанов.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Мраморные залы с подогревом, ароматный пар, мастер-.tellak (банщик) с золотыми руками — 
                всё это перенесёт вас в восточную сказку прямо в центре города.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔥</span>
                  <span className="text-stone-700">Мраморный чилан</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💨</span>
                  <span className="text-stone-700">Ароматный пар</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🧖</span>
                  <span className="text-stone-700">Мастера из Турции</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌹</span>
                  <span className="text-stone-700">Натуральная косметика</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-stone-100 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <div className="text-4xl mb-3">🏛️</div>
                    <div className="font-semibold text-stone-800">Мраморные залы</div>
                    <div className="text-stone-500 text-sm mt-1">Натуральный мрамор</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <div className="text-4xl mb-3">🌡️</div>
                    <div className="font-semibold text-stone-800">45-55°C</div>
                    <div className="text-stone-500 text-sm mt-1">Оптимальный нагрев</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <div className="text-4xl mb-3">💧</div>
                    <div className="font-semibold text-stone-800">100% влажность</div>
                    <div className="text-stone-500 text-sm mt-1">Мягкий пар</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <div className="text-4xl mb-3">✨</div>
                    <div className="font-semibold text-stone-800">Полный ритуал</div>
                    <div className="text-stone-500 text-sm mt-1">От А до Я</div>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Наши услуги
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Ритуалы очищения
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Выберите программу, которая подходит именно вам — от классического хаммама до королевского ритуала
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  activeService === index ? 'border-amber-400 shadow-lg' : 'border-transparent'
                } hover:-translate-y-1`}
                onClick={() => setActiveService(index)}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{service.title}</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <span className="text-stone-500 text-sm">⏱ {service.duration}</span>
                  <span className="text-amber-600 font-bold text-lg">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Польза <span className="text-amber-400">хаммама</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Регулярные посещения турецкой бани благотворно влияют на здоровье и красоту
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🧴', title: 'Очищение кожи', desc: 'Глубокое очищение пор, удаление ороговевших клеток, сияющая кожа' },
              { icon: '💪', title: 'Расслабление мышц', desc: 'Снятие напряжения, уменьшение болей в спине и суставах' },
              { icon: '🧠', title: 'Снятие стресса', desc: 'Глубокое расслабление, улучшение сна, эмоциональный баланс' },
              { icon: '🫁', title: 'Укрепление иммунитета', desc: 'Улучшение кровообращения, укрепление защитных сил организма' },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-amber-500/10 rounded-2xl flex items-center justify-center text-4xl group-hover:bg-amber-500/20 transition-colors group-hover:scale-110 transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Прайс-лист
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Стоимость услуг
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Прозрачные цены без скрытых доплат. Полотенца, халаты и тапочки включены.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="bg-stone-50 rounded-3xl p-8 border-2 border-stone-200 hover:border-amber-300 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Базовый</h3>
                <div className="text-4xl font-bold text-stone-900">2 200 <span className="text-lg text-stone-500">₽</span></div>
                <p className="text-stone-500 text-sm mt-1">60 минут</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['Парная 15 мин', 'Пилинг кесе', 'Пенный массаж', 'Отдых в зоне релакса', 'Чай, вода'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-700">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#booking" className="block text-center bg-stone-200 hover:bg-amber-500 text-stone-800 hover:text-stone-900 font-semibold py-3 rounded-full transition-all">
                Выбрать
              </a>
            </div>

            {/* Popular */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 border-2 border-amber-400 relative shadow-xl shadow-amber-100">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-900 text-xs font-bold px-4 py-1 rounded-full">
                ПОПУЛЯРНЫЙ
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Классический</h3>
                <div className="text-4xl font-bold text-stone-900">3 500 <span className="text-lg text-stone-500">₽</span></div>
                <p className="text-stone-500 text-sm mt-1">90 минут</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['Парная 20 мин', 'Пилинг кесе', 'Пенный массаж', 'Маска для тела', 'Ароматерапия', 'Отдых в зоне релакса', 'Травяной чай со сладостями'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-700">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#booking" className="block text-center bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-amber-200">
                Выбрать
              </a>
            </div>

            {/* Premium */}
            <div className="bg-stone-50 rounded-3xl p-8 border-2 border-stone-200 hover:border-amber-300 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Королевский</h3>
                <div className="text-4xl font-bold text-stone-900">5 500 <span className="text-lg text-stone-500">₽</span></div>
                <p className="text-stone-500 text-sm mt-1">120 минут</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['Всё из «Классического»', 'Масло-массаж всего тела', 'Обёртывание', 'Маска для лица', 'Скраб на выбор', 'Фруктовая тарелка', 'Индивидуальный мастер'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-700">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#booking" className="block text-center bg-stone-200 hover:bg-amber-500 text-stone-800 hover:text-stone-900 font-semibold py-3 rounded-full transition-all">
                Выбрать
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Отзывы
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Что говорят наши гости
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-stone-700 leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold">
                    {review.name[0]}
                  </div>
                  <span className="font-semibold text-stone-800">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Запись онлайн
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
                Забронируйте<br />
                <span className="text-amber-600">ваш сеанс</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Оставьте заявку, и мы перезвоним вам в течение 15 минут для подтверждения записи. 
                Также вы можете позвонить нам напрямую.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-xl">📞</div>
                  <div>
                    <div className="text-stone-500 text-sm">Телефон</div>
                    <div className="text-stone-900 font-semibold">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-xl">🕐</div>
                  <div>
                    <div className="text-stone-500 text-sm">Время работы</div>
                    <div className="text-stone-900 font-semibold">Ежедневно с 9:00 до 23:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-xl">📍</div>
                  <div>
                    <div className="text-stone-500 text-sm">Адрес</div>
                    <div className="text-stone-900 font-semibold">ул. Восточная, 15, Москва</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-3xl p-6 md:p-10">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">Заявка отправлена!</h3>
                  <p className="text-stone-600">Мы перезвоним вам в течение 15 минут</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all bg-white"
                      placeholder="Как к вам обращаться?"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all bg-white"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Услуга</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all bg-white"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="basic">Базовый — 2 200 ₽</option>
                      <option value="classic">Классический — 3 500 ₽</option>
                      <option value="royal">Королевский — 5 500 ₽</option>
                      <option value="soap">Мыльный массаж — 2 800 ₽</option>
                      <option value="coffee">Скраб с кофе — 2 200 ₽</option>
                      <option value="aroma">Ароматерапия — 1 800 ₽</option>
                      <option value="couple">Парная программа — 9 000 ₽</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Желаемая дата</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-900 font-bold py-4 rounded-full text-lg transition-all hover:scale-[1.02] shadow-lg shadow-amber-200"
                  >
                    Записаться
                  </button>
                  <p className="text-stone-400 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Map Section */}
      <section id="contact" className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Как нас <span className="text-amber-400">найти</span>
            </h2>
            <p className="text-white/60 text-lg">Мы находимся в самом сердце Москвы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-800 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-lg font-bold mb-2">Адрес</h3>
              <p className="text-white/60">ул. Восточная, 15<br />Москва, 101000</p>
              <p className="text-white/40 text-sm mt-2">м. Красные Ворота, 5 мин</p>
            </div>
            <div className="bg-stone-800 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-lg font-bold mb-2">Часы работы</h3>
              <p className="text-white/60">Пн-Пт: 9:00 — 23:00<br />Сб-Вс: 8:00 — 00:00</p>
              <p className="text-white/40 text-sm mt-2">Без выходных</p>
            </div>
            <div className="bg-stone-800 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-bold mb-2">Контакты</h3>
              <p className="text-white/60">+7 (495) 123-45-67<br />info@hammam-skip.ru</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-stone-900 transition-colors">
                  <span className="text-sm">TG</span>
                </a>
                <a href="#" className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-stone-900 transition-colors">
                  <span className="text-sm">VK</span>
                </a>
                <a href="#" className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-stone-900 transition-colors">
                  <span className="text-sm">WA</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-12 bg-stone-800 rounded-2xl overflow-hidden h-64 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }} />
            <div className="text-center z-10">
              <div className="text-5xl mb-3">🗺️</div>
              <p className="text-white/60">ул. Восточная, 15, Москва</p>
              <a href="#" className="inline-block mt-3 text-amber-400 hover:text-amber-300 font-medium">
                Открыть в Яндекс.Картах →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🕌</span>
                <span className="text-xl font-bold">Восточная Сказка</span>
              </div>
              <p className="text-white/50 leading-relaxed max-w-md">
                Хаммам «Восточная Сказка» — место, где восточные традиции встречаются с современным комфортом. 
                Подарите себе незабываемый опыт очищения и расслабления.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-amber-400">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-white/50 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#services" className="text-white/50 hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#prices" className="text-white/50 hover:text-white transition-colors">Цены</a></li>
                <li><a href="#reviews" className="text-white/50 hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#booking" className="text-white/50 hover:text-white transition-colors">Записаться</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-amber-400">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-white/50">+7 (495) 123-45-67</li>
                <li className="text-white/50">info@hammam-skip.ru</li>
                <li className="text-white/50">ул. Восточная, 15</li>
                <li className="text-white/50">Москва, 101000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">© 2024 Хаммам «Восточная Сказка». Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
