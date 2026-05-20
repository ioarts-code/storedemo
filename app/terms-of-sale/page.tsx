'use client';

import Link from 'next/link';

export default function TermsOfSalePage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm md:text-base">
            ← Back to Home
          </Link>
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-4xl md:text-6xl lg:text-[80px] text-white uppercase tracking-tight">
            Terms of Sale
          </h1>
          <p className="text-gray-400 mt-4">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By making a purchase from IOARTS, you agree to these Terms of Sale. These terms apply to all purchases made through our website, including products and digital downloads. If you do not agree with any part of these terms, please do not make a purchase.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Product Information</h2>
            <p>
              We strive to provide accurate descriptions and images of our products. However, we cannot guarantee that all product descriptions, pricing, or images are completely accurate, complete, or error-free. We reserve the right to correct any errors and change or update information at any time without prior notice.
            </p>
            <p>
              All product images are for illustrative purposes. Actual product appearance may vary slightly due to production variations, lighting conditions, or screen display settings.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Pricing</h2>
            <p>
              All prices are displayed in Swedish Kronor (SEK) and are subject to change without notice. Prices are valid only for online orders placed through our website. We reserve the right to limit quantities and refuse orders at our discretion.
            </p>
            <p>
              We guarantee that the price you see at checkout is the price you will pay, excluding applicable taxes and shipping fees if applicable.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Payment</h2>
            <p>
              We accept payments through Stripe, including credit cards and Klarna. All payment information is processed securely. By providing payment information, you authorize us to charge your chosen payment method for your purchase.
            </p>
            <p>
              If your payment fails, we will not complete your order. You will be notified of any issues with your payment and given the opportunity to provide alternative payment information.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Physical Products</h2>
            <p>
              Physical merchandise purchases are subject to availability. Orders are processed and shipped within 5-10 business days. Shipping times may vary depending on your location.
            </p>
            <p>
              You are responsible for providing accurate shipping information. We are not responsible for lost or misdirected packages due to incorrect addresses provided by the customer.
            </p>
            <p>
              Tracking information will be provided via email once your order ships. We recommend keeping your tracking number for reference.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Digital Products & Downloads</h2>
            <p>
              Digital products are delivered immediately upon successful payment. These are non-refundable digital downloads. Your purchase grants you a personal, non-commercial license to use the downloaded content.
            </p>
            <p>
              You may not redistribute, resell, or share digital products with others. Each download is intended for the original purchaser only. Unauthorized distribution violates intellectual property rights and may result in legal action.
            </p>
            <p>
              Download links remain accessible for 30 days from purchase. It is your responsibility to download and save your files within this period.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Returns & Refunds</h2>
            <p>
              <strong>Physical Products:</strong> We accept returns within 14 days of delivery in original, unused condition with all packaging. Return shipping costs are the customer's responsibility unless the item arrived defective. Once we receive and inspect the returned item, refunds will be processed within 5-7 business days.
            </p>
            <p>
              <strong>Digital Products:</strong> Digital downloads are final sales and are non-refundable. Once you have accessed or downloaded a digital product, no refund is available.
            </p>
            <p>
              To initiate a return, please contact us at support@ioarts.ink with your order number and reason for return.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">8. Intellectual Property</h2>
            <p>
              All content, designs, artwork, and materials on the IOARTS website and in our products are protected by copyright and intellectual property laws. Unauthorized reproduction, distribution, or modification is prohibited.
            </p>
            <p>
              Merchandise is created for unofficial fan use. Any intellectual property depicted on our products belongs to their respective rights holders. We operate under fair use principles and create unofficial fan merchandise in small scale as permitted.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">9. Limitation of Liability</h2>
            <p>
              IOARTS is provided on an "as-is" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, regarding our products and services. We are not liable for indirect, incidental, or consequential damages arising from your purchase or use of our products.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">10. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms of Sale shall be governed by Swedish law. Any legal action or proceeding must be brought within one year of the cause of action arising, or it will be forever barred.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Sale at any time. Changes will be effective immediately upon posting to the website. Your continued use of IOARTS following any modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">12. Contact Us</h2>
            <p>
              If you have questions about these Terms of Sale or any issues with your purchase, please contact us at:
            </p>
            <div className="bg-white/5 border border-gray-700 rounded-lg p-6 mt-4">
              <p className="font-semibold text-white">IOARTS</p>
              <p className="text-gray-400">Email: support@ioarts.ink</p>
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
