/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7c1e7851-0307-408d-b42d-60a0d54059d1/files/ca42b083-1d1c-4fb6-a4d4-7e3c5768f55a.jpg";
const PHONE = "+79231208802";
const PHONE_DISPLAY = "+7 923 120-88-02";
const TG_LINK = "https://t.me/Aeroport_car_wash";
const MAX_LINK = "https://max.ru/Aeroport_car_wash";
const YANDEX_NAV = "https://yandex.ru/maps?whatshere%5Bpoint%5D=82.62960209274826%2C55.00020125443566&whatshere%5Bzoom%5D=19.116194&ll=82.62960209274826%2C55.00012728091425&z=19.116194&si=2p3bfgjt29rdmy6ym2zju5vhy8";

// Brand colors
const C = {
  blue: "#0ea5e9",
  blueDim: "rgba(14,165,233,0.10)",
  blueBorder: "rgba(14,165,233,0.25)",
  blueGlow: "rgba(14,165,233,0.35)",
  bg: "#080c12",
  bg2: "#0d1520",
  bg3: "#0a1018",
  card: "#0f1a28",
  border: "#132030",
  border2: "#1a2d44",
  text: "#e0e8f0",
  muted: "#607a95",
  dim: "#3a5270",
};

const services = [
  { icon: "Truck", label: "Мойка грузовых автомобилей" },
  { icon: "Container", label: "Мойка прицепов и полуприцепов" },
  { icon: "Layers", label: "Комплексная мойка автопоездов" },
  { icon: "PackageOpen", label: "Мойка внутри полуприцепа" },
  { icon: "ShieldCheck", label: "Дезинфекция транспорта" },
  { icon: "Zap", label: "Экспресс-мойка" },
  { icon: "Tractor", label: "Мойка тракторов и сельхозтехники" },
  { icon: "HardHat", label: "Мойка строительной техники" },
  { icon: "Fuel", label: "Мойка бензовозов и цистерн" },
  { icon: "Forklift", label: "Мойка погрузчиков" },
  { icon: "Drill", label: "Мойка дорожной техники" },
  { icon: "Bus", label: "Мойка спецавтомобилей и автобусов" },
];

const prices = [
  { label: "Тандем", price: "2 400 ₽", group: false },
  { label: "Тягач + п/п до 90 м³", price: "2 200 ₽", group: false },
  { label: "Тягач + п/п до 110 м³", price: "2 400 ₽", group: false },
  { label: "Грузовик 10 т", price: "1 500 ₽", group: false },
  { label: "Грузовик 5 т", price: "1 000 ₽", group: false },
  { label: "Газель", price: "750 ₽", group: false },
  { label: "Самосвал", price: "от 1 350 ₽", group: false },
  { label: "Мойка внутри полуприцепа", price: "1 350 ₽", group: false },
  { label: "Дезинфекция внутри полуприцепа", price: "1 200 ₽", group: false },
  { label: "Трактор / комбайн", price: "от 1 500 ₽", group: true },
  { label: "Экскаватор / бульдозер", price: "от 2 000 ₽", group: true },
  { label: "Бензовоз / цистерна", price: "от 2 200 ₽", group: true },
  { label: "Автобус", price: "от 1 200 ₽", group: true },
  { label: "Спецтехника (по запросу)", price: "договорная", group: true },
];

const benefits = [
  { icon: "Clock", text: "Работаем 24/7" },
  { icon: "MapPin", text: "Удобный заезд с трассы" },
  { icon: "Zap", text: "Без очередей" },
  { icon: "ShieldCheck", text: "Дезинфекция с лицензией" },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.12 }
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

