import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

const benefits = [
  {
    title: "30% Recurring Commission",
    desc: "Earn 30% recurring commission for every paid subscription through your referrals",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9769 5.88907C12.9983 2.90013 17.1282 2.80961 18.3391 5.61751L18.4416 5.89078L19.8199 9.92159C20.1358 10.846 20.6462 11.6919 21.3168 12.4023C21.9874 13.1126 22.8025 13.6709 23.7072 14.0395L24.0779 14.1778L28.1087 15.5545C31.0976 16.5758 31.1881 20.7057 28.382 21.9166L28.1087 22.0191L24.0779 23.3975C23.1531 23.7131 22.3069 24.2235 21.5962 24.8941C20.8856 25.5647 20.327 26.3799 19.9583 27.2848L19.8199 27.6537L18.4433 31.6862C17.4219 34.6752 13.2921 34.7657 12.0828 31.9595L11.9769 31.6862L10.6003 27.6554C10.2846 26.7307 9.77427 25.8844 9.10367 25.1738C8.43307 24.4631 7.61783 23.9045 6.71296 23.5358L6.34404 23.3975L2.31323 22.0208C-0.677418 20.9995 -0.76794 16.8696 2.03996 15.6604L2.31323 15.5545L6.34404 14.1778C7.26845 13.862 8.11437 13.3515 8.82473 12.6809C9.5351 12.0103 10.0934 11.1952 10.462 10.2905L10.6003 9.92159L11.9769 5.88907ZM28.8738 3.08609e-07C29.1934 -4.03033e-07 29.5065 0.0896313 29.7776 0.258709C30.0487 0.427786 30.267 0.669528 30.4076 0.956462L30.4896 1.15629L31.0874 2.90867L32.8415 3.50646C33.1617 3.61525 33.4424 3.81665 33.648 4.08514C33.8536 4.35364 33.9749 4.67713 33.9965 5.01463C34.0181 5.35213 33.939 5.68844 33.7693 5.98094C33.5995 6.27344 33.3467 6.50896 33.043 6.65766L32.8415 6.73964L31.0891 7.33743L30.4913 9.09151C30.3823 9.41164 30.1808 9.6922 29.9122 9.89766C29.6436 10.1031 29.32 10.2242 28.9825 10.2456C28.6451 10.267 28.3088 10.1878 28.0164 10.0179C27.724 9.848 27.4886 9.59514 27.3401 9.29135L27.2581 9.09151L26.6603 7.33914L24.9062 6.74135C24.586 6.63256 24.3053 6.43116 24.0997 6.16267C23.8941 5.89417 23.7728 5.57068 23.7512 5.23318C23.7296 4.89568 23.8087 4.55937 23.9784 4.26687C24.1482 3.97437 24.401 3.73885 24.7047 3.59015L24.9062 3.50817L26.6586 2.91038L27.2564 1.15629C27.3716 0.818844 27.5895 0.525898 27.8795 0.318534C28.1696 0.11117 28.5173 -0.000213977 28.8738 3.08609e-07Z" fill="#0E7BF5"/>
</svg>
    ),
  },
  {
    title: "Marketing Materials",
    desc: "Access to marketing materials, banners, and your dedicated affiliate dashboard",
    icon: (
      <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L14 16.3084V28.5518L21 32V16.3084L35 0H0Z" fill="#0E7BF5"/>
</svg>
    ),
  },
  {
    title: "Monthly Payouts",
    desc: "Receive monthly payouts via PayPal or wire transfer — hassle-free",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.1327 19.9931C17.3807 19.2743 18.471 18.3129 19.3387 17.1661C19.059 16.7329 18.86 16.253 18.7513 15.7494L18.7104 15.5608C18.5932 15.0223 18.3171 14.531 17.9177 14.1499C17.5182 13.7688 17.0135 13.5153 16.4684 13.4218C12.0102 12.6503 12.0102 6.2762 16.4684 5.50248C16.9949 5.4122 17.4841 5.17246 17.8772 4.81205C18.2703 4.45164 18.5507 3.98588 18.6846 3.47066C17.6362 2.33273 16.3533 1.43397 14.9238 0.835942C13.4942 0.237916 11.9518 -0.0452401 10.4022 0.00586979C8.85251 0.0569797 7.33226 0.441148 5.94555 1.13206C4.55885 1.82297 3.33845 2.80429 2.36797 4.00881C1.39749 5.21333 0.699856 6.61257 0.322858 8.11069C-0.0541406 9.6088 -0.101594 11.1704 0.183749 12.6885C0.469091 14.2066 1.08049 15.6453 1.97605 16.9061C2.87162 18.1668 4.03019 19.2199 5.37241 19.9931V22.4986C5.37241 23.067 5.5991 23.6121 6.00261 24.0141C6.40612 24.416 6.95339 24.6418 7.52404 24.6418H13.9789C14.5496 24.6418 15.0969 24.416 15.5004 24.0141C15.9039 23.6121 16.1306 23.067 16.1306 22.4986L16.1327 19.9931ZM5.37456 28.3926C5.37456 27.9662 5.54458 27.5574 5.84721 27.2559C6.14984 26.9545 6.5603 26.7851 6.98828 26.7851H14.519C14.947 26.7851 15.3574 26.9545 15.6601 27.2559C15.9627 27.5574 16.1327 27.9662 16.1327 28.3926C16.1327 28.8189 15.9627 29.2277 15.6601 29.5292C15.3574 29.8306 14.947 30 14.519 30H6.98828C6.5603 30 6.14984 29.8306 5.84721 29.5292C5.54458 29.2277 5.37456 28.8189 5.37456 28.3926ZM21.0384 3.67427C21.4322 1.8825 23.9926 1.87179 24.4015 3.65927L24.4208 3.745L24.4595 3.91218C24.6918 4.89119 25.2071 5.78088 25.9418 6.47115C26.6764 7.16142 27.5981 7.62196 28.5928 7.79577C30.4691 8.12155 30.4691 10.8049 28.5928 11.1307C27.5924 11.3053 26.6658 11.7699 25.9291 12.4664C25.1924 13.1629 24.6782 14.0603 24.4509 15.0464L24.4015 15.2651C23.9926 17.0547 21.43 17.044 21.0341 15.25L20.9933 15.0636C20.7763 14.0737 20.2684 13.1706 19.5342 12.4694C18.8 11.7682 17.8727 11.3006 16.8707 11.1264C14.9967 10.8028 14.9967 8.12369 16.8707 7.79792C17.8692 7.62495 18.7938 7.16074 19.5272 6.46407C20.2607 5.76739 20.7702 4.86958 20.9911 3.88431L21.0234 3.745L21.0384 3.67427Z" fill="#0E7BF5"/>
</svg>
    ),
  },
  {
    title: "Global Program",
    desc: "Open to affiliates worldwide — promote Cefer from anywhere",
    icon: (
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_136_20)">
<path d="M19.4674 0C30.2192 0 38.9348 8.71555 38.9348 19.4674C38.9348 30.2192 30.2192 38.9348 19.4674 38.9348C8.71555 38.9348 0 30.2192 0 19.4674C0 8.71555 8.71555 0 19.4674 0ZM19.4674 2.7157C15.0246 2.7157 10.7637 4.48061 7.62216 7.62216C4.48061 10.7637 2.7157 15.0246 2.7157 19.4674C2.7157 23.9102 4.48061 28.1711 7.62216 31.3126C10.7637 34.4542 15.0246 36.2191 19.4674 36.2191C23.9102 36.2191 28.1711 34.4542 31.3126 31.3126C34.4542 28.1711 36.2191 23.9102 36.2191 19.4674C36.2191 15.0246 34.4542 10.7637 31.3126 7.62216C28.1711 4.48061 23.9102 2.7157 19.4674 2.7157ZM23.4543 6.79023C24.72 7.26873 25.9035 7.94126 26.9623 8.78369C27.205 8.97057 27.4406 9.16979 27.669 9.38134C27.7105 9.41768 27.7508 9.45661 27.7897 9.49814C28.4282 10.088 29.0084 10.7518 29.5223 11.4643L29.7364 11.7505C29.8597 11.9348 29.9791 12.123 30.0946 12.3151C30.1881 12.4656 30.2783 12.6188 30.3652 12.7745C30.4639 12.9484 30.5586 13.1256 30.6495 13.306C30.7507 13.5071 30.8474 13.7122 30.9395 13.9211C31.0038 14.0632 31.0758 14.2092 31.1342 14.3611C31.2757 14.7141 31.4035 15.0723 31.5177 15.4357L31.6189 15.8056C31.8142 16.4988 31.9541 17.2064 32.0375 17.9217C32.0511 18.0502 32.0706 18.1864 32.0803 18.313C32.1205 18.7322 32.142 19.154 32.1446 19.5784C32.144 20.4077 32.0678 21.2352 31.9168 22.0507L31.8389 22.4732C31.761 22.8417 31.6702 23.2051 31.5664 23.5633C30.5755 23.1097 29.4113 22.442 29.1076 21.7081C28.5548 20.3843 27.083 19.7224 26.4834 18.0171C25.4964 15.1943 26.8066 15.2683 26.9896 13.5162C27.0752 12.6947 26.4834 12.5234 25.7028 12.8582C23.8806 13.6233 23.2635 13.3293 22.8956 11.9569C22.5277 10.5883 22.8956 10.2068 22.8956 10.2068C21.6536 10.343 21.6069 8.83041 22.2512 8.44885C22.699 8.19188 23.0786 7.40345 23.4543 6.79023ZM18.2487 15.1787C19.3973 14.6531 20.4583 14.4643 20.3181 13.561C20.1818 12.6674 19.8587 12.0016 18.0638 12.0016C16.2689 12.0016 17.0515 14.4643 15.5798 12.9945C14.108 11.5344 15.901 11.9121 16.6368 11.5792C17.3746 11.2444 18.1105 9.87191 16.8218 9.77458C15.535 9.68308 15.8095 10.343 14.7972 9.96925C13.7849 9.58769 13.3254 11.2911 12.6791 11.0536C12.2547 10.894 11.1159 10.0179 10.3605 9.15551C8.81925 10.4961 7.59906 12.166 6.79023 14.0418C7.01021 16.5862 8.3554 17.9217 8.3554 17.9217C8.3554 17.9217 9.0465 19.5784 13.1892 21.6146C13.1892 21.6146 13.9679 21.6614 13.049 20.7172C12.1301 19.7691 11.1159 18.5855 12.2664 17.9723C13.415 17.3513 13.7401 17.4038 14.0165 18.5427C14.291 19.6796 15.2138 19.0099 15.3033 17.9217C15.3968 16.8373 17.0982 15.7043 18.2487 15.1787ZM17.3727 20.9002C19.3545 20.9002 19.1695 21.5173 20.7347 22.8956C22.298 24.2661 21.4706 25.6386 20.6861 26.682C19.9054 27.7216 19.2143 28.9013 18.8464 31.0388C18.4765 33.1685 17.5109 31.6501 17.1917 31.1303C16.8685 30.6066 16.3623 30.1355 16.5025 27.9571C16.6388 25.7807 15.1651 27.0616 14.6609 24.2194C14.1547 21.381 15.3968 20.9021 17.3746 20.9021M27.0636 22.7788C27.5911 22.442 28.8546 23.32 28.582 24.2447C28.3036 25.1694 27.4315 24.6477 26.9935 24.2447C26.5555 23.8437 26.5321 23.1097 27.0636 22.7788Z" fill="#0E7BF5"/>
</g>
<defs>
<clipPath id="clip0_136_20">
<rect width="38.9348" height="38.9348" fill="white"/>
</clipPath>
</defs>
</svg>
    ),
  },
];

