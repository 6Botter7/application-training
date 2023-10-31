# Child Object Locator

## Background

Recursive functions can also be used to work with nested objects, 
which is especially useful when you need to search for specific data within a complex nested structure.
For example a recursive function that searches for a key within a nested JavaScript object.


## The Challenge

Write a function which will take a nested object, and return an array containing any child objects if a key and value pair match.

### Edge Cases

- If you provide a key that does not exist, return null.
- If you provide a key that exists, but a value does not match, return null.

### Test Data

Provided below are test data structures you can use to test your data. As a bonus, you can create a helper test function which you can provide how many levels deep you want a nested structure to be,
and it will generate a nested structure with random key-value pairs for you.

A deeply nested structure with value and description properties, as well as children arrays.

```json
{
  "id": "root",
  "value": 42,
  "description": "Root Object",
  "children": [
    {
      "id": "child1",
      "value": 17,
      "description": "First Child",
      "children": [
        {
          "id": "grandchild1",
          "value": 10,
          "description": "First Grandchild"
        },
        {
          "id": "grandchild2",
          "value": 23,
          "description": "Second Grandchild"
        }
      ]
    },
    {
      "id": "child2",
      "value": 56,
      "description": "Second Child"
    }
  ]
}
```

Same as above but instead of children, there's elements arrays.

```json
{
  "id": "root",
  "value": 42,
  "description": "Root Object",
  "elements": [
    {
      "id": "element1",
      "value": 17,
      "description": "First Element",
      "elements": [
        {
          "id": "subelement1",
          "value": 10,
          "description": "First Subelement"
        },
        {
          "id": "subelement2",
          "value": 23,
          "description": "Second Subelement"
        }
      ]
    },
    {
      "id": "element2",
      "value": 56,
      "description": "Second Element"
    }
  ]
}
```

Another example with a mix of both children and elements arrays.

```json
{
  "id": "root",
  "value": 42,
  "description": "Root Object",
  "children": [
    {
      "id": "child1",
      "value": 17,
      "description": "First Child",
      "elements": [
        {
          "id": "element1",
          "value": 10,
          "description": "First Element"
        },
        {
          "id": "element2",
          "value": 23,
          "description": "Second Element"
        }
      ]
    },
    {
      "id": "child2",
      "value": 56,
      "description": "Second Child",
      "elements": [
        {
          "id": "subelement1",
          "value": 30,
          "description": "Subelement One"
        },
        {
          "id": "subelement2",
          "value": 22,
          "description": "Subelement Two"
        }
      ]
    }
  ]
}
```
A 5-level deep nested structure.

```json
{
  "id": "level1",
  "value": 50,
  "description": "Level 1",
  "children": [
    {
      "id": "level2",
      "value": 25,
      "description": "Level 2",
      "children": [
        {
          "id": "level3",
          "value": 12,
          "description": "Level 3",
          "elements": [
            {
              "id": "level4",
              "value": 6,
              "description": "Level 4",
              "elements": [
                {
                  "id": "level5",
                  "value": 3,
                  "description": "Level 5"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

