import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

export default function EmailVerification() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20.8898 1.18322C20.6117 0.738926 20.2021 0.392378 19.7179 0.191815C19.2337 -0.00874697 18.699 -0.0533451 18.1882 0.0642304L14.5634 0.896919C14.1919 0.982308 13.8059 0.982308 13.4344 0.896919L9.80948 0.0642304C9.29874 -0.0533451 8.76405 -0.00874697 8.27984 0.191815C7.79563 0.392378 7.38599 0.738926 7.10795 1.18322L5.13221 4.33655C4.9306 4.65914 4.65843 4.93133 4.33586 5.13496L1.18274 7.11084C0.73924 7.38865 0.393222 7.79765 0.192716 8.28106C-0.00779016 8.76447 -0.0528394 9.29832 0.0638212 9.8085L0.896456 13.4377C0.981531 13.8085 0.981531 14.1938 0.896456 14.5647L0.0638212 18.1918C-0.0532928 18.7023 -0.00847028 19.2366 0.192058 19.7204C0.392585 20.2043 0.738856 20.6136 1.18274 20.8915L4.33586 22.8674C4.65843 23.069 4.9306 23.3412 5.13423 23.6638L7.10997 26.8171C7.6785 27.7264 8.76314 28.1761 9.80948 27.9361L13.4344 27.1034C13.8059 27.018 14.1919 27.018 14.5634 27.1034L18.1903 27.9361C18.7007 28.0532 19.235 28.0084 19.7188 27.8079C20.2026 27.6073 20.6119 27.261 20.8898 26.8171L22.8655 23.6638C23.0671 23.3412 23.3393 23.069 23.6619 22.8674L26.817 20.8915C27.2609 20.6132 27.607 20.2034 27.8072 19.7192C28.0074 19.235 28.0517 18.7004 27.9339 18.1898L27.1033 14.5647C27.0179 14.1932 27.0179 13.8072 27.1033 13.4356L27.9359 9.8085C28.0532 9.29824 28.0087 8.7641 27.8086 8.28029C27.6084 7.79649 27.2625 7.38704 26.819 7.10882L23.6639 5.13295C23.3418 4.93096 23.0695 4.65869 22.8675 4.33655L20.8898 1.18322ZM19.8757 9.50406C20.0004 9.27475 20.0313 9.00601 19.9619 8.75438C19.8925 8.50275 19.7282 8.28786 19.5036 8.15491C19.279 8.02196 19.0115 7.98132 18.7576 8.04155C18.5036 8.10177 18.2829 8.25816 18.1419 8.47781L12.8699 17.4015L9.6865 14.353C9.59206 14.256 9.47906 14.1791 9.35424 14.1267C9.22941 14.0744 9.09532 14.0477 8.95996 14.0483C8.82461 14.0489 8.69075 14.0767 8.56639 14.1302C8.44203 14.1836 8.3297 14.2615 8.23611 14.3593C8.14252 14.4571 8.06958 14.5728 8.02165 14.6994C7.97371 14.826 7.95177 14.9609 7.95711 15.0962C7.96246 15.2314 7.99499 15.3642 8.05277 15.4867C8.11054 15.6091 8.19238 15.7186 8.2934 15.8087L12.3941 19.7383C12.5038 19.8432 12.6359 19.922 12.7803 19.9688C12.9248 20.0155 13.078 20.029 13.2284 20.0083C13.3788 19.9876 13.5226 19.9331 13.6491 19.849C13.7755 19.7649 13.8813 19.6533 13.9585 19.5225L19.8757 9.50406Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "3-Layer Verification Process",
      description: "Each email is validated through syntax, domain, and mailbox-level checks   plus human QA for premium accuracy."
    },
    {
      icon: (
        <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7818 4.26505L12.7584 4.26712C9.22059 4.7621 5.98481 6.47667 3.64337 9.097C2.30784 10.5842 1.30224 12.3223 0.689223 14.2031C0.076205 16.0838 -0.131104 18.0668 0.0802093 20.0286C0.447366 23.5348 2.12437 26.7894 4.79485 29.1785C7.46533 31.5675 10.9446 32.9258 14.5764 32.997C18.2081 33.0683 21.7412 31.8476 24.509 29.5653C27.2769 27.283 29.0882 24.0968 29.6011 20.6079V20.5873C29.6468 20.2793 29.6823 19.9699 29.7074 19.6597C29.7182 19.5182 29.6988 19.3761 29.6504 19.2422C29.602 19.1084 29.5257 18.9857 29.4262 18.8818C29.3266 18.7779 29.2061 18.695 29.072 18.6384C28.938 18.5817 28.7933 18.5526 28.6471 18.5527H18.0639C17.6453 18.5527 17.2309 18.4727 16.8442 18.3173C16.4576 18.1619 16.1062 17.9341 15.8103 17.647C15.5143 17.3599 15.2796 17.019 15.1194 16.6439C14.9592 16.2687 14.8768 15.8666 14.8768 15.4606V5.19269C14.8769 5.05066 14.8468 4.91013 14.7883 4.77993C14.7298 4.64973 14.6442 4.53266 14.5369 4.43608C14.4295 4.33949 14.3028 4.26547 14.1646 4.21866C14.0264 4.17184 13.8797 4.15325 13.7337 4.16405C13.4136 4.18878 13.0963 4.22245 12.7818 4.26505ZM33.9972 14.7102C33.9759 15.7368 33.0623 16.4913 32.0063 16.4913H19.1262C18.5627 16.4913 18.0223 16.2741 17.6238 15.8875C17.2254 15.5009 17.0015 14.9766 17.0015 14.4299V1.9336C17.0015 0.90702 17.7792 0.0226754 18.8373 0.00206127L19.1262 1.51989e-08C21.1038 -8.80399e-05 23.0615 0.382437 24.8848 1.1252C26.7081 1.86796 28.3605 2.95603 29.7452 4.32578C31.1299 5.69552 32.2192 7.31943 32.9493 9.10249C33.6794 10.8856 34.0356 12.792 33.9972 14.7102Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Bulk & Real-Time Verification",
      description: "Upload large lists or verify emails instantly before adding them to your CRM or campaigns."
    },
    {
      icon: (
        <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7818 4.26505L12.7584 4.26712C9.22059 4.7621 5.98481 6.47667 3.64337 9.097C2.30784 10.5842 1.30224 12.3223 0.689223 14.2031C0.076205 16.0838 -0.131104 18.0668 0.0802093 20.0286C0.447366 23.5348 2.12437 26.7894 4.79485 29.1785C7.46533 31.5675 10.9446 32.9258 14.5764 32.997C18.2081 33.0683 21.7412 31.8476 24.509 29.5653C27.2769 27.283 29.0882 24.0968 29.6011 20.6079V20.5873C29.6468 20.2793 29.6823 19.9699 29.7074 19.6597C29.7182 19.5182 29.6988 19.3761 29.6504 19.2422C29.602 19.1084 29.5257 18.9857 29.4262 18.8818C29.3266 18.7779 29.2061 18.695 29.072 18.6384C28.938 18.5817 28.7933 18.5526 28.6471 18.5527H18.0639C17.6453 18.5527 17.2309 18.4727 16.8442 18.3173C16.4576 18.1619 16.1062 17.9341 15.8103 17.647C15.5143 17.3599 15.2796 17.019 15.1194 16.6439C14.9592 16.2687 14.8768 15.8666 14.8768 15.4606V5.19269C14.8769 5.05066 14.8468 4.91013 14.7883 4.77993C14.7298 4.64973 14.6442 4.53266 14.5369 4.43608C14.4295 4.33949 14.3028 4.26547 14.1646 4.21866C14.0264 4.17184 13.8797 4.15325 13.7337 4.16405C13.4136 4.18878 13.0963 4.22245 12.7818 4.26505ZM33.9972 14.7102C33.9759 15.7368 33.0623 16.4913 32.0063 16.4913H19.1262C18.5627 16.4913 18.0223 16.2741 17.6238 15.8875C17.2254 15.5009 17.0015 14.9766 17.0015 14.4299V1.9336C17.0015 0.90702 17.7792 0.0226754 18.8373 0.00206127L19.1262 1.51989e-08C21.1038 -8.80399e-05 23.0615 0.382437 24.8848 1.1252C26.7081 1.86796 28.3605 2.95603 29.7452 4.32578C31.1299 5.69552 32.2192 7.31943 32.9493 9.10249C33.6794 10.8856 34.0356 12.792 33.9972 14.7102Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Bounce-Free Campaigns",
      description: "Reduce bounce rates, improve inbox placement, and protect your sender score by removing invalid and disposable addresses."
    },
    {
      icon: (
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.875 0.9375C1.875 0.68886 1.77623 0.450403 1.60041 0.274587C1.4246 0.098772 1.18614 0 0.9375 0C0.68886 0 0.450403 0.098772 0.274587 0.274587C0.098772 0.450403 0 0.68886 0 0.9375V22.3125C0 23.5557 0.49386 24.748 1.37294 25.6271C2.25201 26.5061 3.4443 27 4.6875 27H26.0625C26.3111 27 26.5496 26.9012 26.7254 26.7254C26.9012 26.5496 27 26.3111 27 26.0625C27 25.8139 26.9012 25.5754 26.7254 25.3996C26.5496 25.2238 26.3111 25.125 26.0625 25.125H4.6875C3.94158 25.125 3.22621 24.8287 2.69876 24.3012C2.17132 23.7738 1.875 23.0584 1.875 22.3125V0.9375ZM16.5 5.4375C16.5 4.92 16.92 4.5 17.4375 4.5H24.9375C25.455 4.5 25.875 4.92 25.875 5.4375V12.9375C25.875 13.0606 25.8508 13.1825 25.8036 13.2963C25.7565 13.41 25.6875 13.5134 25.6004 13.6004C25.5134 13.6875 25.41 13.7565 25.2963 13.8036C25.1825 13.8508 25.0606 13.875 24.9375 13.875C24.8144 13.875 24.6925 13.8508 24.5787 13.8036C24.465 13.7565 24.3616 13.6875 24.2746 13.6004C24.1875 13.5134 24.1185 13.41 24.0714 13.2963C24.0242 13.1825 24 13.0606 24 12.9375V7.701L16.413 15.288C16.2425 15.4583 16.013 15.5564 15.7721 15.562C15.5312 15.5676 15.2974 15.4802 15.1193 15.318L11.6558 12.1702L6.1005 17.7255C5.92466 17.9013 5.68617 18.0001 5.4375 18.0001C5.18883 18.0001 4.95034 17.9013 4.7745 17.7255C4.59866 17.5497 4.49988 17.3112 4.49988 17.0625C4.49988 16.8138 4.59866 16.5753 4.7745 16.3995L10.962 10.212C11.1325 10.0417 11.362 9.94356 11.6029 9.93797C11.8438 9.93239 12.0776 10.0198 12.2557 10.182L15.7192 13.3298L22.674 6.375H17.4375C16.92 6.375 16.5 5.955 16.5 5.4375Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Spam Trap & Catch-All Detection",
      description: "Automatically detect risky or hidden traps that can harm your email reputation."
    },
    {
      icon: (
        <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 4.99568L14 0L0 4.99568V16.5C0 22.3906 3.5476 26.5085 6.8544 29.0648C8.85091 30.5927 11.0407 31.8386 13.3644 32.7688C13.5231 32.8297 13.6827 32.8877 13.8432 32.9429L14 33L14.1596 32.9429C14.4657 32.8345 14.7691 32.7184 15.0696 32.5946C17.2336 31.6856 19.2754 30.4995 21.1456 29.0648C24.4538 26.5085 28 22.3906 28 16.5V4.99568ZM12.6014 21.3744L6.664 15.3182L8.6436 13.2985L12.6028 17.3364L20.5226 9.26198L22.5036 11.2802L12.6014 21.3744Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "API & Automation Ready",
      description: "Use the Cefer API to verify emails in real-time as you collect or enrich data."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl p-12 md:p-16 text-center shadow-lg min-h-[320px] flex flex-col items-center justify-center overflow-hidden">
            {/* Abstract Blobs */}
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Verify Emails Before <span className="text-gradient-cefer">You Send</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4 max-w-5xl mx-auto">
                Stop wasting time and money on bounced emails. Cefer's Email Verification ensures every contact in your list is valid, deliverable, and ready for outreach   protecting your sender reputation and improving campaign performance.
              </p>
              <p className="text-lg text-gray-700 max-w-5xl mx-auto">
                Clean data = higher deliverability, better engagement, and faster conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Email Verification */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What Is <span className="text-gradient-cefer">Email Verification?</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            Email Verification in Cefer checks every email address through a multi-layer verification process to confirm whether it's real, active, and safe to send. It automatically detects invalid, risky, or temporary emails   helping sales and marketing teams maintain clean, high-quality contact lists.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            You can verify emails individually, in bulk, or via API integration.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Key <span className="text-gradient-cefer">Features</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Protect your sender reputation before you hit send</p>
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
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              A marketing team uploads 25,000 contacts before launching a new campaign. Cefer's Email Verification cleans the list, removing 2,000 invalid emails and 500 temporary domains   boosting their delivery rate to 98% and engagement by 40%.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49777 29C1.11738 29 0.77266 28.8429 0.463596 28.5287C0.154532 28.2146 0 27.8642 0 27.4775V23.6713C0 21.4963 0.665676 19.575 1.99703 17.9075C3.32838 16.24 5.04012 15.1767 7.13224 14.7175C6.18128 15.3942 5.44428 16.2458 4.92125 17.2724C4.39822 18.299 4.1367 19.4049 4.1367 20.59V27.4775C4.1367 27.7433 4.17236 28.0092 4.24369 28.275C4.31501 28.5408 4.43388 28.7825 4.6003 29H1.49777ZM6.73997 29C6.33581 29 5.98538 28.8492 5.68868 28.5476C5.39198 28.246 5.24315 27.8893 5.2422 27.4775V20.59C5.2422 18.8983 5.83085 17.4604 7.00814 16.2763C8.18544 15.0921 9.60571 14.5 11.2689 14.5H18.0089C19.6731 14.5 21.0877 15.0921 22.2526 16.2763C23.4175 17.4604 24 18.8983 24 20.59V22.91C24 24.6017 23.4175 26.0396 22.2526 27.2238C21.0877 28.4079 19.6731 29 18.0089 29H6.73997ZM12.0178 11.455C10.4487 11.455 9.11738 10.8992 8.02378 9.7875C6.93016 8.67583 6.38336 7.3225 6.38336 5.7275C6.38336 4.1325 6.93016 2.77917 8.02378 1.6675C9.11738 0.555834 10.4487 0 12.0178 0C13.5869 0 14.9183 0.555834 16.0119 1.6675C17.1055 2.77917 17.6523 4.1325 17.6523 5.7275C17.6523 7.3225 17.1055 8.67583 16.0119 9.7875C14.9183 10.8992 13.5869 11.455 12.0178 11.455Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">25,000</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contacts Identified</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.875 0.9375C1.875 0.68886 1.77623 0.450403 1.60041 0.274587C1.4246 0.098772 1.18614 0 0.9375 0C0.68886 0 0.450403 0.098772 0.274587 0.274587C0.098772 0.450403 0 0.68886 0 0.9375V22.3125C0 23.5557 0.49386 24.748 1.37294 25.6271C2.25201 26.5061 3.4443 27 4.6875 27H26.0625C26.3111 27 26.5496 26.9012 26.7254 26.7254C26.9012 26.5496 27 26.3111 27 26.0625C27 25.8139 26.9012 25.5754 26.7254 25.3996C26.5496 25.2238 26.3111 25.125 26.0625 25.125H4.6875C3.94158 25.125 3.22621 24.8287 2.69876 24.3012C2.17132 23.7738 1.875 23.0584 1.875 22.3125V0.9375ZM16.5 5.4375C16.5 4.92 16.92 4.5 17.4375 4.5H24.9375C25.455 4.5 25.875 4.92 25.875 5.4375V12.9375C25.875 13.0606 25.8508 13.1825 25.8036 13.2963C25.7565 13.41 25.6875 13.5134 25.6004 13.6004C25.5134 13.6875 25.41 13.7565 25.2963 13.8036C25.1825 13.8508 25.0606 13.875 24.9375 13.875C24.8144 13.875 24.6925 13.8508 24.5787 13.8036C24.465 13.7565 24.3616 13.6875 24.2746 13.6004C24.1875 13.5134 24.1185 13.41 24.0714 13.2963C24.0242 13.1825 24 13.0606 24 12.9375V7.701L16.413 15.288C16.2425 15.4583 16.013 15.5564 15.7721 15.562C15.5312 15.5676 15.2974 15.4802 15.1193 15.318L11.6558 12.1702L6.1005 17.7255C5.92466 17.9013 5.68617 18.0001 5.4375 18.0001C5.18883 18.0001 4.95034 17.9013 4.7745 17.7255C4.59866 17.5497 4.49988 17.3112 4.49988 17.0625C4.49988 16.8138 4.59866 16.5753 4.7745 16.3995L10.962 10.212C11.1325 10.0417 11.362 9.94356 11.6029 9.93797C11.8438 9.93239 12.0776 10.0198 12.2557 10.182L15.7192 13.3298L22.674 6.375H17.4375C16.92 6.375 16.5 5.955 16.5 5.4375Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">{"99%"}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Delivery Rate</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M14.8787 0.527498C15.7977 -0.574773 17.5878 0.178494 17.4424 1.6065L16.4157 11.6375H24.7206C24.9969 11.6376 25.2674 11.7164 25.5006 11.8647C25.7337 12.013 25.9198 12.2247 26.0369 12.4749C26.1541 12.7252 26.1976 13.0036 26.1623 13.2777C26.1269 13.5517 26.0142 13.81 25.8374 14.0223L11.2955 31.4725C10.3765 32.5748 8.5864 31.8215 8.73182 30.3935L9.75848 20.3625H1.45364C1.17732 20.3624 0.906756 20.2836 0.673621 20.1353C0.440486 19.987 0.254433 19.7753 0.137249 19.5251C0.0200657 19.2748 -0.0233983 18.9964 0.0119471 18.7224C0.0472926 18.4483 0.159984 18.19 0.336826 17.9777L14.8787 0.527498Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">40%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Engagement</div>
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
          <p className="text-xl text-gray-600 mb-8">Bad data costs you more than you think.</p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Cefer keeps your outreach safe, compliant, and effective   ensuring every email you send reaches a verified, real inbox.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Clean Your List Today
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Verify your emails with enterprise-grade accuracy.
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
