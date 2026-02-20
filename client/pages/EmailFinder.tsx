import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

export default function EmailFinder() {
  const features = [
    {
      icon: (
        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.8 0H3.2C1.44 0 0.016 1.4625 0.016 3.25L0 22.75C0 24.5375 1.44 26 3.2 26H28.8C30.56 26 32 24.5375 32 22.75V3.25C32 1.4625 30.56 0 28.8 0ZM28.8 6.5L16 14.625L3.2 6.5V3.25L16 11.375L28.8 3.25V6.5Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Find Anyone's Email",
      description: "Discover verified business email addresses using just a name and company domain   fast, accurate, and reliable."
    },
    {
      icon: (
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.16" d="M14.7775 1.50024C18.2988 1.50024 21.6762 2.89905 24.1662 5.38892C26.6562 7.87889 28.0558 11.2562 28.0558 14.7776C28.0558 18.299 26.6562 21.6762 24.1662 24.1663C21.6762 26.6563 18.299 28.0559 14.7775 28.0559C11.2562 28.0558 7.87883 26.6562 5.38885 24.1663C2.89899 21.6763 1.50018 18.2989 1.50018 14.7776C1.50026 11.2562 2.89888 7.87889 5.38885 5.38892C7.87883 2.89894 11.2562 1.50032 14.7775 1.50024Z" fill="#0E7BF5" fillOpacity="0.1" stroke="#0E7BF5"/>
<path d="M32 32L24.5205 24.5205L32 32ZM24.5205 24.5205C25.7999 23.2411 26.8148 21.7222 27.5072 20.0506C28.1996 18.379 28.556 16.5873 28.556 14.778C28.556 12.9686 28.1996 11.177 27.5072 9.50537C26.8148 7.83375 25.7999 6.31488 24.5205 5.03548C23.2411 3.75607 21.7222 2.74119 20.0506 2.04879C18.379 1.35638 16.5873 1 14.778 1C12.9686 1 11.177 1.35638 9.50537 2.04879C7.83375 2.74119 6.31488 3.75607 5.03548 5.03548C2.4516 7.61935 1 11.1238 1 14.778C1 18.4321 2.4516 21.9366 5.03548 24.5205C7.61935 27.1043 11.1238 28.556 14.778 28.556C18.4321 28.556 21.9366 27.1043 24.5205 24.5205Z" fill="#0E7BF5" fillOpacity="0.1"/>
<path d="M32 32L24.5205 24.5205M24.5205 24.5205C25.7999 23.2411 26.8148 21.7222 27.5072 20.0506C28.1996 18.379 28.556 16.5873 28.556 14.778C28.556 12.9686 28.1996 11.177 27.5072 9.50537C26.8148 7.83375 25.7999 6.31488 24.5205 5.03548C23.2411 3.75607 21.7222 2.74119 20.0506 2.04879C18.379 1.35638 16.5873 1 14.778 1C12.9686 1 11.177 1.35638 9.50537 2.04879C7.83375 2.74119 6.31488 3.75607 5.03548 5.03548C2.4516 7.61935 1 11.1238 1 14.778C1 18.4321 2.4516 21.9366 5.03548 24.5205C7.61935 27.1043 11.1238 28.556 14.778 28.556C18.4321 28.556 21.9366 27.1043 24.5205 24.5205Z" stroke="#0E7BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
      title: "Real-Time Verification",
      description: "Every email is verified in real-time to ensure deliverability   no bounces, no guesses, just working contacts."
    },
    {
      icon: (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M23.128 1.30999C22.8201 0.818096 22.3666 0.434418 21.8305 0.212367C21.2944 -0.00968415 20.7025 -0.0590607 20.137 0.0711122L16.1237 0.993018C15.7124 1.08756 15.2851 1.08756 14.8738 0.993018L10.8605 0.0711122C10.295 -0.0590607 9.70306 -0.00968415 9.16697 0.212367C8.63088 0.434418 8.17735 0.818096 7.86952 1.30999L5.68209 4.80118C5.45888 5.15833 5.15755 5.45968 4.80042 5.68514L1.30946 7.87271C0.818444 8.18029 0.435353 8.63311 0.213364 9.16832C-0.00862482 9.70352 -0.0585008 10.2946 0.0706592 10.8594L0.992505 14.8774C1.0867 15.288 1.0867 15.7146 0.992505 16.1252L0.0706592 20.141C-0.0590028 20.7061 -0.00937781 21.2977 0.212635 21.8333C0.434648 22.369 0.81802 22.8222 1.30946 23.1299L4.80042 25.3175C5.15755 25.5407 5.45888 25.8421 5.68432 26.1992L7.87175 29.6904C8.5012 30.6971 9.70205 31.1949 10.8605 30.9293L14.8738 30.0074C15.2851 29.9128 15.7124 29.9128 16.1237 30.0074L20.1392 30.9293C20.7044 31.0589 21.2959 31.0093 21.8315 30.7873C22.3671 30.5653 22.8203 30.1819 23.128 29.6904L25.3154 26.1992C25.5386 25.8421 25.8399 25.5407 26.1971 25.3175L29.6903 23.1299C30.1817 22.8217 30.5649 22.3681 30.7865 21.832C31.0082 21.2959 31.0572 20.704 30.9268 20.1387L30.0072 16.1252C29.9127 15.7139 29.9127 15.2865 30.0072 14.8752L30.9291 10.8594C31.0589 10.2945 31.0096 9.70311 30.788 9.16747C30.5664 8.63183 30.1835 8.1785 29.6925 7.87048L26.1993 5.68291C25.8427 5.45927 25.5412 5.15784 25.3176 4.80118L23.128 1.30999ZM22.0052 10.5224C22.1433 10.2685 22.1775 9.97094 22.1007 9.69235C22.0238 9.41376 21.8419 9.17584 21.5932 9.02865C21.3446 8.88145 21.0485 8.83646 20.7673 8.90314C20.4861 8.96982 20.2418 9.14296 20.0857 9.38615L14.2488 19.2659L10.7243 15.8908C10.6198 15.7835 10.4947 15.6983 10.3565 15.6403C10.2183 15.5823 10.0698 15.5528 9.91996 15.5534C9.7701 15.5541 9.6219 15.5849 9.48422 15.6441C9.34653 15.7033 9.22217 15.7896 9.11855 15.8978C9.01493 16.0061 8.93418 16.1341 8.88111 16.2743C8.82804 16.4145 8.80374 16.5639 8.80966 16.7136C8.81558 16.8634 8.8516 17.0104 8.91556 17.1459C8.97953 17.2815 9.07014 17.4027 9.18198 17.5025L13.722 21.8531C13.8435 21.9693 13.9897 22.0565 14.1497 22.1083C14.3096 22.1601 14.4792 22.175 14.6457 22.152C14.8123 22.1291 14.9715 22.0688 15.1115 21.9757C15.2514 21.8825 15.3686 21.759 15.4541 21.6142L22.0052 10.5224Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Bulk Email Discovery",
      description: "Upload lists of names and companies to find hundreds or thousands of email addresses at once   perfect for outbound campaigns."
    },
    {
      icon: (
       <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6V3C15 1.35 13.65 0 12 0H3C1.35 0 0 1.35 0 3V24C0 25.65 1.35 27 3 27H27C28.65 27 30 25.65 30 24V9C30 7.35 28.65 6 27 6H15ZM6 24H3V21H6V24ZM6 18H3V15H6V18ZM6 12H3V9H6V12ZM6 6H3V3H6V6ZM12 24H9V21H12V24ZM12 18H9V15H12V18ZM12 12H9V9H12V12ZM12 6H9V3H12V6ZM25.5 24H15V21H18V18H15V15H18V12H15V9H25.5C26.325 9 27 9.675 27 10.5V22.5C27 23.325 26.325 24 25.5 24ZM24 12H21V15H24V12ZM24 18H21V21H24V18Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Pattern Recognition",
      description: "Advanced algorithms identify company email patterns and verify addresses across multiple formats for maximum accuracy."
    },
    {
      icon: (
       <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9.21927 8.82614C9.50931 9.11582 9.90247 9.27853 10.3124 9.27853C10.7223 9.27853 11.1155 9.11582 11.4055 8.82614L14.953 5.27864V22.1705C14.953 22.5808 15.116 22.9742 15.4061 23.2643C15.6962 23.5544 16.0896 23.7174 16.4999 23.7174C16.9101 23.7174 17.3036 23.5544 17.5937 23.2643C17.8838 22.9742 18.0468 22.5808 18.0468 22.1705V5.27864L21.5943 8.82614C21.7359 8.97812 21.9067 9.10002 22.0964 9.18456C22.2862 9.26911 22.491 9.31457 22.6987 9.31823C22.9064 9.3219 23.1127 9.28369 23.3053 9.20589C23.4979 9.12809 23.6729 9.01229 23.8198 8.86541C23.9667 8.71852 24.0825 8.54355 24.1603 8.35093C24.2381 8.15832 24.2763 7.95201 24.2726 7.74431C24.2689 7.53661 24.2235 7.33178 24.1389 7.14203C24.0544 6.95228 23.9325 6.7815 23.7805 6.63989L17.593 0.452389C17.303 0.16271 16.9098 0 16.4999 0C16.09 0 15.6968 0.16271 15.4068 0.452389L9.21927 6.63989C8.92959 6.92993 8.76688 7.32309 8.76688 7.73301C8.76688 8.14294 8.92959 8.5361 9.21927 8.82614Z" fill="#0E7BF5"/>
<path d="M16.5 34.5457C20.8761 34.5457 25.0729 32.8073 28.1673 29.7129C31.2616 26.6186 33 22.4217 33 18.0457H25.2656C23.3207 18.0457 22.3493 18.0457 21.7449 18.65C21.1406 19.2543 21.1406 20.2257 21.1406 22.1707C21.1406 23.4014 20.6517 24.5818 19.7814 25.4521C18.9111 26.3224 17.7308 26.8113 16.5 26.8113C15.2692 26.8113 14.0889 26.3224 13.2186 25.4521C12.3483 24.5818 11.8594 23.4014 11.8594 22.1707C11.8594 20.2257 11.8594 19.2543 11.2551 18.65C10.6507 18.0457 9.67931 18.0457 7.73438 18.0457H0C0 22.4217 1.73839 26.6186 4.83274 29.7129C7.92709 32.8073 12.1239 34.5457 16.5 34.5457Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "CRM & Tool Integration",
      description: "Sync discovered emails directly to your CRM, outreach tools, or export to CSV   seamless workflow integration."
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
                Find Verified Emails <span className="text-gradient-cefer">in Seconds</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4 max-w-5xl mx-auto">
                Cefer's Email Finder helps you instantly discover verified business emails of decision-makers   so you can reach the right people, faster.
              </p>
              <p className="text-lg text-gray-700 max-w-5xl mx-auto">
                Just enter a name and company   Cefer finds the verified email address in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Email Finder */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What Is <span className="text-gradient-cefer">Email Finder?</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            Email Finder from Cefer.io is a powerful search tool that helps you discover business email addresses by matching a person's name with their company domain   using advanced pattern recognition and verification to ensure every result is accurate and deliverable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Whether you're reaching out to one prospect or building a list of hundreds   Email Finder makes it easy to connect with the right people.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Key <span className="text-gradient-cefer">Features</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Everything you need to find business emails</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Outbound Campaign Success</h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              A sales rep wants to connect with Marketing Directors at 50 SaaS companies. They upload a list of names and company domains to Cefer Email Finder and receive 3,000+ verified business emails in minutes   ready for their next personalized email sequence.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49777 29C1.11738 29 0.77266 28.8429 0.463596 28.5287C0.154532 28.2146 0 27.8642 0 27.4775V23.6713C0 21.4963 0.665676 19.575 1.99703 17.9075C3.32838 16.24 5.04012 15.1767 7.13224 14.7175C6.18128 15.3942 5.44428 16.2458 4.92125 17.2724C4.39822 18.299 4.1367 19.4049 4.1367 20.59V27.4775C4.1367 27.7433 4.17236 28.0092 4.24369 28.275C4.31501 28.5408 4.43388 28.7825 4.6003 29H1.49777ZM6.73997 29C6.33581 29 5.98538 28.8492 5.68868 28.5476C5.39198 28.246 5.24315 27.8893 5.2422 27.4775V20.59C5.2422 18.8983 5.83085 17.4604 7.00814 16.2763C8.18544 15.0921 9.60571 14.5 11.2689 14.5H18.0089C19.6731 14.5 21.0877 15.0921 22.2526 16.2763C23.4175 17.4604 24 18.8983 24 20.59V22.91C24 24.6017 23.4175 26.0396 22.2526 27.2238C21.0877 28.4079 19.6731 29 18.0089 29H6.73997ZM12.0178 11.455C10.4487 11.455 9.11738 10.8992 8.02378 9.7875C6.93016 8.67583 6.38336 7.3225 6.38336 5.7275C6.38336 4.1325 6.93016 2.77917 8.02378 1.6675C9.11738 0.555834 10.4487 0 12.0178 0C13.5869 0 14.9183 0.555834 16.0119 1.6675C17.1055 2.77917 17.6523 4.1325 17.6523 5.7275C17.6523 7.3225 17.1055 8.67583 16.0119 9.7875C14.9183 10.8992 13.5869 11.455 12.0178 11.455Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">3,000+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Verified Contacts</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.875 0.9375C1.875 0.68886 1.77623 0.450403 1.60041 0.274587C1.4246 0.098772 1.18614 0 0.9375 0C0.68886 0 0.450403 0.098772 0.274587 0.274587C0.098772 0.450403 0 0.68886 0 0.9375V22.3125C0 23.5557 0.49386 24.748 1.37294 25.6271C2.25201 26.5061 3.4443 27 4.6875 27H26.0625C26.3111 27 26.5496 26.9012 26.7254 26.7254C26.9012 26.5496 27 26.3111 27 26.0625C27 25.8139 26.9012 25.5754 26.7254 25.3996C26.5496 25.2238 26.3111 25.125 26.0625 25.125H4.6875C3.94158 25.125 3.22621 24.8287 2.69876 24.3012C2.17132 23.7738 1.875 23.0584 1.875 22.3125V0.9375ZM16.5 5.4375C16.5 4.92 16.92 4.5 17.4375 4.5H24.9375C25.455 4.5 25.875 4.92 25.875 5.4375V12.9375C25.875 13.0606 25.8508 13.1825 25.8036 13.2963C25.7565 13.41 25.6875 13.5134 25.6004 13.6004C25.5134 13.6875 25.41 13.7565 25.2963 13.8036C25.1825 13.8508 25.0606 13.875 24.9375 13.875C24.8144 13.875 24.6925 13.8508 24.5787 13.8036C24.465 13.7565 24.3616 13.6875 24.2746 13.6004C24.1875 13.5134 24.1185 13.41 24.0714 13.2963C24.0242 13.1825 24 13.0606 24 12.9375V7.701L16.413 15.288C16.2425 15.4583 16.013 15.5564 15.7721 15.562C15.5312 15.5676 15.2974 15.4802 15.1193 15.318L11.6558 12.1702L6.1005 17.7255C5.92466 17.9013 5.68617 18.0001 5.4375 18.0001C5.18883 18.0001 4.95034 17.9013 4.7745 17.7255C4.59866 17.5497 4.49988 17.3112 4.49988 17.0625C4.49988 16.8138 4.59866 16.5753 4.7745 16.3995L10.962 10.212C11.1325 10.0417 11.362 9.94356 11.6029 9.93797C11.8438 9.93239 12.0776 10.0198 12.2557 10.182L15.7192 13.3298L22.674 6.375H17.4375C16.92 6.375 16.5 5.955 16.5 5.4375Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">55%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Higher Response Rate</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 1.43478C0 1.05425 0.148515 0.689312 0.412874 0.420238C0.677232 0.151164 1.03578 0 1.40964 0H16.4458C16.8196 0 17.1782 0.151164 17.4425 0.420238C17.7069 0.689312 17.8554 1.05425 17.8554 1.43478C17.8554 1.81531 17.7069 2.18025 17.4425 2.44933C17.1782 2.7184 16.8196 2.86957 16.4458 2.86957H1.40964C1.03578 2.86957 0.677232 2.7184 0.412874 2.44933C0.148515 2.18025 0 1.81531 0 1.43478ZM0 11C0 10.6195 0.148515 10.2545 0.412874 9.98546C0.677232 9.71638 1.03578 9.56522 1.40964 9.56522H12.6867C13.0606 9.56522 13.4192 9.71638 13.6835 9.98546C13.9479 10.2545 14.0964 10.6195 14.0964 11C14.0964 11.3805 13.9479 11.7455 13.6835 12.0145C13.4192 12.2836 13.0606 12.4348 12.6867 12.4348H1.40964C1.03578 12.4348 0.677232 12.2836 0.412874 12.0145C0.148515 11.7455 0 11.3805 0 11ZM0 20.5652C0 20.1847 0.148515 19.8197 0.412874 19.5507C0.677232 19.2816 1.03578 19.1304 1.40964 19.1304H16.4458C16.8196 19.1304 17.1782 19.2816 17.4425 19.5507C17.7069 19.8197 17.8554 20.1847 17.8554 20.5652C17.8554 20.9457 17.7069 21.3107 17.4425 21.5798C17.1782 21.8488 16.8196 22 16.4458 22H1.40964C1.03578 22 0.677232 21.8488 0.412874 21.5798C0.148515 21.3107 0 20.9457 0 20.5652ZM29.6024 20.5652C32.0948 20.5652 34.4851 19.5575 36.2475 17.7636C38.0099 15.9698 39 13.5369 39 11C39 8.46315 38.0099 6.0302 36.2475 4.23637C34.4851 2.44254 32.0948 1.43478 29.6024 1.43478C27.11 1.43478 24.7197 2.44254 22.9573 4.23637C21.1949 6.0302 20.2048 8.46315 20.2048 11C20.2048 13.5369 21.1949 15.9698 22.9573 17.7636C24.7197 19.5575 27.11 20.5652 29.6024 20.5652ZM31.012 7.17391C31.012 6.79339 30.8635 6.42844 30.5992 6.15937C30.3348 5.8903 29.9763 5.73913 29.6024 5.73913C29.2285 5.73913 28.87 5.8903 28.6056 6.15937C28.3413 6.42844 28.1928 6.79339 28.1928 7.17391V10.7054C28.1928 11.0497 28.3149 11.3845 28.5367 11.6447L30.4162 13.8523C30.5374 13.9948 30.685 14.1115 30.8505 14.1959C31.016 14.2803 31.1963 14.3307 31.3809 14.3442C31.5656 14.3577 31.751 14.3341 31.9267 14.2746C32.1024 14.2152 32.2648 14.1211 32.4048 13.9977C32.5447 13.8744 32.6594 13.7242 32.7423 13.5557C32.8253 13.3872 32.8748 13.2038 32.888 13.0159C32.9013 12.8279 32.8781 12.6391 32.8196 12.4603C32.7612 12.2815 32.6688 12.1162 32.5476 11.9737L31.012 10.1697V7.17391Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">Minutes</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Not Days</div>
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
          <p className="text-xl text-gray-600 mb-8">You can't reach prospects without their email.</p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            With Email Finder, you <span className="font-semibold">eliminate guesswork</span> and connect with decision-makers directly   driving more conversations, more meetings, and more closed deals.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Find Emails Today
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Start discovering verified business email addresses in seconds.
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
