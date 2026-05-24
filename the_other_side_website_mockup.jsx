import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Disc3,
  FileText,
  Gamepad2,
  Ghost,
  Home,
  Mail,
  Play,
  Radio,
  ScanLine,
  ShieldAlert,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const typewriterFont = {
  fontFamily:
    '"Special Elite", "Courier Prime", "Courier New", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
};

const features = [
  {
    icon: ScanLine,
    title: "Gather Evidence",
    text: "Use modern ghost hunting equipment to track EMF, UV, audio, radiation, writing, freezing temps, and more.",
  },
  {
    icon: Ghost,
    title: "Identify Entities",
    text: "Study behaviors, evidence, and patterns to determine what is haunting the location before it overwhelms you.",
  },
  {
    icon: Disc3,
    title: "Cleanse the Location",
    text: "Find what anchors the entity, reveal hidden objects, and remove the threat before your team runs out of time.",
  },
  {
    icon: Users,
    title: "Up to 6 Players",
    text: "Enter alone or with a full investigation team. Coordinate, split up, or panic together when the haunting escalates.",
  },
];

const pillars = [
  "Psychological thriller atmosphere",
  "Modern paranormal equipment",
  "Identify and Cleanse game modes",
  "Character, headquarters, and progression customization",
];

const modes = [
  {
    icon: Video,
    title: "Identify Mode",
    text: "Search haunted locations for evidence, monitor activity, study behavior, and determine which entity is present before your investigation turns deadly.",
  },
  {
    icon: Sparkles,
    title: "Cleanse Mode",
    text: "Go beyond identification. Track hidden clues, reveal bound objects, and remove what keeps the entity attached to the location.",
  },
];

const media = [
  "Official Trailer",
  "Equipment Showcase",
  "Cleanse Mode Preview",
  "Location Walkthrough",
];

const news = [
  {
    date: "JUL 11, 2025",
    title: "Haunting Behaviors Update",
    text: "Entities now feel more distinct, unpredictable, and tied to their own lore.",
  },
  {
    date: "COMING SOON",
    title: "New Customization Rewards",
    text: "Unlock cosmetics, HQ decor, trophies, and more as you progress through contracts.",
  },
  {
    date: "DEV DIARY",
    title: "Designing the Investigation Loop",
    text: "A closer look at evidence gathering, entity behavior, cleansing, and modern equipment.",
  },
];

const supportCards = [
  {
    icon: FileText,
    title: "Terms of Service",
    text: "Review usage terms, account guidelines, community expectations, and legal information for The Other Side.",
  },
  {
    icon: Mail,
    title: "Contact Us",
    text: "For creator, press, business, or support inquiries: contact@theothersidegame.com",
  },
  {
    icon: ShieldAlert,
    title: "Support Center",
    text: "Add FAQ, known issues, account help, refund links, and troubleshooting guides here.",
  },
];

const footerColumns = [
  ["The Game", "Overview", "Identify Mode", "Cleanse Mode", "Equipment", "Customization"],
  ["Community", "News", "Discord", "Events", "Creators"],
  ["Support", "Help Center", "Contact Us", "Terms of Service", "Press Kit"],
  ["Legal", "Terms of Service", "Privacy Policy", "Cookie Policy", "EULA"],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l-4 border-cyan-500 pl-3 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
      {children}
    </p>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <Button className="h-12 rounded-none border border-cyan-400/30 bg-cyan-950 px-6 text-xs font-black uppercase tracking-[0.15em] text-white shadow-[8px_8px_0_rgba(0,0,0,.55)] hover:bg-cyan-800">
      {children}
    </Button>
  );
}