function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none", transform: visible ? "translateY(0)" : "translateY(20px)" }}
    >
      {/* Expanded actions */}
      <div className={`flex flex-col items-end gap-2 transition-all duration-300 ${expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <a
          href={`tel:${PHONE}`}
          className="flex items-center gap-3 px-4 py-3 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all hover:scale-105 whitespace-nowrap"
          style={{ backgroundColor: C.blue, color: "#fff", boxShadow: `0 4px 24px ${C.blueGlow}` }}
        >
          <Icon name="Phone" size={16} />
          {PHONE_DISPLAY}
        </a>
        <a
          href={YANDEX_NAV}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all hover:scale-105 whitespace-nowrap"
          style={{ backgroundColor: C.card, color: C.blue, border: `1px solid ${C.blueBorder}`, boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
        >
          <Icon name="Navigation" size={16} />
          Маршрут
        </a>
        <a
          href={TG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all hover:scale-105 whitespace-nowrap"
          style={{ backgroundColor: C.card, color: "#7fb8d8", border: `1px solid ${C.border2}`, boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
        >
          <Icon name="Send" size={16} />
          Telegram
        </a>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          backgroundColor: expanded ? C.card : C.blue,
          color: expanded ? C.blue : "#fff",
          border: expanded ? `2px solid ${C.blueBorder}` : "none",
          boxShadow: expanded ? "0 4px 20px rgba(0,0,0,0.5)" : `0 4px 28px ${C.blueGlow}`,
          transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        <Icon name={expanded ? "X" : "Phone"} size={22} />
      </button>
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
    <div className="min-h-screen font-body" style={{ backgroundColor: C.bg, color: C.text }}>

      <FloatingButtons />

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: navScrolled ? "rgba(8,12,18,0.95)" : "transparent",
          backdropFilter: navScrolled ? "blur(12px)" : "none",
          borderBottom: navScrolled ? `1px solid ${C.border}` : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: C.blue }}>
              <Icon name="Truck" size={16} style={{ color: "#fff" }} />
            </div>
            <span className="font-display font-bold text-lg tracking-widest uppercase" style={{ color: C.blue }}>
              Аэропорт
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 px-3 py-2 rounded font-display font-semibold text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{ backgroundColor: C.blue, color: "#fff" }}
            >
              <Icon name="Phone" size={14} />
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded font-display font-semibold text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{ backgroundColor: C.card, color: "#7fb8d8", border: `1px solid ${C.border2}` }}
            >
              <Icon name="Send" size={14} />
              <span className="hidden md:inline">TG</span>
            </a>
            <a
              href={MAX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded font-display font-semibold text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{ backgroundColor: C.card, color: "#a78bfa", border: `1px solid rgba(167,139,250,0.3)` }}
            >
              <Icon name="MessageCircle" size={14} />
              <span className="hidden md:inline">Max</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* deep blue overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,12,18,0.96) 0%, rgba(8,18,35,0.80) 50%, rgba(8,12,18,0.92) 100%)" }} />
        {/* blue radial glow top-right */}
        <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(14,165,233,0.18) 0%, transparent 60%)" }} />
        {/* left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: `linear-gradient(to bottom, transparent, ${C.blue}, transparent)` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <div className="h-px w-12" style={{ backgroundColor: C.blue }} />
              <span className="font-display text-sm tracking-[0.3em] uppercase" style={{ color: C.blue }}>
                Грузовая автомойка
              </span>
            </div>

            <h1 className="font-display font-bold leading-tight mb-4 animate-fade-in-up" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", animationDelay: "0.2s", opacity: 0 }}>
              <span className="text-glow" style={{ color: C.blue }}>«АЭРОПОРТ»</span>
              <br />
              <span style={{ color: C.text }}>на трассе перед</span>
              <br />
              <span style={{ color: C.text }}>Новосибирском</span>
            </h1>

            <p className="text-lg mb-8 max-w-xl animate-fade-in-up" style={{ color: C.muted, animationDelay: "0.35s", opacity: 0 }}>
              Круглосуточная мойка и дезинфекция грузового транспорта. Удобный заезд с федеральной трассы Москва–Новосибирск без потери времени.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0.45s", opacity: 0 }}>
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-2 px-4 py-2 rounded-sm border text-sm font-body" style={{ borderColor: C.blueBorder, color: C.blue, backgroundColor: C.blueDim }}>
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
                style={{ backgroundColor: C.blue, color: "#fff", boxShadow: `0 4px 32px ${C.blueGlow}` }}
              >
                <Icon name="Navigation" size={18} />
                Построить маршрут
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 px-6 py-4 rounded-sm font-display font-bold text-base tracking-wider uppercase border-2 transition-all hover:scale-105"
                style={{ borderColor: C.blue, color: C.blue, backgroundColor: "transparent" }}
              >
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-sm font-display font-bold text-base tracking-wider uppercase border-2 transition-all hover:scale-105"
                style={{ borderColor: C.border2, color: C.muted, backgroundColor: "transparent" }}
              >
                <Icon name="Send" size={18} />
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" style={{ color: C.blue, opacity: 0.6 }}>
          <Icon name="ChevronDown" size={24} />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 relative stripe-bg" style={{ backgroundColor: C.bg2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8" style={{ backgroundColor: C.blue }} />
                  <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: C.blue }}>О нас</span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 uppercase" style={{ color: C.text }}>
                  Автомойка<br />
                  <span style={{ color: C.blue }}>«Аэропорт»</span>
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: C.muted }}>
                  Расположена на федеральной трассе Москва–Новосибирск прямо перед въездом в город. Удобный заезд без лишних манёвров — сэкономь время в пути.
                </p>
                <p className="leading-relaxed" style={{ color: C.muted }}>
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
                    className="p-5 rounded-sm border flex flex-col gap-3 transition-all hover:border-sky-400/50"
                    style={{ backgroundColor: C.card, borderColor: C.border }}
                  >
                    <Icon name={item.icon as any} size={28} style={{ color: C.blue }} />
                    <span className="font-body text-sm font-medium" style={{ color: C.text }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20" style={{ backgroundColor: C.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-8" style={{ backgroundColor: C.blue }} />
              <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: C.blue }}>Услуги</span>
              <div className="h-px flex-1" style={{ backgroundColor: C.border }} />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 uppercase" style={{ color: C.text }}>
              Что мы <span style={{ color: C.blue }}>делаем</span>
            </h2>
          </AnimSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <AnimSection key={s.label}>
                <div
                  className="group p-6 rounded-sm border flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 cursor-default"
                  style={{ backgroundColor: C.card, borderColor: C.border }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = C.blueBorder)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                >
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110" style={{ backgroundColor: C.blueDim }}>
                    <Icon name={s.icon as any} size={22} style={{ color: C.blue }} />
                  </div>
                  <span className="font-body font-medium" style={{ color: C.text }}>{s.label}</span>
                  <Icon name="ArrowRight" size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" style={{ color: C.blue }} />
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="py-20" style={{ backgroundColor: C.bg2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-8" style={{ backgroundColor: C.blue }} />
              <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: C.blue }}>Прайс</span>
              <div className="h-px flex-1" style={{ backgroundColor: C.border }} />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 uppercase" style={{ color: C.text }}>
              Цены на <span style={{ color: C.blue }}>услуги</span>
            </h2>
            <p className="mb-10" style={{ color: C.dim }}>Прозрачные фиксированные цены. Без скрытых доплат.</p>
          </AnimSection>

          <AnimSection>
            <div className="rounded-sm border overflow-hidden" style={{ borderColor: C.border }}>
              <div className="grid grid-cols-2 px-6 py-3 font-display text-xs tracking-widest uppercase" style={{ backgroundColor: C.blue, color: "#fff" }}>
                <span>Услуга</span>
                <span className="text-right">Стоимость</span>
              </div>
              {prices.map((p, i) => {
                const prevGroup = i > 0 ? prices[i - 1].group : p.group;
                const showDivider = p.group && !prevGroup;
                return (
                  <>
                    {showDivider && (
                      <div key="divider-spec" className="px-6 py-2 font-display text-xs tracking-widest uppercase" style={{ backgroundColor: "rgba(14,165,233,0.08)", color: C.blue, borderBottom: `1px solid ${C.border}` }}>
                        Спецтехника
                      </div>
                    )}
                    <div
                      key={p.label}
                      className="grid grid-cols-2 px-6 py-4 items-center border-b transition-all"
                      style={{
                        borderColor: C.border,
                        backgroundColor: i % 2 === 0 ? C.bg3 : C.card,
                      }}
                    >
                      <span className="font-body text-sm" style={{ color: C.muted }}>{p.label}</span>
                      <span className="font-display font-bold text-right" style={{ color: C.blue }}>{p.price}</span>
                    </div>
                  </>
                );
              })}
            </div>
            <p className="mt-4 text-sm" style={{ color: C.dim }}>
              * Цены для регулярной мойки. Индивидуальные условия для автопарков — уточняйте по телефону.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* DISINFECTION */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: C.bg }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.06) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="rounded-sm border-l-4 p-8 sm:p-12" style={{ backgroundColor: C.card, borderColor: C.blue }}>
              <div className="flex items-start gap-6 flex-col sm:flex-row">
                <div className="w-16 h-16 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.blueDim }}>
                  <Icon name="ShieldCheck" size={32} style={{ color: C.blue }} />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 uppercase" style={{ color: C.text }}>
                    Профессиональная <span style={{ color: C.blue }}>дезинфекция</span>
                  </h2>
                  <p className="mb-6 leading-relaxed" style={{ color: C.muted }}>
                    Обработка транспорта с соблюдением санитарных норм. Имеется необходимая лицензия.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Пищевые перевозки", "Сельхозпродукция", "Логистические компании"].map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-sm text-sm font-body font-medium" style={{ backgroundColor: C.blueDim, color: C.blue, border: `1px solid ${C.blueBorder}` }}>
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
      <section className="py-20" style={{ backgroundColor: C.bg2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="rounded-sm p-8 sm:p-12 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.card} 0%, #081525 100%)`, border: `1px solid ${C.border2}` }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.blue}, transparent)` }} />
              <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.blue}44, transparent)` }} />
              <Icon name="Send" size={48} className="mx-auto mb-6" style={{ color: C.blue }} />
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 uppercase" style={{ color: C.text }}>
                Узнайте загруженность<br />
                <span style={{ color: C.blue }}>мойки онлайн</span>
              </h2>
              <p className="mb-8 max-w-lg mx-auto" style={{ color: C.muted }}>
                Подпишитесь на Telegram-канал: свободные места, очереди, актуальные новости
              </p>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-sm font-display font-bold text-base tracking-wider uppercase transition-all hover:scale-105"
                style={{ backgroundColor: C.blue, color: "#fff", boxShadow: `0 4px 32px ${C.blueGlow}` }}
              >
                <Icon name="Send" size={18} />
                Перейти в Telegram
              </a>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-20" style={{ backgroundColor: C.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-8" style={{ backgroundColor: C.blue }} />
              <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: C.blue }}>Программа лояльности</span>
              <div className="h-px flex-1" style={{ backgroundColor: C.border }} />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 uppercase" style={{ color: C.text }}>
              Бонусная <span style={{ color: C.blue }}>программа</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: "Star", title: "Скидки постоянным", desc: "Накопительные скидки для регулярных клиентов" },
                { icon: "Users", title: "Реферальная система", desc: "Приводи партнёров — получай бонусы за каждого" },
                { icon: "Building2", title: "Условия для автопарков", desc: "Специальные тарифы и приоритетное обслуживание" },
              ].map((b) => (
                <div
                  key={b.title}
                  className="p-6 rounded-sm border transition-all"
                  style={{ backgroundColor: C.card, borderColor: C.border }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = C.blueBorder)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                >
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-4" style={{ backgroundColor: C.blueDim }}>
                    <Icon name={b.icon as any} size={22} style={{ color: C.blue }} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 uppercase" style={{ color: C.text }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* CONTACTS */}
      <section className="py-20 relative" style={{ backgroundColor: C.bg2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-8" style={{ backgroundColor: C.blue }} />
              <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: C.blue }}>Контакты</span>
              <div className="h-px flex-1" style={{ backgroundColor: C.border }} />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 uppercase" style={{ color: C.text }}>
              Как нас <span style={{ color: C.blue }}>найти</span>
            </h2>
          </AnimSection>

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimSection>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-sm border" style={{ backgroundColor: C.card, borderColor: C.border }}>
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.blueDim }}>
                    <Icon name="MapPin" size={18} style={{ color: C.blue }} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm tracking-wider uppercase mb-1" style={{ color: C.blue }}>Адрес</p>
                    <p style={{ color: C.text }}>Новосибирская область, г. Обь</p>
                    <p style={{ color: C.text }}>Омский тракт, 6А</p>
                    <p className="text-sm mt-1" style={{ color: C.dim }}>Федеральная трасса Москва–Новосибирск, перед въездом в город</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-sm border" style={{ backgroundColor: C.card, borderColor: C.border }}>
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.blueDim }}>
                    <Icon name="Phone" size={18} style={{ color: C.blue }} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm tracking-wider uppercase mb-1" style={{ color: C.blue }}>Телефон</p>
                    <a href={`tel:${PHONE}`} className="text-xl font-display font-bold hover:underline" style={{ color: C.text }}>{PHONE_DISPLAY}</a>
                    <p className="text-sm mt-1" style={{ color: C.dim }}>Круглосуточно</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-sm border" style={{ backgroundColor: C.card, borderColor: C.border }}>
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.blueDim }}>
                    <Icon name="Mail" size={18} style={{ color: C.blue }} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm tracking-wider uppercase mb-1" style={{ color: C.blue }}>Email</p>
                    <a href="mailto:pavino2993860@gmail.com" className="hover:underline" style={{ color: C.text }}>pavino2993860@gmail.com</a>
                    <p className="text-sm mt-1" style={{ color: C.dim }}>ИП Кутаков В.В.</p>
                  </div>
                </div>

                <a
                  href={YANDEX_NAV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-sm font-display font-bold text-base tracking-wider uppercase transition-all hover:scale-105"
                  style={{ backgroundColor: C.blue, color: "#fff", boxShadow: `0 4px 24px ${C.blueGlow}` }}
                >
                  <Icon name="Navigation" size={18} />
                  Построить маршрут в Яндекс.Навигаторе
                </a>
              </div>
            </AnimSection>

            <AnimSection>
              <div className="rounded-sm overflow-hidden border" style={{ borderColor: C.border, height: "400px" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=82.682000%2C54.990000&z=14&pt=82.682000,54.990000,pm2rdm&text=%D0%9E%D0%BC%D1%81%D0%BA%D0%B8%D0%B9%20%D1%82%D1%80%D0%B0%D0%BA%D1%82%206%D0%90%2C%20%D0%9E%D0%B1%D1%8C"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  style={{ filter: "grayscale(0.3) brightness(0.8) hue-rotate(180deg) saturate(0.6)" }}
                />
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t" style={{ backgroundColor: "#050810", borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: C.blue }}>
                <Icon name="Truck" size={14} style={{ color: "#fff" }} />
              </div>
              <span className="font-display font-bold tracking-widest uppercase text-sm" style={{ color: C.blue }}>Аэропорт</span>
            </div>
            <p className="text-xs text-center" style={{ color: C.dim }}>
              ИП Кутаков В.В. · Омский тракт 6А, г. Обь, Новосибирская область
            </p>
            <a href={`tel:${PHONE}`} className="font-display font-semibold text-sm tracking-wider" style={{ color: C.blue }}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}