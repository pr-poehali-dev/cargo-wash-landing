/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7c1e7851-0307-408d-b42d-60a0d54059d1/files/ca42b083-1d1c-4fb6-a4d4-7e3c5768f55a.jpg";
const PHONE = "+79231208802";
const PHONE_DISPLAY = "+7 923 120-88-02";
const TG_LINK = "https://t.me/";
const YANDEX_NAV = "https://yandex.ru/maps/-/CHe8JQ8d";

const services = [
  { icon: "Truck", label: "Мойка грузовых автомобилей" },
  { icon: "Container", label: "Мойка прицепов и полуприцепов" },
  { icon: "Layers", label: "Комплексная мойка автопоездов" },
  { icon: "PackageOpen", label: "Мойка внутри полуприцепа" },
  { icon: "ShieldCheck", label: "Дезинфекция транспорта" },
  { icon: "Zap", label: "Экспресс-мойка" },
];

const prices = [
  { label: "Тандем", price: "2 400 ₽" },
  { label: "Тягач + п/п до 90 м³", price: "2 200 ₽" },
  { label: "Тягач + п/п до 110 м³", price: "2 400 ₽" },
  { label: "Грузовик 10 т", price: "1 500 ₽" },
  { label: "Грузовик 5 т", price: "1 000 ₽" },
  { label: "Газель", price: "750 ₽" },
  { label: "Самосвал", price: "от 1 350 ₽" },
  { label: "Мойка внутри полуприцепа", price: "1 350 ₽" },
  { label: "Дезинфекция внутри полуприцепа", price: "1 200 ₽" },
];

