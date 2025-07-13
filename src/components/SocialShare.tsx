import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

const SocialShare = ({ 
  url = window.location.href, 
  title = "صيانة مطابخ الألمنيوم في جدة",
  description = "أفضل خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة",
  className = ""
}: SocialShareProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    description: encodeURIComponent(description)
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`,
      color: "text-blue-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title}`,
      color: "text-sky-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`,
      color: "text-blue-700"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${shareData.title}%20${shareData.url}`,
      color: "text-green-600"
    }
  ];

  const handleShare = (socialUrl: string) => {
    window.open(socialUrl, '_blank', 'width=600,height=400');
    
    // Analytics tracking
    if (window.gtag) {
      window.gtag('event', 'social_share', {
        event_category: 'engagement',
        event_label: socialUrl.includes('facebook') ? 'facebook' : 
                    socialUrl.includes('twitter') ? 'twitter' :
                    socialUrl.includes('linkedin') ? 'linkedin' : 'whatsapp',
        value: 1
      });
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={handleNativeShare}
        className="gap-2"
      >
        <Share2 className="h-4 w-4" />
        مشاركة
      </Button>

      {isOpen && !navigator.share && (
        <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg p-4 z-50 min-w-[200px]">
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => handleShare(social.url)}
                className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors ${social.color}`}
              >
                <social.icon className="h-4 w-4" />
                <span className="text-sm">{social.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialShare;