import { CigaretteOff, CreditCard, Map, MapPin, PackageCheck, SlidersVertical, Thermometer, Utensils, Video, Zap, } from "lucide-react";


///////////////////////////////////////////////////////////////////////////////////////////
// Hero
///////////////////////////////////////////////////////////////////////////////////////////
export const hero = {
    headingOne:
        <>
            Fresh <span className="text-primary">Food Delivered by Drone</span> in Minutes!
        </>,

    paraOne: "Experience the future of food delivery with our state-of-the-art drone service.",

    videoSrc: "https://www.youtube.com/embed/Xqnatv8-unU?autoplay=1&mute=&loop=1&disablekb=1&controls=0&playlist=Xqnatv8-unU&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=1"
}


///////////////////////////////////////////////////////////////////////////////////////////
// Features
///////////////////////////////////////////////////////////////////////////////////////////
export const feature = {
    headingTwo:
        <>
            <span className="text-primary">Unmatched </span>Delivery Experience
        </>,

    paraOne:
        <>
            Experience the future of food delivery with our ultra-fast drones, designed to bring your meals to you in record time. Say goodbye to long waits and hello to a seamless, swift service that gets your food to your door in minutes.
        </>,

    paraTwo:
        <>
            Our advanced technology ensures that your food arrives fresh and perfectly preserved, with minimal handling and maximum precision. From real-time tracking to temperature-controlled compartments, every detail is optimized for your satisfaction.
        </>,

    featurePoints: [
        {
            icon: <Zap className="size-6 group-hover:text-primary shrink-0" />,
            title: "Lightning-Speed Service",
        },
        {
            icon: <Video className="size-6 group-hover:text-primary shrink-0" />,
            title: "Real-Time Tracking",
        },
        {
            icon: <Map className="size-6 group-hover:text-primary shrink-0" />,
            title: "Precision Navigation",
        },
        {
            icon: <PackageCheck className="size-6 group-hover:text-primary shrink-0" />,
            title: "Safe Delivery",
        },
        {
            icon: <CigaretteOff className="size-6 group-hover:text-primary shrink-0" />,
            title: "Zero Emissions",
        },
        {
            icon: <SlidersVertical className="size-6 group-hover:text-primary shrink-0" />,
            title: "Minimal Handling",
        },
        {
            icon: <Thermometer className="size-6 group-hover:text-primary shrink-0" />,
            title: "Temperature-Controlled Compartments",
        },
        {
            icon: <MapPin className="size-6 group-hover:text-primary shrink-0" />,
            title: "Flexible Delivery Options"
        },
    ]
}


///////////////////////////////////////////////////////////////////////////////////////////
// Technology
///////////////////////////////////////////////////////////////////////////////////////////
export const technology = {
    headingTwo:
        <>
            Technology of our Advanced<span className="text-primary"> Autonomous Drones</span>
        </>,

    technologyFeatures: [
        {
            title: "Autopilot System",
            description: "For optimal path planning and navigation."
        },
        {
            title: "360° LiDAR",
            description: "For airspace detection and object avoidance."
        },
        {
            title: "Peripheral Sensors",
            description: "Complimentary sensors for additional safety."
        },
        {
            title: "ML Models",
            description: "For precise localization and distant object avoidance."
        },
        {
            title: "4K Camera",
            description: "For real-time data analysis and video streaming."
        },
        {
            title: "RemoteID Broadcaster",
            description: "Compliant with FAA regulations."
        },
        {
            title: "Protective Shell",
            description: "Designed for various weather conditions."
        },
        {
            title: "Extensive Testing",
            description: "Ensuring optimization and safety."
        }
    ]
}


///////////////////////////////////////////////////////////////////////////////////////////
// DATA Section
///////////////////////////////////////////////////////////////////////////////////////////
export const data = {
    headingTwo: <>Our <span className="text-primary"> Drone Model</span></>,

    paraOne: "Various versions are designed for different package payloads and delivery ranges.",

    marquee: "Current Delivery Areas~ Several cities in Orange County, CA (e.g., Irvine, Aliso Viejo, Newport Beach, Santa Ana, Great Park)",

    info: "Now we provide delivery service for Beta Users in Irvine, CA, and nearby areas!",

    droneMetrics: [
        {
            metric: "Fastest Delivery",
            value: "<5",
            unit: "mins"
        },
        {
            metric: "Max Speed",
            value: "80+",
            unit: "km/h"
        },
        {
            metric: "Distance Traveled",
            value: "60+",
            unit: "km"
        },
        {
            metric: "Max Payload",
            value: "1.5+",
            unit: "kg"
        }
    ],

    tractionData: [
        {
            title: "Deliveries Completed",
            value: 100
        },
        {
            title: "Beta Users",
            value: 100
        },
        {
            title: "Restaurants Worked With",
            value: 20
        }
    ],
}


///////////////////////////////////////////////////////////////////////////////////////////
// About
///////////////////////////////////////////////////////////////////////////////////////////
export const about = {
    headingTwo: <>Our Journey to <span className="text-primary">Revolutionize Food Delivery</span></>,
    paraOne:
        "Our drone food delivery service is revolutionizing the way you enjoy your favorite meals. By combining cutting-edge technology with a commitment to speed, safety, and sustainability, we ensure that your food arrives fresh and fast, every time.",
    paraTwo:
        "Our mission is to make dining more convenient, eco-friendly, and exciting, one delivery at a time.",

    points: [
        "Fast Delivery",
        "Safe Delivery",
        "Real Time Tracking",
        "Cost Efficient",
        "Eco-friendly",
    ],

    images: [
        "/images/drones/1.jpg",
        "/images/drones/2.jpg",
        "/images/drones/3.jpg",
        "/images/drones/4.jpg",
    ]

}


///////////////////////////////////////////////////////////////////////////////////////////
// Working
///////////////////////////////////////////////////////////////////////////////////////////
export const working = {
    headingTwo: <>How It <span className="text-primary"> Works</span></>,
    workings: [
        {
            icon: <Utensils className="size-8" strokeWidth={2} />,
            title: "Choose Your Meal",
            description: "Browse our diverse menu of delicious dishes.",
        },
        {
            icon: <CreditCard className="size-8" strokeWidth={2} />,
            title: "Place Your Order",
            description: "Select your location and place your order in a few clicks.",
        },
        {
            icon: <MapPin className="size-8" strokeWidth={2} />,
            title: "Track Your Delivery",
            description: "Watch in real-time as our drones deliver your food."
        },
    ]

}


///////////////////////////////////////////////////////////////////////////////////////////
// Service
///////////////////////////////////////////////////////////////////////////////////////////
export const service = {
    headingTwo: <><span className="text-primary">Services</span> We Provide</>,

    paraOne: "Contact us for business opportunities.",

    services: [
        {
            title: "Food Delivery",
            description: "We aim for the fastest food delivery by drones, in minutes, at lower cost."
        },
        {
            title: "Convenience Delivery",
            description: "From convenience store to your address, with much less time."
        },
        {
            title: "Grocery Delivery",
            description: "Get your groceries delivered as fast as 15-20 mins."
        },
        {
            title: "Small item Delivery",
            description: "Available for small packages for verified stores."
        }
    ]
}
