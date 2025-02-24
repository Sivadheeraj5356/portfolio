import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export function CardSection() {
  return (
    <div>
        <div>
        <h1 className="relative text-center text-3xl font-bold tracking-tight sm:text-4xl xl:text-4xl/none mt-10">My Approach</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mx-40 mt-12">
        
        <div>
        <Card className="relative h-[30rem]">
         <CardHeader>
           <CardTitle className="text-center text-xl sm:text-3xl mt-24 sm:mx-8">Planning and Strategy</CardTitle>
       <CardDescription></CardDescription>
           </CardHeader>
         <CardContent>
           <p className="text-base mx-10 text-center">We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.</p>
         </CardContent>
      <CardFooter>
          {/* <p>Card Footer</p> */}
      </CardFooter>
</Card>
        </div>
        <div>
        <Card className="relative h-[30rem]">
         <CardHeader>
           <CardTitle className="text-center text-3xl mt-24 mx-8">Development & Progress Update</CardTitle>
       <CardDescription></CardDescription>
           </CardHeader>
         <CardContent>
           <p className="text-base mx-10 text-center">Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.</p>
         </CardContent>
      <CardFooter>
          {/* <p>Card Footer</p> */}
      </CardFooter>
</Card>
        </div>
        <div>
        <Card className="relative h-[30rem]">
         <CardHeader>
           <CardTitle className="text-center text-3xl mt-24 mx-8">Development & Launch</CardTitle>
       <CardDescription></CardDescription>
           </CardHeader>
         <CardContent>
           <p className="text-base mx-10 text-center">This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.</p>
         </CardContent>
      <CardFooter>
          {/* <p>Card Footer</p> */}
      </CardFooter>
</Card>
        </div>
       
   </div>
    </div>
    
  )
}

export default CardSection