import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

export default function IntentData() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Buyer Intent Signals",
      description: "Identify companies actively researching solutions like yours — see what they're searching for and when they're ready to buy."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Real-Time Alerts",
      description: "Get notified the moment a prospect shows buying intent — reach out at the perfect time to maximize conversion."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Topic & Keyword Tracking",
      description: "Monitor specific topics, keywords, and competitor mentions to understand prospect research behavior and priorities."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Account-Based Insights",
      description: "Track buyer intent at the account level — see which companies are in-market and prioritize high-value opportunities."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "CRM Integration",
      description: "Automatically sync intent data to your CRM and sales tools to keep your team focused on the hottest leads."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-2">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl p-12 md:p-16 text-center shadow-lg min-h-[320px] flex flex-col items-center justify-center overflow-hidden">
            {/* Abstract Blobs */}
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Reach Prospects When <span className="text-gradient-cefer">They're Ready to Buy</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4 max-w-5xl mx-auto">
                Stop guessing who's interested. Cefer Intent Data identifies companies showing active buying signals — so you can engage the right prospects at the right time and close deals faster.
              </p>
              <p className="text-lg text-gray-700 max-w-5xl mx-auto">
                Prioritize buyers with intent and increase conversion rates by reaching them when they're actively researching solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Intent Data */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What Is <span className="text-gradient-cefer">Intent Data?</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            Intent Data from Cefer.io tracks and analyzes online behavior to identify companies showing buying signals — including content consumption, keyword searches, competitor research, and technology adoption patterns.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Whether you're in sales, marketing, or account management — Intent Data helps you focus on prospects who are in-market and ready to engage.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Key <span className="text-gradient-cefer">Features</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Everything you need to leverage buyer intent</p>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center ${
                  index === features.length - 1 ? "md:col-span-2 mx-auto max-w-3xl" : ""
                }`}
              >
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#0e7bf5]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Use Case */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Example <span className="text-gradient-cefer">Use Case</span>
          </h2>
            <div className="py-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Example Use Case</h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              A B2B software company wants to target firms actively researching project management tools. Using Cefer Intent Data, they identify 500 companies showing strong intent, prioritize the hottest leads, and launch a highly targeted campaign — resulting in a 3x higher meeting-to-opportunity rate.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2 17.3333H20.3V20.2222H23.2M23.2 11.5556H20.3V14.4444H23.2M26.1 23.1111H14.5V20.2222H17.4V17.3333H14.5V14.4444H17.4V11.5556H14.5V8.66667H26.1M11.6 5.77778H8.7V2.88889H11.6M11.6 11.5556H8.7V8.66667H11.6M11.6 17.3333H8.7V14.4444H11.6M11.6 23.1111H8.7V20.2222H11.6M5.8 5.77778H2.9V2.88889H5.8M5.8 11.5556H2.9V8.66667H5.8M5.8 17.3333H2.9V14.4444H5.8M5.8 23.1111H2.9V20.2222H5.8M14.5 5.77778V0H0V26H29V5.77778H14.5Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">500</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">High-Intent Companies</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.875 0.9375C1.875 0.68886 1.77623 0.450403 1.60041 0.274587C1.4246 0.098772 1.18614 0 0.9375 0C0.68886 0 0.450403 0.098772 0.274587 0.274587C0.098772 0.450403 0 0.68886 0 0.9375V22.3125C0 23.5557 0.49386 24.748 1.37294 25.6271C2.25201 26.5061 3.4443 27 4.6875 27H26.0625C26.3111 27 26.5496 26.9012 26.7254 26.7254C26.9012 26.5496 27 26.3111 27 26.0625C27 25.8139 26.9012 25.5754 26.7254 25.3996C26.5496 25.2238 26.3111 25.125 26.0625 25.125H4.6875C3.94158 25.125 3.22621 24.8287 2.69876 24.3012C2.17132 23.7738 1.875 23.0584 1.875 22.3125V0.9375ZM16.5 5.4375C16.5 4.92 16.92 4.5 17.4375 4.5H24.9375C25.455 4.5 25.875 4.92 25.875 5.4375V12.9375C25.875 13.0606 25.8508 13.1825 25.8036 13.2963C25.7565 13.41 25.6875 13.5134 25.6004 13.6004C25.5134 13.6875 25.41 13.7565 25.2963 13.8036C25.1825 13.8508 25.0606 13.875 24.9375 13.875C24.8144 13.875 24.6925 13.8508 24.5787 13.8036C24.465 13.7565 24.3616 13.6875 24.2746 13.6004C24.1875 13.5134 24.1185 13.41 24.0714 13.2963C24.0242 13.1825 24 13.0606 24 12.9375V7.701L16.413 15.288C16.2425 15.4583 16.013 15.5564 15.7721 15.562C15.5312 15.5676 15.2974 15.4802 15.1193 15.318L11.6558 12.1702L6.1005 17.7255C5.92466 17.9013 5.68617 18.0001 5.4375 18.0001C5.18883 18.0001 4.95034 17.9013 4.7745 17.7255C4.59866 17.5497 4.49988 17.3112 4.49988 17.0625C4.49988 16.8138 4.59866 16.5753 4.7745 16.3995L10.962 10.212C11.1325 10.0417 11.362 9.94356 11.6029 9.93797C11.8438 9.93239 12.0776 10.0198 12.2557 10.182L15.7192 13.3298L22.674 6.375H17.4375C16.92 6.375 16.5 5.955 16.5 5.4375Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">3x</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Higher Opportunity Rate</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 0C14.7096 0 15.8814 0.1593 16.9965 0.45765L14.1264 3.3264C13.9087 3.54501 13.7166 3.78778 13.554 4.05H13.5C11.631 4.05 9.80391 4.60423 8.24986 5.64261C6.69582 6.68099 5.48459 8.15688 4.76934 9.88364C4.05409 11.6104 3.86695 13.5105 4.23158 15.3436C4.59621 17.1767 5.49623 18.8606 6.81784 20.1822C8.13945 21.5038 9.82328 22.4038 11.6564 22.7684C13.4895 23.1331 15.3896 22.9459 17.1164 22.2307C18.8431 21.5154 20.319 20.3042 21.3574 18.7501C22.3958 17.1961 22.95 15.369 22.95 13.5V13.446C23.211 13.284 23.4517 13.0927 23.6723 12.8722L26.5423 10.0035C26.8407 11.1186 27 12.2904 27 13.5C27 20.9561 20.9561 27 13.5 27C6.04395 27 0 20.9561 0 13.5C0 6.04395 6.04395 0 13.5 0ZM12.9411 6.77295C12.9411 7.9218 12.8844 9.08685 12.9465 10.2344L12.2175 10.9634C11.9667 11.2141 11.7678 11.5118 11.6321 11.8395C11.4964 12.1671 11.4265 12.5183 11.4265 12.8729C11.4265 13.2276 11.4964 13.5787 11.6321 13.9064C11.7678 14.234 11.9667 14.5317 12.2175 14.7825C12.4683 15.0333 12.766 15.2322 13.0936 15.3679C13.4213 15.5036 13.7724 15.5735 14.1271 15.5735C14.4817 15.5735 14.8329 15.5036 15.1605 15.3679C15.4882 15.2322 15.7859 15.0333 16.0366 14.7825L16.7656 14.0535C17.9132 14.1156 19.0769 14.0589 20.2271 14.0589C20.1204 15.3419 19.6491 16.5676 18.8687 17.5915C18.0883 18.6154 17.0314 19.3947 15.8226 19.8377C14.6138 20.2806 13.3036 20.3686 12.0464 20.0913C10.7893 19.8141 9.6376 19.183 8.72728 18.2727C7.81696 17.3624 7.18595 16.2107 6.90867 14.9536C6.63139 13.6964 6.71941 12.3862 7.16234 11.1774C7.60527 9.96859 8.38465 8.91167 9.40854 8.13129C10.4324 7.3509 11.6581 6.87959 12.9411 6.77295ZM22.2804 0.17145C22.5268 0.273617 22.7374 0.446495 22.8857 0.668263C23.0339 0.89003 23.1132 1.15075 23.1133 1.4175V3.888H25.5825C25.8495 3.88806 26.1104 3.96726 26.3324 4.11561C26.5543 4.26395 26.7273 4.47477 26.8295 4.72142C26.9316 4.96806 26.9584 5.23946 26.9063 5.50129C26.8542 5.76313 26.7257 6.00365 26.5369 6.19245L21.762 10.962C21.5089 11.2152 21.1656 11.3575 20.8076 11.3576H17.55L15.0822 13.8267C14.8289 14.08 14.4853 14.2223 14.1271 14.2223C13.7688 14.2223 13.4253 14.08 13.172 13.8267C12.9186 13.5734 12.7763 13.2298 12.7763 12.8716C12.7763 12.5133 12.9186 12.1698 13.172 11.9164L15.6411 9.45V6.1911C15.641 6.0136 15.6758 5.83782 15.7437 5.67381C15.8116 5.5098 15.9111 5.36079 16.0366 5.2353L20.8089 0.46305C20.9977 0.274141 21.2383 0.145474 21.5002 0.0933274C21.7621 0.0411809 22.0337 0.0678984 22.2804 0.1701" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">Targeted</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why It <span className="text-gradient-cefer">Matters</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">Timing is everything in sales.</p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            With Intent Data, you <span className="font-semibold">stop wasting time on cold leads</span> and focus on prospects who are actively shopping for solutions — dramatically improving conversion rates and shortening sales cycles.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Start Selling with Intent Today
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Identify in-market buyers and close more deals faster.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Try Cefer.io Free
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
