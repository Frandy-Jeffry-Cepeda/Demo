
export const videos = [
    { src: '../../src/Assets/Videos.jpg', title: 'About Bootstrap Admin', description: "we've been a focused on making a the sky" },
    { src: '../../src/Assets/Videos2.jpg', title: 'A yellow sofa', description: "we've been a focused on making a the sky" },
    { src: '../../src/Assets/videos3.avif', title: 'Our Camara Mega Set', description: "we've been a focused on making a the sky" },
  ];

export default function Section2() {

  return (
    <>
    <div className="pb-20">
        <div className="flex justify-between border-b pb-5">
            <h2>Video Tutorials</h2>
            <span className="text-blue-500">View All Videos</span>
        </div>
    </div>

    <div className="flex gap-10 justify-center">
        {videos.map((video, index) => (
            <div 
            key={index}
            className="flex flex-col w-full sm:w-1/2 lg:w-1/3 h-auto rounded-lg bg-gray-100 overflow-hidden shadow-md">
            <img 
                src={video.src} 
                alt={video.title} 
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <span className="font-bold text-lg">{video.title}</span>
                <p className="text-gray-500">{video.description}</p>
            </div>
            </div>
        ))}
    </div>

    </>
  )
}
