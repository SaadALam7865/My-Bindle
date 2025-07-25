export interface FeatureCardDataType {
  title: string;
  description: string;
  animation? :string ;
}

export const featureData: FeatureCardDataType[] = [
  {
    title: '🔥 Seamless Connections',
    description: 'Stay in touch with friends, family, and like-minded people with just a tap.',
    animation: 'fade-right',
  },{
    title: '📸 Share Your Story',
    description: 'Upload photos, videos, and updates to let the world know what’s happening in your life.',
     animation: 'fade-left',  
},{
    title: '💬 Real-Time Chat',
    description: 'Whether it s a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.',
 animation: 'fade-right',  
},{
    title: '🔒 Privacy First',
    description: 'Your data, your control. We prioritize your privacy with world-class security.',
 animation: 'fade-left',  
},{
    title: '🌎 Discover & Explore',
    description: 'Find trending content, join communities, and follow pages that match your interests.',
 animation: 'fade-right',  
},{
    title: '💼 Grow Your Business',
    description: 'Use our platform to market your brand, connect with customers, and build meaningful relationships.',
   animation: 'fade-left',
},
];