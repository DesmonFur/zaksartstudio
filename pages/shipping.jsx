import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
function shipping() {
  return (
    <div>
      <Header />
      <main className="text-md ml-4 mr-4 font-playFairDisplay lg:text-2xl">
        <h3 className="top-12 mx-auto mt-12 mb-12 w-[90%] animate-pulse  text-center font-playFairDisplay text-2xl tracking-[15px] text-white">
          Shipping
        </h3>{" "}
        <section className="mx-auto  text-center md:w-[45%]">
          <span>
            Shipping original art pieces is neither simple nor cheap but I make
            it simple for you by personally handling it myself.
          </span>
          <ul className="list-inside list-disc">
            <li>
              <b>In LA? FREE DELIVERY!</b>
            </li>
          </ul>

          <p>
            If you’re in LA, I offer the option of free hand delivery of any
            piece that you purchase save Number 87, this piece is in MI, and
            would need to be shipped. Simply indicate hand delivery in memo at
            purchase when I reach out after your purchase.
          </p>
          <ul className="list-inside list-disc">
            <li>
              <b>
                If you’re not in Los Angeles, OR you are, but still want to
                ship:
              </b>
            </li>
          </ul>
          <p>
            Please proceed with purchase. I will contact you promptly after, to
            arrange shipping to your exact specifications/preferred carrier and
            collect shipping cost.
          </p>
          <p>
            I expect the cost to range between $40-$250 depending on the
            painting size, your preferred carrier options.
          </p>
          <p>
            If you are unwilling to pay the shipping cost, I will happily refund
            you 100% for the cost of the painting and not ship, so you pay
            nothing - if the price ends up being significantly higher than
            indicated here.
          </p>
          <span>Thank you very much for you interest in my artwork!</span>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default shipping;
