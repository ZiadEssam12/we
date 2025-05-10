// vercel-build.js
const { execSync } = require("child_process");

// Generate Prisma client
console.log("Generating Prisma client...");
execSync("prisma generate", { stdio: "inherit" });

// Run Next.js build
console.log("Building Next.js app...");
execSync("next build", { stdio: "inherit" });
