"use client"

import { ArrowUpRight } from "lucide-react";
import { actionCompleted } from "pubnub-demo-integration";

export function ViewerURL({playbackUrl}: {playbackUrl: string}) {

  const handleActionComplete = () => {
    // DEMO: Used by the interactive demo
    actionCompleted({
      action: "Open the viewer URL",
      debug: true,
    });
    // END DEMO: Used by the interactive demo
  };

  return (
    <a
      className="flex items-center gap-1 hover:underline"
      target="_blank"
      rel="noreferrer"
      href={playbackUrl}
      onClick={handleActionComplete}
    >
      Open viewer URL <ArrowUpRight className="h-5 w-5" />
    </a>
  )
}