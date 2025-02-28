export default function Searchbar() {
    return (
      <>
        {/* From Uiverse.io by 0xnihilism */}
        <div className="relative flex items-center justify-start gap-4 max-w-[350px] bg-[#f0f0f0] p-5 border-4 border-black shadow-[10px_10px_0_#000] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu preserve-3d rotate-x-[10deg] rotate-y-[-10deg] perspective-[1000px] hover:rotate-x-[5deg] hover:rotate-y-[1deg] hover:scale-105 hover:shadow-[25px_25px_0_-5px_#e9b50b,25px_25px_0_0_#000] before:content-['USERNAME'] before:absolute before:top-[-15px] before:left-5 before:bg-[#e9b50b] before:text-black before:font-bold before:py-[5px] before:px-[10px] before:text-sm before:z-[4] before:border-2 before:border-black before:transform-gpu before:translate-z-[50px]">
          <div className="absolute w-full h-full left-0 bottom-0 -z-[1] transform-gpu translate-z-[-50px] bg-gradient-to-tr from-[rgba(255,107,107,0.4)] to-[rgba(255,107,107,0.1)] blur-[20px]" />
          <button className="cursor-pointer border-3 border-black bg-[#e9b50b] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] flex justify-center items-center p-[10px] transform-gpu translate-z-[20px] relative z-[3] font-bold uppercase hover:bg-[#e9b50b] hover:translate-z-[10px] hover:-translate-x-[5px] hover:-translate-y-[5px] hover:shadow-[5px_5px_0_0_#000]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#000000"
              className="w-[25px] h-[25px]"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="feather feather-search"
>
  <circle cx="11" cy="11" r="8" />
  <path d="M21 21L16.65 16.65" />
</svg>
            </svg>
          </button>
          <input
            type="text"
            name="search"
            className="w-full outline-none border-3 border-black p-[15px] text-lg bg-white text-black transform-gpu translate-z-[10px] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-[3] font-['Roboto',Arial,sans-serif] tracking-[-0.5px] placeholder:text-[#666] placeholder:font-bold placeholder:uppercase hover:bg-[#f0f0f0] hover:translate-z-[20px] hover:-translate-x-[5px] hover:-translate-y-[5px] hover:shadow-[5px_5px_0_0_#000] focus:bg-[#f0f0f0] focus:translate-z-[20px] focus:-translate-x-[5px] focus:-translate-y-[5px] focus:shadow-[5px_5px_0_0_#000]"
            placeholder="search your song"
          />
        </div>
      </>
    );
  }