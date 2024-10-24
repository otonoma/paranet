---
id: tables
title: Tables
sidebar_position: 4
---

# Tables

Paraflow programs can define and manipulate application tables that are stored in a database, as well as small in-memory tables represented by a local variable. The language provides statements for creating, deleting, updating, and querying tables.

### Table Parameters

Event parameters declared as tables will match event data represented as an array of objects.
```
<table-type> := "table" "(" <table-column> { "," <table-column> } ")"
<table-column> := <identifier> [ "optional" ] <simple-type>
```
Each element of the event data array must match the table column definitions. It is an error if any element does not include any column or if the value is null unless the column is declared with the `optional` keyword.


## Queries

The query part of statements such as `with` or `foreach` describe a list of tables, constraints, and outputs as follows:
```
<simple-query> := <select-clause> {"," <select-clause>}

<select-clause> :=
  <identifier> "(" <table-binding> {"," <table-binding>} ")"

<table-binding> :=
  <variable> |
  <column> ":" <variable> |
  <column> <relation> <expression>
  <column> "~" <expression>

<relation> := "==" | "<>" | "<" | "<=" | ">" | ">="
```
For example:
```
  order(id == $order_id, $date, total: $order_total)
```
This query would match rows in the `order` table that have an `id` column equal to the value of the `$order_id` variable. The `$date` binding is a shorthand that binds the value of the column by the same name (without the dollar sign) to the variable `$data`. The `total` binding binds the value of the `total` column to the variable `$order_total`. For each row matching the constraint, the `$date` and `$order_total` variables will be assigned the values of the corresponding columns in the row before executing the body part of a statement containing the query.

### Joins

Queries may involve multiple tables, resulting in a join query. For example:
```
  customer(id == $customer_id, $last_order), order(id == $last_order, $total)
```
This query would find rows in the `customer` table that match the `id` constraint, and for each row, it matches rows in the `order` table whose `id` matches the current customer row’s `last_order` column. Outputs from the first table query are available to use as constraints in subsequent table queries, such as `$last_order` in this example.

## With Statement

The `with` statement is used to fetch a single row or aggregate rows from a table.
```
<with-statement> :=
  "with" [ "unique" ] <simple-query> <*-stmt-block>
  [ "else" <*-stmt-block> ";"
```
Note that the `with` statement may appear in events, rules, and tasks, which each have specific allowed statements, so `*-stmt-block` corresponds to the appropriate block for whatever context it appears in, i.e., `event-stmt-block`, `rule-stmt-block`, or `task-stmt-block`.

For example:
```
with order(id == $order_id, $date, total: $order_total) {
  if $order_total >= 1000 {
    !AuthorizeLargeOrder(id -> $order_id);
  }
}
```
The `with` statement is executed by querying the table for rows matching the simple query constraints. The values of the first matching row are used to initialize the output variables declared in the simple query. The block statement is then executed with these variables defined.

If there are no matching rows and there is an `else` part, then that block statement will be executed. It is an error if there are no matching rows and the statement does not include an `else` part. It is also an error if the `unique` keyword is present and more than one row matches.

### Aggregation

The `with` statement can also be used to aggregate columns in a table. For example:
```
with order_item(order_id == $order_id, sum(amount): $order_total) {
⋮
}
```
This example returns the sum of the `amount` column over all rows with a matching `order_id`. Supported aggregate operators include: `min`, `max`, `avg`, `sum`, `count`.

## Loop Statement

The `foreach` statement is used to iterate over any number of rows in a table.
```
<loop-statement> :=
  "foreach" [ "distinct" ] <simple-query> <*-stmt-block>
```
Note that the `foreach` statement may appear in events, rules, and tasks, which each have specific allowed statements, so `*-stmt-block` corresponds to the appropriate block for whatever context it appears in, i.e., `event-stmt-block`, `rule-stmt-block`, or `task-stmt-block`.

For example:
```
foreach user_group(id == $target, $user) {
  !SendReport($report, $user);
}
```
This example creates a new `!SendReport` goal for each user in the `user_group` table with the matching `id` in `$target`.

### Loop Body Variables

Variables first defined within the loop body remain local to that statement block. However, if a variable is defined before the loop and is updated within the loop body, then it will retain its updated value after the loop. In the following example, the variable will have the total number of unsent messages outside the loop.
```
let $unsent = 0;
foreach message(from == $id, $sent) {
  if not $sent {
    let $unsent = $unsent + 1;
  }
}
return { $unsent };
```
## Insert Statement

The `insert` statement is used to insert a new row into a table.
```
<insert-expression> :=  "insert" <identifier> "(" <insert-binding> {"," <insert-binding>} ")"

<insert-binding> :=
  <variable> |
  <column> ":" <expression>
```
For example:

