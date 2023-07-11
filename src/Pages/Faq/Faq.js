import React, { useEffect } from "react";
import { Collapse } from "antd";
import Header from "../../components/navigation/Header";
import Footer from "../../components/navigation/Footer/Footer";

const { Panel } = Collapse;

const Faq = () => {
  useEffect(() => {
    document.title = "FAQ | Chainraise";
  }, []);
  return (
    <>
      <Header />
      <div className="mt-5 mb-10">
        <div className="m-auto flex w-full max-w-5xl flex-col justify-center">
          <div className="m-auto">
            <h1 className="text-center font-sans text-xl font-bold text-[#20DEFD]">
              For Users
            </h1>
            <h1 className="font-sans text-[50px] font-bold text-black">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="mt-5">
            <Collapse accordion className="w-full">
              <Panel
                header="What Is Mobilize Solutions"
                key="1"
                className="Panel-faq"
              >
                <p>
                  ChainRaise is a digital asset platform, that raises money for
                  real estate opportunities and businesses. Using blockchain
                  technology, we make startup investment and fundraising safe
                  and secure for everyone involved.
                </p>
              </Panel>
              <Panel header="Who we will get help?" key="2">
                <p>
                  If you’re over 18, you can invest with us! (If you’re younger,
                  good for you for getting an early start! You’ll need a parent
                  to set up a trust, or something equivalent, so that they can
                  invest in your name.) The SEC Investor Bulletin, linked here,
                  will give you some additional information about how much money
                  you can or should invest using platforms like ChainRaise.
                  Because of the risks involved, there are some limitations in
                  place contingent on your annual income and net worth.
                </p>
              </Panel>
              <Panel header="Is There Any Fee for that?" key="3">
                <p>
                  For more than two hundred years investors have publicly traded
                  stocks and bonds. But those types of investments have their
                  limitations, leading investors to alternative securities for
                  the purpose of generating income, diversifying portfolios,
                  boosting returns, or raising funds for other projects. These
                  alternatives include real estate, stock or membership units in
                  privately-held businesses, private equity, commodities,
                  venture capital, farmland/timberland, mineral rights, tax lien
                  certificates, hedge funds, annuities, art and collectibles, or
                  even wine collections or antique coins. In short, a multitude
                  of investment options are available beyond the floor of the
                  New York Stock Exchange. Why do people invest in alternative
                  securities? Some of the most prevalent reasons include
                  favorable economic conditions, less dependence on typical
                  market fluctuations, leveraging specific knowledge or skills,
                  tax advantages, illiquid investments, higher fees, and market
                  volatility.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>

      {/* <div className="mt-20 flex w-full justify-center bg-[#EEEEEE] py-4">
        <div className="flex w-full max-w-5xl justify-between">
          <h3 className="text-[15px]">
            Copyright© 2022 ChainRaise LLC | All rights reserved.
          </h3>
          <div className="space-x-5">
            <a>Educational Materials</a>
            <a>Privacy Policy</a>
            <a>Terms Of Use</a>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F9F9F9] p-8">
        <p className="mb-[1.7em] text-sm">
          This website, which we refer to as the “Site,” is used by two
          different companies:
        </p>
        <p className="mb-[1.7em] text-sm">
          ChainRaise Portal LLC and ChainRaise Fund LLC.
        </p>
        <p className="mb-[1.7em] text-sm">
          ChainRaise Fund LLC offers investments under Rule 506(c) issued by the
          Securities and Exchange Commission (SEC). These investments are
          offered to accredited investors only.
        </p>
        <p className="mb-[1.7em] text-sm">
          ChainRaise Portal LLC is a “funding portal” as defined in section
          3(a)(80) of the Securities Exchange Act of 1934. Here, you can review
          investment opportunities of companies offering securities under
          section 4(a)(6) of the Securities Act of 1933, also known as
          Regulation Crowdfunding or Reg CF. These investments are offered to
          everyone, not just to accredited investors.
        </p>
        <p className="mb-[1.7em] text-sm">
          By using this Site, you are subject to our Terms of Use and our
          Privacy Policy. Please read these carefully before using the Site.
        </p>
        <p className="mb-[1.7em] text-sm">
          Although our website offers investors the opportunity to invest in a
          variety of companies, we do not make recommendations regarding the
          appropriateness of a particular investment opportunity for any
          particular investor. We are not investment advisers. Investors must
          make their own investment decisions, either alone or with their
          personal advisors.
        </p>
        <p className="mb-[1.7em] text-sm">
          You should view all of the investment opportunities on our website as
          risky. You should consider investing only if you can afford to lose
          your entire investment.
        </p>
        <p className="mb-[1.7em] text-sm">
          We provide financial projections for some of the investment
          opportunities listed on the Site. All such financial projections are
          only estimates based on current conditions and current assumptions.
          The actual result of any investment is likely to be different than the
          original projection, often by a large amount.
        </p>
        <p className="mb-[1.7em] text-sm">
          Neither the Securities and Exchange Commission nor any state agency
          has reviewed the investment opportunities listed on the Site.
        </p>
        <p className="mb-[1.7em] text-sm">
          Thank you for using the Site. If you have questions, please contact us
          at <a>info@chainraise.io</a>
        </p>
      </div> */}
      <Footer />
    </>
  );
};

export default Faq;
