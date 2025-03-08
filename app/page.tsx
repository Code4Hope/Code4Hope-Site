"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Footer } from "@/components/footer"
import SponsorCarousel from "@/components/sponsor-slider-home";
import hero_image from "@/components/assets/images/header/hero-image.png";
import blog1 from "@/components/assets/images/blog/1.jpg";
import blog2 from "@/components/assets/images/blog/2.jpg";
import blog3 from "@/components/assets/images/blog/3.jpg";
import impactX from "@/components/assets/images/event/ImpactX.png";
import c4h2025 from "@/components/assets/images/event/c4h2025.png";
import black_logo from "@/components/assets/images/black_logo_no_text.PNG";
import {router} from "next/client";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <ScrollReveal>
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Code4Hope
            </h1>
            <p className="mx-auto max-w-[700px] text-black md:text-xl">
              A not-for-profit organization that hosts hackathons throughout the year, empowering students to innovate and make an impact for charitable causes.
            </p>
            <div className="space-x-4">
              <Button className="bg-[#826CB8] hover:bg-[#6f5c9d] text-white" onClick={() => window.open("/about", "_self")}>Learn More</Button>
              <Button variant="secondary" className="bg-gray-200 hover:bg-gray-300 text-black" onClick={() => window.open("/events", "_self")}>
                Outreach
              </Button>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal>
      <section id="about" className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="border-2 border-[#826CB8] shadow-md rounded-xl p-6 bg-background">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <div className="flex items-center space-x-4 mb-4">
                  <h2 className="text-2xl font-bold">Code 4 Hope</h2>
                </div>
                <p className="text-gray-500 md:text-lg">
                  Code 4 Hope is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit. We host hackathons every 2-3 months on various topics and categories for charitable organizations. Our hackathons aim to allow students with a passion for coding and any level of experience to show their skills and contribute to innovation while making an impact.
                </p>
              </div>
              <div className="md:w-1/2 aspect-video overflow-hidden rounded-xl">
                <Image
                  alt="About Image"
                  className="object-cover w-full h-full"
                  height="300"
                  src={hero_image}
                  width="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Upcoming Events Section */}
      <ScrollReveal>
        <section id="events" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Throughout the year, Code4Hope hosts multiple hackathons, each on a different topic that relates to a
                current trend in the technology space. Sign up below.
              </p>
              <Button variant="outline" className="rounded-full">
                Previous Events
              </Button>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              <Card className="p-0">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={c4h2025}
                    alt="Event Image"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle>Code4Hope &apos;25</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-500">
                    Code4Hope 2025 is our first in-person-only hackathon, uniting high school innovators to tackle real-world challenges in sustainability, health, education, and finance. Build meaningful projects, collaborate with like-minded peers, and create lasting impact—because the solutions you develop today can shape a better tomorrow.
                  </p>
                  <Button className="mt-4 w-full bg-[#826CB8] hover:bg-[#6f5c9d]">Sign Up</Button>
                </CardContent>
              </Card>
              <Card className="p-0">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={impactX}
                    alt="Event Image"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle>ImpactX &apos;25</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-500">
                    Projects for a better world by solving real-world problems—whether they be health, wellness, and
                    education—where your ideas today shape a brighter, more sustainable tomorrow. All proceeds from this
                    hackathon will be donated to World Computer Exchange.
                  </p>
                  <Button className="mt-4 w-full bg-[#826CB8] hover:bg-[#6f5c9d]">Sign Up</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sponsors Section */}
      <ScrollReveal>
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sponsors</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sponsors provide our hackathons with funding so that young developers who participate can receive awards, prizes, and workshops that can help them further develop their skills.
            </p>
            <Button variant="outline" className="rounded-full" onClick={() => window.open("/sponsors", "_self")} >See more...</Button>
          </div>
          <div className="relative mt-12">
            <div className="container mx-auto px-4 md:px-6 relative">
              {/*<Button variant="outline" size="icon" className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10">*/}
              {/*  <ChevronLeft className="h-4 w-4" />*/}
              {/*</Button>*/}
              <div className="flex overflow-hidden">
                {/* Placeholder sponsors */}
                <SponsorCarousel></SponsorCarousel>
                {/*{["https://brandergroup.net/wp-content/uploads/2023/12/ISP-Carriers-Nord-1200x900.png", "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/892/highres/Logo_%281%29.png", "https://cdn.mos.cms.futurecdn.net/mfRWxBbBCSEL9rtoYmxDiR.jpg", "https://web-summit-avenger.imgix.net/production/logos/original/7a7b2abcb3b7e15a1c643880b90cc2beb1ab68be.png?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white","https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/869/highres/AoPS_Main_Logo_%281%29.png"].map((index) => (*/}
                {/*  <div key={index} className="flex-none w-1/4 px-4">*/}
                {/*    <div className="bg-gray-200 aspect-video rounded-lg overflow-hidden">*/}
                {/*      <Image*/}
                {/*        src={index}*/}
                {/*        alt={`Sponsor ${index}`}*/}
                {/*        width={300}*/}
                {/*        height={169}*/}
                {/*        className="w-full h-full object-cover"*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*))}*/}
              </div>
              {/*<Button variant="outline" size="icon" className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10">*/}
              {/*  <ChevronRight className="h-4 w-4" />*/}
              {/*</Button>*/}
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Recent Workshops Section */}
      <ScrollReveal>
        <section id="workshops" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Workshops</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Workshop lectures are excellent ways for young software engineers to learn from industry professionals
                and further hone their skills. During every Code4Hope hackathon, workshops will be available for
                participants to watch live. If you missed these amazing guest speakers, you can access them here.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="p-0">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={blog1}
                    alt="Build Your Best Projects Faster with Refact.ai"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle>Build Your Best Projects Faster with Refact.ai</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-500 mb-4">Refact AI @ ImpactX</p>
                  <Button className="w-full bg-[#826CB8] hover:bg-[#6f5c9d]">Watch Now</Button>
                </CardContent>
              </Card>
              <Card className="p-0">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={blog2}
                    alt="Unleashing the Power of Data and AI"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle>Unleashing the Power of Data and AI</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-500 mb-4">Rajesh Mittal, PrismView EHS @ ImpactX</p>
                  <Button className="w-full bg-[#826CB8] hover:bg-[#6f5c9d]">Watch Now</Button>
                </CardContent>
              </Card>
              <Card className="p-0">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={blog3}
                    alt="Ignite Your Journey to Entrepreneurship"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle>Ignite Your Journey to Entrepreneurship</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-500 mb-4">Prachi Kuradi @ ImpactX</p>
                  <Button className="w-full bg-[#826CB8] hover:bg-[#6f5c9d]">Watch Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Social Links Section */}
      <ScrollReveal>
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="border-2 border-[#826CB8] shadow-md rounded-[32px] p-8 bg-white">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="space-y-6 md:w-1/2">
                  <h2 className="text-3xl font-bold text-[#826CB8]">Follow Our Socials</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We post A LOT on our socials and Discord, so as a participant, that is your best place to find event
                    info and pretty much everything going on at Code4Hope! Stay connected with us to get real-time
                    updates, behind-the-scenes content, and exclusive announcements about upcoming hackathons and
                    workshops.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 md:w-1/2">
                  <Link
                    href="#"
                    className="bg-[#826CB8] rounded-xl p-4 hover:bg-[#6f5c9d] transition-colors flex items-center justify-center"
                  >
                    <InstagramIcon className="h-10 w-10 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#826CB8] rounded-xl p-4 hover:bg-[#6f5c9d] transition-colors flex items-center justify-center"
                  >
                    <DiscordIcon className="h-10 w-10 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#826CB8] rounded-xl p-4 hover:bg-[#6f5c9d] transition-colors flex items-center justify-center"
                  >
                    <TiktokIcon className="h-10 w-10 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#826CB8] rounded-xl p-4 hover:bg-[#6f5c9d] transition-colors flex items-center justify-center"
                  >
                    <TwitterIcon className="h-10 w-10 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#826CB8] rounded-xl p-4 hover:bg-[#6f5c9d] transition-colors flex items-center justify-center"
                  >
                    <GithubIcon className="h-10 w-10 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#826CB8] rounded-xl p-4 hover:bg-[#6f5c9d] transition-colors flex items-center justify-center"
                  >
                    <LinkedinIcon className="h-10 w-10 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  )
}

function HeartIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function DiscordIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6c-1.07-.95-2.47-1.65-4-2.05M6 6c1.07-.95 2.47-1.65 4-2.05M12 2v2M8.5 7C7.67 7 7 7.67 7 8.5S7.67 10 8.5 10 10 9.33 10 8.5 9.33 7 8.5 7m7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 9.33 17 8.5 16.33 7 15.5 7m-3.5 5c-2 0-5 1-5 4v1h10v-1c0-3-3-4-5-4" />
    </svg>
  )
}

function TiktokIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z" />
      <path d="M10 12a3 3 0 1 1-3 3V6c.333 1 1.6 3 4 3" />
    </svg>
  )
}

function TwitterIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  )
}

function YoutubeIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4l16 16" />
      <path d="M4 20L20 4" />
    </svg>
  )
}

const socialIcons = [<InstagramIcon />, <DiscordIcon />, <TiktokIcon />, <TwitterIcon />, <GithubIcon />]
