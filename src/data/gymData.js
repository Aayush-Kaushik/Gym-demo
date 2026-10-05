// Central configuration and data source for Royal Gym & CrossFit
// Easily editable for rebranding or pitching other local gym clients

export const gymConfig = {
  businessName: "Royal Gym & CrossFit",
  shortName: "Royal Gym",
  tagline: "Train Hard. Get Stronger. Become Unstoppable.",
  subheadline: "Premium strength training, CrossFit, and functional fitness in Sector 12, Gurugram. Designed for athletes, lifters, and everyday achievers.",
  
  // Publicly verifiable & transparent location info
  address: "Sector 12, Gurugram, Haryana, 122001, India",
  landmark: "Near Block A / Old Railway Road, Sector 12",
  city: "Gurugram",
  state: "Haryana",
  pincode: "122001",
  country: "India",
  googleMapsUrl: "https://maps.google.com/?q=Royal+Gym+and+Crossfit+Sector+12+Gurugram",
  
  // Contact & Social (Single replaceable variables)
  phoneDisplay: "+91 98110 24500",
  phoneRaw: "+919811024500",
  whatsappNumber: "+919811024500", // Single configuration variable for WhatsApp
  whatsappDefaultMessage: "Hi Royal Gym & CrossFit team! I found your website and would like to claim my Free Trial Session in Sector 12.",
  email: "contact@royalgymgurugram.in",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  
  // Social Proof & Ratings (Public listing metrics)
  rating: "4.8",
  reviewCount: "140+",
  ratingSource: "Google Maps Rating",
  ratingQuote: "Rated highly by local members in Gurugram",

  // Hours of Operation
  hours: [
    { days: "Monday – Friday", morning: "06:00 AM – 11:30 AM", evening: "05:00 PM – 10:00 PM" },
    { days: "Saturday", morning: "06:00 AM – 11:30 AM", evening: "05:00 PM – 09:30 PM" },
    { days: "Sunday", morning: "07:00 AM – 01:00 PM", evening: "Rest & Recovery (Closed Evening)" },
  ],

  // Core Pillars / Highlights
  stats: [
    { label: "Strength Training", subtext: "Heavy barbells, racks & machines" },
    { label: "CrossFit Box", subtext: "Rigs, rowers, assault bikes & sleds" },
    { label: "Personal Training", subtext: "1-on-1 goal-driven coaching" },
  ],

  // Why Choose Us / Features
  features: [
    {
      id: "equipment",
      title: "Commercial-Grade Heavy Iron",
      desc: "Olympic barbells, bumper plates, power cages, cable stations, and dedicated deadlift platforms designed for serious lifting.",
      tag: "Iron & Machines",
      icon: "Dumbbell"
    },
    {
      id: "crossfit",
      title: "Dedicated Functional CrossFit Zone",
      desc: "Spacious turf area equipped with pull-up rigs, gymnastics rings, Concept2 rowers, plyo boxes, and slam balls for WODs.",
      tag: "WOD Ready",
      icon: "Flame"
    },
    {
      id: "coaching",
      title: "Certified Form-First Coaches",
      desc: "Our trainers emphasize injury prevention, progressive overload, and movement mechanics before increasing load.",
      tag: "Technique First",
      icon: "ShieldCheck"
    },
    {
      id: "hygiene",
      title: "Clean, Sanitized & Air-Conditioned",
      desc: "Properly ventilated high-ceiling training floor with constant sanitization cycles, chilled hydration stations, and locker rooms.",
      tag: "Premium Facility",
      icon: "Sparkles"
    },
    {
      id: "community",
      title: "Motivating Local Community",
      desc: "A positive, focused atmosphere where beginners get guidance and experienced lifters push their limits together.",
      tag: "No Ego Zone",
      icon: "Users"
    },
    {
      id: "nutrition",
      title: "Sustainable Nutrition Guidance",
      desc: "Practical Indian diet recommendations, calorie & macronutrient structuring that fit seamlessly into busy work schedules.",
      tag: "Diet & Habit",
      icon: "Target"
    }
  ],

  // Programs
  programs: [
    {
      id: "strength-training",
      title: "Strength & Hypertrophy",
      tagline: "Build pure power, bone density, and lean muscle mass.",
      description: "Structured compound lifting routines incorporating squat, bench, deadlift, and targeted accessory work with progressive overload tracking.",
      suitableFor: "All levels wanting strength and muscle tone",
      focus: ["Squat / Bench / Deadlift", "Progressive Overload", "Accessory Hypertrophy"],
      duration: "60–75 mins",
      intensity: "High",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=900&auto=format&fit=crop"
    },
    {
      id: "crossfit-wod",
      title: "CrossFit & MetCon",
      tagline: "High-intensity functional movements executed at peak pace.",
      description: "Constantly varied daily Workouts of the Day (WODs) combining Olympic weightlifting, gymnastics, and aerobic conditioning.",
      suitableFor: "Athletes seeking endurance, power, and mental grit",
      focus: ["Olympic Lifting", "Kettlebell Cycles", "Aerobic Capacity"],
      duration: "50–60 mins",
      intensity: "Very High",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=900&auto=format&fit=crop"
    },
    {
      id: "functional-fitness",
      title: "Functional & Mobility",
      tagline: "Train your body for real-life movements, agility, and longevity.",
      description: "Core stability, rotational strength, plyometrics, and mobility drills to improve athletic posture and eliminate desk-work stiffness.",
      suitableFor: "Corporate professionals and general fitness enthusiasts",
      focus: ["Core Stabilization", "Joint Mobility", "Agility Drills"],
      duration: "45–50 mins",
      intensity: "Moderate to High",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=900&auto=format&fit=crop"
    },
    {
      id: "personal-training",
      title: "1-on-1 Personal Training",
      tagline: "Dedicated coach, custom periodization, and daily accountability.",
      description: "Personalized biomechanical assessment, tailored workout routines, progressive load management, and custom nutrition blueprint.",
      suitableFor: "Individuals with specific target deadlines or rehabilitation needs",
      focus: ["Custom Workout Plan", "Weekly Check-ins", "Form Correction"],
      duration: "60 mins",
      intensity: "Tailored to client",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=900&auto=format&fit=crop"
    },
    {
      id: "fat-loss-shred",
      title: "Weight Loss & Shred",
      tagline: "Burn visceral fat while preserving hard-earned lean muscle.",
      description: "Metabolic conditioning circuits paired with calorie-deficit nutritional coaching to accelerate fat loss safely and sustainably.",
      suitableFor: "Anyone aiming to lose 5kg to 25kg+ in a healthy manner",
      focus: ["HIIT & Circuit Sets", "Calorie Management", "Body Composition Tracking"],
      duration: "50 mins",
      intensity: "High",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=900&auto=format&fit=crop"
    },
    {
      id: "muscle-building",
      title: "Muscle Building & Mass",
      tagline: "Scientific hypertrophy volume protocols for physique development.",
      description: "Hypertrophy-specific angles, time-under-tension focus, and surplus diet planning designed to add symmetrical muscular size.",
      suitableFor: "Lifters looking to break plateaus and gain clean mass",
      focus: ["Hypertrophy Volume", "Protein Intake Planning", "Tension Focus"],
      duration: "65 mins",
      intensity: "High",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=900&auto=format&fit=crop"
    }
  ],

  // Professional Coaching Staff
  trainers: [
    {
      id: "trainer-1",
      name: "Coach Vikram S.",
      role: "Head Strength & Conditioning Coach",
      badge: "Head Coach",
      specialty: "Powerlifting, Barbell Mechanics & Periodization",
      bio: "Focuses on building unbreakable foundational strength, safe technique on major compounds, and customized athletic strength cycles.",
      experience: "8+ Years Coaching Experience",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "trainer-2",
      name: "Coach Arjun M.",
      role: "CrossFit & Functional Movement Coach",
      badge: "CrossFit Level 1",
      specialty: "Olympic Lifting, MetCons & Gymnastics",
      bio: "High-energy coach driving conditioning thresholds, dynamic bodyweight control, and community motivation during group WODs.",
      experience: "6+ Years Coaching Experience",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "trainer-3",
      name: "Coach Priya R.",
      role: "Mobility & Female Transformation Specialist",
      badge: "Functional Specialist",
      specialty: "Fat Loss, Postural Alignment & Core Stability",
      bio: "Passionate about empowering women lifters, posture correction for sedentary workers, and building long-term sustainable fitness habits.",
      experience: "5+ Years Coaching Experience",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "trainer-4",
      name: "Coach Rohit K.",
      role: "Physique & Nutrition Consultant",
      badge: "Physique Specialist",
      specialty: "Hypertrophy, Body Recomposition & Caloric Planning",
      bio: "Specializes in precise macro breakdowns, metabolic priming, and structured hypertrophy splits for physique transformation.",
      experience: "7+ Years Coaching Experience",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"
    }
  ],

  // Membership Plans
  pricingNote: "Inquire at front desk for seasonal discounts and corporate plans",
  plans: [
    {
      id: "starter",
      name: "STARTER",
      period: "1 MONTH",
      price: "₹2,499",
      billing: "per month",
      isPopular: false,
      description: "Ideal for beginners starting their fitness journey or testing out the facility.",
      features: [
        "Full gym floor access",
        "Free weights & cardio equipment",
        "Locker & shower facilities",
        "General trainer floor guidance",
        "1 Free body composition analysis",
        "Access during all regular open hours"
      ],
      ctaText: "ENQUIRE FOR MEMBERSHIP"
    },
    {
      id: "performance",
      name: "PERFORMANCE",
      period: "3 MONTHS",
      price: "₹6,499",
      billing: "quarterly (approx ₹2,166/mo)",
      isPopular: true,
      popularBadge: "MOST POPULAR",
      description: "The most effective timeframe to see noticeable changes in strength and body composition.",
      features: [
        "Everything in Starter Plan",
        "Access to daily CrossFit & Functional zone",
        "Bi-weekly progress & body fat tracking",
        "Customized workout routine split",
        "Fundamental nutrition guidelines",
        "1 Guest pass per month"
      ],
      ctaText: "ENQUIRE FOR MEMBERSHIP"
    },
    {
      id: "elite",
      name: "ELITE PT",
      period: "12 SESSIONS + GYM",
      price: "₹11,999",
      billing: "custom package",
      isPopular: false,
      description: "Maximum results with dedicated 1-on-1 personal coaching and rigorous accountability.",
      features: [
        "Full unlimited gym & CrossFit access",
        "12 One-on-one personal coaching hours",
        "Personalized micro-periodized workout chart",
        "Custom macronutrient & Indian diet plan",
        "Weekly progress check-in & photo logs",
        "Priority locker access & hydration support"
      ],
      ctaText: "ENQUIRE FOR MEMBERSHIP"
    }
  ],

  // Class Schedule
  scheduleNote: "Open gym floor available daily 6:00 AM – 10:00 PM • Coach supervised",
  scheduleDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  scheduleData: [
    {
      time: "06:30 AM – 07:30 AM",
      category: "CrossFit",
      name: "Morning CrossFit WOD",
      trainer: "Coach Arjun M.",
      intensity: "High",
      days: ["Monday", "Wednesday", "Friday"],
      spots: "Max 14 Members"
    },
    {
      time: "07:30 AM – 08:30 AM",
      category: "Strength",
      name: "Barbell Strength & Squats",
      trainer: "Coach Vikram S.",
      intensity: "High",
      days: ["Monday", "Tuesday", "Thursday", "Saturday"],
      spots: "Open Gym Floor"
    },
    {
      time: "08:30 AM – 09:15 AM",
      category: "Functional",
      name: "Core, Mobility & Flexibility",
      trainer: "Coach Priya R.",
      intensity: "Medium",
      days: ["Tuesday", "Thursday", "Saturday"],
      spots: "Max 12 Members"
    },
    {
      time: "05:30 PM – 06:30 PM",
      category: "HIIT",
      name: "Metabolic HIIT Conditioning",
      trainer: "Coach Rohit K.",
      intensity: "Very High",
      days: ["Monday", "Wednesday", "Friday"],
      spots: "Max 15 Members"
    },
    {
      time: "06:30 PM – 07:30 PM",
      category: "CrossFit",
      name: "Evening CrossFit Community WOD",
      trainer: "Coach Arjun M.",
      intensity: "High",
      days: ["Monday", "Tuesday", "Thursday", "Friday"],
      spots: "Max 14 Members"
    },
    {
      time: "07:30 PM – 08:30 PM",
      category: "Strength",
      name: "Heavy Deadlift & Pull Workshop",
      trainer: "Coach Vikram S.",
      intensity: "High",
      days: ["Tuesday", "Thursday"],
      spots: "Open Gym Floor"
    }
  ],

  // Gallery
  galleryCategories: ["All", "Strength", "CrossFit", "Facility", "Atmosphere"],
  galleryImages: [
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      title: "Olympic Barbell & Free Weights Zone",
      category: "Strength",
      span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
      title: "CrossFit Functional Rig & Rings",
      category: "CrossFit",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
      title: "Dumbbell Racks up to 50kg",
      category: "Strength",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
      title: "Heavy Squat Cages & Platforms",
      category: "Strength",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
      title: "Spacious Training Floor & Conditioning",
      category: "Facility",
      span: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
      title: "High-Energy Kettlebell Drills",
      category: "CrossFit",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
      title: "Form-First Coach Supervision",
      category: "Atmosphere",
      span: "col-span-1 row-span-1"
    }
  ],

  // Reviews
  reviewsNote: "Verified 5-Star Reviews from Local Gurugram Members",
  reviews: [
    {
      id: "rev-1",
      author: "Aman Sharma",
      badge: "Local Resident — Sector 12 Gurugram",
      rating: 5,
      date: "3 weeks ago",
      text: "Great gym atmosphere in Sector 12. The trainers actually pay attention to proper form and lifting technique rather than just standing around. Good range of free weights and CrossFit equipment.",
      verified: true,
      source: "Google Review"
    },
    {
      id: "rev-2",
      author: "Rohan Verma",
      badge: "Regular Member",
      rating: 5,
      date: "1 month ago",
      text: "Best place in the area if you are into serious strength training and CrossFit. Not overcrowded during morning hours and the community pushes you to get stronger every day.",
      verified: true,
      source: "Google Review"
    },
    {
      id: "rev-3",
      author: "Sneha Kapoor",
      badge: "Functional Fitness Member",
      rating: 5,
      date: "2 months ago",
      text: "Clean environment, well-ventilated and very welcoming for female lifters. The trainers made me feel comfortable with barbell lifts right from my free trial session.",
      verified: true,
      source: "Google Review"
    }
  ],

  // FAQs
  faqs: [
    {
      question: "What is included in the Free Trial session?",
      answer: "Your free trial includes full access to the gym floor, a guided tour of the equipment, a 1-on-1 movement assessment with one of our coaches, and participation in an open workout or CrossFit group session."
    },
    {
      question: "Is this gym suitable for beginners who have never lifted weights?",
      answer: "Absolutely. Most of our members started with zero lifting experience. Our trainers guide beginners through foundational bodyweight and lightweight barbell mechanics before introducing heavier progression."
    },
    {
      question: "Where exactly is the gym located in Sector 12?",
      answer: "Royal Gym & CrossFit is conveniently situated in Sector 12, Gurugram, near Block A and Old Railway Road with easy parking for both two-wheelers and cars."
    },
    {
      question: "Do I need to book in advance for the free trial?",
      answer: "Yes, booking your free trial in advance helps us assign a coach to greet you, give you an orientation, and ensure you have an optimal first-day experience."
    },
    {
      question: "What are the morning and evening peak hours?",
      answer: "Morning hours run from 6:00 AM to 11:30 AM, and evening hours run from 5:00 PM to 10:00 PM. The calmest slots for focused 1-on-1 lifting are typically 7:00 AM – 8:30 AM and 10:00 AM – 11:30 AM."
    }
  ]
};

// Helper function to generate clean WhatsApp URL
export const getWhatsAppLink = (customText) => {
  const text = encodeURIComponent(customText || gymConfig.whatsappDefaultMessage);
  return `https://wa.me/${gymConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`;
};
