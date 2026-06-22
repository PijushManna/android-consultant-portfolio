export const PERSONAL = {
  name: "Pijush Manna",
  title: "Senior Android Consultant",
  tagline:
    "Building scalable Android applications with Kotlin, Jetpack Compose, Firebase, and modern architecture.",
  location: "Bengaluru, India",
  email: "pijushmanna12344@gmail.com",
  github: "https://github.com/pijushmanna",
  linkedin: "https://linkedin.com/in/pijushmanna",
  twitter: "https://twitter.com/bong_pijush",
  playstore:
    "https://play.google.com/store/apps/dev?id=6420808460803251421",
  upwork: "https://www.upwork.com",
  contra: "https://contra.com",
  experience: "7+",
  usersImpacted: "130M+",
  appsShipped: "10+",
  companies: ["PocketFM", "BigBasket", "ADP"],
};

export const SKILLS = [
  "Kotlin",
  "Jetpack Compose",
  "Android SDK",
  "MVVM",
  "MVI",
  "Clean Architecture",
  "Firebase",
  "Coroutines",
  "Flow",
  "Hilt / Dagger",
  "Room",
  "Retrofit",
  "OkHttp",
  "WorkManager",
  "Navigation",
  "Play Store",
  "CI/CD",
  "Performance Optimization",
  "Kotlin Multiplatform",
  "Unit Testing",
];

export const SERVICES = [
  {
    id: "android-app-development",
    icon: "Smartphone",
    title: "Android App Development",
    description:
      "End-to-end Android application development using Kotlin, Jetpack Compose, and modern Android architecture patterns. From ideation to Play Store launch.",
    deliverables: [
      "Production-ready Android application",
      "Clean, maintainable Kotlin codebase",
      "MVVM/MVI architecture implementation",
      "Unit & UI tests",
      "Play Store submission",
    ],
    benefits: [
      "Faster time-to-market",
      "Scalable codebase that grows with your product",
      "Reduced technical debt from day one",
    ],
  },
  {
    id: "mvp-development",
    icon: "Zap",
    title: "Android MVP Development",
    description:
      "Rapid MVP development for startups. Get a working Android app in 4–8 weeks that validates your product idea without burning your runway.",
    deliverables: [
      "Core feature set implemented",
      "Working Android prototype",
      "Architecture foundation for future scale",
      "GitHub repository with full history",
    ],
    benefits: [
      "Validate your idea faster",
      "Investor-ready demo",
      "Foundation to build on",
    ],
  },
  {
    id: "android-modernization",
    icon: "RefreshCw",
    title: "Android Modernization",
    description:
      "Migrate legacy Java/XML Android apps to modern Kotlin + Jetpack Compose. Reduce technical debt and improve developer velocity.",
    deliverables: [
      "Java → Kotlin migration",
      "XML Views → Jetpack Compose",
      "Legacy libraries replaced with Jetpack",
      "Improved build performance",
    ],
    benefits: [
      "30–50% faster feature development post-migration",
      "Reduced crash rate",
      "Improved team productivity",
    ],
  },
  {
    id: "jetpack-compose-migration",
    icon: "Layers",
    title: "Jetpack Compose Migration",
    description:
      "Incremental or full migration from XML-based Views to Jetpack Compose. Interoperability handled seamlessly, zero feature regression.",
    deliverables: [
      "Screen-by-screen migration plan",
      "Reusable Compose design system",
      "Compose + View interop where needed",
      "Migration documentation",
    ],
    benefits: [
      "Modern declarative UI",
      "Faster UI iteration",
      "Better code reuse across screens",
    ],
  },
  {
    id: "firebase-integration",
    icon: "Database",
    title: "Firebase Integration",
    description:
      "Full Firebase integration including Firestore, Auth, FCM push notifications, Remote Config, Analytics, and Crashlytics.",
    deliverables: [
      "Firebase project setup",
      "Authentication flows",
      "Firestore data architecture",
      "Push notifications",
      "Analytics & crash reporting",
    ],
    benefits: [
      "Real-time data sync",
      "Scalable backend without managing servers",
      "Deep user analytics",
    ],
  },
  {
    id: "performance-optimization",
    icon: "TrendingUp",
    title: "Android Performance Optimization",
    description:
      "Diagnose and fix ANRs, slow startup, memory leaks, janky scrolling, and battery drain. Using profiling tools, LeakCanary, Systrace, and Baseline Profiles.",
    deliverables: [
      "Performance audit report",
      "Cold start time reduction",
      "Memory leak fixes",
      "Frame rate optimization",
      "Battery usage improvements",
    ],
    benefits: [
      "Better Play Store ratings",
      "Higher user retention",
      "Reduced crash & ANR rates",
    ],
  },
  {
    id: "architecture-consulting",
    icon: "GitBranch",
    title: "Architecture Consulting",
    description:
      "Review your existing Android codebase and define a scalable architecture strategy. MVVM, MVI, Clean Architecture, modularization, and dependency injection setup.",
    deliverables: [
      "Architecture review document",
      "Recommended architecture diagram",
      "Module structure plan",
      "DI setup with Hilt",
      "Sample implementation",
    ],
    benefits: [
      "Faster onboarding for new devs",
      "Easier to test and maintain",
      "Clear separation of concerns",
    ],
  },
  {
    id: "code-reviews",
    icon: "Code2",
    title: "Code Reviews",
    description:
      "In-depth code reviews focused on Android best practices, Kotlin idioms, performance, security, and maintainability. Async turnaround.",
    deliverables: [
      "Detailed PR review comments",
      "Architecture feedback",
      "Security vulnerability scan",
      "Performance recommendations",
    ],
    benefits: [
      "Catch bugs before users do",
      "Elevate team code quality",
      "Knowledge transfer built in",
    ],
  },
  {
    id: "play-store-release",
    icon: "Upload",
    title: "Play Store Release Support",
    description:
      "End-to-end Play Store release management including app signing, release track management, store listing optimization, and policy compliance.",
    deliverables: [
      "Signed release APK/AAB",
      "Play Store listing optimized",
      "Release notes drafted",
      "Internal → Production rollout",
    ],
    benefits: [
      "Smooth release without surprises",
      "Optimized store listing for discovery",
      "Policy compliance ensured",
    ],
  },
];

