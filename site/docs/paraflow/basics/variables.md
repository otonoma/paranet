---
id: variables
title: Variables
sidebar_position: 7
---

# Variables

Local variables are created with the `let` statement. Variable types are determined at runtime and include numbers, strings, and tables. In its simplest form, the `let` statement specifies the name of the variable and an expression for its value as in:

let $message = "Hello " + $requester;

## Object Values

However, the `let` statement may also have more complex destructuring left-hand sides. Although variables cannot be objects, there are several places in Paraflow where object values may appear, and the destructuring `let` statement enables those objects to be unpacked into scalar local variables.

One common place objects appear is in the response to a skill request. Skill requests that return data almost always return an object. Here’s an example of a weather skill that returns current conditions as an object:
```
task !FetchWeather($ts) is
  pncp let {
    $humidity,
    temperature_c: $temp,
    wind: {
      speed_km_hr: $wind_speed,
      direction: $wind_dir
    }
  } = weather/current in {
    insert weather($ts, $humidity, $temp, $wind_speed, $wind_dir);
  }
```
The destructuring left-hand side describes how a possibly nested object is mapped to local variables. Each desired field of the source object has a binding that specifies where to store its value. For example, the response object in this example has a field named `temperature_c`, and the binding indicates that the field's value should be assigned to the local variable `$temp`. The `$humidity` reference is just shorthand for `humidity: $humidity`. The `wind` field is a nested object, so its binding is an object that binds its fields to variables.

If this skill were to return the response:
```
{
  "humidity": 67,
  "temperature_c": 18,
  "wind": {
    "speed_km_hr": 12,
    "Direction": "NNE"
  }
}
```
Then the local variables would be:

| Variable     | Value |
|--------------|-------|
| $humidity    | 67    |
| $temp        | 18    |
| $wind_speed  | 12    |
| $wind_dir    | NNE   |


## Table Values

Local variables may also contain tables. See the Local tables section for a detailed description of local table variables.
