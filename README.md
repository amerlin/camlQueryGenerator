# Caml Query Generator
Javascript Camel Query Generator (really pretty simple function)

A simple function to dynamically generate caml queries

Caml Query format 

```
<Where>
  <Eq> Condition... </Eq>
  <And>
     <Eq> Condition ... </Eq>
     <And>
        <Eq> Condition ... </Eq>
        <Eq> Condition ... </Eq>
     </And>
  </And>
</Where>
```

Generate javascript using

tsc caml-generator.ts

Using node.js to run:

run caml-generator.js
