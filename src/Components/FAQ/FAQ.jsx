import React from 'react';
import "./FAQ.css"

const FAQ = () => {
    return (
        <div className='faq-container'>
            <div className="faq">
                <h3>1. What is the difference between props and state?</h3>
                <p>state can be changed, depending on click handler but props are read-only. It cannot be changed. Props used for passing data.</p>
            </div>


            <div className="faq">
                <h3>2. How useState works?</h3>
                <p>useState is react Hook that allows stateful logic. It has tow argument first argument will be the default value of useState and second argument is use for update the first argument.</p>
            </div>


            <div className="faq">
                <h3>3. What can do useEffect except data load?</h3>
                <p>useEffect can do many things except load data. We can use ueEffect for Set up any event listener, to update any document title, to manage timer.</p>
            </div>


            <div className="faq">
                <h3>4. How useState works?</h3>
                <p>React work on the browser using virtual DOM. When we render any component React create a virtual DOM for that component and set a key for that specific component then when we change any thing then react find out that part of the virtual DOM where the exact change by using its diff algorithm. Then it change that particular DOM of real DOM.</p>
            </div>


        </div>
    );
};

export default FAQ;