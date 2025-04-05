import { Safari } from '@/components/magicui/safari';
import Iphone15Pro from '@/components/magicui/iphone-15-pro';

export default function TheHiveCard() {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
          A real-time messaging app for 1-on-1 and group conversations.
        </p>

        <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
          Features
        </h2>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
          <li>
            ✅ Send messages in <strong>1-on-1</strong> and{' '}
            <strong>group chats</strong>
          </li>
          <li>
            ✅ Create new <strong>conversations</strong> with users
          </li>
          <li>
            ✅ Create and manage <strong>groups</strong>
          </li>
          <li>
            ✅ Update <strong>user information</strong> (e.g., profile details)
          </li>
          <li>✅ Secure REST API for communication</li>
          <li>✅ Responsive design with TailwindCSS</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
          Demo
        </h2>

        <a
          href="https://thehive404.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 mb-6 px-8 py-4 text-white text-xl font-semibold rounded-xl shadow 
             bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3]
             transform transition-transform duration-300 ease-in-out
             hover:scale-105 active:scale-95"
        >
          🚀 Live Demo
        </a>

        <p>
          🔗{' '}
          <a
            href="https://github.com/Track404/Messaging-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pl-1 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3] 
               bg-clip-text text-transparent font-semibold hover:underline 
               transform transition-transform duration-300 ease-in-out 
               hover:scale-105 active:scale-95"
          >
            FrontEnd Repo
          </a>
        </p>

        <p>
          🔗{' '}
          <a
            href="https://github.com/Track404/Messaging-app-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pl-1 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3] 
               bg-clip-text text-transparent font-semibold hover:underline 
               transform transition-transform duration-300 ease-in-out 
               hover:scale-105 active:scale-95"
          >
            Backend Repo
          </a>
        </p>

        <Safari
          imageSrc="/src/assets/thehive-desktop.png"
          className="w-full h-full mt-5 mb-5"
        />
        <Iphone15Pro
          src="/src/assets/thehive-mobile.png"
          className="mx-auto w-1/2 h-full mt-5 mb-5"
        />

        <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
          Technologies
        </h2>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
          <li>🛠 Frontend: React, TailwindCSS</li>
          <li>🚀 Backend: Node.js, Express.js</li>
          <li>🛢 Database: PostgreSQL</li>
          <li>🔐 Authentication: JWT</li>
          <li>📡 API Type: REST API</li>
        </ul>
      </div>
    </>
  );
}
