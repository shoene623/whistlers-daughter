"use client"

import { useEffect, useState } from "react"

type ChunkedVideoProps = {
  src?: string
  parts?: string[]
  poster?: string
  title: string
}

export function ChunkedVideo({ src, parts, poster, title }: ChunkedVideoProps) {
  const [videoSrc, setVideoSrc] = useState(src)
  const [loading, setLoading] = useState(!src && Boolean(parts?.length))

  useEffect(() => {
    if (src || !parts?.length) return

    let objectUrl: string | undefined
    let cancelled = false

    async function assembleVideo() {
      try {
        const responses = await Promise.all(parts!.map((part) => fetch(part)))
        if (responses.some((response) => !response.ok)) throw new Error("A video segment could not be loaded.")
        const segments = await Promise.all(responses.map((response) => response.arrayBuffer()))
        if (cancelled) return
        objectUrl = URL.createObjectURL(new Blob(segments, { type: "video/mp4" }))
        setVideoSrc(objectUrl)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    assembleVideo()

    return () => {
      cancelled = true
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [parts, src])

  if (loading) {
    return (
      <div className="flex aspect-[9/16] w-full items-center justify-center bg-black px-6 text-center text-sm text-white/80">
        Loading video…
      </div>
    )
  }

  return (
    <video
      controls
      playsInline
      preload="metadata"
      poster={poster}
      src={videoSrc}
      className="aspect-[9/16] h-auto w-full bg-black object-contain"
      aria-label={title}
    >
      Your browser does not support the video player.
    </video>
  )
}