insert bug($title, open: 1);

The arguments are the column name followed by an expression value for each column. Variable references are shorthand for providing the variable's value for the column with the same name, i.e., `$target` in the example is shorthand for `target: $target`.

The `insert` statement may also be used as the right-hand side of an assignment, in which case it returns the `id` of the new row:

let $row_id = insert bug($title, open: 1);

## Update Statement

The `update` statement is used to update rows of a table.
```
<update-statement> :=
  "update" <identifier> "(" <update-binding> {"," <update-binding>} ")"

<update-binding> :=
  <variable> |
  <variable> "?" |
  <column> ":" <expression> |
  <column> ":" "incrBy" "(" <expression> ")" |
  <column> ":" "decrBy" "(" <expression> ")" |
  <column> ":" "append" "(" <expression> ")" |
  <column> <relation> <expression>
  <column> "~" <expression>
```
The `update` statement will update all rows that match the constraints in the `update` binding, replacing values of columns with the expressions provided in the `update` binding.

The following predefined functions have special meaning in the `update` binding:

- `incrBy`: Adds the numeric value of the expression to the current value of the column.
- `decrBy`: Subtracts the numeric value of the expression to the current value of the column.
- `append`: Appends the string value of the expression to the current value of the column.

### Conditional Update

The `update` statement also supports conditionally updating a column with the `<variable> "?"` syntax. When this syntax is used, the column will only be updated if the variable is defined and not null. In the following example, the columns `a` and `b` are conditionally updated.
```
event setOverride($id int, $a optional string, $b optional string) {
  update item(id == $id, $a?, $b?);
}
```
The column `a` is only updated if the `$a` parameter is provided and not null. Likewise, column `b` is only updated if the `$b` parameter is provided and not null. The behavior is equivalent to the following tedious code:
```
event setOverride($id int, $a optional string, $b optional string) {
  if $a and $b {
    update item(id == $id, $a, $b);
  } else if $a {
    update item(id == $id, $a);
  } else if $b {
    update item(id == $id, $b);
  }
}
```
Note that this example is not equivalent to the following update, which would set the `a/b` columns to null if `a/b` were not provided.
```
update item(id == $id, $a, $b);
```
## Delete Statement

This statement deletes rows from a table that match the given constraints.
```
<delete-statement> :=
  "delete" <identifier> "(" <delete-binding> {"," <delete-binding>} ")"

<delete-binding> :=
  <column> <relation> <expression>
  <column> "~" <expression>
```
## Local Tables

Local variables may represent in-memory tables and can be used in the same way as a database table. Local tables may appear as parameters to events, they may be returned from a PNCP skill request or RPC method, and they may be created locally. The following examples illustrate various uses of local tables.

### Event Parameters

This example illustrates how to use a table event parameter.
```
event removeItems($items: table(sku string)) {
  foreach $items($sku) {
    delete products(sku == $sku);
  }
}
```
The event expects the `items` input to be an array of objects having a `sku` string field. The body loops over each row in the local table and deletes the corresponding row in a database table.

### Skill Request

A skill request may return arrays of data that can be bound to a local variable and used as a table. This example illustrates the use of a table returned by a skill request.
```
task !FetchUpdates($last_fetch) is
  pncp let {
    transactions: $updates(timestamp, description, amount)
  } = transactions/new_since(time -> $last_fetch) in {
    foreach $updates($timestamp, $description, $amount) {
      insert shadow($timestamp, $description, $amount);
    }
  }
```
In this example, there is an actor that maintains a store of transactions and a skill for querying transactions created since a given time. Its response has a `transactions` field that is an array of transaction objects. Each transaction object has a `timestamp`, `description`, and `amount`. The `let` statement is used to capture the response `transactions` into the local table variable `$updates`.

The local table variable is used in the “in” block to update a local shadow database with the transactions in the local table.

### Select Expressions

The `select` expression can be used to select and transform data from a database table and store the resulting rows in a local table variable.

One useful use case for creating a local table is to return tabular data from a skill request. Consider implementing the `transactions/new_since` skill from the example in the previous section. That skill might be implemented as in:
```
task !SendNewSince($time) {
  let $transactions(timestamp, description, amount) = 
   select transaction_tbl(timestamp > $time, timestamp, description, amount);
  pncp response($transactions);
}
```
### Local Creation

Another way to create a local table is from scratch. This is one way to easily filter and transform data before using it. The following example illustrates local table creation.
```
event getActive($threshold double) {
  let $active(*) = table();
  foreach location_tbl($id, $activity, $easting, $northing) {
    if $activity > $threshold {
      let { $lat, $lon } = ToGPS($easting, $northing);
      insert $active($id, $lat, $lon);
    }
  }
  return { $active };
}
```