const steps = [
  {
    num: "1",
    title: "Apply",
    desc: "Join the affiliate program — it only takes 2 minutes to get started",
  },
  {
    num: "2",
    title: "Promote",
    desc: "Share your unique referral link via your website, email, or social channels",
  },
  {
    num: "3",
    title: "Earn",
    desc: "Receive recurring commissions for every paid customer who signs up through your link",
  },
];

export default function Affiliate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* ── Hero ── */}
      <section className="py-16 px-4">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl px-8 py-16 md:py-20 text-center shadow-md min-h-[260px] flex flex-col items-center justify-center overflow-hidden">
            {/* Blobs */}
            <div className="hidden md:block absolute left-[-40px] top-8 w-[200px] h-[200px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute left-32 top-14 w-[80px] h-[80px] rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 opacity-90 blur-xl z-0 blob-float-3" />
            <div className="hidden md:block absolute right-[-40px] top-6 w-[180px] h-[180px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-300 opacity-80 blur-2xl z-0 blob-float-2" />

            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Affiliate Program —{" "}
                <span className="text-gradient-cefer">Cefer</span>
              </h1>
              <p className="mt-3 text-gray-600 font-semibold text-base md:text-lg">
                Earn by Sharing Cefer
              </p>
              <p className="mt-4 text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
                Join the Cefer Affiliate Program and get rewarded for helping businesses access high-quality, verified B2B data. Whether you're a marketer, consultant, or agency, our program makes it easy to earn recurring commissions by referring new customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Partner ── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Partner with{" "}
            <span className="text-gradient-cefer">Cefer?</span>
          </h2>
          <p className="mt-3 text-gray-500 text-base">
            Earn recurring commissions while helping businesses grow
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center mt-0.5">
                {b.icon}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm md:text-base">{b.title}</p>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            How It <span className="text-gradient-cefer">Works</span>
          </h2>
        </div>

        {/* Desktop: SVG illustration */}
        <div className="hidden md:block w-full max-w-5xl mx-auto">
          <img
            src="/123.svg"
            alt="Steps 1 2 3"
            className="w-full select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Mobile: vertical step list with big gradient numbers */}
        <div className="md:hidden max-w-sm mx-auto mt-6 flex flex-col gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4">
              {/* Big plain gradient number */}
              <span
                className="font-extrabold leading-none select-none flex-shrink-0"
                style={{
                  fontSize: "5rem",
                  lineHeight: 1,
                  background: "linear-gradient(to bottom, #b8d3f5 0%, #0e7bf5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {i + 1}
              </span>
              {/* Text */}
              <div className="pt-3">
                <p className="font-bold text-gray-900 text-base">{step.title}</p>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Start Earning CTA ── */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            Start Earning Today
          </h2>
          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Be part of Cefer's growth journey and turn your network into a steady revenue stream.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Join the Affiliate Program
            </a>
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