export const CASE_STUDIES = [
  {
    id: "multi-tenant-delivery",
    title: "Multi-Tenant Delivery Management System",
    client: "Logistics SaaS Company",
    duration: "3 months",
    role: "Lead Android Consultant",
    summary:
      "Designed and built a multi-tenant Android delivery management app supporting 50+ enterprise clients with custom branding and isolated data.",
    tags: ["Kotlin", "MVVM", "Firebase", "Multi-tenancy"],
    challenge:
      "The client needed a single Android app that could serve 50+ enterprise delivery clients, each with their own branding, configuration, and data isolation — without shipping 50 separate apps.",
    approach:
      "Implemented a dynamic theming engine using Jetpack Compose's MaterialTheme, driven by remote configuration per tenant. Built a clean domain layer that abstracted tenant-specific business rules from the core app logic.",
    technicalDecisions: [
      "Jetpack Compose for dynamic theming via CompositionLocals",
      "Firebase Remote Config for per-tenant feature flags and branding tokens",
      "Hilt for DI with tenant-scoped modules",
      "Room database with tenant-prefixed tables for data isolation",
      "WorkManager for offline-first sync",
    ],
    architecture: "MVVM + Clean Architecture with Repository pattern",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "Hilt", "Room", "WorkManager"],
    result:
      "Shipped to 50+ enterprise clients from a single codebase. Reduced onboarding time for new tenants from weeks to hours. App rated 4.7★ on Play Store.",
    lessons:
      "Dynamic theming via Compose tokens is far more maintainable than runtime XML inflation. Starting with Clean Architecture made adding tenant abstractions straightforward.",
  },
  {
    id: "inventory-management",
    title: "Real-Time Inventory Management App",
    client: "E-commerce Platform",
    duration: "2 months",
    role: "Android Consultant",
    summary:
      "Rebuilt a crash-prone inventory management Android app from scratch, reducing crashes by 78% and adding real-time sync.",
    tags: ["Kotlin", "Firebase", "Offline-first", "Performance"],
    challenge:
      "The existing app had a 12% crash rate and no offline capability, causing warehouse workers to lose data whenever connectivity dropped.",
    approach:
      "Audited the codebase with LeakCanary and the Android Profiler. Identified three memory leaks and two race conditions in the original threading model. Rebuilt the data layer with an offline-first strategy using Room as the single source of truth.",
    technicalDecisions: [
      "Room for local persistence as single source of truth",
      "Kotlin Coroutines + Flow for reactive data streams",
      "Firebase Firestore for real-time sync when online",
      "WorkManager for background sync jobs",
      "LeakCanary in debug builds to catch future leaks",
    ],
    architecture: "MVI + Clean Architecture",
    stack: ["Kotlin", "Room", "Firebase Firestore", "Coroutines", "Flow", "WorkManager"],
    result:
      "Crash rate dropped from 12% to 2.6%. App worked seamlessly in low-connectivity warehouse environments. Sync latency reduced by 60%.",
    lessons:
      "Offline-first is not a feature — it is a foundational architecture decision. Treating Room as the source of truth and Firebase as the sync layer simplified the entire data flow.",
  },
  {
    id: "android-modernization-case",
    title: "Legacy Java App Modernization",
    client: "HR Tech Startup",
    duration: "4 months",
    role: "Android Modernization Consultant",
    summary:
      "Migrated a 60,000-line Java/XML Android app to Kotlin + Jetpack Compose, reducing build time by 40% and enabling 2x faster feature delivery.",
    tags: ["Kotlin Migration", "Jetpack Compose", "Modernization"],
    challenge:
      "A 5-year-old Java Android app had accumulated severe technical debt. Build times exceeded 8 minutes, the team dreaded touching legacy screens, and new features took 3x longer than necessary.",
    approach:
      "Adopted an incremental migration strategy: Java → Kotlin first using IntelliJ's automatic converter + manual review, then XML → Compose screen by screen using ComposeView interop bridges. Set up strict Kotlin linting from day one to prevent regression.",
    technicalDecisions: [
      "Interoperability: ComposeView + ViewCompositionStrategy for incremental migration",
      "ktlint + Detekt for code quality enforcement",
      "Converted adapters to Compose LazyColumn/LazyRow",
      "Replaced Dagger 2 with Hilt for simpler DI",
      "Migrated AsyncTask/RxJava to Coroutines",
    ],
    architecture: "MVVM with Clean Architecture modules",
    stack: ["Kotlin", "Jetpack Compose", "Hilt", "Coroutines", "Flow", "ktlint"],
    result:
      "Build time reduced from 8 min to 4.7 min. New features shipped 2x faster. Developer satisfaction (internal survey) improved significantly. Zero feature regressions during migration.",
    lessons:
      "Incremental migration beats big-bang rewrite every time. Having strict automated code quality checks prevents teams from falling back into old patterns during the transition.",
  },
  {
    id: "analytics-sdk",
    title: "Custom Analytics SDK for Android",
    client: "Mobile Attribution Platform",
    duration: "6 weeks",
    role: "SDK Engineer & Consultant",
    summary:
      "Built a lightweight analytics SDK (<50KB) for Android with offline event queuing, batched uploads, and zero-reflection design.",
    tags: ["SDK Development", "Analytics", "Kotlin", "Performance"],
    challenge:
      "Client needed an analytics SDK that was tiny (<50KB compiled), required zero reflection (no ProGuard issues), supported offline event queuing, and had minimal battery and network impact.",
    approach:
      "Designed the SDK around a persistent event queue backed by Room with automatic retry and batching. Used Kotlin sealed classes for event types to avoid reflection. Implemented exponential backoff for network failures.",
    technicalDecisions: [
      "Room for persistent event queue",
      "WorkManager for background batch uploads",
      "Kotlin Serialization (zero-reflection) instead of Gson",
      "Sealed classes for type-safe event model",
      "OkHttp with gzip compression for uploads",
    ],
    architecture: "Modular SDK with single entry point API",
    stack: ["Kotlin", "Room", "WorkManager", "OkHttp", "Kotlin Serialization"],
    result:
      "SDK size: 42KB. Zero ProGuard issues. Event loss rate under poor connectivity: < 0.1%. Battery impact: negligible in Android Battery Historian analysis.",
    lessons:
      "SDK design requires a different mindset than app development. Every dependency you add becomes your consumer's dependency. Minimal footprint is a feature.",
  },
];

