---
id: cards
title: Adaptive Cards
sidebar_position: 3
---

# Adaptive Cards

## What's an Adpative Card?

"Adaptive Cards are platform-agnostic snippets of UI, authored in JSON, that apps and services can openly exchange. When delivered to a specific app, the JSON is transformed into native UI that automatically adapts to its surroundings. It helps design and integrate light-weight UI for all major platforms and frameworks." - Microsoft

To learn more access [https://adaptivecards.io](https://adaptivecards.io)

## Adaptive Cards View

Within Paracord, Adaptive Cards are used to display messages in a structured and more visual way. They can display texts, forms, images, buttons, variáveis, etc.

You can see the Adaptive Cards within Paraflow in the overview tab and in the messages within the advanced tab.

In the overview tab, clicking on the plus button in the upper right corner will open a window where the cards tab will show all the cards available to be added to the dashboard. By clicking and dragging on a card, you will add it to the overview dashboard and you will be able to see the card with the rendering of the Adaptive Card template and the data from the last message of the associated event.

In the conversations in the advanced tab, if the actor has configured an Adaptive Card template, the messages will be rendered within it.

To implement Adaptive Cards for Paranet actors, you must use the display_out tag below the skill definition. Within this tag, you must place the JSON code for the Adaptive Cards template needed to display the event return.

You can find an example of an actor that implements several Adaptive Cards at [https://github.com/grokit-data/getting-started/tree/main/examples/sample_cards_demo](https://github.com/grokit-data/getting-started/tree/main/examples/sample_cards_demo).

## Adaptive Cards Paranet Actors Implementation

To implement Adaptive Cards for Paranet actors, you must use the display_out tag below the skill definition. Within this tag, you must place the JSON code for the Adaptive Cards template needed to display the event return.

You can find an example of an actor that implements several Adaptive Cards at [https://github.com/grokit-data/getting-started/tree/main/examples/sample_cards_demo](https://github.com/grokit-data/getting-started/tree/main/examples/sample_cards_demo).
