---
id: parameters
title: Parameters
sidebar_position: 1
---

# Parameters

The parameter list is a comma-separated list of parameter definitions, which include the name and type of the parameter.
```
<parameter-list> := "(" <parameter> { "," <parameter> } ")"
<parameter> := <$identifier> [ "optional" ] <parameter-type>
<parameter-type> :=
  <simple-type> |
  <table-type> |
  "json"

<simple-type> :=
  "int" |
  "double" |
  "string"
```
When an event is received, the event data is matched against the parameter list of the event declaration. It is an error if the event data does not include any parameter, or if the value is null unless the parameter is declared with the `optional` keyword.

Parameters declared as type `json` will match any scalar or object value; however, the parameter value will be assigned the string representation of that value. Where appropriate, the parameter may be used with the `ParseJson` function. See the Objects section for details.