
export const siteConfig = {
    name: "MealCopilot",
    title: "Revolutionizing Food Delivery with Autonomous Drones",
    description: "Experience the future of food delivery with MealCoPilot, where fresh meals are delivered by autonomous drones in minutes. Enjoy lightning-speed service, real-time tracking, and temperature-controlled compartments, ensuring your food arrives fresh and perfectly preserved. Join our journey to make dining more convenient, eco-friendly, and exciting with our cutting-edge drone technology. Serving Beta Users in Irvine, CA, and nearby areas.",
    url: "https://mealcopilot-beta.vercel.app",
    baseUrl: "https://mealcopilot-beta.vercel.app",
    ogImage: "https://mealcopilot-beta.vercel.app/og.png",
    links: {
        twitter: "https://twitter.com/username",
        instagram: "https://instagram.com/username",
    },
    owner: "Site Owner"
}

// ===================================================
// homePage
// ===================================================
export const siteMd = {
    title: {
        default: siteConfig.title,
        template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: [
        "Keywords 1",
        "Keywords 2",
    ],
    authors: [
        {
            name: siteConfig.owner,
            url: siteConfig.url,
        },
    ],
    creator: "name",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@username",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

// ===================================================
// How It Works
// ===================================================
export const howItWorksMd = {
    title: 'How MealCoPilot Works - Fast and Efficient Drone Food Delivery',
    description: 'Discover how MealCoPilot revolutionizes food delivery with our easy 3-step process. Choose your meal, place your order, and track your drone delivery in real-time. Enjoy lightning-speed service and fresh, delicious food delivered to your door in minutes.',
}

// ===================================================
// Career Page
// ===================================================
export const careerMd = {
    title: 'Join Our Team - Careers at MealCoPilot',
    description: 'Be a part of the future of food delivery! Explore exciting career opportunities at MealCoPilot, where innovation, technology, and a passion for excellence drive our success. Join our team and help revolutionize the food delivery industry with cutting-edge drone technology.',
}

// ===================================================
// Contact Page
// ===================================================
export const contactMd = {
    title: 'Contact MealCoPilot - Get in Touch with Us',
    description: 'Have questions or business inquiries? Contact MealCoPilot today! We are here to assist you with your food delivery needs and explore new opportunities. Reach out to us for more information about our drone delivery service and how we can work together.',
}
