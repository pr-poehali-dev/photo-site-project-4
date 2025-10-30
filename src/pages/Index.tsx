import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Landscape',
      category: 'Nature',
      image: 'https://cdn.poehali.dev/files/48447c41-6336-4873-bd80-991383ec19ca.png',
      description: 'Природный пейзаж с драматическим небом'
    },
    {
      id: 2,
      title: 'Genre',
      category: 'Commercial',
      image: 'https://cdn.poehali.dev/files/48447c41-6336-4873-bd80-991383ec19ca.png',
      description: 'Атмосферная фотография для бренда'
    },
    {
      id: 3,
      title: 'Scientific',
      category: 'Documentary',
      image: 'https://cdn.poehali.dev/files/48447c41-6336-4873-bd80-991383ec19ca.png',
      description: 'Научная документальная съемка'
    }
  ];

  const services = [
    {
      icon: 'Building2',
      title: 'Корпоративная съемка',
      description: 'Профессиональные фото для бизнеса, офисов, команд и корпоративных мероприятий'
    },
    {
      icon: 'Package',
      title: 'Рекламная фотография',
      description: 'Создание визуального контента для рекламных кампаний и маркетинговых материалов'
    },
    {
      icon: 'ShoppingBag',
      title: 'Предметная съемка',
      description: 'Съемка товаров для каталогов, интернет-магазинов и презентаций'
    },
    {
      icon: 'Users',
      title: 'Событийная фотография',
      description: 'Фиксация важных бизнес-событий, конференций и презентаций'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Тренды коммерческой фотографии 2025',
      date: '15 октября 2025',
      excerpt: 'Обзор актуальных направлений в коммерческой съемке для бизнеса'
    },
    {
      id: 2,
      title: 'Как подготовиться к корпоративной съемке',
      date: '8 октября 2025',
      excerpt: 'Практические советы для успешной фотосессии в офисе'
    },
    {
      id: 3,
      title: 'Освещение в предметной фотографии',
      date: '1 октября 2025',
      excerpt: 'Технические аспекты создания качественных фото товаров'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-primary">PRO</span>PHOTO
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['home', 'portfolio', 'services', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'portfolio' ? 'Портфолио' :
                   section === 'services' ? 'Услуги' :
                   section === 'blog' ? 'Блог' : 'Контакты'}
                </button>
              ))}
            </div>

            <Button className="hidden md:flex">Заказать съемку</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Коммерческая<br />
              <span className="text-primary">Фотография</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная съемка для бизнеса и рекламы. 
              Создаем визуальный контент, который работает на ваш бренд.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('portfolio')}>
                Посмотреть работы
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Связаться
              </Button>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="aspect-[21/9] overflow-hidden rounded-lg border-4 border-primary/20 animate-scale-in">
              <img
                src="https://cdn.poehali.dev/files/48447c41-6336-4873-bd80-991383ec19ca.png"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Примеры наших работ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover-scale cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-sm text-primary">{item.category}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-muted-foreground text-lg">Коммерческая съемка для вашего бизнеса</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Индивидуальный подход</h3>
                    <p className="text-muted-foreground">
                      Каждый проект уникален. Мы внимательно изучаем специфику вашего бизнеса 
                      и разрабатываем концепцию съемки, которая точно отражает ценности бренда 
                      и достигает поставленных маркетинговых целей.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
            <p className="text-muted-foreground text-lg">Статьи и новости</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="hover-scale cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-3">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-3 story-link">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto hover:text-primary">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-muted-foreground text-lg">Свяжитесь с нами для обсуждения проекта</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input type="tel" placeholder="+7 (900) 123-45-67" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground text-sm">
                        г. Москва, ул. Примерная, д. 10<br />
                        Офис 305
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground text-sm">
                        +7 (900) 123-45-67<br />
                        Пн-Пт: 10:00 - 19:00
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        info@prophoto.com<br />
                        order@prophoto.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-card">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold">
              <span className="text-primary">PRO</span>PHOTO
            </div>
            
            <div className="flex gap-6">
              {['Instagram', 'Facebook', 'Behance'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              © 2025 ProPhoto. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
