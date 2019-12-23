---
title: K-12 Tour Visuals (2019)
date: "2019-10-20T22:40:32.169Z"
thumbnail: ./k-12-tour.jpg
description: Technical Director
---

We had always known that Mel was going to be on tour once the K-12 film came out. But I don't think anything could have prepared us for the sheer amount of frames we needed to create for the 90+ minutes of the show. It turns out that rendering out 7,000+ frames of a Nuke script takes hours - even on a farm with four machines.

There was one sequence in the tour visuals that was particularly interesting to me. The brief was to have a tree that grows from a sapling, loses its leaves and droops, then regrows the leaves, and finally, spews out orange juice. That's a lot of simulations!

So of course we turned to Houdini for this monumental task. But for the tree generation itself, we turned to SpeedTree. I reached out to them directly as I was having a hard time tracking down a SpeedTree artist, and they offered to help!

Once we had the tree built, it was time to export it via Alembic and bring it into Houdini where we could then go about doing all of the other simulations on top of it.

### Challenges

One of the unique challenges on this one was that Vray for Houdini is still very much in Beta, despite what their marketing would like you to believe. We were continually testing nightly builds throughout the course of production in the hopes that the next build would fix the new bug we would run into each day.

The sheer amount of geometry in this 30m high tree, and the 830k leaves we instanced on it, also presented its own problems in terms of just how much data we were moving around - and ultimately how much we had to transfer to the cloud in order to render it! We also had to forgo using Vray GPU, and render entirely on CPU because it would hang during the geometry stage for about an hour before finally rendering a frame in 5-10 minutes.

##Team

**Seth Josephson** - Creative Director

**Jeff Hodges** - Technical Director

**Diego Grimaldi** - Houdini Artist

**Tom Teller** - CG Lead

**Tanner Merrill** - Lead Compositor

**Ben Jannasch** - Matchmove and 3d Generalist
