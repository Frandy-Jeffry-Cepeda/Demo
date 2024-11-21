import Section1 from "@/Layout/Dashboard/Section1"
import { BriefcaseBusiness, Grid2X2, MessageSquareText } from "lucide-react"

export default function Dashboard() {
  return (

    <div className=" bg-white m-5">

        <div className="flex gap-1 px-2 pt-10 pb-5 text-[12px] sm:gap-5 sm:px-10 sm:text-sm">
          
          <div className="flex items-center gap-1">
            <Grid2X2 className="w-4 h-4 sm:w-6 sm:h-6"/>
           <span> 06 April 2021 </span> 
          </div>

          <div className="flex items-center gap-1">
            <BriefcaseBusiness className="w-4 h-4 sm:w-6 sm:h-6"/>
           <span> Announcements </span> 
          </div>

          <div className="flex items-center gap-1">
            <MessageSquareText className="w-4 h-4 sm:w-6 sm:h-6"/>
           <span> 24 Comments </span> 
          </div>

        </div>

        
        <section className="flex gap-1 px-2 sm:px-10">
            <article>
              <Section1/>
            </article>
          </section>

    </div>
  )
}