export default function TheOtherSideWebsiteMockup() {
  const [page, setPage] = useState("home");

  const goToPage = (nextPage: string) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.assert(features.length === 4, "Expected four feature cards.");
  console.assert(news.length === 3, "Expected three news cards.");
  console.assert(
    supportCards.some((card) => card.title === "Terms of Service"),
    "Expected Terms of Service support card."
  );

  return (
    <div style={typewriterFont} className="min-h-screen bg-[#061018] text-slate-100 selection:bg-cyan-900 selection:text-white">
      <div className="fixed inset-0 bg-[#061018]" />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,15,22,0.92) 0%, rgba(6,16,24,1) 100%)",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(186,230,253,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(186,230,253,.05) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top, rgba(56,189,248,0.08), transparent 38%)",
        }}
      />

      {/* Header-safe rectangular focus overlay. It begins below the header so navigation stays clear. */}
      <div
        className="fixed left-0 right-0 bottom-0 pointer-events-none"
        style={{
          top: "88px",
          zIndex: 999,
          background:
            "linear-gradient(to right, rgba(2,8,13,0.88) 0%, rgba(2,8,13,0.50) 8%, rgba(2,8,13,0.08) 20%, rgba(2,8,13,0.02) 50%, rgba(2,8,13,0.08) 80%, rgba(2,8,13,0.50) 92%, rgba(2,8,13,0.88) 100%)",
        }}
      />
      <div
        className="fixed left-0 right-0 bottom-0 pointer-events-none"
        style={{
          top: "88px",
          zIndex: 998,
          background:
            "linear-gradient(to bottom, rgba(2,8,13,0.05) 0%, transparent 22%, transparent 76%, rgba(2,8,13,0.42) 100%)",
        }}
      />
      <div
        className="fixed left-0 right-0 bottom-0 pointer-events-none mix-blend-screen"
        style={{
          top: "88px",
          zIndex: 997,
          background:
            "radial-gradient(ellipse at center, rgba(186,230,253,0.035) 0%, rgba(56,189,248,0.018) 44%, transparent 74%)",
        }}
      />

      <header className="relative z-[1000] border-b border-cyan-100/10 bg-[#08131b]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 lg:px-10">
          <button type="button" onClick={() => goToPage("home")} className="group flex items-center gap-3 text-left">
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden border border-cyan-200/20 bg-cyan-950/20 shadow-[0_0_35px_rgba(56,189,248,0.12)]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 30%, rgba(186,230,253,0.16), transparent 62%)",
                }}
              />
              <Ghost className="relative h-8 w-8 text-cyan-100 group-hover:text-cyan-300" />
            </div>
            <div className="leading-none">
              <p className="text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-4xl">The</p>
              <p className="-mt-2 text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl">Other Side</p>
            </div>
          </button>

          <nav className="hidden items-center gap-9 text-xs font-black uppercase tracking-[0.16em] text-slate-200 lg:flex">
            <button type="button" onClick={() => goToPage("home")} className="flex items-center gap-1 hover:text-cyan-300">
              <span>The Game</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <button type="button" onClick={() => goToPage("news")} className="hover:text-cyan-300">News</button>
            <button type="button" onClick={() => goToPage("team")} className="hover:text-cyan-300">About the Team</button>
            <button type="button" onClick={() => goToPage("contact")} className="hover:text-cyan-300">Contact Us</button>
            <button type="button" onClick={() => goToPage("terms")} className="hover:text-cyan-300">Terms</button>
          </nav>

          <PrimaryButton>
            <span>Wishlist on Steam</span>
            <ChevronRight className="ml-3 h-5 w-5" />
          </PrimaryButton>
        </div>
      </header>

      <main className="relative z-10">
        {page === "home" && (
          <>
            <section className="relative min-h-[800px] overflow-hidden border-b border-cyan-100/10">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 74% 45%, rgba(56,189,248,0.12), transparent 18%), linear-gradient(90deg, rgba(2,8,13,.98) 0%, rgba(2,8,13,.78) 45%, rgba(2,8,13,.35) 100%)",
                }}
              />
              <div
                className="absolute right-0 top-0 h-full w-[72%] opacity-80 grayscale"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(125,211,252,0.18), transparent 24%), linear-gradient(135deg, rgba(7,19,28,.18), rgba(2,8,13,.98))",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(2,8,13,.98) 100%)",
                }}
              />

              <div className="absolute right-[14%] top-[18%] hidden h-[430px] w-[330px] border border-cyan-300/20 bg-[#08131b]/40 shadow-[0_0_55px_rgba(56,189,248,.14)] lg:block">
                <div className="absolute inset-8 border border-cyan-500/30" />
                <div className="absolute left-1/2 top-1/2 h-52 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-[#08131b]/75 shadow-[0_0_55px_rgba(56,189,248,.20)]" />
                <Radio className="absolute left-1/2 top-[42%] h-20 w-20 -translate-x-1/2 text-cyan-100/80" />
                <div className="absolute bottom-10 left-10 right-10 h-2 bg-cyan-800/70" />
              </div>

              <div className="relative mx-auto flex min-h-[800px] max-w-[1500px] items-center px-6 py-24 lg:px-10">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="max-w-4xl"
                >
                  <div className="mb-7 inline-flex border-l-4 border-cyan-500 bg-[#08131b]/60 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                    Co-op Psychological Thriller • Up to 6 Players
                  </div>

                  <h1 className="text-6xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-white md:text-8xl lg:text-9xl">
                    Investigate <span className="text-cyan-500">What Waits</span> Beyond
                  </h1>

                  <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                    The Other Side is a co-op psychological thriller where your team investigates haunted locations, gathers evidence with modern ghost hunting equipment, identifies entities, and cleanses them from the location.
                  </p>

                  <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
                    {pillars.map((pillar) => (
                      <div key={pillar} className="border border-cyan-100/10 bg-[#08131b]/55 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-200">
                        <span className="mr-2 text-cyan-400">//</span>
                        {pillar}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" className="h-14 rounded-none border border-cyan-400/40 bg-cyan-950 px-8 text-xs font-black uppercase tracking-[0.16em] shadow-[10px_10px_0_rgba(0,0,0,.65)] hover:bg-cyan-800">
                      <span>Wishlist on Steam</span>
                      <ChevronRight className="ml-3 h-5 w-5" />
                    </Button>

                    <Button size="lg" variant="outline" className="h-14 rounded-none border-cyan-100/25 bg-[#08131b]/50 px-8 text-xs font-black uppercase tracking-[0.16em] text-white hover:bg-cyan-100 hover:text-[#02080d]">
                      <span>Watch Trailer</span>
                      <Play className="ml-3 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </section>

            <section id="game" className="border-b border-cyan-100/10 bg-[#08131b] py-20">
              <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
                <div>
                  <SectionLabel>About the Game</SectionLabel>
                  <h2 className="mt-6 text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white md:text-6xl">
                    Every Location <br /> Has a Memory.
                  </h2>
                  <p className="mt-7 max-w-xl leading-8 text-slate-300">
                    Inspired by the tension of paranormal investigation games and the sharp presentation of modern horror, this layout keeps The Other Side focused on what makes it distinct: investigation, evidence, cleansing, customization, and team-based psychological pressure.
                  </p>
                </div>

                <div className="grid gap-0 border-y border-cyan-100/10 md:grid-cols-2 xl:grid-cols-4">
                  {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <Card key={feature.title} className="rounded-none border-0 border-l border-cyan-100/10 bg-[#08131b] text-white shadow-none first:border-l-0">
                        <CardContent className="flex min-h-72 flex-col items-center justify-center p-8 text-center">
                          <Icon className="mb-6 h-8 w-8 text-cyan-400 drop-shadow-[0_0_12px_rgba(56,189,248,.25)]" />
                          <h3 className="text-sm font-black uppercase tracking-[0.15em] text-white">{feature.title}</h3>
                          <p className="mt-4 text-sm leading-6 text-slate-400">{feature.text}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            <section id="modes" className="border-b border-cyan-100/10 bg-[#04111a] py-20">
              <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
                <SectionLabel>Ways to Play</SectionLabel>
                <h2 className="mt-6 text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">Identify or Cleanse</h2>

                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                  {modes.map((mode) => {
                    const Icon = mode.icon;
                    return (
                      <div key={mode.title} className="relative min-h-96 overflow-hidden border border-cyan-100/10 bg-[#0b1821] p-8">
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(circle at 70% 30%, rgba(56,189,248,.09), transparent 28%)",
                          }}
                        />
                        <Icon className="relative mb-8 h-10 w-10 text-cyan-400" />
                        <h3 className="relative text-3xl font-black uppercase tracking-[-0.04em]">{mode.title}</h3>
                        <p className="relative mt-5 max-w-xl leading-8 text-slate-300">{mode.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section id="media" className="border-b border-cyan-100/10 bg-[#04111a] py-20">
              <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
                <div className="mb-8 flex items-end justify-between">
                  <div>
                    <SectionLabel>Latest from The Other Side</SectionLabel>
                    <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">Media</h2>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-4">
                  {media.map((item, index) => (
                    <div key={item} className="group relative min-h-56 overflow-hidden border border-cyan-100/10 bg-[#0b1821]">
                      <div
                        className="absolute inset-0 transition duration-500 group-hover:scale-105"
                        style={{
                          background:
                            "radial-gradient(circle at center, rgba(56,189,248,.12), transparent 35%), linear-gradient(180deg, rgba(2,8,13,.1), rgba(2,8,13,.95))",
                        }}
                      />
                      <div className="absolute left-4 top-4 text-xs font-black uppercase tracking-[0.2em] text-cyan-400">0{index + 1}</div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-100/40 bg-[#08131b]/60 text-white backdrop-blur-sm group-hover:bg-cyan-900">
                          <Play className="ml-1 h-7 w-7" />
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-white">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {page === "news" && (
          <section className="min-h-[calc(100vh-88px)] border-b border-cyan-100/10 bg-[#04111a] px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-[1500px]">
              <SectionLabel>News</SectionLabel>
              <h1 className="mt-5 text-5xl font-black uppercase tracking-[-0.06em] text-white md:text-7xl">News From The Other Side</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Patch notes, event announcements, dev diaries, and official updates for The Other Side.</p>
              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {news.map((post) => (
                  <article key={post.title} className="border border-cyan-100/10 bg-[#08131b]/75 p-7 shadow-[0_0_45px_rgba(0,0,0,.45)] transition hover:border-cyan-500/50 hover:bg-cyan-950/10">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">{post.date}</p>
                    <h2 className="mt-4 text-2xl font-black uppercase leading-tight tracking-[-0.04em] text-white">{post.title}</h2>
                    <p className="mt-4 text-sm leading-6 text-slate-400">{post.text}</p>
                    <button type="button" className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-white hover:text-cyan-300">
                      <span>Read More</span>
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {page === "contact" && (
          <section className="min-h-[calc(100vh-88px)] border-b border-cyan-100/10 bg-[#08131b] px-6 py-20 lg:px-10">
            <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <SectionLabel>Contact Us</SectionLabel>
                <h1 className="mt-5 text-5xl font-black uppercase tracking-[-0.06em] text-white md:text-7xl">Reach the Team</h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">For support, creator questions, press requests, business inquiries, or community concerns, use the contact options below.</p>
              </div>
              <div className="grid gap-5">
                <div className="border border-cyan-100/10 bg-[#0b1821] p-8">
                  <Mail className="mb-5 h-9 w-9 text-cyan-400" />
                  <h2 className="text-2xl font-black uppercase">General Contact</h2>
                  <p className="mt-3 text-slate-400">contact@theothersidegame.com</p>
                </div>
                <div className="border border-cyan-100/10 bg-[#0b1821] p-8">
                  <Users className="mb-5 h-9 w-9 text-cyan-400" />
                  <h2 className="text-2xl font-black uppercase">Creators & Press</h2>
                  <p className="mt-3 text-slate-400">creators@theothersidegame.com</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === "team" && (
          <section className="min-h-[calc(100vh-88px)] border-b border-cyan-100/10 bg-[#04111a] px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-[1500px]">
              <SectionLabel>About the Team</SectionLabel>
              <h1 className="mt-5 text-5xl font-black uppercase tracking-[-0.06em] text-white md:text-7xl">Built by Horror Fans</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">The Other Side is developed by a small indie team focused on atmospheric locations, readable equipment, player customization, and a fresh take on co-op paranormal investigation.</p>
              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {[
                  ["Development", "Gameplay systems, ghost behavior, equipment, and map implementation."],
                  ["Design", "Investigation flow, Cleanse mode, progression, cosmetics, and event rewards."],
                  ["Community", "Creators, announcements, player feedback, support, and live update communication."],
                ].map(([title, text]) => (
                  <div key={title} className="border border-cyan-100/10 bg-[#0b1821] p-8">
                    <h2 className="text-2xl font-black uppercase text-white">{title}</h2>
                    <p className="mt-4 leading-7 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {page === "terms" && (
          <section className="min-h-[calc(100vh-88px)] border-b border-cyan-100/10 bg-[#08131b] px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <SectionLabel>Terms of Service</SectionLabel>
              <h1 className="mt-5 text-5xl font-black uppercase tracking-[-0.06em] text-white md:text-7xl">Terms of Service</h1>
              <div className="mt-10 space-y-8 border border-cyan-100/10 bg-[#0b1821] p-8 text-slate-300">
                <p>This page is a placeholder for your final Terms of Service. Replace this with legal language before launch.</p>
                <div>
                  <h2 className="text-xl font-black uppercase text-white">Community Expectations</h2>
                  <p className="mt-3 leading-7 text-slate-400">Players are expected to follow platform rules, community guidelines, and fair-play expectations.</p>
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase text-white">Account & Game Usage</h2>
                  <p className="mt-3 leading-7 text-slate-400">This section can cover account access, prohibited behavior, moderation, refunds, and restrictions.</p>
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase text-white">Legal Notice</h2>
                  <p className="mt-3 leading-7 text-slate-400">Have a lawyer review this section before publishing the final website.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="relative z-10 bg-[#08131b] px-6 py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 border-b border-cyan-100/10 pb-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="text-3xl font-black uppercase tracking-[-0.05em]">The Other Side</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              A co-op psychological thriller where every contract pulls you closer to what waits beyond.
            </p>
          </div>

          {footerColumns.map(([heading, ...links]) => (
            <div key={heading}>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">{heading}</h4>
              <div className="mt-5 space-y-3">
                {links.map((link) => (
                  <a key={link} href="#" className="block text-sm uppercase tracking-[0.08em] text-slate-400 hover:text-cyan-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 pt-8 text-xs uppercase tracking-[0.12em] text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 The Other Side. All rights reserved.</p>
          <p>Cookie Settings · English</p>
        </div>
      </footer>
    </div>
  );
}
