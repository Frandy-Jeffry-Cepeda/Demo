
export default function Section1() {
  return (
    <div>

      <h2 className="font-bold">
        Admin Panel - How To Get Started Tutorial. Create a customizable SaaS Based applications and soltions
        <span className=" text-sm text-gray-500"> 5 mins read</span>
      </h2>

      <div className="py-4">
        <img 
          src="../../src/Assets/meeting.webp" 
          alt="Meeting" 
          className="rounded-lg"
        />
      </div>

      <p className="text-gray-500">
        First, a disclaimer - the entire process of writing a blog post often takes
        more than a couple of hours, even if yo can type eighty words per minute and you
        writing skills are sharp. From the seed of the idea to finally hiting "Publish",
        you might spend severeal days or maybe even a week "writing" a blog post, bug it's
        important to spend those vital hours planning your post and even thinking abot 
        <span className="text-blue-500"> Your Post </span>(yes, thinking counts as working if you're a blogger) 
        before you actually write it.
      </p>

      <br/>

      <p className="text-gray-500">
        There's an old maxim that states, "<span className="font-semibold">No fun for the writer, no fun for the reader.
        </span>"No matter what industry you're working in, as a blogger, you should live and die by this statement.
      </p>

      <br/>

      <p className="text-gray-500">
        Before you do any of the following steps, be sure to pick a topic tat actally interets you. Nothing - and 
        <span className="text-blue-500"> I mean NOTHING </span> - will kill a blog post more effectively than a 
        lack of enthusiasm from the writer. You can tell when a writer is bored by their sbject, and it's so 
        cringe-worthy it's a little embarrasing.
      </p>

      <br />

      <p className="text-gray-500">
        I can hear your objections already. "But Dan, I have to blog for a cardboard box manufactring company." I feel
        your pain, i really do. During the course of my career, I've written content for dozens of clients in some l
        ess-than-thrilling industries (such as financial regulatory compliance and corporate hosing), but the hellmark 
        of a professional blogger is the ability to write well about any topic, no matter how dry it may be. Bloggin 
        is a lot easier, however, if you can muster at leat a little enthusiasm for the topic at hand.
      </p>

      <div className="lg:flex border-2 border-dashed my-10 py-16">

        <div className="w-full">

          <div className="flex flex-col sm:px-5 items-center border-black">
            <img 
              src="../../src/Assets/womanpfp.avif" 
              alt="womanpfp" 
              className="object-cover w-32 h-32 rounded-full"
            />
            <h3 className="text-center py-2 font-bold text-gray-700">Jane Johnson</h3>
            <h4 className="text-center text-gray-500">Co-founder</h4>
          </div>
        </div>

        <div className="flex items-center px-5 lg:px-10">
          <p>
            First, a disclaimer - the entire process of writing a blog post often takes more than a couple of hours,
            even if you can type eighty words per minute and your writing skills are sharp. Writing a blog post often takes more than a couple.
          </p>
        </div>
      </div>




    </div>
  )
}
