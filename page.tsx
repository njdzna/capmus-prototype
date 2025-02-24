import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const listings = [
  {
    title: "Orange Bike for Sale",
    image: "/placeholder.svg?height=200&width=300",
    price: "$100",
    time: "5 secs",
    tag: "local_offer for sale",
    tagColor: "bg-orange-100 text-orange-800",
    description: "Great condition, used for one year. Pickup on campus...",
    contact: "@stanford.edu",
  },
  {
    title: "Roommate Wanted",
    image: "/placeholder.svg?height=200&width=300",
    price: "$800/mo",
    time: "1 min",
    tag: "home housing",
    tagColor: "bg-green-100 text-green-800",
    description: "Looking for a roommate near campus. Spacious room with great...",
    contact: "@harvard.edu",
  },
  {
    title: "CS Textbook",
    image: "/placeholder.svg?height=200&width=300",
    price: "$30",
    time: "5 mins",
    tag: "local_offer for sale",
    tagColor: "bg-orange-100 text-orange-800",
    description: "Intro to Algorithms in excellent condition. No highlights or...",
    contact: "@mit.edu",
  },
  {
    title: "Dorm Furniture",
    image: "/placeholder.svg?height=200&width=300",
    price: "$150",
    time: "4 hrs",
    tag: "local_offer for sale",
    tagColor: "bg-orange-100 text-orange-800",
    description: "Selling a set of dorm furniture including a bed, desk, and c...",
    contact: "@stanford.edu",
  },
  {
    title: "Guitar Lessons",
    image: "/placeholder.svg?height=200&width=300",
    price: "Starting at $20/hr",
    time: "27 days",
    tag: "build services",
    tagColor: "bg-brown-100 text-brown-800",
    description: "Offering beginner guitar lessons at affordable rates. Flexib...",
    contact: "@stanford.edu",
  },
  {
    title: "Internship Opportunity",
    image: "/placeholder.svg?height=200&width=300",
    price: "Competitive",
    time: "8 months",
    tag: "work jobs",
    tagColor: "bg-purple-100 text-purple-800",
    description: "Exciting internship in tech. Apply now for a rewarding exper...",
    contact: "@stanford.edu",
  },
  {
    title: "Community Meetup",
    image: "/placeholder.svg?height=200&width=300",
    price: "Free",
    time: "3 years",
    tag: "group community",
    tagColor: "bg-red-100 text-red-800",
    description: "Join us for a community networking event. Connect with peers...",
    contact: "@stanford.edu",
  },
  {
    title: "Study Buddy Wanted",
    image: "/placeholder.svg?height=200&width=300",
    price: "N/A",
    time: "10 mins",
    tag: "person personals",
    tagColor: "bg-pink-100 text-pink-800",
    description: "Looking for a study partner to tackle challenging courses to...",
    contact: "@stanford.edu",
  },
  {
    title: "Campus Tutor Position",
    image: "/placeholder.svg?height=200&width=300",
    price: "$15/hr",
    time: "45 secs",
    tag: "school campus jobs",
    tagColor: "bg-teal-100 text-teal-800",
    description: "On-campus tutoring job available for knowledgeable students...",
    contact: "@stanford.edu",
  },
  {
    title: "Business Party",
    image: "/placeholder.svg?height=200&width=300",
    price: "Tickets: $50",
    time: "3 days",
    tag: "event events",
    tagColor: "bg-blue-100 text-blue-800",
    description: "Join us for a glamorous business networking event with live ...",
    contact: "@stanford.edu",
  },
  {
    title: "CV of a Musician",
    image: "/placeholder.svg?height=200&width=300",
    price: "N/A",
    time: "2 hrs",
    tag: "description resumes",
    tagColor: "bg-gray-100 text-gray-800",
    description: "Professional resume showcasing a talented musician with year...",
    contact: "@stanford.edu",
  },
  {
    title: "Used Textbooks Bundle",
    image: "/placeholder.svg?height=200&width=300",
    price: "$50",
    time: "2 days",
    tag: "local_offer for sale",
    tagColor: "bg-orange-100 text-orange-800",
    description: "A bundle of used textbooks from last semester. Excellent condition and affordable.",
    contact: "@stanford.edu",
  },
  {
    title: "Vintage Vinyl Records",
    image: "/placeholder.svg?height=200&width=300",
    price: "$75",
    time: "5 hrs",
    tag: "local_offer for sale",
    tagColor: "bg-orange-100 text-orange-800",
    description: "A collection of vintage vinyl records. Great sound quality and rare finds.",
    contact: "@stanford.edu",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1e3a8a]">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#28437A]">Capmus</h1>
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <span className="absolute left-2 top-2.5 text-xs text-muted-foreground">search</span>
                <Input placeholder="Search posts..." className="w-full pl-16 bg-gray-50" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-[#28437A] hover:bg-[#28437A]/90">Create a post</Button>
              <div className="flex items-center gap-2 text-sm">
                <span>school</span>
                <span>University</span>
                <span className="text-muted-foreground">menu_account_circle</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {[
              "Santa Clara University",
              "Stanford University",
              "Arizona State University",
              "UC Berkeley",
              "Johns Hopkins University",
              "Harvard University",
            ].map((university) => (
              <Button key={university} variant="outline" size="sm" className="whitespace-nowrap rounded-full text-sm">
                {university}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center border-b">
            <div className="flex items-center border rounded-full px-4 py-2 m-2">
              <span className="text-[#28437A] font-semibold">apps</span>
              <span className="ml-2 text-sm">All</span>
            </div>
            <nav className="flex-1 flex">
              {[
                { icon: "home", label: "home", sub: "Housing" },
                { icon: "local_offer", label: "local_offer", sub: "For Sale" },
                { icon: "work", label: "work", sub: "Jobs" },
                { icon: "person", label: "person", sub: "Personals" },
                { icon: "school", label: "school", sub: "Campus Jobs" },
                { icon: "group", label: "group", sub: "Community" },
                { icon: "build", label: "build", sub: "Services" },
                { icon: "events", label: "events", sub: "Events" },
                { icon: "description", label: "description", sub: "Resumes" },
              ].map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="flex flex-col items-center py-3 px-4 text-[#28437A] hover:bg-gray-50 border-r"
                >
                  <span className="text-sm">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.sub}</span>
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 px-4">
              <span>filter_list</span>
              <span className="text-sm">Filters</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listings.map((listing, index) => (
              <div key={index} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100 relative">
                  <img
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-[#28437A] mb-2">{listing.title}</h3>
                  <span className={`inline-block px-2 py-0.5 rounded-sm text-xs font-medium ${listing.tagColor} mb-2`}>
                    {listing.tag}
                  </span>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{listing.price}</span>
                    <span className="text-xs text-gray-500">{listing.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{listing.description}</p>
                  <p className="text-sm text-[#28437A]">{listing.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

