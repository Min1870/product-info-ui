import headphone from "./images/headphone.png";
import cart from "./images/cart.svg"
import heart from "./images/heart.svg"

const App = () => {
  return (
    <main className=" h-screen flex justify-center items-center bg-background font-poppins">
      <div className="flex flex-col items-center gap-[32px] max-w-[987px] bg-secondary p-[82px] shadow-card rounded-[15px] md:flex-row md:items-start">
        <div>
          <img src={headphone} alt="headphone" />
        </div>
        <div className=" flex flex-col gap-[32px]">
          <div className=" flex flex-col gap-[10px]">
            <span className=" bg-primary text-secondary px-2 py-1 leading-[21px] text-sm rounded-[20px] font-semibold w-fit">
              Free shipping
            </span>
            <h1 className=" max-w-[419px] font-semibold text-[24px] text-primary">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </h1>
          </div>

          <div>
            <span className=" font-roboto font-normal text-[18px] leading-[21px] text-primary line-through">
              1 599,-
            </span>
            <h2 className=" font-bold text-[48px] text-primary">799,-</h2>
            <p className="text-sm text-primary opacity-60">
              The offer is valid until April 3 or as long as stock lasts!
            </p>
          </div>

          <button className=" bg-button flex justify-center items-center p-[16px] w-[100%] text-secondary font-medium shadow-btn rounded-[8px] transition active:scale-y-95 active:shadow-sm">
            Add to cart
          </button>

          <div className=" flex items-center gap-2">
            <div className=" w-[13px] h-[13px] rounded-full bg-dot"></div>
            <p className=" text-black text-sm font-medium">
              50+ pcs. in stock.
            </p>
          </div>

          <div className=" flex gap-[10px]">
            <button className=" flex items-center gap-[10px] py-[16px] px-[35px] border-background border-2 rounded-lg">
              <img src={cart} alt="" />
              <p className=" text-[18px] leading-[27px]">Add to cart</p>
            </button>

            <button className=" flex items-center gap-[10px] py-[16px] px-[35px] border-background border-2 rounded-lg">
              <img src={heart} alt="" />
              <p className=" text-[18px] leading-[27px]">Add to wishlist</p>
            </button>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
