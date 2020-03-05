import React from 'react';
import Link from 'next/link';
import User from '../../components/user';

const authIndexPage = (props) => (  
    <div>
        <h1>The Auth Index Page - {props.appName}</h1>
        <p>Go to <Link href="/"><a>Home</a></Link></p>
        <User name ='Max' age={28} />
    </div>
);

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve({appName:'Super App'});
        }, 1000);
    });
return promise;
};

export default authIndexPage;