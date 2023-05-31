import React from "react";
import DynamicHeader from "../../routes/DynamicHeader";

const Blog = () => {
  return (
    <div className="mb-20 px-5 md:px-40">
      <DynamicHeader title="Blog"></DynamicHeader>
      <h1 className="text-4xl text-center font-bold mt-10 text-orange-600" >Blog</h1>
      <div>
        <h1 className="text-center text-4xl text-green-600 font-bold mt-2">
          Question And Answer
        </h1>
        <div className="mt-6">
          <h3 className="text-2xl">
            <span className="font-bold">Q</span>: What is an access token and
            refresh token? How do they work and where should we store them on
            the client-side?
          </h3>
          <p>
            <span className="font-bold">A</span>: An access token is a
            short-lived credential used for authentication and authorization. It
            is sent with each API request to access protected resources. A
            refresh token is a long-lived credential used to obtain a new access
            token when the current one expires. Access tokens are typically
            stored in memory or secure storage mechanisms like cookies, local
            storage, or session storage on the client-side. Refresh tokens
            should be stored securely in a secure HTTP-only cookie or a
            protected storage mechanism to prevent unauthorized access. Proper
            storage ensures the security of tokens and minimizes the risk of
            theft or misuse.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl">
            <span className="font-bold">Q</span>: Compare SQL and NoSQL
            databases?
          </h3>
          <p>
            <span className="font-bold">A</span>: SQL databases are relational
            and use structured query language for data storage and retrieval.
            NoSQL databases are non-relational and provide flexible schema with
            horizontal scalability. SQL databases are suitable for complex
            relationships and transactions, while NoSQL databases excel in
            handling large amounts of unstructured or semi-structured data with
            high scalability.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl">
            <span className="font-bold">Q</span>: What is express js? What is
            Nest JS?
          </h3>
          <p>
            <span className="font-bold">A</span>: Express.js is a minimalistic
            and flexible web application framework for Node.js. It simplifies
            the process of building web applications and APIs by providing a
            robust set of features for handling HTTP requests, routing,
            middleware, and more. NestJS is a progressive and opinionated
            framework for building efficient and scalable server-side
            applications with Node.js. It is built on top of Express.js and adds
            additional features and architectural patterns inspired by Angular.
            NestJS promotes modular, testable, and extensible code organization
            using TypeScript.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl">
            <span className="font-bold">Q</span>: What is MongoDB aggregate and
            how does it work?
          </h3>
          <p>
            <span className="font-bold">A</span>:MongoDB's aggregate is a
            powerful method for performing advanced data aggregation operations
            on collections. It allows you to process and transform data using a
            pipeline of stages, including grouping, filtering, sorting,
            projecting, and more. Aggregation pipelines in MongoDB provide a
            flexible and efficient way to analyze and summarize data based on
            specified criteria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
