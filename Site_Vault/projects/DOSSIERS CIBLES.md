---
title: DOSSIERS CIBLES
description: A short playable experience designed to highlight biases found in algorithms used by the French government to detect social welfare fraud.
date: "2026"
headerimage: /assets/img/LogoCover.png
tags:
  - spotlight
  - designresearch
  - uxdesign
layout: layouts/projects.njk
introduction: How might French citizens be made aware of forms of algorithmic discrimination embedded in welfare allocation services?
role: UX Designer
orgs: Changer de Cap
funded: Amnesty International
collaborator: Mourdjen Bari
location: Paris, France
permalink: /projects/algoethiques/
---
## Overview

| **BRIEF**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | **APPROACH**                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dossiers Cibles (or Targeted Profiles)<br>is a short experience that seeks to sensitize users to the stigmatizing effects of the current punitive processes involved in addressing social fraud by advocating for more respectful and supportive approaches to fighting fraud through filing support.  <br><br>Since 2021, [Changer de Cap](https://changerdecap.net/) has been documenting forms of abuse and discrimination embedded in the French digital services responsible for coordinating access to social welfare ([CAF](https://caf.fr/)). The organization seeks to provide a counter-power to the French government's growing policing and stigmatization of households benefiting from social welfare, operated through a conflation of fiscal fraud and social fraud. Based on a 2022 study, while the former is estimated to rise up to [100 billion euros of yearly fraud, and the latter up to 13 billion euros](https://www.modernisation.gouv.fr/files/2025-05/Fraude%20fiscale%20et%20sociale%20_VF%20mise%20en%20accessibilit%C3%A9.pdf), recent legal proposals have focused on targeting risks of legal frauds, often affecting already vulnerable groups.<br> | I worked with Mourdjen Bari, who initiated the development of this micro-game, to outline the intended experience and provide a UX structure that helped the team clarify its objectives, translate them into prototypes, and test them with lawyers, tech advocates, and members of civil society. |



## Outlining the experience

![[Algosjourneymap.png]]

My role on this project has been translating key messages and impressions to be conveyed to the player into practical UX mechanics: game mechanics, info screens, interactive carousels. I used a simple journey map to help the developer Mourdjen Bari, connect core messages and objectives, with UX touchpoints.

The final experience invites the player to "flag at-risk profiles" according to their own understanding of each household's situation, based on fictionalized data. Once at risk profiles are identified through a draggable ranking system, players are "forced" to order an audit of the household (as no other alternative currently exists), and be confronted by the repercussions the audit and preparing for it may have on the household's day to day activities.

The experience closes with further information on where to get support, should one find themselves in this situation, and highlighting a key bias of the system: it does not identify fraud risks, but rather flags less common profiles, of individuals having to for instance juggle multiple jobs to make ends meet.


## Gamifying "risk-assessement"

![[Mockups_JugeAlgo.png]]


The experience was developed in Gemini studio by Mourdjen Bari, with several short iteration loops between formulating UX flows and prototyping them. It is structured around a handful of key screens, centering the act of risk-assessment by the CAF and its effects on the households it chooses to audit. 

For the user, this implies discovering a list of household profiles and reordering them from most to least risk prone. The user's ordering is then reviewed and critiqued by a character representing the CAF algorithm explaining how it is meant to be done.


## Defining a visual identity

:::carousel

![[LogoTests01.png]]

![[Screenshot 2026-07-08 165610.png]]
carousel:::

While the initial protypes favored an Orwellian tone, I advocated for creating a pastiche of existing French government platforms to provide a believable immersion, without running the risk of being mistaken for one.

I created two simple visual directions, one focused believability and values of solidarity (the stated purpose of the CAF), and the other on satire and surveillance (echoing the critique of the platform). The visual directions were conveyed through the production of several logo options and dedicated color schemes which were then applied to key screens and translated into design tokens (namely fonts and colors).

## Finalizing the UX

![[iphone-15-pro-threescreens.png]]
As mentioned above, I provided guidelines for the design of the interface and reviewed their integration into the final version of the experience. It has since been tested further by activists and CAF beneficiaries who have praised the experience for its conciseness and impact.

The experience is now live and can be found [here](https://droitsnumeriques.fr/jouer/dossiers-cibles/).