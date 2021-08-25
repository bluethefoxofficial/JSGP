# JSGP (WORK IN PROGRESS DO NOT USE YET)
JSGP (Java Script Get Post) is a libary specilizing in simple Get Post requests with parmeters




![image info](./jsgp_logo.png)

## JSGP use case


JSGP is used for when you dont want to use the long complicated default javascript way of performing a get or post request, this also can be used in place os JQUERY's get post function.

## does JSGP support parameters

yes by default JSGP supports parameters, for both GET and POST requests.

## does JSGP do anything else other than get and post requests.

currently not but you can also get json data and have it parsed automatically with JSGP.


### simple JSGP example with console output.

```javascript
jsgp = new JSGP();

console.log(
    jsgp.getrequest("example.com/api/", { "Hello": "world" })
);
```