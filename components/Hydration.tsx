"use client"

import { ReactNode, useEffect, useState } from 'react'

export default function Hydration({children}: {children : ReactNode}) {
        const [isHydrated, setIsHydrated] = useState(false)

        useEffect(() => {
            setIsHydrated(true)
        }, [])

        return (
            <>
                {isHydrated ? (
                    <>{children}</>
                ): (
                    <div className='h-screen flex items-center justify-center'>
                        <h1 className='text-3xl font-bold text-primary'>Loading...</h1>
                    </div>
                )}
            </>
        )
}