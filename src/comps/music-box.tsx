export default function Musicbox() {
    return (
      <div className="w-[175px] h-[175px] bg-[#ABC4AA] rounded-[10px] relative shadow-[5px_5px_0_0_#675D50] flex items-center justify-center">
        {/* Plate */}
        <div className="w-fit">
          {/* Black outer circle with rotation animation */}
          <div className="w-[150px] h-[150px] bg-[#675D50] rounded-full flex items-center justify-center animate-[spin_2s_linear_infinite]">
            {/* Border with different colored sides */}
            <div className="w-[111px] h-[111px] rounded-full flex items-center justify-center border-t-[3px] border-b-[3px] border-l-[3px] border-r-[3px] border-t-[#F3DEBA] border-b-[#F3DEBA] border-l-[#675D50] border-r-[#675D50]">
              {/* White inner circle */}
              <div className="w-[70px] h-[70px] bg-[#F3DEBA] rounded-full flex items-center justify-center">
                {/* Center dot */}
                <div className="w-[20px] h-[20px] bg-[#675D50] rounded-full" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Player arm */}
        <div className="flex items-center justify-center flex-col w-fit absolute bottom-0 right-0 mb-2 mr-2 rotate-[-45deg]">
          <div className="w-[10px] h-[55px] bg-[#F3DEBA] absolute bottom-0 mb-[5px]" />
          <div className="w-[25px] h-[25px] bg-[#F3DEBA] rounded-full z-10" />
        </div>
      </div>
    );
  }