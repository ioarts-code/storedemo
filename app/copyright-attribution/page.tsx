import Link from 'next/link';

export const metadata = {
  title: 'Copyright & Attribution | IOARTS',
  description: 'Copyright information and artist attributions for IOARTS products and artwork.',
};

export default function CopyrightAttributionPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm md:text-base transition-colors">
            ← Back to Home
          </Link>
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-5xl md:text-7xl text-white uppercase tracking-tight mb-4">
            Copyright & Attribution
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Respecting artists, creators, and intellectual property rights
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Copyright Notice Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Copyright Notice</h2>
            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
              <p>
                © 2024 IOARTS. All rights reserved. The IOARTS brand, logo, and website design are the property of IOARTS and protected under international copyright law.
              </p>
              <p>
                All product designs, artwork, and merchandise featured on this website are original creations or licensed works. Unauthorized reproduction, distribution, or commercial use of any content without explicit written permission is strictly prohibited.
              </p>
            </div>
          </section>

          {/* Artist Attribution Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Artist Attribution</h2>
            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
              <p>
                IOARTS is proud to showcase original artwork and creative designs. All featured artists are properly credited for their contributions. We believe in supporting and recognizing the talented creators behind every product.
              </p>
              <p>
                Each product page includes artist information and credits. We encourage customers to learn about the artists whose work they support through their purchases.
              </p>
            </div>
          </section>

          {/* Third-Party Assets Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Third-Party Assets & Attribution</h2>
            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
              <p>
                This website uses resources and assets from third-party creators and providers. We are committed to properly attributing and respecting all intellectual property:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>All icons and UI elements are sourced from reputable design libraries</li>
                <li>Fonts are licensed for web use through official font providers</li>
                <li>Any third-party artwork is used with proper licensing and attribution</li>
                <li>Photography and imagery are either original or properly licensed</li>
              </ul>
            </div>
          </section>

          {/* Fan Art & Unofficial Content Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Fan Art & Unofficial Content</h2>
            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
              <p>
                IOARTS creates unofficial fan merchandise and artwork inspired by popular games, movies, and media. All fan art is created with respect for the original intellectual property holders.
              </p>
              <p>
                We operate under the understanding that fan creators contribute to vibrant communities around beloved franchises. Our merchandise is produced in limited quantities for passionate fans and collectors.
              </p>
              <p>
                If you are the copyright holder of any content featured on IOARTS and have concerns about its use, please contact us immediately at <span className="font-semibold">support@ioarts.ink</span> to discuss the matter.
              </p>
            </div>
          </section>

          {/* Digital Content & Downloads Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Digital Content & Downloads</h2>
            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
              <p>
                Digital files provided for download (including artwork, wallpapers, and design files) are licensed for personal use only. These files may not be:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Redistributed, shared, or resold</li>
                <li>Modified and presented as original work</li>
                <li>Used for commercial purposes without explicit permission</li>
                <li>Included in derivative products or services</li>
              </ul>
            </div>
          </section>

          {/* Licensing Information Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Licensing Information</h2>
            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
              <p>
                For inquiries regarding licensing, commercial use, or permission to reproduce any IOARTS content, please reach out to us at <span className="font-semibold">licensing@ioarts.ink</span>.
              </p>
              <p>
                We are open to partnerships, collaborations, and licensing opportunities with businesses and creators who share our values.
              </p>
            </div>
          </section>

          {/* DMCA Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">DMCA & Takedown Notices</h2>
            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
              <p>
                If you believe your copyright has been infringed upon by content on this website, please send a detailed DMCA notice to our designated agent at <span className="font-semibold">copyright@ioarts.ink</span>.
              </p>
              <p>
                Include the following information in your notice:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Your contact information and proof of copyright ownership</li>
                <li>Description of the infringing material</li>
                <li>URL or location of the infringing content</li>
                <li>Your statement under penalty of perjury</li>
                <li>Your signature (electronic or physical)</li>
              </ul>
            </div>
          </section>

          {/* Attribution Standards Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Attribution Standards</h2>
            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
              <p>
                IOARTS follows these principles for all content and attributions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Always credit original creators and artists</li>
                <li>Clearly indicate when content is fan-created or unofficial</li>
                <li>Provide direct links to artist portfolios when possible</li>
                <li>Respect all intellectual property rights and licenses</li>
                <li>Remove content promptly if requested by copyright holders</li>
                <li>Maintain transparent communication with creators and rights holders</li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Questions or Concerns?</h2>
            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 space-y-4 text-gray-300">
              <p>
                If you have any questions about copyright, attribution, or intellectual property matters, we&apos;re here to help. Contact us at:
              </p>
              <div className="space-y-2">
                <p><span className="text-white font-semibold">General Inquiries:</span> support@ioarts.ink</p>
                <p><span className="text-white font-semibold">Copyright Issues:</span> copyright@ioarts.ink</p>
                <p><span className="text-white font-semibold">Licensing:</span> licensing@ioarts.ink</p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
            <p>Last updated: January 2025</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 pt-12 border-t border-gray-800">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-sale" className="text-gray-400 hover:text-white transition-colors">
            Terms of Sale
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
