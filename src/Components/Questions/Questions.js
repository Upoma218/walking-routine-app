import React from 'react';
import "./Questions.css"

const Questions = () => {
    return (
        <div className='questions'>
            <h1>Questions Answer</h1>
            <h2>1. How Does React Work?</h2>
            <p>React is a JavaScript library  not a framework that creates user interfaces UIs in a predictable and efficient way using declarative code.
            React works in declarative code.That's because declarative code describes what we want instead of saying how to do it, as you would with imperative code.Components accept an arbitrary input with data a prop and return a React element to declare what should appear on screen. They can interact with other components via props to create a complex UI.But to create a complex UI, you need to order the components in a logical way. To do that, we need to look at what state is in React.
            'State' is the representation — or a snapshot — of the app at any one time.
            Our component tree allows us to create complex UIs that don't confuse states. For instance, the app in our example won't confuse the books state with the authors state, which could provide clashing information. Instead, our app follows a logical path to display the correct information, and will update it accordingly.
            </p>
            <h2>2. What is The Difference Between Props an State?</h2>
            <p>The difference is which component is the data's owner. Locally owned and updated state is controlled by the component itself. Props are read-only and owned by a parent component. Only when a callback function is passed to the child to cause an upstream change can props be changed.A prop can be used to transfer a parent component's state to a child component. Although they both refer to the same variable, only the parent component is able to make changes.
                <br />
                <br />
                <h3>Let's review and examine the key distinctions between props and state:</h3>
                <br />

                a. While the state allows components to create and maintain their own data, props allow them to receive data from the outside.
                <br />
                b. Data is passed using props, whereas the state is used to manage data.
                <br />
                
                c. A component that receives read-only data from props cannot modify it once it has received it from the outside.
                <br />
                e. State data is private but can be altered by its own component cannot be accessed from outside.
                <br />
                f. Only parent components can pass props on to their children unidirectional flow.
                <br />
                
                g. SetState  method should be used to modify the state.</p>
            <h2>3. How Many Tasks We Can Do By Using "useEffect" Without Loading Data From API? </h2>
            <p>The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.But wait!! It keeps counting even though it should only count once! useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.This is not what we want. There are several ways to control when side effects run.We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

         </p>
        </div>
    );
};

export default Questions;