const benefits = [
  { icon: "Clock", text: "Работаем 24/7" },
  { icon: "MapPin", text: "Удобный заезд с трассы" },
  { icon: "Zap", text: "Без очередей" },
  { icon: "ShieldCheck", text: "Дезинфекция с лицензией" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: "#0A0A0A", color: "#E0E0E0" }}>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navScrolled ? "bg-black/90 backdrop-blur-md border-b border-yellow-400/20" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "#F5C518" }}>
              <Icon name="Truck" size={16} style={{ color: "#0A0A0A" }} />
            </div>
            <span className="font-display font-bold text-lg tracking-widest uppercase" style={{ color: "#F5C518" }}>
              Аэропорт
            </span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded font-display font-semibold text-sm tracking-wider uppercase transition-all hover:scale-105"
            style={{ backgroundColor: "#F5C518", color: "#0A0A0A" }}
          >
            <Icon name="Phone" size={14} />
            {PHONE_DISPLAY}
          </a>
          <a href={`tel:${PHONE}`} className="sm:hidden" style={{ color: "#F5C518" }}>
            <Icon name="Phone" size={20} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.85) 100%)" }} />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10" style={{ background: "linear-gradient(to bottom-left, #F5C518, transparent)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#F5C518" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <div className="h-px w-12" style={{ backgroundColor: "#F5C518" }} />
              <span className="font-display text-sm tracking-[0.3em] uppercase" style={{ color: "#F5C518" }}>
                Грузовая автомойка
              </span>
            </div>

            <h1 className="font-display font-bold leading-tight mb-4 animate-fade-in-up" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", animationDelay: "0.2s", opacity: 0 }}>
              <span className="text-glow" style={{ color: "#F5C518" }}>«АЭРОПОРТ»</span>
              <br />
              <span style={{ color: "#E0E0E0" }}>на трассе перед</span>
              <br />
              <span style={{ color: "#E0E0E0" }}>Новосибирском</span>
            </h1>

            <p className="text-lg mb-8 max-w-xl animate-fade-in-up" style={{ color: "#A0A0A0", animationDelay: "0.35s", opacity: 0 }}>
              Круглосуточная мойка и дезинфекция грузового транспорта. Удобный заезд с федеральной трассы Москва–Новосибирск без потери времени.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0.45s", opacity: 0 }}>
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-2 px-4 py-2 rounded-sm border text-sm font-body" style={{ borderColor: "#F5C518", color: "#F5C518", backgroundColor: "rgba(245,197,24,0.08)" }}>
                  <Icon name={b.icon as any} size={14} />
                  {b.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.55s", opacity: 0 }}>
              <a
                href={YANDEX_NAV}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-sm font-display font-bold text-base tracking-wider uppercase transition-all hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: "#F5C518", color: "#0A0A0A" }}
              >
                <Icon name="Navigation" size={18} />
                Построить маршрут
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 px-6 py-4 rounded-sm font-display font-bold text-base tracking-wider uppercase border-2 transition-all hover:scale-105"
                style={{ borderColor: "#F5C518", color: "#F5C518", backgroundColor: "transparent" }}
              >
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-sm font-display font-bold text-base tracking-wider uppercase border-2 transition-all hover:scale-105"
                style={{ borderColor: "#2AABEE", color: "#2AABEE", backgroundColor: "transparent" }}
              >
                <Icon name="Send" size={18} />
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" style={{ color: "#F5C518", opacity: 0.6 }}>
          <Icon name="ChevronDown" size={24} />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 relative stripe-bg" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8" style={{ backgroundColor: "#F5C518" }} />
                  <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: "#F5C518" }}>О нас</span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 uppercase" style={{ color: "#E0E0E0" }}>
                  Автомойка<br />
                  <span style={{ color: "#F5C518" }}>«Аэропорт»</span>
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: "#A0A0A0" }}>
                  Расположена на федеральной трассе Москва–Новосибирск прямо перед въездом в город. Удобный заезд без лишних манёвров — сэкономь время в пути.
                </p>
                <p className="leading-relaxed" style={{ color: "#A0A0A0" }}>
                  Работаем круглосуточно, без выходных. Обслуживаем любой грузовой транспорт: от Газели до многоосных автопоездов.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Truck", label: "Фуры и тягачи" },
                  { icon: "Container", label: "Прицепы / п/п" },
                  { icon: "Wrench", label: "Спецтехника" },
                  { icon: "PackageOpen", label: "Грузовики" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-sm border flex flex-col gap-3 transition-all hover:border-yellow-400/60"
                    style={{ backgroundColor: "#1A1A1A", borderColor: "#2A2A2A" }}
                  >
                    <Icon name={item.icon as any} size={28} style={{ color: "#F5C518" }} />
                    <span className="font-body text-sm font-medium" style={{ color: "#E0E0E0" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-8" style={{ backgroundColor: "#F5C518" }} />
              <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: "#F5C518" }}>Услуги</span>
              <div className="h-px flex-1" style={{ backgroundColor: "#2A2A2A" }} />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 uppercase" style={{ color: "#E0E0E0" }}>
              Что мы <span style={{ color: "#F5C518" }}>делаем</span>
            </h2>
          </AnimSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <AnimSection key={s.label}>
                <div
                  className="group p-6 rounded-sm border flex items-center gap-4 transition-all duration-300 hover:border-yellow-400/50 hover:-translate-y-1 cursor-default"
                  style={{ backgroundColor: "#111111", borderColor: "#1E1E1E" }}
                >
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110" style={{ backgroundColor: "rgba(245,197,24,0.12)" }}>
                    <Icon name={s.icon as any} size={22} style={{ color: "#F5C518" }} />
                  </div>
                  <span className="font-body font-medium" style={{ color: "#E0E0E0" }}>{s.label}</span>
                  <Icon name="ArrowRight" size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" style={{ color: "#F5C518" }} />
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="py-20" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-8" style={{ backgroundColor: "#F5C518" }} />
              <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: "#F5C518" }}>Прайс</span>
              <div className="h-px flex-1" style={{ backgroundColor: "#2A2A2A" }} />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 uppercase" style={{ color: "#E0E0E0" }}>
              Цены на <span style={{ color: "#F5C518" }}>услуги</span>
            </h2>
            <p className="mb-10" style={{ color: "#606060" }}>Прозрачные фиксированные цены. Без скрытых доплат.</p>
          </AnimSection>

          <AnimSection>
            <div className="rounded-sm border overflow-hidden" style={{ borderColor: "#2A2A2A" }}>
              <div className="grid grid-cols-2 px-6 py-3 font-display text-xs tracking-widest uppercase" style={{ backgroundColor: "#F5C518", color: "#0A0A0A" }}>
                <span>Услуга</span>
                <span className="text-right">Стоимость</span>
              </div>
              {prices.map((p, i) => (
                <div
                  key={p.label}
                  className="grid grid-cols-2 px-6 py-4 items-center border-b transition-all hover:bg-yellow-400/5"
                  style={{
                    borderColor: "#1E1E1E",
                    backgroundColor: i % 2 === 0 ? "#0F0F0F" : "#111111",
                  }}
                >
                  <span className="font-body text-sm" style={{ color: "#C0C0C0" }}>{p.label}</span>
                  <span className="font-display font-bold text-right" style={{ color: "#F5C518" }}>{p.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm" style={{ color: "#505050" }}>
              * Цены для регулярной мойки. Индивидуальные условия для автопарков — уточняйте по телефону.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* DISINFECTION */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg, #F5C518 0, #F5C518 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #F5C518 0, #F5C518 1px, transparent 1px, transparent 40px)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="rounded-sm border-l-4 p-8 sm:p-12" style={{ backgroundColor: "#111111", borderColor: "#F5C518" }}>
              <div className="flex items-start gap-6 flex-col sm:flex-row">
                <div className="w-16 h-16 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,197,24,0.15)" }}>
                  <Icon name="ShieldCheck" size={32} style={{ color: "#F5C518" }} />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 uppercase" style={{ color: "#E0E0E0" }}>
                    Профессиональная <span style={{ color: "#F5C518" }}>дезинфекция</span>
                  </h2>
                  <p className="mb-6 leading-relaxed" style={{ color: "#A0A0A0" }}>
                    Обработка транспорта с соблюдением санитарных норм. Имеется необходимая лицензия.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Пищевые перевозки", "Сельхозпродукция", "Логистические компании"].map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-sm text-sm font-body font-medium" style={{ backgroundColor: "rgba(245,197,24,0.12)", color: "#F5C518", border: "1px solid rgba(245,197,24,0.3)" }}>
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* TELEGRAM CTA */}
      <section className="py-20" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="rounded-sm p-8 sm:p-12 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0E2233 0%, #071520 100%)", border: "1px solid rgba(42,171,238,0.2)" }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #2AABEE, transparent)" }} />
              <Icon name="Send" size={48} className="mx-auto mb-6" style={{ color: "#2AABEE" }} />
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 uppercase" style={{ color: "#E0E0E0" }}>
                Узнайте загруженность<br />
                <span style={{ color: "#2AABEE" }}>мойки онлайн</span>
              </h2>
              <p className="mb-8 max-w-lg mx-auto" style={{ color: "#708090" }}>
                Подпишитесь на Telegram-канал: свободные места, очереди, актуальные новости
              </p>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-sm font-display font-bold text-base tracking-wider uppercase transition-all hover:scale-105"
                style={{ backgroundColor: "#2AABEE", color: "#ffffff" }}
              >
                <Icon name="Send" size={18} />
                Перейти в Telegram
              </a>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-20" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-8" style={{ backgroundColor: "#F5C518" }} />
              <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: "#F5C518" }}>Программа лояльности</span>
              <div className="h-px flex-1" style={{ backgroundColor: "#2A2A2A" }} />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 uppercase" style={{ color: "#E0E0E0" }}>
              Бонусная <span style={{ color: "#F5C518" }}>программа</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: "Star", title: "Скидки постоянным", desc: "Накопительные скидки для регулярных клиентов" },
                { icon: "Users", title: "Реферальная система", desc: "Приводи партнёров — получай бонусы за каждого" },
                { icon: "Building2", title: "Условия для автопарков", desc: "Специальные тарифы и приоритетное обслуживание" },
              ].map((b) => (
                <div key={b.title} className="p-6 rounded-sm border transition-all hover:border-yellow-400/40" style={{ backgroundColor: "#0F0F0F", borderColor: "#1E1E1E" }}>
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(245,197,24,0.1)" }}>
                    <Icon name={b.icon as any} size={22} style={{ color: "#F5C518" }} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 uppercase" style={{ color: "#E0E0E0" }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* CONTACTS */}
      <section className="py-20 relative" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-8" style={{ backgroundColor: "#F5C518" }} />
              <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: "#F5C518" }}>Контакты</span>
              <div className="h-px flex-1" style={{ backgroundColor: "#2A2A2A" }} />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 uppercase" style={{ color: "#E0E0E0" }}>
              Как нас <span style={{ color: "#F5C518" }}>найти</span>
            </h2>
          </AnimSection>

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimSection>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-sm border" style={{ backgroundColor: "#111111", borderColor: "#1E1E1E" }}>
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,197,24,0.12)" }}>
                    <Icon name="MapPin" size={18} style={{ color: "#F5C518" }} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm tracking-wider uppercase mb-1" style={{ color: "#F5C518" }}>Адрес</p>
                    <p style={{ color: "#E0E0E0" }}>Новосибирская область, г. Обь</p>
                    <p style={{ color: "#E0E0E0" }}>Омский тракт, 6А</p>
                    <p className="text-sm mt-1" style={{ color: "#606060" }}>Федеральная трасса Москва–Новосибирск, перед въездом в город</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-sm border" style={{ backgroundColor: "#111111", borderColor: "#1E1E1E" }}>
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,197,24,0.12)" }}>
                    <Icon name="Phone" size={18} style={{ color: "#F5C518" }} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm tracking-wider uppercase mb-1" style={{ color: "#F5C518" }}>Телефон</p>
                    <a href={`tel:${PHONE}`} className="text-xl font-display font-bold hover:underline" style={{ color: "#E0E0E0" }}>{PHONE_DISPLAY}</a>
                    <p className="text-sm mt-1" style={{ color: "#606060" }}>Круглосуточно</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-sm border" style={{ backgroundColor: "#111111", borderColor: "#1E1E1E" }}>
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,197,24,0.12)" }}>
                    <Icon name="Mail" size={18} style={{ color: "#F5C518" }} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm tracking-wider uppercase mb-1" style={{ color: "#F5C518" }}>Email</p>
                    <a href="mailto:pavino2993860@gmail.com" className="hover:underline" style={{ color: "#E0E0E0" }}>pavino2993860@gmail.com</a>
                    <p className="text-sm mt-1" style={{ color: "#606060" }}>ИП Кутаков В.В.</p>
                  </div>
                </div>

                <a
                  href={YANDEX_NAV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-sm font-display font-bold text-base tracking-wider uppercase transition-all hover:scale-105"
                  style={{ backgroundColor: "#F5C518", color: "#0A0A0A" }}
                >
                  <Icon name="Navigation" size={18} />
                  Построить маршрут в Яндекс.Навигаторе
                </a>
              </div>
            </AnimSection>

            <AnimSection>
              <div className="rounded-sm overflow-hidden border" style={{ borderColor: "#2A2A2A", height: "400px" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=82.682000%2C54.990000&z=14&pt=82.682000,54.990000,pm2rdm&text=%D0%9E%D0%BC%D1%81%D0%BA%D0%B8%D0%B9%20%D1%82%D1%80%D0%B0%D0%BA%D1%82%206%D0%90%2C%20%D0%9E%D0%B1%D1%8C"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  style={{ filter: "grayscale(0.3) brightness(0.85)" }}
                />
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t" style={{ backgroundColor: "#050505", borderColor: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: "#F5C518" }}>
                <Icon name="Truck" size={14} style={{ color: "#0A0A0A" }} />
              </div>
              <span className="font-display font-bold tracking-widest uppercase text-sm" style={{ color: "#F5C518" }}>Аэропорт</span>
            </div>
            <p className="text-xs text-center" style={{ color: "#404040" }}>
              ИП Кутаков В.В. · Омский тракт 6А, г. Обь, Новосибирская область
            </p>
            <a href={`tel:${PHONE}`} className="font-display font-semibold text-sm tracking-wider" style={{ color: "#F5C518" }}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}