import React from 'react'

export const FAQ = () => {
  return (
    <div class="flow-root p-5 dark:text-white">
    <div class="-my-8 divide-y divide-gray-100">
        <details class="group py-8 [&_summary::-webkit-details-marker]:hidden" open>
        <summary class="flex cursor-pointer items-center justify-between">
            <h2 class="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

            <span class="relative h-5 w-5 shrink-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            </span>
        </summary>

        <p class="mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
            in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
            explicabo consequuntur distinctio corporis earum similique!
        </p>
        </details>

        <details class="group py-8 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

            <span class="relative h-5 w-5 shrink-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            </span>
        </summary>

        <p class="mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
            in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
            explicabo consequuntur distinctio corporis earum similique!
        </p>
        </details>
    </div>
    </div>
  )
}
