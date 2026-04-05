export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16">
        <div className="container-width">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg">Last updated: April 2026</p>
        </div>
      </section>

      <section className="container-width py-12">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Introduction</h2>
          <p className="text-slate-600 mb-4">
            Datarn.dev ("we," "us," "our," or "Company") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website, including any other media form, media channel, mobile website, 
            or mobile application related or connected thereto (collectively, the "Site").
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          
          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Personal Data</h3>
          <p className="text-slate-600 mb-4">
            Personally identifiable information, such as your name, shipping address, email address, 
            and telephone number, and demographic information, such as your age, gender, hometown, 
            and interests, that you voluntarily give to us when you register with the Site or when 
            you choose to participate in various activities related to the Site.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">GitHub Authentication</h3>
          <p className="text-slate-600 mb-4">
            When you authenticate through GitHub OAuth, we collect your GitHub username, profile 
            information, and public repository data as authorized by your GitHub settings. This 
            information is used to identify you and personalize your experience on our platform.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Financial Data</h3>
          <p className="text-slate-600 mb-4">
            Financial information, such as funds related to purchases you make, may be collected 
            if applicable. We may also request information about your employment history and job 
            title where relevant to our services.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Data From Third Parties</h3>
          <p className="text-slate-600 mb-4">
            Information collected automatically when you use the Site, including usage details, 
            IP addresses, access times, and the pages you have viewed directly before and after 
            accessing the Site.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Use of Your Information</h2>
          <p className="text-slate-600 mb-4">Having accurate information about you permits us to provide a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
            <li>Email you regarding your account or order</li>
            <li>Fulfill and send purchases, bills, and shipping confirmations</li>
            <li>Generate a personal profile about you for internal marketing and demographic purposes</li>
            <li>Increase the efficiency and operation of the Site</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
            <li>Notify you of updates to the Site</li>
            <li>Perform other business activities as needed</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Disclosure of Your Information</h2>
          <p className="text-slate-600 mb-4">
            We may share or disclose your information in the following situations:
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">By Law or to Protect Rights</h3>
          <p className="text-slate-600 mb-4">
            If we believe the release of information about you is necessary to comply with the law, 
            enforce our Site policies, or protect ours or others' rights, property, and safety.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Third-Party Service Providers</h3>
          <p className="text-slate-600 mb-4">
            We may share your information with third parties that perform services for us or on our 
            behalf, including payment processing, data analysis, email delivery, hosting services, 
            customer service, and marketing assistance.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Security of Your Information</h2>
          <p className="text-slate-600 mb-4">
            We use administrative, technical, and physical security measures to protect your personal 
            information. However, perfect security does not exist on the Internet. Therefore, while 
            we are committed to securing your information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Contact Us</h2>
          <p className="text-slate-600 mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg text-slate-600">
            <p className="font-semibold mb-2">Datarn.dev</p>
            <p>Email: privacy@datarn.dev</p>
            <p>GitHub: <a href="https://github.com/datarn-io" className="text-teal-600 hover:underline">github.com/datarn-io</a></p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Policy Updates</h2>
          <p className="text-slate-600 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, 
            technology, legal requirements, and other factors. We will notify you of any material 
            changes by updating the "Last updated" date of this Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  )
}
