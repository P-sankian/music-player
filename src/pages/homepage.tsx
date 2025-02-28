
import Searchbar from "@/comps/search-bar"
import { SparklesText } from "@/components/magicui/sparkles-text"
import Musicbox from "@/comps/music-box"


export default function Homepage() {

   return(
    <div className="space-y-10 absolute left top-32">
        <div className="relative left-20">
        <Searchbar/>
        </div>
        
        <div className="relative  left-40 ">
        <Musicbox/>
        </div>
        <SparklesText text="Listen to anything"/>
        


    </div>
   )









}