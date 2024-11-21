import { Search } from "lucide-react";

export const categories = [
  { names: 'SaaS Solutions', number: '24' },
  { names: 'Company News', number: '152' },
  { names: 'Events & Activities', number: '52' },
  { names: 'Support Related', number: '305' },
  { names: 'Innovations', number: '70' },
  { names: 'Product Updates', number: '585' },
];

export const recentPost = [
  { src: '../../src/Assets/post.jpg', title: 'About Bootstrap Admin', description: "we've been a focused on making a the sky" },
  { src: '../../src/Assets/post2.jpg', title: 'A yellow sofa', description: "we've been a focused on making a the sky" },
  { src: '../../src/Assets/post.jpg', title: 'Our Camara Mega Set', description: "we've been a focused on making a the sky" },
  { src: '../../src/Assets/post2.jpg', title: 'Time to cook and eat?', description: "we've been a focused on making a the sky" },
];

export default function Aside() {
  return (

    <div>

      <div className="relative bottom-12">
        <span className="text-gray-500 text-xl font-bold">Search Blog</span>
      </div>

      <div className="relative bottom-8 rounded-lg flex gap-2 bg-gray-100 p-4 items-center">
        <Search />
        <form className="flex-grow">
          <div className="relative ">
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-gray-100 font-bold text-gray-700 rounded-lg"
            />
          </div>
        </form>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4">Categories</h3>
         <div className="flex flex-col space-y-2 text-gray-500">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 rounded-md hover:bg-gray-200 cursor-pointer"
            >
              <span className="font-medium">{category.names}</span>
              <span className="text-gray-500 text-sm">{category.number}</span>
            </div>
          ))}
        </div>
      </div>

      <br/>

      <div>
  <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
  <div className="flex flex-col space-y-4">
    {recentPost.map((post, index) => (
      <div
        key={index}
        className="flex justify-between items-center rounded-md cursor-pointer"
      >
        <img
          src={post.src}
          alt="Post Image"
          className="w-12 h-12 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] lg:w-28 lg:h-28 xl:w-36 xl:h-36 object-cover rounded-md"  
        />
        <div className="flex flex-col mx-5">
          <span className="font-bold text-[14px] lg:text-lg">{post.title}</span>
          <span className="text-gray-500 text-[12px] lg:text-sm xl:text-[20px]">{post.description}</span>
        </div>
      </div>
    ))}
  </div>
</div>




    </div>
  )
}
