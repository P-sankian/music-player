import Musiccard from "@/comps/music-card"
import Musicplayer from "@/comps/music-player"
import Stars from "@/comps/stars"
export default function Musicstreaming() {
 return (
    <div className="space-y-10 absolute left top-28"> 
    <div className="relative  left-24">
            <Musiccard/>
            </div>
            <div className=" left-40 ">
            <Stars/>
            </div>
            <div className="min-h-[300px] min-w-[400px]">
            <Musicplayer/>
            </div>
    
    </div>
 )






}