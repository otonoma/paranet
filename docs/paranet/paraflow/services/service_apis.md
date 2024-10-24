---
id: service-apis
title: Service API's
sidebar_position: 1
---

# Service APIs

A Paraflow task may be used to make calls to any external service that provides a GraphQL interface. The `on` clause of the Paraflow task declaration provides the default URL of the endpoint providing the GraphQL service. The endpoint may also be overridden in individual calls to the service via the `rpc` statements.

The following example illustrates how to call a GraphQL service from Paraflow.
```
task !RegisterSeg($id) on "graphql:http://localhost:8000/graphql" {
  let { $desc, $lat, $lon } = @getSegmentDetail($id);
  insert segment($desc, $lat, $lon);
}
```
Most GraphQL requests will return data as an object, and this example demonstrates how that can be unpacked into local variables. For more detail about destructuring assignments see the Variables section.