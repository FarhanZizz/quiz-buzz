import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-12'>Frequently Asked Questions</h1>
            <div className='grid lg:grid-cols-3'>
                <div className='mx-5'>
                    <h1 className='text-2xl font-bold text-left my-5'>What is the Purpose of react router?</h1>
                    <p className='text-left'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route s as it changes, and it also gives you tools to update the location using Link s and the history API.</p>
                </div>
                <div className='mx-5'>
                    <h1 className='text-2xl font-bold text-left my-5'>How does context api works?</h1>
                    <p className='text-left'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
                <div className='mx-5'>
                    <h1 className='text-2xl font-bold text-left my-5'>How does useRef work?</h1>
                    <p className='text-left'>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;