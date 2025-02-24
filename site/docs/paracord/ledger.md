---
id: ledger
title: Ledger
sidebar_position: 7
---

# Ledger

Ledger is place to explore the Paranet actors conversations.

## Ledger Search Page

The Ledger search is displayed in a table with the following fields: conversation ID, state, timestamp (createdAt), initiator (actor name and version), receiver (actor name and version), subject, and action, and alert badged. The ledger table can be sorted by all fields except the conversation ID. There is a load more button to retrieve more data from the Paranet.

The Ledger data can be filtered by search (open text field), from and to timestamps (date field selections), and multi-options: states, initiators, recipients, subjects, and actions.

It's possible to access the conversation detail page for each table row.

### Saved Filters

After selecting filters to apply to the ledger search, you will be asked to name the filters to save them for later use. These filters are displayed on the Saved Filters tab.Clicking on the filter name, the filter will be loaded and applied to the Ledger search, and this filter can be updated by adding or excluding filter options. You also can delete the saved filters.

## Ledger Details Page

At the top of the details page, we present key information about the conversation. The information includes conversation ID, parent ID (if it exists), children (if it exists), creation time, state, subject, action, initiator, and recipient actor.

Then, we display a list of the conversation's messages. We show each message ID, time, and sender, and type on the first level. When we click on the message item, we display the match strategy, action, data (JSON viewer or string format), and callback.