export const APPS = [
  {
    id: "codebox",
    name: "CodeBox: C, Java, DS & Patterns",
    description:
      "A comprehensive coding reference app with C, Java, data structures, and design patterns. Perfect for students and developers on the go.",
    features: [
      "C & Java code examples",
      "Data structures visualized",
      "Design patterns explained",
      "Search across all content",
      "Offline access",
    ],
    stack: ["Java", "Android SDK", "SQLite"],
    github: "https://github.com/pijushmanna/CodeBox",
    playstore:
      "https://play.google.com/store/apps/details?id=com.pijush.codebox",
    category: "Developer Tools",
    status: "published",
  },
  {
    id: "one-minute-math",
    name: "One Minute Math – Fun & Fast",
    description:
      "Fast and fun number tasks to help build confidence with maths and number fluency. Rated 5.0★ with 500+ downloads.",
    features: [
      "60-second math challenges",
      "Multiple difficulty levels",
      "Progress tracking",
      "Kid-friendly UI",
      "No ads for core experience",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android SDK"],
    playstore:
      "https://play.google.com/store/apps/details?id=com.pijush.oneminutemath",
    category: "Education",
    status: "published",
    rating: "5.0",
    downloads: "500+",
  },
  {
    id: "code-master",
    name: "Code Master: C Programming",
    description:
      "A dedicated C programming reference app for students and developers. Covers syntax, algorithms, and data structures.",
    features: [
      "C language reference",
      "Algorithm examples",
      "Data structure implementations",
      "Offline first",
    ],
    stack: ["Kotlin", "Android SDK"],
    playstore:
      "https://play.google.com/store/apps/details?id=com.pijush.codemaster",
    category: "Developer Tools",
    status: "published",
  },
  {
    id: "ball-flow",
    name: "One Minute Relax: Ball Flow",
    description:
      "A relaxing casual game featuring smooth ball physics and calming visuals for stress relief.",
    features: [
      "Smooth physics simulation",
      "Calming audio",
      "Simple one-touch gameplay",
      "Multiple levels",
    ],
    stack: ["Kotlin", "Android SDK", "Canvas"],
    playstore:
      "https://play.google.com/store/apps/details?id=com.pijush.ballflow",
    category: "Games",
    status: "published",
  },
  {
    id: "barcode-scanner",
    name: "Easy QR & Barcode Scanner",
    description:
      "A fast, lightweight QR and barcode scanner that works without ads or unnecessary permissions.",
    features: [
      "QR code scanning",
      "All barcode formats",
      "History log",
      "No unnecessary permissions",
      "Instant results",
    ],
    stack: ["Kotlin", "CameraX", "ML Kit", "Jetpack Compose"],
    category: "Tools",
    status: "published",
    playstore:
      "https://play.google.com/store/apps/details?id=com.pijush.barcodescanner",
  },
  {
    id: "jungle-maths",
    name: "Jungle Maths: Maths Exercises",
    description:
      "An engaging maths exercise app for kids with a jungle theme, making learning numbers fun.",
    features: [
      "Age-appropriate exercises",
      "Jungle theme and animations",
      "Progress rewards",
      "Multiple math topics",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android SDK"],
    category: "Education",
    status: "published",
    playstore:
      "https://play.google.com/store/apps/details?id=com.pijush.junglemaths",
  },
];

export const PROJECTS = [
  {
    id: "expense-tracker",
    name: "Money N Budget – Expense Tracker",
    description:
      "A full-featured personal finance and budget tracking Android app with SMS-based auto-import of transactions.",
    repo: "https://github.com/pijushmanna/Money-N-Budget-Expense-Tracker",
    tags: ["Kotlin", "MVVM", "Room", "Coroutines"],
    highlights: ["SMS transaction parsing", "Budget categories", "Charts & reports"],
    type: "Android App",
  },
  {
    id: "expense-tracker-sms",
    name: "Expense Tracker SMS",
    description:
      "Automatically reads and categorizes bank SMS messages to track your spending — zero manual entry.",
    repo: "https://github.com/pijushmanna/Expense-Tracker-sms",
    tags: ["Kotlin", "SMS API", "Room", "MVVM"],
    highlights: ["Auto SMS parsing", "Bank-agnostic", "Category detection"],
    type: "Android App",
  },
  {
    id: "onboarding-sdk",
    name: "Onboarding SDK",
    description:
      "A modular, customizable onboarding SDK for Android apps. Drop it in and configure your onboarding flow without rebuilding it from scratch.",
    repo: "https://github.com/pijushmanna/Onboarding-Sdk",
    tags: ["Kotlin", "SDK", "Jetpack Compose", "Library"],
    highlights: ["Zero-config defaults", "Fully customizable", "Compose-first"],
    type: "Android SDK",
  },
  {
    id: "analytics-sdk-project",
    name: "Analytics SDK",
    description:
      "Lightweight analytics SDK for Android with event queuing, batching, offline support, and zero-reflection design.",
    repo: "https://github.com/pijushmanna/analytics-sdk",
    tags: ["Kotlin", "SDK", "Analytics", "WorkManager"],
    highlights: ["<50KB footprint", "Offline queue", "Batch uploads"],
    type: "Android SDK",
  },
  {
    id: "kmp-media-player",
    name: "KMP Media Player",
    description:
      "Kotlin Multiplatform media player supporting Android and iOS with a shared playback engine and platform-specific UI.",
    repo: "https://github.com/pijushmanna/ComposeMultiplatformMediaPlayer",
    tags: ["Kotlin", "KMP", "Compose Multiplatform", "Media"],
    highlights: ["Shared business logic", "Android + iOS", "Compose UI"],
    type: "KMP Library",
  },
  {
    id: "kitman-labs-demo",
    name: "Kitman Labs Demo",
    description:
      "Technical demo project showcasing modern Android architecture with real-world sports performance data integration.",
    repo: "https://github.com/pijushmanna/Kitman-Labs-Demo",
    tags: ["Kotlin", "Clean Architecture", "MVVM", "Retrofit"],
    highlights: ["Clean architecture layers", "API integration", "Unit tests"],
    type: "Demo Project",
  },
];

export const BLOG_POSTS = [
  {
    id: "jetpack-compose-best-practices",
    title: "Jetpack Compose Best Practices for Production Apps",
    excerpt:
      "Lessons learned from migrating real production apps to Jetpack Compose — recomposition optimization, state hoisting, stability annotations, and more.",
    date: "2024-03-15",
    readTime: "8 min",
    tags: ["Jetpack Compose", "Android", "Kotlin"],
    featured: true,
  },
  {
    id: "android-performance-guide",
    title: "Android Performance Optimization: A Practical Guide",
    excerpt:
      "How to diagnose and fix the most common Android performance issues — slow startup, memory leaks, janky UI, and battery drain — using real profiling tools.",
    date: "2024-02-20",
    readTime: "12 min",
    tags: ["Performance", "Android", "Profiling"],
    featured: true,
  },
  {
    id: "mvvm-vs-mvi",
    title: "MVVM vs MVI: Which Architecture for Your Android App?",
    excerpt:
      "A practical comparison of MVVM and MVI for Android development. When to use each, their tradeoffs, and how to decide for your specific use case.",
    date: "2024-01-10",
    readTime: "7 min",
    tags: ["Architecture", "MVVM", "MVI", "Android"],
  },
  {
    id: "firebase-architecture-patterns",
    title: "Firebase Architecture Patterns for Android",
    excerpt:
      "How to structure your Android app's data layer when using Firebase Firestore, Auth, and FCM — repository pattern, offline-first design, and error handling.",
    date: "2023-12-05",
    readTime: "10 min",
    tags: ["Firebase", "Architecture", "Android"],
  },
  {
    id: "kotlin-coroutines-deep-dive",
    title: "Kotlin Coroutines Deep Dive: From Basics to Production",
    excerpt:
      "Everything you need to know about Kotlin Coroutines for Android — structured concurrency, Flow, cancellation, testing, and common pitfalls to avoid.",
    date: "2023-11-15",
    readTime: "15 min",
    tags: ["Kotlin", "Coroutines", "Flow", "Android"],
  },
];

export const EXPERIENCE = [
  {
    company: "PocketFM",
    role: "Senior Android Engineer",
    period: "2023 – Present",
    description:
      "Building features for 130M+ users on India's leading audio series platform. Kotlin, Jetpack Compose, performance optimization.",
    highlights: [
      "Reduced app cold start time by 35%",
      "Migrated key screens to Jetpack Compose",
      "Built offline download system for audio content",
    ],
  },
  {
    company: "BigBasket",
    role: "Android Engineer",
    period: "2021 – 2023",
    description:
      "Developed and maintained the Android app for India's largest online grocery platform.",
    highlights: [
      "Implemented real-time inventory management screens",
      "Built analytics event tracking system",
      "Improved checkout flow conversion by 12%",
    ],
  },
  {
    company: "ADP",
    role: "Android Developer",
    period: "2019 – 2021",
    description:
      "Developed HR and payroll Android applications for enterprise clients at one of the world's largest HR technology companies.",
    highlights: [
      "Built multi-tenant HR dashboard",
      "Implemented biometric authentication",
      "Maintained Java to Kotlin migration",
    ],
  },
];
