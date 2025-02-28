export default function Musiccard() {
    return (
      <>
        {/* From Uiverse.io by janisar-hyder */}
        <p className="mb-16 supports-[aspect-ratio]:hidden">
          {/* Browser warning content */}
        </p>
        <div className="w-[55%] max-w-[400px] transition-all duration-250 ease-in-out hover:rotate-[5deg] group">
          <div className="relative aspect-[3/2] border-4 border-solid bg-white p-[5%_5%_15%_5%] cursor-pointer transition-all duration-150 ease-in-out
                        before:content-[''] before:block before:absolute before:h-full before:w-full before:border-4 before:border-solid before:bg-white before:origin-center before:-z-10 before:transition-all before:duration-150 before:ease-in-out before:top-0 before:left-0 before:translate-y-[-2%] before:rotate-[-6deg] group-hover:before:translate-y-[-2%] group-hover:before:rotate-[-4deg]
                        after:content-[''] after:block after:absolute after:h-full after:w-full after:border-4 after:border-solid after:bg-white after:origin-center after:-z-10 after:transition-all after:duration-150 after:ease-in-out after:top-0 after:left-0 after:translate-y-[2%] after:rotate-[6deg] group-hover:after:translate-y-[2%] group-hover:after:rotate-[4deg]">
            <div className="w-full aspect-square border-4 border-solid bg-gray-200 relative"></div>
          </div>
        </div>
      </>
    )
  }