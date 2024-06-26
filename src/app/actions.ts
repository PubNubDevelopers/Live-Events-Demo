"use server";

import type { Stream } from "livepeer/models/components";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { actionCompleted } from "pubnub-demo-integration";

export const createLivestream = async () => {
  try {
    const response: Stream = await fetch("https://livepeer.studio/api/stream", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.STUDIO_API_KEY ?? "none"}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Pubnub <> Livepeer",
      }),
    }).then((response) => response.json());

    if (response.streamKey && response.playbackId) {
      cookies().set("stream-key", response.streamKey);
      cookies().set("playback-id", response.playbackId);
    } else {
      return {
        success: false,
        error: "No stream key created.",
      } as const;
    }

    revalidatePath("/");

    // DEMO: Used by the interactive demo
    actionCompleted({
      action: "Create a livestream",
      debug: true,
    });
    // END DEMO: Used by the interactive demo

    return {
      success: true,
    } as const;
  } catch (e) {
    console.error(e);
    return {
      success: false,
      error: "Could not create livestream.",
    } as const;
  }
};
