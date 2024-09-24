# Parcellab codingchange

**At parcelLab we build tools that integrate with the worlds best online retailers and are used by millions of people - every day! That is why we are really into creating outstanding user experiences.**

In this scenario, you are Frontend Engineer at parcelLab and you start working on a new project of building a web app that displays the order status and the shipping information for orders. Because your fellow backend developer colleague is late with his part, you will need to mock an api that returns one order from a list of orders `orders.json` based on the user's input and display it in a appealing way.

The api that you mock will be (when finished) hosted on `https://api.prcl.dev` and the endpoints URL will look something like that: `/orders/{{orderNumber}}?zip={{zipCode}}`. You can use any tool you like for mocking the api.

### The app should have 2 views:

1. **Sign In / User Input view** - here the user can input an **order number** and a **zip code** (for verification - so that it is not possible to get access to order information without knowing the zip code of it) and a submit button. If the entered order number does not exist in the DB (orders.json) or the zip code does not match, you can show a error here as a notification or on a new page. Your choice.
2. **Order View** - after the user typed in a valid order number that exists in the DB, user will land on this page. It should view the order details and the shipping (in parcelLab lang "tracking") information.


This is how this could look like:

<img src="login-mockup.avif" >
<img src="tacking-mockup.avif" >

## how it works
got ot my website <a href="https://parcellab.mannseicher.com" target="_blank">parcellab.mannseicher.com</a>