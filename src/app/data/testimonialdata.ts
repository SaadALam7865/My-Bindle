
interface TestimonialData {
    name: string,
    feedback: string,
    country: string
    userImage: string
    animation?:string

}


export const testimonialData:TestimonialData[] = [
   {
    name:'Emily R',
     feedback:'This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!',
    country:'USA',
    userImage:'/user2.png',
    animation:'fade-up'
   },
   {
    name:'Javier L',
     feedback:'Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand',
     country:'Spain',
    animation:'fade-up',
    userImage:'/user1.png'
   },
   {
    name:'Amit K',
     feedback:'Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online',
    country:'India',
    animation:'fade-up',
    userImage:'/user6.png'
   },
   {
    name:'Lucas T',
     feedback:'The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!',
    country:'Brazil',
    animation:'fade-up',
    userImage:'/user5.png'
   },
   {
    name:'Sophie M',
     feedback:"I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special",
    country:'UK',
    animation:'fade-up',
    userImage:'/user3.png'
   },
   {
    name:'Nora S',
     feedback:"I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense",
    country:'Canada',
    animation:'fade-up',
    userImage:'/user4.png'
   },
   {
    feedback: "This app has revolutionized my daily routine! The user-friendly design and quick updates keep me connected like never before.",
    name: "Priya S",
    country: "Australia",
     userImage: ""
  },
  {
    feedback: "Amazing platform for networking! It helped me collaborate with professionals worldwide and expand my career opportunities.",
    name: "Carlos M",
    country: "Mexico",
    userImage: ""
  },
  {
    feedback: "I love the creative tools here! The video editing features and community support have boosted my content creation game.",
    name: "Hiroshi T",
    country: "Japan",
     userImage: ""
  },
]