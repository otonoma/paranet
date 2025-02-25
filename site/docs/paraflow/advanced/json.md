---
id: json
title: JSON
sidebar_position: 8
---

# JSON

For mostly historical reasons, Paraflow variables cannot hold objects.  All variables are scalars or tables.  However, you can manipulate JSON data in various ways in Paraflow.

+ Skills can receive JSON arguments: Declare the corresponding event argument with the json type to receive JSON data.  The variable will contain the JSON as a string, but declaring the type is json tells the runtime it to expect an object and there eliminates the need for the sender to stringify the object.

+ You make skill requests and call graphql services with objects.  You can use object construction syntax in skill requests and graphql calls, e.g. 

```
pncp user/update_contact(user -> { full_name: $name, $address, $phone });
```

+ You can extract scalar/array fields from an JSON string using object deconstructor syntax, e.g.

```
let { $id, $description } = JsonParse($request);
```

+ You can update an object in JSON form, e.g. 

```
let $new_data = JsonString(JsonParse($data) + { PO: $po });
```